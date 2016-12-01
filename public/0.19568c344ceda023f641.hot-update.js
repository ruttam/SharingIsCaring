webpackHotUpdate(0,{

/***/ 360:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_FLASH_MESSAGE = exports.ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
	var DELETE_FLASH_MESSAGE = exports.DELETE_FLASH_MESSAGE = 'DELETE_FLASH_MESSAGE';
	var SET_CURRENT_USER = exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
	var USER_INFO_RECEIVED = exports.USER_INFO_RECEIVED = 'USER_INFO_RECEIVED';
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(ADD_FLASH_MESSAGE, 'ADD_FLASH_MESSAGE', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');
	
	  __REACT_HOT_LOADER__.register(DELETE_FLASH_MESSAGE, 'DELETE_FLASH_MESSAGE', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');
	
	  __REACT_HOT_LOADER__.register(SET_CURRENT_USER, 'SET_CURRENT_USER', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');
	
	  __REACT_HOT_LOADER__.register(USER_INFO_RECEIVED, 'USER_INFO_RECEIVED', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(ADD_FLASH_MESSAGE, 'ADD_FLASH_MESSAGE', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');

	  __REACT_HOT_LOADER__.register(DELETE_FLASH_MESSAGE, 'DELETE_FLASH_MESSAGE', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');

	  __REACT_HOT_LOADER__.register(SET_CURRENT_USER, 'SET_CURRENT_USER', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');

	  __REACT_HOT_LOADER__.register(USER_INFO_RECEIVED, 'USER_INFO_RECEIVED', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/Types.js');
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
	
	var _reactCookie = __webpack_require__(700);
	
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
	
	function mapStateToProps(state) {
	  //const {eventStore} = state;
	  console.log(state);
	  return state;
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
	
	      var hasErrors = !_.isEmpty(this.state.errors);
	      console.log('this.state.errors.form: ', this);
	      return _react2.default.createElement('div', { className: 'col-lg-6', style: verticalLine }, _react2.default.createElement('h4', null, 'login with e-mail'), _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, hasErrors && _react2.default.createElement('div', { className: 'alert alert-danger' }, this.state.errors), _react2.default.createElement(_TextFieldGroup2.default, {
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
	      e.preventDefault();
	      if (this.isValid()) {
	        this.setState({ errors: {} });
	        console.log(this.context.router);
	        this.props.dispatch((0, _AuthActions.login)(this.state, this.context.router));
	      }
	    }
	  }]);
	
	  return EmailLogin;
	}(_react2.default.Component);
	
	EmailLogin.propTypes = {
	  login: _react2.default.PropTypes.func
	};
	
	EmailLogin.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(EmailLogin);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js');
	
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

	  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(verticalLine, "verticalLine", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(EmailLogin, "EmailLogin", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/EmailLogin.js");
	}();

	;

/***/ },

/***/ 697:
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
	
	var _reactCookie = __webpack_require__(700);
	
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
	
	var divCircle = {
	  width: '200px',
	  height: '200px',
	  background: '#E5E5E5',
	  border: 'thin solid #B7B7B7',
	  borderRadius: '50%'
	};
	
	var ProfilePicture = function (_React$Component) {
	  _inherits(ProfilePicture, _React$Component);
	
	  function ProfilePicture(props) {
	    _classCallCheck(this, ProfilePicture);
	
	    // axios({
	    //   method: 'GET',
	    //   url: 'http://localhost:5000/api/userImage/get',
	    //   mode: 'no-cors',
	    //   data: this.props.id,
	    //   dataType: 'json'
	    // })
	    // .then((result)=>{
	    //   console.log(result);
	    // });
	    var _this = _possibleConstructorReturn(this, (ProfilePicture.__proto__ || Object.getPrototypeOf(ProfilePicture)).call(this, props));
	
	    console.log(_reactCookie.cookie);
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
	        $imagePreview = _react2.default.createElement('div', { style: divCircle }, _react2.default.createElement('img', { style: divCircle, src: filePreview }));
	      } else {
	        $imagePreview = _react2.default.createElement('div', { style: divCircle }, _react2.default.createElement('img', { style: divCircle, src: filePreview }));
	      }
	
	      return _react2.default.createElement('div', { className: 'col-lg-4' }, _react2.default.createElement('div', { className: 'previewComponent' }, _react2.default.createElement('div', { className: 'imgPreview' }, $imagePreview, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
	          return _this3._handleSubmit(e);
	        } }, _react2.default.createElement('input', { className: 'fileInput', type: 'file', onChange: function onChange(e) {
	          return _this3._handleImageChange(e);
	        } }), _react2.default.createElement('button', { className: 'submitButton', type: 'submit', onClick: function onClick(e) {
	          return _this3._handleSubmit(e);
	        } }, 'Upload Image')))));
	    }
	  }]);
	
	  return ProfilePicture;
	}(_react2.default.Component);
	
	var _default = ProfilePicture;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divCircle, 'divCircle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	
	  __REACT_HOT_LOADER__.register(ProfilePicture, 'ProfilePicture', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_axios2, "_axios2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(divCircle, "divCircle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(ProfilePicture, "ProfilePicture", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");
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
	
	var _reactCookie = __webpack_require__(700);
	
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
	      _reactCookie.cookie.save('userId', this.props.auth.currentUserId);
	      console.log(_reactCookie.cookie);
	      this.props.dispatch((0, _AuthActions.getProfile)(this.props.auth.currentUserId));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var user = this.props.auth.userProfile;
	
	      console.log('-----------------', this);
	      console.log(_reactCookie.cookie);
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

/***/ },

/***/ 699:
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
	      return _react2.default.createElement('div', { id: 'wrapper' }, _react2.default.createElement('div', { id: 'sidebar-wrapper' }, _react2.default.createElement('ul', { className: 'sidebar-nav' }, _react2.default.createElement('li', { className: 'sidebar-brand' }, _react2.default.createElement('a', { href: '#' }, "Va\u017Eiuoju-Ve\u017Eu")), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Profile')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Trips')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Trips')))), _react2.default.createElement('div', { id: 'page-content-wrapper' }, _react2.default.createElement('div', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-lg-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_ProfilePicture2.default, null), _react2.default.createElement(Trip, null)))))));
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
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js');
	
	  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js');
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js');
	
	  __REACT_HOT_LOADER__.register(Profile, 'Profile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_ProfilePicture2, "_ProfilePicture2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_ProfileInfo2, "_ProfileInfo2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(Profile, "Profile", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trips.js");
	}();

	;

/***/ },

/***/ 700:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.load = load;
	exports.select = select;
	exports.save = save;
	exports.remove = remove;
	exports.setRawCookie = setRawCookie;
	exports.plugToRequest = plugToRequest;
	
	var _cookie = __webpack_require__(701);
	
	var _cookie2 = _interopRequireDefault(_cookie);
	
	var _objectAssign = __webpack_require__(702);
	
	var _objectAssign2 = _interopRequireDefault(_objectAssign);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var IS_NODE = typeof document === 'undefined' || process && process.env && process.env.NODE_ENV === 'test';
	var _rawCookie = {};
	var _res = undefined;
	
	function _isResWritable() {
	  return _res && !_res.headersSent;
	}
	
	function load(name, doNotParse) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	  var cookieVal = cookies && cookies[name];
	
	  if (typeof doNotParse === 'undefined') {
	    doNotParse = !cookieVal || cookieVal[0] !== '{' && cookieVal[0] !== '[';
	  }
	
	  if (!doNotParse) {
	    try {
	      cookieVal = JSON.parse(cookieVal);
	    } catch (e) {
	      // Not serialized object
	    }
	  }
	
	  return cookieVal;
	}
	
	function select(regex) {
	  var cookies = IS_NODE ? _rawCookie : _cookie2.default.parse(document.cookie);
	
	  if (!cookies) {
	    return {};
	  }
	
	  if (!regex) {
	    return cookies;
	  }
	
	  return Object.keys(cookies).reduce(function (accumulator, name) {
	    if (!regex.test(name)) {
	      return accumulator;
	    }
	
	    var newCookie = {};
	    newCookie[name] = cookies[name];
	    return (0, _objectAssign2.default)({}, accumulator, newCookie);
	  }, {});
	}
	
	function save(name, val, opt) {
	  _rawCookie[name] = val;
	
	  // allow you to work with cookies as objects.
	  if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
	    _rawCookie[name] = JSON.stringify(val);
	  }
	
	  // Cookies only work in the browser
	  if (!IS_NODE) {
	    document.cookie = _cookie2.default.serialize(name, _rawCookie[name], opt);
	  }
	
	  if (_isResWritable() && _res.cookie) {
	    _res.cookie(name, val, opt);
	  }
	}
	
	function remove(name, opt) {
	  delete _rawCookie[name];
	
	  if (typeof opt === 'undefined') {
	    opt = {};
	  } else if (typeof opt === 'string') {
	    // Will be deprecated in future versions
	    opt = { path: opt };
	  } else {
	    // Prevent mutation of opt below
	    opt = (0, _objectAssign2.default)({}, opt);
	  }
	
	  if (typeof document !== 'undefined') {
	    opt.expires = new Date(1970, 1, 1, 0, 0, 1);
	    opt.maxAge = 0;
	    document.cookie = _cookie2.default.serialize(name, '', opt);
	  }
	
	  if (_isResWritable() && _res.clearCookie) {
	    _res.clearCookie(name, opt);
	  }
	}
	
	function setRawCookie(rawCookie) {
	  if (rawCookie) {
	    _rawCookie = _cookie2.default.parse(rawCookie);
	  } else {
	    _rawCookie = {};
	  }
	}
	
	function plugToRequest(req, res) {
	  if (req.cookie) {
	    _rawCookie = req.cookie;
	  } else if (req.cookies) {
	    _rawCookie = req.cookies;
	  } else if (req.headers && req.headers.cookie) {
	    setRawCookie(req.headers.cookie);
	  } else {
	    _rawCookie = {};
	  }
	
	  _res = res;
	
	  return function unplug() {
	    _res = null;
	    _rawCookie = {};
	  };
	}
	
	exports.default = {
	  setRawCookie: setRawCookie,
	  load: load,
	  select: select,
	  save: save,
	  remove: remove,
	  plugToRequest: plugToRequest
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },

/***/ 701:
/***/ function(module, exports) {

	/*!
	 * cookie
	 * Copyright(c) 2012-2014 Roman Shtylman
	 * Copyright(c) 2015 Douglas Christopher Wilson
	 * MIT Licensed
	 */
	
	'use strict';
	
	/**
	 * Module exports.
	 * @public
	 */
	
	exports.parse = parse;
	exports.serialize = serialize;
	
	/**
	 * Module variables.
	 * @private
	 */
	
	var decode = decodeURIComponent;
	var encode = encodeURIComponent;
	var pairSplitRegExp = /; */;
	
	/**
	 * RegExp to match field-content in RFC 7230 sec 3.2
	 *
	 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
	 * field-vchar   = VCHAR / obs-text
	 * obs-text      = %x80-FF
	 */
	
	var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
	
	/**
	 * Parse a cookie header.
	 *
	 * Parse the given cookie header string into an object
	 * The object has the various cookies as keys(names) => values
	 *
	 * @param {string} str
	 * @param {object} [options]
	 * @return {object}
	 * @public
	 */
	
	function parse(str, options) {
	  if (typeof str !== 'string') {
	    throw new TypeError('argument str must be a string');
	  }
	
	  var obj = {}
	  var opt = options || {};
	  var pairs = str.split(pairSplitRegExp);
	  var dec = opt.decode || decode;
	
	  for (var i = 0; i < pairs.length; i++) {
	    var pair = pairs[i];
	    var eq_idx = pair.indexOf('=');
	
	    // skip things that don't look like key=value
	    if (eq_idx < 0) {
	      continue;
	    }
	
	    var key = pair.substr(0, eq_idx).trim()
	    var val = pair.substr(++eq_idx, pair.length).trim();
	
	    // quoted values
	    if ('"' == val[0]) {
	      val = val.slice(1, -1);
	    }
	
	    // only assign once
	    if (undefined == obj[key]) {
	      obj[key] = tryDecode(val, dec);
	    }
	  }
	
	  return obj;
	}
	
	/**
	 * Serialize data into a cookie header.
	 *
	 * Serialize the a name value pair into a cookie string suitable for
	 * http headers. An optional options object specified cookie parameters.
	 *
	 * serialize('foo', 'bar', { httpOnly: true })
	 *   => "foo=bar; httpOnly"
	 *
	 * @param {string} name
	 * @param {string} val
	 * @param {object} [options]
	 * @return {string}
	 * @public
	 */
	
	function serialize(name, val, options) {
	  var opt = options || {};
	  var enc = opt.encode || encode;
	
	  if (typeof enc !== 'function') {
	    throw new TypeError('option encode is invalid');
	  }
	
	  if (!fieldContentRegExp.test(name)) {
	    throw new TypeError('argument name is invalid');
	  }
	
	  var value = enc(val);
	
	  if (value && !fieldContentRegExp.test(value)) {
	    throw new TypeError('argument val is invalid');
	  }
	
	  var str = name + '=' + value;
	
	  if (null != opt.maxAge) {
	    var maxAge = opt.maxAge - 0;
	    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
	    str += '; Max-Age=' + Math.floor(maxAge);
	  }
	
	  if (opt.domain) {
	    if (!fieldContentRegExp.test(opt.domain)) {
	      throw new TypeError('option domain is invalid');
	    }
	
	    str += '; Domain=' + opt.domain;
	  }
	
	  if (opt.path) {
	    if (!fieldContentRegExp.test(opt.path)) {
	      throw new TypeError('option path is invalid');
	    }
	
	    str += '; Path=' + opt.path;
	  }
	
	  if (opt.expires) {
	    if (typeof opt.expires.toUTCString !== 'function') {
	      throw new TypeError('option expires is invalid');
	    }
	
	    str += '; Expires=' + opt.expires.toUTCString();
	  }
	
	  if (opt.httpOnly) {
	    str += '; HttpOnly';
	  }
	
	  if (opt.secure) {
	    str += '; Secure';
	  }
	
	  if (opt.sameSite) {
	    var sameSite = typeof opt.sameSite === 'string'
	      ? opt.sameSite.toLowerCase() : opt.sameSite;
	
	    switch (sameSite) {
	      case true:
	        str += '; SameSite=Strict';
	        break;
	      case 'lax':
	        str += '; SameSite=Lax';
	        break;
	      case 'strict':
	        str += '; SameSite=Strict';
	        break;
	      default:
	        throw new TypeError('option sameSite is invalid');
	    }
	  }
	
	  return str;
	}
	
	/**
	 * Try decoding a string using a decoding function.
	 *
	 * @param {string} str
	 * @param {function} decode
	 * @private
	 */
	
	function tryDecode(str, decode) {
	  try {
	    return decode(str);
	  } catch (e) {
	    return str;
	  }
	}


/***/ },

/***/ 702:
/***/ function(module, exports) {

	'use strict';
	/* eslint-disable no-unused-vars */
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;
	
	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}
	
		return Object(val);
	}
	
	function shouldUseNative() {
		try {
			if (!Object.assign) {
				return false;
			}
	
			// Detect buggy property enumeration order in older V8 versions.
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=4118
			var test1 = new String('abc');  // eslint-disable-line
			test1[5] = 'de';
			if (Object.getOwnPropertyNames(test1)[0] === '5') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test2 = {};
			for (var i = 0; i < 10; i++) {
				test2['_' + String.fromCharCode(i)] = i;
			}
			var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
				return test2[n];
			});
			if (order2.join('') !== '0123456789') {
				return false;
			}
	
			// https://bugs.chromium.org/p/v8/issues/detail?id=3056
			var test3 = {};
			'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
				test3[letter] = letter;
			});
			if (Object.keys(Object.assign({}, test3)).join('') !==
					'abcdefghijklmnopqrst') {
				return false;
			}
	
			return true;
		} catch (e) {
			// We don't expect any of the above to throw, but better to be safe.
			return false;
		}
	}
	
	module.exports = shouldUseNative() ? Object.assign : function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;
	
		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);
	
			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}
	
			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}
	
		return to;
	};


