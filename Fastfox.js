
/****************************************************************************************
 * Fastfox                                                                              *
 * "Non ducor duco"                                                                     *
 * priority: speedy browsing                                                            *
 * version: 152                                                                         *
 * url: https://github.com/yokoffing/Betterfox                                          *
 ***************************************************************************************/

/****************************************************************************
 * SECTION: GENERAL                                                        *
****************************************************************************/

// PREF: initial paint delay
// How long FF will wait before rendering the page (in ms)
// [NOTE] You may prefer using 250.
// [NOTE] Dark Reader users may want to use 1000 [3].
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1283302
// [2] https://docs.google.com/document/d/1BvCoZzk2_rNZx3u9ESPoFjSADRI0zIPeJRXFLwWXx_4/edit#heading=h.28ki6m8dg30z
// [3] https://old.reddit.com/r/firefox/comments/o0xl1q/reducing_cpu_usage_of_dark_reader_extension/
// [4] https://reddit.com/r/browsers/s/wvNB7UVCpx
//user_pref("nglayout.initialpaint.delay", 5); // DEFAULT; formerly 250
    //user_pref("nglayout.initialpaint.delay_in_oopif", 5); // DEFAULT

// PREF: Font rendering cache in Skia (32MB)
// Increases font cache size to improve performance on text-heavy websites.
// Especially beneficial for sites with many font faces or complex typography.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1239151#c2
user_pref("gfx.content.skia-font-cache-size", 20); // 20 MB; default=5; Chrome=20

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

// PREF: content notification delay - notification interval (in microseconds) to avoid layout thrashing
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
// [2] https://web.archive.org/web/20240115073722/https://dev.opera.com/articles/efficient-javascript/?page=3#reflow
// [3] https://web.archive.org/web/20240115073722/https://dev.opera.com/articles/efficient-javascript/?page=3#smoothspeed
user_pref("content.notify.interval", 100000); // (.10s); default=120000 (.12s)
    //user_pref("content.max.tokenizing.time", 1000000); // (1.00s); alt=2000000; HIDDEN
    //user_pref("content.interrupt.parsing", true); // HIDDEN

// PREF: UI responsiveness threshold
//user_pref("content.switch.threshold", 300000); // HIDDEN; default= 750000; alt=500000

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
//user_pref("browser.startup.preXulSkeletonUI", false);

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

// PREF: Webrender layer compositor
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1945683
// [2] https://www.reddit.com/r/firefox/comments/1p58qre/firefox_is_getting_ready_to_make_youtube_fast/
// [3] https://www.ghacks.net/2025/11/24/these-two-tweaks-should-improve-firefoxs-performance-on-youtube-significantly/
//user_pref("gfx.webrender.layer-compositor", true);

// PREF: improve CPU usage on AMD systems
//user_pref("media.wmf.zero-copy-nv12-textures-force-enabled", true);

// PREF: if your hardware doesn't support Webrender, you can fallback to Webrender's software renderer
// [1] https://www.ghacks.net/2020/12/14/how-to-find-out-if-webrender-is-enabled-in-firefox-and-how-to-enable-it-if-it-is-not/
//user_pref("gfx.webrender.software", true); // Software Webrender uses CPU instead of GPU
    //user_pref("gfx.webrender.software.opengl", true); // LINUX

// PREF: GPU-accelerated Canvas2D
// Uses Accelerated Canvas2D for hardware acceleration of Canvas2D.
// This provides a consistent acceleration architecture across all platforms
// by utilizing WebGL instead of relying upon Direct2D.
// [WARNING] May cause issues on some Windows machines using integrated GPUs [2] [3]
// Add to your overrides if you have a dedicated GPU.
// [NOTE] Higher values will use more memory.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1741501
// [2] https://github.com/yokoffing/Betterfox/issues/153
// [3] https://github.com/yokoffing/Betterfox/issues/198
//user_pref("gfx.canvas.accelerated", true); // [DEFAULT FF133+]
    //user_pref("gfx.canvas.accelerated.cache-items", 8192); // [DEFAULT FF135+]
    user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; Chrome=512; max=2048
    //user_pref("gfx.canvas.max-size", 32767); // [DEFAULT]

