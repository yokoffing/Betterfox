//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************
 * SecureFox                                                                *
 * "Natura non constristatur."                                              *     
 * priority: provide sensible security and privacy                          *  
 * version: August 2021                                                     *
 * url: https://github.com/yokoffing/Better-Fox                             *                   
****************************************************************************/

/****************************************************************************
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/

// PREF: Enhanced Tracking Protection (ETP)
// Tracking Content blocking will strip cookies and block all resource requests to domains listed in Disconnect.me.
// Firefox deletes all stored site data (incl. cookies, browser storage) if the site is a known tracker and hasn’t
// been interacted with in the last 30 days.
// [NOTE] FF86: "Strict" tracking protection enables dFPI.
// [1] https://blog.mozilla.org/firefox/control-trackers-with-firefox/
// [2] https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop
// [3] https://www.reddit.com/r/firefox/comments/l7xetb/network_priority_for_firefoxs_enhanced_tracking/gle2mqn/?web2x&context=3
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.pbmode.enabled", true); // default
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // default
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // default
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.socialtracking.block_cookies.enabled", true); // default
// user_pref("browser.contentblocking.customBlockList.preferences.ui.enabled", true);

// PREF: allow embedded tweets and Instagram posts
// [1] https://www.reddit.com/r/firefox/comments/l79nxy/firefox_dev_is_ignoring_social_tracking_preference/gl84ukk
user_pref("urlclassifier.trackingSkipURLs", "*.twitter.com, *.twimg.com"); // hidden
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // hidden

// PREF: Network Partitioning
// Network Partitioning (isolation) will allow Firefox to associate resources on a per-website basis rather than together
// in the same pool. This includes like the cache, favicons, CSS files, images, and even speculative connections(!). 
// [1] https://www.zdnet.com/article/firefox-to-ship-network-partitioning-as-a-new-anti-tracking-defense/
// [2] https://github.com/privacycg/storage-partitioning#introduction
// [3] https://developer.mozilla.org/en-US/docs/Web/Privacy/State_Partitioning#network_partitioning
// [4] https://blog.mozilla.org/security/2021/01/26/supercookie-protections/
// [5] https://hacks.mozilla.org/2021/02/introducing-state-partitioning/
user_pref("privacy.partition.network_state", true); // default

// PREF: Dynamic First-Party Isolation (dFPI) [aka State Paritioning]
// dFPI is a more web-compatible version of FPI, which double keys all third-party state by the origin of the top-level
// context. dFPI isolates user's browsing data for each top-level eTLD+1, but is flexible enough to apply web
// compatibility heuristics to address resulting breakage by dynamically modifying a frame's storage principal.
// dFPI isolates most sites while applying heuristics to allow sites through the isolation in certain circumstances for usability.
// [NOTE] dFPI partitions all of the following caches by the top-level site being visited: HTTP cache, image cache,
// favicon cache, HSTS cache, OCSP cache, style sheet cache, font cache, DNS cache, HTTP Authentication cache,
// Alt-Svc cache, and TLS certificate cache.
// [1] https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/State_Partitioning
// [2] https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/
user_pref("network.cookie.cookieBehavior", 5); // changes to 5 when Enhanced Tracking Protection is set to "Strict"
user_pref("browser.contentblocking.state-partitioning.mvp.ui.enabled", true); // default 
user_pref("browser.contentblocking.reject-and-isolate-cookies.preferences.ui.enabled", true); // default

// PREF: Redirect Tracking Prevention
// All storage is cleared (more or less) daily from origins that are known trackers and that
// haven’t received a top-level user interaction (including scroll) within the last 45 days.
// [1] https://www.ghacks.net/2020/08/06/how-to-enable-redirect-tracking-in-firefox/
// [2] https://www.cookiestatus.com/firefox/#other-first-party-storage
// [3] https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/Redirect_tracking_protection
// [4] https://www.ghacks.net/2020/03/04/firefox-75-will-purge-site-data-if-associated-with-tracking-cookies/
// [5] https://github.com/arkenfox/user.js/issues/1089
user_pref("privacy.purge_trackers.enabled", true); // default

// PREF: Hyperlink Auditing (click tracking).
user_pref("browser.send_pings", false); // default
// enforce same host just in case.
// user_pref("browser.send_pings.require_same_host", true);

// PREF: sending additional analytics to web servers
// [1] https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon
user_pref("beacon.enabled", false);

// PREF: battery status tracking
user_pref("dom.battery.enabled", false);

// PREF: set a default permission for Virtual Reality
// 0=always ask (default), 1=allow, 2=block
// [SETTING] to add site exceptions: Ctrl+I>Permissions>Access Virtual Reality Devices
// [SETTING] to manage site exceptions: Options>Privacy & Security>Permissions>Virtual Reality>Settings
// user_pref("permissions.default.xr", 2);

// PREF: CRLite
// This will reduce the number of times an OCSP server needs to be contacted and therefore increase privacy.
// [1] https://blog.mozilla.org/security/2020/01/09/crlite-part-2-end-to-end-design/
// [2] https://github.com/arkenfox/user.js/issues/1065
user_pref("security.pki.crlite_mode", 2);
user_pref("security.remote_settings.crlite_filters.enabled", true);

// PREF: Local Storage Next Generation (LSNG) (DOMStorage) 
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1286798
user_pref("dom.storage.next_gen", true);

// PREF: disable cache
// user_pref("browser.cache.disk.enable", true); // default

// PREF: disable offline cache (appCache)
// [WARNING] The API is easily fingerprinted, do not disable!
// [1] https://github.com/arkenfox/user.js/issues/1055
// user_pref("browser.cache.offline.enable", false);

/******************************************************************************
 * SECTION: CLEARING DATA DEFAULTS                           *
******************************************************************************/

