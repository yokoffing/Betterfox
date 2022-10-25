//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************
 * Peskyfox                                                                 *
 * "Aquila non capit muscas"                                                *
 * priority: remove annoyances                                              *
 * version: 107                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ***************************************************************************/

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/

// PREF: Enable a Light theme for browser and webpage content
// [TEST] https://9to5mac.com/
//user_pref("ui.systemUsesDarkTheme", 0); // HIDDEN
//user_pref("browser.in-content.dark-mode", false); // HIDDEN

// PREF: Enable a Dark theme for browser and webpage content
// [TEST] https://9to5mac.com/
//user_pref("ui.systemUsesDarkTheme", 1); // HIDDEN
//user_pref("browser.in-content.dark-mode", true); // HIDDEN

// PREF: Choose what theme Firefox follows by default
// Dark (0), Light (1), System (2), or Browser (3) (default)
// [1] https://www.reddit.com/r/firefox/comments/rfj6yc/how_to_stop_firefoxs_dark_theme_from_overriding/hoe82i5/?context=3
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// PREF: Allow Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: Disable Accessibility services
// Performance improvement
user_pref("accessibility.force_disabled", 1);
user_pref("devtools.accessibility.enabled", false);

// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);

// PREF: Mozilla VPN
user_pref("browser.privatebrowsing.vpnpromourl", "");

// PREF: Disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

// PREF: only show List All Tabs icon when needed
// true=always show tab overflow dropdown (FF106+ default)
// false=only display tab dropdown when there are too many tabs
// [1] https://www.ghacks.net/2022/10/19/how-to-hide-firefoxs-list-all-tabs-icon/
user_pref("browser.tabs.tabmanager.enabled", false);

// PREF: disable Unified Extensions button [NIGHTLY]
//user_pref("extensions.unifiedExtensions.enabled", false);

// PREF: remove "addons.mozilla.org" from set of domains that extensions cannot access
// [NOTE] May only work with privacy.resistfingerprinting enabled? + DEV/NIGHTLY-only?
// [1] https://www.reddit.com/r/firefox/comments/n1lpaf/make_addons_work_on_mozilla_sites/gwdy235/?context=3
//user_pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com");
//user_pref("privacy.resistFingerprinting.block_mozAddonManager", true); // [HIDDEN]

// PREF: do not require signing for extensions [ESR/DEV/NIGHTLY ONLY]
// [1] https://support.mozilla.org/en-US/kb/add-on-signing-in-firefox#w_what-are-my-options-if-i-want-to-use-an-unsigned-add-on-advanced-users
//user_pref("xpinstall.signatures.required", false);

// PREF: disable Warnings
//user_pref("browser.tabs.warnOnClose", false); // DEFAULT [FF94+]
//user_pref("browser.tabs.warnOnCloseOtherTabs", false);
//user_pref("browser.tabs.warnOnOpen", false);
//user_pref("browser.aboutConfig.showWarning", false);

// PREF: disable fullscreen delay and notice
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// PREF: disable welcome notices
//user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
    //user_pref("startup.homepage_welcome_url", "");
    //user_pref("startup.homepage_welcome_url.additional", "");
    //user_pref("startup.homepage_override_url", ""); // What's New page after updates

// PREF: disable "What's New" toolbar icon [FF69+]
//user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// PREF: Show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: disable private windows being separate from normal windows in taskbar [WINDOWS]
//user_pref("browser.privateWindowSeparation.enabled", false);

/****************************************************************************
 * SECTION: FONT APPEARANCE                                                 *
****************************************************************************/

// PREF: smoother font
// [1] https://old.reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
//user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);
//user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
    //user_pref("gfx.font_rendering.cleartype_params.gamma", 1750);

// PREF: use DirectWrite everywhere like Chrome [WINDOWS]
// [1] https://old.reddit.com/r/firefox/comments/wvs04y/comment/ilklzy1/?context=3
//user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
    //user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 50);

// PREF: use macOS Appearance Panel text smoothing setting when rendering text [MACOS]
//user_pref("gfx.use_text_smoothing_setting", true);

