webpackHotUpdate(0,{

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(110);
	
	var _reactDom = __webpack_require__(166);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _app = __webpack_require__(304);
	
	var _app2 = _interopRequireDefault(_app);
	
	var _Layout = __webpack_require__(305);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Trip = __webpack_require__(306);
	
	var _Trip2 = _interopRequireDefault(_Trip);
	
	var _FacebookLoginButton = __webpack_require__(332);
	
	var _FacebookLoginButton2 = _interopRequireDefault(_FacebookLoginButton);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	_reactDom2.default.render(_react2.default.createElement(_reactRouter.Router, { history: _reactRouter.browserHistory }, _react2.default.createElement(_reactRouter.Route, { component: _app2.default }, _react2.default.createElement(_reactRouter.Route, { path: '/', component: FacebookLoginButtonLogin }))), document.getElementById('app'));
	var message = "Welcome too Važiuoju-Vežu App!";
	console.log(message);
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(message, 'message', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_react2, '_react2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_reactDom2, '_reactDom2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_app2, '_app2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_Layout2, '_Layout2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_Trip2, '_Trip2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_FacebookLoginButton2, '_FacebookLoginButton2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(message, 'message', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');
	}();

	;

/***/ },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxvQkFBUyxPQUNULHFEQUFRLHNCQUNOLHNFQUFPLGlCQUNMLCtEQUFPLE1BQUssS0FBSSxXQUFXLCtCQUcvQixTQUFTLGVBQWU7QUFFeEIsS0FBSSxVQUFVO0FBQ2QsU0FBUSxJQUFJOzs7Ozs7OztpQ0FEUjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTttQ0FDSjs7aUNBQVksT0FBTzs2QkFBQTs7NklBRWhCOzthQUFLLEtBQUssTUFDVjthQUFLO21CQUNPO0FBQVQ7Y0FFTDs7Ozs7MkNBR0s7ZUFBSyxHQUFHLE1BQU0sVUFBVSxlQUFlLEtBQUssU0FBUyxLQUNyRDtlQUFLLEdBQUcsTUFBTSxVQUFVLHFCQUFxQixLQUFLLGVBQWUsS0FDbkU7Ozs7c0NBRWMsVUFDWjtrQkFBUSxJQUNSO2NBQUksT0FFSjs7Y0FBSSxTQUFTLFdBQVcsYUFDckI7a0JBQUssR0FBRyxJQUFJLE9BQU8sVUFBUyxVQUN6QjtvQkFBSSxVQUFVLGNBQWMsU0FDNUI7cUJBQUs7NEJBR1A7QUFGSztBQUdSO0FBQ0g7Ozs7Z0NBRVEsVUFDTjtlQUFLO3NCQUdQO0FBRks7Ozs7Z0NBS0E7aUNBQ0cscUJBQ0c7d0JBRUc7OEJBQ0E7MEJBQ0E7Z0NBQ0E7c0NBR0g7QUFQRyxZQUZOLGtCQVNHLHFCQUFNLFdBQUssTUFHbkI7Ozs7O0dBaER5QixnQkFBTTs7Z0JBbUR6Qjs7Ozs7Ozs7O2tDQW5EVCIsImZpbGUiOiIwLjc5ODFhOWQ3Mzc4YjEzYTdhMmUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1JvdXRlciwgUm91dGUsIGJyb3dzZXJIaXN0b3J5fSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IEFwcCBmcm9tICcuL2NvbXBvbmVudHMvYXBwLmpzJztcclxuaW1wb3J0IExheW91dCBmcm9tICcuL2NvbXBvbmVudHMvTGF5b3V0LmpzJztcclxuaW1wb3J0IFRyaXBCb3ggZnJvbSAnLi9jb21wb25lbnRzL1RyaXAuanMnO1xyXG5pbXBvcnQgTG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24uanMnO1xyXG5cclxuUmVhY3RET00ucmVuZGVyKFxyXG48Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuICA8Um91dGUgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgPFJvdXRlIHBhdGg9XCIvXCIgY29tcG9uZW50PXtGYWNlYm9va0xvZ2luQnV0dG9uTG9naW59IC8+XHJcbiAgPC9Sb3V0ZT5cclxuPC9Sb3V0ZXI+LFxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKTtcclxubGV0IG1lc3NhZ2UgPSBcIldlbGNvbWUgdG9vIFZhxb5pdW9qdS1WZcW+dSBBcHAhXCI7XHJcbmNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRmFjZWJvb2tMb2dpbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgIHN1cGVyKHByb3BzKTtcclxuICAgICB0aGlzLkZCID0gcHJvcHMuZmI7XHJcbiAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgfTtcclxuICB9XHJcblxyXG4gICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLmxvZ291dCcsIHRoaXMub25Mb2dvdXQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgdGhpcy5vblN0YXR1c0NoYW5nZS5iaW5kKHRoaXMpKTtcclxuICAgICB9XHJcblxyXG4gICAgIG9uU3RhdHVzQ2hhbmdlKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coIHJlc3BvbnNlICk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gICAgICAgICAgIHRoaXMuRkIuYXBpKCcvbWUnLCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgIHZhciBtZXNzYWdlID0gXCJXZWxjb21lLCBcIiArIHJlc3BvbnNlLm5hbWU7XHJcbiAgICAgICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgIH1cclxuXHJcbiAgICAgb25Mb2dvdXQocmVzcG9uc2UpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgfVxyXG5cclxuICAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmYi1sb2dpbi1idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbWF4LXJvd3M9XCIxXCJcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLXNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1zaG93LWZhY2VzPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1hdXRvLWxvZ291dC1saW5rPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgIDxkaXY+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkJ1dHRvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=