// PREF: reset default items to clear with Ctrl-Shift-Del
// This dialog can also be accessed from the menu History>Clear Recent History
// Firefox remembers your last choices. This will reset them when you start Firefox.
// Regardless of what you set privacy.cpd.downloads to, as soon as the dialog
// for "Clear Recent History" is opened, it is synced to the same as 'history'.
// user_pref("privacy.cpd.downloads", true); // not used, see note above
user_pref("privacy.cpd.history", true); // Browsing & Download History
user_pref("privacy.cpd.formdata", true); // Form & Search History
user_pref("privacy.cpd.offlineApps", true); // Offline Website Data
user_pref("privacy.cpd.cache", true); // Cache
user_pref("privacy.cpd.cookies", false); // Cookies
user_pref("privacy.cpd.sessions", false); // Active Logins
user_pref("privacy.cpd.siteSettings", false); // Site Preferences

// PREF: reset default 'Time range to clear' for 'Clear Recent History'.
// Firefox remembers your last choice. This will reset the value when you start Firefox.
// 0=everything, 1=last hour, 2=last two hours, 3=last four hours,
// 4=today, 5=last five minutes, 6=last twenty-four hours
// The values 5 + 6 are not listed in the dropdown, which will display a
// blank value if they are used, but they do work as advertised.
user_pref("privacy.sanitize.timeSpan", 0);

// PREF: set History section to show all options
user_pref("privacy.history.custom", true);

// PREF: limit third-party cookies
// Because of dFPI and our tracking protection(s), we will only clear nonsecure cookies each session.
// user_pref("network.cookie.thirdparty.sessionOnly", false);
// user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// PREF: delete all cookies after a certain period of time
// ALTERNATIVE: Use a cookie manager extension
// user_pref("network.cookie.lifetimePolicy", 3);
// user_pref("network.cookie.lifetime.days", 7);

/******************************************************************************
 * SECTION: SPECULATIVE CONNECTIONS                           *
******************************************************************************/

// [NOTE] Firefox 85+ partitions pooled connections, prefetch connections, pre-connect connections,
// speculative connections, TLS session identifiers, and other connections. For more information, see "PREF: Network
// Partitioning and "PREF: Dynamic First-Party Isolation". You may customize this section to your comfort-level.

// [NOTE] uBlock Origin overrides Firefox defaults and sets these settings to false. To enable:
// [SETTINGS] uBlock Origin -> Extension options -> Settings -> Privacy -> uncheck "Disable pre-fetching"

