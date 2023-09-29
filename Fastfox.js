
/****************************************************************************************
 * Fastfox                                                                              *
 * "Non ducor duco"                                                                     *
 * priority: speedy browsing                                                            *
 * version: 118                                                                         *
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

// OPTION 1: isolate all websites
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

// OPTION 3: do not isolate websites
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

// PREF: notification interval (in microseconds) to avoid layout thrashing
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
user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)

// PREF: new tab preload
// [WARNING] Disabling this may cause a delay when opening a new tab in Firefox.
// [1] https://wiki.mozilla.org/Tiles/Technical_Documentation#Ping
// [2] https://github.com/arkenfox/user.js/issues/1556
//user_pref("browser.newtab.preload", true); // DEFAULT

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

// PREF: disable preSkeletonUI on startup [WINDOWS]
//user_pref("browser.startup.preXulSkeletonUI", false); // WINDOWS

/****************************************************************************
 * SECTION: TAB UNLOAD                                                      *
****************************************************************************/

// PREF: unload tabs on low memory
// [ABOUT] about:unloads
// Firefox will detect if your computer’s memory is running low (less than 200MB)
// and suspend tabs that you have not used in awhile.
// [1] https://support.mozilla.org/en-US/kb/unload-inactive-tabs-save-system-memory-firefox
// [2] https://hacks.mozilla.org/2021/10/tab-unloading-in-firefox-93/
//user_pref("browser.tabs.unloadOnLowMemory", true); // DEFAULT

// PREF: determine when tabs unload [WINDOWS] [LINUX]
// Notify TabUnloader or send the memory pressure if the memory resource
// notification is signaled AND the available commit space is lower than
// this value.
// Set this to some high value, e.g. 2/3 of total memory available in your system:
// 4GB=2640, 8GB=5280, 16GB=10560, 32GB=21120, 64GB=42240
// [1] https://dev.to/msugakov/taking-firefox-memory-usage-under-control-on-linux-4b02
//user_pref("browser.low_commit_space_threshold_mb", 2640); // default=200; WINDOWS LINUX

// PREF: determine when tabs unload [LINUX]
// On Linux, Firefox checks available memory in comparison to total memory,
// and use this percent value (out of 100) to determine if Firefox is in a
// low memory scenario.
// [1] https://dev.to/msugakov/taking-firefox-memory-usage-under-control-on-linux-4b02
//user_pref("browser.low_commit_space_threshold_percent", 33); // default=5; LINUX

// PREF: determine how long (in ms) tabs are inactive before they unload
// 60000=1min; 300000=5min; 600000=10min (default)
//user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5min; default=600000

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

// PREF: CSS :has() selector [NIGHTLY]
// Needed for some extensions, filters, and customizations.
// [1] https://developer.mozilla.org/en-US/docs/Web/CSS/:has
// [2] https://caniuse.com/css-has
user_pref("layout.css.has-selector.enabled", true);

// PREF: HTML Sanitizer API [NIGHTLY]
// [1] https://developer.mozilla.org/en-US/docs/Web/API/Sanitizer
// [2] https://caniuse.com/mdn-api_sanitizer
user_pref("dom.security.sanitizer.enabled", true);

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

// PREF: scroll-driven animations [NIGHTLY]
// [1] https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Experimental_features#scroll-driven_animations
// [2] https://developer.chrome.com/articles/scroll-driven-animations/
// [3] https://developer.chrome.com/en/blog/scroll-animation-performance-case-study/
//user_pref("layout.css.scroll-driven-animations.enabled", true);

// PREF: WebGPU [HIGHLY EXPERIMENTAL!]
// [WARNING] Do not enable unless you are a web developer!
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1746245
// [2] https://developer.chrome.com/docs/web-platform/webgpu/
// [3] https://github.com/gpuweb/gpuweb/wiki/Implementation-Status
// [4] https://hacks.mozilla.org/2020/04/experimental-webgpu-in-firefox/
//user_pref("dom.webgpu.enabled", true);
    //user_pref("gfx.webgpu.force-enabled", true); // enforce
// enable WebGPU indirect draws/dispatches:
//user_pref("dom.webgpu.indirect-dispatch.enabled", true);

