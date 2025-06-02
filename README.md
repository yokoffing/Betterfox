![GitHub Maintained](https://img.shields.io/badge/maintained-yes-green)![GitHub last commit](https://img.shields.io/github/last-commit/yokoffing/betterfox)![GitHub issues](https://img.shields.io/github/issues/yokoffing/betterfox)![GitHub closed issues](https://img.shields.io/github/issues-closed/yokoffing/betterfox)![GitHub repo size](https://img.shields.io/github/repo-size/yokoffing/betterfox)[![shields.io Stars](https://img.shields.io/github/stars/yokoffing/betterfox)](https://github.com/yokoffing/betterfox/stargazers)

# Betterfox
[about:config](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).

## Made for everyday browsing
[Faster](https://medium.com/@mihirgrand/comparing-popular-firefox-forks-6fa83fdfdaad#:~:text=31%25%20more%20than%20vanilla%20Firefox), more private and secure — without using third-party code.

Betterfox is an opinionated preference list inspired by the [law of diminishing returns](https://miro.medium.com/v2/resize:fit:1206/1*lcOcxriV_II_lZuXQYLoXg.jpeg) and the [minimum effective dose](https://medium.com/the-mission/less-is-more-the-minimum-effective-dose-e6d56625931e).

## Required reading
0) Create a [backup profile](https://github.com/yokoffing/Betterfox/wiki/Backup).
1) Download the user.js file [here](https://raw.githubusercontent.com/yokoffing/Betterfox/main/user.js) (Right click > `Save Link As…`).
2) Review both [Common Overrides](https://github.com/yokoffing/Betterfox/wiki/Common-Overrides) and [Optional Hardening](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening) to make any necessary changes.
3) Open Firefox. In the URL bar, type `about:profiles` and press **Enter**.
4) For the profile you want to use, click **Open Folder** in the **Root Directory** section.
5) Move the `user.js` file into the folder.