// PREF: Network Predictor
// Keeps track of components that were loaded during the visit of a page on the Internet so that the browser knows next time
// which resources to request from the web server:
// It uses a local file to remember which resources were needed when the user visits a webpage (such as image.jpg and script.js),
// so that the next time the user mouseovers a link to that webpage, this history can be used to predict what resources will
// be needed rather than wait for the document to link those resources.
// Only performs pre-connect, not prefetch, by default. No data is actually sent to the site until a user actively clicks a link.
// [NOTE] DNS pre-resolve and TCP preconnect (which includes SSL handshake). Honors settings in Private Browsing to erase data.
// [1] https://wiki.mozilla.org/Privacy/Reviews/Necko
// [2] https://www.ghacks.net/2014/05/11/seer-disable-firefox/
// [3] https://github.com/dillbyrne/random-agent-spoofer/issues/238#issuecomment-110214518
// [4] https://www.igvita.com/posa/high-performance-networking-in-google-chrome/#predictor
user_pref("network.predictor.enabled", true); // default
// Fetch critical resources on the page ahead of time as determined by the local file, to accelerate rendering of the page.
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.enable-prefetch", true);

// PREF: DNS pre-resolve <link rel="dns-prefetch">
// Resolve hostnames ahead of time, to avoid DNS latency.
// [1] https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
// [2] https://css-tricks.com/prefetching-preloading-prebrowsing/#dns-prefetching
// [3] http://www.mecs-press.org/ijieeb/ijieeb-v7-n5/IJIEEB-V7-N5-2.pdf
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", false);

// PREF: Preconnect to the autocomplete URL in the address bar
// Firefox preloads URLs that autocomplete when a user types into the address bar.
// Connects to destination server ahead of time, to avoid TCP handshake latency.
// [NOTE] Firefox will perform DNS lookup and TCP and TLS handshake, but will not start sending or receiving HTTP data.
// [1] https://www.ghacks.net/2017/07/24/disable-preloading-firefox-autocomplete-urls/
user_pref("browser.urlbar.speculativeConnect.enabled", true); // default

// PREF: Link prefetching <link rel="prefetch">
// Fetch critical resources on the page ahead of time, to accelerate rendering of the page.
// Websites can provide Firefox with hints as to which page is likely the be accessed next so that it is downloaded right away,
// even if you don't request that link. The prefetch resource hint tells the browser to go grab a resource even though it
// hasn’t been requested by the current page, and puts it into cache. Firefox will request the resource at a low
// priority and only during idle time so that the resource doesn’t compete with anything needed for the current navigation.
// When the user clicks on a link, or initiates any kind of page load, link prefetching will stop and any prefetch hints will be discarded.
// [1] https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Privacy_implications
// [2] http://www.mecs-press.org/ijieeb/ijieeb-v7-n5/IJIEEB-V7-N5-2.pdf
// [3] https://timkadlec.com/remembers/2020-06-17-prefetching-at-this-age/
user_pref("network.prefetch-next", true); // default

// PREF: Prefetch links upon hover
// When you hover over links, connections are established to linked domains and servers automatically to speed up the loading
// process should you click on the link. To improve the loading speed, Firefox will open predictive connections to sites when
// the user hovers their mouse over. In case the user follows through with the action, the page can begin loading faster since
// some of the work was already started in advance.
// [NOTE] TCP and SSL handshakes are set up in advance but page contents are not downloaded until a click on the link is registered.
// [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// [2] https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links
user_pref("network.http.speculative-parallel-limit", 6); // default

// PREF: Preload <link rel=preload>
// Fetch the entire page with all of its resources ahead of time, to enable instant navigation when triggered by the user.
// Allows developers to hint to the browser to preload some resources with a higher priority and in advance, which helps the web page to
// render and get into the stable and interactive state faster. This spec assumes that sometimes it’s best to always download an asset,
// regardless of whether the browser thinks that’s a good idea or not(!). Unlike prefetching assets, which can be ignored, preloading assets
// must be requested by the browser.
// [WARNING] Interferes with content blocking extensions, even if you utilize DNS-level blocking as well. Disable this!
// [1] https://www.janbambas.cz/firefox-enables-link-rel-preload-support/
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1639607
// [3] https://css-tricks.com/prefetching-preloading-prebrowsing/#future-option-preloading
user_pref("network.preload", false);

