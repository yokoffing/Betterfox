/******
* name: FastFox
* description: Improve FF performance
* date: 24 March 2020
* version 74
* authors: hjs
* url: https://github.com/hjstephens09/Better-Fox
* license: MIT: https://github.com/hjstephens09/Better-Fox/blob/master/LICENSE
******/


/***********************************************************************************************
 *
 * [NOTE] If you have 6GB of RAM or less, you will need to test these settings individually,
 * and in some cases, leave them to their defaults entirely.
 *
 * Adjust preferences found in FastFox to what is appropriate for your machine:
 * Low-end machines (2GB RAM) = "default"
 * Mid-range machines (4-6GB RAM) = "mid-range"
 * High-end or current machines (8GB+ RAM) = "recommended"
***********************************************************************************************/


/*  Activate Webrender, FF's new rendering engine
 * Scroll webpages @ 60 FPS
 * [1] https://hacks.mozilla.org/2017/10/the-whole-web-at-maximum-fps-how-webrender-gets-rid-of-jank/
 * [2] https://wiki.mozilla.org/Platform/GFX/WebRender_Where
 * default=false
user_pref("gfx.webrender.all", true);

/*  Increase speed of gradual rendered elements
 * The function of this setting is associated with the gradual display of rendered elements on a page.
 * In practice, a page is not loaded completely at once, but it is loaded gradually. Every time a new element is loaded,
 * the page is refreshed, and the default interval for this function is set to 0.12 seconds (in other words, the page displays
 * new elements every 0.12 seconds). However, since these redraws will increase the total page load time, you can set a new value
 * of 500000(ms), which corresponds to 0.5 sec.
 * [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955
 * default=leave unchanged
user_pref("content.notify.ontimer", true); // [HIDDEN]
user_pref("content.notify.interval", 500000); // [HIDDEN]

/*  Improve the browser’s loading times
 * Firefox is configured to apply low frequency mode after 0.75 seconds of user inactivity. Every time the browser goes to
 * low frequency mode, it becomes faster at loading pages. Therefore, it is beneficial to reduce the time it takes for FF
 * to enter low frequency mode. Thus, a value of 0.25 seconds (250000 ms) should be fine for that purpose.
 * [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#content-switch.threshold
 * default=leave unchanged ***/
user_pref("content.switch.threshold", 250000); // [HIDDEN]
user_pref("content.interrupt.parsing", true); // [HIDDEN]

/*  Paint visuals on the webpage as fast as possible ***/
user_pref("nglayout.initialpaint.delay", 0); // 0=immediate, 250=default

/*  Lazy Image Loading ***/
user_pref("dom.image-lazy-loading.enabled", true);

/*  Prevent FF from going offline
 * FF manages network connectivity poorly. It's a constant nuisance if your connectivity goes out, even for a second.
 * Stalls browsing, can make you think your wifi is down...
 * Best to disable unless you need it.
 * [1] https://lifehacker.com/stop-firefox-from-automatically-entering-work-offline-5714560 ***/
user_pref("network.manage-offline-status", false);

/*  Increase active connections
/* According to the default value, there will be 6 active connections kept for future requests to a server.
 * If, at some point, more connections are needed, a delay will occur until there is a slot available.
 * To avoid any idle periods, we can set more alive connections, thus forcing the browser to load several elements of a website.
 * [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-connections
 * default=6    Don't go past 10 or websites may blacklist your IP! ***/
user_pref("network.http.max-persistent-connections-per-server", 10);

/*  Increase communication channels
 * Perform this change in order to open communication channels with the server, and consequently load several elements of the website.
 * Increased browser speed shall be mainly observed in pages that contain data such as images and videos, which slow down loading times.
 * The range of value for this setting goes from 1 to 65535. However, it is rather unreasonable to increase it to the maximum
 * allowed value, and subsequently strain the system, so give it a try with a value of 1500.
 * [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955#Network.http.max-persistent-connections-per-server
 * default=900
 * midrange=1100
 * recommended=1500 ***/
user_pref("network.http.max-connections", 1500);

/*  Increase the memory capacity in Firefox, in order to load more pages faster
 * If you enter a high value, but you don’t have a lot of RAM in your computer (e.g. 2GB),
 * then you’ll just decrease the overall system speed. So pick wisely, and test the browser
 * (and overall system) performance before leaving this value changed permanently.
 * If you notice that it’s not working for you, then revert it to its default value.
 * [1] https://www.download3k.com/articles/How-To-Optimize-Firefox-By-Tweaking-Hidden-Settings-In-The-about-config-Page-01955
 * default=250 -> 250KB
 * midrange=10000 -> 10MB
 * recommended=51200 -> 50MB ***/
user_pref("browser.cache.disk.metadata_memory_limit", 51200);

/*  Decrease delay of security dialog when downloading extensions ***/
user_pref("security.dialog_enable_delay", 0);

/* Hide image placeholders ***/
user_pref("browser.display.show_image_placeholders", false);

/** SMOOTH SCROLLING ***/
/* Edge-like smooth scrolliing
 * This is my preferred configuration. See other by using the link:
 * [1] https://www.reddit.com/r/firefox/comments/bvfqtp/these_are_the_smooth_scrolling_tweaks_i_play/epozw68 ***/
user_pref("apz.frame_delay.enabled", false);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
user_pref("mousewheel.min_line_scroll_amount", 40); // adjust to preference, 22-40

/* Disable Firefox animations 
 * default=true ***/
    // user_pref("toolkit.cosmeticAnimations.enabled", false);

/* Disable Reader mode
 * FF will not have to parse webpage when navigating ***/
    // user_pref("reader.parse-on-load.enabled", false);


