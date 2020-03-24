/******
* name: BetterFox Essentials User.js
* description: Streamlined user.js. Combines FastFox, SecureFox, and some of PeskyFox.
* date: 24 March 2020
* version 74
* authors: hjs
* url: https://github.com/hjstephens09/Better-Fox
* license: MIT: https://github.com/hjstephens09/Better-Fox/blob/master/LICENSE
******/

/*** BEGIN FastFox essentials ***/
/* For more configs and descriptions, please see the link provided.
 * [1] https://github.com/hjstephens09/Better-Fox/blob/master/FastFox.js ***/
user_pref("gfx.webrender.all", true);
user_pref("content.notify.ontimer", true); // [HIDDEN]
user_pref("content.notify.interval", 500000); // [HIDDEN]
user_pref("content.switch.threshold", 250000); // [HIDDEN]
user_pref("content.interrupt.parsing", true); // [HIDDEN]
user_pref("nglayout.initialpaint.delay", 0); // 0=immediate, 250=default
user_pref("dom.image-lazy-loading.enabled", true);
user_pref("network.manage-offline-status", false);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-connections", 1500);
user_pref("browser.cache.disk.metadata_memory_limit", 51200);
user_pref("security.dialog_enable_delay", 0);
user_pref("browser.display.show_image_placeholders", false);
user_pref("apz.frame_delay.enabled", false);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
user_pref("mousewheel.min_line_scroll_amount", 32); // adjust to preference, 22-40


/*** BEGIN PeskyFox essentials ***/
/* For more configs and descriptions, please see the link provided.
 * [1] https://github.com/hjstephens09/Better-Fox/blob/master/PeskyFox.js ***/
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0); // -1=also works
user_pref("full-screen-api.warning.timeout", 0); // -1=also works
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.backspace_action", 2); // 0=previous page, 1=scroll up, 2=do nothing
 user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("permissions.default.desktop-notification", 2);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.tabs.tabMinWidth", 100); // default=76, adjust to preference
user_pref("toolkit.zoomManager.zoomValues", ".8,.9,.95,1,1.05,1.1,1,15,1.2,1.33,1.5,1.7,2,2.4");
user_pref("view_source.wrap_long_lines", true);
user_pref("config.trim_on_minimize", true); // [WINDOWS-ONLY] saves memory when FF is minimized
user_pref("layout.spellcheckDefault", 2);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
user_pref("middlemouse.scrollbarPosition", true);
user_pref("ui.key.menuAccessKey", 0);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.pocketCta", " ");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", false);
user_pref("extensions.pocket.api", " ");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");
user_pref("browser.toolbarbuttons.introduced.pocket-button", false);

/*** BEGIN SecureFox essentials ***/
/* Please view all configs and their descriptions
 * [1] https://github.com/hjstephens09/Better-Fox/blob/master/SecureFox.js ***/
user_pref("network.cookie.thirdparty.sessionOnly", true);
user_pref("network.cookie.thirdparty.nonsecureSessionOnly", true);
user_pref("pref.privacy.disable_button.cookie_exceptions", false);
user_pref("beacon.enabled", false);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.typo.scheme", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("dom.battery.enabled", false);
user_pref("dom.targetBlankNoOpener.enabled", true);
user_pref("media.video_stats.enabled", false);
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
user_pref("privacy.trackingprotection.pbmode.enabled", true); // Can turn off w/ uBlock Origin
user_pref("security.mixed_content.block_active_content", true);
user_pref("security.mixed_content.block_display_content", true);
user_pref("security.mixed_content.block_object_subrequest", true);
user_pref("security.mixed_content.upgrade_display_content", true);
user_pref("permissions.default.geo", 0); // 0=default, always ask
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?
key=%MOZILLA_API_KEY%");
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("browser.formfill.enable", false);
user_pref("signon.formlessCapture.enabled", false); // security benefit
user_pref("signon.rememberSignons", false); // use a password manager
/* GOOGLE SAFE BROWSING */
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
user_pref("extensions.blocklist.enabled", true); // [DEFAULT: true]
user_pref("extensions.blocklist.url", "https://blocklists.settings.services.mozilla.com/v1/blocklist/3/%APP_ID%/%APP_VERSION%/");
/* MOZILLA TELEMTRY AND DATA COLLECTION */
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