// PREF: New tab preload
// [WARNING] Disabling this causes a delay when opening a new tab.
// [1] https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// [2] https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
// [3] https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
user_pref("browser.newtab.preload", true); // default

/******************************************************************************
 * SECTION: SEARCH / URL BAR                              *
******************************************************************************/

// PREF: do not trim certain parts of the URL
// [1] https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Preference_reference/browser.urlbar.trimURLs#values
// user_pref("browser.urlbar.trimURLs", false);

// PREF: Enable a seperate search engine for Private Windows
// Remember to go into Preferences -> Search and select another search provider (like DuckDuckGo)
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

// PREF: Disable live search engine suggestions (Google, Bing, etc.)
// [WARNING] Search engines keylog every character you type from the URL bar
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false); // default

// PREF: URL bar domain guessing
// Domain guessing intercepts DNS "hostname not found errors" and resends a
// request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
// via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
// as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
// intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
// and is a security risk (e.g. common typos & malicious sites set up to exploit this).
user_pref("browser.fixup.alternate.enabled", false);

// PREF: "Not Secure" text in the URL bar on HTTP sites
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);

// PREF: Disable location bar autofill
// https://support.mozilla.org/en-US/kb/address-bar-autocomplete-firefox#w_url-autocomplete
// user_pref("browser.urlbar.autoFill", false);

// PREF: Enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
// Firefox has some protections, but it is better to be safe than sorry.
// [!] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded.
// [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
// [1] https://wiki.mozilla.org/IDN_Display_Algorithm
// [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
// [3] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
// [4] https://www.xudongz.com/blog/2017/idn-phishing/
user_pref("network.IDN_show_punycode", true);

/******************************************************************************
 * SECTION: HTTPS-FIRST POLICY                          *
******************************************************************************/

// PREF: HTTPS-First Policy
// Firefox attempts to make all connections to websites secure, and falls back to insecure
// connections only when a website does not support it. Unlike HTTPS-Only Mode, Firefox
// will NOT ask for your permission before connecting to a website that doesn’t support secure connections.
// [NOTE] HTTPS-Only Mode needs to be disabled for HTTPS First to work.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1706552
user_pref("dom.security.https_first", true);
user_pref("dom.security.https_first_pbm", true); // default

/******************************************************************************
 * SECTION: HTTPS-ONLY MODE                              *
******************************************************************************/

// PREF: HTTPS-only connections
// Firefox asks for your permission before connecting to a website that doesn’t support secure connections.
// [1] https://blog.mozilla.org/security/2020/11/17/firefox-83-introduces-https-only-mode/
// user_pref("dom.security.https_only_mode", true);
// user_pref("dom.security.https_only_mode_ever_enabled", true);

// PREF: HTTPS-only connection in Private Browsing windows only
user_pref("dom.security.https_only_mode_pbm", true);
user_pref("dom.security.https_only_mode_ever_enabled_pbm", true);

// PREF: Disable HTTP background requests
// When attempting to upgrade, if the server doesn't respond within 3 seconds, Firefox
// sends HTTP requests in order to check if the server supports HTTPS or not.
// This is done to avoid waiting for a timeout which takes 90 seconds.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1642387,1660945
// [2] https://blog.mozilla.org/attack-and-defense/2021/03/10/insights-into-https-only-mode/
user_pref("dom.security.https_only_mode_send_http_background_request", false);

// PREF: Enable HTTPS-Only mode for local resources
user_pref("dom.security.https_only_mode.upgrade_local", true);

/******************************************************************************
 * SECTION: DNS-over-HTTPS                                                    *
******************************************************************************/

// PREF: DNS-over-HTTPS (DoH) provider
// Mozilla uses Cloudfare by default. NextDNS is also an option.
// [NOTE] You can set this to 0 if you are already using secure DNS for your entire network (e.g. OS-level, router-level).
// [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
// [2] https://www.internetsociety.org/blog/2018/12/dns-privacy-support-in-mozilla-firefox/
// 0=off, 2=TRR preferred, 3=TRR only, 5=TRR disabled
user_pref("network.trr.mode", 3);
user_pref("network.trr.send_user-agent_headers", false); // default
user_pref("network.dns.skipTRR-when-parental-control-enabled", false);

