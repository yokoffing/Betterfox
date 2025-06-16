
/****************************************************************************
 * Peskyfox                                                                 *
 * "Aquila non capit muscas"                                                *
 * priority: remove annoyances                                              *
 * version: 140                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 * credit: Some prefs are reproduced and adapted from the arkenfox project  *
 * credit urL: https://github.com/arkenfox/user.js                          *
 ***************************************************************************/

/****************************************************************************
 * SECTION: MOZILLA UI                                                      *
****************************************************************************/

// PREF: Mozilla VPN
// [1] https://github.com/yokoffing/Betterfox/issues/169
user_pref("browser.privatebrowsing.vpnpromourl", "");
    //user_pref("browser.vpn_promo.enabled", false);

// PREF: disable about:addons' Recommendations pane (uses Google Analytics)
user_pref("extensions.getAddons.showPane", false); // HIDDEN

// PREF: disable recommendations in about:addons' Extensions and Themes panes
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// PREF: Personalized Extension Recommendations in about:addons and AMO
// [NOTE] This pref has no effect when Health Reports are disabled.
// [SETTING] Privacy & Security>Firefox Data Collection & Use>Allow Firefox to make personalized extension recommendations
user_pref("browser.discovery.enabled", false);

// PREF: disable Fakespot integration [FF116+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1840156#c0
// [2] https://github.com/arkenfox/user.js/issues/1730
// [3] https://www.fakespot.com/
// [4] https://www.ghacks.net/2023/10/12/firefox-will-soon-tell-you-if-product-reviews-are-reliable/
//user_pref("browser.shopping.experience2023.enabled", false); // DEFAULT
//user_pref("browser.shopping.experience2023.ads.exposure", false); // DEFAULT [FF121+]

// PREF: disable Firefox from asking to set as the default browser
// [1] https://github.com/yokoffing/Betterfox/issues/166
user_pref("browser.shell.checkDefaultBrowser", false);

// PREF: disable Extension Recommendations (CFR: "Contextual Feature Recommender")
// [1] https://support.mozilla.org/en-US/kb/extension-recommendations
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

// PREF: hide "More from Mozilla" in Settings
user_pref("browser.preferences.moreFromMozilla", false);

// PREF: tab and about:config warnings
//user_pref("browser.tabs.warnOnClose", false); // DEFAULT [FF94+]
//user_pref("browser.tabs.warnOnCloseOtherTabs", true); // DEFAULT
//user_pref("browser.tabs.warnOnOpen", true); // DEFAULT
user_pref("browser.aboutConfig.showWarning", false);

// PREF: disable welcome notices
//user_pref("browser.startup.homepage_override.mstone", "ignore"); // What's New page after updates; master switch
user_pref("browser.aboutwelcome.enabled", false); // disable Intro screens
    //user_pref("startup.homepage_welcome_url", "");
    //user_pref("startup.homepage_welcome_url.additional", "");
    //user_pref("startup.homepage_override_url", ""); // What's New page after updates

// PREF: disable "What's New" toolbar icon [FF69+]
//user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// PREF: new profile switcher
user_pref("browser.profiles.enabled", true);

// PREF: use native title bar buttons [LINUX]
// [1] https://github.com/yokoffing/Betterfox/issues/320
//user_pref("widget.gtk.non-native-titlebar-buttons.enabled", true);

/****************************************************************************
 * SECTION: THEME ADJUSTMENTS                                              *
****************************************************************************/

// PREF: enable Firefox to use userChome, userContent, etc.
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// PREF: add compact mode back to options
user_pref("browser.compactmode.show", true);

// PREF: preferred color scheme for websites
// [SETTING] General>Language and Appearance>Website appearance
// By default, color scheme matches the theme of your browser toolbar (3).
// Set this pref to choose Dark on sites that support it (0) or Light (1).
// Before FF95, the pref was 2, which determined site color based on OS theme.
// Dark (0), Light (1), System (2), Browser (3) [DEFAULT FF95+]
// [1] https://www.reddit.com/r/firefox/comments/rfj6yc/how_to_stop_firefoxs_dark_theme_from_overriding/hoe82i5/?context=3
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// PREF: disable always using dark theme for private browsing windows [FF106+]
//user_pref("browser.theme.dark-private-windows", false);

