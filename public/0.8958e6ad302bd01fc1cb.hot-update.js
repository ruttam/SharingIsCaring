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
	      return _react2.default.createElement('div', { style: divStyle }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_EmailLogin2.default, null), _react2.default.createElement(_FacebookLoginButton2.default, null)));
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
	
	var _reactFacebookLogin = __webpack_require__(695);
	
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
	
	var divStyle = {
	  padding: "0 0 0 15px"
	};
	
	var FacebookLoginButton = function (_React$Component) {
	  _inherits(FacebookLoginButton, _React$Component);
	
	  function FacebookLoginButton(props) {
	    _classCallCheck(this, FacebookLoginButton);
	
	    return _possibleConstructorReturn(this, (FacebookLoginButton.__proto__ || Object.getPrototypeOf(FacebookLoginButton)).call(this, props));
	  }
	
	  _createClass(FacebookLoginButton, [{
	    key: 'responseFacebook',
	    value: function responseFacebook(response) {
	      console.log(response);
	    }
	  }, {
	    key: 'render',
	
	    //
	    // componentDidMount() {
	    //   this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
	    //   this.FB.Event.subscribe('auth.statusChange', function(response){
	    //     console.log("Ok");
	    //     if( response.status === "connected" ) {
	    //       this.FB.api('/me', {message: 'last_name'}, function(response) {
	    //         console.log(response);
	    //         //var message = "Welcome, " + response.last_name;
	    //         self.setState({
	    //           message: message
	    //         });
	    //         alert('Good');
	    //       })
	    //     }
	    //   });
	    // }
	    //
	    // onStatusChange(response) {
	    //   var self = this;
	    //   if( response.status === "connected" ) {
	    //     this.FB.api('/me', {message: 'last_name'}, function(response) {
	    //       console.log(response);
	    //       var message = "Welcome, " + response.last_name;
	    //       self.setState({
	    //         message: message
	    //       });
	    //       alert('Good');
	    //     })
	    //   }
	    //   alert(this.state.message);
	    // }
	    //
	    // onLogout(response) {
	    //   this.setState({
	    //     message: "Logout"
	    //   });
	    // }
	
	    value: function render() {
	      return _react2.default.createElement(_reactFacebookLogin2.default, {
	        appId: '1841589546055063',
	        autoLoad: true,
	        fields: 'name,email,picture',
	        callback: responseFacebook
	      });
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
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	
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

	  __REACT_HOT_LOADER__.register(_reactFacebookLogin2, "_reactFacebookLogin2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qcz8yODYyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24uanM/MDM1ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxLQUFNO2FBRUo7UUFDQTtTQUFNO0FBRk47O0tBS0k7Ozs7Ozs7Ozs7OzhCQUdLO1dBQ0Esa0JBQW1CLEtBQUssTUFBTSxLQUNyQzs7V0FBTSxZQUNKLHNDQUFJLFdBQ0Ysd0RBQUksMkNBQUcsTUFBSyxPQUdoQjtjQUNFLHVDQUFLLE9BQ0wsbURBQUssV0FDSCw2REFDQSxvRUFJTDs7Ozs7R0FsQmlCLGdCQUFNOztBQXFCMUIsT0FBTTtTQUNFLGdCQUFNLFVBQVUsT0FBTztBQUE3Qjs7QUFHRixVQUFTLGdCQUFnQixPQUN2Qjs7V0FDUSxNQUVUO0FBRkc7OztBQUlKLFVBQVMsbUJBQW1CLFVBQzFCOztjQUNXLG1CQUFtQixjQUM1QjtvQkFBZSxtQkFBbUIsRUFBQyxXQUFELGFBRXJDO0FBSEc7OztnQkFLVyx5QkFBUSxpQkFBaUI7Ozs7Ozs7Ozs7aUNBYi9COztpQ0FNQTs7aUNBckNIOztpQ0FNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pOOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtZQUNLO0FBQVQ7O0tBR0k7a0NBQ0o7O2dDQUFZLE9BQU87MkJBQUE7O3NJQUVsQjs7Ozs7c0NBRWlCLFVBQ2hCO2VBQVEsSUFDVDs7O1VBQ0Q7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs4QkFHRTs7Z0JBR0k7bUJBQ0E7aUJBQ0E7bUJBR0w7QUFOSyxRQURGOzs7OztHQWpENEIsZ0JBQU07O2dCQTJEekI7Ozs7Ozs7OztpQ0EvRFQ7O2lDQUlBIiwiZmlsZSI6IjAuODk1OGU2YWQzMDJiZDAxZmMxY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgRW1haWxMb2dpbiBmcm9tICcuL0VtYWlsTG9naW4uanMnO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbkJ1dHRvbiBmcm9tICcuL0ZhY2Vib29rTG9naW5CdXR0b24uanMnO1xyXG5cclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiLFxyXG4gIGxlZnQ6IFwiMzAlXCJcclxufVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2lzQXV0aGVudGljYXRlZH0gPSB0aGlzLnByb3BzLmF1dGg7XHJcbiAgICBjb25zdCB1c2VyTGlua3MgPSAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxvZ291dDwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17ZGl2U3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxFbWFpbExvZ2luIC8+XHJcbiAgICAgICAgPEZhY2Vib29rTG9naW5CdXR0b24gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkxvZ2luLnByb3BUeXBlcyA9IHtcclxuICBhdXRoOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcclxuICByZXR1cm4ge1xyXG4gICAgYXV0aDogc3RhdGUuYXV0aFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoTG9naW5BY3Rpb25zLCBkaXNwYXRjaCksXHJcbiAgICByb3V0ZXJBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoe3B1c2hTdGF0ZX0sIGRpc3BhdGNoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKExvZ2luKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW4uanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbic7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBwYWRkaW5nOiBcIjAgMCAwIDE1cHhcIlxyXG59XHJcblxyXG5jbGFzcyBGYWNlYm9va0xvZ2luQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICByZXNwb25zZUZhY2Vib29rIChyZXNwb25zZSl7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgfTtcclxuICAvL1xyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGgubG9nb3V0JywgdGhpcy5vbkxvZ291dC5iaW5kKHRoaXMpKTtcclxuICAvLyAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJPa1wiKTtcclxuICAvLyAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAvLyAgICAgICB0aGlzLkZCLmFwaSgnL21lJywge21lc3NhZ2U6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAvLyAgICAgICAgIC8vdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xyXG4gIC8vICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYWxlcnQoJ0dvb2QnKTtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gIC8vICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gIC8vICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAvLyAgICAgdGhpcy5GQi5hcGkoJy9tZScsIHttZXNzYWdlOiAnbGFzdF9uYW1lJ30sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIC8vICAgICAgIHZhciBtZXNzYWdlID0gXCJXZWxjb21lLCBcIiArIHJlc3BvbnNlLmxhc3RfbmFtZTtcclxuICAvLyAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgICBhbGVydCgnR29vZCcpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfVxyXG4gIC8vICAgYWxlcnQodGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyBvbkxvZ291dChyZXNwb25zZSkge1xyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgIG1lc3NhZ2U6IFwiTG9nb3V0XCJcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZhY2Vib29rTG9naW5cclxuICAgICAgICBhcHBJZD1cIjE4NDE1ODk1NDYwNTUwNjNcIlxyXG4gICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgY2FsbGJhY2s9e3Jlc3BvbnNlRmFjZWJvb2t9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va0xvZ2luQnV0dG9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==