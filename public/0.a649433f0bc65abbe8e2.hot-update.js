webpackHotUpdate(0,{

/***/ 698:
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
	
	var _AuthActions = __webpack_require__(446);
	
	var _AuthActions2 = _interopRequireDefault(_AuthActions);
	
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
	
	var ProfileInfo = function (_React$Component) {
	  _inherits(ProfileInfo, _React$Component);
	
	  function ProfileInfo(props) {
	    _classCallCheck(this, ProfileInfo);
	
	    var _this = _possibleConstructorReturn(this, (ProfileInfo.__proto__ || Object.getPrototypeOf(ProfileInfo)).call(this, props));
	
	    _this.state = {
	      name: '',
	      surname: '',
	      dateOfBirth: '',
	      profession: '',
	      telephoneNumber: '',
	      about: '',
	      errors: {}
	    };
	    return _this;
	  }
	
	  _createClass(ProfileInfo, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      console.log(this);
	      this.props.dispatch((0, _AuthActions2.default)(this.props.user.user_id));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: 'col-lg-4' }, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'profile info'), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.name,
	        placeholder: 'name',
	        field: 'name',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.surname,
	        placeholder: 'surname',
	        field: 'surname',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.dateOfBirth,
	        placeholder: 'date of birth',
	        field: 'dateOfBirth',
	        type: 'date',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.profession,
	        placeholder: 'profession',
	        field: 'profession',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.telephoneNumber,
	        placeholder: 'telephone number',
	        field: 'telephoneNumber',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.about,
	        placeholder: 'about you',
	        field: 'about',
	        divStyle: divStyle
	      }), _react2.default.createElement('div', null), _react2.default.createElement('input', { className: 'btn .btn-primary', type: 'submit', value: 'save' })));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(event) {
	      var _this2 = this;
	
	      event.preventDefault();
	      console.log(this.state);
	      this.setState({ errors: {} });
	      this.props.registrationRequest(this.state).then(function () {
	        _this2.props.addFlashMessage({
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
	  }]);
	
	  return ProfileInfo;
	}(_react2.default.Component);
	
	// Registration.propTypes = {
	//   registrationRequest: React.PropTypes.func.isRequired,
	//   addFlashMessage: React.PropTypes.func.isRequired,
	//   isEmailExists: React.PropTypes.func.isRequired
	// }
	
	// Registration.contextTypes = {
	//   router: React.PropTypes.object.isRequired
	// }
	
	var _default = ProfileInfo;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js');
	
	  __REACT_HOT_LOADER__.register(ProfileInfo, 'ProfileInfo', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_axios2, "_axios2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_Validation2, "_Validation2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_AuthActions2, "_AuthActions2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_TextFieldGroup2, "_TextFieldGroup2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_when2, "_when2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_defineProperty, "_defineProperty", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(ProfileInfo, "ProfileInfo", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcz9lNjRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtXQUNJO0FBQVI7O0tBR0k7MEJBQ0o7O3dCQUFZLE9BQU07MkJBQUE7OzJIQUdoQjs7V0FBSzthQUVIO2dCQUNBO29CQUNBO21CQUNBO3dCQUNBO2NBQ0E7ZUFBUTtBQU5SO1lBUUg7Ozs7OzBDQUdDO2VBQVEsSUFDUjtZQUFLLE1BQU0sU0FBUywyQkFBVyxLQUFLLE1BQU0sS0FDM0M7Ozs7OEJBR0M7Y0FDRSx1Q0FBSyxXQUNMLHNEQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ25DLG1EQUNBO21CQUNZLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTtlQUNBO21CQUVGO0FBUEU7bUJBUVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQU5FO21CQU9VLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO21CQUVGO0FBTkUsZ0RBT0YsZ0RBQU8sV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BSXJEOzs7OytCQUVTLE9BQ1I7WUFBSyw2QkFBVyxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQzNDOzs7O21DQUdhLE9BQU07b0JBQ2xCOzthQUNBO2VBQVEsSUFBSSxLQUNWO1lBQUssU0FBUyxFQUFDLFFBQ2Y7WUFBSyxNQUFNLG9CQUFvQixLQUFLLE9BQU8sS0FDekMsWUFDRTtnQkFBSyxNQUFNO2lCQUVUO2lCQUVGO0FBSEU7a0NBR1UsS0FDWjtBQUNEO0FBUkgsVUFTRSxVQUFDLEtBQ0M7QUFDQTtpQkFBUSxJQUNUO0FBQ047Ozs7O0dBakd1QixnQkFBTTs7QUFvR2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztnQkFFZTs7Ozs7Ozs7O2lDQWxIVDs7aUNBSUEiLCJmaWxlIjoiMC5hNjQ5NDMzZjBiYzY1YWJiZThlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHZhbGlkYXRlSW5wdXQgZnJvbSAnLi9WYWxpZGF0aW9uLmpzJ1xyXG5pbXBvcnQgZ2V0UHJvZmlsZSBmcm9tICcuLi9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzJ1xyXG5pbXBvcnQgVGV4dEZpZWxkR3JvdXAgZnJvbSAnLi9UZXh0RmllbGRHcm91cC5qcydcclxuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5pbXBvcnQgd2hlbiBmcm9tICd3aGVuJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIG1hcmdpbjogXCIwIDAgNXB4IDBcIlxyXG59XHJcblxyXG5jbGFzcyBQcm9maWxlSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICAgICAgJycsXHJcbiAgICAgIHN1cm5hbWU6ICAgJycsXHJcbiAgICAgIGRhdGVPZkJpcnRoOiAgJycsXHJcbiAgICAgIHByb2Zlc3Npb246ICAnJyxcclxuICAgICAgdGVsZXBob25lTnVtYmVyOiAgJycsXHJcbiAgICAgIGFib3V0OiAgJycsXHJcbiAgICAgIGVycm9yczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRQcm9maWxlKHRoaXMucHJvcHMudXNlci51c2VyX2lkKSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgIDxoND5wcm9maWxlIGluZm88L2g0PlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgZmllbGQ9XCJuYW1lXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3VybmFtZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cInN1cm5hbWVcIlxyXG4gICAgICAgIGZpZWxkPVwic3VybmFtZVwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVPZkJpcnRofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZGF0ZSBvZiBiaXJ0aFwiXHJcbiAgICAgICAgZmllbGQ9XCJkYXRlT2ZCaXJ0aFwiXHJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9mZXNzaW9ufVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicHJvZmVzc2lvblwiXHJcbiAgICAgICAgZmllbGQ9XCJwcm9mZXNzaW9uXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVsZXBob25lTnVtYmVyfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwidGVsZXBob25lIG51bWJlclwiXHJcbiAgICAgICAgZmllbGQ9XCJ0ZWxlcGhvbmVOdW1iZXJcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hYm91dH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImFib3V0IHlvdVwiXHJcbiAgICAgICAgZmllbGQ9XCJhYm91dFwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic2F2ZVwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGV2ZW50KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IHt9fSk7XHJcbiAgICAgIHRoaXMucHJvcHMucmVnaXN0cmF0aW9uUmVxdWVzdCh0aGlzLnN0YXRlKS50aGVuKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucHJvcHMuYWRkRmxhc2hNZXNzYWdlKHtcclxuICAgICAgICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnWW91IHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5ISBXZWxjb21lIHRvIFZheml1b2p1LVZlenUhJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgICAgICAvL29yIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVnaXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuLy8gICByZWdpc3RyYXRpb25SZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vLyAgIGFkZEZsYXNoTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gICBpc0VtYWlsRXhpc3RzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbi8vIH1cclxuXHJcbi8vIFJlZ2lzdHJhdGlvbi5jb250ZXh0VHlwZXMgPSB7XHJcbi8vICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuLy8gfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZUluZm87XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVJbmZvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==