// PREF: WebCodecs API [NIGHTLY]
// [1] https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API
// [2] https://groups.google.com/a/mozilla.org/g/dev-platform/c/3g0fnn6682A?pli=1
// [3] https://w3c.github.io/webcodecs/samples/
//user_pref("dom.media.webcodecs.enabled", true);

/****************************************************************************
 * SECTION: GFX RENDERING TWEAKS                                            *
****************************************************************************/

// PREF: Webrender tweaks
// [1] https://searchfox.org/mozilla-central/rev/6e6332bbd3dd6926acce3ce6d32664eab4f837e5/modules/libpref/init/StaticPrefList.yaml#6202-6219
// [2] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [3] https://www.reddit.com/r/firefox/comments/tbphok/is_setting_gfxwebrenderprecacheshaders_to_true/i0bxs2r/
// [4] https://www.reddit.com/r/firefox/comments/z5auzi/comment/ixw65gb?context=3
// [5] https://gist.github.com/RubenKelevra/fd66c2f856d703260ecdf0379c4f59db?permalink_comment_id=4532937#gistcomment-4532937
//user_pref("gfx.webrender.all", true); // enables WR + additional features
//user_pref("gfx.webrender.precache-shaders", true); // longer initial startup time
//user_pref("gfx.webrender.compositor", true); // DEFAULT WINDOWS macOS
    //user_pref("gfx.webrender.compositor.force-enabled", true); // enforce

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
    //user_pref("gfx.webrender.software.opengl", true); // LINUX

// PREF: NVIDIA RTX Video Super Resolution for video overlay [WINDOWS]
// This is also a setting in NVIDIA's driver settings, so once this is
// stable, it should default to true.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1823135
//user_pref("gfx.webrender.super-resolution.nvidia", true);

// PREF: GPU-accelerated Canvas2D
// Use gpu-canvas instead of to skia-canvas.
// [WARNING] May cause issues on some Windows machines using integrated GPUs [2] [3]
// Add to your overrides if you have a dedicated GPU.
// [NOTE] Higher values will use more memory.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1741501
// [2] https://github.com/yokoffing/Betterfox/issues/153
// [3] https://github.com/yokoffing/Betterfox/issues/198
//user_pref("gfx.canvas.accelerated", true); // DEFAULT macOS LINUX [FF110]; not compatible with WINDOWS integrated GPUs
    user_pref("gfx.canvas.accelerated.cache-items", 4096); // default=2048; alt=8192
    user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; alt=1024
    user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20
    // [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1239151#c2

// PREF: prefer GPU over CPU
// At best, the prefs do nothing on Linux/macOS.
// At worst, it'll result in crashes if the sandboxing is a WIP.
// [1] https://firefox-source-docs.mozilla.org/dom/ipc/process_model.html#gpu-process
//user_pref("layers.gpu-process.enabled", true); // DEFAULT WINDOWS
    //user_pref("layers.gpu-process.force-enabled", true); // enforce
    //user_pref("layers.mlgpu.enabled", true); // LINUX
//user_pref("media.hardware-video-decoding.enabled", true); // DEFAULT WINDOWS macOS
    //user_pref("media.hardware-video-decoding.force-enabled", true); // enforce
//user_pref("media.gpu-process-decoder", true); // DEFAULT WINDOWS
//user_pref("media.ffmpeg.vaapi.enabled", true); // LINUX

// PREF: disable AV1 for hardware decodeable videos
// Firefox sometimes uses AV1 video decoding even to GPUs which do not support it.
// [1] https://www.reddit.com/r/AV1/comments/s5xyph/youtube_av1_codec_have_worse_quality_than_old_vp9
//user_pref("media.av1.enabled", false);

// PREF: hardware and software decoded video overlay [FF116+]
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1829063
// [2] https://phabricator.services.mozilla.com/D175993
//user_pref("gfx.webrender.dcomp-video-hw-overlay-win", true); // DEFAULT
    //user_pref("gfx.webrender.dcomp-video-hw-overlay-win-force-enabled", true); // enforce
