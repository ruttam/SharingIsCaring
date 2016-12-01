webpackHotUpdate(0,{

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(259);
	
	var _App = __webpack_require__(316);
	
	var _App2 = _interopRequireDefault(_App);
	
	var _Login = __webpack_require__(361);
	
	var _Login2 = _interopRequireDefault(_Login);
	
	var _RegistrationPage = __webpack_require__(652);
	
	var _RegistrationPage2 = _interopRequireDefault(_RegistrationPage);
	
	var _Profile = __webpack_require__(696);
	
	var _Profile2 = _interopRequireDefault(_Profile);
	
	var _Trips = __webpack_require__(699);
	
	var _Trips2 = _interopRequireDefault(_Trips);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _default = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _Login2.default }), _react2.default.createElement(_reactRouter.Route, { path: 'registration', component: _RegistrationPage2.default }), _react2.default.createElement(_reactRouter.Route, { path: 'profileData', component: _Profile2.default }), _react2.default.createElement(_reactRouter.Route, { path: 'trips', component: _Trips2.default }));
	
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_react2, '_react2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_App2, '_App2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_Login2, '_Login2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_RegistrationPage2, '_RegistrationPage2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_Profile2, '_Profile2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_Trips2, '_Trips2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_default, '_default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');
	}();

	;

