
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
user_pref("browser.sessionstore.interval", 30000); // set minimum interval between session save operations
user_pref("reader.parse-on-load.enabled", false); // disable reader mode
//user_pref("reader.color_scheme", "auto"); // match system theme for when reader is enabled

/** SECUREFOX ***/
user_pref("browser.urlbar.showSearchSuggestionsFirst", false); // unselect "Show search suggestions ahead of browsing history in address bar results" for clean UI
user_pref("signon.management.page.breach-alerts.enabled", false); // extra hardening
user_pref("signon.generation.enabled", false); // unselect "Suggest and generate strong passwords" for clean UI
user_pref("privacy.sanitize.sanitizeOnShutdown", true);  // clear browsing data on shutdown
user_pref("privacy.clearOnShutdown.offlineApps", true);  // disable if login issue after restart
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.updateURL", ""); // extra hardening
//user_pref("network.trr.mode", 3); // enable TRR (without System fallback)
//user_pref("network.trr.uri", "https://dns.nextdns.io/******"); // DoH
user_pref("browser.cache.memory.capacity", 1024000); // -1=default; 256000=256MB, 512000=512MB, 1024000=1GB
user_pref("media.memory_cache_max_size", 512000); // memory cache; playback for higher-end PC
user_pref("media.memory_caches_combined_limit_kb", 2560000); // memory cache; playback for higher-end PC
user_pref("media.cache_readahead_limit", 99999); // media cache; playback for higher-end PC
user_pref("media.cache_resume_threshold", 99999); // media cache; playback for higher-end PC
user_pref("media.cache_size", 2048000); // media cache; playback for higher-end PC

/** PESKYFOX ***/
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Settings>Home>Firefox Home Content>Recent Activity>Shortcuts>Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Settings>Home>Firefox Home Content>Recent Activity>Recommended by Pocket>Sponsored Stories  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // Settings>Home>Firefox Home Content>Recent Activity>Bookmarks
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // Settings>Home>Firefox Home Content>Recent Activity>Most Recent Download
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // Settings>Home>Firefox Home Content>Recent Activity>Visited Pages
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Settings>Home>Firefox Home Content>Recent Activity>Pages Saved to Pocket
user_pref("browser.toolbars.bookmarks.visibility", "never"); // always hide bookmark bar
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);  // font improvement
user_pref("browser.urlbar.suggest.bookmark", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.engines", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.history", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.openpage", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.searches", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.topsites", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.maxRichResults", 1); // minimum suggestion needed for URL bar autofill
user_pref("browser.download.folderList", 0); // downloads default to desktop
user_pref("browser.bookmarks.max_backups", 0); // minimize disk use; manually back-up
user_pref("view_source.wrap_long_lines", true);  // wrap source lines
user_pref("devtools.debugger.ui.editor-wrapping", true);  // wrap lines in devtools
user_pref("browser.zoom.full", false); // text-only zoom, not all elements on page
user_pref("pdfjs.sidebarViewOnLoad", 2); // show Table of Contents in sidebar for PDFs (if available)
user_pref("ui.key.menuAccessKey", 0); // remove underlined characters from various settings
user_pref("general.autoScroll", false); // disable unintentional behavior for middle click
user_pref("ui.SpellCheckerUnderlineStyle", 1); // dots for spell check errors
user_pref("browser.tabs.loadInBackground", false); // CTRL+SHIFT+CLICK for background tabs; Settings>General>Tabs>"When you open a link, image or media in a new tab, switch to it immediately"
//user_pref("browser.tabs.closeWindowWithLastTab", true); // keep window open when closing last tab
//user_pref("browser.urlbar.openintab", true); // spawn new tab when typing in URL bar, instead of using current tab

/** DELETE IF NOT NIGHTLY ***/
user_pref("javascript.options.experimental.import_assertions", true);
user_pref("javascript.options.experimental.shadow_realms", true);
user_pref("javascript.options.wasm_gc", true);
user_pref("javascript.options.wasm_function_references", true);
user_pref("cookiebanners.service.mode", 1);
user_pref("privacy.userContext.enabled", false);
user_pref("browser.urlbar.suggest.quickactions", false);
user_pref("extensions.unifiedExtensions.enabled", false);
//user_pref("xpinstall.signatures.required", false); // [ESR/DEV/NIGHTLY]

/** DELETE IF NOT WINDOWS ***/
// PREF: Use DirectWrite instead of GDI
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 6);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
//user_pref("font.name.monospace.x-western", "Cascadia Code"); // preferred font [WINDOWS]
//user_pref("layout.css.font-visibility.trackingprotection", 3); // breaks using custom font on pages

/** DELETE IF NOT macOS ***/
//user_pref("font.name.monospace.x-western", "SF Mono"); // preferred font [WINDOWS]
//user_pref("layout.css.font-visibility.trackingprotection", 3); // breaks using custom font on pages
