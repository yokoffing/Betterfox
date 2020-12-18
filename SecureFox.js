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
 * version: 18 December 2020                                                *
 * url: https://github.com/yokoffing/Better-Fox                             *                   
****************************************************************************/

/****************************************************************************
 * SECTION: TRACKING PROTECTION                                             *
****************************************************************************/

// PREF: Disable Enhanced Tracking Protection (ETP) for regular windows
// ETP does not make exceptions to allow certain content (i.e. Twitter's embedded tweets on articles) to appear
// like Brave browser does. Let uBlock Origin or Ghostery handle regular browsing and ETP serve as additional
// protection in private browsing windows.
// user_pref("privacy.trackingprotection.enabled", false); /* default */

// PREF: ETP in Private Browsing mode 
user_pref("privacy.trackingprotection.pbmode.enabled", true);

// PREF: Regardless, Firefox will continue to block cryptominers, fingerprinters, etc.
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);

// PREF: Disable Hyperlink Auditing (click tracking).
user_pref("browser.send_pings", false);
// Enforce same host just in case.
user_pref("browser.send_pings.require_same_host", true);

// PREF: Disable sending additional analytics to web servers
// https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon
user_pref("beacon.enabled", false);

// PREF: Do not track battery status
user_pref("dom.battery.enabled", false);

/******************************************************************************
 * SECTION: STORAGE                              *
******************************************************************************/

// PREF: Cookies and Site Isolation
// If you're uncomfortable with Mozilla's tracker isolation policies, alter this value to 1.
// 1=disable third-party cookies (may cause site breakage)
// 4=block cross site and social media trackers (default)
// 5=block cross site and social media trackers, and isolate remaining cookies (Dynamic First Party Isolation)
user_pref("network.cookie.cookieBehavior", 5);
// user_pref("pref.privacy.disable_button.cookie_exceptions", false);

// PREF: Redirect tracking prevention + Purge site data of sites associated with tracking cookies automatically.
// All storage is cleared (more or less) daily from origins that are known trackers and that
// haven’t received a top-level user interaction (including scroll) within the last 45 days. 
// https://www.cookiestatus.com/firefox/#other-first-party-storage
// https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Privacy/Redirect_tracking_protection
// https://www.ghacks.net/2020/03/04/firefox-75-will-purge-site-data-if-associated-with-tracking-cookies/
user_pref("privacy.purge_trackers.enabled", true);
// user_pref("privacy.purge_trackers.logging.enabled", true);

// PREF: Limit third-party cookies to the current session even when they are allowed
// user_pref("network.cookie.thirdparty.sessionOnly", true);
// user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

// PREF: Delete all cookies after a certain period of time
// ALTERNATIVE: Use a cookie manager extension
// user_pref("network.cookie.lifetimePolicy", 3);
// user_pref("network.cookie.lifetime.days", 7);

// PREF: Samesite Cookies
// [!] EXPERIMENTAL: This is an evovling standard.
// https://www.jardinesoftware.net/2019/10/28/samesite-by-default-in-2020/
// user_pref("network.cookie.sameSite.laxByDefault", true);
// user_pref("network.cookie.sameSite.noneRequiresSecure", true);

// PREF: Disable offline to limit tracking; isolate cache per site.
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.cache_isolation", true);

/******************************************************************************
 * SECTION: PRELOADING/PREFETCHING                              *
******************************************************************************/

// DECEMBER 2020 UPDATE:
// I have altered this section for a mixture of privacy and speed.
// I recommend you leave off any PREFETCH preferences if you utilize domain blocking (Pihole, NextDNS, AdGuard,
// etc.) as I have noticed websites not working correctly, especially in conjunction with with uBlock Origin.
// All "prefetch" preferences continue to be disabled here and in the user.js.
// NOTE: You can set uBlock Origin to do disable preloading in its settings. This overrides some settings below.

// PREF: DNS PREFETCHING
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
user_pref("network.dns.disablePrefetch", true);
// As a security measure, prefetching of embedded link hostnames is not done from documents loaded over HTTPS.
user_pref("network.dns.disablePrefetchFromHTTPS", true); /* default */

// PREF: Preload the autocomplete URL in the address bar.
// Firefox preloads URLs that autocomplete when a user types into the address bar.
// Largely a net benefit since we have search engine suggestions turned off.
// NOTE: Firefox will do the server DNS lookup and TCP and TLS handshake but not start sending or receiving HTTP data.
// https://www.ghacks.net/2017/07/24/disable-preloading-firefox-autocomplete-urls/
user_pref("browser.urlbar.speculativeConnect.enabled", true); /* default */



// PREF: Link prefetching
// Along with the referral and URL-following implications, prefetching will generally cause the cookies of the prefetched
// site to be accessed. (For example, if you google Amazon, the Google results page will prefetch www.amazon.com, causing
// Amazon cookies to be sent back and forth.)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ#Privacy_implications
user_pref("network.prefetch-next", false);

