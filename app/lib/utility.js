(function() {
	//var indicatorWin = null;
	//var activityIndicator = null;

	exports.Ui = {
		/*showLoader : function(_loaderMessage) {
		 if (OS_IOS) {
		 var indicator = require('indicator_iphone');
		 indicatorWin = indicator.createLoadingView(_loaderMessage);
		 indicatorWin.open();
		 } else {
		 try {
		 activityIndicator = Ti.UI.Android.createProgressIndicator({
		 location : Ti.UI.Android.PROGRESS_INDICATOR_DIALOG,
		 type : Ti.UI.Android.PROGRESS_INDICATOR_INDETERMINANT
		 });
		 if (activityIndicator) {
		 activityIndicator.message = _loaderMessage;
		 activityIndicator.show();
		 }
		 } catch(exp) {
		 Ti.API.info('Exepction: ' + exp);
		 }
		 }

		 },
		 hideLoader : function() {
		 if (OS_IOS) {
		 if (indicatorWin) {
		 indicatorWin.close();
		 }
		 } else {
		 try {
		 if (activityIndicator) {
		 activityIndicator.hide();
		 }
		 } catch(exp) {
		 Ti.API.info('Exepction: ' + exp);
		 }
		 }
		 },*/
		alert : function(_title, _message) {
			Ti.API.info('AlerTitle :' + _title + " ::" + L("appname"));
			Ti.UI.createAlertDialog({
				title : "BudzGo",
				message : _message,
				buttonNames : ['OK']
			}).show();
		},
		alertWithButton : function(_title, _message) {
			return Ti.UI.createAlertDialog({
				title : "BudzGo",
				message : _message,
				buttonNames : ['OK']
			});
		},
		createOptionDialog : function(options, title, selectedIndex, onOptionClickedCallback) {
			option_dialog = Ti.UI.createOptionDialog({
				options : options,
				selectedIndex : selectedIndex,
				title : title
			});
			option_dialog.show();
			option_dialog.addEventListener('click', onOptionClickedCallback);
		},
		leftNavButton : function() {
			var left_nav_btn = Titanium.UI.createButton({
				backgroundImage : '/images/back_btn.png',
				height : 22,
				width : 12
			});
			return left_nav_btn;
		}
	};
	var winTrans = null;

})();
