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
 * OPTION 1: INSTANT SCROLLING (SIMPLE ADJUSTMENT)                          *
****************************************************************************/
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 300);  // 250-500

/****************************************************************************
 * OPTION 2: SMOOTH SCROLLING                                               *
****************************************************************************/
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);

/****************************************************************************
 * OPTION 3: EDGE-LIKE SMOOTH SCROLLING                                     *
****************************************************************************/
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 250);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 120);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 0.4);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 5000);

/****************************************************************************
 * OPTION 4: NATURAL SMOOTH SCROLLING V4                                    *
****************************************************************************/
// from https://github.com/AveYo/fox/blob/main/Natural%20Smooth%20Scrolling%20for%20user.js
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   200);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       250);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      250);
user_pref("general.smoothScroll.currentVelocityWeighting",             1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting",            1.0);

/****************************************************************************
 * OPTION 5: NATURAL SMOOTH SCROLLING V4 [MODIFIED]                         *
****************************************************************************/
// Largely matches Chrome flags: Windows Scrolling Personality and Smooth Scrolling
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS",   12);
user_pref("general.smoothScroll.msdPhysics.enabled",                    true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant",   600); // 200
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant",       650); // 250
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS",           25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio",     2.0);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant",      250);
user_pref("general.smoothScroll.currentVelocityWeighting",             1.0);
user_pref("general.smoothScroll.stopDecelerationWeighting",            1.0);
user_pref("mousewheel.default.delta_multiplier_y", 280);

