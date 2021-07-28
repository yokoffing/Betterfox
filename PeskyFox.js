//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************
 * PeskyFox                                                                 *
 * "Aquila non capit muscas."                                               *
 * priority: remove annoyances                                              *
 * version: May 2021                                                        *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/

// PREF: Enable a Light theme for browser and webpage content
// [TEST] https://9to5mac.com/
// user_pref("ui.systemUsesDarkTheme", 0); // hidden
// user_pref("browser.in-content.dark-mode", false); // hidden
// user_pref("devtools.theme", "light"); // default
// user_pref("pdfjs.viewerCssTheme", 1);

// PREF: Enable a Dark theme for browser and webpage content
// [TEST] https://9to5mac.com/
// user_pref("ui.systemUsesDarkTheme", 1); // hidden
// user_pref("browser.in-content.dark-mode", true); // hidden
// user_pref("devtools.theme", "dark");
// user_pref("pdfjs.viewerCssTheme", 2);

// PREF: Allow Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: Mozilla VPN
user_pref("browser.privatebrowsing.vpnpromourl", "");

// PREF: Disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); /* hidden */
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Disable Firefox accounts
user_pref("identity.fxaccounts.enabled", false);

// PREF: Disable about:welcome page
user_pref("browser.aboutwelcome.enabled", false);

// PREF: Disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("extensions.getAddons.showPane", false);

// PREF: Delay of security dialog when downloading extensions
// default=1000
user_pref("security.dialog_enable_delay", 0);

// PREF: Remove "addons.mozilla.org" from set of domains that extensions cannot access
user_pref("extensions.webextensions.restrictedDomains", "accounts-static.cdn.mozilla.net,accounts.firefox.com,addons.cdn.mozilla.net,api.accounts.firefox.com,content.cdn.mozilla.net,discovery.addons.mozilla.org,install.mozilla.org,oauth.accounts.firefox.com,profile.accounts.firefox.com,support.mozilla.org,sync.services.mozilla.com");

// PREF: Disable Warnings
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("browser.aboutConfig.showWarning", false);

// PREF: Disable fullscreen delay and notice
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.delay", 0);
user_pref("full-screen-api.warning.timeout", 0);

// PREF: Hide bookmarks toolbar from new tab page 
user_pref("browser.toolbars.bookmarks.visibility", "never");

/****************************************************************************
 * SECTION: NEW TAB PAGE                                                    *
****************************************************************************/

// PREF: Set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
user_pref("browser.startup.page", 3);

// PREF: Set HOME page
// user_pref("browser.startup.page", "about:home");

// PREF: Disable Activity Stream Top Stories, Pocket-based and/or sponsored content
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);

// PREF: Disable Activity Stream snippets
// Runs code received from a server (aka Remote Code Execution) and sends information back to a metrics server.
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// PREF: Hide Activity Stream content
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);

// PREF: welcome & what's new notices
user_pref("browser.startup.homepage_override.mstone", "ignore"); // master switch

// PREF: Hide "What's New"
user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// PREF: Firefox logo to always show?
// user_pref("browser.newtabpage.activity-stream.logowordmark.alwaysVisible", true);

// PREF: Bookmarks Toolbar visibility
// always, never, or newtab
// user_pref("browser.toolbars.bookmarks.visibility", "newtab");

/******************************************************************************
 * SECTION: POCKET                                                            *
******************************************************************************/

// PREF: Disable built-in Pocket extension
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.api"," ");
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/

// PREF: choose download location
// [SETTING] To set your default "downloads": General>Downloads>Save files to...
// 0=desktop, 1=downloads (default), 2=last used
// user_pref("browser.download.folderList", 1);

// PREF: Enforce user interaction for security by always asking where to download.
// [SETTING] General>Downloads>Always ask you where to save files
// false=the user is asked what to do
user_pref("browser.download.useDownloadDir", false);

// PREF: Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);

// PREF: Autohide download button
// user_pref("browser.download.autohideButton", true);

/****************************************************************************
 * SECTION: VARIOUS                                                         *
****************************************************************************/

// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);

