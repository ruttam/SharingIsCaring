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
	
	function mapStateToProps(state) {
	  //const {eventStore} = state;
	  console.log(state);
	  return state;
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
	      e.preventDefault();
	      if (this.isValid()) {
	        this.setState({ errors: {} });
	        //this.props.login(this.state);
	        this.props.dispatch((0, _AuthActions.login)(this.state, this.context.router));
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
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(EmailLogin);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
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

	  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(verticalLine, "verticalLine", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(EmailLogin, "EmailLogin", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzP2NhOTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxVQUFTLGdCQUFnQixPQUN2QjtBQUNBO1dBQVEsSUFDUjtVQUNEOzs7QUFFRCxLQUFNO1dBQ0k7QUFBUjtBQUVGLEtBQU07Z0JBQ1M7QUFBYjs7S0FHSTt5QkFDSjs7dUJBQVksT0FBTTsyQkFBQTs7eUhBRWhCOztXQUFLO2NBRUg7aUJBQ0E7ZUFBUTtBQUZSO1lBSUg7Ozs7OzhCQUlDOztXQUFNLFlBQVksQ0FBQyxFQUFFLFFBQVEsS0FBSyxNQUNsQztlQUFRLElBQUksNEJBQ1o7Y0FDRSx1Q0FBSyxXQUFVLFlBQVcsT0FDMUIsMERBQ0EsOERBQU0sVUFBVSxLQUFLLGNBQWMsS0FDbEMsc0JBQWEsdUNBQUssV0FBZ0MsNkJBQUssTUFDeEQ7Z0JBQ1MsS0FBSyxNQUFNLE9BQ2xCO21CQUFVLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7Z0JBQ0E7c0JBQ0E7bUJBRUY7QUFQRTtnQkFRTyxLQUFLLE1BQU0sT0FDbEI7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtlQUNBO2dCQUNBO3NCQUNBO21CQUVBO0FBUkEsb0RBUU8sT0FBTyxVQUFVLFdBQVUsb0JBQW1CLE1BQUssVUFBUyxPQUVyRSxnRUFBTSxJQUFHLG1CQUdaOzs7OytCQUVTLEdBQ1I7WUFBSyw2QkFBVyxFQUFFLE9BQU8sTUFBTyxFQUFFLE9BQ25DOzs7OytCQUVROzRCQUNtQiwrQkFBYyxLQUFLO1dBQXRDO1dBQVEseUJBQ2Y7O1dBQUcsQ0FBQyxTQUNGO2NBQUssU0FBUyxFQUFDLFFBQ2hCO0FBQ0Q7Y0FDRDs7OzttQ0FFYSxHQUNaO1NBQ0E7V0FBRyxLQUFLLFdBQ047Y0FBSyxTQUFTLEVBQUMsUUFDZjtBQUNBO2NBQUssTUFBTSxTQUFTLHdCQUFNLEtBQUssT0FBTyxLQUFLLFFBQzVDO0FBQ0Y7Ozs7O0dBOURzQixnQkFBTTs7QUFpRS9CLFlBQVc7VUFDRixnQkFBTSxVQUFVLEtBQUs7QUFBNUI7O0FBR0YsWUFBVztXQUNELGdCQUFNLFVBQVUsT0FBTztBQUEvQjs7Z0JBR2EseUJBQVEsaUJBQWlCOzs7Ozs7Ozs7O2lDQXRGL0I7O2lDQU1IOztpQ0FHQTs7aUNBSUEiLCJmaWxlIjoiMC5jYjNlN2JhNmQzODgzYjE4OTg2NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBUZXh0RmllbGRHcm91cCBmcm9tICcuL1RleHRGaWVsZEdyb3VwLmpzJztcclxuaW1wb3J0IHZhbGlkYXRlSW5wdXQgZnJvbSAnLi9Mb2dpblZhbGlkYXRpb24uanMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtsb2dpbn0gZnJvbSAnLi4vYWN0aW9ucy9BdXRoQWN0aW9ucy5qcyc7XHJcbmltcG9ydCB7YXV0aH0gZnJvbSAnLi4vYWN0aW9ucy9BdXRoQWN0aW9ucy5qcyc7XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIC8vY29uc3Qge2V2ZW50U3RvcmV9ID0gc3RhdGU7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuY29uc3QgdmVydGljYWxMaW5lID0ge1xyXG4gIGJvcmRlclJpZ2h0OiBcInRoaW4gc29saWQgIzM1NGM4Y1wiXHJcbn1cclxuXHJcbmNsYXNzIEVtYWlsTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBlcnJvcnM6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGhhc0Vycm9ycyA9ICFfLmlzRW1wdHkodGhpcy5zdGF0ZS5lcnJvcnMpO1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGUuZXJyb3JzLmZvcm06ICcsIHRoaXMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt2ZXJ0aWNhbExpbmV9PlxyXG4gICAgICA8aDQ+bG9naW4gd2l0aCBlLW1haWw8L2g0PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICB7aGFzRXJyb3JzICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e3RoaXMuc3RhdGUuZXJyb3JzfTwvZGl2Pn1cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgIGZpZWxkPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBmaWVsZD1cInBhc3N3b3JkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgc3R5bGU9e2RpdlN0eWxlfSBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdHJhdGlvblwiPkRvbnQgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlciBoZXJlITwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGUpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpe1xyXG4gICAgY29uc3Qge2Vycm9ycywgaXNWYWxpZH0gPSB2YWxpZGF0ZUlucHV0KHRoaXMuc3RhdGUpO1xyXG4gICAgaWYoIWlzVmFsaWQpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKHRoaXMuaXNWYWxpZCgpKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7fX0pO1xyXG4gICAgICAvL3RoaXMucHJvcHMubG9naW4odGhpcy5zdGF0ZSk7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobG9naW4odGhpcy5zdGF0ZSwgdGhpcy5jb250ZXh0LnJvdXRlcikpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuRW1haWxMb2dpbi5wcm9wVHlwZXMgPSB7XHJcbiAgbG9naW46IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5cclxuRW1haWxMb2dpbi5jb250ZXh0VHlwZXMgPSB7XHJcbiAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEVtYWlsTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==