// PREF: prevent private windows being separate from normal windows in taskbar [WINDOWS] [FF106+]
user_pref("browser.privateWindowSeparation.enabled", false);

// PREF: show search bar [FF122+]
// Mozilla has removed the search bar option from the settings window.
//user_pref("browser.search.widget.inNavBar", true);

// PREF: new tab page wallpapers
//user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", true); // [DEFAULT FF132+]

/****************************************************************************
 * SECTION: COOKIE BANNER HANDLING                                         *
****************************************************************************/

// PREF: Cookie Banner handling
// [DEPRECIATED] Future of the project is unclear. See [5] and [6].
// [NOTE] Feature still enforces Total Cookie Protection to limit 3rd-party cookie tracking [1]
// [1] https://github.com/mozilla/cookie-banner-rules-list/issues/33#issuecomment-1318460084
// [2] https://phabricator.services.mozilla.com/D153642
// [3] https://winaero.com/make-firefox-automatically-click-on-reject-all-in-cookie-banner-consent/
// [4] https://docs.google.com/spreadsheets/d/1Nb4gVlGadyxix4i4FBDnOeT_eJp2Zcv69o-KfHtK-aA/edit#gid=0
// [5] https://bugzilla.mozilla.org/show_bug.cgi?id=1940418
// [6] https://github.com/mozilla/cookie-banner-rules-list/issues/544
// 2: reject banners if it is a one-click option; otherwise, fall back to the accept button to remove banner
// 1: reject banners if it is a one-click option; otherwise, keep banners on screen
// 0: disable all cookie banner handling
//user_pref("cookiebanners.service.mode", 1);
//user_pref("cookiebanners.service.mode.privateBrowsing", 1);

// PREF: Cookie Banner global rules
// Global rules that can handle a list of cookie banner libraries and providers on any site.
// This is used for click rules that can handle common Consent Management Providers (CMP).
//user_pref("cookiebanners.service.enableGlobalRules", true); // DEFAULT [FF121+]
//user_pref("cookiebanners.service.enableGlobalRules.subFrames", true); // DEFAULT [FF121+]

/****************************************************************************
 * SECTION: TRANSLATIONS                                                   *
****************************************************************************/

// PREF: Firefox Translations [FF118+]
// Automated translation of web content is done locally in Firefox, so that
// the text being translated does not leave your machine.
// [ABOUT] Visit about:translations to translate your own text as well.
// [1] https://blog.mozilla.org/en/mozilla/local-translation-add-on-project-bergamot/
// [2] https://blog.nightly.mozilla.org/2023/06/01/firefox-translations-and-other-innovations-these-weeks-in-firefox-issue-139/
// [3] https://www.ghacks.net/2023/08/02/mozilla-firefox-117-beta-brings-an-automatic-language-translator-for-websites-and-it-works-offline/
//user_pref("browser.translations.enable", true); // DEFAULT
    //user_pref("browser.translations.autoTranslate", true);

/****************************************************************************
 * SECTION: FULLSCREEN NOTICE                                               *
****************************************************************************/

// PREF: remove fullscreen delay
user_pref("full-screen-api.transition-duration.enter", "0 0"); // default=200 200
user_pref("full-screen-api.transition-duration.leave", "0 0"); // default=200 200

// PREF: disable fullscreen notice
user_pref("full-screen-api.warning.delay", -1); // default=500
user_pref("full-screen-api.warning.timeout", 0); // default=3000

/****************************************************************************
 * SECTION: FONT APPEARANCE                                                 *
****************************************************************************/

// PREF: smoother font
// [1] https://reddit.com/r/firefox/comments/wvs04y/windows_11_firefox_v104_font_rendering_different/?context=3
//user_pref("gfx.webrender.quality.force-subpixel-aa-where-possible", true);