// PREF: restore "View image info"
user_pref("browser.menu.showViewImageInfo", true);

// PREF: do not unload tabs on low memory
// Firefox will detect if your computer’s memory is running low (less than 400MB)
// and suspend tabs that you have not used in awhile.
// https://support.mozilla.org/en-US/questions/1262073
// Available for testing in Nightly:
// https://blog.nightly.mozilla.org/2021/05/14/these-weeks-in-firefox-issue-93/
// user_pref("browser.tabs.unloadOnLowMemory", false); // default

// PREF: dropdown options in the URL bar
user_pref("browser.urlbar.suggest.bookmarks", true);
user_pref("browser.urlbar.suggest.engines", false);
// user_pref("browser.urlbar.suggest.history", false);
// user_pref("browser.urlbar.suggest.openpage", false);
// user_pref("browser.urlbar.suggest.searches", false);
// PREF: disable dropdown suggestions with empty query
user_pref("browser.urlbar.suggest.topsites", false);

// PREF: Set a default permission for Notifications
// To add site exceptions: Page Info>Permissions>Receive Notifications.
// To manage site exceptions: Options>Privacy & Security>Permissions>Notifications>Settings.
// 0=always ask (default), 1=allow, 2=block
user_pref("permissions.default.desktop-notification", 2);

// PREF: disable Push API
// Push is an API that allows websites to send you (subscribed) messages even when the site
// isn't loaded, by pushing messages to your userAgentID through Mozilla's Push Server.
// [1] https://support.mozilla.org/en-US/kb/push-notifications-firefox
// [2] https://developer.mozilla.org/en-US/docs/Web/API/Push_API
// [3] https://www.reddit.com/r/firefox/comments/fbyzd4/the_most_private_browser_isnot_firefox/
user_pref("dom.push.enabled", false);
user_pref("dom.push.userAgentID", "");

// PREF: do not autoplay media
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
// user_pref("media.autoplay.default", 5);
// user_pref("media.autoplay.blocking_policy", 1); // default=0
// user_pref("dom.user_activation.transient.timeout", "500"); // default=5000

// PREF: Disable Reader mode
// Firefox will not have to parse webpage for Reader when navigating.
// Minimal performance impact.
// user_pref("reader.parse-on-load.enabled", false);

// PREF: Disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
user_pref("browser.backspace_action", 2); /* default */

// PREF: Disable ALT key toggling the menu bar
user_pref("ui.key.menuAccessKey", 0);

// PREF: CTRL+TAB cycles tabs in chronological order instead of recently-
// used order
// user_pref("browser.ctrlTab.recentlyUsedOrder", false);

// PREF: Show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: Spell-check
// 0=none, 1-multi-line, 2=multi-line & single-line
user_pref("layout.spellcheckDefault", 2);

// PREF: Disable Accessibility services
user_pref("accessibility.force_disabled", 1);

// PREF: Limit the number of bookmark backups Firefox keeps
user_pref("browser.bookmarks.max_backups", 2);

// PREF: Allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level
// user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");

// PREF: Hide image placeholders
user_pref("browser.display.show_image_placeholders", false);

// PREF: Wrap long lines of text when using source / debugger
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);

// PREF: print preview
user_pref("print.tab_modal.enabled", true); // default

/****************************************************************************
 * SECTION: PDF                                                             *
****************************************************************************/

// PREF: Enforce Firefox's built-in PDF reader
// This setting controls if the option "Display in Firefox" is available in the setting below
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With").
// default=false
user_pref("pdfjs.disabled", false);

// PREF: Firefox now allows viewing of PDFs even if the response HTTP headers
// include Content-Disposition:attachment. 
user_pref("browser.helperApps.showOpenOptionForPdfJS", true); /*default*/

// PREF: Default zoom for PDFs // hidden pref
// user_pref("pdfjs.defaultZoomValue", "page-width"); // for laptops and small screens
// user_pref("pdfjs.defaultZoomValue", "page-fit"); // for larger screens and desktops

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/

// PREF: search query in the search box appear in a new tab (instead of the current tab)
// user_pref("browser.search.openintab", true);

