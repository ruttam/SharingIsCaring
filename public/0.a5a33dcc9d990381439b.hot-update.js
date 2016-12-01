webpackHotUpdate(0,{

/***/ 318:
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
	
	var _reactRouter = __webpack_require__(259);
	
	var _TextFieldGroup = __webpack_require__(536);
	
	var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);
	
	var _LoginValidation = __webpack_require__(555);
	
	var _LoginValidation2 = _interopRequireDefault(_LoginValidation);
	
	var _reactRedux = __webpack_require__(346);
	
	var _Login = __webpack_require__(556);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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
	  margin: "0 0 5px 0"
	};
	var verticalLine = {
	  borderRight: "thin solid #354c8c"
	};
	
	var EmailLogin = function (_React$Component) {
	  _inherits(EmailLogin, _React$Component);
	
	  function EmailLogin(props) {
	    _classCallCheck(this, EmailLogin);
	
	    var _this = _possibleConstructorReturn(this, (EmailLogin.__proto__ || Object.getPrototypeOf(EmailLogin)).call(this, props));
	
	    _this.state = {
	      email: '',
	      password: '',
	      errors: {}
	    };
	    return _this;
	  }
	
	  _createClass(EmailLogin, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: 'col-lg-6', style: verticalLine }, _react2.default.createElement('h4', null, 'login with e-mail'), _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, this.state.errors.form && _react2.default.createElement('div', { className: 'alert alert-danger' }, this.state.errors), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.email,
	        onChange: this._onChange.bind(this),
	        value: this.state.email,
	        field: 'email',
	        placeholder: 'email',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.password,
	        onChange: this._onChange.bind(this),
	        value: this.state.password,
	        type: 'password',
	        field: 'password',
	        placeholder: 'password',
	        divStyle: divStyle
	      }), _react2.default.createElement('input', { style: divStyle, className: 'btn .btn-primary', type: 'submit', value: 'login' })), _react2.default.createElement(_reactRouter.Link, { to: '/registration' }, 'Dont have an account? Register here!'));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var _validateInput = (0, _LoginValidation2.default)(this.state),
	          errors = _validateInput.errors,
	          isValid = _validateInput.isValid;
	
	      if (!isValid) {
	        this.setState({ errors: errors });
	      }
	      return isValid;
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      if (this.isValid()) {
	        this.setState({ errors: {} });
	        this.props.login(this.state).then(function (res) {
	          return _this2.context.router.push('/');
	        }, function (err) {
	          return _this2.setState({ errors: err.response.data });
	        });
	      }
	    }
	  }]);
	
	  return EmailLogin;
	}(_react2.default.Component);
	
	EmailLogin.propTypes = {
	  login: _react2.default.PropTypes.func.isRequired
	};
	
	EmailLogin.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};
	
	var _default = (0, _reactRedux.connect)(null, { login: _Login.login })(EmailLogin);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
	  __REACT_HOT_LOADER__.register(verticalLine, 'verticalLine', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
	  __REACT_HOT_LOADER__.register(EmailLogin, 'EmailLogin', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_TextFieldGroup2, "_TextFieldGroup2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_LoginValidation2, "_LoginValidation2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_defineProperty, "_defineProperty", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(verticalLine, "verticalLine", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(EmailLogin, "EmailLogin", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzP2NhOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBQ0k7QUFBUjtBQUVGLEtBQU07Z0JBQ1M7QUFBYjs7S0FHSTt5QkFDSjs7dUJBQVksT0FBTTsyQkFBQTs7eUhBRWhCOztXQUFLO2NBRUg7aUJBQ0E7ZUFBUTtBQUZSO1lBSUg7Ozs7OzhCQUdDO2NBQ0UsdUNBQUssV0FBVSxZQUFXLE9BQzFCLDBEQUNBLDhEQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ2xDLGNBQUssTUFBTSxPQUFPLFFBQVEsdUNBQUssV0FBZ0MsNkJBQUssTUFDckU7Z0JBQ1MsS0FBSyxNQUFNLE9BQ2xCO21CQUFVLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7Z0JBQ0E7c0JBQ0E7bUJBRUY7QUFQRTtnQkFRTyxLQUFLLE1BQU0sT0FDbEI7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtlQUNBO2dCQUNBO3NCQUNBO21CQUVBO0FBUkEsb0RBUU8sT0FBTyxVQUFVLFdBQVUsb0JBQW1CLE1BQUssVUFBUyxPQUVyRSxnRUFBTSxJQUFHLG1CQUdaOzs7OytCQUVTLEdBQ1I7WUFBSyw2QkFBVyxFQUFFLE9BQU8sTUFBTyxFQUFFLE9BQ25DOzs7OytCQUVROzRCQUNtQiwrQkFBYyxLQUFLO1dBQXRDO1dBQVEseUJBQ2Y7O1dBQUcsQ0FBQyxTQUNGO2NBQUssU0FBUyxFQUFDLFFBQ2hCO0FBQ0Q7Y0FDRDs7OzttQ0FFYSxHQUFFO29CQUNkOztTQUNBO1dBQUcsS0FBSyxXQUNOO2NBQUssU0FBUyxFQUFDLFFBQ2Y7Y0FBSyxNQUFNLE1BQU0sS0FBSyxPQUFPLEtBQzNCLFVBQUMsS0FBRDtrQkFBUyxPQUFLLFFBQVEsT0FBTyxLQUFLO0FBRHBDLFlBRUUsVUFBQyxLQUFEO2tCQUFTLE9BQUssU0FBUyxFQUFDLFFBQVEsSUFBSSxTQUFTO0FBRWhEO0FBQ0Y7Ozs7O0dBN0RzQixnQkFBTTs7QUFnRS9CLFlBQVc7VUFDRixnQkFBTSxVQUFVLEtBQUs7QUFBNUI7O0FBR0YsWUFBVztXQUNELGdCQUFNLFVBQVUsT0FBTztBQUEvQjs7Z0JBR2EseUJBQVEsTUFBTSxFQUFDLGNBQUQsU0FBUzs7Ozs7Ozs7OztpQ0EvRWhDOztpQ0FHQTs7aUNBSUEiLCJmaWxlIjoiMC5hNWEzM2RjYzlkOTkwMzgxNDM5Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBUZXh0RmllbGRHcm91cCBmcm9tICcuL1RleHRGaWVsZEdyb3VwLmpzJztcclxuaW1wb3J0IHZhbGlkYXRlSW5wdXQgZnJvbSAnLi9Mb2dpblZhbGlkYXRpb24uanMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtsb2dpbn0gZnJvbSAnLi4vYWN0aW9ucy9Mb2dpbi5qcyc7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMCAwIDVweCAwXCJcclxufVxyXG5jb25zdCB2ZXJ0aWNhbExpbmUgPSB7XHJcbiAgYm9yZGVyUmlnaHQ6IFwidGhpbiBzb2xpZCAjMzU0YzhjXCJcclxufVxyXG5cclxuY2xhc3MgRW1haWxMb2dpbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZW1haWw6ICcnLFxyXG4gICAgICBwYXNzd29yZDogJycsXHJcbiAgICAgIGVycm9yczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCIgc3R5bGU9e3ZlcnRpY2FsTGluZX0+XHJcbiAgICAgIDxoND5sb2dpbiB3aXRoIGUtbWFpbDwvaDQ+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgIHt0aGlzLnN0YXRlLmVycm9ycy5mb3JtICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e3RoaXMuc3RhdGUuZXJyb3JzfTwvZGl2Pn1cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgIGZpZWxkPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBmaWVsZD1cInBhc3N3b3JkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgc3R5bGU9e2RpdlN0eWxlfSBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdHJhdGlvblwiPkRvbnQgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlciBoZXJlITwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGUpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpe1xyXG4gICAgY29uc3Qge2Vycm9ycywgaXNWYWxpZH0gPSB2YWxpZGF0ZUlucHV0KHRoaXMuc3RhdGUpO1xyXG4gICAgaWYoIWlzVmFsaWQpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKHRoaXMuaXNWYWxpZCgpKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7fX0pO1xyXG4gICAgICB0aGlzLnByb3BzLmxvZ2luKHRoaXMuc3RhdGUpLnRoZW4oXHJcbiAgICAgICAgKHJlcykgPT4gdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKCcvJyksXHJcbiAgICAgICAgKGVycikgPT4gdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5FbWFpbExvZ2luLnByb3BUeXBlcyA9IHtcclxuICBsb2dpbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5FbWFpbExvZ2luLmNvbnRleHRUeXBlcyA9IHtcclxuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHtsb2dpbn0pKEVtYWlsTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==