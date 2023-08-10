
/****************************************************************************************
 * Fastfox                                                                              *
 * "Non ducor duco"                                                                     *
 * priority: speedy browsing                                                            *
 * version: 116                                                                         *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/
 
// PREF: process count
// [ABOUT] View in about:processes.
// With Firefox Quantum (2017), CPU cores = processCount. However, since the
// introduction of Fission [2], the number of website processes is controlled
// by processCount.webIsolated. Disabling fission.autostart or changing
// fission.webContentIsolationStrategy reverts control back to processCount.
// [1] https://www.reddit.com/r/firefox/comments/r69j52/firefox_content_process_limit_is_gone/
// [2] https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#web-content-processes 
//user_pref("dom.ipc.processCount", 8); // DEFAULT; Shared Web Content
//user_pref("dom.ipc.processCount.webIsolated", 1); // default=4; Isolated Web Content

// PREF: use one process for process preallocation cache
//user_pref("dom.ipc.processPrelaunch.fission.number", 1); // default=3; Process Preallocation Cache

// PREF: configure process isolation
// [1] https://hg.mozilla.org/mozilla-central/file/tip/dom/ipc/ProcessIsolation.cpp#l53
// [2] https://www.reddit.com/r/firefox/comments/r69j52/firefox_content_process_limit_is_gone/

// OPTION 1: isolate all websites and limit to one process per site
// Web content is always isolated into its own `webIsolated` content process
// based on site-origin, and will only load in a shared `web` content process
// if site-origin could not be determined.
//user_pref("fission.webContentIsolationStrategy", 1); // DEFAULT
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", true); // DEFAULT
    //user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin

// OPTION 2: isolate only "high value" websites
// Only isolates web content loaded by sites which are considered "high
// value". A site is considered high value if it has been granted a
// `highValue*` permission by the permission manager, which is done in
// response to certain actions.
//user_pref("fission.webContentIsolationStrategy", 2);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
    //user_pref("dom.ipc.processCount.webIsolated", 1); // one process per site origin (high value)
    //user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors

// OPTION 3: do not isolate websites (not recommended)
// All web content is loaded into a shared `web` content process. This is
// similar to the non-Fission behavior; however, remote subframes may still
// be used for sites with special isolation behavior, such as extension or
// mozillaweb content processes.
//user_pref("fission.webContentIsolationStrategy", 0);
//user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
    //user_pref("dom.ipc.processCount", 8); // determine by number of CPU cores/processors

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
// [2] https://www.reddit.com/r/firefox/comments/11m2yuh/comment/jbjxp8s/?context=3
//user_pref("content.interrupt.parsing", true); // [HIDDEN]
//user_pref("content.switch.threshold", 1000000); // alt=1500000; default=750000; [HIDDEN]

// PREF: new tab preload
// [WARNING] Disabling this may cause a delay when opening a new tab in Firefox.
// [1] https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// [2] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtab.preload", true); // DEFAULT

// PREF: unload tabs on low memory
// Firefox will detect if your computer’s memory is running low (less than 200MB)
// and suspend tabs that you have not used in awhile.
//user_pref("browser.tabs.unloadOnLowMemory", true); // DEFAULT

// PREF: determine when tabs unload [WINDOWS] [LINUX]
// Notify TabUnloader or send the memory pressure if the memory resource
// notification is signaled AND the available commit space is lower than
// this value.
// Set this to some high value, e.g. 2/3 of total memory available in your system:
// 4GB=2640, 8GB=5280, 16GB=10560, 32GB=21120, 64GB=42240
// [1] https://dev.to/msugakov/taking-firefox-memory-usage-under-control-on-linux-4b02
//user_pref("browser.low_commit_space_threshold_mb", 2640); // default=200

// PREF: determine how long tabs are inactive before they unload
//user_pref("browser.tabs.min_inactive_duration_before_unload", 60000); // 1min; default=600000 (10min)

// PREF: disable EcoQoS [WINDOWS]
// Background tab processes use efficiency mode on Windows 11 to limit resource use.
// [WARNING] Leave this alone, unless you're on Desktop and you rely on
// background tabs to have maximum performance.
// [1] https://devblogs.microsoft.com/performance-diagnostics/introducing-ecoqos/
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1796525
// [3] https://bugzilla.mozilla.org/show_bug.cgi?id=1800412
// [4] https://reddit.com/r/firefox/comments/107fj69/how_can_i_disable_the_efficiency_mode_on_firefox/
//user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

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

// PREF: enable :has() CSS relational pseudo-class [NIGHTLY]
// Needed for some extensions, filters, and customizations
// [1] https://developer.mozilla.org/en-US/docs/Web/CSS/:has
// [2] https://caniuse.com/css-has
user_pref("layout.css.has-selector.enabled", true);

// PREF: scroll-linked animations [NIGHTLY]
// [1] https://developer.chrome.com/articles/scroll-driven-animations/
// [2] https://developer.chrome.com/en/blog/scroll-animation-performance-case-study/
user_pref("layout.css.scroll-driven-animations.enabled", true);

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
    //user_pref("gfx.webgpu.force-enabled", true); // enforce

/****************************************************************************
 * SECTION: GFX RENDERING TWEAKS                                            *
****************************************************************************/