/****************************************************************************
 * SECTION: JAVASCRIPT OPTIONS                                              *
****************************************************************************/
// PREF: lower the Baseline JIT compilation threshold
// Controls how many times a function runs before Firefox promotes it from the
// C++ interpreter to the Baseline JIT compiler. The Baseline JIT compiles each
// bytecode instruction into a small piece of machine code and uses Inline Caches
// (ICs) to both speed up execution and collect type info for the Ion optimizing JIT.
// Lowering this from 100 to 50 promotes "warm" functions to compiled machine code
// sooner, which reduces dropped frames while browsing.
// [1] https://ra1ahq.blog/en/optimizaciya-proizvoditelnosti-mozilla-firefox-chast-1
user_pref("javascript.options.baselinejit.threshold", 50); // default=100

// PREF: raise the IonMonkey (Ion) optimizing-JIT compilation threshold
// Controls how many times a function runs before Firefox promotes it from the
// Baseline JIT to IonMonkey, the optimizing JIT. Ion applies advanced compiler
// optimizations to produce fast code for "hot" functions, at the cost of slower
// compilation. The Baseline JIT is quicker to produce but can't cope with the large
// amounts of code on heavy websites.
// Raising this threshold keeps more code on the faster-to-compile Baseline JIT,
// reserving the expensive Ion compilation for only the hottest functions.
// [1] https://ra1ahq.blog/en/optimizaciya-proizvoditelnosti-mozilla-firefox-chast-1
//user_pref("javascript.options.ion.threshold", 1500); // DEFAULT

// PREF: decrease concurrent JavaScript garbage collection (GC) threads
// Sets the divisor in the formula: GC threads = CPU threads ÷ divisor (min 1).
// A LOWER value = MORE parallel GC threads. A HIGHER value = FEWER threads.
// Example (24-thread CPU):  divisor 1 → 24 threads | 2 → 12 | 4 (default) → 6 | 12 → 2
// Power users with many cores should LOWER this value, not raise it.
// [NOTE] Mozilla's default of 4 is conservative to avoid thread contention on weak hardware.
//user_pref("javascript.options.concurrent_multiprocess_gcs.cpu_divisor", 4); // DEFAULT

/****************************************************************************
 * SECTION: DISK CACHE                                                     *
****************************************************************************/

// PREF: force a fixed max cache size on disk
// NOTE: You need this set to false if you are to edit the disk capacity value
// [1] https://support.mozilla.org/en-US/questions/1271481
//user_pref("browser.cache.disk.smart_size.enabled", false);

// PREF: disk cache size
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=913808,968106,968101
// [2] https://rockridge.hatenablog.com/entry/2014/09/15/165501
// [3] https://www.reddit.com/r/firefox/comments/17oqhw3/firefox_and_ssd_disk_consumption/
//user_pref("browser.cache.disk.capacity", 512000); // default=256000; size of disk cache; 1024000=1GB, 2048000=2GB
//user_pref("browser.cache.disk.max_entry_size", 51200); // DEFAULT (50 MB); maximum size of an object in disk cache

// PREF: cache memory pool
// Cache v2 provides a memory pool that stores metadata (such as response headers)
// for recently read cache entries [1]. It is managed by a cache thread, and caches with
// metadata in the pool appear to be reused immediately.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=986179
//user_pref("browser.cache.disk.metadata_memory_limit", 1024); // DEFAULT (1 MB); limit of recent metadata we keep in memory for faster access

// PREF: number of chunks we preload ahead of read
// Large content such as images will load faster.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=913819,988318
// [2] http://www.janbambas.cz/new-firefox-http-cache-enabled/
//user_pref("browser.cache.disk.preload_chunk_count", 8); // default=4

