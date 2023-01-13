[![GitHub issues](https://img.shields.io/github/issues/yokoffing/BetterFox)](https://github.com/yokoffing/Better-Fox/issues)
[![GitHub closed issues](https://badgen.net/github/closed-issues/yokoffing/Betterfox?color=green)](https://github.com/yokoffing/Betterfox/issues?q=is%3Aissue+is%3Aclosed)
![GitHub repo size](https://img.shields.io/github/repo-size/yokoffing/Betterfox)
![GitHub](https://img.shields.io/github/license/yokoffing/Betterfox?color=blue)
![GitHub Maintained](https://img.shields.io/badge/Open%20Source-Yes-green)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/yokoffing/Betterfox)
![GitHub last commit](https://img.shields.io/github/last-commit/yokoffing/Betterfox)
![GitHub Maintained](https://img.shields.io/badge/maintained-yes-green)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fyokoffing%2FBetter-Fox&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# Betterfox
about:config tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/ "Firefox Homepage"). Files are updated as needed for your [user.js](http://kb.mozillazine.org/User.js_file).


## Made with you in mind
**If you want a secure, blazing fast browsing experience, and don't want to deal with breakage, this setup is for you.** The objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓


## Simple goals
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Security:** sensible privacy and security without causing site breakage


## Simple configs

| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Betterfox/blob/master/Fastfox.js)   | Immensely increase Firefox's browsing speed. Give Chrome a run for its money!|
| [Securefox](https://github.com/yokoffing/Betterfox/blob/master/Securefox.js) | [Total Cookie Protection](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/) with [site isolation](https://blog.mozilla.org/security/2021/05/18/introducing-site-isolation-in-firefox/). [HTTPS-only](https://blog.mozilla.org/security/2020/11/17/firefox-83-introduces-https-only-mode/) connections. [State](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) and [network](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) partitioning. Block Telemetry and Mozilla experiments. [Various](https://blog.mozilla.org/security/) other privacy and security enhancements. |
| [Peskyfox](https://github.com/yokoffing/Betterfox/blob/master/Peskyfox.js)  | Unclutter the new tab page. Remove [Pocket](https://support.mozilla.org/en-US/kb/what-pocket). Restore [compact mode](https://support.mozilla.org/en-US/kb/compact-mode-workaround-firefox). Stop annoying webpage notifications and pop-ups. |
| [Smoothfox](https://github.com/yokoffing/Betterfox/blob/master/Smoothfox.js) | Get Edge-like smooth scrolling on your favorite browser, or choose something a little more your style. |
| [user.js](https://github.com/yokoffing/Betterfox/blob/master/user.js) | All the essentials. None of the breakage. Use this as your `user.js` file. |

:bulb: `Fastfox`, `Securefox`, `Peskyfox`, and `Smoothfox` are guides to relevant prefs in Firefox. The `user.js` is curated from the prefs located in these documents, so just because a pref is in one of the guides doesn't mean it is included in the final document, the `user.js`. Please use the descriptions and references as a guide for the prefs in Firefox.

## about:Privacy
Most repos have niche privacy and security concerns with little regard for speed, annoyances, or mainstream use. Betterfox was inspired by the [law of diminishing returns](https://pmctraining.com/site/wp-content/uploads/2018/04/Law-of-Diminishing-Returns-CHART.png) and the [minimum effective dose](https://medium.com/the-mission/less-is-more-the-minimum-effective-dose-e6d56625931e). The average user does not need to alter all `prefs` to get the results they want.

The guiding principle is: "If it breaks it, it doesn't make it!" So things like WebGL and DRM are still enabled, and you won't find a setting like `privacy.resistFingerprinting` mentioned here<sup>^[*why?*](https://old.reddit.com/r/firefox/comments/wuqpgi/are_there_any_aboutconfig_tweaks_to_get_smooth/ile3whx/?context=3)</sup>. And while Betterfox is designed to set-and-forget, it contains plenty of options for those like to tinker.

Note that [fingerprinting](https://smartframe.io/blog/browser-fingerprinting-everything-you-need-to-know/) is a high [threat model](https://thenewoil.org/threatmodel.html) issue that is [only addressed reasonably by Tor](https://github.com/arkenfox/user.js/wiki/3.3-Overrides-%5BTo-RFP-or-Not%5D). So if your threat level calls for _anonymity_ and not just reasonable _privacy_, then please use [Tor Browser](https://www.torproject.org).<sup>[1](https://youtu.be/5NrbdO4yWek?t=4334)</sup>

## Assumptions
If you use any of the features below, please view the [common overrides](https://github.com/yokoffing/Betterfox/issues/87) sticky to restore functionality.
* Firefox **Accessibility Service** is disabled to improve resource utilization and security. Override this if you use assistive software.
* **Embedded tweets, instagram, reddit posts, and tiktoks** load on webpages, even though these requests are usually blocked when using Firefox's [Strict Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection).
* The native **password manager** is disabled. We recommend using [KeePass](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/) or [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/).
* **Firefox Sync** and **Firefox View** are disabled.
* Annoying **location requests** are rejected and **site notifications** are disabled.

## Recognition

### User Comments
- [1](https://old.reddit.com/r/firefox/comments/xsw0zt/comment/iqo0dbv/?context=3)
[2](https://old.reddit.com/r/browsers/comments/y7w57n/which_browser_do_you_use_on_your_devices/it30hqi/?context=3)
[3](https://www.troddit.com/r/firefox/comments/z5auzi/firefox_not_properly_usingrecognizing_gpu_poor/iy0kru3)
[4](https://www.troddit.com/r/firefox/comments/z5auzi/firefox_not_properly_usingrecognizing_gpu_poor/iy36hyz)
[5](https://old.reddit.com/r/firefox/comments/1030fri/why_does_firefox_feel_slowchoppy/j2wu4ow/)
[6](https://old.reddit.com/r/pcmasterrace/comments/zwioe1/what_browser_will_you_be_using_in_2023_please/j1wmbxo/)
[7](https://old.reddit.com/r/firefox/comments/zodxzx/performance_optimizations_for_firefox/j0memta/?context=2)
[8](https://old.reddit.com/r/browsers/comments/106qwyk/in_contrast_to_previous_post_what_do_you_like/j3irpx0/?context=2)

### YouTube
* [I Hate Firefox. But I'm Still Switching Back to It.](https://www.youtube.com/watch?v=w0SJFED5xK0) (Nov 2022)
* [Español] [Optimizar y Acelerar Firefox](https://www.youtube.com/watch?v=3XtoONmq5_Q) (Nov 2022) 
* [How To Improve Firefox Performance](https://www.youtube.com/watch?v=N8IOJiOFVEk) (Dec 2021)
    
### Podcasts
* [GhoSTORIES with Franz & Pete, S2|E6, 17:05-18:40](https://anchor.fm/ghostories/episodes/S2E6-We-Talking-Ghostery-Dawn----Again-er0q02/a-a4o5vmh) (Feb 2021)

### Browser Integration
* [Pulse Browser](https://github.com/pulse-browser/browser#%EF%B8%8F-credits) | [files](https://github.com/pulse-browser/browser/tree/alpha/src/browser/app/profile) (Dec 2021)
* [Ghostery Dawn](https://github.com/ghostery/user-agent-desktop#community)  | [files](https://github.com/ghostery/user-agent-desktop/tree/main/brands/ghostery/branding/pref) (Feb 2021)
    * [Betterfox adopted into Ghostery Dawn](https://web.archive.org/web/20210509171835/https://www.ghostery.com/ghostery-dawn-update-more/)<sup>[1](https://web.archive.org/web/20210921114333/https://www.ghostery.com/ghostery-dawn-product-update/)</sup>

### Guides
* [FMHY Browser Tools: Privacy Hardened Firefox](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_privacy_hardened_firefox)
* [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/wiki/Tips#privacy)
* [Narsil/desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js#thanks)
* [pyllyukko/user.js](https://github.com/pyllyukko/user.js) [comparator](https://jm42.github.io/compare-user.js/)

### Contributions
* [Ghostery desktop browser](https://github.com/ghostery/user-agent-desktop/issues?q=is%3Apr+is%3Aissue+author%3Ayokoffing+)
* [Orion Browser](https://orionfeedback.org/?author=yokoffing)
* [Kagi Search Engine](https://kagifeedback.org/?author=yokoffing)
* [Various blocklists](https://github.com/yokoffing/filterlists#contributions)

## Credit
* Many thanks to the [Firefox](https://www.mozilla.org/en-US/firefox/new/) team and to the people working on [Bugzilla](https://bugzilla.mozilla.org/home), fighting for the [open web](https://docs.openwebsandbox.org/learn/ows-articles/what-is-the-open-web).
* This repository benefits from the ongoing research provided by [arkenfox](https://github.com/arkenfox/user.js). They are the foundation to any worthwhile `user.js`.

## Support
I’m a one-person operation, running this page as a passion project in my time off. If you enjoy my work, please leave a tip! Your support is incredibly appreciated and allows me to dedicate time to this project :blush:

<img align="top" width="25px" src="https://coekuss.com/quietfox/bitcoin.png"> Bitcoin: 334gaiEjn6wY1VksQvYe5L668JjtPEPyiM

<img align="top" width="20px" src="https://coekuss.com/quietfox/paypal.png"> PayPal: [paypal.me](about:blank) (forthcoming)

## History

[![Star History Chart](https://api.star-history.com/svg?repos=yokoffing/Betterfox&type=Date)](https://star-history.com/#yokoffing/Betterfox&Date)


<div align='center'><a href='https://www.websitecounterfree.com'><img src='https://www.websitecounterfree.com/c.php?d=9&id=19653&s=1' border='0' alt='Free Website Counter'></a><br / >
<div align='center'>23 July 2022</div>
