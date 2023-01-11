
/****************************************************************************
 *                                                                         *
 *                            DISCLAIMER                                   *
 *                                                                         *
 *  This file is NOT INTENDED FOR OFFICIAL USE                             *
 *  It is a mix of PERSONAL and TESTING prefs and                          *
 *  may cause breakage or contain changes you do not want!                 *
 *  DO NOT USE unless you know what you are doing!                         *
 *                                                                         *
****************************************************************************/

/****************************************************************************
 * START: MY OVERRIDES                                                      *
****************************************************************************/
/** Enter your personal prefs below this line ***/

/** SETUP ON FIRST INSTALLATION ***/
// Select one:
user_pref("network.trr.uri", "https://dns.nextdns.io/******/Firefox"); // DoH - NextDNS
user_pref("https://dns.controld.com/**********/firefox"); // DoH - ControlD

/** FASTFOX ***/
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.interval", 30000); // set minimum interval between session save operations
user_pref("gfx.webrender.compositor.force-enabled", true); // reinforce
user_pref("layers.gpu-process.force-enabled", true); // reinforce
user_pref("media.hardware-video-decoding.force-enabled", true); // reinforce
user_pref("network.http.http3.enable", true); // disable QUIC for faster upload speeds RESET PREF
user_pref("media.av1.enabled", false); // disable AV1 to force video hardware decoding
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 9); // default=6; download connections; anything above 10 is excessive
user_pref("network.http.pacing.requests.min-parallelism", 18); // default=6
user_pref("network.http.speculative-parallel-limit", 18); // default=6
//user_pref("network.dns.disablePrefetch", false);
    //user_pref("network.dns.disablePrefetchFromHTTPS", false);
//user_pref("network.prefetch-next", true);
user_pref("network.predictor.enabled", true);
user_pref("network.predictor.enable-prefetch", true);
user_pref("network.predictor.enable-hover-on-ssl", true);
    user_pref("network.predictor.preresolve-min-confidence", 30);
    user_pref("network.predictor.preconnect-min-confidence", 40);
    user_pref("network.predictor.prefetch-min-confidence", 60);
        user_pref("network.predictor.prefetch-force-valid-for", 3600);
        user_pref("network.predictor.prefetch-rolling-load-count", 120);
    user_pref("network.predictor.max-resources-per-entry", 250);
    user_pref("network.predictor.max-uri-length", 1000);

