![GitHub Maintained](https://img.shields.io/badge/open%20source-yes-orange)
![GitHub Maintained](https://img.shields.io/badge/maintained-yes-yellow)
[![Visitors](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fcloudzcodes%2FBetterFox-personal-tweaks&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visitors&edge_flat=false)](https://hits.seeyoufarm.com)

# Betterfox + personal tweaks
[about:config](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/). 

:new: Now with [ESR support](https://github.com/yokoffing/Betterfox/tree/esr115#betterfox-esr).

## Getting started
*If you don't have it already: [Get Firefox](https://www.mozilla.org/en-US/firefox/all/#product-desktop-release)*

1) Create a [backup profile](https://github.com/yokoffing/Betterfox/wiki/Backup).
2) Download the user.js file [here](https://raw.githubusercontent.com/yokoffing/Betterfox/main/user.js) (Right click > `Save Link As…`).
3) Review [Common Overrides](https://github.com/yokoffing/Betterfox/wiki/Common-Overrides) and make any necessary changes.
   * See also [Optional Hardening](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening) for other recommendations.
4) Open Firefox. In the URL bar, type `about:profiles` and press **Enter**.
5) For the profile you want to use (or use default), click **Open Folder** in the **Root Directory** section.
6) Move the `user.js` file into the folder.

*After restarting Firefox:*
1) Get an **ad blocker** like [uBlock Origin](https://addons.mozilla.org/blog/ublock-origin-everything-you-need-to-know-about-the-ad-blocker/) with our [recommended filters](https://github.com/yokoffing/filterlists#guidelines).
2) Enable **DNS-level protection** with [NextDNS](https://nextdns.io/?from=xujj63g5), and check out our configuration [guide](https://github.com/yokoffing/NextDNS-Config).
    * See how to [quickly enable](https://support.mozilla.org/en-US/kb/dns-over-https) **secure DNS** in Firefox.

## Simple goals
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Privacy:** protect your data without causing site breakage

## Simple configs

`Fastfox`, `Securefox`, `Peskyfox`, and `Smoothfox` are guides to settings within Firefox.

The `user.js` — a configuration file that controls Firefox settings — is curated from these guides + me.

| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js)   | Increase Firefox's browsing speed. Give Chrome a run for its money!|
| [Securefox](https://github.com/yokoffing/Betterfox/blob/main/Securefox.js) | Protect user data without causing site breakage. |
| [Peskyfox](https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js)  | Provide a clean, distraction-free browsing experience. |
| [Smoothfox](https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js) | Get Edge-like smooth scrolling on your favorite browser — or choose something more your style. |
| [user.js](https://github.com/cloudzcodes/Betterfox-personal-tweaks/blob/main/user.js) | Edited for personal `user.js`. |

## Recognition

### Browser Integration
* [Waterfox](https://www.waterfox.net/en-US/docs/releases/G6.0/) | [files](https://github.com/WaterfoxCo/Waterfox/tree/current/waterfox/browser/app/profile) (Sep 2023)
* [Floorp](https://github.com/Floorp-Projects/Floorp#-betterfox) <sup>[1](https://github.com/Floorp-Projects/Floorp/issues/233#issuecomment-1543557167) [2](https://blog.ablaze.one/3135/2023-04-01/)</sup> | [files](https://github.com/Floorp-Projects/Floorp/blob/ESR115/floorp/browser/components/preferences/userjs.inc.xhtml) (Apr 2023)
* [Pulse](https://github.com/pulse-browser/browser#%EF%B8%8F-credits) | [files](https://github.com/pulse-browser/browser/tree/alpha/src/browser/app/profile) (Dec 2021)
* [Ghostery Private Browser](https://github.com/ghostery/user-agent-desktop#community) <sup>[1](https://web.archive.org/web/20210509171835/https://www.ghostery.com/ghostery-dawn-update-more/) [2](https://web.archive.org/web/20210921114333/https://www.ghostery.com/ghostery-dawn-product-update/)</sup> | [files](https://github.com/ghostery/user-agent-desktop/tree/main/brands/ghostery/branding/pref) (Feb 2021)

### YouTube
* [The ULTIMATE Browser Tier List](https://youtu.be/j5r6jFE8gic?t=560) (Mar 2023)
* [I Hate Firefox. But I'm Still Switching Back to It.](https://youtu.be/w0SJFED5xK0?t=220) (Nov 2022)
* [Español] [Optimize and Accelerate Firefox](https://www.youtube.com/watch?v=3XtoONmq5_Q) (Nov 2022) 
* [How To Improve Firefox Performance](https://www.youtube.com/watch?v=N8IOJiOFVEk) (Dec 2021)

### Podcasts
* [Italian] [Digitalia.fm](https://digitalia.fm/684/) | 1:41:35–1:42:41 (July 2023)
* [GhoSTORIES with Franz & Pete](https://anchor.fm/ghostories/episodes/S2E6-We-Talking-Ghostery-Dawn----Again-er0q02/a-a4o5vmh) | 17:05–18:40 (Feb 2021)

### Articles
* [German] [Pulse Browser Review: Firefox fork with Turbo tweaks and Opera sidebar](https://www.computerbild.de/artikel/cb-Tipps-Software-Pulse-Browser-Review-ein-Firefox-Fork-mit-Seitenleiste-wie-bei-Opera-35644139.html#:~:text=Noch%20mehr%20Speed%2DFeatures) (Apr 2023)
* [2023 Browser Showdown: Comparing Chrome, Brave, Firefox, Vivaldi, and Opera](https://www.appdate.lk/technology/2023-browser-showdown/) (Jan 2023)

### Guides
* [FMHY Browser Tools: Privacy Tweaks](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_privacy_based_browsers)
* [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/wiki/Tips#privacy)
* [Narsil/desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js#thanks)
* [pyllyukko/user.js](https://github.com/pyllyukko/user.js) [comparator](https://jm42.github.io/compare-user.js/)

## Credit
* This repository benefits from the ongoing research provided by [arkenfox](https://github.com/arkenfox/user.js).
* Appreciation goes to the [Firefox](https://www.mozilla.org/en-US/firefox/new/) team and developers working on [Bugzilla](https://bugzilla.mozilla.org/home), fighting for the open web.
* A special thanks to [Alex Kontos](https://github.com/MrAlex94) of [Waterfox](https://github.com/WaterfoxCo/Waterfox) for his collaboration in v.116.
* Many thanks to the 2021 [Ghostery](https://github.com/ghostery) team for testing Betterfox at scale in its early days.
* Me

<div align='center'>
  <a href='https://www.websitecounterfree.com'><img src='https://www.websitecounterfree.com/c.php?d=9&id=45654&s=1' border='0' alt='Free Website Counter'></a><br / >
since 05 December 2023</div>
