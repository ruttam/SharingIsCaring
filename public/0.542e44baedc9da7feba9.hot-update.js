webpackHotUpdate(0,{

/***/ 361:
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
	
	var _reactRedux = __webpack_require__(318);
	
	var _EmailLogin = __webpack_require__(362);
	
	var _EmailLogin2 = _interopRequireDefault(_EmailLogin);
	
	var _FacebookLoginButton = __webpack_require__(651);
	
	var _FacebookLoginButton2 = _interopRequireDefault(_FacebookLoginButton);
	
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
	
	var divStyle = {
	  position: "absolute",
	  top: "30%",
	  left: "30%"
	};
	
	var Login = function (_React$Component) {
	  _inherits(Login, _React$Component);
	
	  function Login() {
	    _classCallCheck(this, Login);
	
	    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	  }
	
	  _createClass(Login, [{
	    key: 'render',
	    value: function render() {
	      var isAuthenticated = this.props.auth.isAuthenticated;
	
	      var userLinks = _react2.default.createElement('ul', { className: 'nav navbar-nav' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Logout')));
	      return _react2.default.createElement('div', { style: divStyle }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_EmailLogin2.default, null), _react2.default.createElement('div', { 'class': 'fb' })));
	    }
	  }]);
	
	  return Login;
	}(_react2.default.Component);
	
	Login.propTypes = {
	  auth: _react2.default.PropTypes.object.isRequired
	};
	
	function mapStateToProps(state) {
	  return {
	    auth: state.auth
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    actions: bindActionCreators(LoginActions, dispatch),
	    routerActions: bindActionCreators({ pushState: pushState }, dispatch)
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(Login);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js');
	
	  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js');
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js');
	
	  __REACT_HOT_LOADER__.register(Login, 'Login', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_EmailLogin2, "_EmailLogin2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_FacebookLoginButton2, "_FacebookLoginButton2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(Login, "Login", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");
	}();

	;

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(108);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactFacebookLogin = __webpack_require__(695);
	
	var _reactFacebookLogin2 = _interopRequireDefault(_reactFacebookLogin);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var responseFacebook = function responseFacebook(response) {
	  console.log(response);
	};
	
	_reactDom2.default.render(_react2.default.createElement(_reactFacebookLogin2.default, {
	  appId: '1841589546055063',
	  autoLoad: true,
	  fields: 'name,email,picture',
	  callback: responseFacebook,
	  cssClass: 'my-facebook-button-class',
	  icon: 'fa-facebook'
	}), document.getElementById('fb'));
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(responseFacebook, 'responseFacebook', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_react2, '_react2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');

	  __REACT_HOT_LOADER__.register(_reactDom2, '_reactDom2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');

	  __REACT_HOT_LOADER__.register(_reactFacebookLogin2, '_reactFacebookLogin2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');

	  __REACT_HOT_LOADER__.register(responseFacebook, 'responseFacebook', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	}();

	;

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t(__webpack_require__(78)):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.FacebookLogin=t(require("react")):e.FacebookLogin=t(e.react)}(this,function(e){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),s=o(6),l=n(s),p=o(4),u=n(p),f=o(3),d=n(f),b=function(e){function t(){var e,o,n,a;r(this,t);for(var c=arguments.length,s=Array(c),l=0;l<c;l++)s[l]=arguments[l];return o=n=i(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.responseApi=function(e){window.FB.api("/me",{fields:n.props.fields},function(t){Object.assign(t,e),n.props.callback(t)})},n.checkLoginState=function(e){e.authResponse?n.responseApi(e.authResponse):n.props.callback&&n.props.callback({status:e.status})},n.checkLoginAfterRefresh=function(e){"unknown"===e.status?window.FB.login(function(e){return n.checkLoginState(e)},!0):n.checkLoginState(e)},n.click=function(){var e=n.props,t=e.scope,o=e.appId,r=e.onClick,i=e.reAuthenticate;"function"==typeof r&&r();var a=!1;try{a=window.navigator&&window.navigator.standalone||navigator.userAgent.match("CriOS")||navigator.userAgent.match(/mobile/i)}catch(c){}var s={client_id:o,redirect_uri:window.location.href,state:"facebookdirect",scope:t};i&&(s.auth_type="reauthenticate"),a?window.location.href="//www.facebook.com/dialog/oauth?"+(0,d["default"])(s):window.FB.login(n.checkLoginState,{scope:t,auth_type:s.auth_type})},a=o,i(n,a)}return a(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,o=t.appId,n=t.xfbml,r=t.cookie,i=t.version,a=t.autoLoad,c=t.language,s=document.getElementById("fb-root");s||(s=document.createElement("div"),s.id="fb-root",document.body.appendChild(s)),window.fbAsyncInit=function(){window.FB.init({version:"v"+i,appId:o,xfbml:n,cookie:r}),(a||window.location.search.includes("facebookdirect"))&&window.FB.getLoginStatus(e.checkLoginAfterRefresh)},function(e,t,o){var n=e.getElementsByTagName(t)[0],r=n,i=n;e.getElementById(o)||(i=e.createElement(t),i.id=o,i.src="//connect.facebook.net/"+c+"/all.js",r.parentNode.insertBefore(i,r))}(document,"script","facebook-jssdk")}},{key:"render",value:function(){var e=this.props,t=e.cssClass,o=e.size,n=e.icon,r=e.textButton,i="string"==typeof n;return l["default"].createElement("span",null,i&&l["default"].createElement("link",{rel:"stylesheet",href:"//maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),l["default"].createElement("button",{className:t+" "+o,onClick:this.click},n&&i&&l["default"].createElement("i",{className:"fa "+n}),n&&!i&&n,r),l["default"].createElement("style",{dangerouslySetInnerHTML:{__html:u["default"]}}))}}]),t}(l["default"].Component);b.propTypes={callback:s.PropTypes.func.isRequired,appId:s.PropTypes.string.isRequired,xfbml:s.PropTypes.bool,cookie:s.PropTypes.bool,reAuthenticate:s.PropTypes.bool,scope:s.PropTypes.string,textButton:s.PropTypes.string,typeButton:s.PropTypes.string,autoLoad:s.PropTypes.bool,size:s.PropTypes.string,fields:s.PropTypes.string,cssClass:s.PropTypes.string,version:s.PropTypes.string,icon:s.PropTypes.any,language:s.PropTypes.string,onClick:s.PropTypes.func},b.defaultProps={textButton:"Login with Facebook",typeButton:"button",scope:"public_profile,email",xfbml:!1,cookie:!1,reAuthenticate:!1,size:"metro",fields:"name",cssClass:"kep-login-facebook",version:"2.3",language:"en_US"},t["default"]=b},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(1),i=n(r);t["default"]=i["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){var t="";for(var o in e)""!==t&&(t+="&"),t+=o+"="+encodeURIComponent(e[o]);return t}},function(e,t,o){t=e.exports=o(5)(),t.push([e.id,".kep-login-facebook{font-family:Helvetica,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;color:#fff;cursor:pointer;display:inline-block;font-size:calc(.27548vw + 12.71074px);text-decoration:none;text-transform:uppercase;transition:background-color .3s,border-color .3s;background-color:#4c69ba;border:calc(.06887vw + .67769px) solid #4c69ba;padding:calc(.34435vw + 13.38843px) calc(.34435vw + 18.38843px)}.kep-login-facebook.small{padding:calc(.34435vw + 3.38843px) calc(.34435vw + 8.38843px)}.kep-login-facebook.medium{padding:calc(.34435vw + 8.38843px) calc(.34435vw + 13.38843px)}.kep-login-facebook.metro{border-radius:0}.kep-login-facebook .fa{margin-right:calc(.34435vw + 3.38843px)}",""]),t.locals={"kep-login-facebook":"kep-login-facebook",small:"small",medium:"medium",metro:"metro",fa:"fa"}},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var o=this[t];o[2]?e.push("@media "+o[2]+"{"+o[1]+"}"):e.push(o[1])}return e.join("")},e.i=function(t,o){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(n[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&n[a[0]]||(o&&!a[2]?a[2]=o:o&&(a[2]="("+a[2]+") and ("+o+")"),e.push(a))}},e}},function(t,o){t.exports=e}])});

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qcz8yODYyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24uanM/MDM1ZiIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWZhY2Vib29rLWxvZ2luL2Rpc3QvZmFjZWJvb2stbG9naW4uanM/MTljMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxLQUFNO2FBRUo7UUFDQTtTQUFNO0FBRk47O0tBS0k7Ozs7Ozs7Ozs7OzhCQUdLO1dBQ0Esa0JBQW1CLEtBQUssTUFBTSxLQUNyQzs7V0FBTSxZQUNKLHNDQUFJLFdBQ0Ysd0RBQUksMkNBQUcsTUFBSyxPQUdoQjtjQUNFLHVDQUFLLE9BQ0wsbURBQUssV0FDSCw2REFDQSw4Q0FBSyxTQUlWOzs7OztHQWxCaUIsZ0JBQU07O0FBcUIxQixPQUFNO1NBQ0UsZ0JBQU0sVUFBVSxPQUFPO0FBQTdCOztBQUdGLFVBQVMsZ0JBQWdCLE9BQ3ZCOztXQUNRLE1BRVQ7QUFGRzs7O0FBSUosVUFBUyxtQkFBbUIsVUFDMUI7O2NBQ1csbUJBQW1CLGNBQzVCO29CQUFlLG1CQUFtQixFQUFDLFdBQUQsYUFFckM7QUFIRzs7O2dCQUtXLHlCQUFRLGlCQUFpQjs7Ozs7Ozs7OztpQ0FiL0I7O2lDQU1BOztpQ0FyQ0g7O2lDQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0FBRUEsS0FBTSxtQkFBbUIsMEJBQUMsVUFDeEI7V0FBUSxJQUNUO0FBRkQ7O0FBSUEsb0JBQVM7VUFHTDthQUNBO1dBQ0E7YUFDQTthQUNBO1NBQUs7QUFMTCxFQURGLEdBUUEsU0FBUyxlQUFlOzs7Ozs7OztpQ0FicEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKTixnQkFBZSx3TUFBNk8sa0JBQWtCLG1CQUFtQixjQUFjLDRCQUE0QixZQUFZLFVBQVUsaUJBQWlCLGdFQUFnRSxTQUFTLCtCQUErQixrQkFBa0IsZUFBZSxpQkFBaUIsYUFBYSxjQUFjLDBCQUEwQixhQUFhLGdCQUFnQiw4RUFBOEUsZ0JBQWdCLDRGQUE0Rix1REFBdUQsZ0JBQWdCLDJIQUEySCwwQ0FBMEMsYUFBYSxtREFBbUQsc0VBQXNFLHNDQUFzQyxTQUFTLEVBQUUsaUJBQWlCLGdCQUFnQixZQUFZLFdBQVcsS0FBSyxXQUFXLCtHQUErRyx1QkFBdUIsd0NBQXdDLDJEQUEyRCxhQUFhLFlBQVksVUFBVSwwQ0FBMEMsSUFBSSxzQkFBc0Isc0hBQXNILHFCQUFxQixzQkFBc0IsYUFBYSx1Q0FBdUMsRUFBRSwrQkFBK0IsaUZBQWlGLGdCQUFnQixFQUFFLHNDQUFzQyxpREFBaUQsNEJBQTRCLDBCQUEwQixvQkFBb0IsaUVBQWlFLDBCQUEwQixTQUFTLElBQUksMEhBQTBILFVBQVUsT0FBTyw4RUFBOEUsbUpBQW1KLDhCQUE4QixFQUFFLFlBQVksb0JBQW9CLHlDQUF5QyxrSUFBa0ksK0dBQStHLGdCQUFnQix1Q0FBdUMsNkdBQTZHLGlCQUFpQiwyQ0FBMkMsOEhBQThILHNDQUFzQyxFQUFFLDhCQUE4QixvRkFBb0Ysb0ZBQW9GLDhGQUE4Rix1Q0FBdUMscUNBQXFDLHVDQUF1QyxrQkFBa0Isa0RBQWtELHlCQUF5QixxQkFBcUIsSUFBSSxLQUFLLHlCQUF5QixhQUFhLDBiQUEwYixpQkFBaUIsK01BQStNLGdCQUFnQixpQkFBaUIsYUFBYSxjQUFjLDBCQUEwQixhQUFhLHNDQUFzQyxTQUFTLEVBQUUsa0JBQWtCLDBCQUEwQixlQUFlLGFBQWEsc0NBQXNDLFNBQVMsMkJBQTJCLFNBQVMsa0VBQWtFLFVBQVUsaUJBQWlCLHFEQUFxRCxpQ0FBaUMsZ0JBQWdCLG1DQUFtQyxXQUFXLGVBQWUscUJBQXFCLHNDQUFzQyxxQkFBcUIseUJBQXlCLGlEQUFpRCx5QkFBeUIsK0NBQStDLGdFQUFnRSwwQkFBMEIsOERBQThELDJCQUEyQiwrREFBK0QsMEJBQTBCLGdCQUFnQix3QkFBd0Isd0NBQXdDLGlCQUFpQiwrRkFBK0YsZUFBZSxxQkFBcUIsU0FBUyw2QkFBNkIsaUJBQWlCLGNBQWMsS0FBSyxjQUFjLDZCQUE2QixTQUFTLGdCQUFnQixrQkFBa0IsbUJBQW1CLHNDQUFzQyxZQUFZLEtBQUssY0FBYyxLQUFLLGlCQUFpQiw4QkFBOEIsUUFBUSxXQUFXLEtBQUssV0FBVyxnR0FBZ0csSUFBSSxlQUFlLFlBQVksR0FBRyxFIiwiZmlsZSI6IjAuNTQyZTQ0YmFlZGM5ZGE3ZmViYTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgRW1haWxMb2dpbiBmcm9tICcuL0VtYWlsTG9naW4uanMnO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbkJ1dHRvbiBmcm9tICcuL0ZhY2Vib29rTG9naW5CdXR0b24uanMnO1xyXG5cclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiLFxyXG4gIGxlZnQ6IFwiMzAlXCJcclxufVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2lzQXV0aGVudGljYXRlZH0gPSB0aGlzLnByb3BzLmF1dGg7XHJcbiAgICBjb25zdCB1c2VyTGlua3MgPSAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxvZ291dDwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17ZGl2U3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxFbWFpbExvZ2luIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZiXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTG9naW4ucHJvcFR5cGVzID0ge1xyXG4gIGF1dGg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIHJldHVybiB7XHJcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhMb2dpbkFjdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIHJvdXRlckFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7cHVzaFN0YXRlfSwgZGlzcGF0Y2gpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbic7XHJcblxyXG5jb25zdCByZXNwb25zZUZhY2Vib29rID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG59XHJcblxyXG5SZWFjdERPTS5yZW5kZXIoXHJcbiAgPEZhY2Vib29rTG9naW5cclxuICAgIGFwcElkPVwiMTg0MTU4OTU0NjA1NTA2M1wiXHJcbiAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICBjYWxsYmFjaz17cmVzcG9uc2VGYWNlYm9va31cclxuICAgIGNzc0NsYXNzPVwibXktZmFjZWJvb2stYnV0dG9uLWNsYXNzXCJcclxuICAgIGljb249XCJmYS1mYWNlYm9va1wiXHJcbiAgLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZiJylcclxuKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQocmVxdWlyZShcInJlYWN0XCIpKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcInJlYWN0XCJdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuRmFjZWJvb2tMb2dpbj10KHJlcXVpcmUoXCJyZWFjdFwiKSk6ZS5GYWNlYm9va0xvZ2luPXQoZS5yZWFjdCl9KHRoaXMsZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobil7aWYob1tuXSlyZXR1cm4gb1tuXS5leHBvcnRzO3ZhciByPW9bbl09e2V4cG9ydHM6e30saWQ6bixsb2FkZWQ6ITF9O3JldHVybiBlW25dLmNhbGwoci5leHBvcnRzLHIsci5leHBvcnRzLHQpLHIubG9hZGVkPSEwLHIuZXhwb3J0c312YXIgbz17fTtyZXR1cm4gdC5tPWUsdC5jPW8sdC5wPVwiXCIsdCgwKX0oW2Z1bmN0aW9uKGUsdCxvKXtlLmV4cG9ydHM9bygyKX0sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1mdW5jdGlvbiByKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBpKGUsdCl7aWYoIWUpdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO3JldHVybiF0fHxcIm9iamVjdFwiIT10eXBlb2YgdCYmXCJmdW5jdGlvblwiIT10eXBlb2YgdD9lOnR9ZnVuY3Rpb24gYShlLHQpe2lmKFwiZnVuY3Rpb25cIiE9dHlwZW9mIHQmJm51bGwhPT10KXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvbiwgbm90IFwiK3R5cGVvZiB0KTtlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHQmJnQucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6ZSxlbnVtZXJhYmxlOiExLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSx0JiYoT2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5zZXRQcm90b3R5cGVPZihlLHQpOmUuX19wcm90b19fPXQpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlLHQpe2Zvcih2YXIgbz0wO288dC5sZW5ndGg7bysrKXt2YXIgbj10W29dO24uZW51bWVyYWJsZT1uLmVudW1lcmFibGV8fCExLG4uY29uZmlndXJhYmxlPSEwLFwidmFsdWVcImluIG4mJihuLndyaXRhYmxlPSEwKSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxuLmtleSxuKX19cmV0dXJuIGZ1bmN0aW9uKHQsbyxuKXtyZXR1cm4gbyYmZSh0LnByb3RvdHlwZSxvKSxuJiZlKHQsbiksdH19KCkscz1vKDYpLGw9bihzKSxwPW8oNCksdT1uKHApLGY9bygzKSxkPW4oZiksYj1mdW5jdGlvbihlKXtmdW5jdGlvbiB0KCl7dmFyIGUsbyxuLGE7cih0aGlzLHQpO2Zvcih2YXIgYz1hcmd1bWVudHMubGVuZ3RoLHM9QXJyYXkoYyksbD0wO2w8YztsKyspc1tsXT1hcmd1bWVudHNbbF07cmV0dXJuIG89bj1pKHRoaXMsKGU9dC5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZih0KSkuY2FsbC5hcHBseShlLFt0aGlzXS5jb25jYXQocykpKSxuLnJlc3BvbnNlQXBpPWZ1bmN0aW9uKGUpe3dpbmRvdy5GQi5hcGkoXCIvbWVcIix7ZmllbGRzOm4ucHJvcHMuZmllbGRzfSxmdW5jdGlvbih0KXtPYmplY3QuYXNzaWduKHQsZSksbi5wcm9wcy5jYWxsYmFjayh0KX0pfSxuLmNoZWNrTG9naW5TdGF0ZT1mdW5jdGlvbihlKXtlLmF1dGhSZXNwb25zZT9uLnJlc3BvbnNlQXBpKGUuYXV0aFJlc3BvbnNlKTpuLnByb3BzLmNhbGxiYWNrJiZuLnByb3BzLmNhbGxiYWNrKHtzdGF0dXM6ZS5zdGF0dXN9KX0sbi5jaGVja0xvZ2luQWZ0ZXJSZWZyZXNoPWZ1bmN0aW9uKGUpe1widW5rbm93blwiPT09ZS5zdGF0dXM/d2luZG93LkZCLmxvZ2luKGZ1bmN0aW9uKGUpe3JldHVybiBuLmNoZWNrTG9naW5TdGF0ZShlKX0sITApOm4uY2hlY2tMb2dpblN0YXRlKGUpfSxuLmNsaWNrPWZ1bmN0aW9uKCl7dmFyIGU9bi5wcm9wcyx0PWUuc2NvcGUsbz1lLmFwcElkLHI9ZS5vbkNsaWNrLGk9ZS5yZUF1dGhlbnRpY2F0ZTtcImZ1bmN0aW9uXCI9PXR5cGVvZiByJiZyKCk7dmFyIGE9ITE7dHJ5e2E9d2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5zdGFuZGFsb25lfHxuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKFwiQ3JpT1NcIil8fG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL21vYmlsZS9pKX1jYXRjaChjKXt9dmFyIHM9e2NsaWVudF9pZDpvLHJlZGlyZWN0X3VyaTp3aW5kb3cubG9jYXRpb24uaHJlZixzdGF0ZTpcImZhY2Vib29rZGlyZWN0XCIsc2NvcGU6dH07aSYmKHMuYXV0aF90eXBlPVwicmVhdXRoZW50aWNhdGVcIiksYT93aW5kb3cubG9jYXRpb24uaHJlZj1cIi8vd3d3LmZhY2Vib29rLmNvbS9kaWFsb2cvb2F1dGg/XCIrKDAsZFtcImRlZmF1bHRcIl0pKHMpOndpbmRvdy5GQi5sb2dpbihuLmNoZWNrTG9naW5TdGF0ZSx7c2NvcGU6dCxhdXRoX3R5cGU6cy5hdXRoX3R5cGV9KX0sYT1vLGkobixhKX1yZXR1cm4gYSh0LGUpLGModCxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9dGhpcy5wcm9wcyxvPXQuYXBwSWQsbj10LnhmYm1sLHI9dC5jb29raWUsaT10LnZlcnNpb24sYT10LmF1dG9Mb2FkLGM9dC5sYW5ndWFnZSxzPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmItcm9vdFwiKTtzfHwocz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHMuaWQ9XCJmYi1yb290XCIsZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzKSksd2luZG93LmZiQXN5bmNJbml0PWZ1bmN0aW9uKCl7d2luZG93LkZCLmluaXQoe3ZlcnNpb246XCJ2XCIraSxhcHBJZDpvLHhmYm1sOm4sY29va2llOnJ9KSwoYXx8d2luZG93LmxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImZhY2Vib29rZGlyZWN0XCIpKSYmd2luZG93LkZCLmdldExvZ2luU3RhdHVzKGUuY2hlY2tMb2dpbkFmdGVyUmVmcmVzaCl9LGZ1bmN0aW9uKGUsdCxvKXt2YXIgbj1lLmdldEVsZW1lbnRzQnlUYWdOYW1lKHQpWzBdLHI9bixpPW47ZS5nZXRFbGVtZW50QnlJZChvKXx8KGk9ZS5jcmVhdGVFbGVtZW50KHQpLGkuaWQ9byxpLnNyYz1cIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvXCIrYytcIi9hbGwuanNcIixyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGkscikpfShkb2N1bWVudCxcInNjcmlwdFwiLFwiZmFjZWJvb2stanNzZGtcIil9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnByb3BzLHQ9ZS5jc3NDbGFzcyxvPWUuc2l6ZSxuPWUuaWNvbixyPWUudGV4dEJ1dHRvbixpPVwic3RyaW5nXCI9PXR5cGVvZiBuO3JldHVybiBsW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3BhblwiLG51bGwsaSYmbFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcImxpbmtcIix7cmVsOlwic3R5bGVzaGVldFwiLGhyZWY6XCIvL21heGNkbi5ib290c3RyYXBjZG4uY29tL2ZvbnQtYXdlc29tZS80LjUuMC9jc3MvZm9udC1hd2Vzb21lLm1pbi5jc3NcIn0pLGxbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIix7Y2xhc3NOYW1lOnQrXCIgXCIrbyxvbkNsaWNrOnRoaXMuY2xpY2t9LG4mJmkmJmxbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJpXCIse2NsYXNzTmFtZTpcImZhIFwiK259KSxuJiYhaSYmbixyKSxsW1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDp1W1wiZGVmYXVsdFwiXX19KSl9fV0pLHR9KGxbXCJkZWZhdWx0XCJdLkNvbXBvbmVudCk7Yi5wcm9wVHlwZXM9e2NhbGxiYWNrOnMuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxhcHBJZDpzLlByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCx4ZmJtbDpzLlByb3BUeXBlcy5ib29sLGNvb2tpZTpzLlByb3BUeXBlcy5ib29sLHJlQXV0aGVudGljYXRlOnMuUHJvcFR5cGVzLmJvb2wsc2NvcGU6cy5Qcm9wVHlwZXMuc3RyaW5nLHRleHRCdXR0b246cy5Qcm9wVHlwZXMuc3RyaW5nLHR5cGVCdXR0b246cy5Qcm9wVHlwZXMuc3RyaW5nLGF1dG9Mb2FkOnMuUHJvcFR5cGVzLmJvb2wsc2l6ZTpzLlByb3BUeXBlcy5zdHJpbmcsZmllbGRzOnMuUHJvcFR5cGVzLnN0cmluZyxjc3NDbGFzczpzLlByb3BUeXBlcy5zdHJpbmcsdmVyc2lvbjpzLlByb3BUeXBlcy5zdHJpbmcsaWNvbjpzLlByb3BUeXBlcy5hbnksbGFuZ3VhZ2U6cy5Qcm9wVHlwZXMuc3RyaW5nLG9uQ2xpY2s6cy5Qcm9wVHlwZXMuZnVuY30sYi5kZWZhdWx0UHJvcHM9e3RleHRCdXR0b246XCJMb2dpbiB3aXRoIEZhY2Vib29rXCIsdHlwZUJ1dHRvbjpcImJ1dHRvblwiLHNjb3BlOlwicHVibGljX3Byb2ZpbGUsZW1haWxcIix4ZmJtbDohMSxjb29raWU6ITEscmVBdXRoZW50aWNhdGU6ITEsc2l6ZTpcIm1ldHJvXCIsZmllbGRzOlwibmFtZVwiLGNzc0NsYXNzOlwia2VwLWxvZ2luLWZhY2Vib29rXCIsdmVyc2lvbjpcIjIuM1wiLGxhbmd1YWdlOlwiZW5fVVNcIn0sdFtcImRlZmF1bHRcIl09Yn0sZnVuY3Rpb24oZSx0LG8pe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntcImRlZmF1bHRcIjplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcj1vKDEpLGk9bihyKTt0W1wiZGVmYXVsdFwiXT1pW1wiZGVmYXVsdFwiXX0sZnVuY3Rpb24oZSx0KXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0W1wiZGVmYXVsdFwiXT1mdW5jdGlvbihlKXt2YXIgdD1cIlwiO2Zvcih2YXIgbyBpbiBlKVwiXCIhPT10JiYodCs9XCImXCIpLHQrPW8rXCI9XCIrZW5jb2RlVVJJQ29tcG9uZW50KGVbb10pO3JldHVybiB0fX0sZnVuY3Rpb24oZSx0LG8pe3Q9ZS5leHBvcnRzPW8oNSkoKSx0LnB1c2goW2UuaWQsXCIua2VwLWxvZ2luLWZhY2Vib29re2ZvbnQtZmFtaWx5OkhlbHZldGljYSxzYW5zLXNlcmlmO2ZvbnQtd2VpZ2h0OjcwMDstd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO2NvbG9yOiNmZmY7Y3Vyc29yOnBvaW50ZXI7ZGlzcGxheTppbmxpbmUtYmxvY2s7Zm9udC1zaXplOmNhbGMoLjI3NTQ4dncgKyAxMi43MTA3NHB4KTt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyxib3JkZXItY29sb3IgLjNzO2JhY2tncm91bmQtY29sb3I6IzRjNjliYTtib3JkZXI6Y2FsYyguMDY4ODd2dyArIC42Nzc2OXB4KSBzb2xpZCAjNGM2OWJhO3BhZGRpbmc6Y2FsYyguMzQ0MzV2dyArIDEzLjM4ODQzcHgpIGNhbGMoLjM0NDM1dncgKyAxOC4zODg0M3B4KX0ua2VwLWxvZ2luLWZhY2Vib29rLnNtYWxse3BhZGRpbmc6Y2FsYyguMzQ0MzV2dyArIDMuMzg4NDNweCkgY2FsYyguMzQ0MzV2dyArIDguMzg4NDNweCl9LmtlcC1sb2dpbi1mYWNlYm9vay5tZWRpdW17cGFkZGluZzpjYWxjKC4zNDQzNXZ3ICsgOC4zODg0M3B4KSBjYWxjKC4zNDQzNXZ3ICsgMTMuMzg4NDNweCl9LmtlcC1sb2dpbi1mYWNlYm9vay5tZXRyb3tib3JkZXItcmFkaXVzOjB9LmtlcC1sb2dpbi1mYWNlYm9vayAuZmF7bWFyZ2luLXJpZ2h0OmNhbGMoLjM0NDM1dncgKyAzLjM4ODQzcHgpfVwiLFwiXCJdKSx0LmxvY2Fscz17XCJrZXAtbG9naW4tZmFjZWJvb2tcIjpcImtlcC1sb2dpbi1mYWNlYm9va1wiLHNtYWxsOlwic21hbGxcIixtZWRpdW06XCJtZWRpdW1cIixtZXRybzpcIm1ldHJvXCIsZmE6XCJmYVwifX0sZnVuY3Rpb24oZSx0KXtlLmV4cG9ydHM9ZnVuY3Rpb24oKXt2YXIgZT1bXTtyZXR1cm4gZS50b1N0cmluZz1mdW5jdGlvbigpe2Zvcih2YXIgZT1bXSx0PTA7dDx0aGlzLmxlbmd0aDt0Kyspe3ZhciBvPXRoaXNbdF07b1syXT9lLnB1c2goXCJAbWVkaWEgXCIrb1syXStcIntcIitvWzFdK1wifVwiKTplLnB1c2gob1sxXSl9cmV0dXJuIGUuam9pbihcIlwiKX0sZS5pPWZ1bmN0aW9uKHQsbyl7XCJzdHJpbmdcIj09dHlwZW9mIHQmJih0PVtbbnVsbCx0LFwiXCJdXSk7Zm9yKHZhciBuPXt9LHI9MDtyPHRoaXMubGVuZ3RoO3IrKyl7dmFyIGk9dGhpc1tyXVswXTtcIm51bWJlclwiPT10eXBlb2YgaSYmKG5baV09ITApfWZvcihyPTA7cjx0Lmxlbmd0aDtyKyspe3ZhciBhPXRbcl07XCJudW1iZXJcIj09dHlwZW9mIGFbMF0mJm5bYVswXV18fChvJiYhYVsyXT9hWzJdPW86byYmKGFbMl09XCIoXCIrYVsyXStcIikgYW5kIChcIitvK1wiKVwiKSxlLnB1c2goYSkpfX0sZX19LGZ1bmN0aW9uKHQsbyl7dC5leHBvcnRzPWV9XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVhY3QtZmFjZWJvb2stbG9naW4vZGlzdC9mYWNlYm9vay1sb2dpbi5qc1xuLy8gbW9kdWxlIGlkID0gNjk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=