(function() {
	//Globally available theme object to hold theme colors/constants
	exports.theme = {

	};
	var empty = {};
	function mixin(target, source) {
		var name, s, i;
		for (name in source) {
			s = source[name];
			if (!( name in target) || (target[name] !== s && (!( name in empty) || empty[name] !== s))) {
				target[name] = s;
			}
		}
		return target;
		// Object
	};
	//Extend an object with the properties from another
	//(thanks Dojo - http://docs.dojocampus.org/dojo/mixin)
	exports.$$ = {
		mixin : function(obj, props) {
			if (!obj) {
				obj = {};
			}
			for (var i = 1, l = arguments.length; i < l; i++) {
				mixin(obj, arguments[i]);
			}
			return obj;
			// Object
		},
		//create a new object, combining the properties of the passed objects with the last arguments having
		//priority over the first ones
		combine : function(obj, props) {
			var newObj = {};
			for (var i = 0, l = arguments.length; i < l; i++) {
				mixin(newObj, arguments[i]);
			}
			return newObj;
		}
	};
	//All shared property sets are declared here.
	exports.UI_properties = {
		//grab platform dimensions only once to save a trip over the bridge
		platformWidth : Ti.Platform.displayCaps.platformWidth,
		platformHeight : Ti.Platform.displayCaps.platformHeight,

		//we use these for default components
		button : {
			width : Ti.UI.SIZE,
			color : Alloy.CFG.AppColors_default.color_white,
			backgroundColor : Alloy.CFG.AppColors_default.color_button_bg,
			borderRadius : 2,
			font : {
				fontSize : Alloy.CFG.FontSize.F14,
				fontFamily : Alloy.CFG.FontFamily.Aller_Light,
				fontWeight : "normal"
			},
			height : 35
		},
		right_button : {
			height : Ti.UI.SIZE,
			width : Ti.UI.SIZE,
			font : {
				fontSize : Alloy.CFG.FontSize.F15,
				fontFamily : Alloy.CFG.FontFamily.Aller_Light,
				fontWeight : "normal"
			},
			color : Alloy.CFG.AppColors_default.color_white,
		},
		label : {
			width : Ti.UI.FILL,
			color : Alloy.CFG.AppColors_default.color_gray_text,
			font : {
				fontSize : Alloy.CFG.FontSize.F14,
				fontFamily : Alloy.CFG.FontFamily.Aller_Light,
				fontWeight : "bold"
			},
			textAlign : "center",
			height : Ti.UI.SIZE
		},
		label_emptyRecords : {
			width : Ti.UI.FILL,
			color : Alloy.CFG.AppColors_default.color_gray_text,
			font : {
				fontSize : Alloy.CFG.FontSize.F14,
				fontFamily : Alloy.CFG.FontFamily.Aller_Light,
				fontWeight : "bold"
			},
			textAlign : "center",
			height : Ti.UI.SIZE
		},
		Window : {
			fullscreen : false,
			navBarHidden : true,
			// backgroundColor : exports.theme.lightBlue,
			backgroundColor : "transparent"//Alloy.CFG.AppColors_default.color_winBackground
			// softInputMode : (Ti.UI.Android) ? Ti.UI.Android.SOFT_INPUT_ADJUST_RESIZE : ''
		},
		TableView : {
			separatorStyle : (OS_IOS) ? Ti.UI.iPhone.TableViewSeparatorStyle.NONE : 1
		},
		TableViewRow : {
			selectedBackgroundColor : exports.theme.darkBlue, //I know, this is dumb, but it's currently inconsistent x-platform
			backgroundSelectedColor : exports.theme.darkBlue,
			//height:110,
			className : 'tvRow'
		},
		TextField : {
			height : 55,
			borderStyle : Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
			color : '#000000'
		},
		TextArea : {
			borderRadius : 10,
			backgroundColor : '#efefef',
			//gradient will only work on iOS
			backgroundGradient : {
				type : 'linear',
				colors : [{
					color : '#efefef',
					position : 0.0
				}, {
					color : '#cdcdcd',
					position : 0.50
				}, {
					color : '#efefef',
					position : 1.0
				}]
			}
		}
	};
})();

