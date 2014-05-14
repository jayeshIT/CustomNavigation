var styles = require('styles');
var APP = require('utility');
/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * LOCAL  variables
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */

/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * NAVIGATION CONTROLS
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */
var closeWin = function() {
	$.win_sign_in.close();
};
var text = L('forgot_password');
if (OS_IOS) {
	var left_nav_btn = APP.Ui.leftNavButton();
	left_nav_btn.addEventListener('click', closeWin);
	$.win_sign_in.leftNavButton = left_nav_btn;
	$.forgot_password_lbl.attributedString = Titanium.UI.iOS.createAttributedString({
		text : text,
		attributes : [{
			type : Titanium.UI.iOS.ATTRIBUTE_UNDERLINES_STYLE,
			value : Titanium.UI.iOS.ATTRIBUTE_UNDERLINE_STYLE_SINGLE,
			range : [0, text.length]
		}]
	});
} else {
	$.forgot_password_lbl.html = "<U>" + text + "</U>";
	$.navBar.leftBtn.backgroundImage = '/images/back_btn.png';
	$.navBar.leftBtn.addEventListener('click', closeWin);
	$.navBar.win_title.text = L('sign_in');
	$.navBar.rightBtn.visible = false;

}
//-----------------------------------------------------------------------------------------
/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * FORGOT PASSWORD Events
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */

$.forgot_password_lbl.addEventListener('click', function(e) {
	Alloy.Globals.opennavWin('win_forgot_password');
});
;
//-----------------------------------------------------------------------------------------
/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * WINDOWS Events
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */

$.win_sign_in.addEventListener('close', function(e) {
	Titanium.API.info('--------Avalilable Memory SIGN IN   Before Close: -----------' + (Titanium.Platform.availableMemory / 1024) + " :MB ");
	closeWin = null;
	doForgotPassowrd = null;
	$.destroy();
	Titanium.API.info('--------Avalilable Memory  SIGN IN  After Close: -----------' + (Titanium.Platform.availableMemory / 1024) + " :MB ");
});