// PREF: Force FF to always use your custom DNS resolver
// You will type between the "" for both prefs.
// I recommend creating your own URI with NextDNS for both privacy and security.
// https://nextdns.io
user_pref("network.trr.uri", "");
user_pref("network.trr.custom_uri", "");

/******************************************************************************
 * SECTION: ESNI / ECH                            *
******************************************************************************/

// PREF: Enable Encrypted Client Hello (ECH)
// Evolution of ESNI.
// [!] Breaks Discord login through Firefox.
// ESNI: https://www.eff.org/deeplinks/2018/09/esni-privacy-protecting-upgrade-https/
// ECH: https://blog.mozilla.org/security/2021/01/07/encrypted-client-hello-the-future-of-esni-in-firefox/
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.use_https_rr_as_altsvc", true);

/******************************************************************************
 * SECTION: PASSWORDS                             *
******************************************************************************/

// PREF: Disable autofilling saved passwords on HTTP pages and show warning
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1217152,1319119
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);

// Disable capturing credentials in private browsing
user_pref("signon.privateBrowsingCapture.enabled", false);

// PREF: Disable Firefox Lockwise (about:logins)
// [1] https://lockwise.firefox.com/
// [2] https://support.mozilla.org/en-US/kb/firefox-lockwise-managing-account-data
user_pref("signon.management.page.breach-alerts.enabled", false); 
user_pref("signon.management.page.breachAlertUrl", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");

// PREF: Disable Firefox built-in password generator
// Create passwords with random characters and numbers.
// [NOTE] Doesn't work with Lockwise disabled!
// [1] https://wiki.mozilla.org/Toolkit:Password_Manager/Password_Generation
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);

// PREF: Disable password manager
// NOTE” This does not clear any passwords already saved
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
user_pref("signon.schemeUpgrades", false);
user_pref("signon.showAutoCompleteFooter", false);
user_pref("signon.autologin.proxy", false);
user_pref("signon.debug", false);

// PREF: Disable Firefox import password from signons.sqlite file
// [1] https://support.mozilla.org/en-US/questions/1020818
user_pref("signon.management.page.fileImport.enabled", false);
user_pref("signon.importedFromSqlite", false);
user_pref("signon.recipes.path", "");

// PREF: Disable auto-filling username & password form fields
// Can leak in cross-site forms and be spoofed
// NOTE: Username and password is still available when you enter the field
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.autocompleteOff", true);
user_pref("signon.showAutoCompleteOrigins", false);

// PREF: Disable websites autocomplete
// Don't let sites dictate use of saved logins and passwords. 
user_pref("signon.storeWhenAutocompleteOff", false);

// PREF: Disable formless login capture
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
user_pref("signon.formlessCapture.enabled", false);

// PREF: Disable Firefox Monitor
user_pref("extensions.fxmonitor.enabled", false);

/****************************************************************************
 * SECTION: ADDRESS + CREDIT CARD MANAGER                                   *
****************************************************************************/

// PREF: Disable Form Autofill
// NOTE: stored data is not secure (uses a JSON file)
// [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill
// [2] https://www.ghacks.net/2017/05/24/firefoxs-new-form-autofill-is-awesome
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.formfill.enable", false);

/******************************************************************************
 * SECTION: MIXED CONTENT + CROSS-SITE                             *
******************************************************************************/

// PREF: limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
// Hardens against potential credentials phishing
// 0=don't allow sub-resources to open HTTP authentication credentials dialogs
// 1=don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2=allow sub-resources to open HTTP authentication credentials dialogs (default)
// [1] https://www.fxsitecompat.com/en-CA/docs/2015/http-auth-dialog-can-no-longer-be-triggered-by-cross-origin-resources/
user_pref("network.auth.subresource-http-auth-allow", 1);

// PREF: disable automatic authentication on Microsoft sites [WINDOWS]
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1695693,1719301
user_pref("network.http.windows-sso.enabled", false);

