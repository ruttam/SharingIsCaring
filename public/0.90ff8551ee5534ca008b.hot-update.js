webpackHotUpdate(0,{

/***/ 320:
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
	
	var _axios = __webpack_require__(321);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _Validation = __webpack_require__(389);
	
	var _Validation2 = _interopRequireDefault(_Validation);
	
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
	      errors: {}
	    };
	    return _this;
	  }
	
	  _createClass(Registration, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'register'), _react2.default.createElement('input', {
	        value: this.state.email,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        type: 'text',
	        name: 'email',
	        placeholder: 'email'
	      }), this.state.errors.email && _react2.default.createElement('span', null, errors.email), _react2.default.createElement('input', {
	        value: this.state.password,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        required: 'required',
	        type: 'password',
	        name: 'password',
	        placeholder: 'password'
	      }), _react2.default.createElement('input', {
	        value: this.state.passwordConfirmation,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        required: 'required',
	        type: 'password',
	        name: 'passwordConfirmation',
	        placeholder: 'confirm password'
	      }), _react2.default.createElement('input', { className: 'btn .btn-primary', type: 'submit', value: 'register' })));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var _validationInput = validationInput(this.state),
	          errors = _validationInput.errors,
	          isValid = _validationInput.isValid;
	
	      if (!isValid) {
	        this.setState({ errors: errors });
	      }
	
	      return isValid;
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(event) {
	      var _this2 = this;
	
	      event.preventDefault();
	      console.log(this.state);
	      if (this.isValid(this.state)) {
	        this.setState({ errors: {} });
	        this.props.registrationRequest(this.state).then(function () {
	          _this2.props.addFlashMessage({
	            type: 'Success',
	            text: 'You registered successfully! Welcome to Vaziuoju-Vezu!'
	          });
	          _this2.context.router.push('/');
	        }, function (error) {
	          _this2.setState({ errors: error.response.data, isLoading: false });
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
	  registrationRequest: _react2.default.PropTypes.func.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztBQUdGLEtBQU0sVUFBVTs7S0FFVjsyQkFDSjs7eUJBQVksT0FBTTsyQkFBQTs7NkhBRWhCOztXQUFLO2NBRUg7aUJBQ0E7NkJBQ0E7ZUFBWTtBQUhaO1lBS0g7Ozs7OzhCQUVDO2NBQ0UscUNBQ0EsOENBQU0sVUFBVSxLQUFLLGNBQWMsS0FDbkMsbURBQ0E7Z0JBQ08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTtlQUNBO2VBQ0E7c0JBRUM7QUFSRCxnQkFRTSxNQUFNLE9BQU8sU0FBUyxzQ0FBTyxhQUNuQztnQkFDTyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO29CQUNBO2dCQUNBO21CQUNBO2VBQ0E7ZUFDQTtzQkFFQTtBQVRBO2dCQVVPLEtBQUssTUFDWjttQkFBVSxLQUFLLFVBQVUsS0FDekI7b0JBQ0E7Z0JBQ0E7bUJBQ0E7ZUFDQTtlQUNBO3NCQUVBO0FBVEEsb0RBU08sV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BSXJEOzs7OytCQUVTLE9BQ1I7WUFBSyw2QkFBVyxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQzNDOzs7OytCQUVROzhCQUNvQixnQkFBZ0IsS0FBSztXQUF4QztXQUFRLDJCQUNoQjs7V0FBRyxDQUFDLFNBQ0Y7Y0FBSyxTQUFTLEVBQUMsUUFDaEI7QUFFRDs7Y0FDRDs7OzttQ0FFYSxPQUFNO29CQUVsQjs7YUFDQTtlQUFRLElBQUksS0FDWjtXQUFHLEtBQUssUUFBUSxLQUFLLFFBQ25CO2NBQUssU0FBUyxFQUFDLFFBQ2Y7Y0FBSyxNQUFNLG9CQUFvQixLQUFLLE9BQU8sS0FDekMsWUFDRTtrQkFBSyxNQUFNO21CQUVUO21CQUVGO0FBSEU7a0JBR0csUUFBUSxPQUFPLEtBQ3JCO0FBUEgsWUFRRSxVQUFDLE9BQ0M7a0JBQUssU0FBUyxFQUFDLFFBQVEsTUFBTSxTQUFTLE1BQU0sV0FDN0M7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7O0dBeEd3QixnQkFBTTs7QUEyR2pDLGNBQWE7d0JBQ1UsZ0JBQU0sVUFBVSxLQUFLO0FBQTFDOztnQkFHYTs7Ozs7Ozs7O2lDQXJIVDs7aUNBSUE7O2lDQUVBIiwiZmlsZSI6IjAuOTBmZjg1NTFlZTU1MzRjYTAwOGIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcydcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIG1hcmdpbjogXCIwIDAgNXB4IDBcIlxyXG59XHJcblxyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcic7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAgICAgICcnLFxyXG4gICAgICBwYXNzd29yZDogICAnJyxcclxuICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246ICAnJyxcclxuICAgICAgZXJyb3JzOiAgICAge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgIDxoND5yZWdpc3RlcjwvaDQ+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIHN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAvPlxyXG4gICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWwgJiYgPHNwYW4+e2Vycm9ycy5lbWFpbH08L3NwYW4+fVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICBzdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXHJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRDb25maXJtYXRpb259XHJcbiAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICBzdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXHJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgIG5hbWU9XCJwYXNzd29yZENvbmZpcm1hdGlvblwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiY29uZmlybSBwYXNzd29yZFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoKXtcclxuICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkfSA9IHZhbGlkYXRpb25JbnB1dCh0aGlzLnN0YXRlKTtcclxuICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgaWYodGhpcy5pc1ZhbGlkKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IHt9fSk7XG4gICAgICB0aGlzLnByb3BzLnJlZ2lzdHJhdGlvblJlcXVlc3QodGhpcy5zdGF0ZSkudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuYWRkRmxhc2hNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIHRleHQ6ICdZb3UgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhIFdlbGNvbWUgdG8gVmF6aXVvanUtVmV6dSEnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyb3IucmVzcG9uc2UuZGF0YSwgaXNMb2FkaW5nOiBmYWxzZX0pXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyk7XG4vLyAgICAgJC5hamF4KHtcbi8vICAgdHlwZTogXCJQT1NUXCIsXG4vLyAgIHVybDogYCR7YmFzZVVybH1gLFxuLy8gICBkYXRhOiB0aGlzLnN0YXRlLFxuLy8gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuLy8gICBzdWNjZXNzOiBmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhcIk9rXCIpfVxuLy8gfSk7XG4gICAgLy8gYXhpb3Moe1xyXG4gICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJyxcclxuICAgIC8vICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBkYXRhOiB0aGlzLnN0YXRlLFxyXG4gICAgLy8gICBkYXRhVHlwZTogJ2pzb24nXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4oKHJlc3VsdCk9PntcclxuICAgIC8vXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcbn1cclxuXHJcblJlZ2lzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcmVnaXN0cmF0aW9uUmVxdWVzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=