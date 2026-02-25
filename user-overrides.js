/* ----------------------------- *
 * Some privacy related features *
 * ----------------------------- */

user_pref("browser.contentblocking.category", "standard");

// PREF: disable login manager
user_pref("signon.rememberSignons", false);

// PREF: disable address and credit card manager
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.creditCards.enabled", false);

// PREF: disable chat-bot
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.chat.sidebar", false);

// PREF: disable tranlations
user_pref("browser.translations.enable", false);
user_pref("browser.translations.select.enable", false);
user_pref("browser.translations.automaticallyPopup", false);

// PREF: display the installation prompt for all extensions
user_pref("extensions.postDownloadThirdPartyPrompt", false);

// PREF: restore search engine suggestions
user_pref("browser.search.suggest.enabled", true);

// PREF: download to Downloads automatically
user_pref("browser.download.useDownloadDir", true);

/* ----------- *
 * UI settings *
 * ----------- */

// PREF: dark theme
user_pref("browser.theme.content-theme", 0);
user_pref("browser.theme.toolbar-theme", 0);

// PREF: no bookmarks panel
user_pref("browser.toolbars.bookmarks.visibility", "newtab");

// PREF: browser UI density
user_pref("browser.uidensity", 1);

// PREF: Sidebar
user_pref("sidebar.revamp", false);
user_pref("sidebar.visibility", "always-show");
user_pref("sidebar.revamp.round-content-area", true);
user_pref("sidebar.main.tools", "syncedtabs,history,bookmarks");
user_pref("sidebar.expandOnHoverMessage.dismissed", true);

// PREF: Vertical tabs
user_pref("sidebar.verticalTabs", false);

// PREF: restore Top Sites on New Tab page
user_pref("browser.newtabpage.activity-stream.feeds.topsites", true); // Shortcuts
user_pref("browser.newtabpage.activity-stream.default.sites", ""); // clear default topsites

// PREF: remove sponsored content on New Tab page
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // Sponsored shortcuts
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Recommended by Pocket
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // Sponsored Stories

// PREF: no search on New Tab page
user_pref("browser.newtabpage.activity-stream.showSearch", false);

// PREF: show weather on New Tab page
// I'm too lazy to look out the window...
user_pref("browser.newtabpage.activity-stream.system.showWeather", true);

/* ----------- *
 * UX settings *
 * ----------- */

// PREF: don't restore session
user_pref("browser.startup.page", 1);

// PREF: don't hide download button
user_pref("browser.download.autohideButton", false);

// PREF: don't close Firefox with the last tab
user_pref("browser.tabs.closeWindowWithLastTab", false);

// PREF: switch recent tabs by CTRL+TAB
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);
