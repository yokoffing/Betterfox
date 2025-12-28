//
/* You may copy+paste this file and use it as it is.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten by the user.js when the application restarts.
 *
 * To make lasting changes to preferences, you will have to edit the user.js.
 */

/****************************************************************************
 * Betterfox Aqua                                                           *
 * "Ex nihilo nihil fit"                                                    *
 * version: 140.8                                                           *
 * url: https://github.com/yokoffing/Betterfox                              *
****************************************************************************/

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("browser.download.start_downloads_in_tmp_dir", true);

/** OCSP & CERTS / HPKP ***/
//user_pref("privacy.antitracking.isolateContentScriptResources", true); // needed for next ESR if not a default pref
user_pref("security.csp.reporting.enabled", false);

/** DISK AVOIDANCE ***/
user_pref("browser.cache.disk.enable", false);
//user_pref("browser.privatebrowsing.forceMediaMemoryCache", true); // default
user_pref("media.memory_cache_max_size", 65536);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("privacy.history.custom", true);
user_pref("browser.privatebrowsing.resetPBM.enabled", true);

/** SPECULATIVE LOADING ***/
user_pref("network.http.speculative-parallel-limit", 0);
//user_pref("network.dns.disablePrefetch", true);
//user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.places.speculativeConnect.enabled", false);
user_pref("network.prefetch-next", false);

/** SEARCH / URL BAR ***/
//user_pref("browser.urlbar.trimHttps", true); // optional
//user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true); // optional
user_pref("browser.search.suggest.enabled", false);
//user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);

/** HTTPS-ONLY MODE ***/
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
//user_pref("permissions.default.geo", 2); // optional
//user_pref("geo.provider.network.url", "https://beacondb.net/v1/geolocate"); // blank
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");
user_pref("extensions.getAddons.cache.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.homepage_override.mstone", "ignore");
user_pref("browser.aboutwelcome.enabled", false);

/** THEME ADJUSTMENTS ***/
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredCheckboxes", false);

/** TAB BEHAVIOR ***/
//user_pref("browser.link.open_newwindow.restriction", 2); // restore FF default

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:


/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:


/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
