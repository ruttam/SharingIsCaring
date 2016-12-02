webpackHotUpdate(0,{

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	   value: true
	});
	
	var _createClass = function () {
	   function defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	         var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	      }
	   }return function (Constructor, protoProps, staticProps) {
	      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	   };
	}();
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(166);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactFacebookLogin = __webpack_require__(484);
	
	var _reactFacebookLogin2 = _interopRequireDefault(_reactFacebookLogin);
	
	function _interopRequireDefault(obj) {
	   return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	   if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	   }
	}
	
	function _possibleConstructorReturn(self, call) {
	   if (!self) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	   }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	   if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	   }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var responseFacebook = function responseFacebook(response) {
	   console.log(response);
	};
	
	var FacebookLoginButton = function (_React$Component) {
	   _inherits(FacebookLoginButton, _React$Component);
	
	   function FacebookLoginButton(props) {
	      _classCallCheck(this, FacebookLoginButton);
	
	      var _this = _possibleConstructorReturn(this, (FacebookLoginButton.__proto__ || Object.getPrototypeOf(FacebookLoginButton)).call(this, props));
	
	      _this.FB = props.fb;
	      _this.state = {
	         message: ""
	      };
	      return _this;
	   }
	
	   _createClass(FacebookLoginButton, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	         this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
	         this.FB.Event.subscribe('auth.statusChange', this.onStatusChange.bind(this));
	      }
	   }, {
	      key: 'onStatusChange',
	      value: function onStatusChange(response) {
	         console.log(response);
	         var self = this;
	
	         if (response.status === "connected") {
	            this.FB.api('/me', function (response) {
	               var message = "Welcome, " + response.name;
	               self.setState({
	                  message: message
	               });
	            });
	         }
	      }
	   }, {
	      key: 'onLogout',
	      value: function onLogout(response) {
	         this.setState({
	            message: ""
	         });
	      }
	   }, {
	      key: 'render',
	      value: function render() {
	         return _react2.default.createElement(_reactFacebookLogin2.default, {
	            appId: '1088597931155576',
	            autoLoad: true,
	            fields: 'name,email,picture',
	            callback: responseFacebook,
	            cssClass: 'my-facebook-button-class',
	            icon: 'fa-facebook'
	         }), document.getElementById('app');
	      }
	   }]);
	
	   return FacebookLoginButton;
	}(_react2.default.Component);
	
	var _default = FacebookLoginButton;
	exports.default = _default;
	;
	
	var _temp = function () {
	   if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	      return;
	   }
	
	   __REACT_HOT_LOADER__.register(responseFacebook, 'responseFacebook', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	
	   __REACT_HOT_LOADER__.register(FacebookLoginButton, 'FacebookLoginButton', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	
	   __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	}();

	;
	;

	var _temp2 = function () {
	   if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	      return;
	   }

	   __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_reactDom2, "_reactDom2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_reactFacebookLogin2, "_reactFacebookLogin2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(responseFacebook, "responseFacebook", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	}();

	;

/***/ },