// PREF: the time period used to re-compute the frecency value of cache entries
// The frequency algorithm is used to select entries, and entries that are recently
// saved or frequently reused are retained. The frecency value determines how
// frequently a page has been accessed and is used by Firefox's cache algorithm.
// The frequency algorithm is used to select entries, and entries that are recently
// saved or frequently reused are retained. The frecency value determines how
// often a page has been accessed and is used by Firefox's cache algorithm.
// When the memory pool becomes full, the oldest data is purged. By default,
// data older than 6 hours is treated as old.
// [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=942835,1012327
// [2] https://bugzilla.mozilla.org/buglist.cgi?bug_id=913808,968101
//user_pref("browser.cache.frecency_half_life_hours", 6); // DEFAULT

// PREF: memory limit (in kB) for new cache data not yet written to disk
// Writes to the cache are buffered and written to disk on background with low priority.
// With a slow persistent storage, these buffers may grow when data is coming
// fast from the network. When the amount of unwritten data is exceeded, new
// writes will simply fail. We have two buckets, one for important data
// (priority) like html, css, fonts and js, and one for other data like images, video, etc.
//user_pref("browser.cache.disk.max_chunks_memory_usage", 40960); // DEFAULT (40 MB)
//user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960); // DEFAULT (40 MB)

// PREF: how often to validate document in cache
// 0 = once-per-session
// 1 = each-time
// 2 = never
// 3 = when-appropriate/automatically (default)
//user_pref("browser.cache.check_doc_frequency", 3); // DEFAULT

// PREF: enforce free space checks
// When smartsizing is disabled, we could potentially fill all disk space by
// cache data when the disk capacity is not set correctly. To avoid that, we
// check the free space every time we write some data to the cache. The free
// space is checked against two limits. Once the soft limit is reached we start
// evicting the least useful entries, when we reach the hard limit writing to
// the entry fails.
//user_pref("browser.cache.disk.free_space_soft_limit", 10240); // default=5120 (5 MB)
//user_pref("browser.cache.disk.free_space_hard_limit", 2048); // default=1024 (1 MB)

// PREF: compression level for cached JavaScript bytecode [FF102+]
// [1] https://github.com/yokoffing/Betterfox/issues/247
// 0 = do not compress (default)
// 1 = minimal compression
// 9 = maximal compression
//user_pref("browser.cache.jsbc_compression_level", 3);

// PREF: strategy to use for when the bytecode should be encoded and saved [TESTING ONLY]
// -1 = makes page load times marginally longer when a page is being loaded for the first time, while
// subsequent reload of websites will be much much faster.
// 0 = the bytecode is created every 4 page loads [3].
// [1] https://searchfox.org/mozilla-release/source/modules/libpref/init/StaticPrefList.yaml#3461-3488
// [2] https://www.reddit.com/r/firefox/comments/12786yv/improving_performance_in_firefox_android_part_ii/
// [3] https://github.com/zen-browser/desktop/issues/217
// -1 = saved as soon as the script is seen for the first time, independently of the size or last access time
// 0 = saved in order to minimize the page-load time (default)
//user_pref("dom.script_loader.bytecode_cache.enabled", true); // DEFAULT
//user_pref("dom.script_loader.bytecode_cache.strategy", 0); // DEFAULT

/****************************************************************************
 * SECTION: MEMORY CACHE                                                   *
****************************************************************************/

// PREF: memory cache
// The "automatic" size selection (default) is based on a decade-old table
// that only contains settings for systems at or below 8GB of system memory [1].
// Waterfox G6 allows it to go above 8GB machines [3].
// Value can be up to the max size of an unsigned 64-bit integer.
// -1 = Automatically decide the maximum memory to use to cache decoded images,
// messages, and chrome based on the total amount of RAM
// For machines with 8GB+ RAM, that equals 32768 kb = 32 MB
// [1] https://kb.mozillazine.org/Browser.cache.memory.capacity#-1
// [2] https://searchfox.org/mozilla-central/source/netwerk/cache2/CacheObserver.cpp#94-125
// [3] https://github.com/WaterfoxCo/Waterfox/commit/3fed16932c80a2f6b37d126fe10aed66c7f1c214
//user_pref("browser.cache.memory.capacity", 65536); // default=32768 (32 MB)
    //user_pref("browser.cache.memory.max_entry_size", 10240); // default=5120 (5 MB)

