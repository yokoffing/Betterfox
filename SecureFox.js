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
 * version: 30 July 2020                                                    *
 * url: https://github.com/yokoffing/Better-Fox                             *                   
****************************************************************************/

/****************************************************************************
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/

// PREF: Enhanced Tracking Protection in Private Browsing mode 
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// PREF: Enhanced Tracking Protection for regular windows
// ALTERNATIVE: Allow an extension like uBlock Origin or Ghostery to protect you
// against social tracking instead. Firefox's Tracking Protection does not make
// exceptions to allow certain content (i.e. Twitter's embedded tweets on articles).
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// PREF: Regardless, Firefox will continue to block cryptominers, fingerprinters, etc.
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

/******************************************************************************
 * SECTION: COOKIES / CACHE                               *
******************************************************************************/

// PREF: Third-party cookies
// I recommended you block all third-party cookies as it is essential for ad
// companies, Google, random websites, etc. to not track you. If you're uncomfortable
// with providing exceptions or encountering rare site issues, alter this value.
// 1=disable third-party cookies, 3=blocks from unvisited websites,
// 4=block cross site and social media trackers (default)
// FF77+ 5=block cross site and social media trackers, and isolate remaining cookies
user_pref("network.cookie.cookieBehavior", 1);
// user_pref("pref.privacy.disable_button.cookie_exceptions", false);

// PREF: Limit third-party cookies to the current session even when they are allowed
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// PREF: Delete all cookies after a certain period of time
// ALTERNATIVE: Use a cookie manager extension
// user_pref("network.cookie.lifetimePolicy", 3);
// user_pref("network.cookie.lifetime.days", 7);

// PREF: Purge site data of sites associated with tracking cookies automatically
// Identify sites that set tracking cookies, remove those cookies (and other site data)
// if the site has not been interacted with in 30 days.
// https://www.ghacks.net/2020/03/04/firefox-75-will-purge-site-data-if-associated-with-tracking-cookies/
user_pref("privacy.purge_trackers.enabled", true);
user_pref("privacy.purge_trackers.logging.enabled", false);

// PREF: Samesite Cookies
// [!] This is an evovling standard.
// https://www.jardinesoftware.net/2019/10/28/samesite-by-default-in-2020/
// user_pref("network.cookie.sameSite.laxByDefault", true);
// user_pref("network.cookie.sameSite.noneRequiresSecure", true);

// PREF: Disable offline cache to limit tracking
user_pref("browser.cache.offline.enable", false);

// PREF: Disable media cache from writing to disk in Private Browsing
// NOTE: MSE (Media Source Extensions) are already stored in-memory in PB
// user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
// user_pref("media.memory_cache_max_size", 16384);

// PREF: Disable Firefox prefetching pages it thinks you will visit next
// Prefetching causes cookies from the prefetched site to be loaded and other potentially unwanted behavior.
// NOTE: You can set uBlock Origin to do disable preloading in its settings.
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

// PREF: Disable preloading of autocomplete URLs. Firefox preloads URLs that autocomplete
// when a user types into the address bar, which is a concern if URLs are suggested that the user
// does not want to connect to.
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);

// PREF: Disable link-mouseover opening connection to linked server
// https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links
user_pref("network.http.speculative-parallel-limit", 0);

// PREF: Disable "Hyperlink Auditing" (click tracking) and enforce same host in case
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);

/******************************************************************************
 * SECTION: SEARCH / URL BAR                              *
******************************************************************************/

// PREF: Enable a seperate search engine for Private Windows
// Remember to go into Preferences -> Search and select another search provider (like DuckDuckGo)
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

// PREF: Disable live search engine suggestions (Google, Bing, etc.)
// [!] Search engines keylog every character you type from the URL bar
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);

// PREF: Turn off all URL bar suggestions (bookmarks, history, open tabs)
// user_pref("browser.urlbar.suggest.searches", false);
// user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.bookmark", false);
// user_pref("browser.urlbar.suggest.openpage", false);

// PREF: Disable location bar dropdown
// This value controls the total number of entries to appear in the location bar dropdown.
// NOTE: Items (bookmarks/history/openpages) with a high "frequency"/"bonus" will always
// be displayed (no we do not know how these are calculated or what the threshold is),
// and this does not affect the search by search engine suggestion.
// NOTE: This setting is only useful if you want to enable search engine keywords
// but you want to limit suggestions shown.
// default=10, disable=0
// user_pref("browser.urlbar.maxRichResults", 0);