/** SECUREFOX ***/
user_pref("browser.urlbar.showSearchSuggestionsFirst", false); // unselect "Show search suggestions ahead of browsing history in address bar results" for clean UI
user_pref("browser.urlbar.groupLabels.enabled", false); // hide Firefox Suggest label in URL dropdown box
user_pref("signon.management.page.breach-alerts.enabled", false); // extra hardening
user_pref("signon.generation.enabled", false); // unselect "Suggest and generate strong passwords" for clean UI
user_pref("privacy.sanitize.sanitizeOnShutdown", true);  // clear browsing data on shutdown
user_pref("privacy.clearOnShutdown.offlineApps", true);  // disable if login issue after restart
user_pref("browser.safebrowsing.provider.google4.gethashURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google4.updateURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.gethashURL", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google.updateURL", ""); // extra hardening
user_pref("browser.safebrowsing.downloads.remote.url", ""); // extra hardening
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", ""); // extra hardening
user_pref("browser.search.update", false); // do not update opensearch engines
user_pref("network.trr.mode", 3); // enable TRR (without System fallback)
user_pref("network.trr.confirmationNS", "skip"); // skip TRR confirmation request
user_pref("network.notify.checkForProxies", false); // skip proxy request check
// HTTPS-First instead of HTTPS-only
user_pref("dom.security.https_only_mode", false); // disable in user.js
user_pref("dom.security.https_first", true); // HTTPS-First instead of HTTPS-only

/** PESKYFOX ***/
user_pref("devtools.accessibility.enabled", false); // removes annoying "Inspect Accessibility Properties" on right-click
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Settings>Home>Firefox Home Content>Recent Activity>Shortcuts>Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Settings>Home>Firefox Home Content>Recent Activity>Recommended by Pocket>Sponsored Stories  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // Settings>Home>Firefox Home Content>Recent Activity>Bookmarks
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // Settings>Home>Firefox Home Content>Recent Activity>Most Recent Download
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // Settings>Home>Firefox Home Content>Recent Activity>Visited Pages
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Settings>Home>Firefox Home Content>Recent Activity>Pages Saved to Pocket
user_pref("browser.download.folderList", 0); // 0=desktop, 1=downloads, 2=last used
user_pref("browser.toolbars.bookmarks.visibility", "never"); // always hide bookmark bar
user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
user_pref("browser.urlbar.suggest.bookmark", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.history", false); // hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.openpage", false); // hide URL bar dropdown suggestions
//user_pref("browser.urlbar.suggest.searches", false); // hide URL bar dropdown suggestions (needed?)
user_pref("browser.urlbar.maxRichResults", 1); // minimum suggestion needed for URL bar autofill
user_pref("browser.bookmarks.max_backups", 0); // minimize disk use; manually back-up
user_pref("view_source.wrap_long_lines", true);  // wrap source lines
user_pref("devtools.debugger.ui.editor-wrapping", true);  // wrap lines in devtools
user_pref("browser.zoom.full", false); // text-only zoom, not all elements on page
user_pref("pdfjs.sidebarViewOnLoad", 2); // [HIDDEN] force showing of Table of Contents in sidebar for PDFs (if available)
user_pref("ui.key.menuAccessKey", 0); // remove underlined characters from various settings
user_pref("general.autoScroll", false); // disable unintentional behavior for middle click
user_pref("ui.SpellCheckerUnderlineStyle", 1); // dots for spell check errors
user_pref("browser.tabs.loadInBackground", false); // CTRL+SHIFT+CLICK for background tabs; Settings>General>Tabs>"When you open a link, image or media in a new tab, switch to it immediately"
user_pref("media.videocontrols.picture-in-picture.improved-video-controls.enabled", true);
user_pref("media.videocontrols.picture-in-picture.display-text-tracks.size", "small");
user_pref("image.jxl.enabled", true);
user_pref("extensions.unifiedExtensions.enabled", false); // disable MV3 unified extensions button [FF 109+]
user_pref("reader.parse-on-load.enabled", false); // disable reader mode
    //user_pref("reader.color_scheme", "auto"); // match system theme for when reader is enabled
//user_pref("browser.urlbar.openintab", true); // stay on current site and open new tab when typing in URL bar

/** DELETE IF NOT NIGHTLY ***/
user_pref("layout.css.scroll-linked-animations.enabled", true); // CSS scroll-linked animations
user_pref("dom.security.sanitizer.enabled", true); // HTML Sanitizer API 
user_pref("privacy.clearsitedata.cache.enabled", true); // Clear-Site-Data: "cache" header 
user_pref("javascript.options.experimental.shadow_realms", true); // Shadowrealms
user_pref("javascript.options.wasm_gc", true); // Wasm GC
user_pref("javascript.options.wasm_function_references", true); // Wasm Function references
user_pref("javascript.options.experimental.import_assertions", true); // import assertions
user_pref("javascript.options.experimental.array_grouping", true); // Array.fromAsync JS API
user_pref("cookiebanners.service.mode", 2);
user_pref("cookiebanners.service.mode.privateBrowsing", 2);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.functionality.enabled", true);
user_pref("privacy.userContext.enabled", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // true by default on NIGHTLY
//user_pref("browser.urlbar.suggest.quickactions", false);
//user_pref("xpinstall.signatures.required", false); // [ESR/DEV/NIGHTLY]
user_pref("extensions.webextensions.restrictedDomains", ""); // remove Mozilla restricted domains [DEV/NIGHTLY]

/** DELETE IF NOT WINDOWS ***/
user_pref("pdfjs.defaultZoomValue", "125"); // DESKTOP; alt=page-width; PDF zoom level
user_pref("dom.ipc.processCount", 12); // Shared Web Content; 12-core CPU
user_pref("dom.ipc.processCount.webIsolated", 12); // per-site; Isolated Web Content; 12-core CPU
user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);  // font improvement
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 6);
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
user_pref("image.mem.decode_bytes_at_a_time", 262144); // alt=512000
user_pref("browser.cache.memory.capacity", 5242880);
user_pref("browser.cache.memory.max_entry_size", 327680);
user_pref("media.memory_caches_combined_limit_pc_sysmem", 40);
user_pref("media.memory_caches_combined_limit_kb", 3145728);
//user_pref("font.name.serif.x-western", "Roboto Slab"); // serif font
//user_pref("font.name.sans-serif.x-western", "Roboto"); // sans-serif font
//user_pref("font.name.monospace.x-western", "Fira Code"); // monospace font

/** DELETE IF NOT macOS ***/
user_pref("pdfjs.defaultZoomValue", "page-width"); // LAPTOP; PDF zoom level
//user_pref("font.name.monospace.x-western", "SF Mono"); // monospace font