/****************************************************************************
 * SECTION: URL BAR                                                         *
****************************************************************************/

// PREF: URL bar suggestions (bookmarks, history, open tabs) / dropdown options in the URL bar
// user_pref("browser.urlbar.suggest.bookmarks", true);
user_pref("browser.urlbar.suggest.engines", false);
//user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.openpage", true);
//user_pref("browser.urlbar.suggest.searches", false);
// Disable dropdown suggestions with empty query:
user_pref("browser.urlbar.suggest.topsites", false);
// enable helpful features:
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);

// PREF: Adaptive History Autofill
// [1] https://docs.google.com/document/u/1/d/e/2PACX-1vRBLr_2dxus-aYhZRUkW9Q3B1K0uC-a0qQyE3kQDTU3pcNpDHb36-Pfo9fbETk89e7Jz4nkrqwRhi4j/pub
//user_pref("browser.urlbar.autoFill", true); [DEFAULT]
//user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);

// PREF: Quick Actions in the URL Bar
// [1] https://www.ghacks.net/2022/07/19/mozilla-is-testing-quick-actions-in-firefoxs-address-bar/
//user_pref("browser.urlbar.quickactions.enabled", false);
//user_pref("browser.urlbar.shortcuts.quickactions", false);

// PREF: Address bar / URL bar dropdown results
// This value controls the total number of entries to appear in the location bar dropdown.
// [NOTE] Items (bookmarks/history/openpages) with a high "frequency"/"bonus" will always
// be displayed (no we do not know how these are calculated or what the threshold is),
// and this does not affect the search by search engine suggestion.
// default=10, disable=0
//user_pref("browser.urlbar.maxRichResults", 1);

/****************************************************************************
 * SECTION: AUTOPLAY                                                        *
****************************************************************************/

// PREF: do not autoplay media audio
// [NOTE] You can set exceptions under site permissions
// [SETTING] Privacy & Security>Permissions>Autoplay>Settings>Default for all websites
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
//user_pref("media.autoplay.default", 1); // DEFAULT
//user_pref("media.block-autoplay-until-in-foreground", true); // DEFAULT

// PREF: disable autoplay of HTML5 media if you interacted with the site [FF78+]
// 0=sticky (default), 1=transient, 2=user
// Firefox's Autoplay Policy Documentation (PDF) is linked below via SUMO
// [NOTE] If you have trouble with some video sites (e.g. YouTube), then add an exception (see previous PREF)
// [1] https://support.mozilla.org/questions/1293231
//user_pref("media.autoplay.blocking_policy", 2);

/****************************************************************************
 * SECTION: NEW TAB PAGE                                                    *
****************************************************************************/

// PREF: open windows/tabs from last session
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
// [NOTE] Session Restore is cleared with history and not used in Private Browsing mode
// [SETTING] General>Startup>Restore previous session
//user_pref("browser.startup.page", 3);

// PREF: set HOME+NEWWINDOW page to blank tab
// about:home=Activity Stream, custom URL, about:blank
// [SETTING] Home>New Windows and Tabs>Homepage and new windows
// [Custom URLs] Set two or more websites in Home Page Field – delimited by |
// [1] https://support.mozilla.org/en-US/questions/1271888#answer-1262899
//user_pref("browser.startup.homepage", "about:blank");

// PREF: set NEWTAB page to blank tab
// true=Firefox Home, false=blank page
// [SETTING] Home>New Windows and Tabs>New tabs
//user_pref("browser.newtabpage.enabled", false);

// PREF: Home / New Tab page items
// [SETTINGS] Home>Firefox Home Content
// [1] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false); /// unnecessary?
//user_pref("browser.newtabpage.activity-stream.showSearch", true); // NTP Web Search [DEFAULT]
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);  // Shortcuts
      //user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts [FF83+]
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);  // Recommended by Pocket
      //user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories [FF58+]  
//user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Recent Activity [DEFAULT]
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT]

// PREF: keep search in the search box; prevent from jumping to address bar
// [1] https://www.reddit.com/r/firefox/comments/oxwvbo/firefox_start_page_search_options/
//user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
      
