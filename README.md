[![GitHub issues](https://img.shields.io/github/issues/yokoffing/BetterFox)](https://github.com/yokoffing/Better-Fox/issues)
[![GitHub closed issues](https://badgen.net/github/closed-issues/yokoffing/BetterFox?color=green)](https://github.com/yokoffing/Better-Fox/issues?q=is%3Aissue+is%3Aclosed)
![GitHub repo size](https://img.shields.io/github/repo-size/yokoffing/BetterFox)
![GitHub](https://img.shields.io/github/license/yokoffing/BetterFox?color=blue)
![GitHub Maintained](https://img.shields.io/badge/Open%20Source-Yes-green)
![GitHub commit activity](https://img.shields.io/github/commit-activity/y/yokoffing/BetterFox)
![GitHub last commit](https://img.shields.io/github/last-commit/yokoffing/BetterFox)
![GitHub Maintained](https://img.shields.io/badge/maintained-yes-green)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fyokoffing%2FBetter-Fox&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

# BetterFox
about:config tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/ "Firefox Homepage"). Files are updated as needed for your [user.js](http://kb.mozillazine.org/User.js_file).


## Simple goals
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Security:** sensible privacy and security without causing site breakage


## Simple configs
   
| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/BetterFox/blob/master/FastFox.js)   | Immensely increase Firefox's browsing speed. Give Chrome a run for its money!|
| [SecureFox](https://github.com/yokoffing/BetterFox/blob/master/SecureFox.js) | Remove Telemetry, Mozilla experiments, Google Safe Browsing, and search engine suggestions in URL bar. Auto-upgrade mixed content to HTTPS. Various privacy enhancements. |
| [PeskyFox](https://github.com/yokoffing/BetterFox/blob/master/PeskyFox.js)  | Unclutter the new tab page. Remove Pocket and form autofill. Prevent Firefox from serving annoying webpage notifications. |
| [SmoothFox](https://github.com/yokoffing/BetterFox/blob/master/SmoothFox.js) | Get Microsoft Edge-like smooth scrolling on your favorite browser. |
| [user.js](https://github.com/yokoffing/BetterFox/blob/master/user.js) | All the essentails. None of the breakage. Users may download this list as their own user.js. |
| [LibreWolf.Overrides.cfg](https://github.com/yokoffing/BetterFox/blob/master/librewolf.overrides.cfg) | Do you prefer [LibreWolf](https://librewolf.net/)? Well, here's a few [overrides](https://librewolf.net/docs/settings/) to enhance your favorite Firefox fork! |

## Who is this setup for?
**If you want a secure, blazing fast browsing experience, and don't want to deal with breakage, this setup is for you.** My objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓

## about:Privacy
My guiding principle was: "If it breaks it, it doesn't make it!" So things like WebGL and DRM are still enabled, and you won't find a setting like `privacy.resistFingerprinting` mentioned here. BetterFox is designed to set-and-forget, not to troubleshoot and tinker. You can compare different user.js files [here](https://yokoffing.github.io/compare-user.js/).

BetterFox was created with a [less is more](https://medium.com/the-mission/less-is-more-the-minimum-effective-dose-e6d56625931e) mentality (i.e., keeping in mind [the law of diminishing returns](https://www.investopedia.com/terms/l/lawofdiminishingmarginalreturn.asp)). Most repos I've encountered have niche privacy and security concerns with little regard for speed, annoyances, or mainstream use. The average user doesn't need all `user_prefs` altered to get the results they want.

## Assumptions
That being said, BetterFox does make some assumptions: 
* **Google Safe Browsing** is removed. If you don't have other means of protection, you should remove the preferences listed for this section to leave it enabled.
* The native **password manager** is also disabled. If you don't use something like [KeePass](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/), [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/), or [1Password](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager), then remove the prefs that disable this functionality.
* Firefox **Sync** is disabled. Enable those prefs or use a recommended addon like [xBrowserSync](https://addons.mozilla.org/en-US/firefox/addon/xbs/).
* You should have [uBlock Origin](https://github.com/yokoffing/BetterFox/wiki/uBlock-Origin), [Ghostery](https://github.com/yokoffing/BetterFox/wiki/Ghostery), or [AdGuard](https://addons.mozilla.org/en-US/firefox/addon/adguard-adblocker/) for browser-level content blocking.
* Using DNS-level protection like [NextDNS](https://nextdns.io/?from=xujj63g5) is also highly recommended. (You can check out the NextDNS Guide [here](https://github.com/yokoffing/NextDNS-Config).)
* If your threat level calls for _anonymity_ and not just reasonable _privacy,_ please use the [TOR browser](https://www.torproject.org). :thumbsup:

## [Wiki](https://github.com/yokoffing/BetterFox/wiki)
Check out our [wiki](https://github.com/yokoffing/BetterFox/wiki) for extension recommendations and DNS preferences!

## Mentions
* [pyllyukko](https://github.com/pyllyukko/user.js/#other-documentation) user.js [comparator](https://jm42.github.io/compare-user.js/)
* [Narsil desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js#thanks)
* [Ghostery Desktop Browser](https://github.com/ghostery/user-agent-desktop#community)
* [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/wiki/Tips#privacy)

## Credit
* Many thanks to the [Firefox](https://www.mozilla.org/en-US/firefox/new/) team and to the people working on [Bugzilla](https://bugzilla.mozilla.org/home), fighting for the [open web](https://docs.openwebsandbox.org/learn/ows-articles/what-is-the-open-web).
* This repository benefits from the research provided by [arkenfox](https://github.com/arkenfox/user.js). Much of our work is adapted from them. While BetterFox does not use their `user.js`, we attempt to maintain parity with it.
* Otherwise, where there is similiarity to other authors, credit goes to them.

<div align='center'><a href='https://www.websitecounterfree.com'><img src='https://www.websitecounterfree.com/c.php?d=9&id=19653&s=1' border='0' alt='Free Website Counter'></a><br / >
<div align='center'>23 July 2022</div>
