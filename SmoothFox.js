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
 * OPTION 1: SMOOTH SCROLLING                                               *
****************************************************************************/
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 250);
user_pref("general.smoothScroll.msdPhysics.enabled", true);

/****************************************************************************
 * OPTION 2: INSTANT SCROLLING (SIMPLE ADJUSTMENT)                          *
****************************************************************************/
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("mousewheel.default.delta_multiplier_y", 300);
