webpackHotUpdate(0,{

/***/ 318:
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
	
	var EmailLogin = function (_React$Component) {
	  _inherits(EmailLogin, _React$Component);
	
	  function EmailLogin() {
	    _classCallCheck(this, EmailLogin);
	
	    return _possibleConstructorReturn(this, (EmailLogin.__proto__ || Object.getPrototypeOf(EmailLogin)).apply(this, arguments));
	  }
	
	  _createClass(EmailLogin, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("div", null, _react2.default.createElement("div", null, "Login"), _react2.default.createElement("form", { className: "form-group", onSubmit: this._handeSubmit.bind(this) }, _react2.default.createElement("input", { placeholder: "email" }), _react2.default.createElement("br", null), _react2.default.createElement("input", { type: "password", placeholder: "password" }), _react2.default.createElement("input", { type: "submit", value: "login" })), _react2.default.createElement(Link, { to: "/registration" }, "Dont have account? Register here!"));
	    }
	  }, {
	    key: "_handleSubmit",
	    value: function _handleSubmit(event) {
	      //event.preventDefault():
	    }
	  }]);
	
	  return EmailLogin;
	}(_react2.default.Component);
	
	var _default = EmailLogin;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(EmailLogin, "EmailLogin", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(EmailLogin, "EmailLogin", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");
	}();

	;

/***/ },

/***/ 346:
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
	
	var Registration = function (_React$Component) {
	  _inherits(Registration, _React$Component);
	
	  function Registration() {
	    _classCallCheck(this, Registration);
	
	    return _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).apply(this, arguments));
	  }
	
	  _createClass(Registration, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement("div", null, _react2.default.createElement("div", null, "Register"), _react2.default.createElement("form", { className: "form-group", onSubmit: this._handeSubmit.bind(this) }, _react2.default.createElement("input", { placeholder: "email" }), _react2.default.createElement("br", null), _react2.default.createElement("input", { type: "password", placeholder: "password" }), _react2.default.createElement("input", { type: "password", placeholder: "repeat password" }), _react2.default.createElement("input", { type: "submit", value: "register" })));
	    }
	  }, {
	    key: "_handleSubmit",
	    value: function _handleSubmit(event) {
	      //event.preventDefault():
	    }
	  }]);
	
	  return Registration;
	}(_react2.default.Component);
	
	var _default = EmailLogin;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(Registration, "Registration", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(Registration, "Registration", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzP2NhOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uLmpzP2IwMWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTs7Ozs7Ozs7Ozs7OEJBRUY7Y0FDRSxxQ0FDQSxpREFDQSxrREFBTSxXQUFVLGNBQWEsVUFBVSxLQUFLLGFBQWEsS0FDdkQsa0RBQU8sYUFBcUIsZ0RBQzVCLGdEQUFPLE1BQUssWUFBVyxhQUN2Qix3REFBTyxNQUFLLFVBQVMsT0FFdkIsNkJBQUMsY0FBRCxRQUFNLElBQUcsbUJBR1o7Ozs7bUNBRWEsT0FDWjtBQUNEOzs7OztHQWpCc0IsZ0JBQU07O2dCQW9CaEI7Ozs7Ozs7OztpQ0FwQlQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZOOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVNOzs7Ozs7Ozs7Ozs4QkFFRjtjQUNFLHFDQUNBLGlEQUNBLHFEQUFNLFdBQVUsY0FBYSxVQUFVLEtBQUssYUFBYSxLQUN2RCxrREFBTyxhQUFxQixnREFDNUIsZ0RBQU8sTUFBSyxZQUFXLGFBQ3ZCLHdEQUFPLE1BQUssWUFBVyxhQUN2QiwrREFBTyxNQUFLLFVBQVMsT0FJMUI7Ozs7bUNBRWEsT0FDWjtBQUNEOzs7OztHQWpCd0IsZ0JBQU07O2dCQW9CbEI7Ozs7Ozs7OztpQ0FwQlQiLCJmaWxlIjoiMC42NTFkYmEwOThhMzY0NzMzZjJkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEVtYWlsTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+TG9naW48L2Rpdj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIG9uU3VibWl0PXt0aGlzLl9oYW5kZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9XCJlbWFpbFwiLz48YnIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdHJhdGlvblwiPkRvbnQgaGF2ZSBhY2NvdW50PyBSZWdpc3RlciBoZXJlITwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChldmVudCl7XHJcbiAgICAvL2V2ZW50LnByZXZlbnREZWZhdWx0KCk6XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbWFpbExvZ2luO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdj5SZWdpc3RlcjwvZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgb25TdWJtaXQ9e3RoaXMuX2hhbmRlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj1cImVtYWlsXCIvPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgLy9ldmVudC5wcmV2ZW50RGVmYXVsdCgpOlxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW1haWxMb2dpbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==