//user_pref("gfx.webrender.dcomp-video-sw-overlay-win", true); // DEFAULT
    //user_pref("gfx.webrender.dcomp-video-sw-overlay-win-force-enabled", true); // enforce

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
user_pref("browser.cache.disk.enable", false);
//user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
    //user_pref("browser.cache.disk.capacity", 5120000); // size of disk cache; default=256000; 1024000 = 1 GB, 2048000=2GB, 5120000=5GB, 8192000=8GB
//user_pref("browser.cache.disk.max_entry_size", 51200); // 51.2 MB; DEFAULT; maximum size of an object in disk cache
//user_pref("browser.cache.disk.metadata_memory_limit", 750); // default=250; increase size (in KB) of intermediate memory caching of frequently used metadata (disk cache memory pool)
//user_pref("browser.cache.max_shutdown_io_lag", 4); // default=2; number of seconds the cache spends writing pending data and closing files after shutdown has been signalled

// PREF: specify how long pages are kept before being removed from cache (in hours)
// Controls the time period used to re-compute the frecency value of cache entries.
// The frecency value determines how recently and frequently a page has been accessed
// and is used by Firefox's cache algorithm.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=913808
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=968101
// [3] https://rockridge.hatenablog.com/entry/2014/09/15/165501
//user_pref("browser.cache.frecency_half_life_hours", 18); // default=6

// PREF: memory cache
// The "automatic" size selection (default) is based on a decade-old table
// that only contains settings for systems at or below 8GB of system memory [1].
// Waterfox G6 Beta 3 allows it to go above 8GB machines [3].
// Value can be up to the max size of an unsigned 64-bit integer.
// -1=Automatically decide the maximum memory to use to cache decoded images,
// messages, and chrome based on the total amount of RAM
// [1] https://kb.mozillazine.org/Browser.cache.memory.capacity#-1
// [2] https://searchfox.org/mozilla-central/source/netwerk/cache2/CacheObserver.cpp#94-125
// [3] https://github.com/WaterfoxCo/Waterfox/commit/3fed16932c80a2f6b37d126fe10aed66c7f1c214
//user_pref("browser.cache.memory.capacity", -1); // DEFAULT; 1048576=1GB, 2097152=2GB
//user_pref("browser.cache.memory.max_entry_size", 5120); // 5 MB DEFAULT; alt=25600; -1=entries bigger than than 90% of the mem-cache are never cached

// PREF: amount of Back/Forward cached pages stored in memory for each tab
// Pages that were recently visited are stored in memory in such a way
// that they don't have to be re-parsed. This improves performance
// when pressing Back and Forward. This pref limits the maximum
// number of pages stored in memory. If you are not using the Back
// and Forward buttons that much, but rather using tabs, then there
// is no reason for Firefox to keep memory for this.
// -1=determine automatically (8 pages)
// [1] https://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers#Possible_values_and_their_effects
//user_pref("browser.sessionhistory.max_total_viewers", 3);

/****************************************************************************
 * SECTION: MEDIA CACHE                                                     *
****************************************************************************/

// PREF: media disk cache
//user_pref("media.cache_size", 512000); // DEFAULT

// PREF: media memory cache
// [1] https://hg.mozilla.org/mozilla-central/file/tip/modules/libpref/init/StaticPrefList.yaml#l9652
// [2] https://github.com/arkenfox/user.js/pull/941
user_pref("media.memory_cache_max_size", 65536); // default=8192; AF=65536; alt=131072
//user_pref("media.memory_caches_combined_limit_kb", 524288); // DEFAULT; alt=1048576
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 5); // DEFAULT; alt=10; the percentage of system memory that Firefox can use for media caches

// PREF: Media Source Extensions (MSE) web standard
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

/****************************************************************************
 * SECTION: IMAGE CACHE                                                     *
****************************************************************************/

// PREF: image cache
//user_pref("image.cache.size", 5242880); // DEFAULT; in MiB; alt=10485760 (cache images up to 10MiB in size)
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; alt=65536; chunk size for calls to the image decoders

