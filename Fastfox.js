//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************************
 * Fastfox                                                                              *
 * "Non ducor duco"                                                                     *
 * priority: speedy browsing                                                            *
 * version: 107                                                                         *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/

/****************************************************************************************
 *                                                                                      *
 * [NOTE] For best performance on older hardware, you will need to test                 *
 * these settings individually, especially Webrender.                                   *
 *                                                                                      *
****************************************************************************************/

// PREF: force enable all Webrender prefs
// [1] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [2] https://wiki.mozilla.org/Platform/GFX/WebRender_Where
// [3] https://www.reddit.com/r/firefox/comments/fo1jwz/make_firefox_faster/flhh5l2/
//user_pref("gfx.webrender.all", true);

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [NOTE] Both preferences need to be "true" if you're using the software renderer.
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
//user_pref("gfx.webrender.software", true);

// PREF: enable Lazy Image Loading
// https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
//user_pref("dom.image-lazy-loading.enabled", true); // DEFAULT

// PREF: control how tabs are loaded when a session is restored
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
//user_pref("browser.sessionstore.restore_on_demand", true); // DEFAULT
    //user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//user_pref("browser.sessionstore.restore_tabs_lazily", true); // DEFAULT

// PREF: disable preSkeletonUI on startup
user_pref("browser.startup.preXulSkeletonUI", false);
  
// PREF: set the minimum interval between session save operations
// Increasing this can help on older machines and some websites, as well as reducing writes
// [1] https://bugzilla.mozilla.org/1304389
//user_pref("browser.sessionstore.interval", 30000); // [DEFAULT: 15000]

// PREF: JPEG XL image format [NIGHTLY]
// [1] https://cloudinary.com/blog/the-case-for-jpeg-xl
//user_pref("image.jxl.enabled", true);

// PREF: about:home startup cache [NIGHTLY]
// A cache for the initial about:home document that is loaded by default at startup
// The purpose of the cache is to improve startup performance
//user_pref("browser.startup.homepage.abouthome_cache.enabled", true);

// PREF: CSS Masonry Layout [NIGHTLY]
user_pref("layout.css.grid-template-masonry-value.enabled", true);

// PREF: Prioritized Task Scheduling API [NIGHTLY]
// [1] https://blog.mozilla.org/performance/2022/06/02/prioritized-task-scheduling-api-is-prototyped-in-nightly/
// [2] https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91
user_pref("dom.enable_web_task_scheduling", true);

// PREF: OffscreenCanvas
// [1] https://yashints.dev/blog/2019/05/11/offscreen-canvas
// [2] https://www.youtube.com/watch?v=CWvRA9E0DqU
// [3] https://developer.chrome.com/blog/offscreen-canvas/
// [4] https://groups.google.com/a/mozilla.org/g/dev-platform/c/kp9SZL-0wW0
//user_pref("gfx.offscreencanvas.enabled", true); // DEFAULT FF106+

// PREF: CSS Font Loading API in workers
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1072107
//user_pref("layout.css.font-loading-api.workers.enabled", true);  // DEFAULT FF106+

// PREF: enable animation-composition [NIGHTLY]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1785329
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1293490
user_pref("layout.css.animation-composition.enabled", true);

// PREF: enable importMaps [FF108+] [NIGHTLY]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1688879
// [2] https://github.com/WICG/import-maps#the-basic-idea
// [3] https://caniuse.com/import-maps
user_pref("dom.importMaps.enabled", true);
//user_pref("javascript.options.experimental.import_assertions", true);

// PREF: Shadowrealms [NIGHTLY]
// [1] https://github.com/tc39/proposal-shadowrealm/blob/main/explainer.md#introduction
//user_pref("javascript.options.experimental.shadow_realms", true);

// PREF: Wasm GC [NIGHTLY]
// [1] https://github.com/WebAssembly/gc/blob/main/proposals/gc/Overview.md
//user_pref("javascript.options.wasm_gc", true);

// PREF: Wasm Function References [NIGHTLY]
// [1] https://github.com/WebAssembly/function-references/blob/master/proposals/function-references/Overview.md
//user_pref("javascript.options.wasm_function_references", true);
