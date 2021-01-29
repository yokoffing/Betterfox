//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************
 * FasterFox                                                                *
 * "Non ducor duco."                                                        *
 * priority: speedy browsing                                                *
 * version: 29 January 2021                                                 *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/****************************************************************************
 *                                                                          *
 * [NOTE] For best performance on older hardware, you will need to test     *
 * these settings individually, especially Webrender.                       *
 *                                                                          *
****************************************************************************/

// PREF: Activate Webrender, Firefox's new rendering engine
// https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// https://wiki.mozilla.org/Platform/GFX/WebRender_Where
// https://www.reddit.com/r/firefox/comments/fo1jwz/make_firefox_faster/flhh5l2/
user_pref("gfx.webrender.all", true);
// If your hardware doesn't support Webrender, you can fallback to Webrender's software renderer.
// Both preferences need to be "true" if you're using the software renderer.
// https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
// user_pref("gfx.webrender.software", true);

// PREF: Improvements to the javascript engine
// https://hacks.mozilla.org/2020/11/warp-improved-js-performance-in-firefox-83/
user_pref("javascript.options.warp", true); /* default */

// PREF: Lazy Image Loading
// https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
user_pref("dom.image-lazy-loading.enabled", true); /*default*/

// PREF: Control how tabs are loaded when a session is restored.
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true);

// PREF: Disable preSkeletonUI on startup
// May set to "true" if your hardware is very old.
user_pref("browser.startup.preXulSkeletonUI", false);

// PREF: Process count
// Having more content processes can improve performance when using multiple tabs but
// it will also use more memory. You can reduce the number of content processes if your
// computer is running out of memory. If your computer's system information shows more
// than 8 GB of RAM, you would likely benefit from a high content process limit.
// https://support.mozilla.org/en-US/kb/performance-settings
// default = 8
// user_pref("dom.ipc.processCount", 16);

// PREF: Prevent FF from going offline
// https://lifehacker.com/stop-firefox-from-automatically-entering-work-offline-5714560
// user_pref("network.manage-offline-status", false);

// PREF: Disable Firefox animations 
// Use for old, slow hardware if Firefox gives you laggy performance.
// user_pref("toolkit.cosmeticAnimations.enabled", true);


