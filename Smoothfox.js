//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************************
 * Smoothfox                                                                            *
 * "Faber est suae quisque fortunae"                                                    *
 * priority: better scrolling                                                           *
 * version: November 2022                                                               *
 * url: https://github.com/yokoffing/Better-Fox                                         *
 ***************************************************************************************/

/****************************************************************************************
 * OPTION 1: INSTANT SCROLLING (SIMPLE ADJUSTMENT)                                      *
****************************************************************************************/
// recommended for 60hz displays
user_pref("general.smoothScroll",                                       true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y",                      275);  // 250-500

/****************************************************************************************
 * OPTION 2: SMOOTH SCROLLING                                                           *
****************************************************************************************/
// recommended for 90hz+ displays
user_pref("general.smoothScroll",                                       true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y",                      265); // 250-500
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);

/****************************************************************************************
 * OPTION 3: NATURAL SMOOTH SCROLLING [MODIFIED]                                        *
****************************************************************************************/
// from https://github.com/AveYo/fox/blob/main/Natural%20Smooth%20Scrolling%20for%20user.js
// largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
// recommended for 120hz+ displays
user_pref("general.smoothScroll",                                       true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",  600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",      650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",         25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",      2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",     250);
user_pref("general.smoothScroll.currentVelocityWeighting",              1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting",             1.0);
user_pref("mousewheel.default.delta_multiplier_y",                      280);

