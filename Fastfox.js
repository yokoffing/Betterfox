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
    user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
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

// PREF: enable importMaps [FF108+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1688879
// [2] https://github.com/WICG/import-maps#the-basic-idea
// [3] https://caniuse.com/import-maps
//user_pref("dom.importMaps.enabled", true); // DEFAULT FF108+
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

// Credit for most of the following: https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db

/****************************************************************************
 * SECTION: GFX RENDERING TWEAKS                                            *
****************************************************************************/

// PREF: GPU-accelerated (WebGL-backed) Canvas2D 
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1739448
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);

// PREF: Webrender tweaks
user_pref("gfx.webrender.all", true);
//user_pref("gfx.webrender.compositor", true); // DEFAULT
user_pref("gfx.webrender.compositor.force-enabled", true);	
user_pref("gfx.webrender.enabled", true);	
user_pref("gfx.webrender.precache-shaders", true);	
user_pref("gfx.webrender.software.opengl", true);

// PREF: image tweaks
user_pref("image.mem.decode_bytes_at_a_time", 65536); // Chunk size for calls to the image decoders
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // Minimum timeout to unmap shared surfaces since they have been last used, in milliseconds
//user_pref("layers.gpu-process.enabled", true); // DEFAULT
user_pref("layers.gpu-process.force-enabled", true);
user_pref("image.cache.size", 10485760);

// PREF: increase media cache
user_pref("media.memory_cache_max_size", 2048000); // alt=512000
user_pref("media.cache_readahead_limit", 99999);
user_pref("media.cache_resume_threshold", 99999);
user_pref("media.memory_caches_combined_limit_kb", 2560000);
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 20);

user_pref("media.memory_cache_max_size	", 1048576);	
user_pref("media.memory_caches_combined_limit_kb", 3145728);
user_pref("media.hardware-video-decoding.force-enabled", true);
user_pref("media.ffmpeg.vaapi.enabled", true);

/****************************************************************************
 * SECTION: BROWSER CACHE                                                   *
****************************************************************************/

// PREF: increase memory cache size
user_pref("browser.cache.memory.capacity", 5242880); // -1=default; 256000=256MB, 512000=512MB, 1024000=1GB, 2097152=2GB, 5242880=5GB
user_pref("browser.cache.memory.max_entry_size", 327680); // -1; entries bigger than than 90% of the mem-cache are never cached

// PREF: increase disk cache size
//user_pref("browser.cache.disk.enable", true); // SecureFox override
//user_pref("browser.cache.disk.smart_size.enabled", false); // disable adaptive cache size on disk
//user_pref("browser.cache.disk.capacity", 8192000); // 8 GB cache on disk

/****************************************************************************
 * SECTION: SPECULATIVE CONNECTIONS                                        *
****************************************************************************/

// PREF: increase network predictions
// [NOTE] in uBlock Origin, go to settings and make sure the following are disabled:
// "Disable pre-fetching (to prevent any connection for blocked network requests)"
// "Disable hyperlink auditing"
user_pref("network.http.speculative-parallel-limit", 6); // SecureFox override
user_pref("network.dns.disablePrefetch", false); // SecureFox override
user_pref("network.dns.disablePrefetchFromHTTPS", true); // SecureFox override
    user_pref("network.dnsCacheEntries", 20000);	
    user_pref("network.dnsCacheExpiration", 3600);	
    user_pref("network.dnsCacheExpirationGracePeriod", 240);
user_pref("browser.urlbar.speculativeConnect.enabled", true); // SecureFox override
user_pref("browser.places.speculativeConnect.enabled", true); // SecureFox override
user_pref("network.prefetch-next", true); // SecureFox override
user_pref("network.predictor.enabled", true); // SecureFox override
user_pref("network.predictor.enable-prefetch", true); // SecureFox override
user_pref("network.predictor.enable-hover-on-ssl", true);
    user_pref("network.predictor.preconnect-min-confidence", 20);
    user_pref("network.predictor.prefetch-force-valid-for", 3600);	
    user_pref("network.predictor.prefetch-min-confidence", 20);
    user_pref("network.predictor.prefetch-rolling-load-count", 120);
    user_pref("network.predictor.preresolve-min-confidence", 10);

/****************************************************************************
 * SECTION: SSL (Secure Sockets Layer) / TLS (Transport Layer Security)     *
****************************************************************************/

// PREF: faster SSL
user_pref("network.ssl_tokens_cache_capacity", 32768); // more TLS token caching (fast reconnects)