/***/ },

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.facebookLogin = facebookLogin;
	exports.getProfile = getProfile;
	
	var _axios = __webpack_require__(447);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _SetAuthorizationToken = __webpack_require__(472);
	
	var _SetAuthorizationToken2 = _interopRequireDefault(_SetAuthorizationToken);
	
	var _jsonwebtoken = __webpack_require__(473);
	
	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
	
	var _Types = __webpack_require__(360);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function login(userData, router) {
	  var _this = this;
	
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user/login', userData).then(function (results) {
	      console.log(results);
	
	      dispatch({
	        type: _Types.SET_CURRENT_USER,
	        user: results.data.user_id
	      });
	      router.push('/profileData');
	    }, function (errors) {
	      _this.setState({ errors: errors.response.data.message });
	      console.log(_this.state.errors);
	    });
	  };
	}
	
	function facebookLogin(userData, profileData) {
	  return function (dispatch) {
	    return _axios2.default.get('http://localhost:5000/api/user/facebookLogin', { userData: userData, profileData: profileData });
	  };
	}
	
	function getProfile(id) {
	  return function (dispatch) {
	    return _axios2.default.get('http://localhost:5000/api/user/getProfile/' + id).then(function (response) {
	      console.log(response);
	      dispatch({
	        type: "USER_INFO_RECEIVED",
	        userProfile: response.data
	      });
	    });
	  };
	}
	
	// export function setCurrentUser(user){
	//   return(
	//     type: SET_CURRENT_USER,
	//     user
	//   );
	// }
	
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(login, 'login', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	
	  __REACT_HOT_LOADER__.register(facebookLogin, 'facebookLogin', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	
	  __REACT_HOT_LOADER__.register(getProfile, 'getProfile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_axios2, '_axios2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_SetAuthorizationToken2, '_SetAuthorizationToken2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_jsonwebtoken2, '_jsonwebtoken2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(login, 'login', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(facebookLogin, 'facebookLogin', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(getProfile, 'getProfile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Types = __webpack_require__(360);
	
	var _isEmpty = __webpack_require__(365);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var state = {
	  isAuthenticated: false,
	  user: {}
	};
	
	var _default = function _default() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  console.log(action);
	  switch (action.type) {
	    case _Types.SET_CURRENT_USER:
	      console.log('action.user: ', action.user);
	      var newState = Object.assign({}, state, { currentUserId: action.user, isAuthenticated: !(0, _isEmpty2.default)(action.user) });
	      return newState;
	      console.log(action);
	      return {
	        isAuthenticated: !(0, _isEmpty2.default)(action.user),
	        user: action.user
	      };
	    case _Types.USER_INFO_RECEIVED:
	      var updatedState = Object.assign({}, state, { userProfile: action.userProfile, isAuthenticated: !(0, _isEmpty2.default)(action.user) });
	      return updatedState;
	    default:
	      return state;
	
	  }
	};
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(state, 'state', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_isEmpty2, '_isEmpty2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(state, 'state', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_default, '_default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
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
	
	      return _react2.default.createElement('div', { className: 'col-lg-4' }, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'profile info'), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: user.name,
	        placeholder: 'name',
	        field: 'name',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: user.surname,
	        placeholder: 'surname',
	        field: 'surname',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: user.dateOfBirth,
	        placeholder: 'date of birth',
	        field: 'dateOfBirth',
	        type: 'date',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: user.profession,
	        placeholder: 'profession',
	        field: 'profession',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: user.telephoneNumber,
	        placeholder: 'telephone number',
	        field: 'telephoneNumber',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        onChange: this._onChange.bind(this),
	        value: user.about,
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

/***/ },

/***/ 699:
/***/ function(module, exports) {

	"use strict";

	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXMuanM/ZmJkNSIsIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0F1dGguanM/NTA3MyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcz9lNjRhIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztnQkFHRSxvREFBTyxNQUFLLEtBQUksaUJBQ2Qsb0VBQVksbUJBQ1osZ0VBQU8sTUFBSyxnQkFBZSw4QkFDM0IsZ0VBQU8sTUFBSyxlQUFjLHFCQUMxQixnRUFBTyxNQUFLLFNBQVEsbUJBQXBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1NDVFk7U0FvQkE7U0FNQTs7QUEvQmhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxVQUFTLE1BQU0sVUFBVSxRQUFPO2VBQ3JDOztVQUFPLG9CQUNMOzRCQUFhLEtBQUssd0NBQXdDLFVBQVUsS0FDbEUsVUFBQyxTQUNDO2VBQVEsSUFFUjs7O3NCQUVFO2VBQU0sUUFBUSxLQUVoQjtBQUhFO2NBR0ssS0FDUjtBQVRJLFFBVUwsVUFBQyxRQUNDO2FBQUssU0FBUyxFQUFDLFFBQVEsT0FBTyxTQUFTLEtBQ3ZDO2VBQVEsSUFBSSxNQUFLLE1BQ2xCO0FBRUo7QUFDRjs7O0FBRU0sVUFBUyxjQUFjLFVBQVUsYUFDdEM7VUFBTyxvQkFDTDtZQUFPLGdCQUFNLElBQUksZ0RBQWdELEVBQUMsVUFBRCxVQUFXLGFBQzdFO0FBQ0Y7OztBQUVNLFVBQVMsV0FBVyxJQUN6QjtVQUFPLG9CQUNMOzRCQUFhLG1EQUFpRCxJQUM3RCxLQUFLLFVBQUMsVUFDTDtlQUFRLElBQ1I7O2VBRUU7c0JBQWEsU0FFaEI7QUFIRztBQUtMLE1BVFE7QUFVVjs7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7aUNBN0NnQjs7aUNBb0JBOztpQ0FNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmhCOztBQUNBOzs7Ozs7OztBQUVBLEtBQU07b0JBRUo7U0FBTTtBQUROOztnQkFJYSxvQkFBNkI7T0FBQTtPQUFBLDZFQUMxQzs7V0FBUSxJQUNSO1dBQVEsT0FDTjtpQkFDRTtlQUFRLElBQUksaUJBQWlCLE9BQzdCO1dBQU0sV0FBVyxPQUFPLE9BQU8sSUFBSSxPQUFPLEVBQUMsZUFBZSxPQUFPLE1BQU0saUJBQWlCLENBQUMsdUJBQVEsT0FDakc7Y0FDQTtlQUFRLElBQ1I7OzBCQUNtQixDQUFDLHVCQUFRLE9BQzFCO2VBQU0sT0FFUjtBQUhFO2lCQUlBO1dBQU0sZUFBZSxPQUFPLE9BQU8sSUFBSSxPQUFPLEVBQUMsYUFBYSxPQUFPLGFBQWEsaUJBQWlCLENBQUMsdUJBQVEsT0FDMUc7Y0FDSjtBQUFTO2NBR1o7Ozs7Ozs7Ozs7Ozs7aUNBdkJLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSE47Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztLQUdJOzBCQUNKOzt3QkFBWSxPQUFNOzJCQUFBOzsySEFHaEI7O1dBQUs7YUFFSDtnQkFDQTtvQkFDQTttQkFDQTt3QkFDQTtjQUNBO2VBQVE7QUFOUjtZQVFIOzs7OzswQ0FHQztlQUFRLElBQ1I7WUFBSyxNQUFNLFNBQVMsNkJBQVcsS0FBSyxNQUFNLEtBQzNDOzs7OzhCQUdDO1dBQU0sT0FBTyxLQUFLLE1BQU0sS0FFeEI7O2NBQ0UsdUNBQUssV0FDTCxzREFBTSxVQUFVLEtBQUssY0FBYyxLQUNuQyxtREFDQTttQkFDWSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FDUDtzQkFDQTtnQkFDQTttQkFFRjtBQU5FO21CQU9VLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUNQO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQ1A7c0JBQ0E7Z0JBQ0E7ZUFDQTttQkFFRjtBQVBFO21CQVFVLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUNQO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQ1A7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FDUDtzQkFDQTtnQkFDQTttQkFFRjtBQU5FLGdEQU9GLGdEQUFPLFdBQVUsb0JBQW1CLE1BQUssVUFBUyxPQUlyRDs7OzsrQkFFUyxPQUNSO1lBQUssNkJBQVcsTUFBTSxPQUFPLE1BQU8sTUFBTSxPQUMzQzs7OzttQ0FHYSxPQUFNO29CQUNsQjs7YUFDQTtlQUFRLElBQUksS0FDVjtZQUFLLFNBQVMsRUFBQyxRQUNmO1lBQUssTUFBTSxvQkFBb0IsS0FBSyxPQUFPLEtBQ3pDLFlBQ0U7Z0JBQUssTUFBTTtpQkFFVDtpQkFFRjtBQUhFO2tDQUdVLEtBQ1o7QUFDRDtBQVJILFVBU0UsVUFBQyxLQUNDO0FBQ0E7aUJBQVEsSUFDVDtBQUNOOzs7OztHQW5HdUIsZ0JBQU07O0FBc0doQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTLGdCQUFnQixPQUN2QjtXQUFRLElBQ1I7VUFDRDs7O2dCQUVjLHlCQUFRLGlCQUFpQjs7Ozs7Ozs7OztpQ0FML0I7O2lDQXBISDs7aUNBSUEiLCJmaWxlIjoiMC4yNWM2YTBiYmQ3NTkzYTdjNWVmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtSb3V0ZSwgSW5kZXhSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanMnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi5qcyc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25QYWdlIGZyb20gJy4vUmVnaXN0cmF0aW9uUGFnZS5qcyc7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZS5qcyc7XHJcbmltcG9ydCBUcmlwcyBmcm9tICcuL1RyaXBzLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChcclxuICA8Um91dGUgcGF0aD1cIi9cIiBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0xvZ2lufSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCJyZWdpc3RyYXRpb25cIiBjb21wb25lbnQ9e1JlZ2lzdHJhdGlvblBhZ2V9IC8+XHJcbiAgICA8Um91dGUgcGF0aD1cInByb2ZpbGVEYXRhXCIgY29tcG9uZW50PXtQcm9maWxlfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCJ0cmlwc1wiIGNvbXBvbmVudD17VHJpcHN9IC8+XHJcbiAgPC9Sb3V0ZT5cclxuKVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXMuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc2V0QXV0aG9yaXphdGlvblRva2VuIGZyb20gJy4uL3V0aWxzL1NldEF1dGhvcml6YXRpb25Ub2tlbi5qcydcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQge1NFVF9DVVJSRU5UX1VTRVJ9IGZyb20gJy4vVHlwZXMuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4odXNlckRhdGEsIHJvdXRlcil7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvbG9naW4nLCB1c2VyRGF0YSkudGhlbihcclxuICAgICAgKHJlc3VsdHMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuXHJcbiAgICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcclxuICAgICAgICAgIHVzZXI6IHJlc3VsdHMuZGF0YS51c2VyX2lkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlRGF0YScpO1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnJvcnMucmVzcG9uc2UuZGF0YS5tZXNzYWdlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5lcnJvcnMpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZhY2Vib29rTG9naW4odXNlckRhdGEsIHByb2ZpbGVEYXRhKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL2ZhY2Vib29rTG9naW4nLCB7dXNlckRhdGEsIHByb2ZpbGVEYXRhfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvZmlsZShpZCl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9nZXRQcm9maWxlLyR7aWR9YClcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBcIlVTRVJfSU5GT19SRUNFSVZFRFwiLFxyXG4gICAgICAgIHVzZXJQcm9maWxlOiByZXNwb25zZS5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XHJcbi8vICAgcmV0dXJuKFxyXG4vLyAgICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcclxuLy8gICAgIHVzZXJcclxuLy8gICApO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzIiwiaW1wb3J0IHtTRVRfQ1VSUkVOVF9VU0VSLCBVU0VSX0lORk9fUkVDRUlWRUR9IGZyb20gJy4uL2FjdGlvbnMvVHlwZXMuanMnO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gIHVzZXI6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0NVUlJFTlRfVVNFUjpcclxuICAgICAgY29uc29sZS5sb2coJ2FjdGlvbi51c2VyOiAnLCBhY3Rpb24udXNlcik7XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtjdXJyZW50VXNlcklkOiBhY3Rpb24udXNlciwgaXNBdXRoZW50aWNhdGVkOiAhaXNFbXB0eShhY3Rpb24udXNlcil9KTtcclxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogIWlzRW1wdHkoYWN0aW9uLnVzZXIpLFxyXG4gICAgICAgIHVzZXI6IGFjdGlvbi51c2VyXHJcbiAgICAgIH07XHJcbiAgICAgIGNhc2UgVVNFUl9JTkZPX1JFQ0VJVkVEOlxyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7dXNlclByb2ZpbGU6IGFjdGlvbi51c2VyUHJvZmlsZSwgaXNBdXRoZW50aWNhdGVkOiAhaXNFbXB0eShhY3Rpb24udXNlcil9KTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZFN0YXRlO1xyXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG5cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcyc7XHJcbmltcG9ydCB7Z2V0UHJvZmlsZX0gZnJvbSAnLi4vYWN0aW9ucy9BdXRoQWN0aW9ucy5qcyc7XHJcbmltcG9ydCBUZXh0RmllbGRHcm91cCBmcm9tICcuL1RleHRGaWVsZEdyb3VwLmpzJztcclxuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGVJbmZvIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbmFtZTogICAgICAnJyxcclxuICAgICAgc3VybmFtZTogICAnJyxcclxuICAgICAgZGF0ZU9mQmlydGg6ICAnJyxcclxuICAgICAgcHJvZmVzc2lvbjogICcnLFxyXG4gICAgICB0ZWxlcGhvbmVOdW1iZXI6ICAnJyxcclxuICAgICAgYWJvdXQ6ICAnJyxcclxuICAgICAgZXJyb3JzOiB7fVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldFByb2ZpbGUodGhpcy5wcm9wcy5hdXRoLmN1cnJlbnRVc2VySWQpKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHVzZXIgPSB0aGlzLnByb3BzLmF1dGgudXNlclByb2ZpbGU7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICA8aDQ+cHJvZmlsZSBpbmZvPC9oND5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3VzZXIubmFtZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIm5hbWVcIlxyXG4gICAgICAgIGZpZWxkPVwibmFtZVwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt1c2VyLnN1cm5hbWV9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJzdXJuYW1lXCJcclxuICAgICAgICBmaWVsZD1cInN1cm5hbWVcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dXNlci5kYXRlT2ZCaXJ0aH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImRhdGUgb2YgYmlydGhcIlxyXG4gICAgICAgIGZpZWxkPVwiZGF0ZU9mQmlydGhcIlxyXG4gICAgICAgIHR5cGU9XCJkYXRlXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3VzZXIucHJvZmVzc2lvbn1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cInByb2Zlc3Npb25cIlxyXG4gICAgICAgIGZpZWxkPVwicHJvZmVzc2lvblwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt1c2VyLnRlbGVwaG9uZU51bWJlcn1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cInRlbGVwaG9uZSBudW1iZXJcIlxyXG4gICAgICAgIGZpZWxkPVwidGVsZXBob25lTnVtYmVyXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3VzZXIuYWJvdXR9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJhYm91dCB5b3VcIlxyXG4gICAgICAgIGZpZWxkPVwiYWJvdXRcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8ZGl2PjwvZGl2PlxyXG4gICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiYnRuIC5idG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInNhdmVcIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShldmVudCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtbZXZlbnQudGFyZ2V0Lm5hbWVdOiBldmVudC50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG5cclxuICBfaGFuZGxlU3VibWl0KGV2ZW50KXtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7fX0pO1xyXG4gICAgICB0aGlzLnByb3BzLnJlZ2lzdHJhdGlvblJlcXVlc3QodGhpcy5zdGF0ZSkudGhlbihcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnByb3BzLmFkZEZsYXNoTWVzc2FnZSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgdGV4dDogJ1lvdSByZWdpc3RlcmVkIHN1Y2Nlc3NmdWxseSEgV2VsY29tZSB0byBWYXppdW9qdS1WZXp1ISdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaGFzaEhpc3RvcnkucHVzaCgnLycpO1xyXG4gICAgICAgICAgLy9vciB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyLnJlc3BvbnNlLmRhdGF9KVxyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFJlZ2lzdHJhdGlvbi5wcm9wVHlwZXMgPSB7XHJcbi8vICAgcmVnaXN0cmF0aW9uUmVxdWVzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gICBhZGRGbGFzaE1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbi8vICAgaXNFbWFpbEV4aXN0czogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG4vLyB9XHJcblxyXG4vLyBSZWdpc3RyYXRpb24uY29udGV4dFR5cGVzID0ge1xyXG4vLyAgIHJvdXRlcjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2ZpbGVJbmZvKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZUluZm8uanMiXSwic291cmNlUm9vdCI6IiJ9