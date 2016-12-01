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
	        onChange: this._onChange.bind(this)
	        //checkEmailExists={this._checkEmailExists.bind(this)}
	        , value: this.state.email,
	        placeholder: 'email',
	        field: 'email',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.password,
	        onChange: this._onChange.bind(this)
	        //checkEmailExists={this._checkEmailExists.bind(this)}
	        , value: this.state.password,
	        placeholder: 'password',
	        field: 'password',
	        type: 'password',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.passwordConfirmation,
	        onChange: this._onChange.bind(this)
	        //checkEmailExists={this._checkEmailExists.bind(this)}
	        , value: this.state.passwordConfirmation,
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
	  isEmailExists: _react2.default.PropTypes.func
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBQ0k7QUFBUjs7QUFHRixLQUFNLFVBQVU7O0tBRVY7MkJBQ0o7O3lCQUFZLE9BQU07MkJBQUE7OzZIQUVoQjs7V0FBSztjQUVIO2lCQUNBOzZCQUNBO2VBQ0E7Z0JBQVM7QUFKVDtZQU1IOzs7Ozs4QkFFQztjQUNFLHFDQUNBLDhDQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ25DLG1EQUNBO2dCQUNTLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7QUFIRjtBQUNFLFdBR0EsT0FBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7O2dCQUNTLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7QUFIRjtBQUNFLFdBR0EsT0FBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7ZUFDQTttQkFFRjs7Z0JBQ1MsS0FBSyxNQUFNLE9BQ2xCO21CQUFVLEtBQUssVUFBVSxLQUN6QjtBQUhGO0FBQ0UsV0FHQSxPQUFPLEtBQUssTUFDWjtnQkFDQTtlQUNBO3NCQUNBO21CQUVGO2dEQUNBLGdEQUFPLFVBQVUsS0FBSyxNQUFNLFNBQVMsV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BSW5GOzs7OytCQUVTLE9BQ1I7WUFBSyw2QkFBVyxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQzFDO1lBQ0Q7Ozs7dUNBRWlCLE9BQU07b0JBQ3RCOztXQUFNLFFBQVEsTUFBTSxPQUNwQjtXQUFNLFFBQVEsTUFBTSxPQUNwQjtXQUFHLFFBQVEsSUFDVDtjQUFLLE1BQU0sY0FBYyxPQUFPLEtBQUssZUFDakM7ZUFBSSxTQUFTLE9BQUssTUFDbEI7ZUFBSSxlQUNKO2VBQUcsSUFBSSxLQUFLLE1BQ1Y7b0JBQU8sU0FBUyw2QkFDaEI7dUJBQ0Q7QUFIRCxrQkFJRTtvQkFBTyxTQUNQO3VCQUNEO0FBQ0Q7a0JBQUssU0FBUyxFQUFDLE9BQUQsT0FBUSxTQUN6QjtBQUNGO0FBQ0Y7Ozs7K0JBRVE7NEJBQ21CLDBCQUFjLEtBQUs7V0FBdEM7V0FBUSx5QkFDZjs7V0FBRyxDQUFDLFNBQ0Y7Y0FBSyxTQUFTLEVBQUMsUUFDaEI7QUFDRDtjQUNEOzs7O21DQUVhLE9BQU07b0JBQ2xCOzthQUNBO2VBQVEsSUFBSSxLQUNaO1dBQUcsS0FBSyxRQUFRLEtBQUssUUFDbkI7Y0FBSyxTQUFTLEVBQUMsUUFDZjtjQUFLLE1BQU0sb0JBQW9CLEtBQUssT0FBTyxLQUN6QyxZQUNFO2tCQUFLLE1BQU07bUJBRVQ7bUJBRUY7QUFIRTtvQ0FHVSxLQUNaO0FBQ0Q7QUFSSCxZQVNFLFVBQUMsS0FDQztBQUNBO21CQUFRLElBQ1Q7QUFDSjtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7O0dBN0h3QixnQkFBTTs7QUFnSWpDLGNBQWE7d0JBQ1UsZ0JBQU0sVUFBVSxLQUNyQztvQkFBaUIsZ0JBQU0sVUFBVSxLQUNqQztrQkFBZSxnQkFBTSxVQUFVO0FBRi9COztBQUtGLGNBQWE7V0FDSCxnQkFBTSxVQUFVLE9BQU87QUFBL0I7O2dCQUdhOzs7Ozs7Ozs7aUNBaEpUOztpQ0FJQTs7aUNBRUEiLCJmaWxlIjoiMC4wNzUyN2RjNzdlODQ0NGI4ODg5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHZhbGlkYXRlSW5wdXQgZnJvbSAnLi9WYWxpZGF0aW9uLmpzJ1xuaW1wb3J0IFRleHRGaWVsZEdyb3VwIGZyb20gJy4vVGV4dEZpZWxkR3JvdXAuanMnXHJcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbic7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMCAwIDVweCAwXCJcclxufVxyXG5cclxuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbWFpbDogICAgICAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICAgJycsXHJcbiAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAgJycsXHJcbiAgICAgIGVycm9yczogICAgIHt9LFxyXG4gICAgICBpbnZhbGlkOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgPGg0PnJlZ2lzdGVyPC9oND5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgLy9jaGVja0VtYWlsRXhpc3RzPXt0aGlzLl9jaGVja0VtYWlsRXhpc3RzLmJpbmQodGhpcyl9XG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxuICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcbiAgICAgICAgZmllbGQ9XCJlbWFpbFwiXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxuICAgICAgLz5cbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5wYXNzd29yZH1cclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAvL2NoZWNrRW1haWxFeGlzdHM9e3RoaXMuX2NoZWNrRW1haWxFeGlzdHMuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgZmllbGQ9XCJwYXNzd29yZFwiXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9ufVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIC8vY2hlY2tFbWFpbEV4aXN0cz17dGhpcy5fY2hlY2tFbWFpbEV4aXN0cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkQ29uZmlybWF0aW9ufVxyXG4gICAgICAgIGZpZWxkPVwicGFzc3dvcmRDb25maXJtYXRpb25cIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGlucHV0IGRpc2FibGVkPXt0aGlzLnN0YXRlLmludmFsaWR9IGNsYXNzTmFtZT1cImJ0biAuYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJyZWdpc3RlclwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGV2ZW50KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gICAgdGhpcy5pc1ZhbGlkKCk7XHJcbiAgfVxyXG5cclxuICBfY2hlY2tFbWFpbEV4aXN0cyhldmVudCl7XHJcbiAgICBjb25zdCBmaWVsZCA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBpZih2YWwgIT09ICcnKXtcclxuICAgICAgdGhpcy5wcm9wcy5pc0VtYWlsRXhpc3RzKHZhbHVlKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBsZXQgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XHJcbiAgICAgICAgICBsZXQgaW52YWxpZDtcclxuICAgICAgICAgIGlmKHJlcy5kYXRhLnVzZXIpe1xyXG4gICAgICAgICAgICBlcnJvcnNbZmllbGRdID0gJ1RoZXJlIGlzIHVzZXIgd2l0aCBzdWNoICcgKyBmaWVsZDtcclxuICAgICAgICAgICAgaW52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlcnJvcnNbZmllbGRdID0gJyc7XHJcbiAgICAgICAgICAgIGludmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9zLCBpbnZhbGlkfSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkKCl7XHJcbiAgICBjb25zdCB7ZXJyb3JzLCBpc1ZhbGlkfSA9IHZhbGlkYXRlSW5wdXQodGhpcy5zdGF0ZSk7XHJcbiAgICBpZighaXNWYWxpZCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yc30pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGlzVmFsaWQ7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgICBpZih0aGlzLmlzVmFsaWQodGhpcy5zdGF0ZSkpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczoge319KTtcbiAgICAgIHRoaXMucHJvcHMucmVnaXN0cmF0aW9uUmVxdWVzdCh0aGlzLnN0YXRlKS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wcm9wcy5hZGRGbGFzaE1lc3NhZ2Uoe1xuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgdGV4dDogJ1lvdSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEgV2VsY29tZSB0byBWYXppdW9qdS1WZXp1ISdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvJyk7XG4gICAgICAgICAgLy9vciB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcbiAgICAgICAgfSxcbiAgICAgICAgKGVycikgPT4ge1xuICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyLnJlc3BvbnNlLmRhdGF9KVxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyk7XG4vLyAgICAgJC5hamF4KHtcbi8vICAgdHlwZTogXCJQT1NUXCIsXG4vLyAgIHVybDogYCR7YmFzZVVybH1gLFxuLy8gICBkYXRhOiB0aGlzLnN0YXRlLFxuLy8gICAgICBkYXRhVHlwZTogJ2pzb24nLFxuLy8gICBzdWNjZXNzOiBmdW5jdGlvbihlKXtjb25zb2xlLmxvZyhcIk9rXCIpfVxuLy8gfSk7XG4gICAgLy8gYXhpb3Moe1xyXG4gICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJyxcclxuICAgIC8vICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgLy8gICBoZWFkZXJzOiB7XHJcbiAgICAvLyAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgLy8gICB9LFxyXG4gICAgLy8gICBkYXRhOiB0aGlzLnN0YXRlLFxyXG4gICAgLy8gICBkYXRhVHlwZTogJ2pzb24nXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4oKHJlc3VsdCk9PntcclxuICAgIC8vXHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICAvLyB9KTtcclxuICB9XHJcbn1cclxuXHJcblJlZ2lzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbiAgcmVnaXN0cmF0aW9uUmVxdWVzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBhZGRGbGFzaE1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNFbWFpbEV4aXN0czogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuUmVnaXN0cmF0aW9uLmNvbnRleHRUeXBlcyA9IHtcclxuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=