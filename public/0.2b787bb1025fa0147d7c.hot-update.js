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
	
	var _TextFieldGroup = __webpack_require__(363);
	
	var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);
	
	var _reactRouter = __webpack_require__(259);
	
	var _when = __webpack_require__(655);
	
	var _when2 = _interopRequireDefault(_when);
	
	var _reactRedux = __webpack_require__(318);
	
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
	      this.props.dispatch((0, _AuthActions.getProfile)(this.props.auth.currentUserId));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user = this.props.auth.userProfile;
	
	      // if(!this.state.name) {
	      //   this.setState(...user);
	      // }
	      console.log('-----------------', this);
	
	      if (!user) {
	        return null;
	      }
	
	      return _react2.default.createElement('div', { className: 'col-lg-4' }, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'profile info'), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.user.name,
	        placeholder: 'name',
	        field: 'name',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.user.surname,
	        placeholder: 'surname',
	        field: 'surname',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.user.dateOfBirth,
	        placeholder: 'date of birth',
	        field: 'dateOfBirth',
	        type: 'date',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.user.profession,
	        placeholder: 'profession',
	        field: 'profession',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.user.telephoneNumber,
	        placeholder: 'telephone number',
	        field: 'telephoneNumber',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: this.state.user.about,
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
	
	function mapStateToProps(state) {
	  console.log(state);
	  return state;
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(ProfileInfo);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js');
	
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

	  __REACT_HOT_LOADER__.register(_TextFieldGroup2, "_TextFieldGroup2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_when2, "_when2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_defineProperty, "_defineProperty", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(ProfileInfo, "ProfileInfo", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcz9lNjRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztLQUdJOzBCQUNKOzt3QkFBWSxPQUFNOzJCQUFBOzsySEFHaEI7O1dBQUs7YUFFSDtnQkFDQTtvQkFDQTttQkFDQTt3QkFDQTtjQUNBO2VBQVE7QUFOUjtZQVFIOzs7OzswQ0FHQztlQUFRLElBQ1I7WUFBSyxNQUFNLFNBQVMsNkJBQVcsS0FBSyxNQUFNLEtBRTNDOzs7OzhCQUdDO1dBQU0sT0FBTyxLQUFLLE1BQU0sS0FFeEI7O0FBQ0E7QUFDQTtBQUNBO2VBQVEsSUFBSSxxQkFFWjs7V0FBSSxDQUFDLE1BQ0g7Z0JBQ0Q7QUFFRDs7Y0FDRSx1Q0FBSyxXQUNMLHNEQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ25DLG1EQUNBO21CQUNZLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQU0sS0FDbEI7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUFNLEtBQ2xCO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFBTSxLQUNsQjtzQkFDQTtnQkFDQTtlQUNBO21CQUVGO0FBUEU7bUJBUVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFBTSxLQUNsQjtzQkFDQTtnQkFDQTttQkFFRjtBQU5FO21CQU9VLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQU0sS0FDbEI7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUFNLEtBQ2xCO3NCQUNBO2dCQUNBO21CQUVGO0FBTkUsZ0RBT0YsZ0RBQU8sV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BSXJEOzs7OytCQUVTLE9BQ1I7WUFBSyw2QkFBVyxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQzNDOzs7O21DQUdhLE9BQU07b0JBQ2xCOzthQUNBO2VBQVEsSUFBSSxLQUNWO1lBQUssU0FBUyxFQUFDLFFBQ2Y7WUFBSyxNQUFNLG9CQUFvQixLQUFLLE9BQU8sS0FDekMsWUFDRTtnQkFBSyxNQUFNO2lCQUVUO2lCQUVGO0FBSEU7a0NBR1UsS0FDWjtBQUNEO0FBUkgsVUFTRSxVQUFDLEtBQ0M7QUFDQTtpQkFBUSxJQUNUO0FBQ047Ozs7O0dBN0d1QixnQkFBTTs7QUFnSGhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFVBQVMsZ0JBQWdCLE9BQ3ZCO1dBQVEsSUFDUjtVQUNEOzs7Z0JBRWMseUJBQVEsaUJBQWlCOzs7Ozs7Ozs7O2lDQUwvQjs7aUNBOUhIOztpQ0FJQSIsImZpbGUiOiIwLjJiNzg3YmIxMDI1ZmEwMTQ3ZDdjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgdmFsaWRhdGVJbnB1dCBmcm9tICcuL1ZhbGlkYXRpb24uanMnO1xyXG5pbXBvcnQge2dldFByb2ZpbGV9IGZyb20gJy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMnO1xyXG5pbXBvcnQgVGV4dEZpZWxkR3JvdXAgZnJvbSAnLi9UZXh0RmllbGRHcm91cC5qcyc7XHJcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCB3aGVuIGZyb20gJ3doZW4nO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIG1hcmdpbjogXCIwIDAgNXB4IDBcIlxyXG59XHJcblxyXG5jbGFzcyBQcm9maWxlSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICAgICAgJycsXHJcbiAgICAgIHN1cm5hbWU6ICAgJycsXHJcbiAgICAgIGRhdGVPZkJpcnRoOiAgJycsXHJcbiAgICAgIHByb2Zlc3Npb246ICAnJyxcclxuICAgICAgdGVsZXBob25lTnVtYmVyOiAgJycsXHJcbiAgICAgIGFib3V0OiAgJycsXHJcbiAgICAgIGVycm9yczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaChnZXRQcm9maWxlKHRoaXMucHJvcHMuYXV0aC5jdXJyZW50VXNlcklkKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdXNlciA9IHRoaXMucHJvcHMuYXV0aC51c2VyUHJvZmlsZTtcclxuXHJcbiAgICAvLyBpZighdGhpcy5zdGF0ZS5uYW1lKSB7XHJcbiAgICAvLyAgIHRoaXMuc2V0U3RhdGUoLi4udXNlcik7XHJcbiAgICAvLyB9XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0nLCB0aGlzKTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICA8aDQ+cHJvZmlsZSBpbmZvPC9oND5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlci5uYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgZmllbGQ9XCJuYW1lXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlci5zdXJuYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic3VybmFtZVwiXHJcbiAgICAgICAgZmllbGQ9XCJzdXJuYW1lXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlci5kYXRlT2ZCaXJ0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImRhdGUgb2YgYmlydGhcIlxyXG4gICAgICAgIGZpZWxkPVwiZGF0ZU9mQmlydGhcIlxyXG4gICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlci5wcm9mZXNzaW9ufVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicHJvZmVzc2lvblwiXHJcbiAgICAgICAgZmllbGQ9XCJwcm9mZXNzaW9uXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlci50ZWxlcGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZWxlcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICBmaWVsZD1cInRlbGVwaG9uZU51bWJlclwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXIuYWJvdXR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJhYm91dCB5b3VcIlxyXG4gICAgICAgIGZpZWxkPVwiYWJvdXRcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIC5idG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInNhdmVcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7fX0pO1xyXG4gICAgICB0aGlzLnByb3BzLnJlZ2lzdHJhdGlvblJlcXVlc3QodGhpcy5zdGF0ZSkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmFkZEZsYXNoTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGV4dDogJ1lvdSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEgV2VsY29tZSB0byBWYXppdW9qdS1WZXp1ISdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgICAgLy9vciB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyLnJlc3BvbnNlLmRhdGF9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlZ2lzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbi8vICAgcmVnaXN0cmF0aW9uUmVxdWVzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gICBhZGRGbGFzaE1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgaXNFbWFpbEV4aXN0czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4vLyB9XHJcblxyXG4vLyBSZWdpc3RyYXRpb24uY29udGV4dFR5cGVzID0ge1xyXG4vLyAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2ZpbGVJbmZvKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZUluZm8uanMiXSwic291cmNlUm9vdCI6IiJ9