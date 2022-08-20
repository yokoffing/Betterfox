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
 * "Faber est suae quisque fortunae"                                        *
 * priority: better scrolling                                               *
 * version: September 2022                                                  *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/****************************************************************************
 * OPTION 1: SMOOTH SCROLLING (SIMPLE ADJUSTMENT)                           *
****************************************************************************/
user_pref("general.smoothScroll", true);
// Insant scroll:
user_pref("mousewheel.min_line_scroll_amount", 30);
// or
// Prettier, bounce scroll:
user_pref("mousewheel.default.delta_multiplier_y", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);

/****************************************************************************
 * OPTION 2: SMOOTH SCROLLING (OVERALL IMPROVEMENT OF DEFAULTS)             *
****************************************************************************/
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 125);

/******************************************************************************
 * OPTION 3: EDGE-LIKE SMOOTH SCROLLING                                       *
******************************************************************************/
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.1");
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 125);
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.7");
user_pref("mousewheel.min_line_scroll_amount", 25);
user_pref("apz.overscroll.enabled", true); /*elastic overscroll*/