// PREF: set minimum timeout to unmap shared surfaces since they have been last used
// This is only used on 32-bit builds of Firefox where there is meaningful
// virtual address space pressure.
// [1] https://phabricator.services.mozilla.com/D109440
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1699224
//user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000; minimum timeout to unmap shared surfaces since they have been last used

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
    user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
    //user_pref("network.http.max-persistent-connections-per-proxy", 48); // default=32
//user_pref("network.websocket.max-connections", 200); // DEFAULT

// PREF: pacing requests [FF23+]
// Controls how many HTTP requests are sent at a time.
// Pacing HTTP requests can have some benefits, such as reducing network congestion,
// improving web page loading speed, and avoiding server overload.
// Pacing requests adds a slight delay between requests to throttle them.
// If you have a fast machine and internet connection, disabling pacing
// may provide a small speed boost when loading pages with lots of requests.
// false=Firefox will send as many requests as possible without pacing
// true=Firefox will pace requests (default)
user_pref("network.http.pacing.requests.enabled", false);
    //user_pref("network.http.pacing.requests.min-parallelism", 10); // default=6
    //user_pref("network.http.pacing.requests.burst", 14); // default=10

// PREF: how long to wait before trying a different connection when the initial one fails
// The number (in ms) after sending a SYN for an HTTP connection,
// to wait before trying again with a different connection.
// 0=disable the second connection
// [1] https://searchfox.org/mozilla-esr115/source/modules/libpref/init/all.js#1178
// [2] https://www.catchpoint.com/blog/http-transaction-steps
//user_pref("network.http.connection-retry-timeout", 0); // default=250

// PREF: increase DNS cache
// [1] https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency
user_pref("network.dnsCacheEntries", 1000); // default=400

// PREF: adjust DNS expiration time
// [ABOUT] about:networking#dns
// [NOTE] These prefs will be ignored by DNS resolver if using DoH/TRR.
user_pref("network.dnsCacheExpiration", 86400); // keep entries for 1 day; alt=3600 (1 hour)
    //user_pref("network.dnsCacheExpirationGracePeriod", 240); // default=60; cache DNS entries for 4 minutes after they expire

// PREF: the number of threads for DNS
user_pref("network.dns.max_high_priority_threads", 8); // default=5
//user_pref("network.dns.max_any_priority_threads", 5); // default=3

// PREF: increase TLS token caching 
user_pref("network.ssl_tokens_cache_capacity", 10240); // default=2048; more TLS token caching (fast reconnects)

/****************************************************************************
 * SECTION: SPECULATIVE CONNECTIONS                                         *
****************************************************************************/

// [NOTE] FF85+ partitions (isolates) pooled connections, prefetch connections,
// pre-connect connections, speculative connections, TLS session identifiers,
// and other connections. We can take advantage of the speed of pre-connections
// while preserving privacy. Users may relax hardening to maximize their preference.
// For more information, see SecureFox: "PREF: State Paritioning" and "PREF: Network Partitioning" [1]
// [1] https://github.com/yokoffing/Betterfox/blob/e9621b0062914da5fdb5f83b8da64041965b7a50/Securefox.js#L74-L108
// [NOTE] To activate and increase network predictions, go to settings in uBlock Origin and uncheck:
// - "Disable pre-fetching (to prevent any connection for blocked network requests)"
// [NOTE] Add prefs to "MY OVERRIDES" section and uncomment to enable them in your user.js.

// PREF: speculative pre-connections
// Firefox will open predictive connections to sites when the user hovers their mouse over thumbnails
// on the New Tab Page or the user starts to search in the Search Bar, or in the search field on the
// New Tab Page [1]. This pref may control speculative connects for normal links, too [2].
// The maximum number of current global half open sockets allowable when starting a new speculative connection [3].
// In case the user follows through with the action, the page can begin loading faster
// since some of the work was already started in advance.
// [NOTE] TCP and SSL handshakes are set up in advance but page contents are not downloaded until a click on the link is registered.
// [1] https://support.mozilla.org/en-US/kb/how-stop-firefox-making-automatic-connections?redirectslug=how-stop-firefox-automatically-making-connections&redirectlocale=en-US#:~:text=Speculative%20pre%2Dconnections
// [2] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests
// [3] https://searchfox.org/mozilla-central/rev/028c68d5f32df54bca4cf96376f79e48dfafdf08/modules/libpref/init/all.js#1280-1282
// [4] https://www.keycdn.com/blog/resource-hints#prefetch
// [5] https://3perf.com/blog/link-rels/#prefetch
user_pref("network.http.speculative-parallel-limit", 0);
// or
//user_pref("network.http.speculative-parallel-limit", 6); // DEFAULT

