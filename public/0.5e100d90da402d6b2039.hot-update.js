webpackHotUpdate(0,{

/***/ 362:
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
	
	var _TextFieldGroup = __webpack_require__(363);
	
	var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);
	
	var _LoginValidation = __webpack_require__(364);
	
	var _LoginValidation2 = _interopRequireDefault(_LoginValidation);
	
	var _reactRedux = __webpack_require__(318);
	
	var _AuthActions = __webpack_require__(446);
	
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
	
	      var hasErrors = !_.isEmpty(this.state.errors);
	
	      console.log('this.state.errors.form: ', this);
	      return _react2.default.createElement('div', { className: 'col-lg-6', style: verticalLine }, _react2.default.createElement('h4', null, 'login with e-mail'), _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, hasErrors && _react2.default.createElement('div', { className: 'alert alert-danger' }, this.state.errors), _react2.default.createElement(_TextFieldGroup2.default, {
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
	          _this2.context.router.push('/profileData');
	          console.log(res);
	        }, function (errors) {
	          _this2.setState({ errors: errors.response.data });
	          console.log(erros);
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
	
	var _default = (0, _reactRedux.connect)(null, { login: _AuthActions.login })(EmailLogin);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzP2NhOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBQ0k7QUFBUjtBQUVGLEtBQU07Z0JBQ1M7QUFBYjs7S0FHSTt5QkFDSjs7dUJBQVksT0FBTTsyQkFBQTs7eUhBRWhCOztXQUFLO2NBRUg7aUJBQ0E7ZUFBUTtBQUZSO1lBSUg7Ozs7OzhCQUlDOztXQUFNLFlBQVksQ0FBQyxFQUFFLFFBQVEsS0FBSyxNQUVsQzs7ZUFBUSxJQUFJLDRCQUNaO2NBQ0UsdUNBQUssV0FBVSxZQUFXLE9BQzFCLDBEQUNBLDhEQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ2xDLHNCQUFhLHVDQUFLLFdBQWdDLDZCQUFLLE1BQ3hEO2dCQUNTLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO2dCQUNBO3NCQUNBO21CQUVGO0FBUEU7Z0JBUU8sS0FBSyxNQUFNLE9BQ2xCO21CQUFVLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7ZUFDQTtnQkFDQTtzQkFDQTttQkFFQTtBQVJBLG9EQVFPLE9BQU8sVUFBVSxXQUFVLG9CQUFtQixNQUFLLFVBQVMsT0FFckUsZ0VBQU0sSUFBRyxtQkFHWjs7OzsrQkFFUyxHQUNSO1lBQUssNkJBQVcsRUFBRSxPQUFPLE1BQU8sRUFBRSxPQUNuQzs7OzsrQkFFUTs0QkFDbUIsK0JBQWMsS0FBSztXQUF0QztXQUFRLHlCQUNmOztXQUFHLENBQUMsU0FDRjtjQUFLLFNBQVMsRUFBQyxRQUNoQjtBQUNEO2NBQ0Q7Ozs7bUNBRWEsR0FBRTtvQkFDZDs7U0FDQTtXQUFHLEtBQUssV0FDTjtjQUFLLFNBQVMsRUFBQyxRQUNmO2NBQUssTUFBTSxNQUFNLEtBQUssT0FBTyxLQUMzQixVQUFDLEtBQVM7a0JBQUssUUFBUSxPQUFPLEtBQzlCO21CQUFRLElBQVM7QUFGbkIsWUFHRSxVQUFDLFFBQVk7a0JBQUssU0FBUyxFQUFDLFFBQVEsT0FBTyxTQUN6QzttQkFBUSxJQUFXO0FBRXhCO0FBQ0Y7Ozs7O0dBbkVzQixnQkFBTTs7QUFzRS9CLFlBQVc7VUFDRixnQkFBTSxVQUFVLEtBQUs7QUFBNUI7O0FBR0YsWUFBVztXQUNELGdCQUFNLFVBQVUsT0FBTztBQUEvQjs7Z0JBR2EseUJBQVEsTUFBTSxFQUFDLG9CQUFELFNBQVM7Ozs7Ozs7Ozs7aUNBckZoQzs7aUNBR0E7O2lDQUlBIiwiZmlsZSI6IjAuNWUxMDBkOTBkYTQwMmQ2YjIwMzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkR3JvdXAgZnJvbSAnLi9UZXh0RmllbGRHcm91cC5qcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vTG9naW5WYWxpZGF0aW9uLmpzJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7bG9naW59IGZyb20gJy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuY29uc3QgdmVydGljYWxMaW5lID0ge1xyXG4gIGJvcmRlclJpZ2h0OiBcInRoaW4gc29saWQgIzM1NGM4Y1wiXHJcbn1cclxuXHJcbmNsYXNzIEVtYWlsTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBlcnJvcnM6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGhhc0Vycm9ycyA9ICFfLmlzRW1wdHkodGhpcy5zdGF0ZS5lcnJvcnMpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCd0aGlzLnN0YXRlLmVycm9ycy5mb3JtOiAnLCB0aGlzKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIiBzdHlsZT17dmVydGljYWxMaW5lfT5cclxuICAgICAgPGg0PmxvZ2luIHdpdGggZS1tYWlsPC9oND5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAge2hhc0Vycm9ycyAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPnt0aGlzLnN0YXRlLmVycm9yc308L2Rpdj59XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5lbWFpbH1cclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICBmaWVsZD1cImVtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgZmllbGQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IHN0eWxlPXtkaXZTdHlsZX0gY2xhc3NOYW1lPVwiYnRuIC5idG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImxvZ2luXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TGluayB0bz1cIi9yZWdpc3RyYXRpb25cIj5Eb250IGhhdmUgYW4gYWNjb3VudD8gUmVnaXN0ZXIgaGVyZSE8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShlKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoKXtcclxuICAgIGNvbnN0IHtlcnJvcnMsIGlzVmFsaWR9ID0gdmFsaWRhdGVJbnB1dCh0aGlzLnN0YXRlKTtcclxuICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZih0aGlzLmlzVmFsaWQoKSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczoge319KTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dpbih0aGlzLnN0YXRlKS50aGVuKFxyXG4gICAgICAgIChyZXMpID0+IHt0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy9wcm9maWxlRGF0YScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyl9LFxyXG4gICAgICAgIChlcnJvcnMpID0+IHt0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVycm9ycy5yZXNwb25zZS5kYXRhfSk7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcyl9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5FbWFpbExvZ2luLnByb3BUeXBlcyA9IHtcclxuICBsb2dpbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5FbWFpbExvZ2luLmNvbnRleHRUeXBlcyA9IHtcclxuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHtsb2dpbn0pKEVtYWlsTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==