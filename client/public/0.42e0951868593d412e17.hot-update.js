webpackHotUpdate(0,{

/***/ 319:
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
	  padding: "0 0 5px 0"
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
	    key: "componentDidMount",
	    value: function componentDidMount() {
	      this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
	      this.FB.Event.subscribe('auth.statusChange', function (response) {
	        alert("Ok");
	        if (response.status === "connected") {
	          this.FB.api('/me', { message: 'last_name' }, function (response) {
	            console.log(response);
	            //var message = "Welcome, " + response.last_name;
	            self.setState({
	              message: message
	            });
	            alert('Goof');
	          });
	        }
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
	          alert('Goof');
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
	      return _react2.default.createElement("div", { style: divStyle }, _react2.default.createElement("h4", null, "login with Facebook"), _react2.default.createElement("div", {
	        className: "fb-login-button",
	        "data-max-rows": "1",
	        "data-size": "large",
	        "data-show-faces": "true",
	        "data-auto-logout-link": "false"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1lBQ0s7QUFBVDs7S0FHSTtrQ0FDSjs7Z0NBQVksT0FBTzsyQkFBQTs7MklBRWpCOztXQUFLLEtBQUssTUFDVjtXQUFLO2dCQUNNO0FBQVQ7WUFFSDs7Ozs7eUNBR0M7WUFBSyxHQUFHLE1BQU0sVUFBVSxlQUFlLEtBQUssU0FBUyxLQUNyRDtZQUFLLEdBQUcsTUFBTSxVQUFVLHFCQUFxQixVQUFTLFVBQ3BEO2VBQ0E7YUFBSSxTQUFTLFdBQVcsYUFDdEI7Z0JBQUssR0FBRyxJQUFJLE9BQU8sRUFBQyxTQUFTLGVBQWMsVUFBUyxVQUNsRDtxQkFBUSxJQUNSO0FBQ0E7a0JBQUs7d0JBR0w7QUFGRTttQkFHSDtBQUNGO0FBQ0Y7QUFDRjs7OztvQ0FFYyxVQUNiO1dBQUksT0FDSjtXQUFJLFNBQVMsV0FBVyxhQUN0QjtjQUFLLEdBQUcsSUFBSSxPQUFPLEVBQUMsU0FBUyxlQUFjLFVBQVMsVUFDbEQ7bUJBQVEsSUFDUjtBQUNBO2dCQUFLO3NCQUdMO0FBRkU7aUJBR0g7QUFDRjtBQUNEO2FBQU0sS0FBSyxNQUNaOzs7OzhCQUVRLFVBQ1A7WUFBSztrQkFHTjtBQUZHOzs7OzhCQUtGO1dBQUksVUFBVSxLQUFLLE1BQ25CO2VBQVEsSUFDUjs4QkFDRSx1QkFBSyxPQUFpQixzREFDdEI7b0JBRUU7MEJBQ0E7c0JBQ0E7NEJBQ0E7a0NBR0Y7QUFQRSxTQUZGLGtCQVNBLHFCQUFNLFdBQUssTUFHZDs7Ozs7R0EvRCtCLGdCQUFNOztnQkFtRXpCOzs7Ozs7Ozs7aUNBdkVUOztpQ0FJQSIsImZpbGUiOiIwLjQyZTA5NTE4Njg1OTNkNDEyZTE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgcGFkZGluZzogXCIwIDAgNXB4IDBcIlxyXG59XHJcblxyXG5jbGFzcyBGYWNlYm9va0xvZ2luQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLkZCID0gcHJvcHMuZmI7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBtZXNzYWdlOiBcIlwiXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gICAgICBhbGVydChcIk9rXCIpO1xyXG4gICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gICAgICAgIHRoaXMuRkIuYXBpKCcvbWUnLCB7bWVzc2FnZTogJ2xhc3RfbmFtZSd9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgLy92YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5sYXN0X25hbWU7XHJcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBhbGVydCgnR29vZicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgb25TdGF0dXNDaGFuZ2UocmVzcG9uc2UpIHtcclxuICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgIGlmKCByZXNwb25zZS5zdGF0dXMgPT09IFwiY29ubmVjdGVkXCIgKSB7XHJcbiAgICAgIHRoaXMuRkIuYXBpKCcvbWUnLCB7bWVzc2FnZTogJ2xhc3RfbmFtZSd9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAvL3ZhciBtZXNzYWdlID0gXCJXZWxjb21lLCBcIiArIHJlc3BvbnNlLmxhc3RfbmFtZTtcclxuICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAgICAgICAgIG1lc3NhZ2U6IG1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBhbGVydCgnR29vZicpO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgYWxlcnQodGhpcy5zdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgbWVzc2FnZTogXCJcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQgbWVzc2FnZSA9IHRoaXMuc3RhdGUubWVzc2FnZTtcclxuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17ZGl2U3R5bGV9PjxoND5sb2dpbiB3aXRoIEZhY2Vib29rPC9oND5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIGNsYXNzTmFtZT1cImZiLWxvZ2luLWJ1dHRvblwiXHJcbiAgICAgICAgZGF0YS1tYXgtcm93cz1cIjFcIlxyXG4gICAgICAgIGRhdGEtc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBkYXRhLXNob3ctZmFjZXM9XCJ0cnVlXCJcclxuICAgICAgICBkYXRhLWF1dG8tbG9nb3V0LWxpbms9XCJmYWxzZVwiXHJcbiAgICAgID5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXY+e3RoaXMuc3RhdGUubWVzc2FnZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhY2Vib29rTG9naW5CdXR0b247XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZhY2Vib29rTG9naW5CdXR0b24uanMiXSwic291cmNlUm9vdCI6IiJ9