// PREF: amount of Back/Forward cached pages stored in memory for each tab
// Pages that were recently visited are stored in memory in such a way
// that they don't have to be re-parsed. This improves performance
// when pressing Back and Forward. This pref limits the maximum
// number of pages stored in memory. If you are not using the Back
// and Forward buttons that much, but rather using tabs, then there
// is no reason for Firefox to keep memory for this.
// -1=determine automatically (8 pages)
// [1] https://kb.mozillazine.org/Browser.sessionhistory.max_total_viewers#Possible_values_and_their_effects
//user_pref("browser.sessionhistory.max_total_viewers", 8); // DEFAULT
//user_pref("browser.sessionstore.max_tabs_undo", 10); // default=25
    //user_pref("browser.sessionstore.max_entries", 10); // [HIDDEN OR REMOVED]
    //user_pref("dom.storage.default_quota", 20480); // 20MB; default=5120
    //user_pref("dom.storage.shadow_writes", true);

// PREF: tell garbage collector to start running when javascript is using xx MB of memory
// Garbage collection releases memory back to the system.
//user_pref("javascript.options.mem.high_water_mark", 128); // DEFAULT [HIDDEN OR REMOVED]

/****************************************************************************
 * SECTION: MEDIA CACHE                                                     *
****************************************************************************/

// PREF: media disk cache
//user_pref("media.cache_size", 512000); // DEFAULT

// PREF: media cache combine sizes
//user_pref("media.memory_caches_combined_limit_kb", 1048576); // 1GB; default=524288
//user_pref("media.memory_caches_combined_limit_pc_sysmem", 5); // DEFAULT; alt=10; the percentage of system memory that Firefox can use for media caches

// PREF: Media Source Extensions (MSE) web standard
// Disabling MSE allows videos to fully buffer, but you're limited to 720p.
// [WARNING] Disabling MSE may break certain videos.
// false=Firefox plays the old WebM format
// true=Firefox plays the new WebM format (default)
// [1] https://support.mozilla.org/en-US/questions/1008271
//user_pref("media.mediasource.enabled", true); // DEFAULT

// PREF: adjust video buffering periods when not using MSE (in seconds)
// [NOTE] Does not affect videos over 720p since they use DASH playback [1] or Web Audio API
// [1] https://lifehacker.com/preload-entire-youtube-videos-by-disabling-dash-playbac-1186454034
user_pref("media.cache_readahead_limit", 3600); // 10 min; default=60; stop reading ahead when our buffered data is this many seconds ahead of the current playback
user_pref("media.cache_resume_threshold", 1800); // 5 min; default=30; when a network connection is suspended, don't resume it until the amount of buffered data falls below this threshold

/****************************************************************************
 * SECTION: IMAGE CACHE                                                     *
****************************************************************************/

// PREF: image cache
//user_pref("image.cache.size", 20971520); // (cache images up to 20 MiB in size) [DEFAULT]
user_pref("image.mem.decode_bytes_at_a_time", 32768); // default=16384; chunk size for calls to the image decoders
//user_pref("image.mem.max_decoded_image_kb", 512000); // 500MB [HIDDEN OR REMOVED?]

// PREF: set minimum timeout to unmap shared surfaces since they have been last used
// [NOTE] This is only used on 32-bit builds of Firefox where there is meaningful
// virtual address space pressure.
// [1] https://phabricator.services.mozilla.com/D109440
// [2] https://bugzilla.mozilla.org/show_bug.cgi?id=1699224
//user_pref("image.mem.shared.unmap.min_expiration_ms", 120000); // default=60000; minimum timeout to unmap shared surfaces since they have been last used

/****************************************************************************
 * SECTION: NETWORK                                                         *
****************************************************************************/

