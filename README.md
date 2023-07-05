![GitHub Maintained](https://img.shields.io/badge/open%20source-yes-orange)
![GitHub Maintained](https://img.shields.io/badge/maintained-yes-yellow)
[![Visitors](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fyokoffing%2FBetter-Fox&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visitors&edge_flat=false)](https://hits.seeyoufarm.com)

# Betterfox
about:config tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/ "Firefox Homepage"). Files are updated as needed for your [user.js](http://kb.mozillazine.org/User.js_file).


## Made for everyday browsing
**A secure, blazing fast browsing experience. Without breakage.** The objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓


## Simple goals
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Security:** sensible privacy and security without causing site breakage


## Simple configs

| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Betterfox/blob/master/Fastfox.js)   | Immensely increase Firefox's browsing speed. Give Chrome a run for its money!|
| [Securefox](https://github.com/yokoffing/Betterfox/blob/master/Securefox.js) | Telemetry blocked. [HTTPS-by-Default](https://blog.mozilla.org/security/2021/08/10/firefox-91-introduces-https-by-default-in-private-browsing/). [Total Cookie Protection](https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/) with [site isolation](https://blog.mozilla.org/security/2021/05/18/introducing-site-isolation-in-firefox/). Enhanced [state](https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning) and [network](https://blog.mozilla.org/security/2021/01/26/supercookie-protections/) partitioning. Various other enhancements. |
| [Peskyfox](https://github.com/yokoffing/Betterfox/blob/master/Peskyfox.js)  | Unclutter the new tab page. Remove [Pocket](https://support.mozilla.org/en-US/kb/what-pocket). Restore [compact mode](https://support.mozilla.org/en-US/kb/compact-mode-workaround-firefox) as an option. Stop webpage notifications, pop-ups, and other annoyances. |
| [Smoothfox](https://github.com/yokoffing/Betterfox/blob/master/Smoothfox.js) | Get Edge-like smooth scrolling on your favorite browser — or choose something more your style. |
| [user.js](https://github.com/yokoffing/Betterfox/blob/master/user.js) | All the essentials. None of the breakage. This is your `user.js`. |

:bulb: `Fastfox`, `Securefox`, `Peskyfox`, and `Smoothfox` are guides to relevant prefs in Firefox. The `user.js` is curated from the options located in these documents. Please read the guides to understand the various options hidden in Firefox.

## about:Privacy
Most repos have niche privacy and security concerns with little regard for speed, annoyances, or mainstream use. Betterfox was inspired by the [law of diminishing returns](https://pmctraining.com/site/wp-content/uploads/2018/04/Law-of-Diminishing-Returns-CHART.png) and the [minimum effective dose](https://medium.com/the-mission/less-is-more-the-minimum-effective-dose-e6d56625931e). For instance, features like WebGL and DRM are still enabled, and you won't find a setting like `privacy.resistFingerprinting` mentioned here<sup>^[*why?*](https://old.reddit.com/r/firefox/comments/wuqpgi/are_there_any_aboutconfig_tweaks_to_get_smooth/ile3whx/?context=3)</sup>. And while Betterfox is designed to set-and-forget, it contains plenty of options for those who like to tinker.

If your context calls for _anonymity_ and not just reasonable _privacy_, then please use [Tor Browser](https://www.torproject.org).<sup>[1](https://youtu.be/5NrbdO4yWek?t=4334)</sup> [Fingerprinting](https://smartframe.io/blog/browser-fingerprinting-everything-you-need-to-know/) is a high [threat model](https://thenewoil.org/en/guides/prologue/threatmodel/) issue that is [only addressed reasonably by Tor](https://github.com/arkenfox/user.js/wiki/3.3-Overrides-%5BTo-RFP-or-Not%5D).

## Assumptions
Apply preferences from the [common overrides](https://github.com/yokoffing/Betterfox/issues/87) sticky if you want to revert the following behavior:
* Firefox **Accessibility Service** is disabled to improve resource utilization and security. Override this if you use assistive software.
* **Embedded tweets, instagram, reddit posts, and tiktoks** load on webpages, even though these requests are usually blocked when using [Strict Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection).
* The native **password manager** is disabled. We recommend using [KeePass](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/), [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/), or [1Password](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager).
* **Firefox Sync** and **Firefox View** are disabled.
* **Location requests** are rejected and **site notifications** are disabled.

### Suggestions
* Enable **sanitize on close** ([clear browsing data on shutdown](https://github.com/yokoffing/Betterfox/blob/99f2e860633f307781ddb73d792358ad1bec6af5/Securefox.js#L409-L434)).
   * You can **allow exceptions** if you want to stay logged in to some sites:
      1) Go to *Settings → Privacy & Security → Cookies and Site Data → Manage Exceptions*
      2) Check *Delete cookies and site data when Firefox is closed*.
* Use [uBlock Origin](https://addons.mozilla.org/blog/ublock-origin-everything-you-need-to-know-about-the-ad-blocker/) or [Ghostery](https://addons.mozilla.org/en-US/firefox/addon/ghostery/) to block ads and trackers.
* Add DNS-level protection like [NextDNS](https://nextdns.io/?from=xujj63g5). Check out our configuration guide [here](https://github.com/yokoffing/NextDNS-Config).

## Recognition
### User Comments
- [1](https://old.reddit.com/r/firefox/comments/xsw0zt/comment/iqo0dbv/?context=3)
[2](https://old.reddit.com/r/browsers/comments/y7w57n/which_browser_do_you_use_on_your_devices/it30hqi/?context=3)
[3](https://old.reddit.com/r/firefox/comments/z5auzi/firefox_not_properly_usingrecognizing_gpu_poor/iy0kru3)
[4](https://old.reddit.com/r/firefox/comments/z5auzi/firefox_not_properly_usingrecognizing_gpu_poor/iy36hyz)
[5](https://old.reddit.com/r/firefox/comments/1030fri/why_does_firefox_feel_slowchoppy/j2wu4ow/)
[6](https://old.reddit.com/r/pcmasterrace/comments/zwioe1/what_browser_will_you_be_using_in_2023_please/j1wmbxo/)
[7](https://old.reddit.com/r/firefox/comments/zodxzx/performance_optimizations_for_firefox/j0memta/?context=2)
[8](https://old.reddit.com/r/browsers/comments/106qwyk/in_contrast_to_previous_post_what_do_you_like/j3irpx0/?context=2)
[9](https://old.reddit.com/r/firefox/comments/115va7d/list_of_aboutconfiguserjs_privacy_tweaks/j9700bc/?context=2)
[10](https://old.reddit.com/r/browsers/comments/11q6je7/is_block_or_snoof_browser_fingerprint_better/jc2mhcx/?context=2)

### Browser Integration
* [Floorp Browser](https://github.com/Floorp-Projects/Floorp/issues/233#issuecomment-1543557167) (forthcoming 2023)
* [Pulse Browser](https://github.com/pulse-browser/browser#%EF%B8%8F-credits) | [files](https://github.com/pulse-browser/browser/tree/alpha/src/browser/app/profile) (Dec 2021)
* [Ghostery Private Browser](https://github.com/ghostery/user-agent-desktop#community)  | [files](https://github.com/ghostery/user-agent-desktop/tree/main/brands/ghostery/branding/pref) (Feb 2021)
    * [Betterfox adopted into Ghostery Private Browser](https://web.archive.org/web/20210509171835/https://www.ghostery.com/ghostery-dawn-update-more/)<sup>[1](https://web.archive.org/web/20210921114333/https://www.ghostery.com/ghostery-dawn-product-update/)</sup>

### YouTube
* [Firefox is NOT private. Here's how to fix it.](https://youtu.be/Fr8UFJzpNls) (Mar 2023)
* [The ULTIMATE Browser Tier List (Based Tier to Spyware Tier)](https://youtu.be/j5r6jFE8gic) (Mar 2023)
* [I Hate Firefox. But I'm Still Switching Back to It.](https://youtu.be/w0SJFED5xK0?t=220) (Nov 2022)
* [Español] [Optimizar y Acelerar Firefox](https://www.youtube.com/watch?v=3XtoONmq5_Q) (Nov 2022) 
* [How To Improve Firefox Performance](https://www.youtube.com/watch?v=N8IOJiOFVEk) (Dec 2021)
    
### Podcasts
* [GhoSTORIES with Franz & Pete](https://anchor.fm/ghostories/episodes/S2E6-We-Talking-Ghostery-Dawn----Again-er0q02/a-a4o5vmh), S2|E6, 17:05-18:40 (Feb 2021)
    
### Articles
* [Russian] [The Pulse Browser project develops an experimental fork of Firefox](https://www.opennet.ru/opennews/art.shtml?num=59076) (May 2023)
* [2023 Browser Showdown: Comparing Chrome, Brave, Firefox, Vivaldi, and Opera – Is it Worth the Switch?](https://www.appdate.lk/technology/2023-browser-showdown/) (Jan 2023)

### Guides
* [FMHY Browser Tools: Privacy Hardened Firefox](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_privacy_hardened_firefox)
* [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/wiki/Tips#privacy)
* [Narsil/desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js#thanks)
* [pyllyukko/user.js](https://github.com/pyllyukko/user.js) [comparator](https://jm42.github.io/compare-user.js/)

### Contributions
* [Ghostery Private Browser](https://github.com/ghostery/user-agent-desktop/issues?q=is%3Apr+is%3Aissue+author%3Ayokoffing+)
* [Orion Browser](https://orionfeedback.org/?author=yokoffing)
* [Kagi Search Engine](https://kagifeedback.org/?author=yokoffing)
* [Various blocklists](https://github.com/yokoffing/filterlists#contributions)

## Credit
* Many thanks to the [Firefox](https://www.mozilla.org/en-US/firefox/new/) team and to the people working on [Bugzilla](https://bugzilla.mozilla.org/home), fighting for the [open web](https://builtin.com/software-engineering-perspectives/open-web).
* This repository benefits from the ongoing research provided by [arkenfox](https://github.com/arkenfox/user.js). They are the foundation to any worthwhile `user.js`.

<div align='center'><a href='https://www.websitecounterfree.com'><img src='https://www.websitecounterfree.com/c.php?d=9&id=19653&s=1' border='0' alt='Free Website Counter'></a><br / >
<div align='center'>since 23 July 2022</div>
