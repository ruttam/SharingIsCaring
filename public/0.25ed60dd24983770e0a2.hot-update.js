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
	    // this.FB = this.props.fb;
	    // this.state = {
	    //   message: ""
	    // };
	  }
	
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
	  //
	  // render() {
	  //   let message = this.state.message;
	  //   console.log(message);
	  //   return (
	  //     <div style={divStyle} className="col-lg-4"><h4>login with Facebook</h4>
	  //     <div
	  //       className="fb-login-button"
	  //       data-max-rows="1"
	  //       data-size="xlarge"
	  //       data-show-faces="false"
	  //       data-auto-logout-link="true"
	  //     >
	  //     </div>
	  //     <div>{this.state.message}</div>
	  //     </div>
	  //   );
	  // }
	
	  _createClass(FacebookLoginButton, [{
	    key: 'responseFacebook',
	    value: function responseFacebook(response) {
	      console.log(response);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', { style: divStyle, className: 'col-lg-4' }, _react2.default.createElement('h4', null, 'login with Facebook'), _react2.default.createElement(_reactFacebookLogin2.default, {
	        appId: '1841589546055063',
	        autoLoad: true,
	        fields: 'name,email,picture',
	        callback: this.responseFacebook
	      }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07WUFDSztBQUFUOztLQUdJO2tDQUNKOztnQ0FBWSxPQUFPOzJCQUFBOztzSUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUVEOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7c0NBRWlCLFVBQ2Y7ZUFBUSxJQUNUOzs7OzhCQUdDOzhCQUNFLHVCQUFLLE9BQU8sVUFBVSxXQUFxQix3REFDM0M7Z0JBRUU7bUJBQ0E7aUJBQ0E7bUJBQVUsS0FJZjtBQVBLLFNBRkY7Ozs7O0dBdkU0QixnQkFBTTs7Z0JBbUZ6Qjs7Ozs7Ozs7O2lDQXZGVDs7aUNBSUEiLCJmaWxlIjoiMC4yNWVkNjBkZDI0OTgzNzcwZTBhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZhY2Vib29rTG9naW4gZnJvbSAncmVhY3QtZmFjZWJvb2stbG9naW4nO1xuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBhZGRpbmc6IFwiMCAwIDAgMTVweFwiXHJcbn1cclxuXHJcbmNsYXNzIEZhY2Vib29rTG9naW5CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIC8vIHRoaXMuRkIgPSB0aGlzLnByb3BzLmZiO1xyXG4gICAgLy8gdGhpcy5zdGF0ZSA9IHtcclxuICAgIC8vICAgbWVzc2FnZTogXCJcIlxyXG4gICAgLy8gfTtcclxuICB9XHJcblxyXG4gIC8vIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gIC8vICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGgubG9nb3V0JywgdGhpcy5vbkxvZ291dC5iaW5kKHRoaXMpKTtcclxuICAvLyAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIGZ1bmN0aW9uKHJlc3BvbnNlKXtcclxuICAvLyAgICAgY29uc29sZS5sb2coXCJPa1wiKTtcclxuICAvLyAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAvLyAgICAgICB0aGlzLkZCLmFwaSgnL21lJywge21lc3NhZ2U6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAvLyAgICAgICAgIC8vdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xyXG4gIC8vICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAvLyAgICAgICAgIH0pO1xyXG4gIC8vICAgICAgICAgYWxlcnQoJ0dvb2QnKTtcclxuICAvLyAgICAgICB9KVxyXG4gIC8vICAgICB9XHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gIC8vICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gIC8vICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAvLyAgICAgdGhpcy5GQi5hcGkoJy9tZScsIHttZXNzYWdlOiAnbGFzdF9uYW1lJ30sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIC8vICAgICAgIHZhciBtZXNzYWdlID0gXCJXZWxjb21lLCBcIiArIHJlc3BvbnNlLmxhc3RfbmFtZTtcclxuICAvLyAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAvLyAgICAgICB9KTtcclxuICAvLyAgICAgICBhbGVydCgnR29vZCcpO1xyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfVxyXG4gIC8vICAgYWxlcnQodGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICAvLyB9XHJcbiAgLy9cclxuICAvLyBvbkxvZ291dChyZXNwb25zZSkge1xyXG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgIG1lc3NhZ2U6IFwiTG9nb3V0XCJcclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuICAvL1xyXG4gIC8vIHJlbmRlcigpIHtcclxuICAvLyAgIGxldCBtZXNzYWdlID0gdGhpcy5zdGF0ZS5tZXNzYWdlO1xyXG4gIC8vICAgY29uc29sZS5sb2cobWVzc2FnZSk7XHJcbiAgLy8gICByZXR1cm4gKFxyXG4gIC8vICAgICA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0gY2xhc3NOYW1lPVwiY29sLWxnLTRcIj48aDQ+bG9naW4gd2l0aCBGYWNlYm9vazwvaDQ+XHJcbiAgLy8gICAgIDxkaXZcclxuICAvLyAgICAgICBjbGFzc05hbWU9XCJmYi1sb2dpbi1idXR0b25cIlxyXG4gIC8vICAgICAgIGRhdGEtbWF4LXJvd3M9XCIxXCJcclxuICAvLyAgICAgICBkYXRhLXNpemU9XCJ4bGFyZ2VcIlxyXG4gIC8vICAgICAgIGRhdGEtc2hvdy1mYWNlcz1cImZhbHNlXCJcclxuICAvLyAgICAgICBkYXRhLWF1dG8tbG9nb3V0LWxpbms9XCJ0cnVlXCJcclxuICAvLyAgICAgPlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICAgPGRpdj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxyXG4gIC8vICAgICA8L2Rpdj5cclxuICAvLyAgICk7XHJcbiAgLy8gfVxyXG5cclxuICByZXNwb25zZUZhY2Vib29rKHJlc3BvbnNlKXtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfSBjbGFzc05hbWU9XCJjb2wtbGctNFwiPjxoND5sb2dpbiB3aXRoIEZhY2Vib29rPC9oND5cclxuICAgICAgPEZhY2Vib29rTG9naW5cclxuICAgICAgICBhcHBJZD1cIjE4NDE1ODk1NDYwNTUwNjNcIlxyXG4gICAgICAgIGF1dG9Mb2FkPXt0cnVlfVxyXG4gICAgICAgIGZpZWxkcz1cIm5hbWUsZW1haWwscGljdHVyZVwiXHJcbiAgICAgICAgY2FsbGJhY2s9e3RoaXMucmVzcG9uc2VGYWNlYm9va31cclxuICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYWNlYm9va0xvZ2luQnV0dG9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==