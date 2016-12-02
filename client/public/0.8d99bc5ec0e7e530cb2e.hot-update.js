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
	      password: ''
	    };
	    return _this;
	  }
	
	  _createClass(Registration, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'register'), _react2.default.createElement('input', {
	        value: this.state.email,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        required: 'required',
	        type: 'text',
	        name: 'email',
	        placeholder: 'email',
	        ref: function ref(input) {
	          return _this2._email = input;
	        }
	      }), _react2.default.createElement('input', {
	        value: this.state.password,
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        required: 'required',
	        type: 'password',
	        name: 'password',
	        placeholder: 'password',
	        ref: function ref(input) {
	          return _this2._password = input;
	        }
	      }), _react2.default.createElement('input', {
	        //value={this.state.passwordConfirmation}
	        onChange: this._onChange.bind(this),
	        className: 'form-control',
	        style: divStyle,
	        required: 'required',
	        type: 'password',
	        name: 'passwordConfirmation',
	        placeholder: 'confirm password',
	        ref: function ref(input) {
	          return _this2._passwordConfirmation = input;
	        }
	      }), _react2.default.createElement('input', { className: 'btn .btn-primary', type: 'submit', value: 'register' })));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(event) {
	      var email = this._email;
	      var password = this._password;
	      //let passwordConfirmation = this._passwordConfirmation;
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(event) {
	      event.preventDefault();
	      console.log(this.state);
	      $.ajax({
	        url: baseUrl,
	        dataType: 'json',
	        type: "POST",
	        data: this.state,
	        success: function success() {
	          console.log("Ok");
	        },
	        error: function error() {
	          console.log("No");
	        }
	      });
	      // axios.post(`${baseUrl}/api/users`, {
	      //   user: this.state
	      // }).catch(() => alert('Something went wrong :( Try again!'));
	      //this.props.registrationRequest(this.state);
	      //axios.post('/api/users', {user: this.state});
	    }
	  }]);
	
	  return Registration;
	}(_react2.default.Component);
	
	// Registration.propTypes = {
	//   registrationRequest: React.PropTypes.func.isRequired
	// }
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBQ0k7QUFBUjs7QUFHRixLQUFNLFVBQVU7O0tBRVY7MkJBQ0o7O3lCQUFZLE9BQU07MkJBQUE7OzZIQUVoQjs7V0FBSztjQUVIO2lCQUFZO0FBRFo7WUFJSDs7Ozs7OEJBQ1E7b0JBQ1A7O2NBQ0UscUNBQ0EsOENBQU0sVUFBVSxLQUFLLGNBQWMsS0FDakMsbURBQ0E7Z0JBQ1MsS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTttQkFDQTtlQUNBO2VBQ0E7c0JBQ0E7Y0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxTQUFTO0FBRWhDO0FBVkU7Z0JBV08sS0FBSyxNQUNaO21CQUFVLEtBQUssVUFBVSxLQUN6QjtvQkFDQTtnQkFDQTttQkFDQTtlQUNBO2VBQ0E7c0JBQ0E7Y0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxZQUFhO0FBRXBDO0FBVkU7QUFZQTttQkFBVSxLQUFLLFVBQVUsS0FDekI7b0JBQ0E7Z0JBQ0E7bUJBQ0E7ZUFDQTtlQUNBO3NCQUNBO2NBQUssYUFBQyxPQUFEO2tCQUFXLE9BQUssd0JBQXdCO0FBRS9DO0FBVkUsb0RBVUssV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BSXZEOzs7OytCQUVTLE9BQ1I7V0FBSSxRQUFRLEtBQ1o7V0FBSSxXQUFXLEtBQ2Y7QUFDQTtZQUFLLDZCQUFXLE1BQU0sT0FBTyxNQUFPLE1BQU0sT0FDM0M7Ozs7bUNBRWEsT0FDWjthQUNBO2VBQVEsSUFBSSxLQUNaO1NBQUU7Y0FFQTttQkFDQTtlQUNBO2VBQU0sS0FDTjtrQkFBUyxtQkFBVzttQkFBUSxJQUFVO0FBQ3RDO2dCQUFPLGlCQUFXO21CQUFRLElBQVU7QUFFdEM7QUFQRTtBQVFGO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7Ozs7O0dBNUV3QixnQkFBTTs7QUErRWpDO0FBQ0E7QUFDQTs7Z0JBRWU7Ozs7Ozs7OztpQ0F6RlQ7O2lDQUlBOztpQ0FFQSIsImZpbGUiOiIwLjhkOTliYzVlYzBlN2U1MzBjYjJlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuXHJcbmNvbnN0IGJhc2VVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJztcclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgZW1haWw6ICAgICAgJycsXHJcbiAgICAgIHBhc3N3b3JkOiAgICcnLFxyXG4gICAgICAvL3Bhc3N3b3JkQ29uZmlybWF0aW9uOiAgJydcclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgICAgPGg0PnJlZ2lzdGVyPC9oND5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgc3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9lbWFpbCA9IGlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgIHN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAgICAgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMuX3Bhc3N3b3JkID0gIGlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAvL3ZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkQ29uZmlybWF0aW9ufVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgc3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgICAgICByZXF1aXJlZD1cInJlcXVpcmVkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRDb25maXJtYXRpb25cIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJjb25maXJtIHBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlZj17KGlucHV0KSA9PiB0aGlzLl9wYXNzd29yZENvbmZpcm1hdGlvbiA9IGlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biAuYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJyZWdpc3RlclwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGV2ZW50KXtcclxuICAgIGxldCBlbWFpbCA9IHRoaXMuX2VtYWlsO1xyXG4gICAgbGV0IHBhc3N3b3JkID0gdGhpcy5fcGFzc3dvcmQ7XHJcbiAgICAvL2xldCBwYXNzd29yZENvbmZpcm1hdGlvbiA9IHRoaXMuX3Bhc3N3b3JkQ29uZmlybWF0aW9uO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICQuYWpheCh7XHJcbiAgICAgIHVybDogYmFzZVVybCxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJyxcclxuICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCl7Y29uc29sZS5sb2coXCJPa1wiKX0sXHJcbiAgICAgIGVycm9yOiBmdW5jdGlvbigpe2NvbnNvbGUubG9nKFwiTm9cIil9XHJcbiAgICB9KTtcclxuICAgIC8vIGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3VzZXJzYCwge1xyXG4gICAgLy8gICB1c2VyOiB0aGlzLnN0YXRlXHJcbiAgICAvLyB9KS5jYXRjaCgoKSA9PiBhbGVydCgnU29tZXRoaW5nIHdlbnQgd3JvbmcgOiggVHJ5IGFnYWluIScpKTtcclxuICAgIC8vdGhpcy5wcm9wcy5yZWdpc3RyYXRpb25SZXF1ZXN0KHRoaXMuc3RhdGUpO1xyXG4gICAgLy9heGlvcy5wb3N0KCcvYXBpL3VzZXJzJywge3VzZXI6IHRoaXMuc3RhdGV9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlZ2lzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbi8vICAgcmVnaXN0cmF0aW9uUmVxdWVzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=