
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

/** SETUP ON FIRST INSTALLATION ***/
//user_pref("network.trr.uri", "https://dns.nextdns.io/******/Firefox"); // TRR/DoH

/** FASTFOX ***/
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);

// SPECULATIVE LOADING WITHOUT PREDICTOR
user_pref("network.http.speculative-parallel-limit", 20);
//user_pref("network.dns.disablePrefetch", false);
//user_pref("network.dns.disablePrefetchFromHTTPS", false);
//user_pref("dom.prefetch_dns_for_anchor_https_document", true); 
user_pref("browser.urlbar.speculativeConnect.enabled", true);
user_pref("browser.places.speculativeConnect.enabled", true);
user_pref("network.prefetch-next", true);

user_pref("network.http.max-persistent-connections-per-server", 20); // increase download connections

/** SECUREFOX ***/
user_pref("signon.rememberSignons", false); // disable password manager
user_pref("extensions.formautofill.addresses.enabled", false); // disable address manager
user_pref("extensions.formautofill.creditCards.enabled", false); // disable credit card manager
user_pref("browser.urlbar.suggest.recentsearches", false);  // unselect "Show recent searches" for clean UI
user_pref("browser.urlbar.showSearchSuggestionsFirst", false); // unselect "Show search suggestions ahead of browsing history in address bar results" for clean UI
//user_pref("browser.urlbar.groupLabels.enabled", false); // hide Firefox Suggest label in URL dropdown box
user_pref("signon.management.page.breach-alerts.enabled", false); // extra hardening
user_pref("signon.autofillForms", false); // unselect "Autofill logins and passwords" for clean UI
user_pref("signon.generation.enabled", false); // unselect "Suggest and generate strong passwords" for clean UI
user_pref("signon.firefoxRelay.feature", ""); // unselect suggestions from Firefox Relay for clean UI
user_pref("browser.safebrowsing.downloads.enabled", false); // deny SB to scan downloads to identify suspicious files; local checks only
user_pref("browser.safebrowsing.downloads.remote.url", ""); // enforce no remote checks for downloads by SB
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false); // clean up UI; not needed in user.js if remote downloads are disabled
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false); // clean up UI; not needed in user.js if remote downloads are disabled
user_pref("browser.safebrowsing.allowOverride", false); // do not allow user to override SB
user_pref("browser.search.update", false); // do not update opensearch engines
user_pref("network.trr.confirmationNS", "skip"); // skip TRR confirmation request
user_pref("extensions.webextensions.restrictedDomains", ""); // remove Mozilla domains so adblocker works on pages
user_pref("identity.fxaccounts.enabled", false); // disable Firefox Sync
user_pref("browser.firefox-view.feature-tour", "{\"screen\":\"\",\"complete\":true}"); // disable the Firefox View tour from popping up for new profiles
user_pref("accessibility.force_disabled", 1); // disable Accessibility features
user_pref("security.cert_pinning.enforcement_level", 2); // strict public key pinning
user_pref("captivedetect.canonicalURL", ""); // disable captive portal detection
user_pref("network.captive-portal-service.enabled", false); // disable captive portal detection
user_pref("network.connectivity-service.enabled", false); // disable captive portal detection

/** PESKYFOX ***/
user_pref("devtools.accessibility.enabled", false); // removes un-needed "Inspect Accessibility Properties" on right-click
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Settings>Home>Firefox Home Content>Recent Activity>Shortcuts>Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Settings>Home>Firefox Home Content>Recent Activity>Recommended by Pocket>Sponsored Stories  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // Settings>Home>Firefox Home Content>Recent Activity>Bookmarks
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // Settings>Home>Firefox Home Content>Recent Activity>Most Recent Download
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // Settings>Home>Firefox Home Content>Recent Activity>Visited Pages
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Settings>Home>Firefox Home Content>Recent Activity>Pages Saved to Pocket
//user_pref("browser.download.useDownloadDir", true); // use direct downloads
//user_pref("browser.download.folderList", 0); // 0=desktop, 1=downloads, 2=last used
user_pref("browser.toolbars.bookmarks.visibility", "never"); // always hide bookmark bar
user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
user_pref("browser.urlbar.suggest.history", false); // Browsing history; hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.bookmark", false); // Bookmarks; hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.openpage", false); // Open tabs; hide URL bar dropdown suggestions
user_pref("browser.urlbar.suggest.topsites", false); // Shortcuts; disable dropdown suggestions with empty query
user_pref("browser.urlbar.suggest.engines", false); // Search engines; tab-to-search
user_pref("browser.urlbar.quicksuggest.enabled", false); // hide Firefox Suggest UI in the settings
//user_pref("browser.urlbar.maxRichResults", 1); // minimum suggestion needed for URL bar autofill
user_pref("browser.bookmarks.max_backups", 0); // minimize disk use; manually back-up
user_pref("view_source.wrap_long_lines", true);  // wrap source lines
user_pref("devtools.debugger.ui.editor-wrapping", true);  // wrap lines in devtools
user_pref("browser.zoom.full", false); // text-only zoom, not all elements on page
//user_pref("pdfjs.sidebarViewOnLoad", 2); // force showing of Table of Contents in sidebar for PDFs (if available)
user_pref("layout.word_select.eat_space_to_next_word", false); // do not select the space next to a word when selecting a word
//user_pref("browser.tabs.loadInBackground", false); // CTRL+SHIFT+CLICK for background tabs; Settings>General>Tabs>When you open a link, image or media in a new tab, switch to it immediately
user_pref("browser.tabs.loadBookmarksInTabs", true); // force bookmarks to open in a new tab, not the current tab
user_pref("ui.key.menuAccessKey", 0); // remove underlined characters from various settings
user_pref("general.autoScroll", false); // disable unintentional behavior for middle click
user_pref("ui.SpellCheckerUnderlineStyle", 1); // [HIDDEN] dots for spell check errors
user_pref("media.videocontrols.picture-in-picture.display-text-tracks.size", "small"); // PiP
user_pref("media.videocontrols.picture-in-picture.urlbar-button.enabled", false); // PiP in address bar
user_pref("reader.parse-on-load.enabled", false); // disable reader mode
//user_pref("reader.color_scheme", "auto"); // match system theme for when reader is enabled
//user_pref("browser.urlbar.openintab", true); // stay on current site and open new tab when typing in URL bar