// PREF: DNS pre-resolve <link rel="dns-prefetch">
// Resolve hostnames ahead of time. In order to reduce latency,
// Firefox will proactively perform domain name resolution on links that
// the user may choose to follow, as well as URLs for items
// referenced by elements in a web page.
// [1] https://bitsup.blogspot.com/2008/11/dns-prefetching-for-firefox.html
// [2] https://css-tricks.com/prefetching-preloading-prebrowsing/#dns-prefetching
// [3] https://www.keycdn.com/blog/resource-hints#2-dns-prefetching
// [4] http://www.mecs-press.org/ijieeb/ijieeb-v7-n5/IJIEEB-V7-N5-2.pdf
user_pref("network.dns.disablePrefetch", true);
//user_pref("network.dns.disablePrefetchFromHTTPS", true); // DEFAULT
// or
//user_pref("network.dns.disablePrefetch", false); // DEFAULT
//user_pref("network.dns.disablePrefetchFromHTTPS", false);

// PREF: preconnect to the autocomplete URL in the address bar
// Firefox preloads URLs that autocomplete when a user types into the address bar.
// Connects to destination server ahead of time, to avoid TCP handshake latency.
// [NOTE] Firefox will perform DNS lookup (if enabled) and TCP and TLS handshake,
// but will not start sending or receiving HTTP data.
// [1] https://www.ghacks.net/2017/07/24/disable-preloading-firefox-autocomplete-urls/
user_pref("browser.urlbar.speculativeConnect.enabled", false);
// or
//user_pref("browser.urlbar.speculativeConnect.enabled", true); // DEFAULT

// PREF: mousedown speculative connections on bookmarks and history
user_pref("browser.places.speculativeConnect.enabled", false);
// or
//user_pref("browser.places.speculativeConnect.enabled", true); // DEFAULT

// PREF: Preload <link rel=preload>
// This tells the browser that the resource should be loaded as part of the current navigation
// and it should start fetching it ASAP. This attribute can be applied to CSS, fonts, images, JavaScript files and more.
// This tells the browser to download and cache a resource (like a script or a stylesheet) as soon as possible.
// The browser doesn’t do anything with the resource after downloading it. Scripts aren’t executed, stylesheets
// aren’t applied. It’s just cached – so that when something else needs it, it’s available immediately.
// Focuses on fetching a resource for the CURRENT navigation.
// [NOTE] Unlike other pre-connection tags (except modulepreload), this tag is mandatory for the browser.
// [1] https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/preload
// [2] https://w3c.github.io/preload/
// [3] https://3perf.com/blog/link-rels/#preload
// [4] https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf
// [5] https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/#how-can-preload-do-better
// [6] https://www.keycdn.com/blog/resource-hints#preload
// [7] https://github.com/arkenfox/user.js/issues/1098#issue-791949341
// [8] https://yashints.dev/blog/2018/10/06/web-perf-2#preload
// [9] https://web.dev/preload-critical-assets/
//user_pref("network.preload", true); // DEFAULT

// PREF: Link prefetching <link rel="prefetch">
// Firefox will prefetch certain links if any of the websites you are viewing uses the special prefetch-link tag.
// A directive that tells a browser to fetch a resource that will likely be needed for the next navigation.
// The resource will be fetched with extremely low priority (since everything the browser knows
// is needed in the current page is more important than a resource that we guess might be needed in the next one).
// Speeds up the NEXT navigation rather than the current one.
// When the user clicks on a link, or initiates any kind of page load, link prefetching will stop and any
// prefetch hints will be discarded.
// Prefetch just downloads the resources; it doesn't execute anything (such as start to parse the web page),
// and it may never make any calls to scripts, etc.
// [1] https://developer.mozilla.org/en-US/docs/Glossary/Prefetch
// [2] http://www.mecs-press.org/ijieeb/ijieeb-v7-n5/IJIEEB-V7-N5-2.pdf
// [3] https://timkadlec.com/remembers/2020-06-17-prefetching-at-this-age/
// [4] https://3perf.com/blog/link-rels/#prefetch
user_pref("network.prefetch-next", false);
// or
//user_pref("network.prefetch-next", true); // DEFAULT

