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
 * version: September 2021                                                  *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/****************************************************************************
 *                                                                          *
 * [NOTE] For best performance on older hardware, you will need to test     *
 * these settings individually, especially Webrender.                       *
 *                                                                          *
****************************************************************************/

// PREF: force enable all Webrender prefs
// DISABLING WILL NOT BE SUPPORTED SOON | https://groups.google.com/a/mozilla.org/g/dev-platform/c/__ZtiiEn0u0/m/fbTlD-I4AAAJ?pli=1
// [1] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [2] https://wiki.mozilla.org/Platform/GFX/WebRender_Where
// [3] https://www.reddit.com/r/firefox/comments/fo1jwz/make_firefox_faster/flhh5l2/
user_pref("gfx.webrender.all", true);

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [NOTE] Both preferences need to be "true" if you're using the software renderer.
// DISABLING WILL NOT BE SUPPORTED SOON | https://groups.google.com/a/mozilla.org/g/dev-platform/c/__ZtiiEn0u0/m/fbTlD-I4AAAJ?pli=1
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
user_pref("gfx.webrender.all", true);
// user_pref("gfx.webrender.software", true);

// PREF: Lazy Image Loading
// https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
user_pref("dom.image-lazy-loading.enabled", true); // default

// PREF: control how tabs are loaded when a session is restored.
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
user_pref("browser.sessionstore.restore_on_demand", true); // default
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true); // default

// PREF: disable preSkeletonUI on startup
// May set to "true" if your hardware is very old.
user_pref("browser.startup.preXulSkeletonUI", false);

// PREF: about:home startup cache
// A cache for the initial about:home document that is loaded by default at startup.
// The purpose of the cache is to improve startup performance.
user_pref("browser.startup.homepage.abouthome_cache.enabled", true);

// PREF: process count
// Having more content processes can improve performance when using multiple tabs but
// it will also use more memory. You can reduce the number of content processes if your
// computer is running out of memory. If your computer's system information shows more
// than 8 GB of RAM, you would likely benefit from a high content process limit.
// [1] https://support.mozilla.org/en-US/kb/performance-settings
// default = 8. -1 allows Firefox to use as many as it wants
// user_pref("dom.ipc.processCount", 16);

// PREF: increase active connections
// [NOTE] Corresponds with changes made here: https://www.youtube.com/watch?v=jQPPJGkdbU0
// According to the default value, there will be 6 active connections kept for future requests to a server.
// If, at some point, more connections are needed, a delay will occur until there is a slot available.
// To avoid any idle periods, we can set more alive connections, thus forcing the browser to load several elements of a website.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-persistent-connections-per-server
// [WARNING] Don't go past 10 or websites may temporarily blacklist your IP!
// user_pref("network.http.max-persistent-connections-per-server", 10); // default=6

// PREF: increase communication channels
// Perform this change in order to open communication channels with the server, and consequently load several elements of the website.
// Increased browser speed shall be mainly observed in pages that contain data such as images and videos, which slow down loading times.
// The range of value for this setting goes from 1 to 65535. However, it is rather unreasonable to increase it to the maximum
// allowed value, and subsequently strain the system, so give it a try with a value of 1500.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-connections
// user_pref("network.http.max-connections", 1500); // default=900