/** DELETE IF NOT NIGHTLY ***/
user_pref("privacy.userContext.enabled", false); // disable Containers functionality
user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // true by default on NIGHTLY
//user_pref("xpinstall.signatures.required", false); // [ESR/DEV/NIGHTLY]
//user_pref("browser.urlbar.suggest.trending", false); // FF119+ disable showing trending searches; unselect for clean UI
//user_pref("browser.urlbar.suggest.quickactions", false); // Quick actions; hide URL bar dropdown suggestions
//user_pref("browser.urlbar.suggest.clipboard", false); // Clipboard; hide URL bar dropdown suggestions

/** DELETE IF NOT WINDOWS DESKTOP ***/
user_pref("network.trr.mode", 3); // enable TRR (without System fallback)
//user_pref("browser.startup.preXulSkeletonUI", false); // WINDOWS
user_pref("default-browser-agent.enabled", false); // deny Mozilla monitoring default browser (breaks "Make Default" button)
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("pdfjs.defaultZoomValue", "125"); // alt=page-width; PDF zoom level
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
//user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
//user_pref("font.name.serif.x-western", "Roboto Slab"); // serif font
//user_pref("font.name.sans-serif.x-western", "Roboto"); // sans-serif font
//user_pref("font.name.monospace.x-western", "Fira Code"); // monospace font

/** DELETE IF NOT ENTERPRISE WINDOWS LAPTOP ***/
user_pref("urlclassifier.trackingSkipURLs", ""); // do not allow embedded tweets, Instagram, Reddit, and Tiktok posts
user_pref("urlclassifier.features.socialtracking.skipURLs", ""); // do not allow embedded tweets, Instagram, Reddit, and Tiktok posts
user_pref("browser.search.suggest.enabled", true); // search suggestions
user_pref("browser.urlbar.showSearchSuggestionsFirst", true); // Show search suggestions ahead of browsing history in address bar results
//user_pref("network.connectivity-service.enabled", true); // public wifi
//user_pref("network.trr.confirmationNS", "example.com"); // TRR confirmation request
//user_pref("network.trr.mode", 2); // enable TRR (without System fallback)
//user_pref("browser.startup.preXulSkeletonUI", false); // WINDOWS
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", false); // no need for userChrome
//user_pref("browser.urlbar.suggest.history", true); // Browsing history
//user_pref("browser.urlbar.suggest.bookmark", true); // Bookmarks
//user_pref("browser.urlbar.suggest.openpage", true); // Open tabs
//user_pref("browser.urlbar.suggest.topsites", true); // Shortcuts

/** DELETE IF NOT macOS LAPTOP ***/
user_pref("network.trr.mode", 2); // enable TRR (with System fallback)
user_pref("network.trr.max-fails", 5); // lower max attempts to use DoH
user_pref("geo.provider.use_corelocation", false); // geolocation [MAC]
user_pref("pdfjs.defaultZoomValue", "page-width"); // PDF zoom level
user_pref("app.update.auto", false); // disable auto-installing Firefox updates [NON-WINDOWS]
//user_pref("font.name.monospace.x-western", "SF Mono"); // monospace font

/** DELETE IF NOT LINUX LAPTOP ***/
user_pref("network.trr.mode", 2); // enable TRR (with System fallback)
user_pref("network.trr.max-fails", 5); // lower max attempts to use DoH
user_pref("geo.provider.use_geoclue", false); // [LINUX]
user_pref("pdfjs.defaultZoomValue", "page-width"); // PDF zoom level
