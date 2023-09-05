![GitHub Maintained](https://img.shields.io/badge/open%20source-yes-orange)
![GitHub Maintained](https://img.shields.io/badge/maintained-yes-yellow)
[![Visitors](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fyokoffing%2FBetter-Fox&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=visitors&edge_flat=false)](https://hits.seeyoufarm.com)

# Betterfox ESR
[about:config](https://support.mozilla.org/en-US/kb/about-config-editor-firefox) tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/).

These prefs are applicable for:
* [Firefox ESR 115.0](https://support.mozilla.org/en-US/kb/switch-to-firefox-extended-support-release-esr) <sup>[^more info](https://support.mozilla.org/en-US/kb/firefox-esr-release-cycle)</sup>
* [Waterfox G6](https://github.com/WaterfoxCo/Waterfox)
* [Floorp ESR 115](https://github.com/Floorp-Projects/Floorp/tree/ESR115)

Using regular Firefox? [Switch back to the main branch](https://github.com/yokoffing/Betterfox).

## Getting started
*If you don't have it already: [Get Firefox](https://www.mozilla.org/en-US/firefox/all/#product-desktop-release)*

1) Download the user.js file [here](https://raw.githubusercontent.com/yokoffing/Betterfox/esr115/user.js) (Right click > `Save Link As…`).
2) Review [Common Overrides](https://github.com/yokoffing/Betterfox/wiki/Common-Overrides) and make any necessary changes.
3) Open Firefox. In the URL bar, type `about:profiles` and press `Enter`.
4) For the profile you want to use (or use default), click `Open Folder` in the **Root Directory** section.
5) Move the `user.js` file into the folder.

*After restarting Firefox:*
1) Get an **ad blocker** like [uBlock Origin](https://addons.mozilla.org/blog/ublock-origin-everything-you-need-to-know-about-the-ad-blocker/) with our [recommended filters](https://github.com/yokoffing/filterlists#guidelines). For a simple solution, use [Ghostery](https://addons.mozilla.org/en-US/firefox/addon/ghostery/).
3) Enable **DNS-level protection** with [NextDNS](https://nextdns.io/?from=xujj63g5), and check out our configuration [guide](https://github.com/yokoffing/NextDNS-Config).
    * See how to [quickly enable](https://support.mozilla.org/en-US/kb/dns-over-https) **secure DNS** in Firefox.

## about:Privacy
Betterfox is a great balance of privacy and convenience.

See [Optional Hardening](https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening) for other suggestions.
