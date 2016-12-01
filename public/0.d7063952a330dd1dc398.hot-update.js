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
	
	      console.log('-----------------', this);
	
	      if (!user) {
	        return null;
	      }
	
	      if (!this.state.name) {
	        console.log('Upating;');
	        this.setState(Object.assign({}, user));
	      }
	
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
	      event.preventDefault();
	      console.log(this.state);
	      // this.setState({errors: {}});
	      this.props.dispatch((0, _AuthActions.setProfile)(this.state));
	      // this.props.registrationRequest(this.state).then(
	      //   () => {
	      //     this.props.addFlashMessage({
	      //       type: 'success',
	      //       text: 'You registered successfully! Welcome to Vaziuoju-Vezu!'
	      //     });
	      //     hashHistory.push('/');
	      //     //or this.context.router.push('/');
	      //   },
	      //   (err) => {
	      //     // this.setState({errors: err.response.data})
	      //     console.log(err);
	      //   });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcz9lNjRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztLQUdJOzBCQUNKOzt3QkFBWSxPQUFNOzJCQUFBOzsySEFHaEI7O1dBQUs7YUFFSDtnQkFDQTtvQkFDQTttQkFDQTt3QkFDQTtjQUNBO2VBQVE7QUFOUjtZQVFIOzs7OzswQ0FHQztlQUFRLElBQ1I7WUFBSyxNQUFNLFNBQVMsNkJBQVcsS0FBSyxNQUFNLEtBRTNDOzs7OzhCQUdDO1dBQU0sT0FBTyxLQUFLLE1BQU0sS0FFeEI7O2VBQVEsSUFBSSxxQkFFWjs7V0FBSSxDQUFDLE1BQ0g7Z0JBQ0Q7QUFHQzs7V0FBRyxDQUFDLEtBQUssTUFBTSxNQUNiO2lCQUFRLElBQ1I7Y0FBSyxTQUFTLE9BQU8sT0FBTyxJQUM3QjtBQUVIOztjQUNFLHVDQUFLLFdBQ0wsc0RBQU0sVUFBVSxLQUFLLGNBQWMsS0FDbkMsbURBQ0E7bUJBQ1ksS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQU5FO21CQU9VLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO2VBQ0E7bUJBRUY7QUFQRTttQkFRVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQU5FO21CQU9VLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORSxnREFPRixnREFBTyxXQUFVLG9CQUFtQixNQUFLLFVBQVMsT0FJckQ7Ozs7K0JBRVMsT0FDUjtZQUFLLDZCQUFXLE1BQU0sT0FBTyxNQUFPLE1BQU0sT0FDM0M7Ozs7bUNBR2EsT0FDWjthQUNBO2VBQVEsSUFBSSxLQUNWO0FBQ0E7WUFBSyxNQUFNLFNBQVMsNkJBQVcsS0FDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7Ozs7R0FqSHVCLGdCQUFNOztBQW9IaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUyxnQkFBZ0IsT0FDdkI7V0FBUSxJQUNSO1VBQ0Q7OztnQkFFYyx5QkFBUSxpQkFBaUI7Ozs7Ozs7Ozs7aUNBTC9COztpQ0FsSUg7O2lDQUlBIiwiZmlsZSI6IjAuZDcwNjM5NTJhMzMwZGQxZGMzOTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcyc7XHJcbmltcG9ydCB7Z2V0UHJvZmlsZSwgc2V0UHJvZmlsZX0gZnJvbSAnLi4vYWN0aW9ucy9BdXRoQWN0aW9ucy5qcyc7XHJcbmltcG9ydCBUZXh0RmllbGRHcm91cCBmcm9tICcuL1RleHRGaWVsZEdyb3VwLmpzJztcclxuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGVJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogICAgICAnJyxcclxuICAgICAgc3VybmFtZTogICAnJyxcclxuICAgICAgZGF0ZU9mQmlydGg6ICAnJyxcclxuICAgICAgcHJvZmVzc2lvbjogICcnLFxyXG4gICAgICB0ZWxlcGhvbmVOdW1iZXI6ICAnJyxcclxuICAgICAgYWJvdXQ6ICAnJyxcclxuICAgICAgZXJyb3JzOiB7fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldFByb2ZpbGUodGhpcy5wcm9wcy5hdXRoLmN1cnJlbnRVc2VySWQpKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy5hdXRoLnVzZXJQcm9maWxlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tLS0tLScsIHRoaXMpO1xyXG5cclxuICAgIGlmICghdXNlcikge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgICBpZighdGhpcy5zdGF0ZS5uYW1lKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ1VwYXRpbmc7Jyk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShPYmplY3QuYXNzaWduKHt9LHVzZXIpKTtcclxuICAgICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgPGg0PnByb2ZpbGUgaW5mbzwvaDQ+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICBmaWVsZD1cIm5hbWVcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdXJuYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic3VybmFtZVwiXHJcbiAgICAgICAgZmllbGQ9XCJzdXJuYW1lXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZU9mQmlydGh9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJkYXRlIG9mIGJpcnRoXCJcclxuICAgICAgICBmaWVsZD1cImRhdGVPZkJpcnRoXCJcclxuICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2Zlc3Npb259XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwcm9mZXNzaW9uXCJcclxuICAgICAgICBmaWVsZD1cInByb2Zlc3Npb25cIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZWxlcGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZWxlcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICBmaWVsZD1cInRlbGVwaG9uZU51bWJlclwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFib3V0fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYWJvdXQgeW91XCJcclxuICAgICAgICBmaWVsZD1cImFib3V0XCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biAuYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzYXZlXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UoZXZlbnQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2Vycm9yczoge319KTtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChzZXRQcm9maWxlKHRoaXMuc3RhdGUpKTtcclxuICAgICAgLy8gdGhpcy5wcm9wcy5yZWdpc3RyYXRpb25SZXF1ZXN0KHRoaXMuc3RhdGUpLnRoZW4oXHJcbiAgICAgIC8vICAgKCkgPT4ge1xyXG4gICAgICAvLyAgICAgdGhpcy5wcm9wcy5hZGRGbGFzaE1lc3NhZ2Uoe1xyXG4gICAgICAvLyAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgIC8vICAgICAgIHRleHQ6ICdZb3UgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhIFdlbGNvbWUgdG8gVmF6aXVvanUtVmV6dSEnXHJcbiAgICAgIC8vICAgICB9KTtcclxuICAgICAgLy8gICAgIGhhc2hIaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgLy8gICAgIC8vb3IgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgIC8vICAgfSxcclxuICAgICAgLy8gICAoZXJyKSA9PiB7XHJcbiAgICAgIC8vICAgICAvLyB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVyci5yZXNwb25zZS5kYXRhfSlcclxuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIC8vICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZWdpc3RyYXRpb24ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHJlZ2lzdHJhdGlvblJlcXVlc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgYWRkRmxhc2hNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vLyAgIGlzRW1haWxFeGlzdHM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuLy8gfVxyXG5cclxuLy8gUmVnaXN0cmF0aW9uLmNvbnRleHRUeXBlcyA9IHtcclxuLy8gICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICByZXR1cm4gc3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcm9maWxlSW5mbyk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVJbmZvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==