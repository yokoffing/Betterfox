/******

* name: SecureFox
* description: Immensely increase FF's security and privacy. Should not cause breakage.
* date: 24 March 2020
* version 74
* author: hjs
* url: https://github.com/hjstephens09/Better-Fox
* license: MIT: https://github.com/hjstephens09/Better-Fox/blob/master/LICENSE

******/


// Block third-party cookies
/* I recommended you block all third-party cookies as it is essential for ad companies to not track you.
 * Blocking all third-party cookies greatly enhances your privacy! Firefox only filters some of these by default.
 * [NOTE] I have set this to 3 for now since some site features will not function properly without third-party cookies.
 * Change to 1 if you're okay encountering some minor breakage.
 * 1=disable third-party cookies, 3=blocks from unvisited websites, 4=block cross site and social media trackers (default) ***/
user_pref("network.cookie.cookieBehavior", 3);
user_pref("pref.privacy.disable_button.cookie_exceptions", false);
/* Regardless, we will limit third-party cookies even when they are allowed ***/
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);

/*** GOOGLE SAFE BROWSING ***/
// [WARNING] Do this at your own risk! Increased privacy from Google, but less protection against threats.
// In disabling this, please have an alternative to phishing and malware protection!
// [1] https://www.wikiwand.com/en/Google_Safe_Browsing#/Privacy
// [2] https://ashkansoltani.org/2012/02/25/cookies-from-nowhere
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


/*** MOZILLA ***/

/** SEARCH ***/
/* Enable a seperate Private Search Engine
 * Remember to go into Preferences -> Search and select another search provider ***/
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
/* Search Suggestions turned off
 * Search engines keylog every character you type ***/
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);
	// user_pref("browser.urlbar.suggest.searches", false);
	// user_pref("browser.urlbar.oneOffSearches", false);
/** Geolocation ***/
user_pref("permissions.default.geo", 0); // 0=default, always ask
/* Use Mozilla geolocation service instead of Google when geolocation is enabled ***/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");

/* EXT. BLOCKLIST ***/
/* 0401: enforce Firefox blocklist, but sanitize blocklist url
 * It includes updates for "revoked certificates"
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
 * [2] https://trac.torproject.org/projects/tor/ticket/16931 ***/
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");

/* MOZILLA TELEMTRY, DATA COLLECTION, EXPERIMENTS */
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("breakpad.reportURL", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.disableResetPrompt", true);
user_pref("browser.discovery.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.search.update", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings.require_same_host", true);
user_pref("browser.send_pings", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.sessions.current.clean", true);
user_pref("devtools.onboarding.telemetry.logged", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");
user_pref("experiments.activeExperiment", false);
user_pref("experiments.enabled", false);
user_pref("experiments.manifest.uri", "");
user_pref("experiments.supported", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false); // [HIDDEN PREF]
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webservice.discoverURL", "");
user_pref("network.allow-experiments", false);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("toolkit.coverage.enabled", false);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.prompted", 2);
user_pref("toolkit.telemetry.rejected", true);
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.unifiedIsOptIn", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);


/** Configure DNS-over-HTTPS ***/
/* Enter custom DNS Resolver
 * 0=off, 2=TRR preferred, 5=TRR disabled ***/
user_pref("network.trr.mode", 2);
// user_pref("network.trr.uri", "");
// user_pref("network.trr.custom_uri", "");
user_pref("network.security.esni.enabled", true);


/** MISC. ***/
user_pref("beacon.enabled", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.typo.scheme", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.targetBlankNoOpener.enabled", true);
user_pref("media.video_stats.enabled", false);
// user_pref("media.navigator.enabled", false); // breakage?
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.ftp.enabled", false);
user_pref("network.http.referer.defaultPolicy.trackers", 2);
user_pref("network.http.referer.defaultPolicy", 2); // default=3
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.IDN_show_punycode", true);
user_pref("network.prefetch-next", false);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.mixed_content.upgrade_display_content", true);
// user_pref("privacy.trackingprotection.enabled", true);
// user_pref("privacy.trackingprotection.pbmode.enabled", true);


/** OPT ***/
/* Delete cookies after a certain period of time ***/
	// user_pref("network.cookie.lifetime.days", 5);
	// user_pref("network.cookie.lifetimePolicy", 3);

/* Turn off IPv6 when using a VPN ***/
	// user_pref("network.dns.disableIPv6", true);
	// user_pref("network.notify.IPv6", false);

/* Nightly only ***/
	//user_pref("fission.autostart", true);
	//user_pref("privacy.purge_trackers.enabled", true);
	//user_pref("privacy.purge_trackers.logging.enabled", false);
	//user_pref("privacy.purge_trackers.max_purge_count", 100); // default=100
	//user_pref("dom.security.https_only_mode", true); // may cause breakage

