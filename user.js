//
/******************************************************************************
 * name: BetterFox user.js 	       					      *
 * version: 26 March 2020						      *
 * url: https://github.com/yokoffing/Better-Fox				      *
 * license: https://github.com/yokoffing/Better-Fox/blob/master/LICENSE       *
 * README: https://github.com/yokoffing/Better-Fox/blob/master/README.md      *
******************************************************************************/

/******************************************************************************
 * START: FASTFOX 							      *
 * 									      *
 * [NOTE] For best performance on older hardware or slow connections, you     *	 
 * will need to test these settings individually, especially Webrender.       *			
 * 									      *
******************************************************************************/

// PREF: Activate Webrender, Firefox's new rendering engine!
// Greatly increases Firefox's rendering capabilities. Allows scrolling @ 60 FPS.
// Webrender is still under active development.
// [BUG] Occasionally gives you "judder scroll" on sites with a lot of images. But the tradeoff is worth it.
// [1] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [2] https://wiki.mozilla.org/Platform/GFX/WebRender_Where
// [3] https://www.reddit.com/r/firefox/comments/fo1jwz/make_firefox_faster/flhh5l2/
// default=false (on some machines still, espeically macOS)
user_pref("gfx.webrender.all", 						true);

// PREF: Lazy Image Loading
// [1] https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
 user_pref("dom.image-lazy-loading.enabled", 				true);

// PREF: Paint visuals on the webpage as fast as possible
// Lower values will make a page initially display more quickly, but they will make the page take longer to finish rendering
// Higher values will have the opposite effect (i.e. page initially displays slower, but less time is spent watching it render)
// [1] http://kb.mozillazine.org/Nglayout.initialpaint.delay
// [2] https://botw.org/articles/firefox-about-config.htm
// default=250
user_pref("nglayout.initialpaint.delay", 				0);

// PREF: Increase active connections
// According to the default value, there will be 6 active connections kept for future requests to a server.
// If, at some point, more connections are needed, a delay will occur until there is a slot available.
// To avoid any idle periods, we can set more alive connections, thus forcing the browser to load several elements of a website.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-connections
// [WARNING] Don't go past 10 or websites may temporarily blacklist your IP!
// default=6
user_pref("network.http.max-persistent-connections-per-server", 	10);

// PREF: Increase communication channels
// Perform this change in order to open communication channels with the server, and consequently load several elements of the website.
// Increased browser speed shall be mainly observed in pages that contain data such as images and videos, which slow down loading times.
// The range of value for this setting goes from 1 to 65535. However, it is rather unreasonable to increase it to the maximum
// allowed value, and subsequently strain the system.
// [WARNING] Users on slower connections may want to reduce this number to help prevent HTTP connection timeouts. Users on faster connections
// may want to increase it, but the default value is usually fine for normal usage. 
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-persistent-connections-per-server
// default=900
user_pref("network.http.max-connections", 				1500);

// PREF: Increase the memory capacity in Firefox, in order to load more pages faster
// If you enter a high value, but you don’t have a lot of RAM in your computer (e.g. 2GB),
// then you’ll just decrease the overall system speed. So pick wisely, and test the browser
// (and overall system) performance before leaving this value changed permanently.
// [NOTE] If you notice that it’s not working for you, then revert it to its default value.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955
// default=250 -> 250KB, 51200 -> 50MB
user_pref("browser.cache.disk.metadata_memory_limit", 			51200);

// PREF: Prevent FF from going offline
// FF manages network connectivity poorly. It'll stall your browsing if your connectivity goes out, even for a second.
// It can make you think your wifi is down, etc. Best to disable unless you need it.
// [1] https://lifehacker.com/stop-firefox-from-automatically-entering-work-offline-5714560 ***/
user_pref("network.manage-offline-status", 				false);

// PREF: Decrease delay of security dialog when downloading extensions
user_pref("security.dialog_enable_delay", 				0);

