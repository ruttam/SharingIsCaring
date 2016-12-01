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
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var _default = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _App2.default }, _react2.default.createElement(_reactRouter.IndexRoute, { component: _Login2.default }), _react2.default.createElement(_reactRouter.Route, { path: 'registration', component: _RegistrationPage2.default }), _react2.default.createElement(_reactRouter.Route, { path: 'profileData', component: _Profile2.default }));
	
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

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_default, '_default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Routes.js');
	}();

	;

/***/ },

/***/ 362:
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
	
	var _reactRouter = __webpack_require__(259);
	
	var _TextFieldGroup = __webpack_require__(363);
	
	var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);
	
	var _LoginValidation = __webpack_require__(364);
	
	var _LoginValidation2 = _interopRequireDefault(_LoginValidation);
	
	var _reactRedux = __webpack_require__(318);
	
	var _AuthActions = __webpack_require__(446);
	
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
	var verticalLine = {
	  borderRight: "thin solid #354c8c"
	};
	
	var EmailLogin = function (_React$Component) {
	  _inherits(EmailLogin, _React$Component);
	
	  function EmailLogin(props) {
	    _classCallCheck(this, EmailLogin);
	
	    var _this = _possibleConstructorReturn(this, (EmailLogin.__proto__ || Object.getPrototypeOf(EmailLogin)).call(this, props));
	
	    _this.state = {
	      email: '',
	      password: '',
	      errors: {}
	    };
	    return _this;
	  }
	
	  _createClass(EmailLogin, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { className: 'col-lg-6', style: verticalLine }, _react2.default.createElement('h4', null, 'login with e-mail'), _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, this.state.errors.form && _react2.default.createElement('div', { className: 'alert alert-danger' }, this.state.errors), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.email,
	        onChange: this._onChange.bind(this),
	        value: this.state.email,
	        field: 'email',
	        placeholder: 'email',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.password,
	        onChange: this._onChange.bind(this),
	        value: this.state.password,
	        type: 'password',
	        field: 'password',
	        placeholder: 'password',
	        divStyle: divStyle
	      }), _react2.default.createElement('input', { style: divStyle, className: 'btn .btn-primary', type: 'submit', value: 'login' })), _react2.default.createElement(_reactRouter.Link, { to: '/registration' }, 'Dont have an account? Register here!'));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(e) {
	      this.setState(_defineProperty({}, e.target.name, e.target.value));
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var _validateInput = (0, _LoginValidation2.default)(this.state),
	          errors = _validateInput.errors,
	          isValid = _validateInput.isValid;
	
	      if (!isValid) {
	        this.setState({ errors: errors });
	      }
	      return isValid;
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	      if (this.isValid()) {
	        this.setState({ errors: {} });
	        this.props.login(this.state).then(function (res) {
	          _this2.context.router.push('/profileData');
	          console.log(response);
	        }, function (err) {
	          return _this2.setState({ errors: err.response.data });
	        });
	      }
	    }
	  }]);
	
	  return EmailLogin;
	}(_react2.default.Component);
	
	EmailLogin.propTypes = {
	  login: _react2.default.PropTypes.func.isRequired
	};
	
	EmailLogin.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};
	
	var _default = (0, _reactRedux.connect)(null, { login: _AuthActions.login })(EmailLogin);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
	  __REACT_HOT_LOADER__.register(verticalLine, 'verticalLine', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
	  __REACT_HOT_LOADER__.register(EmailLogin, 'EmailLogin', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_TextFieldGroup2, "_TextFieldGroup2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_LoginValidation2, "_LoginValidation2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_defineProperty, "_defineProperty", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(verticalLine, "verticalLine", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(EmailLogin, "EmailLogin", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");
	}();

	;

/***/ },

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
	      return _react2.default.createElement('div', { style: divStyle }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_ProfilePicture2.default, null)));
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

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
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
	  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var divCircle = {
	  width: '500px',
	  height: '500px',
	  background: '#E5E5E5',
	  border: 'thin solid #B7B7B7'
	};
	
	var ProfilePicture = function (_React$Component) {
	  _inherits(ProfilePicture, _React$Component);
	
	  function ProfilePicture(props) {
	    _classCallCheck(this, ProfilePicture);
	
	    var _this = _possibleConstructorReturn(this, (ProfilePicture.__proto__ || Object.getPrototypeOf(ProfilePicture)).call(this, props));
	
	    axios({
	      method: 'GET',
	      url: 'http://localhost:5000/api/userImage',
	      mode: 'no-cors',
	      data: _this.props.id,
	      dataType: 'json'
	    }).then(function (result) {
	      console.log(result);
	    });
	    _this.state = { file: '', filePreview: '' };
	    return _this;
	  }
	
	  _createClass(ProfilePicture, [{
	    key: '_handleSubmit',
	    value: function _handleSubmit(e) {
	      e.preventDefault();
	      console.log('Uploading: ', this.state.file);
	    }
	  }, {
	    key: '_handleImageChange',
	    value: function _handleImageChange(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	
	      var reader = new FileReader();
	      var file = e.target.files[0];
	
	      reader.onloadend = function () {
	        _this2.setState({
	          file: file,
	          filePreview: reader.result
	        });
	      };
	
	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var filePreview = this.state.filePreview;
	
	      var $imagePreview = null;
	      if (filePreview) {
	        $imagePreview = _react2.default.createElement('img', { src: filePreview });
	      } else {
	        $imagePreview = _react2.default.createElement('img', { src: filePreview });
	      }
	
	      return _react2.default.createElement('div', { className: 'previewComponent' }, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
	          return _this3._handleSubmit(e);
	        } }, _react2.default.createElement('input', { className: 'fileInput', type: 'file', onChange: function onChange(e) {
	          return _this3._handleImageChange(e);
	        } }), _react2.default.createElement('button', { className: 'submitButton', type: 'submit', onClick: function onClick(e) {
	          return _this3._handleSubmit(e);
	        } }, 'Upload Image')), _react2.default.createElement('div', { className: 'imgPreview' }, $imagePreview));
	    }
	  }]);
	
	  return ProfilePicture;
	}(_react2.default.Component);
	
	_react2.default.render(_react2.default.createElement(ImageUpload, null), document.getElementById("mainApp"));
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divCircle, 'divCircle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	
	  __REACT_HOT_LOADER__.register(ProfilePicture, 'ProfilePicture', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, '_createClass', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(_react2, '_react2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(_classCallCheck, '_classCallCheck', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, '_possibleConstructorReturn', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(_inherits, '_inherits', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(divCircle, 'divCircle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(ProfilePicture, 'ProfilePicture', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Sb3V0ZXMuanM/ZmJkNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzP2NhOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS5qcz8yNDViIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVQaWN0dXJlLmpzPzM3MjIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztnQkFHRSxvREFBTyxNQUFLLEtBQUksaUJBQ2Qsb0VBQVksbUJBQ1osZ0VBQU8sTUFBSyxnQkFBZSw4QkFDM0IsZ0VBQU8sTUFBSyxlQUFjLHFCQUExQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWko7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtXQUNJO0FBQVI7QUFFRixLQUFNO2dCQUNTO0FBQWI7O0tBR0k7eUJBQ0o7O3VCQUFZLE9BQU07MkJBQUE7O3lIQUVoQjs7V0FBSztjQUVIO2lCQUNBO2VBQVE7QUFGUjtZQUlIOzs7Ozs4QkFHQztjQUNFLHVDQUFLLFdBQVUsWUFBVyxPQUMxQiwwREFDQSw4REFBTSxVQUFVLEtBQUssY0FBYyxLQUNsQyxjQUFLLE1BQU0sT0FBTyxRQUFRLHVDQUFLLFdBQWdDLDZCQUFLLE1BQ3JFO2dCQUNTLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO2dCQUNBO3NCQUNBO21CQUVGO0FBUEU7Z0JBUU8sS0FBSyxNQUFNLE9BQ2xCO21CQUFVLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7ZUFDQTtnQkFD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QUssVUFBUyxTQUFTLGlCQUFDLEdBQUQ7a0JBQUssT0FBSyxjQUFjO0FBQWhGLGNBRUYseURBQUssV0FDRixnQkFJUjs7Ozs7R0F6RDBCLGdCQUFNOztBQTREbkMsaUJBQU0sT0FBTyw4QkFBQyxhQUFkLE9BQTZCLFNBQVMsZUFBZTs7Ozs7Ozs7aUNBbkUvQzs7aUNBT0EiLCJmaWxlIjoiMC45MDM3ZWVhYWY5YzE2YWQ4NDJkZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtSb3V0ZSwgSW5kZXhSb3V0ZX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAuanMnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9Mb2dpbi5qcyc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb25QYWdlIGZyb20gJy4vUmVnaXN0cmF0aW9uUGFnZS5qcyc7XHJcbmltcG9ydCBQcm9maWxlIGZyb20gJy4vUHJvZmlsZS5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoXHJcbiAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgPEluZGV4Um91dGUgY29tcG9uZW50PXtMb2dpbn0gLz5cclxuICAgIDxSb3V0ZSBwYXRoPVwicmVnaXN0cmF0aW9uXCIgY29tcG9uZW50PXtSZWdpc3RyYXRpb25QYWdlfSAvPlxyXG4gICAgPFJvdXRlIHBhdGg9XCJwcm9maWxlRGF0YVwiIGNvbXBvbmVudD17UHJvZmlsZX0gLz5cclxuICA8L1JvdXRlPlxyXG4pXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JvdXRlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgVGV4dEZpZWxkR3JvdXAgZnJvbSAnLi9UZXh0RmllbGRHcm91cC5qcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vTG9naW5WYWxpZGF0aW9uLmpzJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7bG9naW59IGZyb20gJy4uL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuY29uc3QgdmVydGljYWxMaW5lID0ge1xyXG4gIGJvcmRlclJpZ2h0OiBcInRoaW4gc29saWQgIzM1NGM4Y1wiXHJcbn1cclxuXHJcbmNsYXNzIEVtYWlsTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBlcnJvcnM6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt2ZXJ0aWNhbExpbmV9PlxyXG4gICAgICA8aDQ+bG9naW4gd2l0aCBlLW1haWw8L2g0PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICB7dGhpcy5zdGF0ZS5lcnJvcnMuZm9ybSAmJiA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPnt0aGlzLnN0YXRlLmVycm9yc308L2Rpdj59XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIGVycm9yPXt0aGlzLnN0YXRlLmVycm9ycy5lbWFpbH1cclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cclxuICAgICAgICBmaWVsZD1cImVtYWlsXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLnBhc3N3b3JkfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgZmllbGQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgICAgPGlucHV0IHN0eWxlPXtkaXZTdHlsZX0gY2xhc3NOYW1lPVwiYnRuIC5idG4tcHJpbWFyeVwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cImxvZ2luXCIgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8TGluayB0bz1cIi9yZWdpc3RyYXRpb25cIj5Eb250IGhhdmUgYW4gYWNjb3VudD8gUmVnaXN0ZXIgaGVyZSE8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIF9vbkNoYW5nZShlKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tlLnRhcmdldC5uYW1lXTogZS50YXJnZXQudmFsdWV9KTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWQoKXtcclxuICAgIGNvbnN0IHtlcnJvcnMsIGlzVmFsaWR9ID0gdmFsaWRhdGVJbnB1dCh0aGlzLnN0YXRlKTtcclxuICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZSl7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZih0aGlzLmlzVmFsaWQoKSl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczoge319KTtcclxuICAgICAgdGhpcy5wcm9wcy5sb2dpbih0aGlzLnN0YXRlKS50aGVuKFxyXG4gICAgICAgIChyZXMpID0+IHt0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy9wcm9maWxlRGF0YScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKX0sXHJcbiAgICAgICAgKGVycikgPT4gdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5FbWFpbExvZ2luLnByb3BUeXBlcyA9IHtcclxuICBsb2dpbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5FbWFpbExvZ2luLmNvbnRleHRUeXBlcyA9IHtcclxuICByb3V0ZXI6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsIHtsb2dpbn0pKEVtYWlsTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBQcm9maWxlUGljdHVyZSBmcm9tICcuL1Byb2ZpbGVQaWN0dXJlLmpzJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiLFxyXG4gIGxlZnQ6IFwiMzAlXCJcclxufVxyXG5cclxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdGhpcy5wcm9wcy5hdXRoO1xyXG4gICAgY29uc3QgdXNlckxpbmtzID0gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2dvdXQ8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICA8UHJvZmlsZVBpY3R1cmUgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblByb2ZpbGUucHJvcFR5cGVzID0ge1xyXG4gIGF1dGg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIHJldHVybiB7XHJcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhMb2dpbkFjdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIHJvdXRlckFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7cHVzaFN0YXRlfSwgZGlzcGF0Y2gpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZmlsZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGUuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgZGl2Q2lyY2xlID0ge1xyXG4gICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAnI0U1RTVFNScsXHJcbiAgICBib3JkZXI6ICd0aGluIHNvbGlkICNCN0I3QjcnXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGVQaWN0dXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VySW1hZ2UnLFxyXG4gICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRlID0ge2ZpbGU6ICcnLCBmaWxlUHJldmlldzogJyd9O1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnVXBsb2FkaW5nOiAnLCB0aGlzLnN0YXRlLmZpbGUpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUltYWdlQ2hhbmdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICBmaWxlUHJldmlldzogcmVhZGVyLnJlc3VsdFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtmaWxlUHJldmlld30gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0ICRpbWFnZVByZXZpZXcgPSBudWxsO1xyXG4gICAgaWYgKGZpbGVQcmV2aWV3KSB7XHJcbiAgICAgICRpbWFnZVByZXZpZXcgPSAoPGltZyBzcmM9e2ZpbGVQcmV2aWV3fSAvPik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtmaWxlUHJldmlld30gLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0NvbXBvbmVudFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpPT50aGlzLl9oYW5kbGVJbWFnZUNoYW5nZShlKX0gLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5faGFuZGxlU3VibWl0KGUpfT5VcGxvYWQgSW1hZ2U8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XHJcbiAgICAgICAgICB7JGltYWdlUHJldmlld31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5SZWFjdC5yZW5kZXIoPEltYWdlVXBsb2FkLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkFwcFwiKSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVQaWN0dXJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==