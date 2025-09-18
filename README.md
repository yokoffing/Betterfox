![Badge](https://hitscounter.dev/api/hit?url=https%3A%2F%2Fgithub.com%2Fyokoffing%2FBetterfox&label=&icon=github&color=%23198754&message=&style=flat&tz=US%2FEastern)![GitHub Maintained](https://img.shields.io/badge/maintained-yes-green)![GitHub last commit](https://img.shields.io/github/last-commit/yokoffing/betterfox)![GitHub issues](https://img.shields.io/github/issues/yokoffing/betterfox)![GitHub closed issues](https://img.shields.io/github/issues-closed/yokoffing/betterfox)![GitHub repo size](https://img.shields.io/github/repo-size/yokoffing/betterfox)[![shields.io Stars](https://img.shields.io/github/stars/yokoffing/betterfox)](https://github.com/yokoffing/betterfox/stargazers)

# Betterfox 140 ESR
These prefs are applicable for [Firefox ESR 140.0](https://support.mozilla.org/kb/switch-to-firefox-extended-support-release-esr). <sup>[^more info](https://support.mozilla.org/kb/firefox-esr-release-cycle)</sup>

Using regular Firefox? [Switch back to the main branch](https://github.com/yokoffing/Betterfox).

## Required reading
0) Create a [backup profile](https://github.com/yokoffing/Betterfox/wiki/Backup).
1) Download the user.js file [here](https://raw.githubusercontent.com/yokoffing/Betterfox/esr140/user.js) (Right click > `Save Link As…`).
2) Review both [Common Overrides](https://github.com/yokoffing/Betterfox/wiki/Common-Overrides) and [Optional Hardening](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening) to make any necessary changes.
3) Open Firefox. In the URL bar, type `about:profiles` and press **Enter**.
4) For the profile you want to use, click **Open Folder** in the **Root Directory** section.
5) Move the `user.js` file into the folder.

*After restarting Firefox:*
1) Get an **ad blocker** like [uBlock Origin](https://addons.mozilla.org/blog/ublock-origin-everything-you-need-to-know-about-the-ad-blocker/) with our [recommended filters](https://github.com/yokoffing/filterlists#guidelines).
2) Enable **DNS-level protection** with your chosen [provider](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#secure-dns) to further protect against security threats, ads, and trackers.

## Support

If you like the project, leave a :star: (top right) and become a [stargazer](https://github.com/yokoffing/Betterfox/stargazers)!

[![Stargazers repo roster for @yokoffing/Betterfox](https://reporoster.com/stars/dark/yokoffing/Betterfox)](https://github.com/yokoffing/Betterfox/stargazers)

<a href='https://ko-fi.com/Q5Q5G8EPH' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a>
<noscript><a href="https://liberapay.com/yokoffing/donate"><img alt="Donate using Liberapay" src="https://liberapay.com/assets/widgets/donate.svg"></a></noscript>

## Credit
* Betterfox mirrors the ongoing work provided by [arkenfox](https://github.com/arkenfox/user.js). Additionally, this repository includes content reproduced or adapted from other sources. Credit for overlapping material goes to the original authors.
* Appreciation goes to the [Firefox](https://www.mozilla.org/en-US/firefox/new/) team and developers working on [Bugzilla](https://bugzilla.mozilla.org/home), fighting for the open web.
* Thanks to [Denperidge](https://github.com/Denperidge) for adding [`install.py`](https://github.com/yokoffing/Betterfox/blob/main/install.py) for advanced users in v.131.
* A special thanks to [Alex Kontos](https://github.com/MrAlex94) of [Waterfox](https://github.com/WaterfoxCo/Waterfox) for his collaboration in v.116.
* Many thanks to the 2021 [Ghostery](https://github.com/ghostery) team for testing Betterfox at scale in its early days.
