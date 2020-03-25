# BetterFox /v.74
about:config tweaks to enhance <a href="https://www.mozilla.org/en-US/firefox/new/">Mozilla Firefox</a>. Files are updated as needed for your <a href="http://kb.mozillazine.org/User.js_file">user.js</a>.


## Simple goals:
1) <b>Minimalism:</b> get what isn't needed out of the way
2) <b>Efficiency:</b> unleash Firefox's ability to be fast and performant
3) <b>Security:</b> sensible privacy and security without causing site breakage


## Simple configs:
1) <b>FastFox:</b> immensely increase Firefox's browsing speed. Give Chrome a run for its money!
2) <b>PeskyFox:</b> unclutter the new tab page. Remove Pocket and form autofill. Prevent Firefox from serving annoying webpage notifications.
3) <b>SecureFox:</b> remove Telemetry, Mozilla experiments, Google Safe Browsing, and search engine suggestions in URL bar. Auto-upgrade mixed content to HTTPS. Add various privacy enhancements — all without breaking webpages. You read that right. No breakage 😁
4) <b>SmoothFox:</b> (NEW) get Edge-like smooth scrolling on your favorite browser (requires user config)


## Who is this setup for?
<b>If you want a secure, blazing fast browsing experience, and don't want to deal with breakage, this setup is for you.</b> My objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓


## about:Privacy
<b>A note to hardcore privacy users:</b> <a href="https://github.com/pyllyukko/user.js">There are alternatives</a> <a href="https://github.com/ghacksuserjs/ghacks-user.js">for you</a>. I made <a href="https://github.com/hjstephens09/Better-Fox/blob/master/SecureFox.js">SecureFox</a> as private as I could, up to the point of experiencing breakage. My guiding principle was: "If it breaks it, it doesn't make it!" So things like WebGL and DRM are still enabled, and you won't find settings like <privacy.firstparty.isolate> or <network.http.referer.XOriginPolicy> mentioned here. BetterFox is designed to set-and-forget, not to troubleshoot and tinker.

TL;DR: If your threat level calls for anonymity and not just reasonable privacy, please use the <a href="https://www.torproject.org">TOR browser</a>. 👍


## Recommended Extensions
<a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?src=search"><b>uBlock Origin</a>:</b> lightweight content blocker
<p>Add the custom list <a href="https://abp.oisd.nl/">dbl.oisd.nl</a> for the best in-browser protection. It's most comprehensive, unified domain blocklist available, actively maintained to prevent false positives and to keep the web usable! Use it alongside your usual lists. <a href="https://www.reddit.com/r/oisd_blocklist/comments/dwxgld/dbloisdnl_internets_1_domain_blocklist/?sort=new">Read More</a> [<a href="https://dbl.oisd.nl">DNS format</a> | <a href="https://abp.oisd.nl">ABP format</a>]

<a href="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager"><b>Bitwarden</a>:</b> encrypted password manager.

<a href="https://addons.mozilla.org/en-US/firefox/addon/clearurls"><b>ClearURLs</a>:</b> clean tracking parameters from URLs, Google searches, etc.

<a href="https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab"><b>Tap to Tab</a>:</b> double-click (double tap) on a link to open it in a new tab. Designed with tablets and laptop trackpads in mind.


## Credit
Hours spent reviewing, condensing, and testing <a href="https://github.com/ghacksuserjs/ghacks-user.js">ghacks user.js</a>, about:config suggestions from websites and blogs, and keeping up with <a href="https://wiki.mozilla.org/Firefox/Roadmap/Updates">Mozilla updates</a>. (Where there is similiarity to ghacks or other authors, credit goes to them.)
