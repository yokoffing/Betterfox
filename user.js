//
/****************************************************************************
 * BetterFox                                                                *
 * name: yokoffing user.js                                                  *
 * version: 31 August 2020                                                   *
 * url: https://github.com/yokoffing/Better-Fox                             *
 * license: https://github.com/yokoffing/Better-Fox/blob/master/LICENSE     *
 * README: https://github.com/yokoffing/Better-Fox/blob/master/README.md    *
 * "Ad meliora."                                                            *
****************************************************************************/

/****************************************************************************
 * START: FASTFOX                                                           *
****************************************************************************/
user_pref("gfx.webrender.all", true);
user_pref("dom.image-lazy-loading.enabled", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("security.dialog_enable_delay", 500);

/****************************************************************************
 * START: SECUREFOX                                                         *
****************************************************************************/
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", false);
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("pref.privacy.disable_button.cookie_exceptions", false);
user_pref("network.cookie.cookieBehavior", 5);
user_pref("privacy.purge_trackers.enabled", true);
/*** DNS PREFETCHING ***/
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.preload", true);
/*** URLBAR PRELOAD ***/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
/*** MOUSEOVER OPENING CONNECTION ***/
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", true);
/*** URL BAR ***/
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.suggest.enabled.private", false);
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.fixup.typo.scheme", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("network.security.esni.enabled", true);
/***PASSWORDS AND AUTOFILL***/
user_pref("signon.management.page.breach-alerts.enabled", false); 
user_pref("signon.management.page.breachAlertUrl", ""); 
user_pref("signon.autofillForms.http", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
user_pref("signon.schemeUpgrades", false);
user_pref("signon.showAutoCompleteFooter", false);
user_pref("signon.autologin.proxy", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("signon.debug", false);
user_pref("signon.importedFromSqlite", false);
user_pref("signon.recipes.path", "");
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.autocompleteOff", true);
user_pref("signon.showAutoCompleteOrigins", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.generation.available", false);
user_pref("signon.generation.enabled", false);
/***OTHERS***/
user_pref("network.IDN_show_punycode", true);
user_pref("beacon.enabled", false);
user_pref("dom.battery.enabled", false);
/***GOOGLE SAFE BROWSING***/
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
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.network.logging.enabled", false);
/**MOZILLA FIX-UPS**/
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
user_pref("geo.provider.network.logging.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("default-browser-agent.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

/****************************************************************************
 * START: PESKYFOX                                                          *
****************************************************************************/
/***POCKET***/
user_pref("browser.pocket.enabled", false);
/***OTHERS***/
user_pref("accessibility.force_disabled", 1);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.display.show_image_placeholders", false);
user_pref("browser.download.folderList", 0);
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", -1);
user_pref("full-screen-api.warning.timeout", -1);
user_pref("browser.aboutConfig.showWarning", false);
/***AUTOFILL***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("signon.autofillForms", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);
/***MISC***/
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("media.autoplay.default", 1);
user_pref("findbar.highlightAll", true);
user_pref("layout.spellcheckDefault", 2);
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("editor.truncate_user_pastes", false);

/****************************************************************************
 * END: BETTERFOX                                                           *
****************************************************************************/
