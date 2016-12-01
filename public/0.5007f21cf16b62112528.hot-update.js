webpackHotUpdate(0,{

/***/ 696:
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
	
	var _reactRedux = __webpack_require__(318);
	
	var _ProfilePicture = __webpack_require__(697);
	
	var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);
	
	var _ProfileInfo = __webpack_require__(698);
	
	var _ProfileInfo2 = _interopRequireDefault(_ProfileInfo);
	
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
	
	var divStyle = {
	    position: "absolute",
	    top: "30%",
	    left: "30%"
	};
	
	var Profile = function (_React$Component) {
	    _inherits(Profile, _React$Component);
	
	    function Profile() {
	        _classCallCheck(this, Profile);
	
	        return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	    }
	
	    _createClass(Profile, [{
	        key: 'render',
	        value: function render() {
	            var isAuthenticated = this.props.auth.isAuthenticated;
	
	            var userLinks = _react2.default.createElement('ul', { className: 'nav navbar-nav' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Logout')));
	            return _react2.default.createElement('div', { id: 'wrapper' }, _react2.default.createElement('div', { id: 'sidebar-wrapper' }, _react2.default.createElement('ul', { className: 'sidebar-nav' }, _react2.default.createElement('li', { className: 'sidebar-brand' }, _react2.default.createElement('a', { href: '#' }, "Va\u017Eiuoju-Ve\u017Eu")), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Dashboard')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Trips')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Trips')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Add Trip')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Profile')))), _react2.default.createElement('div', { id: 'page-content-wrapper' }, _react2.default.createElement('div', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-lg-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_ProfilePicture2.default, null), _react2.default.createElement(_ProfileInfo2.default, null)))))));
	        }
	    }]);
	
	    return Profile;
	}(_react2.default.Component);
	
	Profile.propTypes = {
	    auth: _react2.default.PropTypes.object.isRequired
	};
	
	function mapStateToProps(state) {
	    return {
	        auth: state.auth
	    };
	}
	
	function mapDispatchToProps(dispatch) {
	    return {
	        actions: bindActionCreators(LoginActions, dispatch),
	        routerActions: bindActionCreators({ pushState: pushState }, dispatch)
	    };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(Profile);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	    __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	    __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	    __REACT_HOT_LOADER__.register(Profile, 'Profile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	}();

	;
	;

	var _temp2 = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_ProfilePicture2, "_ProfilePicture2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_ProfileInfo2, "_ProfileInfo2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(Profile, "Profile", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");
	}();

	;

/***/ },

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
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'register'), _react2.default.createElement(_TextFieldGroup2.default, {
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

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfileInfo.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLmpzPzI0NWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZUluZm8uanM/ZTY0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO2VBRUo7VUFDQTtXQUFNO0FBRk47O0tBS0k7Ozs7Ozs7Ozs7O2tDQUVLO2lCQUNBLGtCQUFtQixLQUFLLE1BQU0sS0FDckM7O2lCQUFNLFlBQ0osc0NBQUksV0FDRix3REFBSSwyQ0FBRyxNQUFLLE9BR2hCO29CQUNFLHVDQUFLLElBQ0gsb0RBQUssSUFDRCwyREFBSSxXQUNBLHVEQUFJLFdBQ0Esd0RBQUcsTUFBSyxPQUlaLGlFQUNJLDJDQUFHLE1BQUssT0FFWixtREFDSSwyQ0FBRyxNQUFLLE9BRVosK0NBQ0ksMkNBQUcsTUFBSyxPQUVaLGtEQUNJLDJDQUFHLE1BQUssT0FFWixrREFDSSwyQ0FBRyxNQUFLLE9BS3BCLHlEQUFLLElBQ0QsaUVBQUssV0FDRCw0REFBSyxXQUNELGdEQUFLLFdBR0gsc0RBQUssV0FDSCxpRUFDQSw0REFVckI7Ozs7O0dBdERtQixnQkFBTTs7QUF5RDVCLFNBQVE7V0FDQSxnQkFBTSxVQUFVLE9BQU87QUFBN0I7O0FBR0YsVUFBUyxnQkFBZ0IsT0FDdkI7O2VBQ1EsTUFFVDtBQUZHOzs7QUFJSixVQUFTLG1CQUFtQixVQUMxQjs7a0JBQ1csbUJBQW1CLGNBQzVCO3dCQUFlLG1CQUFtQixFQUFDLFdBQUQsYUFFckM7QUFIRzs7O2dCQUtXLHlCQUFRLGlCQUFpQjs7Ozs7Ozs7OzttQ0FiL0I7O21DQU1BOzttQ0F6RUg7O21DQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWE47Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztLQUdJOzBCQUNKOzt3QkFBWSxPQUFNOzJCQUFBOzsySEFFaEI7O1dBQUs7YUFFSDtnQkFDQTtvQkFDQTttQkFDQTt3QkFDQTtjQUNBO2VBQVE7QUFOUjtZQVFIOzs7Ozs4QkFFQztjQUNFLHFDQUNBLDhDQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ25DLG1EQUNBO21CQUNZLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTtlQUNBO21CQUVGO0FBUEU7bUJBUVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQU5FO21CQU9VLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO21CQUVGO0FBTkUsZ0RBT0YsZ0RBQU8sV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BSXJEOzs7OytCQUVTLE9BQ1I7WUFBSyw2QkFBVyxNQUFNLE9BQU8sTUFBTyxNQUFNLE9BQzNDOzs7O21DQUdhLE9BQU07b0JBQ2xCOzthQUNBO2VBQVEsSUFBSSxLQUNWO1lBQUssU0FBUyxFQUFDLFFBQ2Y7WUFBSyxNQUFNLG9CQUFvQixLQUFLLE9BQU8sS0FDekMsWUFDRTtnQkFBSyxNQUFNO2lCQUVUO2lCQUVGO0FBSEU7a0NBR1UsS0FDWjtBQUNEO0FBUkgsVUFTRSxVQUFDLEtBQ0M7QUFDQTtpQkFBUSxJQUNUO0FBQ047Ozs7O0dBMUZ1QixnQkFBTTs7QUE2RmhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtXQUNILGdCQUFNLFVBQVUsT0FBTztBQUEvQjs7Z0JBR2E7Ozs7Ozs7OztpQ0EzR1Q7O2lDQUlBIiwiZmlsZSI6IjAuNTAwN2YyMWNmMTZiNjIxMTI1MjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSAnLi9Qcm9maWxlUGljdHVyZS5qcyc7XHJcbmltcG9ydCBQcm9maWxlSW5mbyBmcm9tICcuL1Byb2ZpbGVJbmZvLmpzJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiLFxyXG4gIGxlZnQ6IFwiMzAlXCJcclxufVxyXG5cclxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdGhpcy5wcm9wcy5hdXRoO1xyXG4gICAgY29uc3QgdXNlckxpbmtzID0gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2dvdXQ8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmHFvml1b2p1LVZlxb51XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRhc2hib2FyZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5UcmlwczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBUcmlwczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BZGQgVHJpcDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlUGljdHVyZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUluZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUHJvZmlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgYXV0aDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGF1dGg6IHN0YXRlLmF1dGhcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKExvZ2luQWN0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgcm91dGVyQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHtwdXNoU3RhdGV9LCBkaXNwYXRjaClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcm9maWxlKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcydcclxuaW1wb3J0IFRleHRGaWVsZEdyb3VwIGZyb20gJy4vVGV4dEZpZWxkR3JvdXAuanMnXHJcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbic7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMCAwIDVweCAwXCJcclxufVxyXG5cclxuY2xhc3MgUHJvZmlsZUluZm8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICAgICAgJycsXHJcbiAgICAgIHN1cm5hbWU6ICAgJycsXHJcbiAgICAgIGRhdGVPZkJpcnRoOiAgJycsXHJcbiAgICAgIHByb2Zlc3Npb246ICAnJyxcclxuICAgICAgdGVsZXBob25lTnVtYmVyOiAgJycsXHJcbiAgICAgIGFib3V0OiAgJycsXHJcbiAgICAgIGVycm9yczoge31cclxuICAgIH07XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgIDxoND5yZWdpc3RlcjwvaDQ+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJuYW1lXCJcclxuICAgICAgICBmaWVsZD1cIm5hbWVcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zdXJuYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwic3VybmFtZVwiXHJcbiAgICAgICAgZmllbGQ9XCJzdXJuYW1lXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZU9mQmlydGh9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJkYXRlIG9mIGJpcnRoXCJcclxuICAgICAgICBmaWVsZD1cImRhdGVPZkJpcnRoXCJcclxuICAgICAgICB0eXBlPVwiZGF0ZVwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnByb2Zlc3Npb259XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwcm9mZXNzaW9uXCJcclxuICAgICAgICBmaWVsZD1cInByb2Zlc3Npb25cIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50ZWxlcGhvbmVOdW1iZXJ9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJ0ZWxlcGhvbmUgbnVtYmVyXCJcclxuICAgICAgICBmaWVsZD1cInRlbGVwaG9uZU51bWJlclwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFib3V0fVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiYWJvdXQgeW91XCJcclxuICAgICAgICBmaWVsZD1cImFib3V0XCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJ0biAuYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzYXZlXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBfb25DaGFuZ2UoZXZlbnQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2V2ZW50LnRhcmdldC5uYW1lXTogZXZlbnQudGFyZ2V0LnZhbHVlfSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChldmVudCl7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczoge319KTtcclxuICAgICAgdGhpcy5wcm9wcy5yZWdpc3RyYXRpb25SZXF1ZXN0KHRoaXMuc3RhdGUpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5wcm9wcy5hZGRGbGFzaE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgIHRleHQ6ICdZb3UgcmVnaXN0ZXJlZCBzdWNjZXNzZnVsbHkhIFdlbGNvbWUgdG8gVmF6aXVvanUtVmV6dSEnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy8nKTtcclxuICAgICAgICAgIC8vb3IgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKCcvJyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAvLyB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVyci5yZXNwb25zZS5kYXRhfSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBSZWdpc3RyYXRpb24ucHJvcFR5cGVzID0ge1xyXG4vLyAgIHJlZ2lzdHJhdGlvblJlcXVlc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgYWRkRmxhc2hNZXNzYWdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vLyAgIGlzRW1haWxFeGlzdHM6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxuLy8gfVxyXG5cclxuUmVnaXN0cmF0aW9uLmNvbnRleHRUeXBlcyA9IHtcclxuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RyYXRpb247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVJbmZvLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==