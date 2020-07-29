//
/****************************************************************************
 * Betterfox                                                                *
 * name: Litefox                                                            *
 * version: 29 July 2020                                                    *
 * url: https://github.com/yokoffing/Better-Fox                             *
 * license: https://github.com/yokoffing/Better-Fox/blob/master/LICENSE     *
 * README: https://github.com/yokoffing/Better-Fox/blob/master/README.md    *
 * "Facile est inventis addere."                                            *
****************************************************************************/

/****************************************************************************
 * START: FASTFOX MINIMAL                                                   *
****************************************************************************/
user_pref("gfx.webrender.all", true);
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

/****************************************************************************
 * START: SECUREFOX MINIMAL                                                 *
****************************************************************************/
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", false);
user_pref("privacy.socialtracking.block_cookies.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("browser.search.separatePrivateDefault", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
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
user_pref("dom.battery.enabled", false);

/****************************************************************************
 * START: PESKYFOX MINIMAL                                                  *
****************************************************************************/
user_pref("browser.download.manager.addToRecentDocs", false);
user_pref("browser.startup.page", 3);
user_pref("extensions.pocket.enabled", false);
user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);
user_pref("dom.forms.autocomplete.formautofill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("permissions.default.desktop-notification", 2);
user_pref("media.autoplay.default", 5);
user_pref("layout.spellcheckDefault", 2);
user_pref("findbar.highlightAll", true);
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);
user_pref("devtools.theme", "dark");
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 3);
user_pref("browser.link.open_newwindow.override.external", -1);
user_pref("browser.tabs.closeWindowWithLastTab", false);
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("editor.truncate_user_pastes", false);

/****************************************************************************
 * END: LITEFOX                                                             *
****************************************************************************/