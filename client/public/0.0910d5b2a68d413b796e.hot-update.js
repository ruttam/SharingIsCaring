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
	
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { className: 'form-group', onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('label', { className: 'control-label' }, 'Register'), _react2.default.createElement('input', {
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
	      set.state({ email: this.email, password: this.password, rPassword: this.rPassword });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVNOzJCQUNKOzt5QkFBWSxPQUFNOzJCQUFBOzs2SEFFaEI7O1dBQUs7Y0FFSDtpQkFDQTtrQkFBWTtBQUZaO1lBSUg7Ozs7OzhCQUNRO29CQUNQOztjQUNFLHFDQUNBLDhDQUFNLFdBQVUsY0FBYSxVQUFVLEtBQUssY0FBYyxLQUN4RCxrREFBTyxXQUFVLG1CQUNqQjtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxjQUFjLEtBQzdCO2VBQ0E7ZUFDQTtzQkFDQTtjQUFLLGFBQUMsT0FBRDtrQkFBVyxPQUFLLFNBQVM7QUFDOUI7QUFOQSwrQ0FPRixnREFBTyxNQUFLLFlBQVksTUFBSyxZQUFjLGFBQVksWUFBa0IsS0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxZQUFhO0FBQVEsbURBQ25IO2VBRUU7c0JBQ0E7Y0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxhQUFhO0FBRXBDO0FBSkUsb0RBSUssTUFBSyxVQUFTLE9BSTFCOzs7O21DQUVhLE9BQ1o7YUFDQTtXQUFJLFFBQVEsS0FDWjtXQUFJLFdBQVcsS0FDZjtXQUFJLFlBQVksS0FDaEI7V0FBSSxNQUFNLEVBQUMsT0FBTyxLQUFLLE9BQU8sVUFBVSxLQUFLLFVBQVUsV0FBVyxLQUNuRTs7Ozs7R0F4Q3dCLGdCQUFNOztnQkEyQ2xCOzs7Ozs7Ozs7aUNBM0NUIiwiZmlsZSI6IjAuMDkxMGQ1YjJhNjhkNDEzYjc5NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAgICAgICcnLFxyXG4gICAgICBwYXNzd29yZDogICAnJyxcclxuICAgICAgclBhc3N3b3JkOiAgJydcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIiBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJjb250cm9sLWxhYmVsXCI+UmVnaXN0ZXI8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZW1haWx9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5fZW1haWwgPSBpbnB1dH1cclxuICAgICAgICAvPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiAgbmFtZT1cInBhc3N3b3JkXCIgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5fcGFzc3dvcmQgPSAgaW5wdXR9Lz48YnIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInJlcGVhdCBwYXNzd29yZFwiXHJcbiAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5fclBhc3N3b3JkID0gaW5wdXR9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwicmVnaXN0ZXJcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBlbWFpbCA9IHRoaXMuX2VtYWlsO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICBsZXQgclBhc3N3b3JkID0gdGhpcy5fclBhc3N3b3JkO1xyXG4gICAgc2V0LnN0YXRlKHtlbWFpbDogdGhpcy5lbWFpbCwgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsIHJQYXNzd29yZDogdGhpcy5yUGFzc3dvcmR9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==