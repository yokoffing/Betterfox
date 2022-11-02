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


## Who is this setup for?
**If you want a secure, blazing fast browsing experience, and don't want to deal with breakage, this setup is for you.** The objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓


## Simple goals
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Security:** sensible privacy and security without causing site breakage


## Simple configs

| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Betterfox/blob/master/Fastfox.js)   | Immensely increase Firefox's browsing speed. Give Chrome a run for its money!|
| [Securefox](https://github.com/yokoffing/Betterfox/blob/master/Securefox.js) | Remove Telemetry, Mozilla experiments, Google Safe Browsing, and search engine suggestions in URL bar. Auto-upgrade mixed content to HTTPS. Various privacy enhancements. |
| [Peskyfox](https://github.com/yokoffing/Betterfox/blob/master/Peskyfox.js)  | Unclutter the new tab page. Remove Pocket and form autofill. Prevent Firefox from serving annoying webpage notifications. |
| [Smoothfox](https://github.com/yokoffing/Betterfox/blob/master/Smoothfox.js) | Get Microsoft Edge-like smooth scrolling on your favorite browser. |
| [user.js](https://github.com/yokoffing/Betterfox/blob/master/user.js) | All the essentails. None of the breakage. Users may download this list as their own user.js. |
| [librewolf.overrides.cfg](https://github.com/yokoffing/Betterfox/blob/master/librewolf.overrides.cfg) | Do you prefer [LibreWolf](https://librewolf.net/)? Well, here's a few [overrides](https://librewolf.net/docs/settings/) to enhance your favorite Firefox fork! |

:bulb: `Fastfox`, `Securefox`, `Peskyfox`, and `Smoothfox` are guides to relevant prefs in Firefox. The `user.js` is curated from the prefs located in these documents, so just because a pref is in one of the guides doesn't mean it is included in the final document, the `user.js`. Please use the descriptions and references as a guide for the prefs in Firefox, and open a [feature request](https://github.com/yokoffing/Betterfox/issues/new/choose) if you think one can be improved upon.

## about:Privacy
The guiding principle is: "If it breaks it, it doesn't make it!" So things like WebGL and DRM are still enabled, and you won't find a setting like `privacy.resistFingerprinting` mentioned here ([why?](https://old.reddit.com/r/firefox/comments/wuqpgi/are_there_any_aboutconfig_tweaks_to_get_smooth/ile3whx/?context=3)). Betterfox is designed to set-and-forget, not to troubleshoot and tinker. You can compare different user.js files [here](https://jm42.github.io/compare-user.js).

Betterfox was created with a [less is more](https://medium.com/the-mission/less-is-more-the-minimum-effective-dose-e6d56625931e) mentality (i.e., keeping in mind [the law of diminishing returns](https://pmctraining.com/site/wp-content/uploads/2018/04/Law-of-Diminishing-Returns-CHART.png)). Most repos I've encountered have niche privacy and security concerns with little regard for speed, annoyances, or mainstream use. The average user doesn't need all `prefs` altered to get the results they want.

## Assumptions
That being said, Betterfox makes the following assumptions:
* Betterfox allows for **embedded tweets, instagram, and reddit posts** to load on webpages, even though these requests are usually blocked when using Firefox's [Strict Enhanced Tracking Protection](https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop#w_strict-enhanced-tracking-protection). To revert this behavior, add [these prefs](https://github.com/yokoffing/Betterfox/blob/5d16f192d4c7fb36cf723f2aedf118bc62bfd115/SecureFox.js#L62-L65) to the bottom of your `user.js`.
   * Advanced users: We suggest that you [selectively allow](https://github.com/gorhill/uBlock/wiki/Dynamic-filtering:-quick-guide) these requests in [uBlock Origin](https://addons.mozilla.org/blog/ublock-origin-everything-you-need-to-know-about-the-ad-blocker/) with [medium mode](https://github.com/gorhill/uBlock/wiki/Blocking-mode:-medium-mode) enabled + add the [Privacy Essentials](https://github.com/yokoffing/filterlists/blob/main/PrivacyEssentials.txt) filter to your [custom lists](https://github.com/gorhill/uBlock/wiki/Dashboard:-Filter-lists#3rd-party-filter-lists).
* Since Firefox implemented [state](https://github.com/yokoffing/Betterfox/blob/537eb902106f5cacebfd7a77555193ba4573dc6e/SecureFox.js#L73-L88) and [network](https://github.com/yokoffing/Betterfox/blob/537eb902106f5cacebfd7a77555193ba4573dc6e/SecureFox.js#L93-L100) partitioning, it is recommended but no longer necessary to **clear browsing data** after every session. To enable this functionality, add [these prefs](https://github.com/yokoffing/Betterfox/blob/7335ba361f1d9f1e6a0198fb8caa892ab5d2af2d/Securefox.js#L397-L422) to your overrides as appropriate.
* **Google Safe Browsing** (GSB) is disabled. Please use DNS-level protection like [NextDNS](https://nextdns.io/?from=xujj63g5), and check out our configuration guide [here](https://github.com/yokoffing/NextDNS-Config). If you do not have other means of protection, then enable GSB locally by adding [these prefs](https://github.com/yokoffing/Betterfox/blob/b354f21405fcfedee8ae9a132eac8d243b59ced7/SecureFox.js#L974-L983) to your overrides.
* The native **password manager** is also disabled. If you don't use something like [KeePass](https://addons.mozilla.org/en-US/firefox/addon/keepassxc-browser/), [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/), or [1Password](https://addons.mozilla.org/en-US/firefox/addon/1password-x-password-manager), then add [these prefs](https://github.com/yokoffing/Betterfox/blob/fad7080faa1b88e5a30324ebffe5a15dc47b2e08/Securefox.js#L798-L804) to re-enable native password management.
* **Firefox Sync** is disabled. To restore functionality, add [this pref](https://github.com/yokoffing/Betterfox/blob/8db32abde962fd197fff91fb6bb1fd6c180e1f51/Securefox.js#L1057-L1058) to your overrides section, or use a addon like [xBrowserSync](https://addons.mozilla.org/en-US/firefox/addon/xbs/).
* **Site notifications** are disabled. To enable, add [these prefs](https://github.com/yokoffing/Betterfox/blob/82dc44a55844d2830bba37576e47367206f70e63/Securefox.js#L1090-L1092) to your overrides section.
* **Location requests** are rejected. To re-enable, add [this](https://github.com/yokoffing/Betterfox/blob/82dc44a55844d2830bba37576e47367206f70e63/Securefox.js#L1101-L1102) to the bottom of the `user.js`.
* If your threat level calls for _anonymity_ and not just reasonable _privacy_,<sup>[1](https://thenewoil.org/secprivanon.html)</sup> please use the [TOR browser](https://www.torproject.org). :thumbsup:

## Mentions

User comments:
[1](https://old.reddit.com/r/firefox/comments/xsw0zt/comment/iqo0dbv/?context=3)
[2](https://old.reddit.com/r/technology/comments/m4qdvt/google_accused_of_tracking_users_in_incognito/gqwzzgr/?context=2)
[3](https://old.reddit.com/r/Ubuntu/comments/pke4wz/suspicious_file_found_after_using_brave/hc568jg/?context=2)
[4](https://old.reddit.com/r/browsers/comments/y7w57n/which_browser_do_you_use_on_your_devices/it30hqi/?context=3)


#### Guides
* [FMHY Browser Tools: Privacy Hardened Firefox](https://www.reddit.com/r/FREEMEDIAHECKYEAH/wiki/storage/#wiki_privacy_hardened_firefox)
* [Firefox-UI-Fix](https://github.com/black7375/Firefox-UI-Fix/wiki/Tips#privacy)
* [Narsil/desktop_user.js](https://git.nixnet.services/Narsil/desktop_user.js#thanks)
* [pyllyukko/user.js](https://github.com/pyllyukko/user.js) [comparator](https://jm42.github.io/compare-user.js/)

#### Podcasts
* [GhoSTORIES with Franz & Pete, S2|E6, 17:05-18:40](https://anchor.fm/ghostories/episodes/S2E6-We-Talking-Ghostery-Dawn----Again-er0q02/a-a4o5vmh)

#### Contributions
* [Ghostery](https://github.com/ghostery/user-agent-desktop#community) [desktop browser](https://github.com/ghostery/user-agent-desktop/issues?q=is%3Apr+is%3Aissue+author%3Ayokoffing+)
  * [Fingerprinting protection: Betterfox and arkenfox](https://github.com/ghostery/user-agent-desktop/issues/486) (dated)
* [Orion Browser](https://orionfeedback.org/?author=yokoffing)
* [Kagi Search Engine](https://kagifeedback.org/?author=yokoffing)

## Credit
* Many thanks to the [Firefox](https://www.mozilla.org/en-US/firefox/new/) team and to the people working on [Bugzilla](https://bugzilla.mozilla.org/home), fighting for the [open web](https://docs.openwebsandbox.org/learn/ows-articles/what-is-the-open-web).
* This repository benefits from the research provided by [arkenfox](https://github.com/arkenfox/user.js). While Betterfox does not use their `user.js`, we attempt to maintain parity with it.

<div align='center'><a href='https://www.websitecounterfree.com'><img src='https://www.websitecounterfree.com/c.php?d=9&id=19653&s=1' border='0' alt='Free Website Counter'></a><br / >
<div align='center'>23 July 2022</div>
