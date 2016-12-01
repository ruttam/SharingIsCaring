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
	
	      _this.FB = FB.init({ appId: '1841589546055063', cookie: true, xfbml: true, oauth: true });
	      _this.state = {
	         message: ""
	      };
	      return _this;
	   }
	
	   _createClass(FacebookLoginButton, [{
	      key: 'componentDidMount',
	      value: function componentDidMount() {
	         this.FB.event.subscribe('auth.logout', this.onLogout.bind(this));
	         this.FB.event.subscribe('auth.statusChange', this.onStatusChange.bind(this));
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
	         return _react2.default.createElement('div', null, _react2.default.createElement('div', {
	            className: 'fb-login-button',
	            'data-max-rows': '1',
	            'data-size': 'large',
	            'data-show-faces': 'true',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTttQ0FDSjs7aUNBQVksT0FBTzs2QkFBQTs7NklBRWhCOzthQUFLLEtBQUssR0FBRyxLQUFLLEVBQUUsT0FBTyxvQkFBb0IsUUFBUSxNQUFNLE9BQU8sTUFBTSxPQUMxRTthQUFLO21CQUNPO0FBQVQ7Y0FFTDs7Ozs7MkNBR0s7ZUFBSyxHQUFHLE1BQU0sVUFBVSxlQUFlLEtBQUssU0FBUyxLQUNyRDtlQUFLLEdBQUcsTUFBTSxVQUFVLHFCQUFxQixLQUFLLGVBQWUsS0FDbkU7Ozs7c0NBRWMsVUFDWjtrQkFBUSxJQUNSO2NBQUksT0FFSjs7Y0FBSSxTQUFTLFdBQVcsYUFDckI7a0JBQUssR0FBRyxJQUFJLE9BQU8sVUFBUyxVQUN6QjtvQkFBSSxVQUFVLGNBQWMsU0FDNUI7cUJBQUs7NEJBR1A7QUFGSztBQUdSO0FBQ0g7Ozs7Z0NBRVEsVUFDTjtlQUFLO3NCQUdQO0FBRks7Ozs7Z0NBS0E7aUNBQ0cscUJBQ0c7d0JBRUc7OEJBQ0E7MEJBQ0E7Z0NBQ0E7c0NBR0g7QUFQRyxZQUZOLGtCQVNHLHFCQUFNLFdBQUssTUFHbkI7Ozs7O0dBaER5QixnQkFBTTs7Z0JBbUR6Qjs7Ozs7Ozs7O2tDQW5EVCIsImZpbGUiOiIwLmJiMDMwNjhkMTJlMTNlODQzMDJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRmFjZWJvb2tMb2dpbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgIHN1cGVyKHByb3BzKTtcclxuICAgICB0aGlzLkZCID0gRkIuaW5pdCh7IGFwcElkOiAnMTg0MTU4OTU0NjA1NTA2MycsIGNvb2tpZTogdHJ1ZSwgeGZibWw6IHRydWUsIG9hdXRoOiB0cnVlIH0pO1xyXG4gICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgIH07XHJcbiAgfVxyXG5cclxuICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLkZCLmV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMuRkIuZXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIHRoaXMub25TdGF0dXNDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgICAgfVxyXG5cclxuICAgICBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCByZXNwb25zZSApO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAgICAgICAgICB0aGlzLkZCLmFwaSgnL21lJywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICB2YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5uYW1lO1xyXG4gICAgICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICB9XHJcblxyXG4gICAgIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgICAgIH0pO1xyXG4gICAgIH1cclxuXHJcbiAgICAgcmVuZGVyKCkge1xyXG4gICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmItbG9naW4tYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLW1heC1yb3dzPVwiMVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtc2hvdy1mYWNlcz1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtYXV0by1sb2dvdXQtbGluaz1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICA8ZGl2Pnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rTG9naW5CdXR0b247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24uanMiXSwic291cmNlUm9vdCI6IiJ9