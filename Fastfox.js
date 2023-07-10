
/****************************************************************************************
 * Fastfox                                                                              *
 * "Non ducor duco"                                                                     *
 * priority: speedy browsing                                                            *
 * version: 116                                                                         *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/
 
// PREF: process count
// Process count used to be "# of CPU cores = processCount" starting with Firefox Quantum (2017).
// Since the introduction of Fission [2], increasing process count is more complicated than changing one pref.
// [1] https://www.reddit.com/r/firefox/comments/r69j52/firefox_content_process_limit_is_gone/
// [2] https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#web-content-processes
// [3] https://github.com/yokoffing/Betterfox/blob/064f64ab5f0e8443ed6b127d91326d9c887cd15d/Securefox.js#L58-L64
// [4] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4603793#gistcomment-4603793
//user_pref("dom.ipc.processCount", 8); // DEFAULT; Shared Web Content
//user_pref("dom.ipc.processCount.webIsolated", 4); // DEFAULT; Isolated Web Content; per-site

// PREF: initial paint delay
// How long FF will wait before rendering the page, in milliseconds
// Reduce the 5ms Firefox waits to render the page
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1283302
// [2] https://docs.google.com/document/d/1BvCoZzk2_rNZx3u9ESPoFjSADRI0zIPeJRXFLwWXx_4/edit#heading=h.28ki6m8dg30z
user_pref("nglayout.initialpaint.delay", 0); // default=5; used to be 250
user_pref("nglayout.initialpaint.delay_in_oopif", 0); // default=5

// PREF: page reflow timer
// Rather than wait until a page has completely downloaded to display it to the user,
// web browsers will periodically render what has been received to that point.
// Because reflowing the page every time additional data is received slows down
// total page load time, a timer was added so that the page would not reflow too often.
// This preference specfies whether that timer is active.
// [1] https://kb.mozillazine.org/Content.notify.ontimer
// true = do not reflow pages at an interval any higher than that specified by content.notify.interval (default)
// false = reflow pages whenever new data is received
//user_pref("content.notify.ontimer", true); // DEFAULT

// PREF: notification interval (in microseconds) [to avoid layout thrashing]
// When Firefox is loading a page, it periodically reformats
// or "reflows" the page as it loads. The page displays new elements
// every 0.12 seconds by default. These redraws increase the total page load time.
// The default value provides good incremental display of content
// without causing an increase in page load time.
// [NOTE] Lowering the interval will increase responsiveness
// but also increase the total load time.
// [WARNING] If this value is set below 1/10 of a second, it starts
// to impact page load performance.
// [EXAMPLE] 100000 = .10s = 100 reflows/second
// [1] https://searchfox.org/mozilla-central/rev/c1180ea13e73eb985a49b15c0d90e977a1aa919c/modules/libpref/init/StaticPrefList.yaml#1824-1834
// [2] https://dev.opera.com/articles/efficient-javascript/?page=3#reflow
// [3] https://dev.opera.com/articles/efficient-javascript/?page=3#smoothspeed
user_pref("content.notify.interval", 100000); // (.10s); alt=500000 (.50s)

// PREF: frequency switch threshold [HIDDEN]
// Raising the value will make the application more responsive at the expense of page load time.
// [1] http://kb.mozillazine.org/Content.switch.threshold
// [2] https://old.reddit.com/r/firefox/comments/11m2yuh/comment/jbjxp8s/?context=3
//user_pref("content.interrupt.parsing", true); // [HIDDEN]
//user_pref("content.switch.threshold", 1000000); // alt=1500000; default=750000; [HIDDEN]

// PREF: set the minimum interval between session save operations
// Increasing this can help on older machines and some websites, as well as reducing writes
// [1] https://bugzilla.mozilla.org/1304389
// default=15000 (15s)
//user_pref("browser.sessionstore.interval", 30000); // (30s)

// PREF: control how tabs are loaded when a session is restored
// true=Tabs are not loaded until they are selected (default)
// false=Tabs begin to load immediately.
//user_pref("browser.sessionstore.restore_on_demand", true); // DEFAULT
    //user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
//user_pref("browser.sessionstore.restore_tabs_lazily", true); // DEFAULT

// PREF: disable preSkeletonUI on startup
user_pref("browser.startup.preXulSkeletonUI", false);

/****************************************************************************
 * SECTION: EXPERIMENTAL                                                    *
****************************************************************************/

