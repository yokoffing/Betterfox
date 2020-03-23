/******

* name: PeskyFox
* description: Take away annoyances and adds a few option
* date: 23 March 2020
* version 74 alpha
* authors: hjs
* url: https://github.com/hjstephens09/Better-Fox
* license: MIT: https://github.com/hjstephens09/Better-Fox/blob/master/LICENSE

******/

/** WARNINGS ***/
user_pref("browser.tabs.warnOnClose", false);
user_pref("browser.tabs.warnOnCloseOtherTabs", false);
user_pref("browser.tabs.warnOnOpen", false);
user_pref("full-screen-api.warning.delay", 0); // -1=also works
user_pref("full-screen-api.warning.timeout", 0); // -1=also works
user_pref("browser.aboutConfig.showWarning", false); // HTML version [FF71+]


/** DARK MODE ***/
/* Dark pages in about:preferences, etc. ***/
user_pref("browser.in-content.dark-mode", true);
/* Enforce prefers-color-scheme as Dark [FF67+]
 * 0=light, 1=dark : This overrides your OS value. ***/
user_pref("ui.systemUsesDarkTheme", 1); // [HIDDEN PREF]


/** MISC ***/

/* Disable backspace action ***/
user_pref("browser.backspace_action", 2); // 0=previous page, 1=scroll up, 2=do nothing

/* Leave bookmarks menu open
 * Useful if you often for opening multiple sites from the bookmark menu ***/
 user_pref("browser.bookmarks.openInTabClosesMenu", false);

/* Open links targeting new windows in a new tab instead
 * Pop-up windows are treated like regular tabs
 * You can still right-click a link and open in a new window ***/
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.link.open_newwindow.restriction", 0);

/* Disable website notification by default ***/
user_pref("permissions.default.desktop-notification", 2);

/* Insert tab immediately after the current tab
 * Tap to Tab extension: set to "Put new tab at the end"
 * extension: https://addons.mozilla.org/en-US/firefox/addon/tap-to-tab ***/
user_pref("browser.tabs.insertAfterCurrent", true);
user_pref("browser.tabs.insertRelatedAfterCurrent", false);

/* Prevent FF from going offline
 * FF manages network connectivity poorly. Best to disable unless you need it.
 * [1] https://lifehacker.com/stop-firefox-from-automatically-entering-work-offline-5714560 ***/
user_pref("network.manage-offline-status", false);

/* Autohide download button ***/
user_pref("browser.download.autohideButton", true);

/* Other **/
user_pref("browser.tabs.loadBookmarksInBackground", true);
user_pref("browser.tabs.loadBookmarksInTabs", true);
user_pref("browser.tabs.tabMinWidth", 100);
user_pref("devtools.debugger.ui.editor-wrapping", true);
user_pref("media.autoplay.default", 1); // 0=Allow all, 1=Block non-muted media (default), 5=Block all
user_pref("toolkit.zoomManager.zoomValues", ".8,.9,.95,1,1.05,1.1,1,15,1.2,1.33,1.5,1.7,2,2.4,3");
user_pref("view_source.wrap_long_lines", true);
user_pref("config.trim_on_minimize", true);
user_pref("layout.spellcheckDefault", 2);
user_pref("browser.urlbar.decodeURLsOnCopy", true); // see bugzilla 1320061 [FF53+]
/* [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1320061 ***/
user_pref("general.autoScroll", false);
user_pref("middlemouse.scrollbarPosition", true);
user_pref("ui.key.menuAccessKey", 0);


/* OPTIONAL ***/

/* Hide image placeholders ***/
//user_pref("browser.display.show_image_placeholders", false);

/* Disable Firefox animations ***/
//user_pref("toolkit.cosmeticAnimations.enabled", false);

//user_pref("dom.event.contextmenu.enabled", false);
//user_pref("browser.tabs.closeWindowWithLastTab", false);