#!/usr/bin/env python3

from datetime import datetime
from os import name, getenv
from json import loads
from re import compile, IGNORECASE, sub
from pathlib import Path
from configparser import ConfigParser
from argparse import ArgumentParser
from shutil import copytree, ignore_patterns
from urllib.request import urlopen
from subprocess import check_output
from io import BytesIO
from zipfile import ZipFile

"""
install(-betterfox).py

Usage:
    python install.py
    

When called without arguments, it will:
- Backup your current firefox profile
- Automatically download user.js from the latest Betterfox release compatible with your Firefox version into the profile
- Apply user-overrides in the same directory 

However, you can check out install.py/betterfox-install.exe --help to customise most behaviours!

Limitations:
- When using a different repositoy as a source, that repository needs to use the same releases workflow
- Over time, the get_releases might not list older releases due to limited page size. This can be expanded down the road, though

Building into an exe (on Windows):
- pipx install pyinstaller  (note: you can try without pipx, but this didn't work for me)
- Run:
  - CMD:  `pyinstaller --onefile --name install-betterfox install.py && move %cd%\\dist\\install-betterfox.exe %cd% && del install-betterfox.spec && rmdir /S /Q build && rmdir dist`
  - BASH: `pyinstaller --onefile --name install-betterfox install.py && && mv dist/install-betterfox.exe . && rm install-betterfox.spec && rm -rf ./build/ && rmdir dist`
  (Sorry, didn't want to add a .gitignore solely for the install script)
- Done!

If there's any problems with the script, feel free to mention @Denperidge on GitHub!
"""

re_find_version = compile(r"mozilla.org/.*?/firefox/(?P<version>[\d.]*?)/", IGNORECASE)
re_find_overrides = r"(overrides|prefs).*\n(?P<space>\n)"

INSTALLATIONS_TO_CHECK = [
    # windows
    {
        "command": [str(Path("C:/Program Files/Mozilla Firefox/firefox"))],
        "root": Path(getenv("APPDATA") or "").joinpath("Mozilla/Firefox").resolve(),
    },
    # linux
    {
        "command": ["firefox"],
        "root": Path.home().joinpath(".mozilla/firefox").absolute(),
    },
    # flatpak
    {
        "command": ["flatpak", "run", "org.mozilla.firefox"],
        "root": Path.home().joinpath(".var/app/org.mozilla.firefox/.mozilla/firefox").absolute(),
    },
]


# command is a list, eg. ["firefox"] or ["flatpak", "run", "org.mozilla.firefox"]
def _get_firefox_version(command):
    ver_string = check_output(command + ["--version"], encoding="UTF-8")
    return ver_string[ver_string.rindex(" ")+1:].strip()

def _get_default_firefox_version_and_root():
    print("Searching for Firefox installation...")
    for installation in INSTALLATIONS_TO_CHECK:
        try:
            print(f"  '{' '.join(installation['command'])}': ", end="")
            version = _get_firefox_version(installation["command"])
            print("YES")
            print(f"Root: {installation['root']}")
            return version, installation["root"]
        except Exception:
            print("no")
            continue
    
    raise Exception("Firefox binary not found. Please ensure Firefox is installed and the path is correct.")

def _get_default_profile_folder(firefox_root):
    config_path = firefox_root.joinpath("profiles.ini")
    
    print(f"Reading {config_path}...")

    config_parser = ConfigParser(strict=False)
    config_parser.read(config_path)

    path = None
    for section in config_parser.sections():
        if "Default" in config_parser[section]:
            section_default_value = config_parser[section]["Default"]
            if section_default_value:
                print("Default detected from section: " + section)
                # Confirm whether a 0 value is possible, keep fallback until then                 
                if section_default_value == "0":
                    continue
                if section_default_value == "1":
                    path = config_parser[section]["Path"]
                else:
                    path = section_default_value
                break
    
    if path is not None:
        return firefox_root.joinpath(path)
    else:
        raise Exception("Could not determine default Firefox profile! Exiting...")

