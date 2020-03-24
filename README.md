# BetterFox  /v.74
about:config tweaks to enhance Firefox. Updated every stable release for your <a href="http://kb.mozillazine.org/User.js_file">user.js</a> file.


## Three simple goals:
1) <b>Minimalism:</b> get what isn't needed out of the way
2) <b>Efficiency:</b> configuring your browser should be simple
3) <b>Security:</b> upgrade security and privacy without causing website breakage


## Three simple configs:
1) <b>FastFox:</b> immensely increase Firefox's browsing speed. Give Chrome a run for its money!
2) <b>PeskyFox:</b> unclutter the new tab page. Remove Pocket and form autofill. Prevent Firefox from randomly going offline, and from serving annoying webpage notifications.
3) <b>SecureFox:</b> remove Telemetry, Mozilla experiments, Google Safe Browsing, and search engine suggestions in URL bar. Auto-upgrade mixed content to HTTPS. Add various privacy enhancements — all without breaking webpages. You read that right. No breakage 😁

Credit: Hours spent reviewing, condensing, and testing <a href="https://github.com/ghacksuserjs/ghacks-user.js">ghacks user.js</a>, about:config suggestions from websites and blogs, and keeping up with <a href="https://wiki.mozilla.org/Firefox/Roadmap/Updates">Mozilla updates</a>. (Where there is similiarity to ghacks, credit goes to them.)


## Who is this setup for?
<b>If you want a secure, blazing fast browsing experience, and don't want to deal with breakage, this setup is for you.</b> My objective is to make the defaults sufficient enough for the average privacy-minded user, but remain trouble-free enough that my grandmother could use it. <strike>(That puts a whole new twist on being a foxy grandma!)</strike> Edit: Sorry for the dad joke 😓

<b>A note to super, super privacy-concious users:</b> I made Firefox as secure as I could to the point of breakage. So things like WebGL and DRM are still enabled, and you won't find settings like <privacy.firstparty.isolate> or <network.http.referer.XOriginPolicy> mentioned here. <b>BetterFox is designed to set-and-forget, not to troubleshoot and tinker.</b> If your threat level calls for not just privacy but anonymity, please use the <a href="https://www.torproject.org">TOR browser</a>. Or if you want to use my configs as a baseline to tinker with Firefox further, then have at it! 👍

## Required Reading
<a href="https://github.com/hjstephens09/Better-Fox/blob/master/user.js">BetterFox user.js</a> is intended for mid-range PCs (i.e. ~6GB RAM). This applies to only the first set of preferences, all of which are all found in <a href="https://github.com/hjstephens09/Better-Fox/blob/master/FastFox.js">FastFox</a>. Even if you don't thoroughly read the other two branches (PeskyFox and SecureFox), and you're simply downloading and inserting <a href="https://github.com/hjstephens09/Better-Fox/blob/master/user.js">BetterFox user.js</a> as-is, you still need to read through <a href="https://github.com/hjstephens09/Better-Fox/blob/master/FastFox.js">FastFox</a>.

If you have a budget PC or high-end machine, please adjust preferences found in <a href="https://github.com/hjstephens09/Better-Fox/blob/master/FastFox.js">FastFox</a> to what is appropriate for your machine. Most of the preferences work with a simple copy+paste. The rest of the prefs in the user.js (found in PeskyFox and SecureFox) can be applied universally on any machine.


## Recommended Extensions
<a href="https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/?src=search"><b>uBlock Origin</a>:</b> lightweight content blocker
<br>Add the custom list <a href="https://abp.oisd.nl/">dbl.oisd.nl</a> for the best in-browser protection. It's most comprehensive, unified domain blocklist available, actively maintained to prevent false positives and to keep the web usable! Use it alongside your usual lists. [<a href="https://dbl.oisd.nl">DNS format</a> | <a href="https://abp.oisd.nl">ABP format</a>] <a href="https://www.reddit.com/r/oisd_blocklist/comments/dwxgld/dbloisdnl_internets_1_domain_blocklist/?sort=new">Read More</a>

<a href="https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager"><b>Bitwarden</a>:</b> encrypted password manager.

<a href="https://addons.mozilla.org/en-US/firefox/addon/clearurls"><b>ClearURLs</a>:</b> clean tracking parameters from URLs, Google searches, etc.

<a href="https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab"><b>Tap to Tab</a>:</b> double-click (double tap) on a link to open it in a new tab. Designed with tablets and laptop trackpads in mind.

## Welcome!
This page was created on 23 March 2020. The configs continue to be polished.
