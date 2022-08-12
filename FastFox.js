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
 * version: August 2022                                                     *
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
// user_pref("gfx.webrender.all", true);

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [NOTE] Both preferences need to be "true" if you're using the software renderer.
// DISABLING WILL NOT BE SUPPORTED SOON | https://groups.google.com/a/mozilla.org/g/dev-platform/c/__ZtiiEn0u0/m/fbTlD-I4AAAJ?pli=1
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
// user_pref("gfx.webrender.software", true);

// PREF: Lazy Image Loading
// https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
user_pref("dom.image-lazy-loading.enabled", true); // default

// PREF: control how tabs are loaded when a session is restored.
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
user_pref("browser.sessionstore.restore_on_demand", true); // default
// user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true); // default

// PREF: disable preSkeletonUI on startup
// May set to "true" if your hardware is very old.
// user_pref("browser.startup.preXulSkeletonUI", false);

// PREF: Prioritized Task Scheduling API
// [1] https://blog.mozilla.org/performance/2022/06/02/prioritized-task-scheduling-api-is-prototyped-in-nightly/
// [2] https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91
user_pref("dom.enable_web_task_scheduling", true);

// PREF: OffscreenCanvas
// [1] https://yashints.dev/blog/2019/05/11/offscreen-canvas
// [2] https://www.youtube.com/watch?v=CWvRA9E0DqU
// [3] https://developer.chrome.com/blog/offscreen-canvas/
// [4] https://groups.google.com/a/mozilla.org/g/dev-platform/c/kp9SZL-0wW0
user_pref("gfx.offscreencanvas.enabled", true);

// PREF: about:home startup cache
// A cache for the initial about:home document that is loaded by default at startup.
// The purpose of the cache is to improve startup performance.
// user_pref("browser.startup.homepage.abouthome_cache.enabled", true);
