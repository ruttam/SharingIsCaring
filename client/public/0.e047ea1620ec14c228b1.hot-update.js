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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVNOzJCQUNKOzt5QkFBWSxPQUFNOzJCQUFBOzs2SEFFaEI7O1dBQUs7Y0FFSDtpQkFDQTtrQkFBWTtBQUZaO1lBSUg7Ozs7OzhCQUNRO29CQUNQOztjQUNFLHFDQUNBLDhDQUFNLFdBQVUsY0FBYSxVQUFVLEtBQUssY0FBYyxLQUN4RCxrREFBTyxXQUFVLG1CQUFnQyxpREFDakQ7Z0JBQ1MsS0FBSyxNQUNaO21CQUFVLEtBQUssY0FBYyxLQUM3QjtlQUNBO2VBQ0E7c0JBQ0E7Y0FBSyxhQUFDLE9BQUQ7a0JBQVcsT0FBSyxTQUFTO0FBQzlCO0FBTkEsK0NBT0YsZ0RBQU8sTUFBSyxZQUFZLE1BQUssWUFBYyxhQUFZLFlBQWtCLEtBQUssYUFBQyxPQUFEO2tCQUFXLE9BQUssWUFBYTtBQUFRLG1EQUNuSDtlQUVFO3NCQUNBO2NBQUssYUFBQyxPQUFEO2tCQUFXLE9BQUssYUFBYTtBQUVwQztBQUpFLG9EQUlLLE1BQUssVUFBUyxPQUkxQjs7OzttQ0FFYSxPQUNaO2FBQ0E7V0FBSSxRQUFRLEtBQ1o7V0FBSSxXQUFXLEtBQ2Y7V0FBSSxZQUFZLEtBQ2hCO1dBQUksTUFBTSxFQUFDLE9BQU8sS0FBSyxPQUFPLFVBQVUsS0FBSyxVQUFVLFdBQVcsS0FDbkU7Ozs7O0dBeEN3QixnQkFBTTs7Z0JBMkNsQjs7Ozs7Ozs7O2lDQTNDVCIsImZpbGUiOiIwLmUwNDdlYTE2MjBlYzE0YzIyOGIxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbWFpbDogICAgICAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICAgJycsXHJcbiAgICAgIHJQYXNzd29yZDogICcnXHJcbiAgICB9O1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCIgb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY29udHJvbC1sYWJlbFwiPlJlZ2lzdGVyPC9sYWJlbD48YnIgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMuX2VtYWlsID0gaW5wdXR9XHJcbiAgICAgICAgLz48YnIgLz5cclxuICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgIG5hbWU9XCJwYXNzd29yZFwiICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMuX3Bhc3N3b3JkID0gIGlucHV0fS8+PGJyIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJyZXBlYXQgcGFzc3dvcmRcIlxyXG4gICAgICAgICAgcmVmPXsoaW5wdXQpID0+IHRoaXMuX3JQYXNzd29yZCA9IGlucHV0fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInJlZ2lzdGVyXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgZW1haWwgPSB0aGlzLl9lbWFpbDtcclxuICAgIGxldCBwYXNzd29yZCA9IHRoaXMuX3Bhc3N3b3JkO1xyXG4gICAgbGV0IHJQYXNzd29yZCA9IHRoaXMuX3JQYXNzd29yZDtcclxuICAgIHNldC5zdGF0ZSh7ZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLCByUGFzc3dvcmQ6IHRoaXMuclBhc3N3b3JkfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlZ2lzdHJhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=