// PREF: use bigger packets
// [WARNING] Cannot open HTML files bigger than 4MB if value is too large [2].
// Reduce Firefox's CPU usage by requiring fewer application-to-driver data transfers.
// However, it does not affect the actual packet sizes transmitted over the network.
// [1] https://www.mail-archive.com/support-seamonkey@lists.mozilla.org/msg74561.html
// [2] https://github.com/yokoffing/Betterfox/issues/279
// [3] https://ra1ahq.blog/en/optimizaciya-proizvoditelnosti-mozilla-firefox
user_pref("network.buffer.cache.size", 65535); // default=32768 (32 kb); 262144 too large
user_pref("network.buffer.cache.count", 48); // default=24; 128 too large

// PREF: increase the absolute number of HTTP connections
// [1] https://kb.mozillazine.org/Network.http.max-connections
// [2] https://kb.mozillazine.org/Network.http.max-persistent-connections-per-server
// [3] https://www.reddit.com/r/firefox/comments/11m2yuh/how_do_i_make_firefox_use_more_of_my_900_megabit/jbfmru6/
user_pref("network.http.max-connections", 1800); // default=900
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6; download connections; anything above 10 is excessive
    user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // default=3
    //user_pref("network.http.max-persistent-connections-per-proxy", 32); // default=32
user_pref("network.http.request.max-start-delay", 5); // default=10
//user_pref("network.websocket.max-connections", 200); // DEFAULT

// PREF: pacing requests [FF23+]
// Controls how many HTTP requests are sent at a time.
// Pacing HTTP requests can have some benefits, such as reducing network congestion,
// improving web page loading speed, and avoiding server overload.
// Pacing requests adds a slight delay between requests to throttle them.
// If you have a fast machine and internet connection, disabling pacing
// may provide a small speed boost when loading pages with lots of requests.
// false = Firefox will send as many requests as possible without pacing
// true = Firefox will pace requests (default)
//user_pref("network.http.pacing.requests.enabled", false);
    //user_pref("network.http.pacing.requests.min-parallelism", 12); // default=6
    //user_pref("network.http.pacing.requests.burst", 20); // default=10

// PREF: increase DNS cache
// [1] https://developer.mozilla.org/en-US/docs/Web/Performance/Understanding_latency
//user_pref("network.dnsCacheEntries", 1600); // default=800

// PREF: adjust DNS expiration time
// [ABOUT] about:networking#dns
// [NOTE] These prefs will be ignored by DNS resolver if using DoH/TRR.
user_pref("network.dnsCacheExpiration", 3600); // keep entries for 1 hour; default=60
    //user_pref("network.dnsCacheExpirationGracePeriod", 120); // default=60; cache DNS entries for 2 minutes after they expire

// PREF: the number of threads for DNS
//user_pref("network.dns.max_high_priority_threads", 40); // DEFAULT [FF 123?]
//user_pref("network.dns.max_any_priority_threads", 24); // DEFAULT [FF 123?]

// PREF: increase TLS token caching 
//user_pref("network.ssl_tokens_cache_capacity", 8192); // TLS token caching (fast reconnects)

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
// this value (in MiB).
// Set this to some value, e.g. 4/5 of total memory available on your system:
// 4GB=3276, 8GB=6553, 16GB=13107, 32GB=25698, 64GB=52429
// [1] https://dev.to/msugakov/taking-firefox-memory-usage-under-control-on-linux-4b02
//user_pref("browser.low_commit_space_threshold_mb", 3276); // default=200; WINDOWS LINUX

// PREF: determine when tabs unload [LINUX]
// On Linux, Firefox checks available memory in comparison to total memory,
// and use this percent value (out of 100) to determine if Firefox is in a
// low memory scenario.
// [1] https://dev.to/msugakov/taking-firefox-memory-usage-under-control-on-linux-4b02
//user_pref("browser.low_commit_space_threshold_percent", 5); // default=5; LINUX

// PREF: determine how long (in ms) tabs are inactive before they unload
// 60000=1min; 300000=5min; 600000=10min (default)
//user_pref("browser.tabs.min_inactive_duration_before_unload", 300000); // 5min; default=600000

/****************************************************************************
 * SECTION: PROCESS COUNT                                                  *
****************************************************************************/

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
//user_pref("dom.ipc.keepProcessesAlive.web", 4); // default=1 [HIDDEN OR REMOVED]

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