// PREF: use DirectWrite everywhere like Chrome [WINDOWS]
// [1] https://kb.mozillazine.org/Thunderbird_6.0,_etc.#Font_rendering_and_performance_issues
// [2] https://reddit.com/r/firefox/comments/wvs04y/comment/ilklzy1/?context=3
//user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
//user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
//user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", ""); // DEFAULT FF135+
//user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);
// Some users find these helpful:
    //user_pref("gfx.font_rendering.cleartype_params.gamma", 1750);
    //user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 100);
    //user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);

// PREF: use macOS Appearance Panel text smoothing setting when rendering text [macOS]
//user_pref("gfx.use_text_smoothing_setting", true);

/****************************************************************************
 * SECTION: URL BAR                                                         *
****************************************************************************/

// PREF: minimize URL bar suggestions (bookmarks, history, open tabs)
// Dropdown options in the URL bar:
//user_pref("browser.urlbar.suggest.history", false);
//user_pref("browser.urlbar.suggest.bookmark", true); // DEFAULT
//user_pref("browser.urlbar.suggest.clipboard", false);
//user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.engines", false);
    //user_pref("browser.urlbar.suggest.searches", false);
//user_pref("browser.urlbar.quickactions.enabled", false);
//user_pref("browser.urlbar.shortcuts.quickactions", false);
//user_pref("browser.urlbar.suggest.weather", true); // DEFAULT [FF108]
    //user_pref("browser.urlbar.weather.ignoreVPN", false); // DEFAULT
//user_pref("browser.urlbar.suggest.calculator", true); // [DEFAULT FF137+]
user_pref("browser.urlbar.unitConversion.enabled", true);

// PREF: disable dropdown suggestions with empty query
//user_pref("browser.urlbar.suggest.topsites", false);

// PREF: disable urlbar trending search suggestions [FF118+]
// [SETTING] Search>Search Suggestions>Show trending search suggestions (FF119)
user_pref("browser.urlbar.trending.featureGate", false);
//user_pref("browser.urlbar.suggest.trending", false);

// PREF: disable urlbar suggestions
//user_pref("browser.urlbar.addons.featureGate", false); // [FF115+]
//user_pref("browser.urlbar.fakespot.featureGate", false); // [FF130+] [DEFAULT: false]
//user_pref("browser.urlbar.mdn.featureGate", false); // [FF117+] [HIDDEN PREF]
//user_pref("browser.urlbar.pocket.featureGate", false); // [FF116+] [DEFAULT: false]
//user_pref("browser.urlbar.weather.featureGate", false); // [FF108+] [DEFAULT: false]
//user_pref("browser.urlbar.clipboard.featureGate", false); // [FF118+] [DEFAULT: true FF125+]
//user_pref("browser.urlbar.yelp.featureGate", false); // [FF124+] [DEFAULT: false]

// PREF: disable recent searches [FF120+]
// [NOTE] Recent searches are cleared with history.
// [1] https://support.mozilla.org/kb/search-suggestions-firefox
//user_pref("browser.urlbar.recentsearches.featureGate", false);

// PREF: disable tab-to-search [FF85+]
// Alternatively, you can exclude on a per-engine basis by unchecking them in Options>Search
// [SETTING] Privacy & Security>Address Bar>When using the address bar, suggest>Search engines
//user_pref("browser.urlbar.suggest.engines", false);

// PREF: Adaptive History Autofill
// [1] https://docs.google.com/document/u/1/d/e/2PACX-1vRBLr_2dxus-aYhZRUkW9Q3B1K0uC-a0qQyE3kQDTU3pcNpDHb36-Pfo9fbETk89e7Jz4nkrqwRhi4j/pub
//user_pref("browser.urlbar.autoFill", true); // [DEFAULT]
//user_pref("browser.urlbar.autoFill.adaptiveHistory.enabled", false);

// PREF: adjust the amount of Address bar / URL bar dropdown results
// This value controls the total number of entries to appear in the location bar dropdown.
// [NOTE] Items (bookmarks/history/openpages) with a high "frequency"/"bonus" will always
// be displayed (no we do not know how these are calculated or what the threshold is),
// and this does not affect the search by search engine suggestion.
// disable=0
//user_pref("browser.urlbar.maxRichResults", 5); // default=10

