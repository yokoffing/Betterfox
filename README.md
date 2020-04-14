# BetterFox
about:config tweaks to enhance [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/ "Firefox Homepage"). Files are updated as needed for your [user.js](http://kb.mozillazine.org/User.js_file).


## Simple goals:
1) **Minimalism:** get what isn't needed out of the way
2) **Efficiency:** unleash Firefox's ability to be fast and performant
3) **Security:** sensible privacy and security without causing site breakage


## Simple configs:
   
| List      | Description |
|:---------:|-------------|
| [Fastfox](https://github.com/yokoffing/Better-Fox/blob/master/FastFox.js)   | Immensely increase Firefox's browsing speed. Give Chrome a run for its money!|
| [PeskyFox](https://github.com/yokoffing/Better-Fox/blob/master/PeskyFox.js)  | Unclutter the new tab page. Remove Pocket and form autofill. Prevent Firefox from serving annoying webpage notifications.|
| [SmoothFox](https://github.com/yokoffing/Better-Fox/blob/master/SmoothFox.js) | Get Microsoft Edge-like smooth scrolling on your favorite browser|
| [SecureFox](https://github.com/yokoffing/Better-Fox/blob/master/SecureFox.js) | Remove Telemetry, Mozilla experiments, Google Safe Browsing, and search engine suggestions in URL bar. Auto-upgrade mixed content to HTTPS. Add various privacy enhancements — all without breaking webpages. You read that right. No breakage 😁 |
| [user.js](https://github.com/yokoffing/Better-Fox/blob/master/user.js) | Unified list, minus some of my personal preferences. Users may download this list as their own user.js. |

## Who is this setup for?
**If you want a secure, blazing fast browsing experience, and don't want to deal with breakage, this setup is for you.** My objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓


## about:Privacy
**A note to hardcore privacy users:** I made [SecureFox](https://github.com/yokoffing/Better-Fox/blob/master/SecureFox.js) as private as I could, up to the point of experiencing breakage. My guiding principle was: "If it breaks it, it doesn't make it!" So things like WebGL and DRM are still enabled, and you won't find settings like `privacy.firstparty.isolate` or `network.http.referer.XOriginPolicy` mentioned here. BetterFox is designed to set-and-forget, not to troubleshoot and tinker. You can [compare different user.js files here](https://yokoffing.github.io/compare-user.js/).

TL;DR: If your threat level calls for anonymity and not just reasonable privacy, please use the [TOR browser](https://www.torproject.org). 👍


## Recommended Extensions
1. **[uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)**: lightweight content blocker

   Add the custom list [dbl.oisd.nl](https://abp.oisd.nl/) for the best in-browser protection. It's most comprehensive, unified domain blocklist available, actively maintained to prevent false positives and to keep the web usable! Use it alongside your usual lists. [Read More](https://www.reddit.com/r/oisd_blocklist/comments/dwxgld/dbloisdnl_internets_1_domain_blocklist/?sort=new) [[DNS format](https://dbl.oisd.nl) | [ABP format](https://abp.oisd.nl)]

MultiAccount Containers : essential privacy for anyone enabling third-party cookies.

2. **[Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager)**: encrypted password manager.

3. **[ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls)**: clean tracking parameters from URLs, Google searches, etc.

4. **[Bypass Paywalls Clean](https://github.com/magnolia1234/bypass-paywalls-firefox-clean#bypass-paywalls-clean-for-firefox)**: gain user access to the Wall Street Jounral, the New York times, etc.

5. **[Tap to Tab](https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab)**: double-click (double tap) on a link to open it in a new tab. Designed with tablets and laptop trackpads in mind.


## Credit
Hours spent reviewing, condensing, and testing [ghacks user.js](https://github.com/ghacksuserjs/ghacks-user.js), about:config suggestions from websites and blogs, and keeping up with [Mozilla updates](https://wiki.mozilla.org/Firefox/Roadmap/Updates). (Where there is similiarity to other authors, credit goes to them.)
