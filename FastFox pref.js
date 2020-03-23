/******

* name: FasterFox
* description: Improve FF performance
* date: 23 March 2020
* version 74
* authors: hjs
* url: https://github.com/hjstephens09/Better-Fox
* license: MIT: https://github.com/hjstephens09/Better-Fox/blob/master/LICENSE

******/

/* Activate Webrender
 * Scroll webpages @ 60 FPS
 * https://wiki.mozilla.org/Platform/GFX/WebRender_Where ***/
user_pref("gfx.webrender.all", true);

/* Lazy Image Loading ***/
user_pref("dom.image-lazy-loading.enabled", true);

/* Paint visuals on the webpage as fast as possible ***/
user_pref("nglayout.initialpaint.delay", 0); // 0=immediate, 250=default

/* Significantly speed up Firefox ***/
user_pref("network.http.max-persistent-connections-per-server", 10); // default=6, don't go past 10
user_pref("browser.cache.disk.metadata_memory_limit", 51200);
user_pref("network.http.max-connections", 1500);
user_pref("content.notify.interval", 500000); // [HIDDEN]
user_pref("content.notify.ontimer", true); // [HIDDEN]
user_pref("content.switch.threshold", 250000); // [HIDDEN]
user_pref("content.interrupt.parsing", true); // [HIDDEN]

/* Decrease delay of security dialog when downloading extensions ***/
user_pref("security.dialog_enable_delay", 0);

/* Disable Reader mode
 * FF will not have to parse webpage when navigating ***/
user_pref("reader.parse-on-load.enabled", false);

/* Edge-like smooth scrolliing
 * See other configs:
 * [1] https://www.reddit.com/r/firefox/comments/bvfqtp/these_are_the_smooth_scrolling_tweaks_i_play/epozw68 ***/
user_pref("apz.frame_delay.enabled", false);
user_pref("general.autoScroll", true);
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