// PREF: enable early hints [NIGHTLY]
// [1] https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/103
// [2] https://developer.chrome.com/blog/early-hints/
//user_pref("network.early-hints.enabled", false); // DEFAULT
// or
//user_pref("network.early-hints.enabled", true);

// PREF: `Link: rel=preconnect` in 103 Early Hint response
//user_pref("network.early-hints.preconnect.enabled", false); // DEFAULT
// or
//user_pref("network.early-hints.preconnect.enabled", true);

// PREF: the number of speculative connections allowed for early hints `Link: rel=preconnect`
// When 0, this is limited by "network.http.speculative-parallel-limit".
//user_pref("network.early-hints.preconnect.max_connections", 0);
// or
//user_pref("network.early-hints.preconnect.max_connections", 10); // DEFAULT

// PREF: Network Predictor (NP)
// Keeps track of components that were loaded during page visits so that the browser knows next time
// which resources to request from the server: It uses a local file to remember which resources were
// needed when the user visits a webpage (such as image.jpg and script.js), so that the next time the
// user prepares to go to that webpage (upon navigation? URL bar? mouseover?), this history can be used
// to predict what resources will be needed rather than wait for the document to link those resources.
// NP only performs pre-connect, not prefetch, by default, including DNS pre-resolve and TCP preconnect
// (which includes SSL handshake). No data is actually sent to the site until a user actively clicks
// a link. However, NP is still opening TCP connections and doing SSL handshakes, so there is still
// information leakage about your browsing patterns.
// [NOTE] Disabling DNS prefetching disables the DNS prefetching behavior of NP.
// [1] https://wiki.mozilla.org/Privacy/Reviews/Necko
// [2] https://www.ghacks.net/2014/05/11/seer-disable-firefox/
// [3] https://github.com/dillbyrne/random-agent-spoofer/issues/238#issuecomment-110214518
// [4] https://www.igvita.com/posa/high-performance-networking-in-google-chrome/#predictor
user_pref("network.predictor.enabled", false);
// or
//user_pref("network.predictor.enabled", true); // DEFAULT

// PREF: NP fetches resources on the page ahead of time, to accelerate rendering of the page.
// Performs both pre-connect and prefetch.
user_pref("network.predictor.enable-prefetch", false);
// or
//user_pref("network.predictor.enable-prefetch", true); // DEFAULT

// PREF: NP active when hovering over links
// The next time the user mouseovers a link to that webpage, history is used to predict what
// resources will be needed rather than wait for the document to link those resources.
// When you hover over links, connections are established to linked domains and servers
// automatically to speed up the loading process should you click on the link. To improve the
// loading speed, Firefox will open predictive connections to sites when the user hovers their
// mouse over. In case the user follows through with the action, the page can begin loading
// faster since some of the work was already started in advance. Focuses on fetching a resource
// for the NEXT navigation.
//user_pref("network.predictor.enable-hover-on-ssl", false); // DEFAULT
// or
//user_pref("network.predictor.enable-hover-on-ssl", true);

// PREF: assign NP values
    //user_pref("network.predictor.preresolve-min-confidence", 40); // default=60
    //user_pref("network.predictor.preconnect-min-confidence", 60); // default=90
    //user_pref("network.predictor.prefetch-min-confidence", 80); // default=100
        //user_pref("network.predictor.prefetch-force-valid-for", 3600); // default=10
        //user_pref("network.predictor.prefetch-rolling-load-count", 120); // default=10
    //user_pref("network.predictor.max-resources-per-entry", 250); // default=100
    //user_pref("network.predictor.max-uri-length", 1000); // default=500
