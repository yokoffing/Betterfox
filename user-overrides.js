

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
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand",             true);  // only load pinned tabs once selected
user_pref("reader.parse-on-load.enabled",                                   false); // disable reader mode

/** SECUREFOX ***/
user_pref("browser.search.separatePrivateDefault",                          false); // disable separate search engine
user_pref("browser.search.separatePrivateDefault.ui.enabled",               false); // disable separate search engine
user_pref("browser.urlbar.showSearchSuggestionsFirst",                      false); // unselect "Show search suggestions ahead of browsing history in address bar results" for clean UI
user_pref("signon.management.page.breach-alerts.enabled",                   false); // extra hardening
user_pref("signon.generation.enabled",                                      false); // unselect "Suggest and generate strong passwords" for clean UI
user_pref("privacy.userContext.enabled",                                    false); // disable Containers
//user_pref("browser.cache.disk.enable",                                    true);  // re-enable disk cache for lower-end PC; more efficient to keep the browser cache; cleared on shutdown
//user_pref("media.cache_readahead_limit",                                  99999); // playback for higher-end PC
//user_pref("media.cache_resume_threshold",                                 99999); // playback for higher-end PC
//user_pref("media.cache_size",                                             2048000); // playback for higher-end PC
//user_pref("media.memory_cache_max_size",                                  512000); // memory cache; playback for higher-end PC
//user_pref("media.memory_caches_combined_limit_kb",                        2560000); // memory cache; playback for higher-end PC
user_pref("privacy.sanitize.sanitizeOnShutdown",                            true);  // clear browsing data on shutdown      //  REMOVE WHEN NOV. UPDATE IS PUSHED
user_pref("privacy.clearOnShutdown.offlineApps",                            true);  // disable if login issue after restart; localStorage, service worker cache, QuotaManager (IndexedDB, asm-cache)
user_pref("dom.security.https_only_fire_http_request_background_timer_ms",  1000); // decrease timer for HTTP background request
//user_pref("media.eme.enabled",                                            false); // disable all DRM content
//user_pref("browser.eme.ui.enabled",                                       false); // DRM cotent: hide the setting which also disables the webpage DRM prompt
user_pref("browser.safebrowsing.provider.google4.gethashURL",               ""); // extra hardening
user_pref("browser.safebrowsing.provider.google4.updateURL",                ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.gethashURL",                ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.updateURL",                 ""); // extra hardening

/** PESKYFOX ***/
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites",                   false); // Settings>Home>Firefox Home Content>Recent Activity>Shortcuts>Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsored",                           false); // Settings>Home>Firefox Home Content>Recent Activity>Recommended by Pocket>Sponsored Stories  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks",     false); // Settings>Home>Firefox Home Content>Recent Activity>Bookmarks
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads",     false); // Settings>Home>Firefox Home Content>Recent Activity>Most Recent Download
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited",       false); // Settings>Home>Firefox Home Content>Recent Activity>Visited Pages
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket",        false); // Settings>Home>Firefox Home Content>Recent Activity>Pages Saved to Pocket
user_pref("browser.toolbars.bookmarks.visibility",                                      "never"); // always hide bookmark bar
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible",                     true);  // font improvement
user_pref("browser.urlbar.suggest.bookmark",                                            false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.engines",                                             false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.history",                                             false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.openpage",                                            false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.topsites",                                            false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.maxRichResults",                                              1); // minimum suggestion needed for URL bar autofill
user_pref("browser.bookmarks.max_backups",                                              2); // minimize disk use
user_pref("view_source.wrap_long_lines",                                                true);  // wrap source lines
user_pref("devtools.debugger.ui.editor-wrapping",                                       true);  // wrap lines in devtools
user_pref("reader.color_scheme",                                                        "auto"); // match system theme for when reader is enabled
user_pref("browser.zoom.full",                                                          false); // text-only zoom, not all elements on page
user_pref("ui.key.menuAccessKey",                                                       0); // remove underlined characters from various settings
//user_pref("browser.urlbar.openintab",                                                 true); // spawn new tab when typing in URL bar, instead of using current tab

// Custom monospace font
// Enforce one custom monospace font (or neither one!) depending on the machine:
//user_pref("font.name.monospace.x-western",											"SF Mono");			// preferred font [macOS]
//user_pref("font.name.monospace.x-western",											"Cascadia Mono");	// preferred font [WINDOWS]
// then uncomment:
//user_pref("layout.css.font-visibility.trackingprotection",							3); // breaks using custom font on pages

// WINDOWS-only prefs; uncomment to enable:
//user_pref("gfx.font_rendering.cleartype_params.rendering_mode",						5);	// font improvement [WINDOWS-only]
//user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families",		" "); // font improvement [WINDOWS-only]