// PREF: Disable location bar domain guessing
// Domain guessing intercepts DNS "hostname not found errors" and resends a
// request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
// via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
// as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
// intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
// and is a security risk (e.g. common typos & malicious sites set up to exploit this)
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.typo.scheme", false);

// PREF: Disable location bar autofill
// https://support.mozilla.org/en-US/kb/address-bar-autocomplete-firefox#w_url-autocomplete
// user_pref("browser.urlbar.autoFill", false);

/******************************************************************************
 * SECTION: DNS-over-HTTPS                                                    *
******************************************************************************/

// PREF: Enable DNS-over-HTTPS
// https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
// https://www.internetsociety.org/blog/2018/12/dns-privacy-support-in-mozilla-firefox/
// 0=off, 2=TRR preferred, 3=TRR only, 5=TRR disabled
// user_pref("network.trr.mode", 3);

// PREF: Enable ESNI
// This prevents others from intercepting the TLS SNI extension and using it
// to determine what websites you are browsing.
// [1] https://www.eff.org/deeplinks/2018/09/esni-privacy-protecting-upgrade-https/
// user_pref("network.security.esni.enabled", true);

// PREF: Force FF to always use your custom DNS resolver
// You will type between the "" for both prefs.
// I recommend creating your own URI with NextDNS for both privacy and security
// [1] https://nextdns.io
// user_pref("network.trr.uri", "");
// user_pref("network.trr.custom_uri", "");

/******************************************************************************
 * SECTION: PASSWORDS                             *
******************************************************************************/
// PREF: Disable about:logins (Firefox Lockwise)
// https://lockwise.firefox.com/
// https://support.mozilla.org/en-US/kb/firefox-lockwise-managing-account-data
user_pref("signon.management.page.breach-alerts.enabled", false); 
user_pref("signon.management.page.breachAlertUrl", ""); 
// user_pref("signon.management.page.hideMobileFooter", true); 
// user_pref("signon.management.page.mobileAndroidURL", ""); 
// user_pref("signon.management.page.mobileAppleURL", ""); 
// user_pref("signon.management.page.showPasswordSyncNotification", false); 

// PREF: Disable autofilling saved passwords on HTTP pages and show warning
// https://bugzilla.mozilla.org/buglist.cgi?bug_id=1217152,1319119
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);

// PREF: Disable password manager
// NOTE” This does not clear any passwords already saved
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
user_pref("signon.schemeUpgrades", false);
user_pref("signon.showAutoCompleteFooter", false);
user_pref("signon.autologin.proxy", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.debug", false);

// PREF: Disable Firefox import password from signons.sqlite file
// https://support.mozilla.org/en-US/questions/1020818
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
// https://bugzilla.mozilla.org/show_bug.cgi?id=1166947
user_pref("signon.formlessCapture.enabled", false);

// PREF: Disable Firefox built-in password generator
// https://wiki.mozilla.org/Toolkit:Password_Manager/Password_Generation
// NOTE: Create passwords with random characters and numbers
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);

// PREF: Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources
// Hardens against potential credentials phishing
// 0=don't allow sub-resources to open HTTP authentication credentials dialogs
// 1=don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2=allow sub-resources to open HTTP authentication credentials dialogs (default)
// https://www.fxsitecompat.com/en-CA/docs/2015/http-auth-dialog-can-no-longer-be-triggered-by-cross-origin-resources/
user_pref("network.auth.subresource-http-auth-allow", 1);

/******************************************************************************
 * SECTION: MIXED CONTENT                             *
******************************************************************************/

// PREF: Disable insecure active content on HTTPS pages
// https://trac.torproject.org/projects/tor/ticket/21323
user_pref("security.mixed_content.block_active_content", true);

// PREF: Disable insecure passive content (such as images) on HTTPS pages
// Attempt to upgrade them to HTTPS.
user_pref("security.mixed_content.block_display_content", true);

// PREF: Block unencrypted requests from Flash on encrypted pages to mitigate MitM attacks
// https://bugzilla.mozilla.org/1190623
user_pref("security.mixed_content.block_object_subrequest", true);

/******************************************************************************
 * SECTION: VARIOUS SECURITY/PRIVACY ENHANCEMENTS                            *
******************************************************************************/

// PREF: Enforce TLS 1.0 and 1.1 downgrades as session only
user_pref("security.tls.version.enable-deprecated", false);