// PREF: search query in the URL bar opens in a new tab (instead of the current tab)
// user_pref("browser.urlbar.openintab", true);

// PREF: control behavior of links that would normally open in a new window
// Pop-up windows are treated like regular tabs.
// [NOTE] You can still right-click a link and open in a new window.
// 3 (default) = in a new tab
// 2 = in a new window
// 1 = in the current tab
// user_pref("browser.link.open_newwindow", 3); // default

// PREF: determine the behavior of pages opened by JavaScript (like popups)
// 2 (default) = catch new windows opened by JavaScript that do not have specific values set (how large the window should be, whether it should have a status bar, etc.) 
// 0 = force all new windows opened by JavaScript into tabs
// [NOTE] Most advertising popups also open in new windows with values set.
// user_pref("browser.link.open_newwindow.restriction", 2);

// PREF: override <browser.link.open_newwindow> for external links
// Set if a different destination for external links is needed.
// 1=Open in the current tab/window
// 2=Open in a new window
// 3=Open in a new tab in the current window
// -1=no overrides (default)
// user_pref("browser.link.open_newwindow.override.external", 3);

// PREF: Prevent scripts from moving and resizing open windows
user_pref("dom.disable_window_move_resize", true);

// PREF: insert new tabs immediately after the current tab
// Tap to Tab extension: set to "Put new tab at the end"
// extension: https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab
// user_pref("browser.tabs.insertRelatedAfterCurrent", true); // default=true
// user_pref("browser.tabs.insertAfterCurrent", true);

// PREF: leave the browser window open even after you close the last tab
// user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: tabs load when opened in the background
user_pref("browser.tabs.loadInBackground", true); // default

// PREF: determine whether a link opens in the foreground or background on left-click
// Determines behavior of pages normally meant to open in a new window (such as
// target="_blank" or from an external program), but that have instead been loaded in a new tab.
// true = Load the new tab in the background, leaving focus on the current tab
// false (default) = Load the new tab in the foreground, taking the focus from the current tab.
// [NOTE] Setting this preference to True will still bring the browser to the front when opening links from outside the browser.
// user_pref("browser.tabs.loadDivertedInBackground", false); // default

// PREF: load bookmarks in the background using Bookmarks Menu
user_pref("browser.tabs.loadBookmarksInBackground", true);
// PREF: load bookmarks in tabs, not separate  windows
user_pref("browser.tabs.loadBookmarksInTabs", true);
// PREF: leave Bookmarks Menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// PREF: Stop websites from reloading pages automatically
// [WARNING] Breakage with some sites.
// [1] https://www.ghacks.net/2018/08/19/stop-websites-from-reloading-pages-automatically/
// user_pref("accessibility.blockautorefresh", true);
// user_pref("browser.meta_refresh_when_inactive.disabled", true);

// PREF: AVIF images
// [1] https://www.omgubuntu.co.uk/2021/01/firefox-86-avif-image-support
user_pref("image.avif.enabled", true); // default

// PREF: Prevent password truncation when submitting form data
// [1] https://www.ghacks.net/2020/05/18/firefox-77-wont-truncate-text-exceeding-max-length-to-address-password-pasting-issues/
user_pref("editor.truncate_user_pastes", false);

// PREF: Adjust the minimum tab width
// [!] Can be overridden by userChrome.css.
// user_pref("browser.tabs.tabMinWidth", 120); // default=76

// PREF: reduce size of picture-in-picture icon on the first run
user_pref("media.videocontrols.picture-in-picture.video-toggle.has-used", true);
// PREF: always show the picture-in-picture toggle
// user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", true);

// PREF: Plain Text only when copying text.
user_pref("clipboard.plainTextOnly", true);

// PREF: Limit events that can cause a pop-up
// Really cuts down on pop-ups Private Browsing websites... Thank me later.
// Firefox provides an option to provide exceptions for sites, remembered in your Site Settings.
// (default) "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
// (recommended) user_pref("dom.popup_allowed_events", "dblclick");
user_pref("dom.popup_allowed_events", "click dblclick");
user_pref("dom.disable_open_during_load", true);
user_pref("privacy.popups.showBrowserMessage", true);