def _get_releases(repository_owner, repository_name):
    releases = []
    raw_releases = loads(urlopen(f"https://api.github.com/repos/{repository_owner}/{repository_name}/releases").read())
    for raw_release in raw_releases:
        name = raw_release["name"] or raw_release["tag_name"]  # or fixes 126.0 not being lodaded
        body = raw_release["body"]


        # Find which firefox releases are supported. Manual overrides for ones that don't have it written in their thing!
        if name == "user.js v.122.1":
            supported = ["107.0", "107.1", "108.0", "108.0.1", "108.0.2", "109.0", "109.0", "110.1", "110.0.1", "111.0", "111.0.1", "112.0", "112.0.1", "112.0.2", "113.0", "113.0.1", "113.0.2", "114.0", "114.0.1", "114.0.2", "115.0", "115.0.1", "115.0.2", "115.0.3", "115.1.0", "115.10.0", "115.11.0", "115.12.0", "115.13.0", "115.14.0", "115.15.0", "115.16.0", "115.16.1", "115.17.0", "115.2.0", "115.2.1", "115.3.0", "115.3.1", "115.4.0", "115.5.0", "115.6.0", "115.7.0", "115.8.0", "115.9.0", "115.9.1", "116.0", "116.0.1", "116.0.2", "116.0.3", "117.0", "117.0.1", "118.0", "118.0.1", "118.0.2", "119.0", "119.0.1", "120.0", "120.0.1", "121.0", "121.0.1", "122.0", "122.0.1"]
        elif name == "user.js 116.1":
            supported = ["116.0", "116.0.1", "116.0.2", "116.0.3"]
        elif name == "Betterfox v.107":
            supported = ["107.0"]
        elif "firefox release" in body.lower():
            trim_body = body.lower()[body.lower().index("firefox release"):]
            supported = re_find_version.findall(trim_body)
            if len(supported) == 0:
                print(f"Could not parse release in '{name}'. Please post this error message on https://github.com/{repository_owner}/{repository_name}/issues")
                continue
        else:
            print(f"Could not find firefox release header '{name}'. Please post this error message on https://github.com/{repository_owner}/{repository_name}/issues")
            continue

        releases.append({
            "name": name,
            "url": raw_release["zipball_url"],
            "supported": supported,
        })
    return releases

def _get_latest_compatible_release(releases):
    for release in releases:
        if firefox_version in release["supported"]:
            return release
    return None

def backup_profile(src):
    dest = f"{src}-backup-{datetime.today().strftime('%Y-%m-%d-%H-%M-%S')}"
    
    copytree(src, dest, ignore=ignore_patterns("*lock"))
    print("Backed up profile to " + dest)


def download_betterfox(url):
    data = BytesIO()
    data.write(urlopen(url).read())
    return data  

def extract_betterfox(data, profile_folder):
    zipfile = ZipFile(data)
    userjs_zipinfo = None
    for file in zipfile.filelist:
        if file.filename.endswith("user.js"):
            userjs_zipinfo = file
            userjs_zipinfo.filename = Path(userjs_zipinfo.filename).name

    if not userjs_zipinfo:
        raise BaseException("Could not find user.js!")
    
    return zipfile.extract(userjs_zipinfo, profile_folder)


def list_releases(releases, only_supported=False, add_index=False):
    print()
    print(f"Listing {'compatible' if only_supported else 'all'} Betterfox releases:")
    if only_supported:
        print("Use --list-all to view all available releases")
    else:
        print(f"Releases marked with '> ' are documented to be compatible with your Firefox version ({firefox_version})")
    print()

    i = 0
    for release in releases:
        supported = firefox_version in release["supported"]
        if not only_supported or (only_supported and supported):
            print(f"{f'[{i}]' if add_index else ''}{'> ' if supported else '  '}{release['name'].ljust(20)}\t\t\tSupported: {','.join(release['supported'])}")
        i+=1

def _press_enter_to_exit(args):
    if not args.no_wait_for_exit:
        input("Press ENTER to exit...")