// PREF: text fragments
// [WARNING] Enabling can cause tab crashes [4]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1753933#c6
// [2] https://developer.mozilla.org/en-US/docs/Web/Text_fragments
// [3] https://web.dev/articles/text-fragments
// [4] https://github.com/yokoffing/Betterfox/issues/397
//user_pref("dom.text_fragments.enabled", true); // [DEFAULT]
//user_pref("dom.text_fragments.create_text_fragment.enabled", true);

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

// PREF: startup / new tab page
// 0=blank, 1=home, 2=last visited page, 3=resume previous session
// [NOTE] Session Restore is cleared with history and not used in Private Browsing mode
// [SETTING] General>Startup>Open previous windows and tabs
//user_pref("browser.startup.page", 3);

// PREF: set HOME+NEW WINDOW page to blank tab
// about:home=Activity Stream, custom URL, about:blank
// [SETTING] Home>New Windows and Tabs>Homepage and new windows
// [Custom URLs] Set two or more websites in Home Page Field – delimited by |
// [1] https://support.mozilla.org/en-US/questions/1271888#answer-1262899
//user_pref("browser.startup.homepage", "about:blank");

// PREF: set NEWTAB page to blank tab
// true=Firefox Home, false=blank page
// [SETTING] Home>New Windows and Tabs>New tabs
//user_pref("browser.newtabpage.enabled", false);

// PREF: Pinned Shortcuts on New Tab
// [SETTINGS] Home>Firefox Home Content
// [1] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
//user_pref("browser.newtabpage.activity-stream.showSearch", true); // NTP Web Search [DEFAULT]
//user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // Shortcuts
      user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Shortcuts > Sponsored shortcuts [FF83+]
//user_pref("browser.newtabpage.activity-stream.showWeather", false); // Weather [FF130+]
    //user_pref("browser.newtabpage.activity-stream.system.showWeather", false); // hides Weather as an UI option
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
      user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories [FF58+]  
//user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // Recent Activity [DEFAULT]
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
      //user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // [DEFAULT]

// PREF: wallpapers on New Tab [FF128+ NIGHTLY]
//user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", false); // Wallpapers

// PREF: clear default topsites
// [NOTE] This does not block you from adding your own.
user_pref("browser.newtabpage.activity-stream.default.sites", "");

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
      //user_pref("extensions.pocket.api"," ");
      //user_pref("extensions.pocket.oAuthConsumerKey", " ");
      //user_pref("extensions.pocket.site", " ");
      //user_pref("extensions.pocket.showHome", false);

/******************************************************************************
 * SECTION: DOWNLOADS                                 *
******************************************************************************/

// PREF: choose download location
// [SETTING] To set your default "downloads": General>Downloads>Save files to...
// 0=desktop, 1=downloads (default), 2=last used
//user_pref("browser.download.folderList", 1); // DEFAULT

// PREF: always ask how to handle new mimetypes [FF101+]
// Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Applications>What should Firefox do with other files?
// false=Save files
// true=Ask whether to open or save files
//user_pref("browser.download.always_ask_before_handling_new_types", true);

// PREF: always ask where to download
// [OPTIONAL HARDENING] Enforce user interaction for greater security.
// [SETTING] General>Files and Applications>Downloads>Always ask you where to save files
// [DIALOGUE] "Ask whether to open or save files"
// true=direct download (default)
// false=the user is asked what to do
// [1] https://github.com/yokoffing/Betterfox/issues/267
//user_pref("browser.download.useDownloadDir", false);
    //user_pref("browser.download.dir", "C:\Users\<YOUR_USERNAME>\AppData\Local\Temp"); // [WINDOWS]

// PREF: autohide the downloads button
//user_pref("browser.download.autohideButton", true); // DEFAULT

// PREF: disable download panel opening on every download [non-functional?]
// Controls whether to open the download panel every time a download begins.
// [NOTE] The first download ever ran in a new profile will still open the panel.
//user_pref("browser.download.alwaysOpenPanel", false);

