//
/******************************************************************************
 * FasterFox																  *      
 * priority: speedy browsing												  *
 * url: https://github.com/hjstephens09/Better-Fox							  *
 ******************************************************************************/


/******************************************************************************
 * 																			  *
 * [NOTE] For best performance on older hardware, you will need to test
 * these settings individually. 											  *
 * 																			  *
******************************************************************************/


// PREF: Activate Webrender, Firefox's new rendering engine
// Scroll webpages @ 60 FPS
// [1] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
// [2] https://wiki.mozilla.org/Platform/GFX/WebRender_Where
user_pref("gfx.webrender.all", true);

// PREF: Lazy Image Loading
// [1] https://www.ghacks.net/2020/02/15/firefox-75-gets-lazy-loading-support-for-images/
 user_pref("dom.image-lazy-loading.enabled", true);

// PREF: Paint visuals on the webpage as fast as possible
// Lower values will make a page initially display more quickly, but will make the page take longer to finish rendering.
// Higher values will have the opposite effect.
// [1] http://kb.mozillazine.org/Nglayout.initialpaint.delay
// [2] https://botw.org/articles/firefox-about-config.htm
// 0=immediate, 250=default
user_pref("nglayout.initialpaint.delay", 0);

// PREF: Prevent FF from going offline
// FF manages network connectivity poorly. It'll stall your browsing if your connectivity goes out, even for a second.
// It can make you think your wifi is down, etc. Best to disable unless you need it.
// [1] https://lifehacker.com/stop-firefox-from-automatically-entering-work-offline-5714560 ***/
user_pref("network.manage-offline-status", false);

// PREF: Increase active connections
// According to the default value, there will be 6 active connections kept for future requests to a server.
// If, at some point, more connections are needed, a delay will occur until there is a slot available.
// To avoid any idle periods, we can set more alive connections, thus forcing the browser to load several elements of a website.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-connections
// [WARNING] Don't go past 10 or websites may temporarily blacklist your IP!
// default=6
user_pref("network.http.max-persistent-connections-per-server", 10);

// PREF: Increase communication channels
// Perform this change in order to open communication channels with the server, and consequently load several elements of the website.
// Increased browser speed shall be mainly observed in pages that contain data such as images and videos, which slow down loading times.
// The range of value for this setting goes from 1 to 65535. However, it is rather unreasonable to increase it to the maximum
// allowed value, and subsequently strain the system, so give it a try with a value of 1500.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-persistent-connections-per-server
// default=900
user_pref("network.http.max-connections", 1500);

// PREF: Increase the memory capacity in Firefox, in order to load more pages faster
// If you enter a high value, but you don’t have a lot of RAM in your computer (e.g. 2GB),
// then you’ll just decrease the overall system speed. So pick wisely, and test the browser
// (and overall system) performance before leaving this value changed permanently.
// NOTE: If you notice that it’s not working for you, then revert it to its default value.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955
// default=250 -> 250KB, 51200 -> 50MB
user_pref("browser.cache.disk.metadata_memory_limit", 51200);

// PREF: Hide image placeholders
// default=true
user_pref("browser.display.show_image_placeholders", false);

// PREF: Decrease delay of security dialog when downloading extensions
user_pref("security.dialog_enable_delay", 0);

// PREF: Disable Firefox animations 
// Use for old, slow hardware if Firefox gives you laggy performance
// default=false
// user_pref("toolkit.cosmeticAnimations.enabled", true);

// PREF: Disable Reader mode
// Firefox will not have to parse webpage when navigating
// user_pref("reader.parse-on-load.enabled", true);


/******************************************************************************
 * SECTION: RETIRED				                                             *
 ******************************************************************************/

// PREF: Modify Firefox responsiveness while rendering
// WARNING: After nglayout.initialpaint.delay has been created and modified, Firefox may speed up rendering while annoying you with
// constant adjustments as you scroll through that new content. The preference content.switch.threshold controls Firefox
// responsiveness to your input (i.e. responsiveness to the UI) at the expense of slightly slowing the page load. Since
// you’ve already minimized the page load time, that shouldn’t be too much of a sacrifice.

// Firefox has two modes of user interaction with web pages that are still loading: high frequency interrupt mode and
// low frequency interrupt mode. The high mode better tolerates user interactions with the content. What this controls is
// the number of microseconds of inactivity that will activate low frequency interrupt mode. In other words, it controls how long
// you have to do nothing before Firefox assumes you are waiting for the whole page to load.

// Firefox is configured to apply low frequency mode after 0.75 seconds of user inactivity. Every time the browser goes to
// low frequency mode, it becomes faster at loading pages. Therefore, it is beneficial to reduce the time it takes for FF
// to enter low frequency mode. Thus, a value of 0.25 seconds (250000 ms) should be fine for that purpose.

// "Raising the value will make the application more responsive at the expense of page load time.” 
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#content-switch.threshold
// [2] https://botw.org/articles/firefox-about-config.htm
// user_pref("content.interrupt.parsing", true); // [HIDDEN] default=false
// user_pref("content.switch.threshold", 250000); // [HIDDEN] default=750000


// PREF: Increase speed of gradual rendered elements
// The function of this setting is associated with the gradual display of rendered elements on a page.
// In practice, a page is not loaded completely at once, but it is loaded gradually. Every time a new element is loaded,
// the page is refreshed, and the default interval for this function is set to 0.12 seconds (in other words, the page displays
// new elements every 0.12 seconds). However, since these redraws will increase the total page load time, you can set a new value
// of 500000(ms), which corresponds to 0.5 sec.
// [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955
// user_pref("content.notify.ontimer", true); // [HIDDEN]
// user_pref("content.notify.interval", 500000); // [HIDDEN]