// PREF: Firefox logo to always show
//user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true); // DEFAULT

// PREF: Bookmarks Toolbar visibility
// always, never, or newtab
//user_pref("browser.toolbars.bookmarks.visibility", "newtab"); // DEFAULT

/******************************************************************************
 * SECTION: POCKET                                                            *
******************************************************************************/

// PREF: Disable built-in Pocket extension
user_pref("extensions.pocket.enabled", false);
      // user_pref("extensions.pocket.api"," ");
      // user_pref("extensions.pocket.oAuthConsumerKey", " ");
      // user_pref("extensions.pocket.site", " ");

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/

// PREF: choose download location
// [SETTING] To set your default "downloads": General>Downloads>Save files to...
// 0=desktop, 1=downloads (default), 2=last used
//user_pref("browser.download.folderList", 1);

// PREF: Enforce user interaction for security by always asking where to download.
// [SETTING] General>Downloads>Always ask you where to save files
// false=the user is asked what to do
user_pref("browser.download.useDownloadDir", false);

// PREF: disable downloads panel opening on every download
user_pref("browser.download.alwaysOpenPanel", false);

// PREF: Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);

// PREF: Autohide download button
//user_pref("browser.download.autohideButton", true); // DEFAULT

// PREF: enable user interaction for security by always asking how to handle new mimetypes
// [SETTING] General>Files and Applications>What should Firefox do with other files
user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: autohide the downloads button
//user_pref("browser.download.autohideButton", true); // DEFAULT

/****************************************************************************
 * SECTION: PDF                                                             *
****************************************************************************/

// PREF: enforce Firefox's built-in PDF reader
// This setting controls if the option "Display in Firefox" is available in the setting below
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With").
//user_pref("pdfjs.disabled", false); // DEFAULT

// PREF: allow viewing of PDFs even if the response HTTP headers
// include Content-Disposition:attachment. 
//user_pref("browser.helperApps.showOpenOptionForPdfJS", true); // DEFAULT

// PREF: Default zoom for PDFs [HIDDEN PREF]
//user_pref("pdfjs.defaultZoomValue", "page-width"); // for laptops and small screens
//user_pref("pdfjs.defaultZoomValue", "page-fit"); // for larger screens and desktops

// PREF: open PDFs inline (FF103+)
user_pref("browser.download.open_pdf_attachments_inline", true);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/

// PREF: unload tabs on low memory
// Firefox will detect if your computer’s memory is running low (less than 400MB)
// and suspend tabs that you have not used in awhile.
// [1] https://support.mozilla.org/en-US/questions/1262073
// [2] https://blog.nightly.mozilla.org/2021/05/14/these-weeks-in-firefox-issue-93/
//user_pref("browser.tabs.unloadOnLowMemory", true); // DEFAULT

// PREF: search query in the search box appear in a new tab (instead of the current tab)
// user_pref("browser.search.openintab", true);

// PREF: search query in the URL bar opens in a new tab (instead of the current tab)
//user_pref("browser.urlbar.openintab", true);

// PREF: control behavior of links that would normally open in a new window
// Pop-up windows are treated like regular tabs.
// [NOTE] You can still right-click a link and open in a new window.
// 3 (default) = in a new tab
// 2 = in a new window
// 1 = in the current tab
//user_pref("browser.link.open_newwindow", 3); // DEFAULT

// PREF: determine the behavior of pages opened by JavaScript (like popups)
// 2 (default) = catch new windows opened by JavaScript that do not have specific values set (how large the window should be, whether it should have a status bar, etc.) 
// 0 = force all new windows opened by JavaScript into tabs
// [NOTE] Most advertising popups also open in new windows with values set.
user_pref("browser.link.open_newwindow.restriction", 0);

// PREF: override <browser.link.open_newwindow> for external links
// Set if a different destination for external links is needed.
// 1=Open in the current tab/window
// 2=Open in a new window
// 3=Open in a new tab in the current window
// -1=no overrides (default)
//user_pref("browser.link.open_newwindow.override.external", 3);

// PREF: Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

