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
	        callback: this.responseFacebook
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07WUFDSztBQUFUOztLQUdJO2tDQUNKOztnQ0FBWSxPQUFPOzJCQUFBOztzSUFFbEI7QUFFRDs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OEJBR0U7O2dCQUdJO21CQUNBO2lCQUNBO21CQUFVLEtBR2Y7QUFOSyxRQURGOzs7O3NDQVVlLFVBQ2Y7ZUFBUSxJQUNUOzs7OztHQTFENkIsZ0JBQU07O2dCQTZEekI7Ozs7Ozs7OztpQ0FqRVQ7O2lDQUlBIiwiZmlsZSI6IjAuMTA1YTM2NTY4NDdhY2JhNzdjY2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBhZGRpbmc6IFwiMCAwIDAgMTVweFwiXHJcbn1cclxuXHJcbmNsYXNzIEZhY2Vib29rTG9naW5CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIC8vXHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gIC8vICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIk9rXCIpO1xyXG4gIC8vICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gIC8vICAgICAgIHRoaXMuRkIuYXBpKCcvbWUnLCB7bWVzc2FnZTogJ2xhc3RfbmFtZSd9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIC8vICAgICAgICAgLy92YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5sYXN0X25hbWU7XHJcbiAgLy8gICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBhbGVydCgnR29vZCcpO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuICAvL1xyXG4gIC8vIG9uU3RhdHVzQ2hhbmdlKHJlc3BvbnNlKSB7XHJcbiAgLy8gICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgLy8gICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gIC8vICAgICB0aGlzLkZCLmFwaSgnL21lJywge21lc3NhZ2U6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgLy8gICAgICAgdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xyXG4gIC8vICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIGFsZXJ0KCdHb29kJyk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9XHJcbiAgLy8gICBhbGVydCh0aGlzLnN0YXRlLm1lc3NhZ2UpO1xyXG4gIC8vIH1cclxuICAvL1xyXG4gIC8vIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgbWVzc2FnZTogXCJMb2dvdXRcIlxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8RmFjZWJvb2tMb2dpblxyXG4gICAgICAgIGFwcElkPVwiMTg0MTU4OTU0NjA1NTA2M1wiXHJcbiAgICAgICAgYXV0b0xvYWQ9e3RydWV9XHJcbiAgICAgICAgZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuICAgICAgICBjYWxsYmFjaz17dGhpcy5yZXNwb25zZUZhY2Vib29rfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxuXHJcblxyXG4gICAgcmVzcG9uc2VGYWNlYm9vayhyZXNwb25zZSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkJ1dHRvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=