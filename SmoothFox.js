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
 * version: 29 December 2020                                                *
 * url: https://github.com/hjstephens09/Better-Fox                          *
 ***************************************************************************/

/****************************************************************************
 * SECTION: SMOOTH SCROLLING (OVERALL IMPROVEMENT OF DEFAULTS)              *
****************************************************************************/
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 150);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 125);

/******************************************************************************
 * SECTION: EDGE-LIKE SMOOTH SCROLLING                                        *
******************************************************************************/
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.currentVelocityWeighting", "0.1");
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 125);
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.7");
user_pref("mousewheel.min_line_scroll_amount", 25);