/***/ 484:
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t(__webpack_require__(78)):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(6),l=n(s),p=o(4),u=n(p),f=o(3),d=n(f),b=function(e){function t(){var e,o,n,a;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.responseApi=function(e){window.FB.api("/me",{fields:n.props.fields},function(t){Object.assign(t,e),n.props.callback(t)})},n.checkLoginState=function(e){e.authResponse?n.responseApi(e.authResponse):n.props.callback&&n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"unknown"===e.status?window.FB.login(function(e){return n.checkLoginState(e)},!0):n.checkLoginState(e)},n.click=function(){var e=n.props,t=e.scope,o=e.appId,r=e.onClick,i=e.reAuthenticate;"function"==typeof r&&r();var a=!1;try{a=window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i)}catch(c){}var s={client_id:o,redirect_uri:window.location.href,state:"facebookdirect",scope:t};i&&(s.auth_type="reauthenticate"),a?window.location.href="//www.facebook.com/dialog/oauth?"+(0,d["default"])(s):window.FB.login(n.checkLoginState,{scope:t,auth_type:s.auth_type})},a=o,i(n,a)}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad,c=t.language,s=document.getElementById("fb-root");s||(s=document.createElement("div"),s.id="fb-root",document.body.appendChild(s)),window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),(a||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)},function(e,t,o){var n=e.getElementsByTagName(t)[0],r=n,i=n;e.getElementById(o)||(i=e.createElement(t),i.id=o,i.src="//connect.facebook.net/"+c+"/all.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props,t=e.cssClass,o=e.size,n=e.icon,r=e.textButton,i="string"==typeof n;return l["default"].createElement("span",null,i&&l["default"].createElement("link",{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l["default"].createElement("button",{className:t+" "+o,onClick:this.click},n&&i&&l["default"].createElement("i",{className:"fa "+n}),n&&!i&&n,r),l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:u["default"]}}))}}]),t}(l["default"].Component);b.propTypes={callback:s.PropTypes.func.isRequired,appId:s.PropTypes.string.isRequired,xfbml:s.PropTypes.bool,cookie:s.PropTypes.bool,reAuthenticate:s.PropTypes.bool,scope:s.PropTypes.string,textButton:s.PropTypes.string,typeButton:s.PropTypes.string,autoLoad:s.PropTypes.bool,size:s.PropTypes.string,fields:s.PropTypes.string,cssClass:s.PropTypes.string,version:s.PropTypes.string,icon:s.PropTypes.any,language:s.PropTypes.string,onClick:s.PropTypes.func},b.defaultProps={textButton:"Login with Facebook",typeButton:"button",scope:"public_profile,email",xfbml:!1,cookie:!1,reAuthenticate:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.3",language:"en_US"},t["default"]=b},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t["default"]=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t="";for(var o in e)""!==t&&(t+="&"),t+=o+"="+encodeURIComponent(e[o]);return t}},function(e,t,o){t=e.exports=o(5)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(t,o){t.exports=e}])});

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiLCJ3ZWJwYWNrOi8vLy4vfi9yZWFjdC1mYWNlYm9vay1sb2dpbi9kaXN0L2ZhY2Vib29rLWxvZ2luLmpzPzE5YzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxtQkFBbUIsMEJBQUMsVUFDeEI7WUFBUSxJQUNUO0FBRkQ7O0tBSU07bUNBQ0o7O2lDQUFZLE9BQU87NkJBQUE7OzZJQUVoQjs7YUFBSyxLQUFLLE1BQ1Y7YUFBSzttQkFDTztBQUFUO2NBRUw7Ozs7OzJDQUdLO2VBQUssR0FBRyxNQUFNLFVBQVUsZUFBZSxLQUFLLFNBQVMsS0FDckQ7ZUFBSyxHQUFHLE1BQU0sVUFBVSxxQkFBcUIsS0FBSyxlQUFlLEtBQ25FOzs7O3NDQUVjLFVBQ1o7a0JBQVEsSUFDUjtjQUFJLE9BRUo7O2NBQUksU0FBUyxXQUFXLGFBQ3JCO2tCQUFLLEdBQUcsSUFBSSxPQUFPLFVBQVMsVUFDekI7b0JBQUksVUFBVSxjQUFjLFNBQzVCO3FCQUFLOzRCQUdQO0FBRks7QUFHUjtBQUNIOzs7O2dDQUVRLFVBQ047ZUFBSztzQkFHUDtBQUZLOzs7O2dDQUtBOztvQkFHVjt1QkFDQTtxQkFDQTt1QkFDQTt1QkFDQTttQkFBSztBQUxMLFdBRFksR0FRYixTQUFTLGVBRUE7Ozs7O0dBOUN5QixnQkFBTTs7Z0JBaUR6Qjs7Ozs7Ozs7O2tDQXJEVDs7a0NBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JOLGdCQUFlLHdNQUE2TyxrQkFBa0IsbUJBQW1CLGNBQWMsNEJBQTRCLFlBQVksVUFBVSxpQkFBaUIsZ0VBQWdFLFNBQVMsK0JBQStCLGtCQUFrQixlQUFlLGlCQUFpQixhQUFhLGNBQWMsMEJBQTBCLGFBQWEsZ0JBQWdCLDhFQUE4RSxnQkFBZ0IsNEZBQTRGLHVEQUF1RCxnQkFBZ0IsMkhBQTJILDBDQUEwQyxhQUFhLG1EQUFtRCxzRUFBc0Usc0NBQXNDLFNBQVMsRUFBRSxpQkFBaUIsZ0JBQWdCLFlBQVksV0FBVyxLQUFLLFdBQVcsK0dBQStHLHVCQUF1Qix3Q0FBd0MsMkRBQTJELGFBQWEsWUFBWSxVQUFVLDBDQUEwQyxJQUFJLHNCQUFzQixzSEFBc0gscUJBQXFCLHNCQUFzQixhQUFhLHVDQUF1QyxFQUFFLCtCQUErQixpRkFBaUYsZ0JBQWdCLEVBQUUsc0NBQXNDLGlEQUFpRCw0QkFBNEIsMEJBQTBCLG9CQUFvQixpRUFBaUUsMEJBQTBCLFNBQVMsSUFBSSwwSEFBMEgsVUFBVSxPQUFPLDhFQUE4RSxtSkFBbUosOEJBQThCLEVBQUUsWUFBWSxvQkFBb0IseUNBQXlDLGtJQUFrSSwrR0FBK0csZ0JBQWdCLHVDQUF1Qyw2R0FBNkcsaUJBQWlCLDJDQUEyQyw4SEFBOEgsc0NBQXNDLEVBQUUsOEJBQThCLG9GQUFvRixvRkFBb0YsOEZBQThGLHVDQUF1QyxxQ0FBcUMsdUNBQXVDLGtCQUFrQixrREFBa0QseUJBQXlCLHFCQUFxQixJQUFJLEtBQUsseUJBQXlCLGFBQWEsMGJBQTBiLGlCQUFpQiwrTUFBK00sZ0JBQWdCLGlCQUFpQixhQUFhLGNBQWMsMEJBQTBCLGFBQWEsc0NBQXNDLFNBQVMsRUFBRSxrQkFBa0IsMEJBQTBCLGVBQWUsYUFBYSxzQ0FBc0MsU0FBUywyQkFBMkIsU0FBUyxrRUFBa0UsVUFBVSxpQkFBaUIscURBQXFELGlDQUFpQyxnQkFBZ0IsbUNBQW1DLFdBQVcsZUFBZSxxQkFBcUIsc0NBQXNDLHFCQUFxQix5QkFBeUIsaURBQWlELHlCQUF5QiwrQ0FBK0MsZ0VBQWdFLDBCQUEwQiw4REFBOEQsMkJBQTJCLCtEQUErRCwwQkFBMEIsZ0JBQWdCLHdCQUF3Qix3Q0FBd0MsaUJBQWlCLCtGQUErRixlQUFlLHFCQUFxQixTQUFTLDZCQUE2QixpQkFBaUIsY0FBYyxLQUFLLGNBQWMsNkJBQTZCLFNBQVMsZ0JBQWdCLGtCQUFrQixtQkFBbUIsc0NBQXNDLFlBQVksS0FBSyxjQUFjLEtBQUssaUJBQWlCLDhCQUE4QixRQUFRLFdBQVcsS0FBSyxXQUFXLGdHQUFnRyxJQUFJLGVBQWUsWUFBWSxHQUFHLEUiLCJmaWxlIjoiMC5hYzU0M2VlMTJjZTY1NzI0NGZkYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJztcclxuXHJcbmNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSAocmVzcG9uc2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn1cclxuXHJcbmNsYXNzIEZhY2Vib29rTG9naW5CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgdGhpcy5GQiA9IHByb3BzLmZiO1xyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgIH07XHJcbiAgfVxyXG5cclxuICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIHRoaXMub25TdGF0dXNDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSApO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAgICAgICAgICB0aGlzLkZCLmFwaSgnL21lJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5uYW1lO1xyXG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICA8RmFjZWJvb2tMb2dpblxyXG4gYXBwSWQ9XCIxMDg4NTk3OTMxMTU1NTc2XCJcclxuIGF1dG9Mb2FkPXt0cnVlfVxyXG4gZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfVxyXG4gY3NzQ2xhc3M9XCJteS1mYWNlYm9vay1idXR0b24tY2xhc3NcIlxyXG4gaWNvbj1cImZhLWZhY2Vib29rXCJcclxuLz4sXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4gICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va0xvZ2luQnV0dG9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzIiwiIWZ1bmN0aW9uKGUsdCl7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9dChyZXF1aXJlKFwicmVhY3RcIikpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoW1wicmVhY3RcIl0sdCk6XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0cy5GYWNlYm9va0xvZ2luPXQocmVxdWlyZShcInJlYWN0XCIpKTplLkZhY2Vib29rTG9naW49dChlLnJlYWN0KX0odGhpcyxmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7ZnVuY3Rpb24gdChuKXtpZihvW25dKXJldHVybiBvW25dLmV4cG9ydHM7dmFyIHI9b1tuXT17ZXhwb3J0czp7fSxpZDpuLGxvYWRlZDohMX07cmV0dXJuIGVbbl0uY2FsbChyLmV4cG9ydHMscixyLmV4cG9ydHMsdCksci5sb2FkZWQ9ITAsci5leHBvcnRzfXZhciBvPXt9O3JldHVybiB0Lm09ZSx0LmM9byx0LnA9XCJcIix0KDApfShbZnVuY3Rpb24oZSx0LG8pe2UuZXhwb3J0cz1vKDIpfSxmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fWZ1bmN0aW9uIHIoZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfWZ1bmN0aW9uIGkoZSx0KXtpZighZSl0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7cmV0dXJuIXR8fFwib2JqZWN0XCIhPXR5cGVvZiB0JiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB0P2U6dH1mdW5jdGlvbiBhKGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIrdHlwZW9mIHQpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLGVudW1lcmFibGU6ITEsd3JpdGFibGU6ITAsY29uZmlndXJhYmxlOiEwfX0pLHQmJihPYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mKGUsdCk6ZS5fX3Byb3RvX189dCl9T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUsdCl7Zm9yKHZhciBvPTA7bzx0Lmxlbmd0aDtvKyspe3ZhciBuPXRbb107bi5lbnVtZXJhYmxlPW4uZW51bWVyYWJsZXx8ITEsbi5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gbiYmKG4ud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLG4ua2V5LG4pfX1yZXR1cm4gZnVuY3Rpb24odCxvLG4pe3JldHVybiBvJiZlKHQucHJvdG90eXBlLG8pLG4mJmUodCxuKSx0fX0oKSxzPW8oNiksbD1uKHMpLHA9byg0KSx1PW4ocCksZj1vKDMpLGQ9bihmKSxiPWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQoKXt2YXIgZSxvLG4sYTtyKHRoaXMsdCk7Zm9yKHZhciBjPWFyZ3VtZW50cy5sZW5ndGgscz1BcnJheShjKSxsPTA7bDxjO2wrKylzW2xdPWFyZ3VtZW50c1tsXTtyZXR1cm4gbz1uPWkodGhpcywoZT10Ll9fcHJvdG9fX3x8T2JqZWN0LmdldFByb3RvdHlwZU9mKHQpKS5jYWxsLmFwcGx5KGUsW3RoaXNdLmNvbmNhdChzKSkpLG4ucmVzcG9uc2VBcGk9ZnVuY3Rpb24oZSl7d2luZG93LkZCLmFwaShcIi9tZVwiLHtmaWVsZHM6bi5wcm9wcy5maWVsZHN9LGZ1bmN0aW9uKHQpe09iamVjdC5hc3NpZ24odCxlKSxuLnByb3BzLmNhbGxiYWNrKHQpfSl9LG4uY2hlY2tMb2dpblN0YXRlPWZ1bmN0aW9uKGUpe2UuYXV0aFJlc3BvbnNlP24ucmVzcG9uc2VBcGkoZS5hdXRoUmVzcG9uc2UpOm4ucHJvcHMuY2FsbGJhY2smJm4ucHJvcHMuY2FsbGJhY2soe3N0YXR1czplLnN0YXR1c30pfSxuLmNoZWNrTG9naW5BZnRlclJlZnJlc2g9ZnVuY3Rpb24oZSl7XCJ1bmtub3duXCI9PT1lLnN0YXR1cz93aW5kb3cuRkIubG9naW4oZnVuY3Rpb24oZSl7cmV0dXJuIG4uY2hlY2tMb2dpblN0YXRlKGUpfSwhMCk6bi5jaGVja0xvZ2luU3RhdGUoZSl9LG4uY2xpY2s9ZnVuY3Rpb24oKXt2YXIgZT1uLnByb3BzLHQ9ZS5zY29wZSxvPWUuYXBwSWQscj1lLm9uQ2xpY2ssaT1lLnJlQXV0aGVudGljYXRlO1wiZnVuY3Rpb25cIj09dHlwZW9mIHImJnIoKTt2YXIgYT0hMTt0cnl7YT13aW5kb3cubmF2aWdhdG9yJiZ3aW5kb3cubmF2aWdhdG9yLnN0YW5kYWxvbmV8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goXCJDcmlPU1wiKXx8bmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvbW9iaWxlL2kpfWNhdGNoKGMpe312YXIgcz17Y2xpZW50X2lkOm8scmVkaXJlY3RfdXJpOndpbmRvdy5sb2NhdGlvbi5ocmVmLHN0YXRlOlwiZmFjZWJvb2tkaXJlY3RcIixzY29wZTp0fTtpJiYocy5hdXRoX3R5cGU9XCJyZWF1dGhlbnRpY2F0ZVwiKSxhP3dpbmRvdy5sb2NhdGlvbi5ocmVmPVwiLy93d3cuZmFjZWJvb2suY29tL2RpYWxvZy9vYXV0aD9cIisoMCxkW1wiZGVmYXVsdFwiXSkocyk6d2luZG93LkZCLmxvZ2luKG4uY2hlY2tMb2dpblN0YXRlLHtzY29wZTp0LGF1dGhfdHlwZTpzLmF1dGhfdHlwZX0pfSxhPW8saShuLGEpfXJldHVybiBhKHQsZSksYyh0LFt7a2V5OlwiY29tcG9uZW50RGlkTW91bnRcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMsdD10aGlzLnByb3BzLG89dC5hcHBJZCxuPXQueGZibWwscj10LmNvb2tpZSxpPXQudmVyc2lvbixhPXQuYXV0b0xvYWQsYz10Lmxhbmd1YWdlLHM9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmYi1yb290XCIpO3N8fChzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikscy5pZD1cImZiLXJvb3RcIixkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpKSx3aW5kb3cuZmJBc3luY0luaXQ9ZnVuY3Rpb24oKXt3aW5kb3cuRkIuaW5pdCh7dmVyc2lvbjpcInZcIitpLGFwcElkOm8seGZibWw6bixjb29raWU6cn0pLChhfHx3aW5kb3cubG9jYXRpb24uc2VhcmNoLmluY2x1ZGVzKFwiZmFjZWJvb2tkaXJlY3RcIikpJiZ3aW5kb3cuRkIuZ2V0TG9naW5TdGF0dXMoZS5jaGVja0xvZ2luQWZ0ZXJSZWZyZXNoKX0sZnVuY3Rpb24oZSx0LG8pe3ZhciBuPWUuZ2V0RWxlbWVudHNCeVRhZ05hbWUodClbMF0scj1uLGk9bjtlLmdldEVsZW1lbnRCeUlkKG8pfHwoaT1lLmNyZWF0ZUVsZW1lbnQodCksaS5pZD1vLGkuc3JjPVwiLy9jb25uZWN0LmZhY2Vib29rLm5ldC9cIitjK1wiL2FsbC5qc1wiLHIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoaSxyKSl9KGRvY3VtZW50LFwic2NyaXB0XCIsXCJmYWNlYm9vay1qc3Nka1wiKX19LHtrZXk6XCJyZW5kZXJcIix2YWx1ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXMucHJvcHMsdD1lLmNzc0NsYXNzLG89ZS5zaXplLG49ZS5pY29uLHI9ZS50ZXh0QnV0dG9uLGk9XCJzdHJpbmdcIj09dHlwZW9mIG47cmV0dXJuIGxbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsbnVsbCxpJiZsW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwibGlua1wiLHtyZWw6XCJzdHlsZXNoZWV0XCIsaHJlZjpcIi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNS4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wifSksbFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHtjbGFzc05hbWU6dCtcIiBcIitvLG9uQ2xpY2s6dGhpcy5jbGlja30sbiYmaSYmbFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImlcIix7Y2xhc3NOYW1lOlwiZmEgXCIrbn0pLG4mJiFpJiZuLHIpLGxbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiLHtkYW5nZXJvdXNseVNldElubmVySFRNTDp7X19odG1sOnVbXCJkZWZhdWx0XCJdfX0pKX19XSksdH0obFtcImRlZmF1bHRcIl0uQ29tcG9uZW50KTtiLnByb3BUeXBlcz17Y2FsbGJhY2s6cy5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLGFwcElkOnMuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLHhmYm1sOnMuUHJvcFR5cGVzLmJvb2wsY29va2llOnMuUHJvcFR5cGVzLmJvb2wscmVBdXRoZW50aWNhdGU6cy5Qcm9wVHlwZXMuYm9vbCxzY29wZTpzLlByb3BUeXBlcy5zdHJpbmcsdGV4dEJ1dHRvbjpzLlByb3BUeXBlcy5zdHJpbmcsdHlwZUJ1dHRvbjpzLlByb3BUeXBlcy5zdHJpbmcsYXV0b0xvYWQ6cy5Qcm9wVHlwZXMuYm9vbCxzaXplOnMuUHJvcFR5cGVzLnN0cmluZyxmaWVsZHM6cy5Qcm9wVHlwZXMuc3RyaW5nLGNzc0NsYXNzOnMuUHJvcFR5cGVzLnN0cmluZyx2ZXJzaW9uOnMuUHJvcFR5cGVzLnN0cmluZyxpY29uOnMuUHJvcFR5cGVzLmFueSxsYW5ndWFnZTpzLlByb3BUeXBlcy5zdHJpbmcsb25DbGljazpzLlByb3BUeXBlcy5mdW5jfSxiLmRlZmF1bHRQcm9wcz17dGV4dEJ1dHRvbjpcIkxvZ2luIHdpdGggRmFjZWJvb2tcIix0eXBlQnV0dG9uOlwiYnV0dG9uXCIsc2NvcGU6XCJwdWJsaWNfcHJvZmlsZSxlbWFpbFwiLHhmYm1sOiExLGNvb2tpZTohMSxyZUF1dGhlbnRpY2F0ZTohMSxzaXplOlwibWV0cm9cIixmaWVsZHM6XCJuYW1lXCIsY3NzQ2xhc3M6XCJrZXAtbG9naW4tZmFjZWJvb2tcIix2ZXJzaW9uOlwiMi4zXCIsbGFuZ3VhZ2U6XCJlbl9VU1wifSx0W1wiZGVmYXVsdFwiXT1ifSxmdW5jdGlvbihlLHQsbyl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e1wiZGVmYXVsdFwiOmV9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciByPW8oMSksaT1uKHIpO3RbXCJkZWZhdWx0XCJdPWlbXCJkZWZhdWx0XCJdfSxmdW5jdGlvbihlLHQpe1widXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pLHRbXCJkZWZhdWx0XCJdPWZ1bmN0aW9uKGUpe3ZhciB0PVwiXCI7Zm9yKHZhciBvIGluIGUpXCJcIiE9PXQmJih0Kz1cIiZcIiksdCs9bytcIj1cIitlbmNvZGVVUklDb21wb25lbnQoZVtvXSk7cmV0dXJuIHR9fSxmdW5jdGlvbihlLHQsbyl7dD1lLmV4cG9ydHM9byg1KSgpLHQucHVzaChbZS5pZCxcIi5rZXAtbG9naW4tZmFjZWJvb2t7Zm9udC1mYW1pbHk6SGVsdmV0aWNhLHNhbnMtc2VyaWY7Zm9udC13ZWlnaHQ6NzAwOy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7Y29sb3I6I2ZmZjtjdXJzb3I6cG9pbnRlcjtkaXNwbGF5OmlubGluZS1ibG9jaztmb250LXNpemU6Y2FsYyguMjc1NDh2dyArIDEyLjcxMDc0cHgpO3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTt0cmFuc2l0aW9uOmJhY2tncm91bmQtY29sb3IgLjNzLGJvcmRlci1jb2xvciAuM3M7YmFja2dyb3VuZC1jb2xvcjojNGM2OWJhO2JvcmRlcjpjYWxjKC4wNjg4N3Z3ICsgLjY3NzY5cHgpIHNvbGlkICM0YzY5YmE7cGFkZGluZzpjYWxjKC4zNDQzNXZ3ICsgMTMuMzg4NDNweCkgY2FsYyguMzQ0MzV2dyArIDE4LjM4ODQzcHgpfS5rZXAtbG9naW4tZmFjZWJvb2suc21hbGx7cGFkZGluZzpjYWxjKC4zNDQzNXZ3ICsgMy4zODg0M3B4KSBjYWxjKC4zNDQzNXZ3ICsgOC4zODg0M3B4KX0ua2VwLWxvZ2luLWZhY2Vib29rLm1lZGl1bXtwYWRkaW5nOmNhbGMoLjM0NDM1dncgKyA4LjM4ODQzcHgpIGNhbGMoLjM0NDM1dncgKyAxMy4zODg0M3B4KX0ua2VwLWxvZ2luLWZhY2Vib29rLm1ldHJve2JvcmRlci1yYWRpdXM6MH0ua2VwLWxvZ2luLWZhY2Vib29rIC5mYXttYXJnaW4tcmlnaHQ6Y2FsYyguMzQ0MzV2dyArIDMuMzg4NDNweCl9XCIsXCJcIl0pLHQubG9jYWxzPXtcImtlcC1sb2dpbi1mYWNlYm9va1wiOlwia2VwLWxvZ2luLWZhY2Vib29rXCIsc21hbGw6XCJzbWFsbFwiLG1lZGl1bTpcIm1lZGl1bVwiLG1ldHJvOlwibWV0cm9cIixmYTpcImZhXCJ9fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe3ZhciBlPVtdO3JldHVybiBlLnRvU3RyaW5nPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PHRoaXMubGVuZ3RoO3QrKyl7dmFyIG89dGhpc1t0XTtvWzJdP2UucHVzaChcIkBtZWRpYSBcIitvWzJdK1wie1wiK29bMV0rXCJ9XCIpOmUucHVzaChvWzFdKX1yZXR1cm4gZS5qb2luKFwiXCIpfSxlLmk9ZnVuY3Rpb24odCxvKXtcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9W1tudWxsLHQsXCJcIl1dKTtmb3IodmFyIG49e30scj0wO3I8dGhpcy5sZW5ndGg7cisrKXt2YXIgaT10aGlzW3JdWzBdO1wibnVtYmVyXCI9PXR5cGVvZiBpJiYobltpXT0hMCl9Zm9yKHI9MDtyPHQubGVuZ3RoO3IrKyl7dmFyIGE9dFtyXTtcIm51bWJlclwiPT10eXBlb2YgYVswXSYmblthWzBdXXx8KG8mJiFhWzJdP2FbMl09bzpvJiYoYVsyXT1cIihcIithWzJdK1wiKSBhbmQgKFwiK28rXCIpXCIpLGUucHVzaChhKSl9fSxlfX0sZnVuY3Rpb24odCxvKXt0LmV4cG9ydHM9ZX1dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWFjdC1mYWNlYm9vay1sb2dpbi9kaXN0L2ZhY2Vib29rLWxvZ2luLmpzXG4vLyBtb2R1bGUgaWQgPSA0ODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==