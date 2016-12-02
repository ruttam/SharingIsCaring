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
	
	var _EmailLogin = __webpack_require__(362);
	
	var _EmailLogin2 = _interopRequireDefault(_EmailLogin);
	
	var _FacebookLoginButton = __webpack_require__(651);
	
	var _FacebookLoginButton2 = _interopRequireDefault(_FacebookLoginButton);
	
	var _redux = __webpack_require__(325);
	
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
	      return _react2.default.createElement('div', { style: divStyle }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_EmailLogin2.default, null), _react2.default.createElement(_FacebookLoginButton2.default, { fb: FB })));
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
	
	var _default = (0, _redux.connect)(mapStateToProps)(Login);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js');
	
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

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Login.js");
	}();

	;

/***/ },

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
	
	    var _this = _possibleConstructorReturn(this, (FacebookLoginButton.__proto__ || Object.getPrototypeOf(FacebookLoginButton)).call(this, props));
	
	    _this.FB = _this.props.fb;
	    _this.state = {
	      message: ""
	    };
	    return _this;
	  }
	
	  _createClass(FacebookLoginButton, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
	      this.FB.Event.subscribe('auth.statusChange', function (response) {
	        console.log("Ok");
	        if (response.status === "connected") {
	          this.FB.api('/me', { message: 'last_name' }, function (response) {
	            console.log(response);
	            //var message = "Welcome, " + response.last_name;
	            self.setState({
	              message: message
	            });
	            alert('Good');
	          });
	        }
	      });
	    }
	  }, {
	    key: "onStatusChange",
	    value: function onStatusChange(response) {
	      var self = this;
	      if (response.status === "connected") {
	        this.FB.api('/me', { message: 'last_name' }, function (response) {
	          console.log(response);
	          //var message = "Welcome, " + response.last_name;
	          self.setState({
	            message: message
	          });
	          alert('Good');
	        });
	      }
	      alert(this.state.message);
	    }
	  }, {
	    key: "onLogout",
	    value: function onLogout(response) {
	      this.setState({
	        message: ""
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var message = this.state.message;
	      console.log(message);
	      return _react2.default.createElement("div", { style: divStyle, className: "col-lg-4" }, _react2.default.createElement("h4", null, "login with Facebook"), _react2.default.createElement("div", {
	        className: "fb-login-button",
	        "data-max-rows": "1",
	        "data-size": "xlarge",
	        "data-show-faces": "true",
	        "data-auto-logout-link": "true"
	      }), _react2.default.createElement("div", null, this.state.message));
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
	
	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	
	  __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qcz8yODYyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24uanM/MDM1ZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO2FBRUo7UUFDQTtTQUFNO0FBRk47O0tBS0k7Ozs7Ozs7Ozs7OzhCQUdLO1dBQ0Esa0JBQW1CLEtBQUssTUFBTSxLQUNyQzs7V0FBTSxZQUNKLHNDQUFJLFdBQ0Ysd0RBQUksMkNBQUcsTUFBSyxPQUdoQjtjQUNFLHVDQUFLLE9BQ0wsbURBQUssV0FDSCw2REFDQSxzRUFBcUIsSUFJMUI7Ozs7O0dBbEJpQixnQkFBTTs7QUFxQjFCLE9BQU07U0FDRSxnQkFBTSxVQUFVLE9BQU87QUFBN0I7O0FBR0YsVUFBUyxnQkFBZ0IsT0FDdkI7O1dBQ1EsTUFFVDtBQUZHOzs7Z0JBSVcsb0JBQVEsaUJBQWlCOzs7Ozs7Ozs7O2lDQU4vQjs7aUNBL0JIOztpQ0FNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1lBQ0s7QUFBVDs7S0FHSTtrQ0FDSjs7Z0NBQVksT0FBTzsyQkFBQTs7MklBRWpCOztXQUFLLEtBQUssTUFBSyxNQUNmO1dBQUs7Z0JBQ007QUFBVDtZQUVIOzs7Ozt5Q0FHQztZQUFLLEdBQUcsTUFBTSxVQUFVLGVBQWUsS0FBSyxTQUFTLEtBQ3JEO1lBQUssR0FBRyxNQUFNLFVBQVUscUJBQXFCLFVBQVMsVUFDcEQ7aUJBQVEsSUFDUjthQUFJLFNBQVMsV0FBVyxhQUN0QjtnQkFBSyxHQUFHLElBQUksT0FBTyxFQUFDLFNBQVMsZUFBYyxVQUFTLFVBQ2xEO3FCQUFRLElBQ1I7QUFDQTtrQkFBSzt3QkFHTDtBQUZFO21CQUdIO0FBQ0Y7QUFDRjtBQUNGOzs7O29DQUVjLFVBQ2I7V0FBSSxPQUNKO1dBQUksU0FBUyxXQUFXLGFBQ3RCO2NBQUssR0FBRyxJQUFJLE9BQU8sRUFBQyxTQUFTLGVBQWMsVUFBUyxVQUNsRDttQkFBUSxJQUNSO0FBQ0E7Z0JBQUs7c0JBR0w7QUFGRTtpQkFHSDtBQUNGO0FBQ0Q7YUFBTSxLQUFLLE1BQ1o7Ozs7OEJBRVEsVUFDUDtZQUFLO2tCQUdOO0FBRkc7Ozs7OEJBS0Y7V0FBSSxVQUFVLEtBQUssTUFDbkI7ZUFBUSxJQUNSOzhCQUNFLHVCQUFLLE9BQU8sVUFBVSxXQUFxQix3REFDM0M7b0JBRUU7MEJBQ0E7c0JBQ0E7NEJBQ0E7a0NBR0Y7QUFQRSxTQUZGLGtCQVNBLHFCQUFNLFdBQUssTUFHZDs7Ozs7R0EvRCtCLGdCQUFNOztnQkFrRXpCOzs7Ozs7Ozs7aUNBdEVUOztpQ0FJQSIsImZpbGUiOiIwLjExMWM1OTNhNWRkYzk5NmE0MjliLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRW1haWxMb2dpbiBmcm9tICcuL0VtYWlsTG9naW4uanMnO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbkJ1dHRvbiBmcm9tICcuL0ZhY2Vib29rTG9naW5CdXR0b24uanMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlZHV4JztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiLFxyXG4gIGxlZnQ6IFwiMzAlXCJcclxufVxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3Qge2lzQXV0aGVudGljYXRlZH0gPSB0aGlzLnByb3BzLmF1dGg7XHJcbiAgICBjb25zdCB1c2VyTGlua3MgPSAoXHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2YmFyLW5hdlwiPlxyXG4gICAgICAgIDxsaT48YSBocmVmPVwiI1wiPkxvZ291dDwvYT48L2xpPlxyXG4gICAgICAgIDwvdWw+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17ZGl2U3R5bGV9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxFbWFpbExvZ2luIC8+XHJcbiAgICAgICAgPEZhY2Vib29rTG9naW5CdXR0b24gZmI9e0ZCfS8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Mb2dpbi5wcm9wVHlwZXMgPSB7XHJcbiAgYXV0aDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGF1dGg6IHN0YXRlLmF1dGhcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBwYWRkaW5nOiBcIjAgMCAwIDE1cHhcIlxyXG59XHJcblxyXG5jbGFzcyBGYWNlYm9va0xvZ2luQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLkZCID0gdGhpcy5wcm9wcy5mYjtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLmxvZ291dCcsIHRoaXMub25Mb2dvdXQuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5zdGF0dXNDaGFuZ2UnLCBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiT2tcIik7XHJcbiAgICAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIgKSB7XHJcbiAgICAgICAgdGhpcy5GQi5hcGkoJy9tZScsIHttZXNzYWdlOiAnbGFzdF9uYW1lJ30sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAvL3ZhciBtZXNzYWdlID0gXCJXZWxjb21lLCBcIiArIHJlc3BvbnNlLmxhc3RfbmFtZTtcclxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGFsZXJ0KCdHb29kJyk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAgICAgdGhpcy5GQi5hcGkoJy9tZScsIHttZXNzYWdlOiAnbGFzdF9uYW1lJ30sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgIC8vdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGFsZXJ0KCdHb29kJyk7XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhbGVydCh0aGlzLnN0YXRlLm1lc3NhZ2UpO1xyXG4gIH1cclxuXHJcbiAgb25Mb2dvdXQocmVzcG9uc2UpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCBtZXNzYWdlID0gdGhpcy5zdGF0ZS5tZXNzYWdlO1xyXG4gICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0gY2xhc3NOYW1lPVwiY29sLWxnLTRcIj48aDQ+bG9naW4gd2l0aCBGYWNlYm9vazwvaDQ+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBjbGFzc05hbWU9XCJmYi1sb2dpbi1idXR0b25cIlxyXG4gICAgICAgIGRhdGEtbWF4LXJvd3M9XCIxXCJcclxuICAgICAgICBkYXRhLXNpemU9XCJ4bGFyZ2VcIlxyXG4gICAgICAgIGRhdGEtc2hvdy1mYWNlcz1cInRydWVcIlxyXG4gICAgICAgIGRhdGEtYXV0by1sb2dvdXQtbGluaz1cInRydWVcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2Pnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rTG9naW5CdXR0b247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24uanMiXSwic291cmNlUm9vdCI6IiJ9