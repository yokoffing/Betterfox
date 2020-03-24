# BetterFox  /v.74
A set of preferences to enhance Firefox.
Updated every stable release. Go through the lists and add desired preferences to your <a href="http://kb.mozillazine.org/User.js_file">user.js</a>. Most of the preferences work with a simple copy+paste, or you can use the user.js provided.

## Three simple goals:
1) <b>Minimalism:</b> get what isn't needed out of the way
2) <b>Efficiency:</b> configuring your browser should be simple
3) <b>Security:</b> upgrade end user security and privacy without causing website breakage


## Three simple files:
1) <b>FastFox:</b> immensely increase Firefox's browsing speed.
2) <b>PeskyFox:</b> unclutter the new tab page. Remove Pocket and form autofill. Adjust download preferences. Prevent Firefox from randomly going offline and serving annoying webpage notifications.
3) <b>SecureFox:</b> remove Telemetry, Mozilla experiments, Google Safe Browsing, geolocation, and search engine suggestions in URL bar. Auto-upgrade mixed content to HTTPS. Add various privacy enhancements — all without breaking webpages. You read that right. No breakage 😁

Credit: Hours spent reviewing, condensing, and testing <a href="https://github.com/ghacksuserjs/ghacks-user.js">ghacks user.js</a>, about:config suggestions from websites and blogs, and keeping up with <a href="https://wiki.mozilla.org/Firefox/Roadmap/Updates">Mozilla updates</a>. (Where there is similiarity to ghacks, credit goes to them.)

## Who is this setup for?
<b>If you want a private, secure, fast browsing experience and don't want to deal with breakage, this setup is for you.</b> My objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓

<b>A note to super privacy-concious users:</b> I made Firefox as secure as I could to the point of breakage. (The only thing that could remotely cause breakage with my setup here is that third-party cookies are blocked by default.) So things like DRM are still enabled, and you won't find settings like <privacy.firstparty.isolate> or <network.http.referer.XOriginPolicy> mentioned here. <b>BetterFox is designed to set-and-forget, not to troubledshoot and tinker.</b> If your threat level calls not just privacy but anonymity, then please use the <a href="https://www.torproject.org">TOR browser</a>.

## Recommended Extensions
<a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?src=search">uBlock Origin</a>: lightweight content blocker
<br>Add the custom list <a href="https://abp.oisd.nl/">dbl.oisd.nl</a> for the best in-browser protection. It's most comprehensive, unified domain blocklist available, actively maintained to prevent false positives and to keep the web usable! Use it alongside your usual lists. <a href="https://www.reddit.com/r/oisd_blocklist/comments/dwxgld/dbloisdnl_internets_1_domain_blocklist/?sort=new">Read More</a> [<a href="https://dbl.oisd.nl">DNS format</a> | <a href="https://abp.oisd.nl">ABP format</a>]

<a href="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager">Bitwarden</a>: encrypted password manager.

<a href="https://addons.mozilla.org/en-US/firefox/addon/clearurls">ClearURLs</a>: clean tracking parameters from URLs, Google searches, etc.

<a href="https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab">Tap to Tab</a>: double-click (double tap) on a link to open it in a new tab. Designed with tablets and laptop trackpads in mind.