// PREF: insert new tabs immediately after the current tab
// Tap to Tab extension: set to "Put new tab at the end"
// extension: https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab
//user_pref("browser.tabs.insertAfterCurrent", true);
    //user_pref("browser.tabs.insertRelatedAfterCurrent", true); // DEFAULT

// PREF: leave the browser window open even after you close the last tab
//user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: tabs load when opened in the background
//user_pref("browser.tabs.loadInBackground", true); // DEFAULT

// PREF: determine whether a link opens in the foreground or background on left-click
// Determines behavior of pages normally meant to open in a new window (such as
// target="_blank" or from an external program), but that have instead been loaded in a new tab.
// true = Load the new tab in the background, leaving focus on the current tab
// false (default) = Load the new tab in the foreground, taking the focus from the current tab.
// [NOTE] Setting this preference to True will still bring the browser to the front when opening links from outside the browser.
//user_pref("browser.tabs.loadDivertedInBackground", false); // DEFAULT

// PREF: load bookmarks in the background using Bookmarks Menu
// user_pref("browser.tabs.loadBookmarksInBackground", true);
// PREF: load bookmarks in tabs, not separate  windows
user_pref("browser.tabs.loadBookmarksInTabs", true);
// PREF: leave Bookmarks Menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// PREF: Stop websites from reloading pages automatically
// [WARNING] Breakage with some sites.
// [1] https://www.ghacks.net/2018/08/19/stop-websites-from-reloading-pages-automatically/
//user_pref("accessibility.blockautorefresh", true);
//user_pref("browser.meta_refresh_when_inactive.disabled", true);

// PREF: Plain Text only when copying text.
user_pref("clipboard.plainTextOnly", true);

// PREF: Limit events that can cause a pop-up
// Firefox provides an option to provide exceptions for sites, remembered in your Site Settings.
// (default) "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
// (alternate) user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
user_pref("dom.popup_allowed_events", "click dblclick");
//user_pref("dom.disable_open_during_load", true); // DEFAULT
//user_pref("privacy.popups.showBrowserMessage", true); // DEFAULT

/****************************************************************************
 * SECTION: UNCATEGORIZED                                                   *
****************************************************************************/

// PREF: restore "View image info"
//user_pref("browser.menu.showViewImageInfo", true);

// PREF: Disable Reader mode
// Firefox will not have to parse webpage for Reader when navigating.
// Minimal performance impact.
//user_pref("reader.parse-on-load.enabled", false);

// PREF: Disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
//user_pref("browser.backspace_action", 2); // DEFAULT

// PREF: Disable ALT key toggling the menu bar
//user_pref("ui.key.menuAccessKey", 0);

// PREF: CTRL+TAB cycles tabs in chronological order instead of recently-
// used order
//user_pref("browser.ctrlTab.recentlyUsedOrder", false);

// PREF: Spell-check
// 0=none, 1-multi-line, 2=multi-line & single-line
//user_pref("layout.spellcheckDefault", 1); // DEFAULT

// PREF: Limit the number of bookmark backups Firefox keeps
//user_pref("browser.bookmarks.max_backups", 1);

// PREF: Allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level
//user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");

// PREF: Hide image placeholders
//user_pref("browser.display.show_image_placeholders", false);

// PREF: Wrap long lines of text when using source / debugger
//user_pref("view_source.wrap_long_lines", true);
//user_pref("devtools.debugger.ui.editor-wrapping", true);

// PREF: print preview
//user_pref("print.tab_modal.enabled", true); // DEFAULT

// PREF: adjust the minimum tab width
// Can be overridden by userChrome.css
//user_pref("browser.tabs.tabMinWidth", 120); // default=76

// PREF: remove underlined characters from various settings
//user_pref("ui.key.menuAccessKey", 0);

// PREF: zoom only text on webpage, not other elements
//user_pref("browser.zoom.full", false);

// PREF: enable :has() CSS relational pseudo-class
// [EXPERIMENTAL] Needed for some extensions, filters, and customizations
// [1] https://developer.mozilla.org/en-US/docs/Web/CSS/:has
// [2] https://caniuse.com/css-has
//user_pref("layout.css.has-selector.enabled", true);