// PREF: Hide image placeholders
// default=true
user_pref("browser.display.show_image_placeholders", 			false);

// PREF: Disable Firefox animations 
// Use for old, slow hardware if Firefox gives you laggy performance.
// default=false
// user_pref("toolkit.cosmeticAnimations.enabled", 			true);

// PREF: Reduce memory usage when Firefox is minimized [WINDOWS-only]
// user_pref("config.trim_on_minimize", 				true);


/******************************************************************************
 * START: SECUREFOX            						      *
******************************************************************************/

/******************************************************************************
 * SECTION: TRACKING PROTECTION			                              *
******************************************************************************/

// PREF: Turn off Firefox's Tracking Protection for regular windows
// Allows for Twitter's embedded tweets on webpages. There is no exception to allow certain content.
// [NOTE] Let uBlock Origin protect against social tracking instead.
// user_pref("privacy.trackingprotection.enabled", 			false);
// user_pref("privacy.trackingprotection.socialtracking.enabled", 	false);

// PREF: Regardless, Firefox will continue to block cryptominers, fingerprinters, etc.
user_pref("privacy.socialtracking.block_cookies.enabled", 		true);
user_pref("privacy.trackingprotection.cryptomining.enabled", 		true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", 		true);

// PREF: Enable full Tracking Protection in Private Browsing mode 
user_pref("privacy.trackingprotection.pbmode.enabled", 			true);

/******************************************************************************
 * SECTION: COOKIES / CACHE 						      *
******************************************************************************/

// PREF: Block third-party cookies
// I recommended you block all third-party cookies as it is essential for ad companies to not track you.
// Blocking all third-party cookies greatly enhances your privacy! Firefox only filters some of these by default.
// [NOTE] I have set this to 3 for now since some site features will not function properly without third-party cookies.
// Change to 1 if you're comfortable with providing exceptions or encountering site issues.
// 1=disable third-party cookies, 3=blocks from unvisited websites, 4=block cross site and social media trackers (default)
user_pref("network.cookie.cookieBehavior", 				3);
user_pref("pref.privacy.disable_button.cookie_exceptions", 		false);

// PREF: Limit third-party cookies even when they are allowed
user_pref("network.cookie.thirdparty.sessionOnly", 			true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", 		true);

// PREF: Delete all cookies after a certain period of time
// Alternative: use a cookie manager extension
// user_pref("network.cookie.lifetimePolicy", 				3);
// user_pref("network.cookie.lifetime.days", 				5);

// PREF: Disable offline cache to limit tracking
user_pref("browser.cache.offline.enable", 				false);

// PREF: Disable all prefetching
// Prefetching causes cookies from the prefetched site to be loaded and other potentially unwanted behavior.
// [1] https://developer.mozilla.org/en-US/docs/Web/HTTP/Link_prefetching_FAQ
// [2] https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control
user_pref("network.dns.disablePrefetch", 				true);
user_pref("network.dns.disablePrefetchFromHTTPS", 			true);
user_pref("network.prefetch-next", 					false);
user_pref("network.predictor.enabled", 					false);
user_pref("network.predictor.enable-prefetch", 				false);
user_pref("network.dns.disablePrefetch", 				true);
user_pref("browser.urlbar.speculativeConnect.enabled", 			false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", 		false);
user_pref("network.http.speculative-parallel-limit", 			0);

/******************************************************************************
 * SECTION: SEARCH / URL BAR 						      *
******************************************************************************/

// PREF: Enable a seperate search engine for Private Windows
// Remember to go into Preferences -> Search and select another search provider (like DuckDuckGo)
user_pref("browser.search.separatePrivateDefault", 			true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", 		true);

// PREF: Disable live search engine suggestions (Google, Bing, etc.)
// [!] Search engines keylog every character you type from the URL bar
user_pref("browser.search.suggest.enabled", 				false);
user_pref("browser.search.suggest.enabled.private", 			false);

// PREF: Turn off all URL bar suggestions (bookmarks, history, open tabs)
// user_pref("browser.urlbar.suggest.searches", 			false);
// user_pref("browser.urlbar.suggest.history", 				false);
// user_pref("browser.urlbar.suggest.bookmark", 			false);
// user_pref("browser.urlbar.suggest.openpage", 			false);

// PREF: Disable location bar dropdown
// This value controls the total number of entries to appear in the location bar dropdown.
// [NOTE] Items (bookmarks/history/openpages) with a high "frecency"/"bonus" will always
// be displayed (no we do not know how these are calculated or what the threshold is),
// and this does not affect the search by search engine suggestion.
// [NOTE] This setting is only useful if you want to enable search engine keywords
// (i.e. at least one of 0850a suggestion types must be true) but you want to limit suggestions shown
// default=10, disable=0
// user_pref("browser.urlbar.maxRichResults", 2);

// PREF: Disable location bar domain guessing
// Domain guessing intercepts DNS "hostname not found errors" and resends a
// request (e.g. by adding www or .com). This is inconsistent use (e.g. FQDNs), does not work
// via Proxy Servers (different error), is a flawed use of DNS (TLDs: why treat .com
// as the 411 for DNS errors?), privacy issues (why connect to sites you didn't
// intend to), can leak sensitive data (e.g. query strings: e.g. Princeton attack),
// and is a security risk (e.g. common typos & malicious sites set up to exploit this)
user_pref("browser.fixup.alternate.enabled", 				false);
user_pref("browser.fixup.typo.scheme", 					false);

// PREF: Disable location bar autofill
// [1] https://support.mozilla.org/en-US/kb/address-bar-autocomplete-firefox#w_url-autocomplete
// user_pref("browser.urlbar.autoFill", 				false);

// PREF: Hide different search provider icons in the URL dropdown
// user_pref("browser.urlbar.oneOffSearches", 				true);

/******************************************************************************
 * SECTION: DNS-over-HTTPS                                                    *
******************************************************************************/

// PREF: Enable DNS-over-HTTPS
// [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
// 0=off, 2=TRR preferred, 5=TRR disabled
user_pref("network.trr.mode", 						2);

// PREF: Enable ESNI
// This prevents others from intercepting the TLS SNI extension and using it
// to determine what websites you are browsing.
// [1] https://www.eff.org/deeplinks/2018/09/esni-privacy-protecting-upgrade-https/
user_pref("network.security.esni.enabled", 				true);

// PREF: Force FF to always use your custom DNS resolver
// You will type between the "" for both prefs.
// I recommend creating your own URI with NextDNS for both privacy and security
// [1] https://nextdns.io
// user_pref("network.trr.uri", 					"");
// user_pref("network.trr.custom_uri", 					"");

/******************************************************************************
 * SECTION: MIXED CONTENT 						      *
******************************************************************************/

// PREF: Disable insecure active content on HTTPS pages
// https://trac.torproject.org/projects/tor/ticket/21323
user_pref("security.mixed_content.block_active_content", 		true);

// PREF: Disable insecure passive content (such as images) on HTTPS pages
// Attempt to upgrade them to HTTPS.
user_pref("security.mixed_content.block_display_content", 		true);
user_pref("security.mixed_content.upgrade_display_content", 		true);

// PREF: Block unencrypted requests from Flash on encrypted pages to mitigate MitM attacks
// https://bugzilla.mozilla.org/1190623
user_pref("security.mixed_content.block_object_subrequest", 		true);

// PREF: Limit (or disable) HTTP authentication credentials dialogs triggered by sub-resources 
// Hardens against potential credentials phishing.
// [1] https://www.fxsitecompat.com/en-CA/docs/2015/http-auth-dialog-can-no-longer-be-triggered-by-cross-origin-resources/
// 0=don't allow sub-resources to open HTTP authentication credentials dialogs
// 1=don't allow cross-origin sub-resources to open HTTP authentication credentials dialogs
// 2=allow sub-resources to open HTTP authentication credentials dialogs (default)
user_pref("network.auth.subresource-http-auth-allow", 			1);

/******************************************************************************
 * SECTION: VARIOUS SECURITY/PRIVACY ENHANCEMENTS                            *
******************************************************************************/

// PREF: Disable sending additional analytics to web servers
// https://developer.mozilla.org/docs/Web/API/Navigator/sendBeacon
user_pref("beacon.enabled", 						false);

// PREF: Enable (limited but sufficient) window.opener protection
// Makes rel=noopener implicit for target=_blank in anchor and area elements when no rel attribute is set
// [1] https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/
user_pref("dom.targetBlankNoOpener.enabled", 				true);

// PREF: Disable FTP protocol
// Firefox redirects any attempt to load a FTP resource to the default search engine if the FTP protocol is disabled.
// [1] https://www.ghacks.net/2018/02/20/firefox-60-with-new-preference-to-disable-ftp/
user_pref("network.ftp.enabled", 					false);

// PREF: Enforce Punycode for Internationalized Domain Names to eliminate possible spoofing
// Firefox has some protections, but it is better to be safe than sorry.
// [!] Might be undesirable for non-latin alphabet users since legitimate IDN's are also punycoded.
// [TEST] https://www.xn--80ak6aa92e.com/ (www.apple.com)
// [1] https://wiki.mozilla.org/IDN_Display_Algorithm
// [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
// [3] CVE-2017-5383: https://www.mozilla.org/security/advisories/mfsa2017-02/
// [4] https://www.xudongz.com/blog/2017/idn-phishing/
user_pref("network.IDN_show_punycode", 					true);

// PREF: Decode URLs in other languages
// https://bugzilla.mozilla.org/show_bug.cgi?id=1320061
user_pref("browser.urlbar.decodeURLsOnCopy", 				true);

// PREF: When webGL is enabled, do not expose information about the graphics driver
// https://bugzilla.mozilla.org/show_bug.cgi?id=1171228
// https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_debug_renderer_info
user_pref("webgl.enable-debug-renderer-info", 				false);

// PREF: Enforce Firefox's built-in PDF reader
// This setting controls if the option "Display in Firefox" is available in the setting below
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With").
// default=false
user_pref("pdfjs.disabled", 						true);

// PREF: PDFjs
// Enable if needed
// user_pref("pdfjs.enableWebGL", 					true;

// PREF: Disable Windows jumplist [WINDOWS-only]
user_pref("browser.taskbar.lists.enabled", 				false);
user_pref("browser.taskbar.lists.frequent.enabled", 			false);
user_pref("browser.taskbar.lists.recent.enabled", 			false);
user_pref("browser.taskbar.lists.tasks.enabled", 			false);

/******************************************************************************
 * SECTION: GOOGLE 							      *
******************************************************************************/

// PREF: Disable Google Safe Browsing
// [!] Increased privacy away from Google, but less protection against threats.
// Have alternative phishing and malware protection!
// [1] https://www.wikiwand.com/en/Google_Safe_Browsing#/Privacy
// [2] https://ashkansoltani.org/2012/02/25/cookies-from-nowhere
user_pref("browser.safebrowsing.allowOverride", 			true);
user_pref("browser.safebrowsing.appRepURL", 				"");
user_pref("browser.safebrowsing.blockedURIs.enabled", 			false);
user_pref("browser.safebrowsing.downloads.enabled", 			false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", 	false);
user_pref("browser.safebrowsing.downloads.remote.enabled", 		false);
user_pref("browser.safebrowsing.downloads.remote.url", 			"");
user_pref("browser.safebrowsing.enabled", 				false);
user_pref("browser.safebrowsing.malware.enabled", 			false);
user_pref("browser.safebrowsing.phishing.enabled", 			false);

// PREF: Use Mozilla geolocation service instead of Google when geolocation is enabled
user_pref("permissions.default.geo", 					0);
user_pref("geo.provider.network.url", 					"https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

/******************************************************************************
 * SECTION: MOZILLA                                       		      *
******************************************************************************/

// PREF: Enforce Firefox blocklist for extensions, but sanitize blocklist url
// This includes updates for "revoked certificates"
// [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
// [2] https://trac.torproject.org/projects/tor/ticket/16931
user_pref("extensions.blocklist.enabled", 				true);
user_pref("extensions.blocklist.url", 					"https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");

// PREF: Disable extension metadata
// Used when installing/updating an extension, and in daily background update checks.
// When false, extension detail tabs will have no description.
user_pref("extensions.getAddons.cache.enabled", 			false);

// PREF: Disable all Mozilla telemetry, data collection, experiments, phoning home, etc.
// Most websites have an incomplete or outdated list of telemetry prefs.
user_pref("app.normandy.api_url", 					"");
user_pref("app.normandy.enabled", 					false);
user_pref("app.shield.optoutstudies.enabled", 				false);
user_pref("breakpad.reportURL", 					"");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", 		false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", 		false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", 		false);
user_pref("browser.disableResetPrompt", 				true);
user_pref("browser.discovery.enabled", 					false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", 	false);
user_pref("browser.newtabpage.activity-stream.telemetry", 		false);
user_pref("browser.ping-centre.telemetry", 				false);
user_pref("browser.search.update", 					false);
user_pref("browser.selfsupport.url", 					"");
user_pref("browser.send_pings.require_same_host", 			true);
user_pref("browser.send_pings", 					false);
user_pref("browser.startup.homepage_override.mstone", 			"ignore");
user_pref("browser.tabs.crashReporting.sendReport", 			false);
user_pref("datareporting.healthreport.uploadEnabled", 			false);
user_pref("datareporting.policy.dataSubmissionEnabled", 		false);
user_pref("datareporting.sessions.current.clean", 			true);
user_pref("devtools.onboarding.telemetry.logged", 			false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", 	false);
user_pref("dom.ipc.plugins.reportCrashURL", 				false);
user_pref("dom.push.enabled", 						false);
user_pref("dom.push.userAgentID", 					"");
user_pref("experiments.activeExperiment", 				false);
user_pref("experiments.enabled", 					false);
user_pref("experiments.manifest.uri", 					"");
user_pref("experiments.supported", 					false);
user_pref("extensions.getAddons.cache.enabled", 			false);
user_pref("extensions.getAddons.showPane", 				false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", 	false);
user_pref("extensions.webcompat-reporter.enabled", 			false);
user_pref("extensions.webservice.discoverURL", 				"");
user_pref("network.allow-experiments", 					false);
user_pref("security.ssl.errorReporting.automatic", 			false);
user_pref("security.ssl.errorReporting.enabled", 			false);
user_pref("security.ssl.errorReporting.url", 				"");
user_pref("startup.homepage_welcome_url.additional", 			"");
user_pref("toolkit.coverage.enabled", 					false);
user_pref("toolkit.coverage.endpoint.base", 				"");
user_pref("toolkit.coverage.opt-out", 					true);
user_pref("toolkit.telemetry.archive.enabled", 				false);
user_pref("toolkit.telemetry.bhrPing.enabled", 				false);
user_pref("toolkit.telemetry.cachedClientID", 				"");
user_pref("toolkit.telemetry.coverage.opt-out", 			true);
user_pref("toolkit.telemetry.enabled", 					false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", 		false);
user_pref("toolkit.telemetry.newProfilePing.enabled", 			false);
user_pref("toolkit.telemetry.prompted", 				2);
user_pref("toolkit.telemetry.rejected", 				true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", 		false);
user_pref("toolkit.telemetry.server", 					"");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", 		false);
user_pref("toolkit.telemetry.unified", 					false);
user_pref("toolkit.telemetry.unifiedIsOptIn", 				false);
user_pref("toolkit.telemetry.updatePing.enabled", 			false);


/******************************************************************************
 * START: PESKYFOX            						      *
******************************************************************************/

/******************************************************************************
 * SECTION: DARK MODE 							      *
******************************************************************************/

// PREF: Dark pages in settings pages
// user_pref("browser.in-content.dark-mode", 				true);

// PREF: Enforce prefers-color-scheme as Dark
// 0=light, 1=dark : This overrides your OS value.
// user_pref("ui.systemUsesDarkTheme", 					1); // [HIDDEN PREF]

// PREF: Disable webextension restrictions on Mozilla domains
// If you use an extension to turn your webpages to Dark Mode, this prevents you
// from being blinded by white flash when navigating to a Mozilla domain.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988
// user_pref("extensions.webextensions.restrictedDomains", 		"");

/******************************************************************************
 * SECTION: START-UP / NEW TAB PAGE 					      *
******************************************************************************/

// PREF: Allow Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", 	true);

// PREF: Set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
// user_pref("browser.startup.page", 					3);

// PREF: Unclutter the new tab page
user_pref("browser.library.activity-stream.enabled", 			false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", 		false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", 		false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.pocketCta", 		"");
user_pref("browser.newtabpage.activity-stream.showSponsored", 		false);
user_pref("browser.newtabpage.enhanced", 				false);
user_pref("browser.newtabpage.introShown", 				false);

/******************************************************************************
 * SECTION: DISABLE POCKET EXTENSION                                          *
******************************************************************************/

// PREF: Completely remove Pocket from Firefox
user_pref("extensions.pocket.api", 					" ");
user_pref("extensions.pocket.enabled", 					false);
user_pref("extensions.pocket.oAuthConsumerKey", 			" ");
user_pref("extensions.pocket.site", 					" ");
user_pref("browser.toolbarbuttons.introduced.pocket-button", 		false);

/******************************************************************************
 * SECTION: DOWNLOADS 							      *
******************************************************************************/

// PREF: Choose download location
// SETTING: To set your default "downloads": General>Downloads>Save files to
// 0=desktop, 1=downloads (default), 2=last used
// user_pref("browser.download.folderList", 				1);

// PREF: Enforce user interaction for security by always asking where to download
// On Android this blocks longtapping and saving images
// SETTING: General>Downloads>Always ask you where to save files
// user_pref("browser.download.useDownloadDir", 			false);

// PREF: Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", 			false);

// PREF: Disable hiding mime types (Options>General>Applications) not associated with a plugin
// default=true
user_pref("browser.download.hide_plugins_without_extensions", 		false);

// PREF: Autohide download button
user_pref("browser.download.autohideButton", 				true);

/******************************************************************************
 * SECTION: WARNINGS 							      *
******************************************************************************/

// PREF: Disable Warnings
user_pref("browser.tabs.warnOnClose", 					false);
user_pref("browser.tabs.warnOnCloseOtherTabs", 				false);
user_pref("browser.tabs.warnOnOpen", 					false);
user_pref("full-screen-api.warning.delay", 				0); // -1=also works
user_pref("full-screen-api.warning.timeout", 				0); // -1=also works
user_pref("browser.aboutConfig.showWarning", 				false);

/******************************************************************************
 * SECTION: AUTOFILL 							      *
******************************************************************************/

// PREF: Disable Autofill
// Not recommended to use the browser's innate autofill.
// You can use a password manager like Bitwarden for an encrypted, auto-fill alternative
user_pref("extensions.formautofill.addresses.enabled", 			false);
user_pref("extensions.formautofill.available", 				"off");
user_pref("extensions.formautofill.creditCards.enabled", 		false);
user_pref("extensions.formautofill.heuristics.enabled", 		false);
user_pref("signon.autofillForms", 					false);
user_pref("browser.formfill.enable", 					false);

// PREF: Disable saving passwords
user_pref("signon.rememberSignons", 					false);
user_pref("signon.formlessCapture.enabled", 				false);

/******************************************************************************
 * SECTION: ANNOYANCES 							      *
******************************************************************************/

// PREF: Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", 				false);

// PREF: Display all parts of the url in the location bar
// user_pref("browser.urlbar.trimURLs", 				false);

// PREF: Disable annoying website notifications
user_pref("permissions.default.desktop-notification", 			2);

// PREF: Adjust HTML5 autoplay settings
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
// user_pref("media.autoplay.default", 					1);

// PREF: Disable Reader mode
// Firefox will not have to parse webpage when navigating. Minimal performance impact.
// user_pref("reader.parse-on-load.enabled", 				true);

// PREF: Disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
user_pref("browser.backspace_action", 					2);

// PREF: Disable ALT key toggling the menu bar
user_pref("ui.key.menuAccessKey", 					0);

// PREF: Disable website control over browser right-click context menu
// [!] This sometimes results in having two menus displayed.
// [NOTE] Shift-Right-Click will always bring up the browser right-click context menu.
// user_pref("dom.event.contextmenu.enabled", 				true);

// PREF: CTRL+TAB cycles tabs in chronological order instead of recently used order
// user_pref("browser.ctrlTab.recentlyUsedOrder", 				false);

// PREF: Spell-check
// 0=none, 1-multi-line, 2=multi-line & single-line
user_pref("layout.spellcheckDefault", 					2);

// PREF: Disable Accessibility services
user_pref("accessibility.force_disabled", 				1);

// PREF: Open links targeting new windows in a new tab instead
// Pop-up windows are treated like regular tabs
// You can still right-click a link and open in a new window
user_pref("browser.link.open_newwindow", 				3);
user_pref("browser.link.open_newwindow.restriction", 			0);

// PREF: Limit the number of bookmark backups Firefox keeps
user_pref("browser.bookmarks.max_backups", 				2);

// PREF: Leave bookmarks menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", 			false);

// PREF: Load Booksmarks in the background
user_pref("browser.tabs.loadBookmarksInBackground", 			true);
user_pref("browser.tabs.loadBookmarksInTabs", 				true);

// PREF: Allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level
user_pref("toolkit.zoomManager.zoomValues", 				".8,.9,.95,1,1.05,1.1,1.15,1.2,1.25,1.33,1.5,1.7,2,2.4");
user_pref("zoom.maxPercent", 						240);
user_pref("zoom.minPercent", 						80);

// PREF: Hide image placeholders
user_pref("browser.display.show_image_placeholders", 			false);

// PREF: Insert tab immediately after the current tab
// Tap to Tab extension: set to "Put new tab at the end"
// extension: https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab
// user_pref("browser.tabs.insertAfterCurrent", 			true);
user_pref("browser.tabs.insertRelatedAfterCurrent", 			true);

// PREF: Adjust the minimum tab width
// [!] Can be overridden by userChrome.css
// default=76
user_pref("browser.tabs.tabMinWidth", 					100);

// PREF: Wrap long lines of text when using source / debugger
user_pref("view_source.wrap_long_lines", 				true);
user_pref("devtools.debugger.ui.editor-wrapping", 			true);

// PREF: Leave the browser window open even after you close the last tab
// user_pref("browser.tabs.closeWindowWithLastTab", 			false);

// PREF: Disable links launching Windows Store on Windows 8/8.1/10 [WINDOWS-only]
// [1] https://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/
// user_pref("network.protocol-handler.external.ms-windows-store", 	false);

// PREF: Disable Windows taskbar preview [WINDOWS-only]
// user_pref("browser.taskbar.previews.enable", 			false);

/******************************************************************************
 * BETTERFOX END							      *
******************************************************************************/