// PREF: disable adding downloads to the system's "recent documents" list 
user_pref("browser.download.manager.addToRecentDocs", false);

/****************************************************************************
 * SECTION: PDF                                                             *
****************************************************************************/

// PREF: enforce Firefox's built-in PDF reader
// This setting controls if the option "Display in Firefox" is available in the setting below
// and by effect controls whether PDFs are handled in-browser or externally ("Ask" or "Open With").
// [1] https://mozilla.github.io/pdf.js/
//user_pref("pdfjs.disabled", false); // DEFAULT

// PREF: allow viewing of PDFs even if the response HTTP headers
// include Content-Disposition:attachment. 
//user_pref("browser.helperApps.showOpenOptionForPdfJS", true); // DEFAULT

// PREF: open PDFs inline (FF103+)
user_pref("browser.download.open_pdf_attachments_inline", true);

// PREF: PDF sidebar on load
// 2=table of contents (if not available, will default to 1)
// 1=view pages
// 0=disabled
// -1=remember previous state (default)
//user_pref("pdfjs.sidebarViewOnLoad", 2);

// PREF: default zoom for PDFs [HIDDEN]
// [NOTE] "page-width" not needed if using sidebar on load
//user_pref("pdfjs.defaultZoomValue", page-width);

/****************************************************************************
 * SECTION: TAB BEHAVIOR                                                    *
****************************************************************************/

// PREF: search query opens in a new tab (instead of the current tab)
//user_pref("browser.search.openintab", true); // SEARCH BOX
//user_pref("browser.urlbar.openintab", true); // URL BAR

// PREF: control behavior of links that would normally open in a new window
// [NOTE] You can still right-click a link and open in a new window
// 3 (default) = in a new tab; pop-up windows are treated like regular tabs
// 2 = in a new window
// 1 = in the current tab
//user_pref("browser.link.open_newwindow", 3); // DEFAULT

// PREF: determine the behavior of pages opened by JavaScript (like popups)
// 2 (default) = catch new windows opened by JavaScript that do not have
// specific values set (how large the window should be, whether it
// should have a status bar, etc.) 
// 1 = let all windows opened by JavaScript open in new windows
// 0 = force all new windows opened by JavaScript into tabs
// [NOTE] Most advertising popups also open in new windows with values set
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.link.open_newwindow.restriction", 0);

// PREF: override <browser.link.open_newwindow> for external links
// Set if a different destination for external links is needed
// 3=Open in a new tab in the current window
// 2=Open in a new window
// 1=Open in the current tab/window
// -1=no overrides (default)
//user_pref("browser.link.open_newwindow.override.external", -1); // DEFAULT

// PREF: focus behavior for new tabs from links
// Determine whether a link opens in the foreground or background on left-click
// [SETTINGS] Settings>General>Tabs>"When you open a link, image or media in a new tab, switch to it immediately"
// true(default) = opens new tabs by left-click in the background, leaving focus on the current tab
// false = opens new tabs by left-click in the foreground, putting focus on the new tab
// [NOTE] CTRL+SHIFT+CLICK will open new tabs in foreground (default); switching PREF to false will reverse this behavior
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.tabs.loadInBackground", true); // DEFAULT

// PREF: determines whether pages normally meant to open in a new window (such as
// target="_blank" or from an external program), but that have instead been loaded in a new tab
// This pref takes effect when Firefox has diverted a new window to a new tab instead, then:
// true = loads the new tab in the background, leaving focus on the current tab
// false(default) = loads the new tab in the foreground, taking the focus from the current tab
// [NOTE] Setting this preference to true will still bring the browser to the front when opening links from outside the browser
// [1] https://kb.mozillazine.org/About:config_entries
//user_pref("browser.tabs.loadDivertedInBackground", false); // DEFAULT

// PREF: force bookmarks to open in a new tab, not the current tab
//user_pref("browser.tabs.loadBookmarksInTabs", true);
    //user_pref("browser.tabs.loadBookmarksInBackground", true); // load bookmarks in background