// PREF: Block insecure active content (scripts) on HTTPS pages.
// [1] https://trac.torproject.org/projects/tor/ticket/21323
user_pref("security.mixed_content.block_active_content", true); // default

// PREF: Block insecure passive content (images) on HTTPS pages.
// user_pref("security.mixed_content.block_display_content", true);

// PREF: Upgrade passive content to use HTTPS on secure pages.
user_pref("security.mixed_content.upgrade_display_content", true);

// PREF: Block insecure downloads from secure sites
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1660952
user_pref("dom.block_download_insecure", true);

// PREF: allow PDFs to load javascript
// https://www.reddit.com/r/uBlockOrigin/comments/mulc86/firefox_88_now_supports_javascript_in_pdf_files/
user_pref("pdfjs.enableScripting", false);

// PREF: Disable bypassing 3rd party extension install prompts
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1659530,1681331
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// PREF: Disable permissions delegation
// Currently applies to cross-origin geolocation, camera, mic and screen-sharing
// permissions, and fullscreen requests. Disabling delegation means any prompts
// for these will show/use their correct 3rd party origin
// [1] https://groups.google.com/forum/#!topic/mozilla.dev.platform/BdFOMAuCGW8/discussion
user_pref("permissions.delegation.enabled", false); // default

// PREF: Enforce TLS 1.0 and 1.1 downgrades as session only
user_pref("security.tls.version.enable-deprecated", false); // default

// PREF: Enable (limited but sufficient) window.opener protection
// Makes rel=noopener implicit for target=_blank in anchor and area elements when no rel attribute is set.
// https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/
user_pref("dom.targetBlankNoOpener.enabled", true); // default

// PREF: Enable "window.name" protection
// If a new page from another domain is loaded into a tab, then window.name is set to an empty string. The original
// string is restored if the tab reverts back to the original page. This change prevents some cross-site attacks.
user_pref("privacy.window.name.update.enabled", true); // default

// PREF: Downgrade Cross-Origin (Third-Party) Referers
// CROSS ORIGIN: control when to send a referer
// [1] https://github.com/arkenfox/user.js/issues/1077
// 0=always (default), 1=only if base domains match, 2=only if hosts match
user_pref("network.http.referer.XOriginPolicy", 0); // default
// Control the amount of information to send.
// 0=send full URI (default), 1=scheme+host+port+path, 2=scheme+host+port
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/******************************************************************************
 * SECTION: VARIOUS                            *
******************************************************************************/

// PREF: Disable favicons in shortcuts
// URL shortcuts use a cached randomly named .ico file which is stored in your
// profile/shortcutCache directory. The .ico remains after the shortcut is deleted.
// If set to false then the shortcuts use a generic Firefox icon
// user_pref("browser.shell.shortcutFavicons", false);

// PREF: Enable FTP protocol
// Firefox redirects any attempt to load a FTP resource to the default search engine if the FTP protocol is disabled.
// [1] https://www.ghacks.net/2018/02/20/firefox-60-with-new-preference-to-disable-ftp/
// user_pref("network.ftp.enabled", true);

// PREF: Decode URLs in other languages
// [NOTE] I leave this off because it has unintended consequecnes when copy+paste links with underscores.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1320061
// user_pref("browser.urlbar.decodeURLsOnCopy", true);

// PREF: Number of usages of the web console.
// If this is less than 5, then pasting code into the web console is disabled
// user_pref("devtools.selfxss.count", 5);

/******************************************************************************
 * SECTION: GOOGLE SAFE BROWSING (GSB)                                        *
******************************************************************************/

// PREF: GSB checks for downloads (remote)
// To verify the safety of certain executable files, Firefox may submit some information about the
// file, including the name, origin, size and a cryptographic hash of the contents, to the Google
// Safe Browsing service which helps Firefox determine whether or not the file should be blocked.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");

