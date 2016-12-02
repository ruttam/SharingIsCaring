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
	
	  _createClass(FacebookLoginButton, [{
	    key: 'responseFacebook',
	    value: function responseFacebook(response) {
	      console.log(response);
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
	
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_reactFacebookLogin2.default, {
	        appId: '1841589546055063',
	        autoLoad: true,
	        fields: 'name,email,picture',
	        callback: responseFacebook
	      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07WUFDSztBQUFUOztLQUdJO2tDQUNKOztnQ0FBWSxPQUFPOzJCQUFBOztzSUFFbEI7Ozs7O3NDQUVpQixVQUNoQjtlQUFRLElBQ1Q7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs4QkFHRTs7Z0JBR0k7bUJBQ0E7aUJBQ0E7bUJBR0w7QUFOSyxRQURGOzs7OztHQWpENEIsZ0JBQU07O2dCQTJEekI7Ozs7Ozs7OztpQ0EvRFQ7O2lDQUlBIiwiZmlsZSI6IjAuOGVjZDExOTRlYzEzNmY2ZWNhZTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBhZGRpbmc6IFwiMCAwIDAgMTVweFwiXHJcbn1cclxuXHJcbmNsYXNzIEZhY2Vib29rTG9naW5CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcblxyXG4gIHJlc3BvbnNlRmFjZWJvb2sgKHJlc3BvbnNlKXtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICB9XHJcbiAgLy9cclxuICAvLyBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAvLyAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLmxvZ291dCcsIHRoaXMub25Mb2dvdXQuYmluZCh0aGlzKSk7XHJcbiAgLy8gICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5zdGF0dXNDaGFuZ2UnLCBmdW5jdGlvbihyZXNwb25zZSl7XHJcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwiT2tcIik7XHJcbiAgLy8gICAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIgKSB7XHJcbiAgLy8gICAgICAgdGhpcy5GQi5hcGkoJy9tZScsIHttZXNzYWdlOiAnbGFzdF9uYW1lJ30sIGZ1bmN0aW9uKHJlc3BvbnNlKSB7XHJcbiAgLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgLy8gICAgICAgICAvL3ZhciBtZXNzYWdlID0gXCJXZWxjb21lLCBcIiArIHJlc3BvbnNlLmxhc3RfbmFtZTtcclxuICAvLyAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgLy8gICAgICAgICB9KTtcclxuICAvLyAgICAgICAgIGFsZXJ0KCdHb29kJyk7XHJcbiAgLy8gICAgICAgfSlcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG4gIC8vXHJcbiAgLy8gb25TdGF0dXNDaGFuZ2UocmVzcG9uc2UpIHtcclxuICAvLyAgIHZhciBzZWxmID0gdGhpcztcclxuICAvLyAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIgKSB7XHJcbiAgLy8gICAgIHRoaXMuRkIuYXBpKCcvbWUnLCB7bWVzc2FnZTogJ2xhc3RfbmFtZSd9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAvLyAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5sYXN0X25hbWU7XHJcbiAgLy8gICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgLy8gICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgLy8gICAgICAgfSk7XHJcbiAgLy8gICAgICAgYWxlcnQoJ0dvb2QnKTtcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH1cclxuICAvLyAgIGFsZXJ0KHRoaXMuc3RhdGUubWVzc2FnZSk7XHJcbiAgLy8gfVxyXG4gIC8vXHJcbiAgLy8gb25Mb2dvdXQocmVzcG9uc2UpIHtcclxuICAvLyAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gIC8vICAgICBtZXNzYWdlOiBcIkxvZ291dFwiXHJcbiAgLy8gICB9KTtcclxuICAvLyB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgYXBwSWQ9XCIxODQxNTg5NTQ2MDU1MDYzXCJcclxuICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfVxyXG4gICAgICAvPlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkJ1dHRvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=