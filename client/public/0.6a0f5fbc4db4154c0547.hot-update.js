webpackHotUpdate(0,{

/***/ 651:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
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
	
	var divStyle = {
	  padding: "0 0 0 15px"
	};
	
	var FacebookLoginButton = function (_React$Component) {
	  _inherits(FacebookLoginButton, _React$Component);
	
	  function FacebookLoginButton(props) {
	    _classCallCheck(this, FacebookLoginButton);
	
	    var _this = _possibleConstructorReturn(this, (FacebookLoginButton.__proto__ || Object.getPrototypeOf(FacebookLoginButton)).call(this, props));
	
	    _this.FB = _this.props.fb;
	    _this.state = {
	      message: ""
	    };
	    return _this;
	  }
	
	  _createClass(FacebookLoginButton, [{
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
	      this.FB.Event.subscribe('auth.statusChange', function (response) {
	        console.log("Ok");
	        if (response.status === "connected") {
	          this.FB.api('/me', { message: 'last_name' }, function (response) {
	            console.log(response);
	            //var message = "Welcome, " + response.last_name;
	            self.setState({
	              message: message
	            });
	            alert('Good');
	          });
	        }
	      }).catch(function (errors) {
	        console.log(errors);
	      });
	    }
	  }, {
	    key: "onStatusChange",
	    value: function onStatusChange(response) {
	      var self = this;
	      if (response.status === "connected") {
	        this.FB.api('/me', { message: 'last_name' }, function (response) {
	          console.log(response);
	          //var message = "Welcome, " + response.last_name;
	          self.setState({
	            message: message
	          });
	          alert('Good');
	        });
	      }
	      alert(this.state.message);
	    }
	  }, {
	    key: "onLogout",
	    value: function onLogout(response) {
	      this.setState({
	        message: ""
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var message = this.state.message;
	      console.log(message);
	      return _react2.default.createElement("div", { style: divStyle, className: "col-lg-4" }, _react2.default.createElement("h4", null, "login with Facebook"), _react2.default.createElement("div", {
	        className: "fb-login-button",
	        "data-max-rows": "1",
	        "data-size": "xlarge",
	        "data-show-faces": "true",
	        "data-auto-logout-link": "true"
	      }), _react2.default.createElement("div", null, this.state.message));
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
	
	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	
	  __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	
	  __REACT_HOT_LOADER__.register(_default, "default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
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

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(FacebookLoginButton, "FacebookLoginButton", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FacebookLoginButton.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1lBQ0s7QUFBVDs7S0FHSTtrQ0FDSjs7Z0NBQVksT0FBTzsyQkFBQTs7MklBRWpCOztXQUFLLEtBQUssTUFBSyxNQUNmO1dBQUs7Z0JBQ007QUFBVDtZQUVIOzs7Ozt5Q0FHQztZQUFLLEdBQUcsTUFBTSxVQUFVLGVBQWUsS0FBSyxTQUFTLEtBQ3JEO1lBQUssR0FBRyxNQUFNLFVBQVUscUJBQXFCLFVBQVMsVUFDcEQ7aUJBQVEsSUFDUjthQUFJLFNBQVMsV0FBVyxhQUN0QjtnQkFBSyxHQUFHLElBQUksT0FBTyxFQUFDLFNBQVMsZUFBYyxVQUFTLFVBQ2xEO3FCQUFRLElBQ1I7QUFDQTtrQkFBSzt3QkFHTDtBQUZFO21CQUdIO0FBQ0Y7QUFDRjtBQVpELFVBWUcsTUFBTyxVQUFDLFFBQ1Q7aUJBQVEsSUFDVDtBQUNGOzs7O29DQUVjLFVBQ2I7V0FBSSxPQUNKO1dBQUksU0FBUyxXQUFXLGFBQ3RCO2NBQUssR0FBRyxJQUFJLE9BQU8sRUFBQyxTQUFTLGVBQWMsVUFBUyxVQUNsRDttQkFBUSxJQUNSO0FBQ0E7Z0JBQUs7c0JBR0w7QUFGRTtpQkFHSDtBQUNGO0FBQ0Q7YUFBTSxLQUFLLE1BQ1o7Ozs7OEJBRVEsVUFDUDtZQUFLO2tCQUdOO0FBRkc7Ozs7OEJBS0Y7V0FBSSxVQUFVLEtBQUssTUFDbkI7ZUFBUSxJQUNSOzhCQUNFLHVCQUFLLE9BQU8sVUFBVSxXQUFxQix3REFDM0M7b0JBRUU7MEJBQ0E7c0JBQ0E7NEJBQ0E7a0NBR0Y7QUFQRSxTQUZGLGtCQVNBLHFCQUFNLFdBQUssTUFHZDs7Ozs7R0FqRStCLGdCQUFNOztnQkFvRXpCOzs7Ozs7Ozs7aUNBeEVUOztpQ0FJQSIsImZpbGUiOiIwLjZhMGY1ZmJjNGRiNDE1NGMwNTQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgcGFkZGluZzogXCIwIDAgMCAxNXB4XCJcclxufVxyXG5cclxuY2xhc3MgRmFjZWJvb2tMb2dpbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5GQiA9IHRoaXMucHJvcHMuZmI7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICBjb25zb2xlLmxvZyhcIk9rXCIpO1xyXG4gICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gICAgICAgIHRoaXMuRkIuYXBpKCcvbWUnLCB7bWVzc2FnZTogJ2xhc3RfbmFtZSd9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgLy92YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5sYXN0X25hbWU7XHJcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhbGVydCgnR29vZCcpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pLmNhdGNoICgoZXJyb3JzKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9ycyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG9uU3RhdHVzQ2hhbmdlKHJlc3BvbnNlKSB7XHJcbiAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gICAgICB0aGlzLkZCLmFwaSgnL21lJywge21lc3NhZ2U6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgLy92YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5sYXN0X25hbWU7XHJcbiAgICAgICAgc2VsZi5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgYWxlcnQoJ0dvb2QnKTtcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGFsZXJ0KHRoaXMuc3RhdGUubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBvbkxvZ291dChyZXNwb25zZSkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIG1lc3NhZ2U6IFwiXCJcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XHJcbiAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfSBjbGFzc05hbWU9XCJjb2wtbGctNFwiPjxoND5sb2dpbiB3aXRoIEZhY2Vib29rPC9oND5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZiLWxvZ2luLWJ1dHRvblwiXHJcbiAgICAgICAgZGF0YS1tYXgtcm93cz1cIjFcIlxyXG4gICAgICAgIGRhdGEtc2l6ZT1cInhsYXJnZVwiXHJcbiAgICAgICAgZGF0YS1zaG93LWZhY2VzPVwidHJ1ZVwiXHJcbiAgICAgICAgZGF0YS1hdXRvLWxvZ291dC1saW5rPVwidHJ1ZVwiXHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkJ1dHRvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=