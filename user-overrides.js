

/****************************************************************************
 *                                                                         *
 *  [NOTE] This list is a backup of personal prefs                         *
 *                                                                         *
****************************************************************************/


/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
/** Enter your personal prefs below this line ***/

/** FASTFOX ***/
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true); // only load pinned tabs once selected
user_pref("reader.parse-on-load.enabled", false); // disable reader mode

/** SECUREFOX ***/
user_pref("browser.search.separatePrivateDefault", false); // disable separate search engine
user_pref("browser.search.separatePrivateDefault.ui.enabled", false); // disable separate search engine
user_pref("browser.urlbar.showSearchSuggestionsFirst", false); // unselect "Show search suggestions ahead of browsing history in address bar results" for clean UI
user_pref("signon.management.page.breach-alerts.enabled", false); // extra hardening
user_pref("signon.generation.enabled", false); // unselect "Suggest and generate strong passwords" for clean UI
user_pref("privacy.userContext.enabled", false); // disable Containers
user_pref("privacy.sanitize.sanitizeOnShutdown", true); // clear browsing data on shutdown
user_pref("privacy.clearOnShutdown.offlineApps", true); // clear browsing data on shutdown
user_pref("dom.security.https_only_fire_http_request_background_timer_ms", 1000); // decrease timer for HTTP background request
// user_pref("media.eme.enabled", false); // disable all DRM content
// user_pref("browser.eme.ui.enabled", false); // DRM cotent: hide the setting which also disables the webpage DRM prompt
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.updateURL", ""); // extra hardening
user_pref("browser.safebrowsing.downloads.remote.url", ""); // extra hardening

/** PESKYFOX ***/
// user_pref("browser.urlbar.openintab", true); // spawn new tab when typing in URL bar, instead of using current tab
user_pref("browser.toolbars.bookmarks.visibility", "never"); // always hide bookmark bar
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true); // font improvement
user_pref("browser.urlbar.suggest.bookmark", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.engines", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.history", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.openpage", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.topsites", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.maxRichResults", 1); // minimum suggestion needed for URL bar autofill
user_pref("browser.bookmarks.max_backups", 2); // minimize disk use
user_pref("view_source.wrap_long_lines", true); // wrap source lines
user_pref("devtools.debugger.ui.editor-wrapping", true); // wrap lines in devtools
user_pref("devtools.popups.debug", true); // Auto-open DevTools for popups
user_pref("reader.color_scheme", "auto"); // match system theme for when reader is enabled
user_pref("browser.zoom.full", false); // text-only zoom, not all elements on page
user_pref("ui.key.menuAccessKey", 0); // remove underlined characters from various settings

/****
*  WINDOWS-only prefs to uncomment:
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5); // font improvement [WINDOWS-only]
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", " "); // font improvement [WINDOWS-only]
/****

/****
* PREF: Custom monospace font
*  Enforce one custom monospace font (or neither one!) depending on the machine:
user_pref("font.name.monospace.x-western", "SF Mono"); // preferred font [macOS]
user_pref("font.name.monospace.x-western", "Cascadia Mono"); // preferred font [WINDOWS]
*  then add:
user_pref("layout.css.font-visibility.trackingprotection", 3); // breaks using custom font on pages
****/
