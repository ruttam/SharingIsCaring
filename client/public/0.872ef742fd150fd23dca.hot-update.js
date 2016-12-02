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
	  padding: "20px 15px 20px 15px"
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
	      return _react2.default.createElement('div', { style: divStyle, className: 'col-lg-6' }, _react2.default.createElement(_reactFacebookLogin2.default, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GYWNlYm9va0xvZ2luQnV0dG9uLmpzPzAzNWYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07WUFDSztBQUFUOztLQUdJO2tDQUNKOztnQ0FBWSxPQUFPOzJCQUFBOztzSUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUVEOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7c0NBRWlCLFVBQ2Y7ZUFBUSxJQUNUOzs7OzhCQUdDOzhCQUNFLHVCQUFLLE9BQU8sVUFBVSxXQUN0QjtnQkFFRTttQkFDQTtpQkFDQTttQkFBVSxLQUlmO0FBUEssU0FGRjs7Ozs7R0F2RTRCLGdCQUFNOztnQkFtRnpCOzs7Ozs7Ozs7aUNBdkZUOztpQ0FJQSIsImZpbGUiOiIwLjg3MmVmNzQyZmQxNTBmZDIzZGNhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgRmFjZWJvb2tMb2dpbiBmcm9tICdyZWFjdC1mYWNlYm9vay1sb2dpbic7XG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgcGFkZGluZzogXCIyMHB4IDE1cHggMjBweCAxNXB4XCJcclxufVxyXG5cclxuY2xhc3MgRmFjZWJvb2tMb2dpbkJ1dHRvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgLy8gdGhpcy5GQiA9IHRoaXMucHJvcHMuZmI7XHJcbiAgICAvLyB0aGlzLnN0YXRlID0ge1xyXG4gICAgLy8gICBtZXNzYWdlOiBcIlwiXHJcbiAgICAvLyB9O1xyXG4gIH1cclxuXHJcbiAgLy8gY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgLy8gICB0aGlzLkZCLkV2ZW50LnN1YnNjcmliZSgnYXV0aC5sb2dvdXQnLCB0aGlzLm9uTG9nb3V0LmJpbmQodGhpcykpO1xyXG4gIC8vICAgdGhpcy5GQi5FdmVudC5zdWJzY3JpYmUoJ2F1dGguc3RhdHVzQ2hhbmdlJywgZnVuY3Rpb24ocmVzcG9uc2Upe1xyXG4gIC8vICAgICBjb25zb2xlLmxvZyhcIk9rXCIpO1xyXG4gIC8vICAgICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gIC8vICAgICAgIHRoaXMuRkIuYXBpKCcvbWUnLCB7bWVzc2FnZTogJ2xhc3RfbmFtZSd9LCBmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIC8vICAgICAgICAgLy92YXIgbWVzc2FnZSA9IFwiV2VsY29tZSwgXCIgKyByZXNwb25zZS5sYXN0X25hbWU7XHJcbiAgLy8gICAgICAgICBzZWxmLnNldFN0YXRlKHtcclxuICAvLyAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gIC8vICAgICAgICAgfSk7XHJcbiAgLy8gICAgICAgICBhbGVydCgnR29vZCcpO1xyXG4gIC8vICAgICAgIH0pXHJcbiAgLy8gICAgIH1cclxuICAvLyAgIH0pO1xyXG4gIC8vIH1cclxuICAvL1xyXG4gIC8vIG9uU3RhdHVzQ2hhbmdlKHJlc3BvbnNlKSB7XHJcbiAgLy8gICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgLy8gICBpZiggcmVzcG9uc2Uuc3RhdHVzID09PSBcImNvbm5lY3RlZFwiICkge1xyXG4gIC8vICAgICB0aGlzLkZCLmFwaSgnL21lJywge21lc3NhZ2U6ICdsYXN0X25hbWUnfSwgZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAvLyAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgLy8gICAgICAgdmFyIG1lc3NhZ2UgPSBcIldlbGNvbWUsIFwiICsgcmVzcG9uc2UubGFzdF9uYW1lO1xyXG4gIC8vICAgICAgIHNlbGYuc2V0U3RhdGUoe1xyXG4gIC8vICAgICAgICAgbWVzc2FnZTogbWVzc2FnZVxyXG4gIC8vICAgICAgIH0pO1xyXG4gIC8vICAgICAgIGFsZXJ0KCdHb29kJyk7XHJcbiAgLy8gICAgIH0pXHJcbiAgLy8gICB9XHJcbiAgLy8gICBhbGVydCh0aGlzLnN0YXRlLm1lc3NhZ2UpO1xyXG4gIC8vIH1cclxuICAvL1xyXG4gIC8vIG9uTG9nb3V0KHJlc3BvbnNlKSB7XHJcbiAgLy8gICB0aGlzLnNldFN0YXRlKHtcclxuICAvLyAgICAgbWVzc2FnZTogXCJMb2dvdXRcIlxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG4gIC8vXHJcbiAgLy8gcmVuZGVyKCkge1xyXG4gIC8vICAgbGV0IG1lc3NhZ2UgPSB0aGlzLnN0YXRlLm1lc3NhZ2U7XHJcbiAgLy8gICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAvLyAgIHJldHVybiAoXHJcbiAgLy8gICAgIDxkaXYgc3R5bGU9e2RpdlN0eWxlfSBjbGFzc05hbWU9XCJjb2wtbGctNFwiPjxoND5sb2dpbiB3aXRoIEZhY2Vib29rPC9oND5cclxuICAvLyAgICAgPGRpdlxyXG4gIC8vICAgICAgIGNsYXNzTmFtZT1cImZiLWxvZ2luLWJ1dHRvblwiXHJcbiAgLy8gICAgICAgZGF0YS1tYXgtcm93cz1cIjFcIlxyXG4gIC8vICAgICAgIGRhdGEtc2l6ZT1cInhsYXJnZVwiXHJcbiAgLy8gICAgICAgZGF0YS1zaG93LWZhY2VzPVwiZmFsc2VcIlxyXG4gIC8vICAgICAgIGRhdGEtYXV0by1sb2dvdXQtbGluaz1cInRydWVcIlxyXG4gIC8vICAgICA+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgICA8ZGl2Pnt0aGlzLnN0YXRlLm1lc3NhZ2V9PC9kaXY+XHJcbiAgLy8gICAgIDwvZGl2PlxyXG4gIC8vICAgKTtcclxuICAvLyB9XHJcblxyXG4gIHJlc3BvbnNlRmFjZWJvb2socmVzcG9uc2Upe1xyXG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBzdHlsZT17ZGl2U3R5bGV9IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgIDxGYWNlYm9va0xvZ2luXHJcbiAgICAgICAgYXBwSWQ9XCIxODQxNTg5NTQ2MDU1MDYzXCJcclxuICAgICAgICBhdXRvTG9hZD17dHJ1ZX1cclxuICAgICAgICBmaWVsZHM9XCJuYW1lLGVtYWlsLHBpY3R1cmVcIlxyXG4gICAgICAgIGNhbGxiYWNrPXt0aGlzLnJlc3BvbnNlRmFjZWJvb2t9XHJcbiAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFjZWJvb2tMb2dpbkJ1dHRvbjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmFjZWJvb2tMb2dpbkJ1dHRvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=