// PREF: CSS Masonry Layout [NIGHTLY]
// [1] https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout
user_pref("layout.css.grid-template-masonry-value.enabled", true);

// PREF: Prioritized Task Scheduling API [NIGHTLY]
// [1] https://blog.mozilla.org/performance/2022/06/02/prioritized-task-scheduling-api-is-prototyped-in-nightly/
// [2] https://medium.com/airbnb-engineering/building-a-faster-web-experience-with-the-posttask-scheduler-276b83454e91
user_pref("dom.enable_web_task_scheduling", true);

// PREF: scroll-linked animations [NIGHTLY]
//user_pref("layout.css.scroll-driven-animations.enabled", true);

// PREF: HTML Sanitizer API [NIGHTLY]
//user_pref("dom.security.sanitizer.enabled", true);

// PREF: Shadowrealms [NIGHTLY]
// [1] https://github.com/tc39/proposal-shadowrealm/blob/main/explainer.md#introduction
//user_pref("javascript.options.experimental.shadow_realms", true);

// PREF: Wasm GC [NIGHTLY]
// WASM GC refers to garbage collection for WebAssembly. Garbage collection is a mechanism
// to automatically free up memory that is no longer being used by a program. This helps
// manage memory and prevent memory leaks. 
// [1] https://github.com/WebAssembly/gc/blob/main/proposals/gc/Overview.md
//user_pref("javascript.options.wasm_gc", true);

// PREF: WASM Function References [NIGHTLY]
// [1] https://github.com/WebAssembly/function-references/blob/master/proposals/function-references/Overview.md
//user_pref("javascript.options.wasm_function_references", true);

// PREF: import assertions [NIGHTLY]
//user_pref("javascript.options.experimental.import_assertions", true);

// PREF: Array.fromAsync [NIGHTLY]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1795452
//user_pref("javascript.options.experimental.array_grouping", true);
//user_pref("javascript.options.experimental.enable_change_array_by_copy", true);
//user_pref("javascript.options.experimental.enable_array_from_async", true);

// PREF: indexedDB preprocessing
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1112702
//user_pref("dom.indexedDB.experimental", true);
    //user_pref("dom.indexedDB.preprocessing", true);

// PREF: WebGPU [HIGHLY EXPERIMENTAL!]
// [WARNING] Do not enable unless you are a web developer!
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1746245
// [2] https://developer.chrome.com/docs/web-platform/webgpu/
// [3] https://github.com/gpuweb/gpuweb/wiki/Implementation-Status
// [4] https://hacks.mozilla.org/2020/04/experimental-webgpu-in-firefox/
//user_pref("dom.webgpu.enabled", true);
    //user_pref("gfx.webgpu.force-enabled", true);

// PREF: NVIDIA RTX Video Super Resolution for video overlay [WINDOWS]
// This is also a setting in NVIDIA's driver settings, so once this is
// stable, it should default to true.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1823135
//user_pref("gfx.webrender.super-resolution.nvidia", true);

/****************************************************************************
 * SECTION: MAKE FIREFOX FAST                                               *
 * [NOTE] The following is not recommended for low-end machines             *
 * Credit for many of these:                                                *
 * https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db    *
 * [NOTE] For best performance on older hardware, you will need to test     *
 * these settings individually.                                             *
****************************************************************************/

/****************************************************************************
 * SECTION: GFX RENDERING TWEAKS                                            *
****************************************************************************/

// PREF: Webrender tweaks
// [1] https://searchfox.org/mozilla-central/rev/6e6332bbd3dd6926acce3ce6d32664eab4f837e5/modules/libpref/init/StaticPrefList.yaml#6202-6219
// [2] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [3] https://www.reddit.com/r/firefox/comments/tbphok/is_setting_gfxwebrenderprecacheshaders_to_true/i0bxs2r/
// [4] https://www.reddit.com/r/firefox/comments/z5auzi/comment/ixw65gb?context=3
// [5] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4532937#gistcomment-4532937
user_pref("gfx.webrender.all", true); // enables WR (GPU) + additional features
user_pref("gfx.webrender.precache-shaders", true);
user_pref("gfx.webrender.compositor", true);
    //user_pref("gfx.webrender.compositor.force-enabled", true); // enforce