// PREF: Webrender tweaks
// [1] https://searchfox.org/mozilla-central/rev/6e6332bbd3dd6926acce3ce6d32664eab4f837e5/modules/libpref/init/StaticPrefList.yaml#6202-6219
// [2] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [3] https://www.reddit.com/r/firefox/comments/tbphok/is_setting_gfxwebrenderprecacheshaders_to_true/i0bxs2r/
// [4] https://www.reddit.com/r/firefox/comments/z5auzi/comment/ixw65gb?context=3
// [5] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4532937#gistcomment-4532937
user_pref("gfx.webrender.all", true); // enables WR + additional features
//user_pref("gfx.webrender.precache-shaders", true); // longer startup time
//user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
    //user_pref("gfx.webrender.compositor.force-enabled", true); // enforce
user_pref("layers.gpu-process.enabled", true); // DEFAULT WINDOWS
    //user_pref("layers.gpu-process.force-enabled", true); // enforce
//user_pref("media.hardware-video-decoding.enabled", true); // DEFAULT WINDOWS macOS
    //user_pref("media.hardware-video-decoding.force-enabled", true); // enforce

// PREF: NVIDIA RTX Video Super Resolution for video overlay [WINDOWS]
// This is also a setting in NVIDIA's driver settings, so once this is
// stable, it should default to true.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1823135
//user_pref("gfx.webrender.super-resolution.nvidia", true);

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
//user_pref("gfx.webrender.enabled", true);
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
    //user_pref("gfx.webrender.software.opengl", true); // [LINUX]
    //user_pref("media.ffmpeg.vaapi.enabled", true); // [LINUX]

// PREF: GPU-accelerated Canvas2D
// Use gpu-canvas instead of to skia-canvas.
// [WARNING] May cause issues on some Windows machines using integrated GPUs [2 3]
// Add to your overrides if you have a dedicated GPU.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1741501
// [2] https://github.com/yokoffing/Betterfox/issues/153
// [3] https://github.com/yokoffing/Betterfox/issues/198
//user_pref("gfx.canvas.accelerated", true); // DEFAULT macOS LINUX [FF110]; not compatiable with WINDOWS integrated GPUs
user_pref("gfx.canvas.accelerated.cache-items", 32768);
user_pref("gfx.canvas.accelerated.cache-size", 4096);
user_pref("gfx.content.skia-font-cache-size", 80);

/****************************************************************************
 * SECTION: BROWSER CACHE                                                   *
****************************************************************************/

// PREF: disk cache
// [NOTE] If you think disk cache helps performance, then feel free to override this.
// [SETTINGS] See about:cache
// [EXTENSION] https://addons.mozilla.org/en-US/firefox/addon/cache-longer/
// More efficient to keep the browser cache instead of having to
// re-download objects for the websites you visit frequently.
// [1] https://www.janbambas.cz/new-firefox-http-cache-enabled/
//user_pref("browser.cache.disk.enable", true); // DEFAULT
//user_pref("browser.cache.disk.capacity", 8192000); // size of disk cache; default=256000; 1024000 = 1 GB, 2048000=2GB, 5120000=5GB, 8192000=8GB
    //user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
//user_pref("browser.cache.disk.max_entry_size", 51200); // 51 MB; DEFAULT; maximum size of an object in disk cache
//user_pref("browser.cache.disk.metadata_memory_limit", 15360); // default=250; increase size (in KB) of intermediate memory caching of frequently used metadata (disk cache memory pool)
//user_pref("browser.cache.max_shutdown_io_lag", 16); // default=2; number of seconds the cache spends writing pending data and closing files after shutdown has been signalled

// PREF: specify how long pages are kept before being removed from cache (in hours)
// Controls the time period used to re-compute the frecency value of cache entries.
// The frecency value determines how recently and frequently a page has been accessed
// and is used by Firefox's cache algorithm.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=913808
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=968101
// [3] https://rockridge.hatenablog.com/entry/2014/09/15/165501
//user_pref("browser.cache.frecency_half_life_hours", 24); // default=6

