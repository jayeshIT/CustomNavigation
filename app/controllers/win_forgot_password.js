var styles = require('styles');
var APP = require('utility');
/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * Local variables
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */

/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * NAVIGATION CONTROLS
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */

var closeWin = function() {
	$.win_forgot_password.close();
};
if (OS_IOS) {
	var left_nav_btn = APP.Ui.leftNavButton();
	left_nav_btn.addEventListener('click', closeWin);
	$.win_forgot_password.leftNavButton = left_nav_btn;
}else
{
	$.navBar.leftBtn.backgroundImage = '/images/back_btn.png';
	$.navBar.leftBtn.addEventListener('click', closeWin);
	$.navBar.win_title.text = L( 'forgot_password_title');
	$.navBar.rightBtn.visible = false;
	
}
/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * Submit button click
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */
var doSubmit = function() {

};

//-----------------------------------------------------------------------------------------
/**
 * /////////////////// /////////////////// /////////////////// ///////////////////
 * WINDOWS Events
 * /////////////////// /////////////////// /////////////////// ///////////////////
 */

$.win_forgot_password.addEventListener('close', function(e) {
	Titanium.API.info('--------Avalilable Memory FORGOT PASSWORD  Before Close: -----------' + (Titanium.Platform.availableMemory / 1024) + " :MB ");
	closeWin = null;
	doSubmit = null;
	$.destroy();
	Titanium.API.info('--------Avalilable Memory  FORGOT PASSWORD  After Close: -----------' + (Titanium.Platform.availableMemory / 1024) + " :MB ");
});

