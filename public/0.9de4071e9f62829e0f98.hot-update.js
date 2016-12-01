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
	        onChange: this._handleSubmit.bind(this),
	        type: 'text',
	        name: 'email',
	        placeholder: 'email',
	        ref: function ref(input) {
	          return _this2._email = input;
	        }
	      }), _react2.default.createElement('br', null), _react2.default.createElement('input', { type: 'password', name: 'password', placeholder: 'password', ref: function ref(input) {
	          return _this2._password = input;
	        } }), _react2.default.createElement('br', null), _react2.default.createElement('input', {
	        type: 'password',
	        placeholder: 'repeat password',
	        ref: function ref(input) {
	          return _this2._rPassword = input;
	        }
	      }), _react2.default.createElement('input', { type: 'submit', value: 'register' })));
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(event) {
	      event.preventDefault();
	      var email = this._email;
	      var password = this._password;
	      var rPassword = this._rPassword;
	      set.state(_defineProperty({}, event.target.name, event.target.value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRU07MkJBQ0o7O3lCQUFZLE9BQU07MkJBQUE7OzZIQUVoQjs7V0FBSztjQUVIO2lCQUNBO2tCQUFZO0FBRlo7WUFJSDs7Ozs7OEJBQ1E7b0JBQ1A7O2NBQ0UscUNBQ0EsOENBQU0sV0FBVSxjQUFhLFVBQVUsS0FBSyxjQUFjLEtBQ3hELGtEQUFPLFdBQVUsbUJBQWdDLGlEQUNqRDtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxjQUFjLEtBQzdCO2VBQ0E7ZUFDQTtzQkFDQTtjQUFLLGFBQUMsT0FBRDtrQkFBVyxPQUFLLFNBQVM7QUFDOUI7QUFOQSwrQ0FPRixnREFBTyxNQUFLLFlBQVksTUFBSyxZQUFjLGFBQVksWUFBa0IsS0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxZQUFhO0FBQVEsbURBQ25IO2VBRUU7c0JBQ0E7Y0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxhQUFhO0FBRXBDO0FBSkUsb0RBSUssTUFBSyxVQUFTLE9BSTFCOzs7O21DQUVhLE9BQ1o7YUFDQTtXQUFJLFFBQVEsS0FDWjtXQUFJLFdBQVcsS0FDZjtXQUFJLFlBQVksS0FDaEI7V0FBSSwwQkFBUSxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQ3ZDOzs7OztHQXhDd0IsZ0JBQU07O2dCQTJDbEI7Ozs7Ozs7OztpQ0EzQ1QiLCJmaWxlIjoiMC45ZGU0MDcxZTlmNjI4MjllMGY5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZW1haWw6ICAgICAgJycsXHJcbiAgICAgIHBhc3N3b3JkOiAgICcnLFxyXG4gICAgICByUGFzc3dvcmQ6ICAnJ1xyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImNvbnRyb2wtbGFiZWxcIj5SZWdpc3RlcjwvbGFiZWw+PGJyIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX1cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9lbWFpbCA9IGlucHV0fVxyXG4gICAgICAgIC8+PGJyIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiICBuYW1lPVwicGFzc3dvcmRcIiAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCIgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9wYXNzd29yZCA9ICBpbnB1dH0vPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmVwZWF0IHBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9yUGFzc3dvcmQgPSBpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJyZWdpc3RlclwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IGVtYWlsID0gdGhpcy5fZW1haWw7XHJcbiAgICBsZXQgcGFzc3dvcmQgPSB0aGlzLl9wYXNzd29yZDtcclxuICAgIGxldCByUGFzc3dvcmQgPSB0aGlzLl9yUGFzc3dvcmQ7XHJcbiAgICBzZXQuc3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanMiXSwic291cmNlUm9vdCI6IiJ9