/******

* name: CleanFox
* description: Removes Pocket. Disables accessibility. Cleans up about:home/about:newtab, disables autofill 
* date: 23 March 2020
* version 74 alpha
* author: hjs
* url: https://github.com/hjstephens09/Better-Fox
* license: MIT: https://github.com/hjstephens09/Better-Fox/blob/master/LICENSE

******/


/** MISC ***/
/* [NOTE] Probably need to move prefs to other files
 * and/or cleanup selections ***/

user_pref("accessibility.force_disabled", 1);
user_pref("browser.bookmarks.max_backups", 2);
user_pref("browser.ctrlTab.recentlyUsedOrder", false);
user_pref("browser.download.folderList", 0);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.startup.page", 3);
user_pref("browser.urlbar.trimURLs", true);
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);


/** DOWNLOADS ***/
/* Download location
 * 0=desktop, 1=downloads (default), 2=last used
 * [SETTING] To set your default "downloads": General>Downloads>Save files to ***/
user_pref("browser.download.folderList", 0);

/* Enforce user interaction for security by always asking where to download
 * [SETUP-CHROME] On Android this blocks longtapping and saving images
 * [SETTING] General>Downloads>Always ask you where to save files ***/
//user_pref("browser.download.useDownloadDir", false);

/* Disable adding downloads to the system's "recent documents" list ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/* Disable hiding mime types (Options>General>Applications) not associated with a plugin ***/
user_pref("browser.download.hide_plugins_without_extensions", false);

/* Disable "open with" in download dialog
 * This is very useful to enable when the browser is sandboxed (e.g. via AppArmor)
 * in such a way that it is forbidden to run external applications.
 * [WARNING] This may interfere with some users' workflow or methods
 * [1] https://bugzilla.mozilla.org/1281959 ***/
// user_pref("browser.download.forbid_open_with", true);


/** NEW TAB PAGE CLEANUP ***/
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.pocketCta", " ");
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.introShown", false);


/** DISABLE AUTOFILL ***/
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("browser.formfill.enable", false);
user_pref("signon.formlessCapture.enabled", false); // security benefit
user_pref("signon.rememberSignons", false); // use a password manager ext.


/** DISABLE POCKET ***/
user_pref("extensions.pocket.api", " ");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", " ");
user_pref("extensions.pocket.site", " ");
user_pref("browser.toolbarbuttons.introduced.pocket-button", false);