// PREF: GSB, master switch
// WARNING: Be sure to have alternate security measures if you disable Safe Browsing.
// Increased privacy away from Google, but less protection against threats.
// Privacy & Security>Security>... "Block dangerous and deceptive content"
// [1] https://www.wikiwand.com/en/Google_Safe_Browsing#/Privacy
// [2] https://ashkansoltani.org/2012/02/25/cookies-from-nowhere
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// PREF: GSB checking downloads local + remote, master switch
// Privacy & Security>Security>... "Block dangerous downloads"
user_pref("browser.safebrowsing.downloads.enabled", false);

// PREF: GSB checks for unwanted software
// Privacy & Security>Security>... "Warn you about unwanted and uncommon software"
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

// PREF: 'ignore this warning' on Google Safe Browsing warnings
// If clicked, it bypasses the block for that session. This is a means for admins to enforce SB.
// [1] https://bugzilla.mozilla.org/1226490
// user_pref("browser.safebrowsing.allowOverride", false);
// user_pref("browser.safebrowsing.blockedURIs.enabled", true);

/******************************************************************************
 * SECTION: MOZILLA                                                   *
******************************************************************************/

// PREF: Use Mozilla geolocation service instead of Google when geolocation is enabled
// user_pref("permissions.default.geo", 0);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
// PREF: enable logging geolocation to the console
// user_pref("geo.provider.network.logging.enabled", true);

// PREF: Enforce Firefox blocklist for extensions + No hiding tabs
// This includes updates for "revoked certificates".
// [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
// [2] https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.enabled", true); // default

// PREF: Disable automatic extension updates
// user_pref("extensions.update.enabled", false);
// user_pref("extensions.autoupdate.enabled", false);
// user_pref("extensions.update.url", "");
// user_pref("extensions.update.background.url", "");

// PREF: disable auto-INSTALLING Firefox updates via a background service
// [SETTING] General>Firefox Updates>Automatically install updates>When Firefox is not running
// [1] https://support.mozilla.org/kb/enable-background-updates-firefox-windows ***/
// user_pref("app.update.background.scheduling.enabled", false);

/******************************************************************************
 * SECTION: TELEMETRY                                                   *
******************************************************************************/

// PREF: disable all the various Mozilla telemetry, studies, reports, etc.
// Telemtry
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);

// Corroborator
user_pref("corroborator.enabled", false);

// Telemetry Coverage
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
// user_pref("toolkit.coverage.endpoint.base", "");

// Health Reports
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical data.
user_pref("datareporting.healthreport.uploadEnabled", false);

// New data submission, master kill switch
// If disabled, no policy is shown or upload takes place, ever
// [1] https://bugzilla.mozilla.org/1195552
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// PREF: Studies
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to install and run studies
user_pref("app.shield.optoutstudies.enabled", false);
// user_pref("messaging-system.rsexperimentloader.enabled", false); [???]

// Personalized Extension Recommendations in about:addons and AMO
// [NOTE] This pref has no effect when Health Reports are disabled.
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);

// PREF: disable crash reports
// user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // default
// PREF: backlogged crash reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// PREF: Captive Portal detection
// [WARNING] Do NOT use for mobile devices. May NOT be able to use Firefox on public wifi (hotels, coffee shops, etc).
// [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy
// [2] https://wiki.mozilla.org/Necko/CaptivePortal
// user_pref("captivedetect.canonicalURL", "");
// user_pref("network.captive-portal-service.enabled", false);

// PREF: Network Connectivity checks
// [WARNING] Do NOT use for mobile devices. May NOT be able to use Firefox on public wifi (hotels, coffee shops, etc).
// [1] https://bugzilla.mozilla.org/1460537
// user_pref("network.connectivity-service.enabled", false);

// PREF: software that continually reports what default browser you are using
user_pref("default-browser-agent.enabled", false);

// PREF: "report extensions for abuse"
user_pref("extensions.abuseReport.enabled", false);

// PREF: Normandy/Shield [extensions tracking]
// Shield is an telemetry system (including Heartbeat) that can also push and test "recipes"
user_pref("app.normandy.enabled", false);
// user_pref("app.normandy.api_url", "");

// PREF: PingCentre telemetry (used in several System Add-ons)
// Currently blocked by 'datareporting.healthreport.uploadEnabled'
user_pref("browser.ping-centre.telemetry", false);

// PREF: Activity Stream telemetry 
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
