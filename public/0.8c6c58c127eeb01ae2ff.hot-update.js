webpackHotUpdate(0,{

/***/ 653:
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
	
	var _axios = __webpack_require__(447);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _Validation = __webpack_require__(654);
	
	var _Validation2 = _interopRequireDefault(_Validation);
	
	var _TextFieldGroup = __webpack_require__(363);
	
	var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);
	
	var _reactRouter = __webpack_require__(259);
	
	var _when = __webpack_require__(655);
	
	var _when2 = _interopRequireDefault(_when);
	
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
	
	var baseUrl = 'http://localhost:5000/api/user';
	
	var Registration = function (_React$Component) {
	  _inherits(Registration, _React$Component);
	
	  function Registration(props) {
	    _classCallCheck(this, Registration);
	
	    var _this = _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).call(this, props));
	
	    _this.state = {
	      email: '',
	      password: '',
	      passwordConfirmation: '',
	      errors: {},
	      invalid: false
	    };
	    return _this;
	  }
	
	  _createClass(Registration, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'register'), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.email,
	        onChange: this._onChange.bind(this),
	        checkEmailExists: this._checkEmailExists.bind(this),
	        value: this.state.email,
	        placeholder: 'email',
	        field: 'email',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.password,
	        onChange: this._onChange.bind(this),
	        checkEmailExists: this._checkEmailExists.bind(this),
	        value: this.state.password,
	        placeholder: 'password',
	        field: 'password',
	        type: 'password',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.passwordConfirmation,
	        onChange: this._onChange.bind(this),
	        checkEmailExists: this._checkEmailExists.bind(this),
	        value: this.state.passwordConfirmation,
	        field: 'passwordConfirmation',
	        type: 'password',
	        placeholder: 'confirm password',
	        divStyle: divStyle
	      }), _react2.default.createElement('div', null), _react2.default.createElement('input', { disabled: this.state.invalid, className: 'btn .btn-primary', type: 'submit', value: 'register' })));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	      this.isValid();
	    }
	  }, {
	    key: '_checkEmailExists',
	    value: function _checkEmailExists(event) {
	      var _this2 = this;
	
	      var field = event.target.name;
	      var value = event.target.value;
	      if (val !== '') {
	        this.props.isEmailExists(value).then(function (res) {
	          var errors = _this2.state.errors;
	          var invalid = void 0;
	          if (res.data.user) {
	            errors[field] = 'There is user with such ' + field;
	            invalid = true;
	          } else {
	            errors[field] = '';
	            invalid = false;
	          }
	          _this2.setState({ erros: erros, invalid: invalid });
	        });
	      }
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var _validateInput = (0, _Validation2.default)(this.state),
	          errors = _validateInput.errors,
	          isValid = _validateInput.isValid;
	
	      if (!isValid) {
	        this.setState({ errors: errors });
	      }
	      return isValid;
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(event) {
	      var _this3 = this;
	
	      event.preventDefault();
	      console.log(this.state);
	      if (this.isValid(this.state)) {
	        this.setState({ errors: {} });
	        this.props.registrationRequest(this.state).then(function () {
	          _this3.props.addFlashMessage({
	            type: 'success',
	            text: 'You registered successfully! Welcome to Vaziuoju-Vezu!'
	          });
	          _reactRouter.hashHistory.push('/');
	          //or this.context.router.push('/');
	        }, function (err) {
	          // this.setState({errors: err.response.data})
	          console.log(err);
	        });
	      }
	      //);
	      //     $.ajax({
	      //   type: "POST",
	      //   url: `${baseUrl}`,
	      //   data: this.state,
	      //      dataType: 'json',
	      //   success: function(e){console.log("Ok")}
	      // });
	      // axios({
	      //   method: 'POST',
	      //   url: 'http://localhost:5000/api/user',
	      //   mode: 'no-cors',
	      //   headers: {
	      //     'Content-Type': 'application/json'
	      //   },
	      //   data: this.state,
	      //   dataType: 'json'
	      // })
	      // .then((result)=>{
	      //
	      //   console.log(result);
	      // });
	    }
	  }]);
	
	  return Registration;
	}(_react2.default.Component);
	
	Registration.propTypes = {
	  registrationRequest: _react2.default.PropTypes.func.isRequired,
	  addFlashMessage: _react2.default.PropTypes.func.isRequired,
	  isEmailExists: _react2.default.PropTypes.func.isRequired
	};
	
	Registration.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};
	
	var _default = Registration;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	
	  __REACT_HOT_LOADER__.register(baseUrl, 'baseUrl', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	
	  __REACT_HOT_LOADER__.register(Registration, 'Registration', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_axios2, "_axios2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_Validation2, "_Validation2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_TextFieldGroup2, "_TextFieldGroup2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_when2, "_when2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_defineProperty, "_defineProperty", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(baseUrl, "baseUrl", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(Registration, "Registration", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBQ0k7QUFBUjs7QUFHRixLQUFNLFVBQVU7O0tBRVY7MkJBQ0o7O3lCQUFZLE9BQU07MkJBQUE7OzZIQUVoQjs7V0FBSztjQUVIO2lCQUNBOzZCQUNBO2VBQ0E7Z0JBQVM7QUFKVDtZQU1IOzs7Ozs4QkFFQztjQUNFLHFDQUNBLDhDQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ25DLG1EQUNBO2dCQUNTLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7MkJBQWtCLEtBQUssa0JBQWtCLEtBQ3pDO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQVJFO2dCQVNPLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7MkJBQWtCLEtBQUssa0JBQWtCLEtBQ3pDO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTtlQUNBO21CQUVGO0FBVEU7Z0JBVU8sS0FBSyxNQUFNLE9BQ2xCO21CQUFVLEtBQUssVUFBVSxLQUN6QjsyQkFBa0IsS0FBSyxrQkFBa0IsS0FDekM7Z0JBQU8sS0FBSyxNQUNaO2dCQUNBO2VBQ0E7c0JBQ0E7bUJBRUY7QUFURSxnREFVRixnREFBTyxVQUFVLEtBQUssTUFBTSxTQUFTLFdBQVUsb0JBQW1CLE1BQUssVUFBUyxPQUluRjs7OzsrQkFFUyxPQUNSO1lBQUssNkJBQVcsTUFBTSxPQUFPLE1BQU8sTUFBTSxPQUMxQztZQUNEOzs7O3VDQUVpQixPQUFNO29CQUN0Qjs7V0FBTSxRQUFRLE1BQU0sT0FDcEI7V0FBTSxRQUFRLE1BQU0sT0FDcEI7V0FBRyxRQUFRLElBQ1Q7Y0FBSyxNQUFNLGNBQWMsT0FBTyxLQUFLLGVBQ2pDO2VBQUksU0FBUyxPQUFLLE1BQ2xCO2VBQUksZUFDSjtlQUFHLElBQUksS0FBSyxNQUNWO29CQUFPLFNBQVMsNkJBQ2hCO3VCQUNEO0FBSEQsa0JBSUU7b0JBQU8sU0FDUDt1QkFDRDtBQUNEO2tCQUFLLFNBQVMsRUFBQyxPQUFELE9BQVEsU0FDekI7QUFDRjtBQUNGOzs7OytCQUVROzRCQUNvQiwwQkFBYyxLQUFLO1dBQXRDO1dBQVEseUJBQ2hCOztXQUFHLENBQUMsU0FDRjtjQUFLLFNBQVMsRUFBQyxRQUNoQjtBQUNEO2NBQ0Q7Ozs7bUNBRWEsT0FBTTtvQkFDbEI7O2FBQ0E7ZUFBUSxJQUFJLEtBQ1o7V0FBRyxLQUFLLFFBQVEsS0FBSyxRQUNuQjtjQUFLLFNBQVMsRUFBQyxRQUNmO2NBQUssTUFBTSxvQkFBb0IsS0FBSyxPQUFPLEtBQ3pDLFlBQ0U7a0JBQUssTUFBTTttQkFFVDttQkFFRjtBQUhFO29DQUdVLEtBQ1o7QUFDRDtBQVJILFlBU0UsVUFBQyxLQUNDO0FBQ0E7bUJBQVEsSUFDVDtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7Ozs7R0E3SHdCLGdCQUFNOztBQWdJakMsY0FBYTt3QkFDVSxnQkFBTSxVQUFVLEtBQ3JDO29CQUFpQixnQkFBTSxVQUFVLEtBQ2pDO2tCQUFlLGdCQUFNLFVBQVUsS0FBSztBQUZwQzs7QUFLRixjQUFhO1dBQ0gsZ0JBQU0sVUFBVSxPQUFPO0FBQS9COztnQkFHYTs7Ozs7Ozs7O2lDQWhKVDs7aUNBSUE7O2lDQUVBIiwiZmlsZSI6IjAuOGM2YzU4YzEyN2VlYjAxYWUyZmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcydcbmltcG9ydCBUZXh0RmllbGRHcm91cCBmcm9tICcuL1RleHRGaWVsZEdyb3VwLmpzJ1xyXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcbmltcG9ydCB3aGVuIGZyb20gJ3doZW4nO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuXHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZW1haWw6ICAgICAgJycsXHJcbiAgICAgIHBhc3N3b3JkOiAgICcnLFxyXG4gICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogICcnLFxyXG4gICAgICBlcnJvcnM6ICAgICB7fSxcclxuICAgICAgaW52YWxpZDogZmFsc2VcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgIDxoND5yZWdpc3RlcjwvaDQ+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5lbWFpbH1cbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XG4gICAgICAgIGNoZWNrRW1haWxFeGlzdHM9e3RoaXMuX2NoZWNrRW1haWxFeGlzdHMuYmluZCh0aGlzKX1cbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxuICAgICAgICBmaWVsZD1cImVtYWlsXCJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XG4gICAgICAvPlxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIGNoZWNrRW1haWxFeGlzdHM9e3RoaXMuX2NoZWNrRW1haWxFeGlzdHMuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgZmllbGQ9XCJwYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIGNoZWNrRW1haWxFeGlzdHM9e3RoaXMuX2NoZWNrRW1haWxFeGlzdHMuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZENvbmZpcm1hdGlvbn1cclxuICAgICAgICBmaWVsZD1cInBhc3N3b3JkQ29uZmlybWF0aW9uXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxpbnB1dCBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pbnZhbGlkfSBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICAgIHRoaXMuaXNWYWxpZCgpO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrRW1haWxFeGlzdHMoZXZlbnQpe1xyXG4gICAgY29uc3QgZmllbGQgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYodmFsICE9PSAnJyl7XHJcbiAgICAgIHRoaXMucHJvcHMuaXNFbWFpbEV4aXN0cyh2YWx1ZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgbGV0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgICAgICAgbGV0IGludmFsaWQ7XHJcbiAgICAgICAgICBpZihyZXMuZGF0YS51c2VyKXtcclxuICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICdUaGVyZSBpcyB1c2VyIHdpdGggc3VjaCAnICsgZmllbGQ7XHJcbiAgICAgICAgICAgIGludmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICcnO1xyXG4gICAgICAgICAgICBpbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcywgaW52YWxpZH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpe1xyXG4gICAgY29uc3QgeyBlcnJvcnMsIGlzVmFsaWR9ID0gdmFsaWRhdGVJbnB1dCh0aGlzLnN0YXRlKTtcclxuICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIGlmKHRoaXMuaXNWYWxpZCh0aGlzLnN0YXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7fX0pO1xuICAgICAgdGhpcy5wcm9wcy5yZWdpc3RyYXRpb25SZXF1ZXN0KHRoaXMuc3RhdGUpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLmFkZEZsYXNoTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB0ZXh0OiAnWW91IHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5ISBXZWxjb21lIHRvIFZheml1b2p1LVZlenUhJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICAvL29yIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YX0pXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vKTtcbi8vICAgICAkLmFqYXgoe1xuLy8gICB0eXBlOiBcIlBPU1RcIixcbi8vICAgdXJsOiBgJHtiYXNlVXJsfWAsXG4vLyAgIGRhdGE6IHRoaXMuc3RhdGUsXG4vLyAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4vLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKFwiT2tcIil9XG4vLyB9KTtcbiAgICAvLyBheGlvcyh7XHJcbiAgICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgLy8gICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInLFxyXG4gICAgLy8gICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcbiAgICAvLyAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgIC8vIH0pXHJcbiAgICAvLyAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgLy9cclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxufVxyXG5cclxuUmVnaXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICByZWdpc3RyYXRpb25SZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGFkZEZsYXNoTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpc0VtYWlsRXhpc3RzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcblJlZ2lzdHJhdGlvbi5jb250ZXh0VHlwZXMgPSB7XHJcbiAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9