if __name__ == "__main__":
    firefox_version, firefox_root = _get_default_firefox_version_and_root()

    default_profile_folder = _get_default_profile_folder(firefox_root)

    argparser = ArgumentParser(

    )
    argparser.add_argument("--overrides", "-o", default=default_profile_folder.joinpath("user-overrides.js"), help="if the provided file exists, add overrides to user.js. Defaults to " + str(default_profile_folder.joinpath("user-overrides.js"))),
    
    
    advanced = argparser.add_argument_group("Advanced")
    advanced.add_argument("--betterfox-version", "-bv", default=None, help=f"Which version of Betterfox to install. Defaults to the latest compatible release for your installed Firefox version")
    advanced.add_argument("--profile-dir", "-p", "-pd", default=default_profile_folder, help=f"Which profile dir to install user.js in. Defaults to {default_profile_folder}")
    advanced.add_argument("--repository-owner", "-ro", default="yokoffing", help="owner of the Betterfox repository. Defaults to yokoffing")
    advanced.add_argument("--repository-name", "-rn", default="Betterfox", help="name of the Betterfox repository. Defaults to Betterfox")
    
    disable = argparser.add_argument_group("Disable functionality")
    disable.add_argument("--no-backup", "-nb", action="store_true", default=False, help="disable backup of current profile (not recommended)"),
    disable.add_argument("--no-install", "-ni", action="store_true", default=False, help="don't install Betterfox"),
    
    modes = argparser.add_mutually_exclusive_group()
    modes.add_argument("--list", action="store_true", default=False, help=f"List all Betterfox releases compatible with your version of Firefox ({firefox_version})")
    modes.add_argument("--list-all", action="store_true", default=False, help=f"List all Betterfox releases")
    modes.add_argument("--interactive", "-i", action="store_true", default=False, help=f"Interactively select Betterfox version")

    behaviour = argparser.add_argument_group("Script behaviour")
    behaviour.add_argument("--no-wait-for-exit", "-nwfe", action="store_true", default=False, help="Disable 'Press ENTER to exit...' and exit immediately"),

    args = argparser.parse_args()

    releases = _get_releases(args.repository_owner, args.repository_name)
    selected_release = None

    if args.list or args.list_all:
        list_releases(releases, args.list)
        _press_enter_to_exit(args)
        exit()

    if not args.no_backup:
        backup_profile(args.profile_dir)

    if args.betterfox_version:
        # If not None AND not string, default value has been used
        if not isinstance(args.betterfox_version, str):
            selected_release = args.betterfox_version
            print(f"Using latest compatible Betterfox version ({selected_release['name']})...")
        # If string has been passed
        else:
            selected_release = next(rel for rel in releases if rel['name'] == args.betterfox_version)
            print(f"Using manually selected Betterfox version ({selected_release['name']})")
    
    if not args.betterfox_version:
        selected_release = _get_latest_compatible_release(releases)
        
    if args.interactive or not selected_release:
        if not selected_release:
            print("Could not find a compatible Betterfox version for your Firefox installation.")
        
        list_releases(releases, False, True)
        selection = int(input(f"Select Betterfox version, or press enter without typing a number to cancel [0-{len(releases) - 1}]: "))

        selected_release = releases[selection]



    if not args.no_install:
        userjs_path = extract_betterfox(
            download_betterfox(selected_release["url"]),
            args.profile_dir
        )
        print(f"Installed user.js to {userjs_path} !")


        if Path(args.overrides).exists():
            print("Found overrides at " + str(args.overrides))

            with open(str(args.overrides), "r", encoding="utf-8") as overrides_file:
                overrides = overrides_file.read()
            with open(userjs_path, "r", encoding="utf-8") as userjs_file:
                old_content = userjs_file.read()
                new_content = sub(re_find_overrides, "\n" + overrides + "\n", old_content, count=1, flags=IGNORECASE)
            with open(userjs_path, "w", encoding="utf-8") as userjs_file:
                userjs_file.write(new_content)
        else:
            print(f"Found no overrides in {args.overrides}")

    _press_enter_to_exit(args)