// 1030: disable favicons in shortcuts
// URL shortcuts use a cached randomly named .ico file which is stored in your
// profile/shortcutCache directory. The .ico remains after the shortcut is deleted.
// If set to false then the shortcuts use a generic Firefox icon
user_pref("browser.shell.shortcutFavicons", false);

// PREF: Disable sending additional analytics to web servers
// https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon
user_pref("beacon.enabled", false);

// PREF: Do not track battery status
user_pref("dom.battery.enabled", false);

// PREF: Enable (limited but sufficient) window.opener protection
// Makes rel=noopener implicit for target=_blank in anchor and area elements when no rel attribute is set
// [1] https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/
user_pref("dom.targetBlankNoOpener.enabled", true);

// PREF: Disable FTP protocol
// Firefox redirects any attempt to load a FTP resource to the default search engine if the FTP protocol is disabled.
// [1] https://www.ghacks.net/2018/02/20/firefox-60-with-new-preference-to-disable-ftp/
user_pref("network.ftp.enabled", false);

// PREF: Enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
// Firefox has some protections, but it is better to be safe than sorry.
// [!] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded.
// [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
// [1] https://wiki.mozilla.org/IDN_Display_Algorithm
// [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
// [3] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
// [4] https://www.xudongz.com/blog/2017/idn-phishing/
user_pref("network.IDN_show_punycode", true);

// PREF: Decode URLs in other languages
// https://bugzilla.mozilla.org/show_bug.cgi?id=1320061
user_pref("browser.urlbar.decodeURLsOnCopy", true);

// PREF: Enforce Firefox's built-in PDF reader
// This setting controls if the option "Display in Firefox" is available in the setting below
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With").
// default=false
user_pref("pdfjs.disabled", false);

// PREF: Enable QUIC protocol / HTTP3
// WARNING: Very experimental!
// https://www.litespeedtech.com/
// https://quic.rocks
// user_pref("network.http.http3.enabled", true);

// PREF: Disable Windows jumplist [WINDOWS-only]
// user_pref("browser.taskbar.lists.enabled", false);
// user_pref("browser.taskbar.lists.frequent.enabled", false);
// user_pref("browser.taskbar.lists.recent.enabled", false);
// user_pref("browser.taskbar.lists.tasks.enabled", false);

/******************************************************************************
 * SECTION: GOOGLE                                                            *
******************************************************************************/

// PREF: Disable Google Safe Browsing
// ! Please have alternative phishing and malware protection before you uncomment prefs.
// Increased privacy away from Google, but less protection against threats.
// 1 https://www.wikiwand.com/en/Google_Safe_Browsing#/Privacy
// 2 https://ashkansoltani.org/2012/02/25/cookies-from-nowhere
user_pref("browser.safebrowsing.allowOverride", true);
user_pref("browser.safebrowsing.appRepURL", "");
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false);
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);

// PREF: Use Mozilla geolocation service instead of Google when geolocation is enabled
// user_pref("permissions.default.geo", 0);
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

// PREF: Disable logging geolocation to the console
user_pref("geo.provider.network.logging.enabled", false);

/******************************************************************************
 * SECTION: MOZILLA                                                   *
******************************************************************************/

// PREF: Enforce Firefox blocklist for extensions
// This includes updates for "revoked certificates"
// [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
// [2] https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.enabled", true);

// PREF: Disable extension metadata
// Used when installing/updating an extension, and in daily background update checks.
// When false, extension detail tabs will have no description.
// user_pref("extensions.getAddons.cache.enabled", false);

// PREF: Allow HTTPS-only connections [FF76+]
// There is currently no way to relax this setting browser-side to make an exception.
// https://www.ghacks.net/2020/03/24/firefox-76-gets-optional-https-only-mode
// Alternative: HTTPZ extension https://addons.mozilla.org/en-US/firefox/addon/httpz/
// user_pref("dom.security.https_only_mode", true);

// PREF: Disable all the various Mozilla telemetry, studies, etc.
user_pref("app.normandy.api_url", "");
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// PREF: Disable Web Compatibility Reporter
// Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla
user_pref("extensions.webcompat-reporter.enabled", false);

/******************************************************************************
 * SECTION: VPN specific                                                      *
******************************************************************************/

// PREF: Turn off IPv6
// IPv6 can leak your real IP address when using a VPN
// [1] [find source]
// user_pref("network.dns.disableIPv6", true);
// user_pref("network.notify.IPv6", false);