// PREF: leave Bookmarks Menu open when selecting a site
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// PREF: restore "View image info" on right-click
user_pref("browser.menu.showViewImageInfo", true);

// PREF: show all matches in Findbar
user_pref("findbar.highlightAll", true);

// PREF: force disable finding text on page without prompting
// [NOTE] Not as powerful as using Ctrl+F.
// [SETTINGS] General>Browsing>"Search for text when you start typing"
// [1] https://github.com/yokoffing/Betterfox/issues/212
//user_pref("accessibility.typeaheadfind", false); // enforce DEFAULT

// PREF: disable middle mouse click opening links from clipboard
// It's been default in Linux since at least FF102.
// [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/10089
//user_pref("middlemouse.contentLoadURL", false);

// PREF: Prevent scripts from moving and resizing open windows
//user_pref("dom.disable_window_move_resize", true);

// PREF: insert new tabs after groups like it
// true(default) = open new tabs to the right of the parent tab
// false = new tabs are opened at the far right of the tab bar
//user_pref("browser.tabs.insertRelatedAfterCurrent", true); // DEFAULT

// PREF: insert new tabs immediately after the current tab
//user_pref("browser.tabs.insertAfterCurrent", true);

// PREF: leave the browser window open even after you close the last tab
//user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: stop websites from reloading pages automatically
// [WARNING] Breaks some sites.
// [1] https://www.ghacks.net/2018/08/19/stop-websites-from-reloading-pages-automatically/
//user_pref("accessibility.blockautorefresh", true);
//user_pref("browser.meta_refresh_when_inactive.disabled", true);

// PREF: do not select the space next to a word when selecting a word
user_pref("layout.word_select.eat_space_to_next_word", false);

// PREF: controls if a double-click word selection also deletes one adjacent whitespace
// This mimics native behavior on macOS.
//user_pref("editor.word_select.delete_space_after_doubleclick_selection", true);

// PREF: do not hide the pointer while typing [LINUX]
//user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

// PREF: limit events that can cause a pop-up
// Firefox provides an option to provide exceptions for sites, remembered in your Site Settings.
// (default) "change click dblclick auxclick mouseup pointerup notificationclick reset submit touchend contextmenu"
// (alternate) user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");
//user_pref("dom.popup_allowed_events", "click dblclick");
//user_pref("dom.disable_open_during_load", true); // DEFAULT
//user_pref("privacy.popups.showBrowserMessage", true); // DEFAULT

// PREF: enable Tab Previews [FF122+, FF128+]
// [1] https://github.com/yokoffing/Betterfox/issues/309
//user_pref("browser.tabs.hoverPreview.enabled", true);
    //user_pref("browser.tabs.hoverPreview.showThumbnails", true); // DEFAULT

/****************************************************************************
 * SECTION: KEYBOARD AND SHORTCUTS                                          *
 ****************************************************************************/

// PREF: disable backspace action
// 0=previous page, 1=scroll up, 2=do nothing
//user_pref("browser.backspace_action", 2); // DEFAULT

// PREF: disable ALT key toggling the menu bar
//user_pref("ui.key.menuAccessKeyFocuses", false);
    //user_pref("ui.key.menuAccessKey", 18); // DEFAULT

// PREF: cycle through tabs in recently used order
// [SETTING] Ctrl+Tab cycles through tabs in recently used order
//user_pref("browser.ctrlTab.sortByRecentlyUsed", true);

// PREF: disable websites overriding Firefox's keyboard shortcuts [FF58+]
// 0=ask (default), 1=allow, 2=block
// [SETTING] to add site exceptions: Ctrl+I>Permissions>Override Keyboard Shortcuts ***/
//user_pref("permissions.default.shortcuts", 2);

// PREF: hide frequent sites on right-click of taskbar icon [WINDOWS?]
//user_pref("browser.taskbar.lists.frequent.enabled", false);

/****************************************************************************
 * SECTION: ACCESSIBILITY AND USABILITY                                     *
 ****************************************************************************/

