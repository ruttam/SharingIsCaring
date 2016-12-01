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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRU07MkJBQ0o7O3lCQUFZLE9BQU07MkJBQUE7OzZIQUVoQjs7V0FBSztjQUVIO2lCQUNBO2tCQUFZO0FBRlo7WUFJSDs7Ozs7OEJBQ1E7b0JBQ1A7O2NBQ0UscUNBQ0EsOENBQU0sV0FBVSxjQUFhLFVBQVUsS0FBSyxjQUFjLEtBQ3hELGtEQUFPLFdBQVUsbUJBQWdDLGlEQUNqRDtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2VBQ0E7ZUFDQTtzQkFDQTtjQUFLLGFBQUMsT0FBRDtrQkFBVyxPQUFLLFNBQVM7QUFDOUI7QUFOQSwrQ0FPRjtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2VBQ0E7ZUFDQTtzQkFDQTtjQUFLLGFBQUMsT0FBRDtrQkFBVyxPQUFLLFlBQWE7QUFDbEM7QUFOQSwrQ0FPRjtnQkFDUyxLQUFLLE1BQ1o7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2VBQ0E7c0JBQ0E7Y0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxhQUFhO0FBRXBDO0FBTkUsb0RBTUssTUFBSyxVQUFTLE9BSTFCOzs7OytCQUVTLE9BQ1I7V0FBSSxRQUFRLEtBQ1o7V0FBSSxXQUFXLEtBQ2Y7V0FBSSxZQUFZLEtBQ2hCO1lBQUssNkJBQVcsTUFBTSxPQUFPLE1BQU8sTUFBTSxPQUMzQzs7OzttQ0FFYSxPQUNaO2FBQ0E7ZUFBUSxJQUFJLEtBQ2I7Ozs7O0dBckR3QixnQkFBTTs7Z0JBd0RsQjs7Ozs7Ozs7O2lDQXhEVCIsImZpbGUiOiIwLmU2NzgzZDdmM2Y0ZGZlNzJiZmFkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbWFpbDogICAgICAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICAgJycsXHJcbiAgICAgIHJQYXNzd29yZDogICcnXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlJlZ2lzdGVyPC9sYWJlbD48YnIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXHJcbiAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5fZW1haWwgPSBpbnB1dH1cclxuICAgICAgICAvPjxiciAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICByZWY9eyhpbnB1dCkgPT4gdGhpcy5fcGFzc3dvcmQgPSAgaW5wdXR9XHJcbiAgICAgICAgLz48YnIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnJQYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicmVwZWF0IHBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9yUGFzc3dvcmQgPSBpbnB1dH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJyZWdpc3RlclwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGV2ZW50KXtcclxuICAgIGxldCBlbWFpbCA9IHRoaXMuX2VtYWlsO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICBsZXQgclBhc3N3b3JkID0gdGhpcy5fclBhc3N3b3JkO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUmVnaXN0cmF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==