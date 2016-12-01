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

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qcz8yODYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLEtBQU07YUFFSjtRQUNBO1NBQU07QUFGTjs7S0FLSTs7Ozs7Ozs7Ozs7OEJBR0s7V0FDQSxrQkFBbUIsS0FBSyxNQUFNLEtBQ3JDOztXQUFNLFlBQ0osc0NBQUksV0FDRix3REFBSSwyQ0FBRyxNQUFLLE9BR2hCO2NBQ0UsdUNBQUssT0FDTCxtREFBSyxXQUNILDZEQUNBLHNFQUFxQixJQUkxQjs7Ozs7R0FsQmlCLGdCQUFNOztBQXFCMUIsT0FBTTtTQUNFLGdCQUFNLFVBQVUsT0FBTztBQUE3Qjs7QUFHRixVQUFTLGdCQUFnQixPQUN2Qjs7V0FDUSxNQUVUO0FBRkc7OztBQUlKLFVBQVMsbUJBQW1CLFVBQzFCOztjQUNXLG1CQUFtQixjQUM1QjtvQkFBZSxtQkFBbUIsRUFBQyxXQUFELGFBRXJDO0FBSEc7OztnQkFLVyx5QkFBUSxpQkFBaUI7Ozs7Ozs7Ozs7aUNBYi9COztpQ0FNQTs7aUNBckNIOztpQ0FNQSIsImZpbGUiOiIwLjhkY2NhZTlmNjBhNGVjYWZkZjNlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEVtYWlsTG9naW4gZnJvbSAnLi9FbWFpbExvZ2luLmpzJztcclxuaW1wb3J0IEZhY2Vib29rTG9naW5CdXR0b24gZnJvbSAnLi9GYWNlYm9va0xvZ2luQnV0dG9uLmpzJztcclxuXHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHRvcDogXCIzMCVcIixcclxuICBsZWZ0OiBcIjMwJVwiXHJcbn1cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdGhpcy5wcm9wcy5hdXRoO1xyXG4gICAgY29uc3QgdXNlckxpbmtzID0gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2dvdXQ8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8RW1haWxMb2dpbiAvPlxyXG4gICAgICAgIDxGYWNlYm9va0xvZ2luQnV0dG9uIGZiPXtGQn0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuTG9naW4ucHJvcFR5cGVzID0ge1xyXG4gIGF1dGg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIHJldHVybiB7XHJcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhMb2dpbkFjdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIHJvdXRlckFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7cHVzaFN0YXRlfSwgZGlzcGF0Y2gpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Mb2dpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=