// PREF: disable Reader mode parse on load
// Reader supposedly costs extra CPU after page load.
// [TIP] Use about:reader?url=%s as a keyword to open links automatically in reader mode [1].
// Firefox will not have to parse webpage for Reader when navigating.
// Extremely minimal performance impact, if you disable.
// [1] https://www.reddit.com/r/firefox/comments/621sr2/i_found_out_how_to_automatically_open_a_url_in/ 
//user_pref("reader.parse-on-load.enabled", false);

// PREF: Spell-check
// 0=none, 1-multi-line, 2=multi-line & single-line
//user_pref("layout.spellcheckDefault", 1); // DEFAULT

// PREF: Spell Checker underline styles [HIDDEN]
// [1] https://kb.mozillazine.org/Ui.SpellCheckerUnderlineStyle#Possible_values_and_their_effects
//user_pref("ui.SpellCheckerUnderlineStyle", 1);

// PREF: remove underlined characters from various settings
//user_pref("ui.key.menuAccessKey", 0);

// PREF: enable CSS moz document rules
// Still needed for Stylus?
// [1] https://reddit.com/r/FirefoxCSS/comments/8x2q97/reenabling_mozdocument_rules_in_firefox_61/
//user_pref("layout.css.moz-document.content.enabled", true);

/****************************************************************************
 * SECTION: BOOKMARK MANAGEMENT                                             *
 ****************************************************************************/

// PREF: limit the number of bookmark backups Firefox keeps
//user_pref("browser.bookmarks.max_backups", 1); // default=15

/****************************************************************************
 * SECTION: ZOOM AND DISPLAY SETTINGS                                       *
 ****************************************************************************/

// PREF: zoom only text on webpage, not other elements
//user_pref("browser.zoom.full", false);

// PREF: allow for more granular control of zoom levels
// Especially useful if you want to set your default zoom to a custom level.
//user_pref("toolkit.zoomManager.zoomValues", ".3,.5,.67,.8,.9,.95,1,1.1,1.2,1.3,1.4,1.5,1.6,1.7,2,2.4,3");

// PREF: restore zooming behavior [macOS] [FF109+]
// On macOS, Ctrl or Cmd + trackpad or mouse wheel now scrolls the page instead of zooming.
// This avoids accidental zooming and matches Safari's and Chrome's behavior.
// The prefs below restores the previous zooming behavior
//user_pref("mousewheel.with_control.action", 3);
//user_pref("mousewheel.with_meta.action", 3);

// PREF: adjust the minimum tab width
// Can be overridden by userChrome.css
//user_pref("browser.tabs.tabMinWidth", 120); // default=76

// PREF: always underline links [FF120+]
//user_pref("layout.css.always_underline_links", false); // DEFAULT

/****************************************************************************
 * SECTION: DEVELOPER TOOLS                                                 *
 ****************************************************************************/

// PREF: wrap long lines of text when using source / debugger
//user_pref("view_source.wrap_long_lines", true);
//user_pref("devtools.debugger.ui.editor-wrapping", true);

// PREF: enable ASRouter Devtools at about:newtab#devtools
// This is useful if you're making your own CSS theme.
// [1] https://firefox-source-docs.mozilla.org/browser/components/newtab/content-src/asrouter/docs/debugging-docs.html
//user_pref("browser.newtabpage.activity-stream.asrouter.devtoolsEnabled", true);

// show user agent styles in the inspector
//user_pref("devtools.inspector.showUserAgentStyles", true);

// show native anonymous content (like scrollbars or tooltips) and user
// agent shadow roots (like the components of an <input> element) in the inspector
//user_pref("devtools.inspector.showAllAnonymousContent", true);

/****************************************************************************
 * SECTION: IMAGE AND MEDIA HANDLING                                        *
 ****************************************************************************/

// PREF: JPEG XL image format [NIGHTLY]
// May not affect anything on ESR/Stable channel [2].
// [TEST] https://www.jpegxl.io/firefox#firefox-jpegxl-tutorial
// [1] https://cloudinary.com/blog/the-case-for-jpeg-xl
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1539075#c51
//user_pref("image.jxl.enabled", true);