// PREF: memory cache
// The "automatic" size selection (default) is based on a decade-old table that only contains settings for systems at or below 8GB of system memory [1]
// -1=Automatically decide the maximum memory to use to cache decoded images, messages, and chrome based on the total amount of RAM
// [1] https://kb.mozillazine.org/Browser.cache.memory.capacity#-1
user_pref("browser.cache.memory.capacity", 1048576); // default=-1; 1048576=1GB, 2097152=2GB
user_pref("browser.cache.memory.max_entry_size", 65536); // default=5120; -1=entries bigger than than 90% of the mem-cache are never cached

/****************************************************************************
 * SECTION: MEDIA CACHE                                                     *
****************************************************************************/

// PREF: media disk cache
//user_pref("media.cache_size", 512000); // DEFAULT

// PREF: Media Source Extensions (MSE)
// Disabling MSE allows videos to fully buffer, but you're limited to 720p.
// [WARNING] Disabling MSE may break certain videos.
// false=Firefox plays the old WebM format
// true=Firefox plays the new WebM format (default)
// [1] https://support.mozilla.org/en-US/questions/1008271
//user_pref("media.mediasource.enabled", true); // DEFAULT

// PREF: adjust video buffering periods when not using MSE (in seconds)
// [NOTE] Does not affect videos over 720p since they use DASH playback [1]
// [1] https://lifehacker.com/preload-entire-youtube-videos-by-disabling-dash-playbac-1186454034
user_pref("media.cache_readahead_limit", 7200); // 120 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 3600); // 60 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold

// PREF: media memory cache
// [1] https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l9652
// [2] https://github.com/arkenfox/user.js/pull/941
user_pref("media.memory_cache_max_size", 131072); // default=8192; AF=65536; alt=1048576
user_pref("media.memory_caches_combined_limit_kb", 524288); // default=524288; alt=3145728
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 10); // default=5; the percentage of system memory that Firefox can use for media caches

// PREF: disable AV1 for hardware decodeable videos
// AV1 uses software (CPU-based) decoding
// Firefox sometimes uses AV1 video decoding even to GPUs which do not support it
// [1] https://www.reddit.com/r/AV1/comments/s5xyph/youtube_av1_codec_have_worse_quality_than_old_vp9
//user_pref("media.av1.enabled", false);

/****************************************************************************
 * SECTION: IMAGE CACHE                                                     *
****************************************************************************/

// PREF: image cache
user_pref("image.cache.size", 10485760); // default=5242880
user_pref("image.mem.decode_bytes_at_a_time", 65536); // default=16384; chunk size for calls to the image decoders
user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000; minimum timeout to unmap shared surfaces since they have been last used

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
// [3] https://www.reddit.com/r/firefox/comments/11m2yuh/how_do_i_make_firefox_use_more_of_my_900_megabit/jbfmru6/
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
//user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
//user_pref("network.http.max-urgent-start-excessive-connections-per-host", 6); // default=3
user_pref("network.http.pacing.requests.min-parallelism", 18); // default=6

// PREF: increase DNS cache
// [1] https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency
user_pref("network.dnsCacheEntries", 10000); // default=400
// [NOTE] These prefs will be ignored by DNS resolver if using DoH/TRR.
    user_pref("network.dnsCacheExpiration", 86400); // keep entries for 1 day; alt=3600 (1 hour)
    user_pref("network.dnsCacheExpirationGracePeriod", 240); // cache DNS entries for 4 minutes after they expire

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
//user_pref("network.http.speculative-parallel-limit", 12); // default=6; overrides SecureFox
//user_pref("network.dns.disablePrefetch", false); // overrides SecureFox
//user_pref("network.dns.disablePrefetchFromHTTPS", false);
//user_pref("network.early-hints.enabled", true);
    //user_pref("network.early-hints.preconnect.enabled", true);
    //user_pref("network.early-hints.preconnect.max_connections", 18); // default=10
//user_pref("browser.urlbar.speculativeConnect.enabled", true); // overrides SecureFox
//user_pref("browser.places.interactions.enabled", true); // DEFAULT
    //user_pref("browser.places.speculativeConnect.enabled", true); // overrides SecureFox
//user_pref("network.prefetch-next", true); // overrides SecureFox
//user_pref("network.predictor.enabled", true); // overrides SecureFox
//user_pref("network.predictor.enable-prefetch", true); // overrides SecureFox
//user_pref("network.predictor.enable-hover-on-ssl", true);
    //user_pref("network.predictor.preresolve-min-confidence", 30); // default=60; alt=10
    //user_pref("network.predictor.preconnect-min-confidence", 60); // default=90; alt=20
    //user_pref("network.predictor.prefetch-min-confidence", 70); // default=100; alt=30
        //user_pref("network.predictor.prefetch-force-valid-for", 3600); // default=10
        //user_pref("network.predictor.prefetch-rolling-load-count", 120); // default=10
    //user_pref("network.predictor.max-resources-per-entry", 250); // default=100
    //user_pref("network.predictor.max-uri-length", 1000); // default=500