*After restarting Firefox:*
1) Get an **ad blocker** like [uBlock Origin](https://addons.mozilla.org/blog/ublock-origin-everything-you-need-to-know-about-the-ad-blocker/) with our [recommended filters](https://github.com/yokoffing/filterlists#guidelines).
2) Enable **DNS-level protection** with your chosen [provider](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening#secure-dns) to further protect against security threats, ads, and trackers.

## Simple goals
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Privacy:** protect your data without causing site breakage

## Simple configs

`Fastfox`, `Securefox`, `Peskyfox`, and `Smoothfox` are guides to settings within Firefox.

The `user.js` — a configuration file that controls Firefox settings — is curated from these guides.

| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js)   | Increase Firefox's browsing speed. Give Chrome a run for its money!|
| [Securefox](https://github.com/yokoffing/Betterfox/blob/main/Securefox.js) | Protect user data without causing site breakage. |
| [Peskyfox](https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js)  | Provide a clean, distraction-free browsing experience. |
| [Smoothfox](https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js) | Get Edge-like smooth scrolling on your favorite browser — or choose something more your style. |
| [user.js](https://github.com/yokoffing/Betterfox/blob/main/user.js) | All the essentials. None of the breakage. This is your `user.js`. |

## Recognition

### Browser Integration
> [!IMPORTANT]
> While the browsers listed below incorporate Betterfox to some extent, they often modify it in ways that reduce its effectiveness. For optimal results, apply the `user.js` file even when using Firefox forks.

* [Zen](https://github.com/zen-browser/desktop?tab=readme-ov-file) | [files](https://github.com/zen-browser/desktop/blob/stable/src/browser/app/profile/zen-browser.js) (July 2024)
* [Midori](https://github.com/goastian/midori-desktop/blob/ESR115/README.md) | [files](https://github.com/goastian/midori-desktop/blob/f3d8d96eb8e08f35a64e3c957bea4e839d7c7730/floorp/browser/components/userjsUtils.sys.mjs#L28-L33) (Dec 2023?)
* [Mercury](https://github.com/Alex313031/Mercury/releases/tag/v.115.3.0) | [files](https://github.com/Alex313031/Mercury/commit/eb9600f9fb8f48c8f5b5c6f3264fbcdb5caff7f5) (Sep 2023)
* [Waterfox](https://www.waterfox.net/docs/releases/G6.0/) | [files](https://github.com/WaterfoxCo/Waterfox/tree/current/waterfox/browser/app/profile) (Sep 2023)
* [Floorp](https://github.com/Floorp-Projects/Floorp#-betterfox) <sup>[1](https://github.com/Floorp-Projects/Floorp/issues/233#issuecomment-1543557167) [2](https://blog.ablaze.one/3135/2023-04-01/)</sup> | [files](https://github.com/Floorp-Projects/Floorp/blob/ESR115/floorp/browser/components/preferences/userjs.inc.xhtml) (Apr 2023)
* [Pulse](https://github.com/pulse-browser/browser#%EF%B8%8F-credits) | [files](https://github.com/pulse-browser/browser/tree/alpha/src/browser/app/profile) (Dec 2021)
* [Ghostery Private Browser](https://github.com/ghostery/user-agent-desktop#community) <sup>[1](https://web.archive.org/web/20210509171835/https://www.ghostery.com/ghostery-dawn-update-more/) [2](https://web.archive.org/web/20210921114333/https://www.ghostery.com/ghostery-dawn-product-update/)</sup> | [files](https://github.com/ghostery/user-agent-desktop/tree/main/brands/ghostery/branding/pref) (Feb 2021)

### YouTube
* [A Better Firefox](https://youtu.be/JuHIwCFx34Q?si=1dx39t3HX5kzNVj-&t=133) (Mar 2025)
* [Ditch Chrome for One Of These BETTER BROWSERS!](https://youtu.be/ygkxFc8SZlc?si=m5NQe-b_oFXs5crb&t=230) (Aug 2024)
* [The ULTIMATE Browser Tier List](https://youtu.be/j5r6jFE8gic?t=560) (Mar 2023)
* [I Hate Firefox. But I'm Still Switching Back to It.](https://youtu.be/w0SJFED5xK0?t=220) (Nov 2022)
* [Español] [Optimize and Accelerate Firefox](https://www.youtube.com/watch?v=3XtoONmq5_Q) (Nov 2022) 
* [How To Improve Firefox Performance](https://www.youtube.com/watch?v=N8IOJiOFVEk) (Dec 2021)

### Podcasts
* [Italian] [Digitalia.fm](https://digitalia.fm/684/) | 1:41:35–1:42:41 (July 2023)
* [GhoSTORIES with Franz & Pete](https://anchor.fm/ghostories/episodes/S2E6-We-Talking-Ghostery-Dawn----Again-er0q02/a-a4o5vmh) | 17:05–18:40 (Feb 2021)

### Articles
* [Español] [Firefox is an excellent browser, but this small modification makes it much faster and more private](https://www.genbeta.com/a-fondo/firefox-excelente-navegador-esta-pequena-modificacion-hace-mucho-rapido-privado-asi-funciona-betterfox) (Jan 2025)
* [Browsers for Daily Use](https://anhkhoakz.neocities.org/blog/browsers-for-daily-using/#firefox-but-hardened) (Jan 2024)
* [Avoiding Manifest V3 – Escaping the Ad-Pocalypse](https://www.xbitlabs.com/avoiding-manifest-v3/) (Dec 2023)
* [German] [Pulse Browser Review: Firefox fork with Turbo tweaks and Opera sidebar](https://www.computerbild.de/artikel/cb-Tipps-Software-Pulse-Browser-Review-ein-Firefox-Fork-mit-Seitenleiste-wie-bei-Opera-35644139.html#:~:text=Noch%20mehr%20Speed%2DFeatures) (Apr 2023)
* [2023 Browser Showdown: Comparing Chrome, Brave, Firefox, Vivaldi, and Opera](https://www.appdate.lk/technology/2023-browser-showdown/) (Jan 2023)

### Guides
* [FMHY Browser Tools: Privacy Tweaks](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_privacy_based_browsers)
* [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/wiki/Tips#privacy)
* [Narsil/desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js#thanks)
* [pyllyukko/user.js](https://github.com/pyllyukko/user.js) [comparator](https://jm42.github.io/compare-user.js/)

### Reviews
* “I use this one ... The performance is absolutely amazing. There’s definitely a huge difference when it comes to loading sites.” - [DIRIKtv](https://youtu.be/N8IOJiOFVEk?t=16)
* "BetterFox ... will provide good-enough privacy and help with performance." - [Qdoit12Super](https://old.reddit.com/r/browsers/comments/139h4my/suggestion_for_finding_3_good_privacy_focus/jj3n3qn/?context=2)
* "...drastically changed the experience with Firefox for me. Improved speed, security, smoothness, and removed clutter." - [AppDate](https://www.appdate.lk/technology/2023-browser-showdown/#:~:text=Used%20the%20BetterFox%20user%20config%20settings%20with%20some%20overrides%20which%20drastically%20changed%20the%20experience)
* "Firefox with uBlock Origin extension and tuned with Betterfox is faster than Safari."  - [cugeloid](https://elephas.app/blog/best-browsers-mac#what-is-the-best-browser-for-mac-according-to-redditandnbsp)
* "I don't think I could use Firefox without Betterfox." - [Professional_Fun4616](https://old.reddit.com/r/nextdns/comments/15y815f/the_people_behind_betterfox_have_this_awesome/jxb7cir/?context=3)
* "The best collection of tweaks available." - [AuRiMaS](https://old.reddit.com/r/MozillaFirefox/comments/15cc1vk/about_changes_in_aboutconfig/jtyx910/?context=3)
* "FF is now much snappier!" - [whotheff](https://old.reddit.com/r/firefox/comments/z5auzi/firefox_not_properly_usingrecognizing_gpu_poor/iy36hyz/)
* "...the experience is so good now I don’t think I’ll go back to any of the chromium based browsers." - [Mr_Compromise](https://old.reddit.com/r/pcmasterrace/comments/zwioe1/what_browser_will_you_be_using_in_2023_please/j1wmbxo/)

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

<div align='center'>
  <a href='https://www.websitecounterfree.com'><img src='https://www.websitecounterfree.com/c.php?d=9&id=19653&s=1' border='0' alt='Free Website Counter'></a><br / >
since 23 July 2022</div>