// PREF: Link-mouseover opening connection to linked server.
// TCP and SSL handshakes are set up in advance but page contents are not downloaded until a click on the link is registered.
// https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// https://www.ghacks.net/2015/08/16/block-firefox-from-connecting-to-sites-when-you-hover-over-links
user_pref("network.http.speculative-parallel-limit", 6); /* default */

// PREF: Enable <link rel=preload>.
// Developer hints to the browser to preload some resources with a higher priority and in advance.
// Helps the web page to render and get into the stable and interactive state faster.
// https://www.janbambas.cz/firefox-enables-link-rel-preload-support/
// https://bugzilla.mozilla.org/show_bug.cgi?id=1639607
user_pref("network.preload", true); /* default */



// PREF: Network predictor
// Uses a local file to remember which resources were needed when the user visits a webpage (such as image.jpg and script.js),
// so that the next time the user mouseovers a link to that webpage, this history can be used to predict what resources will
// be needed rather than wait for the document to link those resources.
// https://github.com/dillbyrne/random-agent-spoofer/issues/238#issuecomment-110214518
user_pref("network.predictor.enabled", true); /* default */
user_pref("network.predictor.enable-hover-on-ssl", true);
user_pref("network.predictor.enable-prefetch", false); /* default */



// PREF: Preload New Tab page
user_pref("browser.newtab.preload", true); /* default */

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

// PREF: Disable location bar domain guessing.
// Domain guessing intercepts DNS "hostname not found errors" and resends a
// request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
// via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
// as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
// intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
// and is a security risk (e.g. common typos & malicious sites set up to exploit this).
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.typo.scheme", false);

// PREF: "Not Secure" text on HTTP sites.
user_pref("security.insecure_connection_text.enabled", true);

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
// user_pref("network.auth.subresource-http-auth-allow", 1);

/******************************************************************************
 * SECTION: MIXED CONTENT                             *
******************************************************************************/

// PREF: Block insecure active content (scripts) on HTTPS pages.
// https://trac.torproject.org/projects/tor/ticket/21323
user_pref("security.mixed_content.block_active_content", true); /* default */

// PREF: Block insecure passive content (images) on HTTPS pages.
// user_pref("security.mixed_content.block_display_content", true);

// PREF: Block unencrypted requests from Flash on encrypted pages to mitigate MitM attacks
// https://bugzilla.mozilla.org/1190623
// user_pref("security.mixed_content.block_object_subrequest", true);

/******************************************************************************
 * SECTION: VARIOUS SECURITY/PRIVACY ENHANCEMENTS                            *
******************************************************************************/

// PREF: Enforce TLS 1.0 and 1.1 downgrades as session only
user_pref("security.tls.version.enable-deprecated", false); /* default */

// disable favicons in shortcuts
// URL shortcuts use a cached randomly named .ico file which is stored in your
// profile/shortcutCache directory. The .ico remains after the shortcut is deleted.
// If set to false then the shortcuts use a generic Firefox icon
// user_pref("browser.shell.shortcutFavicons", false);

// PREF: Enable (limited but sufficient) window.opener protection
// Makes rel=noopener implicit for target=_blank in anchor and area elements when no rel attribute is set
// [1] https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/
user_pref("dom.targetBlankNoOpener.enabled", true); /* default */

// PREF: Disable FTP protocol
// Firefox redirects any attempt to load a FTP resource to the default search engine if the FTP protocol is disabled.
// [1] https://www.ghacks.net/2018/02/20/firefox-60-with-new-preference-to-disable-ftp/
// user_pref("network.ftp.enabled", false);

// PREF: Decode URLs in other languages
// Can have unintended consequecnes when copy+paste some links.
// https://bugzilla.mozilla.org/show_bug.cgi?id=1320061
// user_pref("browser.urlbar.decodeURLsOnCopy", true);

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

// PREF: Allow HTTPS-only connections [FF83+]
// You can relax this setting per-website in the address bar.
// https://blog.mozilla.org/security/2020/11/17/firefox-83-introduces-https-only-mode/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);

// PREF: Disable all the various Mozilla telemetry, studies, etc.
user_pref("app.normandy.enabled", false);
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
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("browser.discovery.enabled", false);

// PREF: Disable new data submission, master kill switch
// If disabled, no policy is shown or upload takes place, ever
// https://bugzilla.mozilla.org/1195552 ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);

// PREF: Privacy & Security>Firefox Data Collection & Use>Allow Firefox to send technical data
user_pref("datareporting.healthreport.uploadEnabled", false);
// PREF: Disable PingCentre telemetry (used in several System Add-ons)
// Currently blocked by 'datareporting.healthreport.uploadEnabled'
user_pref("browser.ping-centre.telemetry", false);

// PREF: Disable Crash Reports
// Leave these enabled to help Mozilla with compatibility issues.
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
// PREF: Disable Web Compatibility Reporter
// Web Compatibility Reporter adds a "Report Site Issue" button to send data to Mozilla
user_pref("extensions.webcompat-reporter.enabled", false);
// PREF: Disable Network Connectivity checks
// https://bugzilla.mozilla.org/1460537
user_pref("network.connectivity-service.enabled", false);
