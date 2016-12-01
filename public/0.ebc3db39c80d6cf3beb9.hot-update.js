webpackHotUpdate(0,{

/***/ 346:
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
	
	var Registration = function (_React$Component) {
	  _inherits(Registration, _React$Component);
	
	  function Registration(props) {
	    _classCallCheck(this, Registration);
	
	    var _this = _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).call(this, props));
	
	    _this.state = {
	      email: '',
	      password: '',
	      rPassword: ''
	    };
	    return _this;
	  }
	
	  _createClass(Registration, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { className: 'form-group', onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('label', { className: 'control-label' }, 'Register'), _react2.default.createElement('br', null), _react2.default.createElement('input', {
	        value: this.state.email,
	        onChange: this._onChange.bind(this),
	        type: 'text',
	        name: 'email',
	        placeholder: 'email',
	        ref: function ref(input) {
	          return _this2._email = input;
	        }
	      }), _react2.default.createElement('br', null), _react2.default.createElement('input', {
	        value: this.state.password,
	        onChange: this._onChange.bind(this),
	        type: 'password',
	        name: 'password',
	        placeholder: 'password',
	        ref: function ref(input) {
	          return _this2._password = input;
	        }
	      }), _react2.default.createElement('br', null), _react2.default.createElement('input', {
	        value: this.state.rPassword,
	        onChange: this._onChange.bind(this),
	        type: 'password',
	        name: 'rPassword',
	        placeholder: 'repeat password',
	        ref: function ref(input) {
	          return _this2._rPassword = input;
	        }
	      }), _react2.default.createElement('input', { type: 'submit', value: 'register' })));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(event) {
	      var email = this._email;
	      var password = this._password;
	      var rPassword = this._rPassword;
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(event) {
	      event.preventDefault();
	      console.log(this.state);
	    }
	  }]);
	
	  return Registration;
	}(_react2.default.Component);
	
	var _default = Registration;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
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

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_defineProperty, "_defineProperty", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRU07MkJBQ0o7O3lCQUFZLE9BQU07MkJBQUE7OzZIQUVoQjs7V0FBSztjQUVIO2lCQUNBO2tCQUFZO0FBRlo7WUFJSDs7Ozs7OEJBQ1E7b0JBQ1A7O2NBQ0UscUNBQ0EsOENBQU0sV0FBVSxjQUFhLFVBQVUsS0FBSyxjQUFjLEtBQ3hELGtEQUFPLFdBQVUsbUJBQWdDLGlEQUNqRDtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2VBQ0E7ZUFDQTtzQkFDQTtjQUFLLGFBQUMsT0FBRDtrQkFBVyxPQUFLLFNBQVM7QUFDOUI7QUFOQSwrQ0FPRjtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2VBQ0E7ZUFDQTtzQkFDQTtjQUFLLGFBQUMsT0FBRDtrQkFBVyxPQUFLLFlBQWE7QUFDbEM7QUFOQSwrQ0FPRjtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2VBQ0E7ZUFDQTtzQkFDQTtjQUFLLGFBQUMsT0FBRDtrQkFBVyxPQUFLLGFBQWE7QUFFcEM7QUFQRSxvREFPSyxNQUFLLFVBQVMsT0FJMUI7Ozs7K0JBRVMsT0FDUjtXQUFJLFFBQVEsS0FDWjtXQUFJLFdBQVcsS0FDZjtXQUFJLFlBQVksS0FDaEI7WUFBSyw2QkFBVyxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQzNDOzs7O21DQUVhLE9BQ1o7YUFDQTtlQUFRLElBQUksS0FDYjs7Ozs7R0F0RHdCLGdCQUFNOztnQkF5RGxCOzs7Ozs7Ozs7aUNBekRUIiwiZmlsZSI6IjAuZWJjM2RiMzljODBkNmNmM2JlYjkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAgICAgICcnLFxyXG4gICAgICBwYXNzd29yZDogICAnJyxcclxuICAgICAgclBhc3N3b3JkOiAgJydcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+UmVnaXN0ZXI8L2xhYmVsPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9lbWFpbCA9IGlucHV0fVxyXG4gICAgICAgIC8+PGJyIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9wYXNzd29yZCA9ICBpbnB1dH1cclxuICAgICAgICAvPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuclBhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInJQYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiXHJcbiAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5fclBhc3N3b3JkID0gaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShldmVudCl7XHJcbiAgICBsZXQgZW1haWwgPSB0aGlzLl9lbWFpbDtcclxuICAgIGxldCBwYXNzd29yZCA9IHRoaXMuX3Bhc3N3b3JkO1xyXG4gICAgbGV0IHJQYXNzd29yZCA9IHRoaXMuX3JQYXNzd29yZDtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=