user_pref("layers.gpu-process.enabled", true);
    //user_pref("layers.gpu-process.force-enabled", true); // enforce
user_pref("media.hardware-video-decoding.enabled", true);
    //user_pref("media.hardware-video-decoding.force-enabled", true); // enforce

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
//user_pref("gfx.webrender.enabled", true);
//user_pref("gfx.webrender.software", true); // Webrender uses the CPU and not the GPU
    //user_pref("gfx.webrender.software.opengl", true); // [LINUX]
    //user_pref("media.ffmpeg.vaapi.enabled", true); // [LINUX]

// PREF: GPU-accelerated Canvas2D
// [WARNING] May break PDF rendering on Surface Pro devices [2]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1739448
// [2] https://github.com/yokoffing/Betterfox/issues/153
user_pref("gfx.canvas.accelerated", true); // DEFAULT on macOS and Linux v.110
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);

// PREF: image tweaks
user_pref("image.cache.size", 10485760); // default=5242880
user_pref("image.mem.decode_bytes_at_a_time", 65536); // default=16384; alt=65536; chunk size for calls to the image decoders
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000; minimum timeout to unmap shared surfaces since they have been last used

// PREF: media cache
//user_pref("media.cache_size", 512000); // DEFAULT

// PREF: increase media memory cache
user_pref("media.memory_cache_max_size", 1048576); // default=8192
user_pref("media.memory_caches_combined_limit_kb", 3145728); // alt=2560000; // default=524288
    //user_pref("media.memory_caches_combined_limit_pc_sysmem", 20); // default=5

// PREF: decrease video buffering
// [NOTE] Does not affect videos over 720p since they use DASH playback [1]
// [1] https://lifehacker.com/preload-entire-youtube-videos-by-disabling-dash-playbac-1186454034
user_pref("media.cache_readahead_limit", 9000); // default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 6000); // default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold (in seconds)

// PREF: disable AV1 for hardware decodeable videos
// AV1 uses software (CPU-based) decoding
// Firefox sometimes uses AV1 video decoding even to GPUs which do not support it
// [1] https://www.troddit.com/r/AV1/comments/s5xyph/youtube_av1_codec_have_worse_quality_than_old_vp9
//user_pref("media.av1.enabled", false);

/****************************************************************************
 * SECTION: BROWSER CACHE                                                   *
****************************************************************************/

// PREF: disk cache
// [NOTE] If you think disk cache helps performance, then feel free to override this.
// [EXTENSION] https://addons.mozilla.org/en-US/firefox/addon/cache-longer/
// More efficient to keep the browser cache instead of
// having to re-download objects for the websites you visit frequently.
//user_pref("browser.cache.disk.enable", true); // DEFAULT
//user_pref("browser.cache.disk.capacity", 8192000); // size of disk cache; 1048576 = 1 GB,  2097152=2GB, 5242880=5GB, 8388608=8GB
    //user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
//user_pref("browser.cache.disk.max_entry_size", 327680); // default=51200; maximum size of in memory cached objects
//user_pref("browser.cache.disk.metadata_memory_limit", 15360); // increase size (in KB) of intermediate memory caching of frequently used metadata (disk cache memory pool)
//user_pref("browser.cache.max_shutdown_io_lag", 16); // default=2; number of seconds the cache spends writing pending data and closing files after shutdown has been signalled
//user_pref("browser.cache.frecency_half_life_hours", 18); // default=6; sweep intervals, the half life used to re-compute cache entries frequency (in hours)

// PREF: memory cache
// The automatic size selection (default) is based on a decade-old table that only contains settings for systems at or below 8GB of system memory [1]
// -1=Automatically decide the maximum memory to use to cache decoded images, messages, and chrome based on the total amount of RAM
// [1] https://kb.mozillazine.org/Browser.cache.memory.capacity#-1
user_pref("browser.cache.memory.capacity", 1024000); // default=-1; 512000=512MB, 1024000=1GB, 2097152=2GB
user_pref("browser.cache.memory.max_entry_size", 51200); // default=5120; alt=153600; -1=entries bigger than than 90% of the mem-cache are never cached

