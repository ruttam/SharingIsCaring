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
	      }), this.state.errors.email && _react2.default.createElement('span', null, this.state.errors.email), _react2.default.createElement('input', {
	        value: this.state.password,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        type: 'password',
	        name: 'password',
	        placeholder: 'password'
	      }), this.state.errors.password && _react2.default.createElement('span', null, this.state.errors.password), _react2.default.createElement('input', {
	        value: this.state.passwordConfirmation,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        type: 'password',
	        name: 'passwordConfirmation',
	        placeholder: 'confirm password'
	      }), this.state.errors.passwordConfirmation && _react2.default.createElement('div', null, _react2.default.createElement('span', null, this.state.errors.passwordConfirmation)), _react2.default.createElement('input', { className: 'btn .btn-primary', type: 'submit', value: 'register' })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztBQUdGLEtBQU0sVUFBVTs7S0FFVjsyQkFDSjs7eUJBQVksT0FBTTsyQkFBQTs7NkhBRWhCOztXQUFLO2NBRUg7aUJBQ0E7NkJBQ0E7ZUFBWTtBQUhaO1lBS0g7Ozs7OzhCQUVDO2NBQ0UscUNBQ0EsOENBQU0sVUFBVSxLQUFLLGNBQWMsS0FDbkMsbURBQ0E7Z0JBQ08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTtlQUNBO2VBQ0E7c0JBRUM7QUFSRCxnQkFRTSxNQUFNLE9BQU8sU0FBUyxzQ0FBTyxXQUFLLE1BQU0sT0FDOUM7Z0JBQ08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTtlQUNBO2VBQ0E7c0JBRUM7QUFSRCxnQkFRTSxNQUFNLE9BQU8sWUFBWSxzQ0FBTyxXQUFLLE1BQU0sT0FDakQ7Z0JBQ08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTtlQUNBO2VBQ0E7c0JBRUM7QUFSRCxnQkFRTSxNQUFNLE9BQU8sd0JBQXdCLHFDQUFLLDRDQUFPLFdBQUssTUFBTSxPQUNsRSxpRUFBTyxXQUFVLG9CQUFtQixNQUFLLFVBQVMsT0FJckQ7Ozs7K0JBRVMsT0FDUjtZQUFLLDZCQUFXLE1BQU0sT0FBTyxNQUFPLE1BQU0sT0FDM0M7Ozs7K0JBRVE7NEJBQ29CLDBCQUFjLEtBQUs7V0FBdEM7V0FBUSx5QkFDaEI7O1dBQUcsQ0FBQyxTQUNGO2NBQUssU0FBUyxFQUFDLFFBQ2hCO0FBRUQ7O2NBQ0Q7Ozs7bUNBRWEsT0FBTTtvQkFFbEI7O2FBQ0E7ZUFBUSxJQUFJLEtBQ1o7V0FBRyxLQUFLLFFBQVEsS0FBSyxRQUNuQjtjQUFLLFNBQVMsRUFBQyxRQUNmO2NBQUssTUFBTSxvQkFBb0IsS0FBSyxPQUFPLEtBQ3pDLFlBQ0U7a0JBQUssTUFBTTttQkFFVDttQkFFRjtBQUhFO2tCQUdHLFFBQVEsT0FBTyxLQUNyQjtBQVBILFlBUUUsVUFBQyxLQUNDO2tCQUFLLFNBQVMsRUFBQyxRQUFRLElBQUksU0FDNUI7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7O0dBeEd3QixnQkFBTTs7QUEyR2pDLGNBQWE7d0JBQ1UsZ0JBQU0sVUFBVSxLQUFLO0FBQTFDOztnQkFHYTs7Ozs7Ozs7O2lDQXJIVDs7aUNBSUE7O2lDQUVBIiwiZmlsZSI6IjAuNDcyMzAwNjA4ODZmNDE4MWQzNDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcydcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIG1hcmdpbjogXCIwIDAgNXB4IDBcIlxyXG59XHJcblxyXG5jb25zdCBiYXNlVXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcic7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAgICAgICcnLFxyXG4gICAgICBwYXNzd29yZDogICAnJyxcclxuICAgICAgcGFzc3dvcmRDb25maXJtYXRpb246ICAnJyxcclxuICAgICAgZXJyb3JzOiAgICAge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgIDxoND5yZWdpc3RlcjwvaDQ+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIHN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAvPlxyXG4gICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWwgJiYgPHNwYW4+e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfTwvc3Bhbj59XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgIHN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgLz5cclxuICAgICAge3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkICYmIDxzcGFuPnt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZH08L3NwYW4+fVxyXG4gICAgICA8aW5wdXRcclxuICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmRDb25maXJtYXRpb259XHJcbiAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICBzdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgbmFtZT1cInBhc3N3b3JkQ29uZmlybWF0aW9uXCJcclxuICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCJcclxuICAgICAgLz5cbiAgICAgIHt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbiAmJiA8ZGl2PjxzcGFuPnt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbn08L3NwYW4+PC9kaXY+fVxyXG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIC5idG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInJlZ2lzdGVyXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UoZXZlbnQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKCl7XHJcbiAgICBjb25zdCB7IGVycm9ycywgaXNWYWxpZH0gPSB2YWxpZGF0ZUlucHV0KHRoaXMuc3RhdGUpO1xyXG4gICAgaWYoIWlzVmFsaWQpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICBpZih0aGlzLmlzVmFsaWQodGhpcy5zdGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczoge319KTtcbiAgICAgIHRoaXMucHJvcHMucmVnaXN0cmF0aW9uUmVxdWVzdCh0aGlzLnN0YXRlKS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5hZGRGbGFzaE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGV4dDogJ1lvdSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEgV2VsY29tZSB0byBWYXppdW9qdS1WZXp1ISdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyLnJlc3BvbnNlLmRhdGF9KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8pO1xuLy8gICAgICQuYWpheCh7XG4vLyAgIHR5cGU6IFwiUE9TVFwiLFxuLy8gICB1cmw6IGAke2Jhc2VVcmx9YCxcbi8vICAgZGF0YTogdGhpcy5zdGF0ZSxcbi8vICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbi8vICAgc3VjY2VzczogZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coXCJPa1wiKX1cbi8vIH0pO1xuICAgIC8vIGF4aW9zKHtcclxuICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAvLyAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcicsXHJcbiAgICAvLyAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgZGF0YTogdGhpcy5zdGF0ZSxcclxuICAgIC8vICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgLy8gfSlcclxuICAgIC8vIC50aGVuKChyZXN1bHQpPT57XHJcbiAgICAvL1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG59XHJcblxyXG5SZWdpc3RyYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIHJlZ2lzdHJhdGlvblJlcXVlc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9