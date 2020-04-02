//
/****************************************************************************
 * FasterFox																*
 * priority: speedy browsing 												*
 * version: 28 March 2020													*
 * url: https://github.com/yokoffing/Better-Fox	  							*
 ***************************************************************************/

/****************************************************************************
 * 																			*
 * [NOTE] For best performance on older hardware, you will need to test     *
 * these settings individually, especially Webrender. 						*
 * 																			*
****************************************************************************/

// PREF: Activate Webrender, Firefox's new rendering engine
// [!] Webrender is still under active development.
// [BUG] Occasionally gives you "judder scroll" on sites with a lot of
// images. But the tradeoff is worth it.
// [1] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [2] https://wiki.mozilla.org/Platform/GFX/WebRender_Where
// [3] https://www.reddit.com/r/firefox/comments/fo1jwz/make_firefox_faster/flhh5l2/
// default=false (blacklisted on some machines still, especially macOS)
user_pref("gfx.webrender.all", true);

// PREF: Paint visuals on the webpage as fast as possible
// Lower values will make a page initially display more quickly, but they
// will make the page take longer to finish rendering. Higher values will
// have the opposite effect (i.e. page initially displays slower, but less
// time is spent watching it render).
// [1] http://kb.mozillazine.org/Nglayout.initialpaint.delay
// [2] https://botw.org/articles/firefox-about-config.htm
// default=250
user_pref("nglayout.initialpaint.delay", 0); 

// PREF: Prioritize page load over immediate responsiveness
// [!] Only use if you have a high-speed connection
// [NOTE] Both are hidden by defeault.
// default=true
user_pref("content.notify.ontimer", false);
user_pref("content.interrupt.parsing", false);

// PREF: Increase active connections
// According to the default value, there will be 6 active connections kept
// for future requests to a server. If, at some point, more connections are
// needed, a delay will occur until there is a slot available. To avoid any
// idle periods, we can set more alive connections, thus forcing the browser
// to load several elements of a website.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-connections
// [!] Assumes high-speed connection
// [!] Don't go past 10 or websites may temporarily blacklist your IP!
// default=6
user_pref("network.http.max-persistent-connections-per-server", 10);

// PREF: Increase communication channels
// Increased browser speed shall be mainly observed in pages that contain
// images and videos, which normally slow down loading times. The range of
// value for this setting goes from 1 to 65535. However, it is rather
// unreasonable to increase it to the maximum allowed value, and
// subsequently strain the system.
// [!] Users on slower connections may want to reduce this number to help
// prevent HTTP connection timeouts. Users on faster connections may want to
// increase it, but the default value is usually fine for normal usage.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-persistent-connections-per-server
// default=900
user_pref("network.http.max-connections", 2000);

// PREF: Increase memory capacity in order to load more pages faster
// If you enter a high value, but you don’t have a lot of RAM in your
// computer (e.g. 2GB), then you’ll just decrease the overall system speed.
// So pick wisely, and test the browser (and overall system) performance
// before leaving this value changed permanently.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955
// default=250 -> 250KB, 51200 -> 50MB
// user_pref("browser.cache.disk.metadata_memory_limit", 51200);

// PREF: Prevent FF from going offline
// Firefox manages network connectivity poorly. It'll stall your browsing if
// your connectivity goes out, even for a second. It can make you think your
// wifi is down, etc. Best to disable unless you need it.
// [1] https://lifehacker.com/stop-firefox-from-automatically-entering-work-offline-5714560 ***/
user_pref("network.manage-offline-status", false);

// PREF: Lazy Image Loading
// [1] https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
user_pref("dom.image-lazy-loading.enabled", true);

// PREF: Reduce animation time for fullscreen animations for HTML5 content
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");

// PREF: Decrease delay of security dialog when downloading extensions
// default=1000
user_pref("security.dialog_enable_delay", 0);

// PREF: Disable Firefox animations 
// Use for old, slow hardware if Firefox gives you laggy performance.
// default=false
// user_pref("toolkit.cosmeticAnimations.enabled", true);

// PREF: Reduce memory usage when Firefox is minimized [WINDOWS-only]
// user_pref("config.trim_on_minimize", true);
