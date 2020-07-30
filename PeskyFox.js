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
 * version: 30 July 2020                                                    *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/****************************************************************************
 * SECTION: START-UP / NEW TAB PAGE                                         *
****************************************************************************/

// PREF: Allow Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: Set START page (0=blank, 1=home, 2=last visited page, 3=resume previous session)
// user_pref("browser.startup.page", 3);

// PREF: Disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// PREF: Disable Activity Stream Top Stories, Pocket-based and/or sponsored content
user_pref("browser.newtabpage.activity-stream.pocketCta", "");
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);

// PREF: Disable Activity Stream snippets
// Runs code received from a server (aka Remote Code Execution) and sends information back to a metrics server
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);

// PREF: Disable Activity Stream telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");

// PREF: Disable Activity Stream feeds
user_pref("browser.newtabpage.activity-stream.feeds.aboutpreferences", false);  
user_pref("browser.newtabpage.activity-stream.feeds.favicon", false);  
user_pref("browser.newtabpage.activity-stream.feeds.messagecenterfeed", false);  
user_pref("browser.newtabpage.activity-stream.feeds.migration", false);  
user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false);  
user_pref("browser.newtabpage.activity-stream.feeds.places", false);  
user_pref("browser.newtabpage.activity-stream.feeds.prefs", false);  
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);  
user_pref("browser.newtabpage.activity-stream.feeds.sections", false);  
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);  
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);  
user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false);  
user_pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", false);  

// PREF: Disable Activity Stream (others)
user_pref("browser.newtabpage.activity-stream.messageCenterExperimentEnabled", false);
user_pref("browser.newtabpage.activity-stream.showSearch", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.rec.impressions", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.spoc.impressions", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);  
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "");  
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "");  
user_pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);  
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);  
user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false);  
user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false); 

// PREF: Disable new tab tile ads and preload
// https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-source
// https://gecko.readthedocs.org/en/latest/browser/browser/DirectoryLinksProvider.html#browser-newtabpage-directory-ping
user_pref("browser.newtab.preload", false);  
user_pref("browser.newtabpage.directory.ping", "");  
user_pref("browser.newtabpage.activity-stream.asrouter.messageProviders", ""); 

// PREF: Don't reveal build ID
// Value taken from Tor Browser
// https://bugzilla.mozilla.org/show_bug.cgi?id=583181
// user_pref("browser.startup.homepage_override.mstone", "ignore");

// PREF: Disable separate about:welcome page
// https://bugzilla.mozilla.org/show_bug.cgi?id=1617783
// user_pref("browser.aboutwelcome.enabled", false);
// user_pref("trailhead.firstrun.branches", "");
// user_pref("browser.aboutwelcome.overrideContent", "");

/******************************************************************************
 * SECTION: DISABLE POCKET EXTENSION                                          *
******************************************************************************/

// PREF: Disable built-in Pocket extension
user_pref("browser.pocket.enabled", false);
user_pref("extensions.pocket.api"," ");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/

// PREF: Choose download location
// SETTING: To set your default "downloads": General>Downloads>Save files to
// 0=desktop, 1=downloads (default), 2=last used
// user_pref("browser.download.folderList", 1);

// PREF: Enforce user interaction for security by always asking where to download
// On Android this blocks longtapping and saving images
// SETTING: General>Downloads>Always ask you where to save files
// user_pref("browser.download.useDownloadDir", false);

// PREF: Disable adding downloads to the system's "recent documents" list
user_pref("browser.download.manager.addToRecentDocs", false);

// PREF: Disable hiding mime types (Options>General>Applications) not associated with a plugin
// default=true
user_pref("browser.download.hide_plugins_without_extensions", false);

// PREF: Autohide download button
// user_pref("browser.download.autohideButton", true);

/****************************************************************************
 * SECTION: WARNINGS                                                        *
****************************************************************************/

// PREF: Disable Warnings
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0); // -1=also works
user_pref("full-screen-api.warning.timeout", 0); // -1=also works
user_pref("browser.aboutConfig.showWarning", false);

/****************************************************************************
 * SECTION: AUTOFILL                                                        *
****************************************************************************/

// PREF: Disable Form Autofill
// NOTE: stored data is not secure (uses a JSON file)
// https://wiki.mozilla.org/Firefox/Features/Form_Autofill
// https://www.ghacks.net/2017/05/24/firefoxs-new-form-autofill-is-awesome
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.formfill.enable", false);

// PREF: Disable autofilling saved passwords on HTTP pages and show warning
user_pref("signon.autofillForms", false);
user_pref("security.insecure_field_warning.contextual.enabled", true);

