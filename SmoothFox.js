//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************
 * SmoothFox                                                                *
 * "Faber est suae quisque fortunae."                                       *
 * priority: smooth scrolling                                               *
 * version: 24 September 2020                                                    *
 * url: https://github.com/hjstephens09/Better-Fox                          *
 ***************************************************************************/

/****************************************************************************
 * SECTION: SMOOTH SCROLLING (OVERALL IMPROVEMENT OF DEFAULTS)              *
****************************************************************************/
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.lines.durationMaxMS", 125);
user_pref("general.smoothScroll.lines.durationMinMS", 125);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 100);
user_pref("general.smoothScroll.other.durationMaxMS", 125);
user_pref("general.smoothScroll.other.durationMinMS", 125);
user_pref("general.smoothScroll.pages.durationMaxMS", 125);
user_pref("general.smoothScroll.pages.durationMinMS", 125);
user_pref("mousewheel.system_scroll_override_on_root_content.horizontal.factor", 175);
user_pref("mousewheel.system_scroll_override_on_root_content.vertical.factor", 175);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 6);
user_pref("toolkit.scrollbox.verticalScrollDistance", 2);
user_pref("mousewheel.min_line_scroll_amount", 40);

/****************************************************************************
 * SECTION: EDGE-LIKE SMOOTH SCROLLING (USING MSDPHYSICS)                   *
****************************************************************************/
// PREF: Edge-like smooth scrolliing (using msdPhysics)
user_pref("apz.frame_delay.enabled", false);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
user_pref("mousewheel.min_line_scroll_amount", 35); // adjust to preference, 20-40

/******************************************************************************
 * SECTION: EDGE-LIKE SMOOTH SCROLLING (w/o MSDPHYSICS)                       *
******************************************************************************/
// PREF: Edge-like smooth scrolliing (without msdPhysics)
user_pref("apz.frame_delay.enabled", false);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.currentVelocityWeighting", 0.05);
user_pref("general.smoothScroll.lines.durationMaxMS", 100);
user_pref("general.smoothScroll.lines.durationMinMS", 450);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 250);
user_pref("general.smoothScroll.other.durationMaxMS", 400);
user_pref("general.smoothScroll.other.durationMinMS", 400);
user_pref("general.smoothScroll.pages.durationMaxMS", 300);
user_pref("general.smoothScroll.pages.durationMinMS", 300);
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 200);
user_pref("general.smoothScroll.scrollbars.durationMinMS", 450);
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 5);
user_pref("mousewheel.min_line_scroll_amount", 35); // adjust to preference, 20-40

/******************************************************************************
 * SECTION: MAC OS TRACKPAD                                                   *
******************************************************************************/
// PREF: OS X / macOS Trackpad
// May not need to adjust settings since scrolling is already pretty smooth in macOS.
user_pref("apz.frame_delay.enabled", false);
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.mouseWheel", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 600);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 400);
user_pref("general.smoothScroll.pixels.durationMaxMS", 400);
user_pref("general.smoothScroll.pixels.durationMinMS", 100);
user_pref("general.smoothScroll.stopDecelerationWeighting", 0.8);
user_pref("mousewheel.acceleration.factor", 8);
user_pref("mousewheel.acceleration.start", 2);
user_pref("mousewheel.min_line_scroll_amount", 2);
