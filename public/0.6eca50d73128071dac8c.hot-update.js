webpackHotUpdate(0,{

/***/ 332:
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
	
	var _reactDom = __webpack_require__(166);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactFacebookLogin = __webpack_require__(484);
	
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
	
	var responseFacebook = function responseFacebook(response) {
	   console.log(response);
	};
	
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
	            this.FB.api('/me', function (response) {
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
	         return _react2.default.createElement(_reactFacebookLogin2.default, {
	            appId: '1088597931155576',
	            autoLoad: true,
	            fields: 'name,email,picture',
	            callback: responseFacebook,
	            cssClass: 'my-facebook-button-class',
	            icon: 'fa-facebook'
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
	
	   __REACT_HOT_LOADER__.register(responseFacebook, 'responseFacebook', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js');
	
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

	   __REACT_HOT_LOADER__.register(_reactDom2, "_reactDom2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_reactFacebookLogin2, "_reactFacebookLogin2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(responseFacebook, "responseFacebook", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	   __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTSxtQkFBbUIsMEJBQUMsVUFDeEI7WUFBUSxJQUNUO0FBRkQ7O0tBSU07bUNBQ0o7O2lDQUFZLE9BQU87NkJBQUE7OzZJQUVoQjs7YUFBSyxLQUFLLE1BQ1Y7YUFBSzttQkFDTztBQUFUO2NBRUw7Ozs7OzJDQUdLO2VBQUssR0FBRyxNQUFNLFVBQVUsZUFBZSxLQUFLLFNBQVMsS0FDckQ7ZUFBSyxHQUFHLE1BQU0sVUFBVSxxQkFBcUIsS0FBSyxlQUFlLEtBQ25FOzs7O3NDQUVjLFVBQ1o7a0JBQVEsSUFDUjtjQUFJLE9BRUo7O2NBQUksU0FBUyxXQUFXLGFBQ3JCO2tCQUFLLEdBQUcsSUFBSSxPQUFPLFVBQVMsVUFDekI7b0JBQUksVUFBVSxjQUFjLFNBQzVCO3FCQUFLOzRCQUdQO0FBRks7QUFHUjtBQUNIOzs7O2dDQUVRLFVBQ047ZUFBSztzQkFHUDtBQUZLOzs7O2dDQUtBOztvQkFHVjt1QkFDQTtxQkFDQTt1QkFDQTt1QkFDQTttQkFHUTtBQVJSLFdBRFk7Ozs7O0dBcENxQixnQkFBTTs7Z0JBZ0R6Qjs7Ozs7Ozs7O2tDQXBEVDs7a0NBSUEiLCJmaWxlIjoiMC42ZWNhNTBkNzMxMjgwNzFkYWM4Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBGYWNlYm9va0xvZ2luIGZyb20gJ3JlYWN0LWZhY2Vib29rLWxvZ2luJztcclxuXHJcbmNvbnN0IHJlc3BvbnNlRmFjZWJvb2sgPSAocmVzcG9uc2UpID0+IHtcclxuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbn1cclxuXHJcbmNsYXNzIEZhY2Vib29rTG9naW5CdXR0b24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgdGhpcy5GQiA9IHByb3BzLmZiO1xyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgIH07XHJcbiAgfVxyXG5cclxuICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIHRoaXMub25TdGF0dXNDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSApO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAgICAgICAgICB0aGlzLkZCLmFwaSgnL21lJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5uYW1lO1xyXG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICA8RmFjZWJvb2tMb2dpblxyXG4gYXBwSWQ9XCIxMDg4NTk3OTMxMTU1NTc2XCJcclxuIGF1dG9Mb2FkPXt0cnVlfVxyXG4gZmllbGRzPVwibmFtZSxlbWFpbCxwaWN0dXJlXCJcclxuIGNhbGxiYWNrPXtyZXNwb25zZUZhY2Vib29rfVxyXG4gY3NzQ2xhc3M9XCJteS1mYWNlYm9vay1idXR0b24tY2xhc3NcIlxyXG4gaWNvbj1cImZhLWZhY2Vib29rXCJcclxuLz5cclxuICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkJ1dHRvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=