/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9UeXBlcy5qcz8zYmRhIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0VtYWlsTG9naW4uanM/Y2E5NSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUGljdHVyZS5qcz8zNzIyIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVJbmZvLmpzP2U2NGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvVHJpcHMuanM/MjgzMSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LWNvb2tpZS9idWlsZC9jb29raWUuanM/Y2ZkMyIsIndlYnBhY2s6Ly8vLi9+L2Nvb2tpZS9pbmRleC5qcz9kMzdiIiwid2VicGFjazovLy8uL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qcz8yOTI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxLQUFNLGdEQUFvQjtBQUMxQixLQUFNLHNEQUF1QjtBQUM3QixLQUFNLDhDQUFtQjtBQUN6QixLQUFNLGtEQUFxQjs7Ozs7Ozs7aUNBSHJCOztpQ0FDQTs7aUNBQ0E7O2lDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hiOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFVBQVMsZ0JBQWdCLE9BQ3ZCO0FBQ0E7V0FBUSxJQUNSO1VBQ0Q7OztBQUVELEtBQU07V0FDSTtBQUFSO0FBRUYsS0FBTTtnQkFDUztBQUFiOztLQUdJO3lCQUNKOzt1QkFBWSxPQUFNOzJCQUFBOzt5SEFFaEI7O1dBQUs7Y0FFSDtpQkFDQTtlQUFRO0FBRlI7WUFJSDs7Ozs7OEJBSUM7O1dBQU0sWUFBWSxDQUFDLEVBQUUsUUFBUSxLQUFLLE1BQ2xDO2VBQVEsSUFBSSw0QkFDWjtjQUNFLHVDQUFLLFdBQVUsWUFBVyxPQUMxQiwwREFDQSw4REFBTSxVQUFVLEtBQUssY0FBYyxLQUNsQyxzQkFBYSx1Q0FBSyxXQUFnQyw2QkFBSyxNQUN4RDtnQkFDUyxLQUFLLE1BQU0sT0FDbEI7bUJBQVUsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtnQkFDQTtzQkFDQTttQkFFRjtBQVBFO2dCQVFPLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO2VBQ0E7Z0JBQ0E7c0JBQ0E7bUJBRUE7QUFSQSxvREFRTyxPQUFPLFVBQVUsV0FBVSxvQkFBbUIsTUFBSyxVQUFTLE9BRXJFLGdFQUFNLElBQUcsbUJBR1o7Ozs7K0JBRVMsR0FDUjtZQUFLLDZCQUFXLEVBQUUsT0FBTyxNQUFPLEVBQUUsT0FDbkM7Ozs7K0JBRVE7NEJBQ21CLCtCQUFjLEtBQUs7V0FBdEM7V0FBUSx5QkFDZjs7V0FBRyxDQUFDLFNBQ0Y7Y0FBSyxTQUFTLEVBQUMsUUFDaEI7QUFDRDtjQUNEOzs7O21DQUVhLEdBQ1o7U0FDQTtXQUFHLEtBQUssV0FDTjtjQUFLLFNBQVMsRUFBQyxRQUNmO2lCQUFRLElBQUksS0FBSyxRQUNqQjtjQUFLLE1BQU0sU0FBUyx3QkFBTSxLQUFLLE9BQU8sS0FBSyxRQUM1QztBQUNGOzs7OztHQTlEc0IsZ0JBQU07O0FBaUUvQixZQUFXO1VBQ0YsZ0JBQU0sVUFBVTtBQUF2Qjs7QUFHRixZQUFXO1dBQ0QsZ0JBQU0sVUFBVSxPQUFPO0FBQS9COztnQkFHYSx5QkFBUSxpQkFBaUI7Ozs7Ozs7Ozs7aUNBdEYvQjs7aUNBTUg7O2lDQUdBOztpQ0FJQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJOOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtVQUVGO1dBQ0E7ZUFDQTtXQUNBO2lCQUFjO0FBSmQ7O0tBT0U7NkJBQ0o7OzJCQUFZLE9BQU87MkJBRWpCOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVhpQjtpSUFZakI7O2FBQVEsaUJBQ1I7V0FBSyxRQUFRLEVBQUMsTUFBTSxJQUFJLGFBQWE7WUFDdEM7Ozs7O21DQUVhLEdBQ1o7U0FDQTtlQUFRLElBQUksZUFBZSxLQUFLLE1BQ2pDOzs7O3dDQUVrQixHQUFHO29CQUNwQjs7U0FFQTs7V0FBSSxTQUFTLElBQ2I7V0FBSSxPQUFPLEVBQUUsT0FBTyxNQUVwQjs7Y0FBTyxZQUFZLFlBQ2pCO2dCQUFLO2lCQUVIO3dCQUFhLE9BRWhCO0FBSEc7QUFLSjs7Y0FBTyxjQUNSOzs7OzhCQUVRO29CQUFBOztXQUNGLGNBQWUsS0FBSyxNQUN6Qjs7V0FBSSxnQkFDSjtXQUFJLGFBQ0Y7eUJBQWlCLHVDQUFLLE9BQWtCLG9EQUFLLE9BQU8sV0FBVyxLQUNoRTtBQUZELGNBR0U7eUJBQWlCLHVDQUFLLE9BQWtCLG9EQUFLLE9BQU8sV0FBVyxLQUNoRTtBQUVEOztjQUNFLHVDQUFLLFdBQ0wscURBQUssV0FDSCw2REFBSyxXQUNKLGdCQUNELHVEQUFNLFVBQVUsa0JBQUMsR0FBRDtrQkFBSyxPQUFLLGNBQWM7QUFDdEMsdURBQU8sV0FBVSxhQUFZLE1BQUssUUFBTyxVQUFVLGtCQUFDLEdBQUQ7a0JBQUssT0FBSyxtQkFBbUI7QUFDaEYseURBQVEsV0FBVSxnQkFBZSxNQUFLLFVBQVMsU0FBUyxpQkFBQyxHQUFEO2tCQUFLLE9BQUssY0FBYztBQUFoRixjQU9QOzs7OztHQTdEMEIsZ0JBQU07O2dCQWdFcEI7Ozs7Ozs7OztpQ0F4RVQ7O2lDQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk47Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07V0FDSTtBQUFSOztLQUdJOzBCQUNKOzt3QkFBWSxPQUFNOzJCQUFBOzsySEFHaEI7O1dBQUs7YUFFSDtnQkFDQTtvQkFDQTttQkFDQTt3QkFDQTtjQUNBO2VBQVE7QUFOUjtZQVFIOzs7OzswQ0FHQztlQUFRLElBQ1I7MkJBQU8sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUNqQztlQUFRLGlCQUNSO1lBQUssTUFBTSxTQUFTLDZCQUFXLEtBQUssTUFBTSxLQUUzQzs7Ozs4QkFHQztXQUFNLE9BQU8sS0FBSyxNQUFNLEtBR3hCOztlQUFRLElBQUkscUJBQ1o7ZUFBUSxpQkFDUjtXQUFJLENBQUMsTUFDSDtnQkFDRDtBQUdDOztXQUFHLENBQUMsS0FBSyxNQUFNLE1BQ2I7aUJBQVEsSUFDUjtjQUFLLFNBQVMsT0FBTyxPQUFPLElBQzdCO0FBRUg7O2NBQ0UsdUNBQUssV0FDTCxzREFBTSxVQUFVLEtBQUssY0FBYyxLQUNuQyxtREFDQTttQkFDWSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQU5FO21CQU9VLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7ZUFDQTttQkFFRjtBQVBFO21CQVFVLEtBQUssVUFBVSxLQUN6QjtnQkFBTyxLQUFLLE1BQ1o7c0JBQ0E7Z0JBQ0E7bUJBRUY7QUFORTttQkFPVSxLQUFLLFVBQVUsS0FDekI7Z0JBQU8sS0FBSyxNQUNaO3NCQUNBO2dCQUNBO21CQUVGO0FBTkU7bUJBT1UsS0FBSyxVQUFVLEtBQ3pCO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQU5FLGdEQU9GLGdEQUFPLFdBQVUsb0JBQW1CLE1BQUssVUFBUyxPQUlyRDs7OzsrQkFFUyxPQUNSO1lBQUssNkJBQVcsTUFBTSxPQUFPLE1BQU8sTUFBTSxPQUMzQzs7OzttQ0FHYSxPQUNaO2FBQ0E7ZUFBUSxJQUFJLEtBQ1Y7QUFDQTtZQUFLLE1BQU0sU0FBUyw2QkFBVyxLQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIOzs7OztHQXBIdUIsZ0JBQU07O0FBdUhoQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTLGdCQUFnQixPQUN2QjtXQUFRLElBQ1I7VUFDRDs7O2dCQUVjLHlCQUFRLGlCQUFpQjs7Ozs7Ozs7OztpQ0FML0I7O2lDQXJJSDs7aUNBSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZE47Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07YUFFSjtRQUNBO1NBQU07QUFGTjs7S0FLSTs7Ozs7Ozs7Ozs7OEJBRUs7V0FDQSxrQkFBbUIsS0FBSyxNQUFNLEtBQ3JDOztXQUFNLFlBQ0osc0NBQUksV0FDRix3REFBSSwyQ0FBRyxNQUFLLE9BR2hCO2NBQ0UsdUNBQUssSUFDSCxvREFBSyxJQUNELDJEQUFJLFdBQ0EsdURBQUksV0FDQSx3REFBRyxNQUFLLE9BSVosaUVBQ0ksMkNBQUcsTUFBSyxPQUVaLG9EQUNJLDJDQUFHLE1BQUssT0FFWixrREFDSSwyQ0FBRyxNQUFLLE9BS3BCLG9EQUFLLElBQ0QsaUVBQUssV0FDRCw0REFBSyxXQUNELGdEQUFLLFdBR0gsc0RBQUssV0FDSCxpRUFDQSxxQ0FBQyxNQVV0Qjs7Ozs7R0FoRG1CLGdCQUFNOztBQW1ENUIsU0FBUTtTQUNBLGdCQUFNLFVBQVUsT0FBTztBQUE3Qjs7QUFHRixVQUFTLGdCQUFnQixPQUN2Qjs7V0FDUSxNQUVUO0FBRkc7OztBQUlKLFVBQVMsbUJBQW1CLFVBQzFCOztjQUNXLG1CQUFtQixjQUM1QjtvQkFBZSxtQkFBbUIsRUFBQyxXQUFELGFBRXJDO0FBSEc7OztnQkFLVyx5QkFBUSxpQkFBaUI7Ozs7Ozs7Ozs7aUNBYi9COztpQ0FNQTs7aUNBbkVIOztpQ0FNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hOOztBQUVBO0FBQ0E7QUFDQSxFQUFDOztBQUVELHFHQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbURBQWtEO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBDQUF5QztBQUN6QyxJQUFHLElBQUk7QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLFlBQVc7QUFDWCxJQUFHO0FBQ0g7QUFDQSx5Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7OztBQ3RKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXdCOztBQUV4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNEIsaUJBQWlCO0FBQzdDLGtCQUFpQjtBQUNqQjtBQUNBLFlBQVcsT0FBTztBQUNsQixZQUFXLE9BQU87QUFDbEIsWUFBVyxPQUFPO0FBQ2xCLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsY0FBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQSxjQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxZQUFXLE9BQU87QUFDbEIsWUFBVyxTQUFTO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBZ0Isc0JBQXNCO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFrQixvQkFBb0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiMC4xOTU2OGMzNDRjZWRhMDIzZjY0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEFERF9GTEFTSF9NRVNTQUdFID0gJ0FERF9GTEFTSF9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IERFTEVURV9GTEFTSF9NRVNTQUdFID0gJ0RFTEVURV9GTEFTSF9NRVNTQUdFJztcclxuZXhwb3J0IGNvbnN0IFNFVF9DVVJSRU5UX1VTRVIgPSAnU0VUX0NVUlJFTlRfVVNFUic7XHJcbmV4cG9ydCBjb25zdCBVU0VSX0lORk9fUkVDRUlWRUQgPSAnVVNFUl9JTkZPX1JFQ0VJVkVEJztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvVHlwZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IFRleHRGaWVsZEdyb3VwIGZyb20gJy4vVGV4dEZpZWxkR3JvdXAuanMnO1xyXG5pbXBvcnQgdmFsaWRhdGVJbnB1dCBmcm9tICcuL0xvZ2luVmFsaWRhdGlvbi5qcyc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2xvZ2lufSBmcm9tICcuLi9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzJztcclxuaW1wb3J0IHthdXRofSBmcm9tICcuLi9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzJztcclxuaW1wb3J0IHtjb29raWV9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIC8vY29uc3Qge2V2ZW50U3RvcmV9ID0gc3RhdGU7XHJcbiAgY29uc29sZS5sb2coc3RhdGUpO1xyXG4gIHJldHVybiBzdGF0ZTtcclxufVxyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgbWFyZ2luOiBcIjAgMCA1cHggMFwiXHJcbn1cclxuY29uc3QgdmVydGljYWxMaW5lID0ge1xyXG4gIGJvcmRlclJpZ2h0OiBcInRoaW4gc29saWQgIzM1NGM4Y1wiXHJcbn1cclxuXHJcbmNsYXNzIEVtYWlsTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICcnLFxyXG4gICAgICBlcnJvcnM6IHt9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG5cclxuICAgIGNvbnN0IGhhc0Vycm9ycyA9ICFfLmlzRW1wdHkodGhpcy5zdGF0ZS5lcnJvcnMpO1xyXG4gICAgY29uc29sZS5sb2coJ3RoaXMuc3RhdGUuZXJyb3JzLmZvcm06ICcsIHRoaXMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiIHN0eWxlPXt2ZXJ0aWNhbExpbmV9PlxyXG4gICAgICA8aDQ+bG9naW4gd2l0aCBlLW1haWw8L2g0PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyl9PlxyXG4gICAgICB7aGFzRXJyb3JzICYmIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+e3RoaXMuc3RhdGUuZXJyb3JzfTwvZGl2Pn1cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmVtYWlsfVxyXG4gICAgICAgIGZpZWxkPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucGFzc3dvcmR9XHJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBmaWVsZD1cInBhc3N3b3JkXCJcclxuICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgICA8aW5wdXQgc3R5bGU9e2RpdlN0eWxlfSBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwibG9naW5cIiAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxMaW5rIHRvPVwiL3JlZ2lzdHJhdGlvblwiPkRvbnQgaGF2ZSBhbiBhY2NvdW50PyBSZWdpc3RlciBoZXJlITwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGUpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7W2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpe1xyXG4gICAgY29uc3Qge2Vycm9ycywgaXNWYWxpZH0gPSB2YWxpZGF0ZUlucHV0KHRoaXMuc3RhdGUpO1xyXG4gICAgaWYoIWlzVmFsaWQpe1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnN9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBpc1ZhbGlkO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChlKXtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmKHRoaXMuaXNWYWxpZCgpKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7fX0pO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmNvbnRleHQucm91dGVyKTtcclxuICAgICAgdGhpcy5wcm9wcy5kaXNwYXRjaChsb2dpbih0aGlzLnN0YXRlLCB0aGlzLmNvbnRleHQucm91dGVyKSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5FbWFpbExvZ2luLnByb3BUeXBlcyA9IHtcclxuICBsb2dpbjogUmVhY3QuUHJvcFR5cGVzLmZ1bmNcclxufVxyXG5cclxuRW1haWxMb2dpbi5jb250ZXh0VHlwZXMgPSB7XHJcbiAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKEVtYWlsTG9naW4pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9FbWFpbExvZ2luLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHtjb29raWV9IGZyb20gJ3JlYWN0LWNvb2tpZSc7XHJcblxyXG5jb25zdCBkaXZDaXJjbGUgPSB7XHJcbiAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgIGJhY2tncm91bmQ6ICcjRTVFNUU1JyxcclxuICAgIGJvcmRlcjogJ3RoaW4gc29saWQgI0I3QjdCNycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGVQaWN0dXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIGF4aW9zKHtcclxuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VySW1hZ2UvZ2V0JyxcclxuICAgIC8vICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgLy8gICBkYXRhOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgLy8gICBkYXRhVHlwZTogJ2pzb24nXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4oKHJlc3VsdCk9PntcclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIH0pO1xyXG4gICAgY29uc29sZS5sb2coY29va2llKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7ZmlsZTogJycsIGZpbGVQcmV2aWV3OiAnJ307XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdVcGxvYWRpbmc6ICcsIHRoaXMuc3RhdGUuZmlsZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlSW1hZ2VDaGFuZ2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICAgIGZpbGVQcmV2aWV3OiByZWFkZXIucmVzdWx0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQge2ZpbGVQcmV2aWV3fSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XHJcbiAgICBpZiAoZmlsZVByZXZpZXcpIHtcclxuICAgICAgJGltYWdlUHJldmlldyA9ICg8ZGl2IHN0eWxlPXtkaXZDaXJjbGV9PjxpbWcgc3R5bGU9e2RpdkNpcmNsZX0gc3JjPXtmaWxlUHJldmlld30gLz48L2Rpdj4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGltYWdlUHJldmlldyA9ICg8ZGl2IHN0eWxlPXtkaXZDaXJjbGV9PjxpbWcgc3R5bGU9e2RpdkNpcmNsZX0gc3JjPXtmaWxlUHJldmlld30gLz48L2Rpdj4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmV2aWV3Q29tcG9uZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XHJcbiAgICAgICAgeyRpbWFnZVByZXZpZXd9XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKT0+dGhpcy5faGFuZGxlU3VibWl0KGUpfT5cclxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmaWxlSW5wdXRcIiB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXsoZSk9PnRoaXMuX2hhbmRsZUltYWdlQ2hhbmdlKGUpfSAvPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJzdWJtaXRCdXR0b25cIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpPT50aGlzLl9oYW5kbGVTdWJtaXQoZSl9PlVwbG9hZCBJbWFnZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQaWN0dXJlO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUGljdHVyZS5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB2YWxpZGF0ZUlucHV0IGZyb20gJy4vVmFsaWRhdGlvbi5qcyc7XHJcbmltcG9ydCB7Z2V0UHJvZmlsZSwgc2V0UHJvZmlsZX0gZnJvbSAnLi4vYWN0aW9ucy9BdXRoQWN0aW9ucy5qcyc7XHJcbmltcG9ydCBUZXh0RmllbGRHcm91cCBmcm9tICcuL1RleHRGaWVsZEdyb3VwLmpzJztcclxuaW1wb3J0IHtoYXNoSGlzdG9yeX0gZnJvbSAncmVhY3Qtcm91dGVyJztcclxuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbic7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge2Nvb2tpZX0gZnJvbSAncmVhY3QtY29va2llJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIG1hcmdpbjogXCIwIDAgNXB4IDBcIlxyXG59XHJcblxyXG5jbGFzcyBQcm9maWxlSW5mbyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIG5hbWU6ICAgICAgJycsXHJcbiAgICAgIHN1cm5hbWU6ICAgJycsXHJcbiAgICAgIGRhdGVPZkJpcnRoOiAgJycsXHJcbiAgICAgIHByb2Zlc3Npb246ICAnJyxcclxuICAgICAgdGVsZXBob25lTnVtYmVyOiAgJycsXHJcbiAgICAgIGFib3V0OiAgJycsXHJcbiAgICAgIGVycm9yczoge31cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgY29va2llLnNhdmUoJ3VzZXJJZCcsIHRoaXMucHJvcHMuYXV0aC5jdXJyZW50VXNlcklkKTtcclxuICAgIGNvbnNvbGUubG9nKGNvb2tpZSk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoKGdldFByb2ZpbGUodGhpcy5wcm9wcy5hdXRoLmN1cnJlbnRVc2VySWQpKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy5hdXRoLnVzZXJQcm9maWxlO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0nLCB0aGlzKTtcclxuICAgIGNvbnNvbGUubG9nKGNvb2tpZSk7XHJcbiAgICBpZiAoIXVzZXIpIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgaWYoIXRoaXMuc3RhdGUubmFtZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdVcGF0aW5nOycpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoT2JqZWN0LmFzc2lnbih7fSx1c2VyKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy00XCI+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLl9oYW5kbGVTdWJtaXQuYmluZCh0aGlzKX0+XHJcbiAgICAgIDxoND5wcm9maWxlIGluZm88L2g0PlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwibmFtZVwiXHJcbiAgICAgICAgZmllbGQ9XCJuYW1lXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuc3VybmFtZX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cInN1cm5hbWVcIlxyXG4gICAgICAgIGZpZWxkPVwic3VybmFtZVwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxUZXh0RmllbGRHcm91cFxyXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGVPZkJpcnRofVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZGF0ZSBvZiBiaXJ0aFwiXHJcbiAgICAgICAgZmllbGQ9XCJkYXRlT2ZCaXJ0aFwiXHJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wcm9mZXNzaW9ufVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwicHJvZmVzc2lvblwiXHJcbiAgICAgICAgZmllbGQ9XCJwcm9mZXNzaW9uXCJcclxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGVsZXBob25lTnVtYmVyfVxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwidGVsZXBob25lIG51bWJlclwiXHJcbiAgICAgICAgZmllbGQ9XCJ0ZWxlcGhvbmVOdW1iZXJcIlxyXG4gICAgICAgIGRpdlN0eWxlID0ge2RpdlN0eWxlfVxyXG4gICAgICAvPlxyXG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cclxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hYm91dH1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cImFib3V0IHlvdVwiXHJcbiAgICAgICAgZmllbGQ9XCJhYm91dFwiXHJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXY+PC9kaXY+XHJcbiAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJidG4gLmJ0bi1wcmltYXJ5XCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic2F2ZVwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGV2ZW50KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xyXG4gICAgICAvLyB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IHt9fSk7XHJcbiAgICAgIHRoaXMucHJvcHMuZGlzcGF0Y2goc2V0UHJvZmlsZSh0aGlzLnN0YXRlKSk7XHJcbiAgICAgIC8vIHRoaXMucHJvcHMucmVnaXN0cmF0aW9uUmVxdWVzdCh0aGlzLnN0YXRlKS50aGVuKFxyXG4gICAgICAvLyAgICgpID0+IHtcclxuICAgICAgLy8gICAgIHRoaXMucHJvcHMuYWRkRmxhc2hNZXNzYWdlKHtcclxuICAgICAgLy8gICAgICAgdHlwZTogJ3N1Y2Nlc3MnLFxyXG4gICAgICAvLyAgICAgICB0ZXh0OiAnWW91IHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5ISBXZWxjb21lIHRvIFZheml1b2p1LVZlenUhJ1xyXG4gICAgICAvLyAgICAgfSk7XHJcbiAgICAgIC8vICAgICBoYXNoSGlzdG9yeS5wdXNoKCcvJyk7XHJcbiAgICAgIC8vICAgICAvL29yIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCgnLycpO1xyXG4gICAgICAvLyAgIH0sXHJcbiAgICAgIC8vICAgKGVycikgPT4ge1xyXG4gICAgICAvLyAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YX0pXHJcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAvLyAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gUmVnaXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuLy8gICByZWdpc3RyYXRpb25SZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4vLyAgIGFkZEZsYXNoTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuLy8gICBpc0VtYWlsRXhpc3RzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbi8vIH1cclxuXHJcbi8vIFJlZ2lzdHJhdGlvbi5jb250ZXh0VHlwZXMgPSB7XHJcbi8vICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcclxuICBjb25zb2xlLmxvZyhzdGF0ZSk7XHJcbiAgcmV0dXJuIHN0YXRlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZmlsZUluZm8pO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlSW5mby5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSAnLi9Qcm9maWxlUGljdHVyZS5qcyc7XHJcbmltcG9ydCBQcm9maWxlSW5mbyBmcm9tICcuL1Byb2ZpbGVJbmZvLmpzJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiLFxyXG4gIGxlZnQ6IFwiMzAlXCJcclxufVxyXG5cclxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHtpc0F1dGhlbnRpY2F0ZWR9ID0gdGhpcy5wcm9wcy5hdXRoO1xyXG4gICAgY29uc3QgdXNlckxpbmtzID0gKFxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdmJhci1uYXZcIj5cclxuICAgICAgICA8bGk+PGEgaHJlZj1cIiNcIj5Mb2dvdXQ8L2E+PC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgaWQ9XCJ3cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgVmHFvml1b2p1LVZlxb51XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk15IFByb2ZpbGU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+TXkgVHJpcHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+VHJpcHM8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVQaWN0dXJlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUcmlwIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblByb2ZpbGUucHJvcFR5cGVzID0ge1xyXG4gIGF1dGg6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIHJldHVybiB7XHJcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyhMb2dpbkFjdGlvbnMsIGRpc3BhdGNoKSxcclxuICAgIHJvdXRlckFjdGlvbnM6IGJpbmRBY3Rpb25DcmVhdG9ycyh7cHVzaFN0YXRlfSwgZGlzcGF0Y2gpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcykoUHJvZmlsZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RyaXBzLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07XG5cbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnNlbGVjdCA9IHNlbGVjdDtcbmV4cG9ydHMuc2F2ZSA9IHNhdmU7XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMuc2V0UmF3Q29va2llID0gc2V0UmF3Q29va2llO1xuZXhwb3J0cy5wbHVnVG9SZXF1ZXN0ID0gcGx1Z1RvUmVxdWVzdDtcblxudmFyIF9jb29raWUgPSByZXF1aXJlKCdjb29raWUnKTtcblxudmFyIF9jb29raWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY29va2llKTtcblxudmFyIF9vYmplY3RBc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBfb2JqZWN0QXNzaWduMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX29iamVjdEFzc2lnbik7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbnZhciBJU19OT0RFID0gdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAndGVzdCc7XG52YXIgX3Jhd0Nvb2tpZSA9IHt9O1xudmFyIF9yZXMgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIF9pc1Jlc1dyaXRhYmxlKCkge1xuICByZXR1cm4gX3JlcyAmJiAhX3Jlcy5oZWFkZXJzU2VudDtcbn1cblxuZnVuY3Rpb24gbG9hZChuYW1lLCBkb05vdFBhcnNlKSB7XG4gIHZhciBjb29raWVzID0gSVNfTk9ERSA/IF9yYXdDb29raWUgOiBfY29va2llMi5kZWZhdWx0LnBhcnNlKGRvY3VtZW50LmNvb2tpZSk7XG4gIHZhciBjb29raWVWYWwgPSBjb29raWVzICYmIGNvb2tpZXNbbmFtZV07XG5cbiAgaWYgKHR5cGVvZiBkb05vdFBhcnNlID09PSAndW5kZWZpbmVkJykge1xuICAgIGRvTm90UGFyc2UgPSAhY29va2llVmFsIHx8IGNvb2tpZVZhbFswXSAhPT0gJ3snICYmIGNvb2tpZVZhbFswXSAhPT0gJ1snO1xuICB9XG5cbiAgaWYgKCFkb05vdFBhcnNlKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvb2tpZVZhbCA9IEpTT04ucGFyc2UoY29va2llVmFsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBOb3Qgc2VyaWFsaXplZCBvYmplY3RcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29va2llVmFsO1xufVxuXG5mdW5jdGlvbiBzZWxlY3QocmVnZXgpIHtcbiAgdmFyIGNvb2tpZXMgPSBJU19OT0RFID8gX3Jhd0Nvb2tpZSA6IF9jb29raWUyLmRlZmF1bHQucGFyc2UoZG9jdW1lbnQuY29va2llKTtcblxuICBpZiAoIWNvb2tpZXMpIHtcbiAgICByZXR1cm4ge307XG4gIH1cblxuICBpZiAoIXJlZ2V4KSB7XG4gICAgcmV0dXJuIGNvb2tpZXM7XG4gIH1cblxuICByZXR1cm4gT2JqZWN0LmtleXMoY29va2llcykucmVkdWNlKGZ1bmN0aW9uIChhY2N1bXVsYXRvciwgbmFtZSkge1xuICAgIGlmICghcmVnZXgudGVzdChuYW1lKSkge1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH1cblxuICAgIHZhciBuZXdDb29raWUgPSB7fTtcbiAgICBuZXdDb29raWVbbmFtZV0gPSBjb29raWVzW25hbWVdO1xuICAgIHJldHVybiAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIGFjY3VtdWxhdG9yLCBuZXdDb29raWUpO1xuICB9LCB7fSk7XG59XG5cbmZ1bmN0aW9uIHNhdmUobmFtZSwgdmFsLCBvcHQpIHtcbiAgX3Jhd0Nvb2tpZVtuYW1lXSA9IHZhbDtcblxuICAvLyBhbGxvdyB5b3UgdG8gd29yayB3aXRoIGNvb2tpZXMgYXMgb2JqZWN0cy5cbiAgaWYgKCh0eXBlb2YgdmFsID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZih2YWwpKSA9PT0gJ29iamVjdCcpIHtcbiAgICBfcmF3Q29va2llW25hbWVdID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgfVxuXG4gIC8vIENvb2tpZXMgb25seSB3b3JrIGluIHRoZSBicm93c2VyXG4gIGlmICghSVNfTk9ERSkge1xuICAgIGRvY3VtZW50LmNvb2tpZSA9IF9jb29raWUyLmRlZmF1bHQuc2VyaWFsaXplKG5hbWUsIF9yYXdDb29raWVbbmFtZV0sIG9wdCk7XG4gIH1cblxuICBpZiAoX2lzUmVzV3JpdGFibGUoKSAmJiBfcmVzLmNvb2tpZSkge1xuICAgIF9yZXMuY29va2llKG5hbWUsIHZhbCwgb3B0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUobmFtZSwgb3B0KSB7XG4gIGRlbGV0ZSBfcmF3Q29va2llW25hbWVdO1xuXG4gIGlmICh0eXBlb2Ygb3B0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdCA9IHt9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHQgPT09ICdzdHJpbmcnKSB7XG4gICAgLy8gV2lsbCBiZSBkZXByZWNhdGVkIGluIGZ1dHVyZSB2ZXJzaW9uc1xuICAgIG9wdCA9IHsgcGF0aDogb3B0IH07XG4gIH0gZWxzZSB7XG4gICAgLy8gUHJldmVudCBtdXRhdGlvbiBvZiBvcHQgYmVsb3dcbiAgICBvcHQgPSAoMCwgX29iamVjdEFzc2lnbjIuZGVmYXVsdCkoe30sIG9wdCk7XG4gIH1cblxuICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgIG9wdC5leHBpcmVzID0gbmV3IERhdGUoMTk3MCwgMSwgMSwgMCwgMCwgMSk7XG4gICAgb3B0Lm1heEFnZSA9IDA7XG4gICAgZG9jdW1lbnQuY29va2llID0gX2Nvb2tpZTIuZGVmYXVsdC5zZXJpYWxpemUobmFtZSwgJycsIG9wdCk7XG4gIH1cblxuICBpZiAoX2lzUmVzV3JpdGFibGUoKSAmJiBfcmVzLmNsZWFyQ29va2llKSB7XG4gICAgX3Jlcy5jbGVhckNvb2tpZShuYW1lLCBvcHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldFJhd0Nvb2tpZShyYXdDb29raWUpIHtcbiAgaWYgKHJhd0Nvb2tpZSkge1xuICAgIF9yYXdDb29raWUgPSBfY29va2llMi5kZWZhdWx0LnBhcnNlKHJhd0Nvb2tpZSk7XG4gIH0gZWxzZSB7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHBsdWdUb1JlcXVlc3QocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5jb29raWUpIHtcbiAgICBfcmF3Q29va2llID0gcmVxLmNvb2tpZTtcbiAgfSBlbHNlIGlmIChyZXEuY29va2llcykge1xuICAgIF9yYXdDb29raWUgPSByZXEuY29va2llcztcbiAgfSBlbHNlIGlmIChyZXEuaGVhZGVycyAmJiByZXEuaGVhZGVycy5jb29raWUpIHtcbiAgICBzZXRSYXdDb29raWUocmVxLmhlYWRlcnMuY29va2llKTtcbiAgfSBlbHNlIHtcbiAgICBfcmF3Q29va2llID0ge307XG4gIH1cblxuICBfcmVzID0gcmVzO1xuXG4gIHJldHVybiBmdW5jdGlvbiB1bnBsdWcoKSB7XG4gICAgX3JlcyA9IG51bGw7XG4gICAgX3Jhd0Nvb2tpZSA9IHt9O1xuICB9O1xufVxuXG5leHBvcnRzLmRlZmF1bHQgPSB7XG4gIHNldFJhd0Nvb2tpZTogc2V0UmF3Q29va2llLFxuICBsb2FkOiBsb2FkLFxuICBzZWxlY3Q6IHNlbGVjdCxcbiAgc2F2ZTogc2F2ZSxcbiAgcmVtb3ZlOiByZW1vdmUsXG4gIHBsdWdUb1JlcXVlc3Q6IHBsdWdUb1JlcXVlc3Rcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LWNvb2tpZS9idWlsZC9jb29raWUuanNcbi8vIG1vZHVsZSBpZCA9IDcwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIGNvb2tpZVxuICogQ29weXJpZ2h0KGMpIDIwMTItMjAxNCBSb21hbiBTaHR5bG1hblxuICogQ29weXJpZ2h0KGMpIDIwMTUgRG91Z2xhcyBDaHJpc3RvcGhlciBXaWxzb25cbiAqIE1JVCBMaWNlbnNlZFxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBNb2R1bGUgZXhwb3J0cy5cbiAqIEBwdWJsaWNcbiAqL1xuXG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG5leHBvcnRzLnNlcmlhbGl6ZSA9IHNlcmlhbGl6ZTtcblxuLyoqXG4gKiBNb2R1bGUgdmFyaWFibGVzLlxuICogQHByaXZhdGVcbiAqL1xuXG52YXIgZGVjb2RlID0gZGVjb2RlVVJJQ29tcG9uZW50O1xudmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbnZhciBwYWlyU3BsaXRSZWdFeHAgPSAvOyAqLztcblxuLyoqXG4gKiBSZWdFeHAgdG8gbWF0Y2ggZmllbGQtY29udGVudCBpbiBSRkMgNzIzMCBzZWMgMy4yXG4gKlxuICogZmllbGQtY29udGVudCA9IGZpZWxkLXZjaGFyIFsgMSooIFNQIC8gSFRBQiApIGZpZWxkLXZjaGFyIF1cbiAqIGZpZWxkLXZjaGFyICAgPSBWQ0hBUiAvIG9icy10ZXh0XG4gKiBvYnMtdGV4dCAgICAgID0gJXg4MC1GRlxuICovXG5cbnZhciBmaWVsZENvbnRlbnRSZWdFeHAgPSAvXltcXHUwMDA5XFx1MDAyMC1cXHUwMDdlXFx1MDA4MC1cXHUwMGZmXSskLztcblxuLyoqXG4gKiBQYXJzZSBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogUGFyc2UgdGhlIGdpdmVuIGNvb2tpZSBoZWFkZXIgc3RyaW5nIGludG8gYW4gb2JqZWN0XG4gKiBUaGUgb2JqZWN0IGhhcyB0aGUgdmFyaW91cyBjb29raWVzIGFzIGtleXMobmFtZXMpID0+IHZhbHVlc1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge29iamVjdH1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgc3RyIG11c3QgYmUgYSBzdHJpbmcnKTtcbiAgfVxuXG4gIHZhciBvYmogPSB7fVxuICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KHBhaXJTcGxpdFJlZ0V4cCk7XG4gIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXTtcbiAgICB2YXIgZXFfaWR4ID0gcGFpci5pbmRleE9mKCc9Jyk7XG5cbiAgICAvLyBza2lwIHRoaW5ncyB0aGF0IGRvbid0IGxvb2sgbGlrZSBrZXk9dmFsdWVcbiAgICBpZiAoZXFfaWR4IDwgMCkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpXG4gICAgdmFyIHZhbCA9IHBhaXIuc3Vic3RyKCsrZXFfaWR4LCBwYWlyLmxlbmd0aCkudHJpbSgpO1xuXG4gICAgLy8gcXVvdGVkIHZhbHVlc1xuICAgIGlmICgnXCInID09IHZhbFswXSkge1xuICAgICAgdmFsID0gdmFsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG5cbiAgICAvLyBvbmx5IGFzc2lnbiBvbmNlXG4gICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGRhdGEgaW50byBhIGNvb2tpZSBoZWFkZXIuXG4gKlxuICogU2VyaWFsaXplIHRoZSBhIG5hbWUgdmFsdWUgcGFpciBpbnRvIGEgY29va2llIHN0cmluZyBzdWl0YWJsZSBmb3JcbiAqIGh0dHAgaGVhZGVycy4gQW4gb3B0aW9uYWwgb3B0aW9ucyBvYmplY3Qgc3BlY2lmaWVkIGNvb2tpZSBwYXJhbWV0ZXJzLlxuICpcbiAqIHNlcmlhbGl6ZSgnZm9vJywgJ2JhcicsIHsgaHR0cE9ubHk6IHRydWUgfSlcbiAqICAgPT4gXCJmb289YmFyOyBodHRwT25seVwiXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzZXJpYWxpemUobmFtZSwgdmFsLCBvcHRpb25zKSB7XG4gIHZhciBvcHQgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgZW5jID0gb3B0LmVuY29kZSB8fCBlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiBlbmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gZW5jb2RlIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3QobmFtZSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdhcmd1bWVudCBuYW1lIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciB2YWx1ZSA9IGVuYyh2YWwpO1xuXG4gIGlmICh2YWx1ZSAmJiAhZmllbGRDb250ZW50UmVnRXhwLnRlc3QodmFsdWUpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignYXJndW1lbnQgdmFsIGlzIGludmFsaWQnKTtcbiAgfVxuXG4gIHZhciBzdHIgPSBuYW1lICsgJz0nICsgdmFsdWU7XG5cbiAgaWYgKG51bGwgIT0gb3B0Lm1heEFnZSkge1xuICAgIHZhciBtYXhBZ2UgPSBvcHQubWF4QWdlIC0gMDtcbiAgICBpZiAoaXNOYU4obWF4QWdlKSkgdGhyb3cgbmV3IEVycm9yKCdtYXhBZ2Ugc2hvdWxkIGJlIGEgTnVtYmVyJyk7XG4gICAgc3RyICs9ICc7IE1heC1BZ2U9JyArIE1hdGguZmxvb3IobWF4QWdlKTtcbiAgfVxuXG4gIGlmIChvcHQuZG9tYWluKSB7XG4gICAgaWYgKCFmaWVsZENvbnRlbnRSZWdFeHAudGVzdChvcHQuZG9tYWluKSkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGRvbWFpbiBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IERvbWFpbj0nICsgb3B0LmRvbWFpbjtcbiAgfVxuXG4gIGlmIChvcHQucGF0aCkge1xuICAgIGlmICghZmllbGRDb250ZW50UmVnRXhwLnRlc3Qob3B0LnBhdGgpKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gcGF0aCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuXG4gICAgc3RyICs9ICc7IFBhdGg9JyArIG9wdC5wYXRoO1xuICB9XG5cbiAgaWYgKG9wdC5leHBpcmVzKSB7XG4gICAgaWYgKHR5cGVvZiBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZyAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIGV4cGlyZXMgaXMgaW52YWxpZCcpO1xuICAgIH1cblxuICAgIHN0ciArPSAnOyBFeHBpcmVzPScgKyBvcHQuZXhwaXJlcy50b1VUQ1N0cmluZygpO1xuICB9XG5cbiAgaWYgKG9wdC5odHRwT25seSkge1xuICAgIHN0ciArPSAnOyBIdHRwT25seSc7XG4gIH1cblxuICBpZiAob3B0LnNlY3VyZSkge1xuICAgIHN0ciArPSAnOyBTZWN1cmUnO1xuICB9XG5cbiAgaWYgKG9wdC5zYW1lU2l0ZSkge1xuICAgIHZhciBzYW1lU2l0ZSA9IHR5cGVvZiBvcHQuc2FtZVNpdGUgPT09ICdzdHJpbmcnXG4gICAgICA/IG9wdC5zYW1lU2l0ZS50b0xvd2VyQ2FzZSgpIDogb3B0LnNhbWVTaXRlO1xuXG4gICAgc3dpdGNoIChzYW1lU2l0ZSkge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdsYXgnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9TGF4JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzdHJpY3QnOlxuICAgICAgICBzdHIgKz0gJzsgU2FtZVNpdGU9U3RyaWN0JztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdvcHRpb24gc2FtZVNpdGUgaXMgaW52YWxpZCcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogVHJ5IGRlY29kaW5nIGEgc3RyaW5nIHVzaW5nIGEgZGVjb2RpbmcgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxuICogQHBhcmFtIHtmdW5jdGlvbn0gZGVjb2RlXG4gKiBAcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIHRyeURlY29kZShzdHIsIGRlY29kZSkge1xuICB0cnkge1xuICAgIHJldHVybiBkZWNvZGUoc3RyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBzdHI7XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jb29raWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDcwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBwcm9wSXNFbnVtZXJhYmxlID0gT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZTtcblxuZnVuY3Rpb24gdG9PYmplY3QodmFsKSB7XG5cdGlmICh2YWwgPT09IG51bGwgfHwgdmFsID09PSB1bmRlZmluZWQpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdPYmplY3QuYXNzaWduIGNhbm5vdCBiZSBjYWxsZWQgd2l0aCBudWxsIG9yIHVuZGVmaW5lZCcpO1xuXHR9XG5cblx0cmV0dXJuIE9iamVjdCh2YWwpO1xufVxuXG5mdW5jdGlvbiBzaG91bGRVc2VOYXRpdmUoKSB7XG5cdHRyeSB7XG5cdFx0aWYgKCFPYmplY3QuYXNzaWduKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZWN0IGJ1Z2d5IHByb3BlcnR5IGVudW1lcmF0aW9uIG9yZGVyIGluIG9sZGVyIFY4IHZlcnNpb25zLlxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDExOFxuXHRcdHZhciB0ZXN0MSA9IG5ldyBTdHJpbmcoJ2FiYycpOyAgLy8gZXNsaW50LWRpc2FibGUtbGluZVxuXHRcdHRlc3QxWzVdID0gJ2RlJztcblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGVzdDEpWzBdID09PSAnNScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QyID0ge307XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG5cdFx0XHR0ZXN0MlsnXycgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGkpXSA9IGk7XG5cdFx0fVxuXHRcdHZhciBvcmRlcjIgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MikubWFwKGZ1bmN0aW9uIChuKSB7XG5cdFx0XHRyZXR1cm4gdGVzdDJbbl07XG5cdFx0fSk7XG5cdFx0aWYgKG9yZGVyMi5qb2luKCcnKSAhPT0gJzAxMjM0NTY3ODknKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzA1NlxuXHRcdHZhciB0ZXN0MyA9IHt9O1xuXHRcdCdhYmNkZWZnaGlqa2xtbm9wcXJzdCcuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24gKGxldHRlcikge1xuXHRcdFx0dGVzdDNbbGV0dGVyXSA9IGxldHRlcjtcblx0XHR9KTtcblx0XHRpZiAoT2JqZWN0LmtleXMoT2JqZWN0LmFzc2lnbih7fSwgdGVzdDMpKS5qb2luKCcnKSAhPT1cblx0XHRcdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0Ly8gV2UgZG9uJ3QgZXhwZWN0IGFueSBvZiB0aGUgYWJvdmUgdG8gdGhyb3csIGJ1dCBiZXR0ZXIgdG8gYmUgc2FmZS5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzaG91bGRVc2VOYXRpdmUoKSA/IE9iamVjdC5hc3NpZ24gOiBmdW5jdGlvbiAodGFyZ2V0LCBzb3VyY2UpIHtcblx0dmFyIGZyb207XG5cdHZhciB0byA9IHRvT2JqZWN0KHRhcmdldCk7XG5cdHZhciBzeW1ib2xzO1xuXG5cdGZvciAodmFyIHMgPSAxOyBzIDwgYXJndW1lbnRzLmxlbmd0aDsgcysrKSB7XG5cdFx0ZnJvbSA9IE9iamVjdChhcmd1bWVudHNbc10pO1xuXG5cdFx0Zm9yICh2YXIga2V5IGluIGZyb20pIHtcblx0XHRcdGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGZyb20sIGtleSkpIHtcblx0XHRcdFx0dG9ba2V5XSA9IGZyb21ba2V5XTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZnJvbSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKHByb3BJc0VudW1lcmFibGUuY2FsbChmcm9tLCBzeW1ib2xzW2ldKSkge1xuXHRcdFx0XHRcdHRvW3N5bWJvbHNbaV1dID0gZnJvbVtzeW1ib2xzW2ldXTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0bztcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vb2JqZWN0LWFzc2lnbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNzAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=