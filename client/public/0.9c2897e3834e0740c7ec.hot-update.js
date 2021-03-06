webpackHotUpdate(0,{

/***/ 319:
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
	
	var FacebookLoginButton = function (_React$Component) {
	  _inherits(FacebookLoginButton, _React$Component);
	
	  function FacebookLoginButton(props) {
	    _classCallCheck(this, FacebookLoginButton);
	
	    var _this = _possibleConstructorReturn(this, (FacebookLoginButton.__proto__ || Object.getPrototypeOf(FacebookLoginButton)).call(this, props));
	
	    _this.FB = props.fb;
	    _this.state = {
	      message: ""
	    };
	    return _this;
	  }
	
	  _createClass(FacebookLoginButton, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
	      this.FB.Event.subscribe('auth.statusChange', this.onStatusChange.bind(this));
	    }
	  }, {
	    key: 'onStatusChange',
	    value: function onStatusChange(response) {
	      console.log(response);
	      var self = this;
	
	      if (response.status === "connected") {
	        this.FB.api('/', function (response) {
	          var message = "Welcome, " + response.name;
	          self.setState({
	            message: message
	          });
	        });
	      }
	    }
	  }, {
	    key: 'onLogout',
	    value: function onLogout(response) {
	      this.setState({
	        message: ""
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null, _react2.default.createElement('div', {
	        className: 'fb-login-button',
	        'data-max-rows': '1',
	        'data-size': 'large',
	        'data-show-faces': 'false',
	        'data-auto-logout-link': 'true'
	      }), _react2.default.createElement('div', null, this.state.message));
	    }
	  }]);
	
	  return FacebookLoginButton;
	}(_react2.default.Component);
	
	var _default = FacebookLoginButton;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(FacebookLoginButton, 'FacebookLoginButton', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTtrQ0FDSjs7Z0NBQVksT0FBTzsyQkFBQTs7MklBRWpCOztXQUFLLEtBQUssTUFDVjtXQUFLO2dCQUNNO0FBQVQ7WUFFSDs7Ozs7eUNBR0M7WUFBSyxHQUFHLE1BQU0sVUFBVSxlQUFlLEtBQUssU0FBUyxLQUNyRDtZQUFLLEdBQUcsTUFBTSxVQUFVLHFCQUFxQixLQUFLLGVBQWUsS0FDbEU7Ozs7b0NBRWMsVUFDYjtlQUFRLElBQ1I7V0FBSSxPQUVKOztXQUFJLFNBQVMsV0FBVyxhQUN0QjtjQUFLLEdBQUcsSUFBSSxLQUFLLFVBQVMsVUFDeEI7ZUFBSSxVQUFVLGNBQWMsU0FDNUI7Z0JBQUs7c0JBR047QUFGRztBQUdMO0FBQ0Y7Ozs7OEJBRVEsVUFDUDtZQUFLO2tCQUdOO0FBRkc7Ozs7OEJBS0Y7OEJBQ0UscUJBQ0E7b0JBRUU7MEJBQ0E7c0JBQ0E7NEJBQ0E7a0NBR0Y7QUFQRSxTQUZGLGtCQVNBLHFCQUFNLFdBQUssTUFHZDs7Ozs7R0FoRCtCLGdCQUFNOztnQkFtRHpCOzs7Ozs7Ozs7aUNBbkRUIiwiZmlsZSI6IjAuOWMyODk3ZTM4MzRlMDc0MGM3ZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBGYWNlYm9va0xvZ2luQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLkZCID0gcHJvcHMuZmI7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgdGhpcy5vblN0YXR1c0NoYW5nZS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIG9uU3RhdHVzQ2hhbmdlKHJlc3BvbnNlKSB7XHJcbiAgICBjb25zb2xlLmxvZyggcmVzcG9uc2UgKTtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gICAgICB0aGlzLkZCLmFwaSgnLycsIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubmFtZTtcclxuICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgY2xhc3NOYW1lPVwiZmItbG9naW4tYnV0dG9uXCJcclxuICAgICAgICBkYXRhLW1heC1yb3dzPVwiMVwiXHJcbiAgICAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGRhdGEtc2hvdy1mYWNlcz1cImZhbHNlXCJcclxuICAgICAgICBkYXRhLWF1dG8tbG9nb3V0LWxpbms9XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va0xvZ2luQnV0dG9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==