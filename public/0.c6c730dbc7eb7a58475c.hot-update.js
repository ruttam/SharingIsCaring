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
	
	var _TextFieldGroup = __webpack_require__(536);
	
	var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);
	
	var _reactRouter = __webpack_require__(259);
	
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
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'register'), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.email,
	        onChange: this._onChange.bind(this),
	        value: this.state.email,
	        placeholder: 'email',
	        field: 'email',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.password,
	        onChange: this._onChange.bind(this),
	        value: this.state.password,
	        placeholder: 'password',
	        field: 'password',
	        type: 'password',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.passwordConfirmation,
	        onChange: this._onChange.bind(this),
	        value: this.state.passwordConfirmation,
	        field: 'passwordConfirmation',
	        type: 'password',
	        placeholder: 'confirm password',
	        divStyle: divStyle
	      }), _react2.default.createElement('br', null), _react2.default.createElement('input', { className: 'btn .btn-primary', type: 'submit', value: 'register' })));
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
	        this.context.router.push('/');
	        this.props.registrationRequest(this.state).then(function () {
	          // this.props.addFlashMessage({
	          //   type: 'Success',
	          //   text: 'You registered successfully! Welcome to Vaziuoju-Vezu!'
	          // });
	          _reactRouter.hashHistory.push('/');
	          //or this.context.router.push('/');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtXQUNJO0FBQVI7O0FBR0YsS0FBTSxVQUFVOztLQUVWOzJCQUNKOzt5QkFBWSxPQUFNOzJCQUFBOzs2SEFFaEI7O1dBQUs7Y0FFSDtpQkFDQTs2QkFDQTtlQUFZO0FBSFo7WUFLSDs7Ozs7OEJBRUM7Y0FDRSxxQ0FDQSw4Q0FBTSxVQUFVLEtBQUssY0FBYyxLQUNuQyxtREFDQTtnQkFDUyxLQUFLLE1BQU0sT0FDbEI7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQVBFO2dCQVFPLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO2VBQ0E7bUJBRUY7QUFSRTtnQkFTTyxLQUFLLE1BQU0sT0FDbEI7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtnQkFDQTtlQUNBO3NCQUNBO21CQUVGO0FBUkUsK0NBU0YsZ0RBQU8sV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BSXJEOzs7OytCQUVTLE9BQ1I7WUFBSyw2QkFBVyxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQzNDOzs7OytCQUVROzRCQUNvQiwwQkFBYyxLQUFLO1dBQXRDO1dBQVEseUJBQ2hCOztXQUFHLENBQUMsU0FDRjtjQUFLLFNBQVMsRUFBQyxRQUNoQjtBQUNEO2NBQ0Q7Ozs7bUNBRWEsT0FBTTtvQkFFbEI7O2FBQ0E7ZUFBUSxJQUFJLEtBQ1o7V0FBRyxLQUFLLFFBQVEsS0FBSyxRQUNuQjtjQUFLLFNBQVMsRUFBQyxRQUNmO2NBQUssUUFBUSxPQUFPLEtBQ3BCO2NBQUssTUFBTSxvQkFBb0IsS0FBSyxPQUFPLEtBQ3pDLFlBQ0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtvQ0FBWSxLQUNaO0FBQ0Q7QUFSSCxZQVNFLFVBQUMsS0FDQztrQkFBSyxTQUFTLEVBQUMsUUFBUSxJQUFJLFNBQzVCO0FBQ0o7QUFDRDtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7OztHQXRHd0IsZ0JBQU07O0FBeUdqQyxjQUFhO3dCQUNVLGdCQUFNLFVBQVUsS0FBSztBQUExQzs7QUFHRixjQUFhO1dBQ0gsZ0JBQU0sVUFBVSxPQUFPO0FBQS9COztnQkFHYTs7Ozs7Ozs7O2lDQXZIVDs7aUNBSUE7O2lDQUVBIiwiZmlsZSI6IjAuYzZjNzMwZGJjN2ViN2E1ODQ3NWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcydcbmltcG9ydCBUZXh0RmllbGRHcm91cCBmcm9tICcuL1RleHRGaWVsZEdyb3VwLmpzJ1xyXG5pbXBvcnQge2hhc2hIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMCAwIDVweCAwXCJcclxufVxyXG5cclxuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbWFpbDogICAgICAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICAgJycsXHJcbiAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAgJycsXHJcbiAgICAgIGVycm9yczogICAgIHt9XHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICA8aDQ+cmVnaXN0ZXI8L2g0PlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWx9XG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgIGZpZWxkPVwiZW1haWxcIlxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cbiAgICAgIC8+XG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGZpZWxkPVwicGFzc3dvcmRcIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbn1cclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZENvbmZpcm1hdGlvbn1cclxuICAgICAgICBmaWVsZD1cInBhc3N3b3JkQ29uZmlybWF0aW9uXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxici8+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoKXtcclxuICAgIGNvbnN0IHsgZXJyb3JzLCBpc1ZhbGlkfSA9IHZhbGlkYXRlSW5wdXQodGhpcy5zdGF0ZSk7XHJcbiAgICBpZighaXNWYWxpZCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuXHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG4gICAgaWYodGhpcy5pc1ZhbGlkKHRoaXMuc3RhdGUpKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IHt9fSk7XG4gICAgICB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcbiAgICAgIHRoaXMucHJvcHMucmVnaXN0cmF0aW9uUmVxdWVzdCh0aGlzLnN0YXRlKS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5wcm9wcy5hZGRGbGFzaE1lc3NhZ2Uoe1xuICAgICAgICAgIC8vICAgdHlwZTogJ1N1Y2Nlc3MnLFxuICAgICAgICAgIC8vICAgdGV4dDogJ1lvdSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEgV2VsY29tZSB0byBWYXppdW9qdS1WZXp1ISdcbiAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgLy9vciB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyLnJlc3BvbnNlLmRhdGF9KVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8pO1xuLy8gICAgICQuYWpheCh7XG4vLyAgIHR5cGU6IFwiUE9TVFwiLFxuLy8gICB1cmw6IGAke2Jhc2VVcmx9YCxcbi8vICAgZGF0YTogdGhpcy5zdGF0ZSxcbi8vICAgICAgZGF0YVR5cGU6ICdqc29uJyxcbi8vICAgc3VjY2VzczogZnVuY3Rpb24oZSl7Y29uc29sZS5sb2coXCJPa1wiKX1cbi8vIH0pO1xuICAgIC8vIGF4aW9zKHtcclxuICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAvLyAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcicsXHJcbiAgICAvLyAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgIC8vICAgaGVhZGVyczoge1xyXG4gICAgLy8gICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgZGF0YTogdGhpcy5zdGF0ZSxcclxuICAgIC8vICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgLy8gfSlcclxuICAgIC8vIC50aGVuKChyZXN1bHQpPT57XHJcbiAgICAvL1xyXG4gICAgLy8gICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgLy8gfSk7XHJcbiAgfVxyXG59XHJcblxyXG5SZWdpc3RyYXRpb24ucHJvcFR5cGVzID0ge1xyXG4gIHJlZ2lzdHJhdGlvblJlcXVlc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5cclxuUmVnaXN0cmF0aW9uLmNvbnRleHRUeXBlcyA9IHtcclxuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=