// PREF: Disable saving passwords
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);

/****************************************************************************
 * SECTION: ANNOYANCES                                                      *
****************************************************************************/

// PREF: Disable default browser check
user_pref("browser.shell.checkDefaultBrowser", false);

// PREF: Hide parts of the url in the location bar
// user_pref("browser.urlbar.trimURLs", true);

// PREF: Disable annoying website notifications
user_pref("permissions.default.desktop-notification", 2);

// PREF: Adjust HTML5 autoplay settings
// 0=Allow all, 1=Block non-muted media (default), 5=Block all
user_pref("media.autoplay.default", 5);

// PREF: Disable Reader mode
// Firefox will not have to parse webpage for Reader when navigating.
// Minimal performance impact.
// user_pref("reader.parse-on-load.enabled", false);

// PREF: Disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
user_pref("browser.backspace_action", 2);

// PREF: Disable ALT key toggling the menu bar
user_pref("ui.key.menuAccessKey", 0);

// PREF: Disable website control over browser right-click context menu
// [!] This sometimes results in having two menus displayed.
// [NOTE] Shift-Right-Click will always bring up the browser right-click
// context menu.
user_pref("dom.event.contextmenu.enabled", true);

// PREF: Long press left-click for right-click context menu
// user_pref("ui.click_hold_context_menus", true); // default=false
// user_pref("ui.click_hold_context_menus.delay", 500); // default=500

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
// user_pref("browser.bookmarks.max_backups", 2);

// PREF: Allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level
// user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");

// PREF: Hide image placeholders
user_pref("browser.display.show_image_placeholders", false);

// PREF: Wrap long lines of text when using source / debugger
user_pref("view_source.wrap_long_lines", true);
user_pref("devtools.debugger.ui.editor-wrapping", true);

// PREF: Disable links launching Windows Store on Windows 8/8.1/10
// [WINDOWS-only]
// [1] https://www.ghacks.net/2016/03/25/block-firefox-chrome-windows-store/
// user_pref("network.protocol-handler.external.ms-windows-store", false);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/

// PREF: Control how non-pinned tabs are loaded when a session is restored.
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
user_pref("browser.sessionstore.restore_on_demand", true);
 
// PREF: Control behavior of links that would normally open in a new window.
// 1=Open in the current tab/window
// 2=Open in a new window
// 3=Open in a new tab in the current window (default)
user_pref("browser.link.open_newwindow", 3);
 
// PREF: This preference overrides <browser.link.open_newwindow> for external
// links. Set if a different destination for external links is needed.
// 1=Open in the current tab/window
// 2=Open in a new window
// 3=Open in a new tab in the current window
// -1=no overrides (default)
// user_pref("browser.link.open_newwindow.override.external", -1);

// PREF: Open links targeting new windows in a new tab instead
// Pop-up windows are treated like regular tabs
// You can still right-click a link and open in a new window
user_pref("browser.link.open_newwindow", 3);
// user_pref("browser.link.open_newwindow.restriction", 0);

// PREF: Insert tab immediately after the current tab
// Tap to Tab extension: set to "Put new tab at the end"
// extension: https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab
// user_pref("browser.tabs.insertRelatedAfterCurrent", true); // default=true
// user_pref("browser.tabs.insertAfterCurrent", true);

// PREF: Leave the browser window open even after you close the last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: Leave bookmarks menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// PREF: Load bookmarks in the background using Bookmarks Menu
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);

// PREF: Stop websites from reloading pages automatically
// https://www.ghacks.net/2018/08/19/stop-websites-from-reloading-pages-automatically/
// user_pref("accessibility.blockautorefresh", true);
// user_pref("browser.meta_refresh_when_inactive.disabled", true);

// PREF: Color management
// Force FF to show the same color profiles as Chromium
// user_pref("gfx.color_management.mode", 1);
// user_pref("gfx.color_management.enablev4", true);

// [FF 77+] PREF: Firefox now allows viewing of PDFs even if the response HTTP headers
// include Content-Disposition:attachment. 
user_pref("browser.helperApps.showOpenOptionForPdfJS", true);

// [FF 77+] PREF: Prevent password truncation when submitting form data
// https://www.ghacks.net/2020/05/18/firefox-77-wont-truncate-text-exceeding-max-length-to-address-password-pasting-issues/
user_pref("editor.truncate_user_pastes", false);

// PREF: Adjust the minimum tab width
// [!] Can be overridden by userChrome.css.
// user_pref("browser.tabs.tabMinWidth", 100); // default=76
