//
/* Do not COPY+PASTE this file. If you do, only COPY+PASTE the user_pref itself.
 *
 * If you make changes to your about:config while the program is running, the
 * changes will be overwritten when the application restarts.
 *
 * To make a change to preferences, you will have to edit the user.js file.
 */

/****************************************************************************
 * TinkerFox                                                                *
 * "Audentes fortuna iuvat"                                                 *
 * priority: explore experimental prefs                                     *
 * version: March 2021                                                      *
 * url: https://github.com/yokoffing/Better-Fox                             *
 ***************************************************************************/

/* If a setting isn't listed here, it's probably already integraded!
 * You can view experimental prefs at about:support.
 * [SETTING] about:support > "Experimental Features"
 */

// PREF: Proton UI Redesign
// [NOTE] This fluctuates frequently.
// user_pref("browser.proton.enabled", true);
// user_pref("browser.proton.tabs.enabled", true);
// user_pref("browser.proton.appmenu.enabled", true);
// user_pref("browser.newtabpage.activity-stream.newNewtabExperience.enabled", true);
// user_pref("browser.proton.toolbar.enabled", true);
// user_pref("browser.proton.contextmenus.enabled", true);
// user_pref("browser.proton.appmenu.enabled", true);
// user_pref("browser.proton.contextmenus.enabled", true);
// user_pref("browser.proton.doorhangers.enabled", true);
// user_pref("browser.proton.enabled", true);
// user_pref("browser.proton.places-tooltip.enabled", true);
// user_pref("browser.proton.tabs.enabled", true);
// user_pref("browser.proton.toolbar.enabled", true);
// user_pref("browser.proton.urlbar.enabled", true);
// user_pref("browser.proton.infobars.enabled", true);
// user_pref("browser.proton.tabs.audio-tab", true);
// user_pref("browser.proton.tabs.audio-tab-area", true);

// PREF: about:home startup cache
user_pref("browser.startup.homepage.abouthome_cache.enabled", true);

// PREF: CSS: Constructable Stylesheets
user_pref("layout.css.constructable-stylesheets.enabled", true);

// PREF: CSS: Masonry Layout 
user_pref("layout.css.grid-template-masonry-value.enabled", true);

// PREF: Fission (Site Isolation)
user_pref("fission.autostart", true)
// user_pref("fission.autostart.session", true) // [LOCKED] Nightly-only

// PREF: QUIC protocol / HTTP3
// [1] https://quic.rocks
// [2] https://laptrinhx.com/how-to-test-http-3-and-quic-with-firefox-nightly-1213623965/
user_pref("network.http.http3.enabled", true);

// PREF: Multiple Picture-in-Picture Support 
user_pref("media.videocontrols.picture-in-picture.allow-multiple", true);

// PREF: Address Bar: show results during IME composition 
// user_pref("browser.urlbar.keepPanelOpenDuringImeComposition", true);

// PREF: Web API: inputmode
user_pref("dom.forms.inputmode", true);

// PREF: Web API: WebGPU
// user_pref("dom.webgpu.enabled", true);

// PREF: Microphone and camera kill switch
user_pref("privacy.webrtc.globalMuteToggles", true);

// PREF: Evolution of ESNI for DNS-over-HTTPS
// user_pref("network.dns.echconfig.enabled", true);
// user_pref("network.dns.use_https_rr_as_altsvc", true);

// PREF: Mozilla Translate
// user_pref("browser.translation.ui.show", true);
// user_pref("browser.translation.detectLanguage", true);
