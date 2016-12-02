webpackHotUpdate(0,{

/***/ 651:
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
	
	var _reactFacebookLogin = __webpack_require__(695);
	
	var _reactFacebookLogin2 = _interopRequireDefault(_reactFacebookLogin);
	
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
	  padding: "0 0 0 15px"
	};
	
	var FacebookLoginButton = function (_React$Component) {
	  _inherits(FacebookLoginButton, _React$Component);
	
	  function FacebookLoginButton(props) {
	    _classCallCheck(this, FacebookLoginButton);
	
	    return _possibleConstructorReturn(this, (FacebookLoginButton.__proto__ || Object.getPrototypeOf(FacebookLoginButton)).call(this, props));
	  }
	
	  //
	  // componentDidMount() {
	  //   this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
	  //   this.FB.Event.subscribe('auth.statusChange', function(response){
	  //     console.log("Ok");
	  //     if( response.status === "connected" ) {
	  //       this.FB.api('/me', {message: 'last_name'}, function(response) {
	  //         console.log(response);
	  //         //var message = "Welcome, " + response.last_name;
	  //         self.setState({
	  //           message: message
	  //         });
	  //         alert('Good');
	  //       })
	  //     }
	  //   });
	  // }
	  //
	  // onStatusChange(response) {
	  //   var self = this;
	  //   if( response.status === "connected" ) {
	  //     this.FB.api('/me', {message: 'last_name'}, function(response) {
	  //       console.log(response);
	  //       var message = "Welcome, " + response.last_name;
	  //       self.setState({
	  //         message: message
	  //       });
	  //       alert('Good');
	  //     })
	  //   }
	  //   alert(this.state.message);
	  // }
	  //
	  // onLogout(response) {
	  //   this.setState({
	  //     message: "Logout"
	  //   });
	  // }
	
	  _createClass(FacebookLoginButton, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactFacebookLogin2.default, {
	        appId: '1841589546055063',
	        autoLoad: true,
	        fields: 'name,email,picture',
	        callback: responseFacebook
	      });
	    }
	  }, {
	    key: 'responseFacebook',
	    value: function responseFacebook(response) {
	      console.log(response);
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
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	
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

	  __REACT_HOT_LOADER__.register(_reactFacebookLogin2, "_reactFacebookLogin2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07WUFDSztBQUFUOztLQUdJO2tDQUNKOztnQ0FBWSxPQUFPOzJCQUFBOztzSUFFbEI7QUFFRDs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OEJBR0U7O2dCQUdJO21CQUNBO2lCQUNBO21CQUdMO0FBTkssUUFERjs7OztzQ0FVZSxVQUNmO2VBQVEsSUFDVDs7Ozs7R0ExRDZCLGdCQUFNOztnQkE2RHpCOzs7Ozs7Ozs7aUNBakVUOztpQ0FJQSIsImZpbGUiOiIwLmUxNTAwYWFkZGNhZTU0ODllYmNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbic7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBwYWRkaW5nOiBcIjAgMCAwIDE1cHhcIlxyXG59XHJcblxyXG5jbGFzcyBGYWNlYm9va0xvZ2luQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG5cclxuICAvL1xyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGgubG9nb3V0JywgdGhpcy5vbkxvZ291dC5iaW5kKHRoaXMpKTtcclxuICAvLyAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJPa1wiKTtcclxuICAvLyAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAvLyAgICAgICB0aGlzLkZCLmFwaSgnL21lJywge21lc3NhZ2U6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAvLyAgICAgICAgIC8vdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xyXG4gIC8vICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYWxlcnQoJ0dvb2QnKTtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gIC8vICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gIC8vICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAvLyAgICAgdGhpcy5GQi5hcGkoJy9tZScsIHttZXNzYWdlOiAnbGFzdF9uYW1lJ30sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIC8vICAgICAgIHZhciBtZXNzYWdlID0gXCJXZWxjb21lLCBcIiArIHJlc3BvbnNlLmxhc3RfbmFtZTtcclxuICAvLyAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgICBhbGVydCgnR29vZCcpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfVxyXG4gIC8vICAgYWxlcnQodGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyBvbkxvZ291dChyZXNwb25zZSkge1xyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgIG1lc3NhZ2U6IFwiTG9nb3V0XCJcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPEZhY2Vib29rTG9naW5cclxuICAgICAgICBhcHBJZD1cIjE4NDE1ODk1NDYwNTUwNjNcIlxyXG4gICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgY2FsbGJhY2s9e3Jlc3BvbnNlRmFjZWJvb2t9XHJcbiAgICAgIC8+XHJcbiAgICApXHJcbiAgfVxyXG5cclxuXHJcbiAgICByZXNwb25zZUZhY2Vib29rKHJlc3BvbnNlKXtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va0xvZ2luQnV0dG9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==