/****************************************************************************
 * SECTION: NETWORK                                                         *
****************************************************************************/

// PREF: use bigger packets
// Reduce Firefox's CPU usage by requiring fewer application-to-driver data transfers.
// However, it does not affect the actual packet sizes transmitted over the network.
// [1] https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html
user_pref("network.buffer.cache.size", 262144); // 256 kb; default=32768 (32 kb)
user_pref("network.buffer.cache.count", 128); // default=24

// PREF: increase the absolute number of HTTP connections
// [1] https://kb.mozillazine.org/Network.http.max-connections
// [2] https://kb.mozillazine.org/Network.http.max-persistent-connections-per-server
// [3] https://old.reddit.com/r/firefox/comments/11m2yuh/how_do_i_make_firefox_use_more_of_my_900_megabit/jbfmru6/
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
//user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
//user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6); // default=3
//user_pref("network.http.pacing.requests.min-parallelism", 18); // default=6

// PREF: increase DNS cache
user_pref("network.dnsCacheEntries", 20000);
// [NOTE] These prefs will be ignored by DNS resolver if using DoH/TRR.
// If you do not use NextDNS, Cloudfare, etc., then feel free to enable this.
    //user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour
    //user_pref("network.dnsCacheExpirationGracePeriod", 300); // cache DNS entries for 5 minutes after they expire

// PREF: increase TLS token caching 
user_pref("network.ssl_tokens_cache_capacity", 32768); // default=2048; more TLS token caching (fast reconnects)

/****************************************************************************
 * SECTION: SPECULATIVE CONNECTIONS                                         *
****************************************************************************/

// [NOTE] FF85+ partitions (isolates) pooled connections, prefetch connections,
// pre-connect connections, speculative connections, TLS session identifiers,
// and other connections. We can take advantage of the speed of pre-connections
// while preserving privacy. Users may relax hardening to maximize their preference.
// For more information, see SecureFox: "PREF: State Paritioning" and "PREF: Network Partitioning" [1]
// [1] https://github.com/yokoffing/Betterfox/blob/e9621b0062914da5fdb5f83b8da64041965b7a50/Securefox.js#L74-L108
// [NOTE] To activate and increase network predictions, go to settings in uBlock Origin,  and make this setting is DISABLED:
// - "Disable pre-fetching (to prevent any connection for blocked network requests)"
// [NOTE] Add prefs to "MY OVERRIDES" section and uncomment to enable them in your user.js.

// PREF: increase network predictions
//user_pref("network.http.speculative-parallel-limit", 18); // default=6; overrides SecureFox
//user_pref("network.dns.disablePrefetch", false); // overrides SecureFox
//user_pref("network.dns.disablePrefetchFromHTTPS", false);
//user_pref("network.early-hints.enabled", true);
    //user_pref("network.early-hints.preconnect.enabled", true);
    //user_pref("network.early-hints.preconnect.max_connections", 20); // FF113
//user_pref("browser.urlbar.speculativeConnect.enabled", true); // overrides SecureFox
//user_pref("browser.places.speculativeConnect.enabled", true); // overrides SecureFox
//user_pref("network.prefetch-next", true); // overrides SecureFox
//user_pref("network.predictor.enabled", true); // overrides SecureFox
//user_pref("network.predictor.enable-prefetch", true); // overrides SecureFox
//user_pref("network.predictor.enable-hover-on-ssl", true);
    //user_pref("network.predictor.preresolve-min-confidence", 40); // default=60; alt=10
    //user_pref("network.predictor.preconnect-min-confidence", 60); // default=90; alt=20
    //user_pref("network.predictor.prefetch-min-confidence", 80); // default=100; alt=30
        //user_pref("network.predictor.prefetch-force-valid-for", 3600); // default=10
        //user_pref("network.predictor.prefetch-rolling-load-count", 120); // default=10
    //user_pref("network.predictor.max-resources-per-entry", 250); // default=100
    //user_pref("network.predictor.max-uri-length", 1000); // default=500
