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
	      }), this.state.errors.email && _react2.default.createElement('span', null, _react2.default.createElement('h5', null, this.state.errors.email)), _react2.default.createElement('input', {
	        value: this.state.password,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        type: 'password',
	        name: 'password',
	        placeholder: 'password'
	      }), this.state.errors.password && _react2.default.createElement('span', null, _react2.default.createElement('h5', null, this.state.errors.password)), _react2.default.createElement('input', {
	        value: this.state.passwordConfirmation,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        type: 'password',
	        name: 'passwordConfirmation',
	        placeholder: 'confirm password'
	      }), this.state.errors.passwordConfirmation && _react2.default.createElement('div', null, _react2.default.createElement('span', null, _react2.default.createElement('h5', null, this.state.errors.passwordConfirmation))), _react2.default.createElement('input', { className: 'btn .btn-primary', type: 'submit', value: 'register' })));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
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
	        }, function (err) {
	          _this2.setState({ errors: err.response.data });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztBQUdGLEtBQU0sVUFBVTs7S0FFVjsyQkFDSjs7eUJBQVksT0FBTTsyQkFBQTs7NkhBRWhCOztXQUFLO2NBRUg7aUJBQ0E7NkJBQ0E7ZUFBWTtBQUhaO1lBS0g7Ozs7OzhCQUVDO2NBQ0UscUNBQ0EsOENBQU0sVUFBVSxLQUFLLGNBQWMsS0FDbkMsbURBQ0E7Z0JBQ08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTtlQUNBO2VBQ0E7c0JBRUM7QUFSRCxnQkFRTSxNQUFNLE9BQU8sU0FBUyxzQ0FBTSwwQ0FBSyxXQUFLLE1BQU0sT0FDbEQ7Z0JBQ08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTtlQUNBO2VBQ0E7c0JBRUM7QUFSRCxnQkFRTSxNQUFNLE9BQU8sWUFBWSxzQ0FBTSwwQ0FBSyxXQUFLLE1BQU0sT0FDckQ7Z0JBQ08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTtlQUNBO2VBQ0E7c0JBRUM7QUFSRCxnQkFRTSxNQUFNLE9BQU8sd0JBQXdCLHFDQUFLLDRDQUFNLDBDQUFLLFdBQUssTUFBTSxPQUN0RSxrRUFBTyxXQUFVLG9CQUFtQixNQUFLLFVBQVMsT0FJckQ7Ozs7K0JBRVMsT0FDUjtZQUFLLDZCQUFXLE1BQU0sT0FBTyxNQUFPLE1BQU0sT0FDM0M7Ozs7K0JBRVE7NEJBQ29CLDBCQUFjLEtBQUs7V0FBdEM7V0FBUSx5QkFDaEI7O1dBQUcsQ0FBQyxTQUNGO2NBQUssU0FBUyxFQUFDLFFBQ2hCO0FBQ0Q7Y0FDRDs7OzttQ0FFYSxPQUFNO29CQUVsQjs7YUFDQTtlQUFRLElBQUksS0FDWjtXQUFHLEtBQUssUUFBUSxLQUFLLFFBQ25CO2NBQUssU0FBUyxFQUFDLFFBQ2Y7Y0FBSyxNQUFNLG9CQUFvQixLQUFLLE9BQU8sS0FDekMsWUFDRTtrQkFBSyxNQUFNO21CQUVUO21CQUVGO0FBSEU7a0JBR0csUUFBUSxPQUFPLEtBQ3JCO0FBUEgsWUFRRSxVQUFDLEtBQ0M7a0JBQUssU0FBUyxFQUFDLFFBQVEsSUFBSSxTQUM1QjtBQUNKO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7Ozs7R0F2R3dCLGdCQUFNOztBQTBHakMsY0FBYTt3QkFDVSxnQkFBTSxVQUFVLEtBQUs7QUFBMUM7O2dCQUdhOzs7Ozs7Ozs7aUNBcEhUOztpQ0FJQTs7aUNBRUEiLCJmaWxlIjoiMC4yMjZlMTA1ODg2NDAzY2I4YjQxMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHZhbGlkYXRlSW5wdXQgZnJvbSAnLi9WYWxpZGF0aW9uLmpzJ1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuXHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZW1haWw6ICAgICAgJycsXHJcbiAgICAgIHBhc3N3b3JkOiAgICcnLFxyXG4gICAgICBwYXNzd29yZENvbmZpcm1hdGlvbjogICcnLFxyXG4gICAgICBlcnJvcnM6ICAgICB7fVxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgPGg0PnJlZ2lzdGVyPC9oND5cclxuICAgICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgc3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIHt0aGlzLnN0YXRlLmVycm9ycy5lbWFpbCAmJiA8c3Bhbj48aDU+e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfTwvaDU+PC9zcGFuPn1cclxuICAgICAgPGlucHV0XHJcbiAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgc3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAvPlxyXG4gICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmQgJiYgPHNwYW4+PGg1Pnt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZH08L2g1Pjwvc3Bhbj59XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZENvbmZpcm1hdGlvbn1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIHN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICBuYW1lPVwicGFzc3dvcmRDb25maXJtYXRpb25cIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIlxyXG4gICAgICAvPlxuICAgICAge3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uICYmIDxkaXY+PHNwYW4+PGg1Pnt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbn08L2g1Pjwvc3Bhbj48L2Rpdj59XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoKXtcclxuICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkfSA9IHZhbGlkYXRlSW5wdXQodGhpcy5zdGF0ZSk7XHJcbiAgICBpZighaXNWYWxpZCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgaWYodGhpcy5pc1ZhbGlkKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IHt9fSk7XG4gICAgICB0aGlzLnByb3BzLnJlZ2lzdHJhdGlvblJlcXVlc3QodGhpcy5zdGF0ZSkudGhlbihcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJvcHMuYWRkRmxhc2hNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICdTdWNjZXNzJyxcbiAgICAgICAgICAgIHRleHQ6ICdZb3UgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhIFdlbGNvbWUgdG8gVmF6aXVvanUtVmV6dSEnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKCcvJyk7XG4gICAgICAgIH0sXG4gICAgICAgIChlcnIpID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVyci5yZXNwb25zZS5kYXRhfSlcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vKTtcbi8vICAgICAkLmFqYXgoe1xuLy8gICB0eXBlOiBcIlBPU1RcIixcbi8vICAgdXJsOiBgJHtiYXNlVXJsfWAsXG4vLyAgIGRhdGE6IHRoaXMuc3RhdGUsXG4vLyAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4vLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKFwiT2tcIil9XG4vLyB9KTtcbiAgICAvLyBheGlvcyh7XHJcbiAgICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgLy8gICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInLFxyXG4gICAgLy8gICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcbiAgICAvLyAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgIC8vIH0pXHJcbiAgICAvLyAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgLy9cclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxufVxyXG5cclxuUmVnaXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICByZWdpc3RyYXRpb25SZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==