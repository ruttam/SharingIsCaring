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
	      FB.api('/me', { fields: 'last_name' }, function (response) {
	        console.log(response);
	      });
	    }
	  }, {
	    key: 'onStatusChange',
	    value: function onStatusChange(response) {
	      var self = this;
	      if (response.status === "connected") {
	        this.FB.api('/me', { fields: 'last_name' }, function (response) {
	          console.log(response);
	          var message = "Welcome, " + response.last_name;
	          self.setState({
	            message: message
	          });
	        });
	      }
	      alert(this.state.message);
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
	      var message = this.state.message;
	      console.log(message);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTtrQ0FDSjs7Z0NBQVksT0FBTzsyQkFBQTs7MklBRWpCOztXQUFLLEtBQUssTUFDVjtXQUFLO2dCQUNNO0FBQVQ7WUFFSDs7Ozs7eUNBR0M7WUFBSyxHQUFHLE1BQU0sVUFBVSxlQUFlLEtBQUssU0FBUyxLQUNyRDtZQUFLLEdBQUcsTUFBTSxVQUFVLHFCQUFxQixLQUFLLGVBQWUsS0FDakU7VUFBRyxJQUFJLE9BQU8sRUFBQyxRQUFRLGVBQWMsVUFBUyxVQUM1QztpQkFBUSxJQUNUO0FBQ0Y7Ozs7b0NBRWMsVUFDYjtXQUFJLE9BQ0o7V0FBSSxTQUFTLFdBQVcsYUFDdEI7Y0FBSyxHQUFHLElBQUksT0FBTyxFQUFDLFFBQVEsZUFBYyxVQUFTLFVBQ2pEO21CQUFRLElBQ1I7ZUFBSSxVQUFVLGNBQWMsU0FDNUI7Z0JBQUs7c0JBR047QUFGRztBQUdMO0FBQ0Q7YUFBTSxLQUFLLE1BQ1o7Ozs7OEJBRVEsVUFDUDtZQUFLO2tCQUdOO0FBRkc7Ozs7OEJBS0Y7V0FBSSxVQUFVLEtBQUssTUFDbkI7ZUFBUSxJQUNSOzhCQUNFLHFCQUNBO29CQUVFOzBCQUNBO3NCQUNBOzRCQUNBO2tDQUdGO0FBUEUsU0FGRixrQkFTQSxxQkFBTSxXQUFLLE1BR2Q7Ozs7O0dBckQrQixnQkFBTTs7Z0JBeUR6Qjs7Ozs7Ozs7O2lDQXpEVCIsImZpbGUiOiIwLjJlNDJkMzc3NDNiNmRlYmIxZDJjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgRmFjZWJvb2tMb2dpbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5GQiA9IHByb3BzLmZiO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGgubG9nb3V0JywgdGhpcy5vbkxvZ291dC5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMuRkIuRXZlbnQuc3Vic2NyaWJlKCdhdXRoLnN0YXR1c0NoYW5nZScsIHRoaXMub25TdGF0dXNDaGFuZ2UuYmluZCh0aGlzKSk7XHJcbiAgICBGQi5hcGkoJy9tZScsIHtmaWVsZHM6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvblN0YXR1c0NoYW5nZShyZXNwb25zZSkge1xyXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgaWYoIHJlc3BvbnNlLnN0YXR1cyA9PT0gXCJjb25uZWN0ZWRcIiApIHtcclxuICAgICAgdGhpcy5GQi5hcGkoJy9tZScsIHtmaWVsZHM6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xyXG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYWxlcnQodGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuc3RhdGUubWVzc2FnZTtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZiLWxvZ2luLWJ1dHRvblwiXHJcbiAgICAgICAgZGF0YS1tYXgtcm93cz1cIjFcIlxyXG4gICAgICAgIGRhdGEtc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBkYXRhLXNob3ctZmFjZXM9XCJ0cnVlXCJcclxuICAgICAgICBkYXRhLWF1dG8tbG9nb3V0LWxpbms9XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdj57dGhpcy5zdGF0ZS5tZXNzYWdlfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkJ1dHRvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=