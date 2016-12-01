webpackHotUpdate(0,{

/***/ 386:
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
	
	var _Registration = __webpack_require__(320);
	
	var _Registration2 = _interopRequireDefault(_Registration);
	
	var _reactRedux = __webpack_require__(346);
	
	var _RegistrationActions = __webpack_require__(539);
	
	var _FlashMessages = __webpack_require__(540);
	
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
	  paddingTop: "10%"
	};
	
	var RegistrationPage = function (_React$Component) {
	  _inherits(RegistrationPage, _React$Component);
	
	  function RegistrationPage() {
	    _classCallCheck(this, RegistrationPage);
	
	    return _possibleConstructorReturn(this, (RegistrationPage.__proto__ || Object.getPrototypeOf(RegistrationPage)).apply(this, arguments));
	  }
	
	  _createClass(RegistrationPage, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          registrationRequest = _props.registrationRequest,
	          addFlashMessage = _props.addFlashMessage,
	          isUserExists = _props.isUserExists;
	
	      return _react2.default.createElement('div', { style: divStyle }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-lg-4 col-lg-offset-4' }, _react2.default.createElement(_Registration2.default, {
	        registrationRequest: registrationRequest,
	        addFlashMessage: addFlashMessage,
	        isUserExist: isUserExist
	      }))));
	    }
	  }]);
	
	  return RegistrationPage;
	}(_react2.default.Component);
	
	RegistrationPage.propTypes = {
	  registrationRequest: _react2.default.PropTypes.func.isRequired,
	  addFlashMessage: _react2.default.PropTypes.func.isRequired,
	  isUserExists: _react2.default.PropTypes.func.isRequired
	};
	
	var _default = (0, _reactRedux.connect)(null, { registrationRequest: _RegistrationActions.registrationRequest, addFlashMessage: _FlashMessages.addFlashMessage, isUserExists: _RegistrationActions.isUserExists })(RegistrationPage);
	
	exports.default = _default;
	// export default RegistrationPage;
	
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js');
	
	  __REACT_HOT_LOADER__.register(RegistrationPage, 'RegistrationPage', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_Registration2, "_Registration2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(RegistrationPage, "RegistrationPage", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/RegistrationPage.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb25QYWdlLmpzPzM1YTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07ZUFDUTtBQUFaOztLQUdJOzs7Ozs7Ozs7Ozs4QkFDSTtvQkFDdUQsS0FBSztXQUEzRDtXQUFxQjtXQUFpQixzQkFDN0M7OzhCQUNFLHVCQUFLLE9BQ0wsbURBQUssV0FDSCxnREFBSyxXQUNIOzhCQUVFOzBCQUNBO3NCQU1UO0FBUlMsV0FKTjs7Ozs7R0FKeUIsZ0JBQU07O0FBbUJyQyxrQkFBaUI7d0JBQ00sZ0JBQU0sVUFBVSxLQUNyQztvQkFBaUIsZ0JBQU0sVUFBVSxLQUNqQztpQkFBYyxnQkFBTSxVQUFVLEtBQUs7QUFGbkM7O2dCQUthLHlCQUFRLE1BQU0sRUFBQywwQ0FBRCxxQkFBc0IsZ0NBQXRCLGlCQUF1QyxtQ0FBdkMsZ0JBQXNEOzs7QUFDbkY7Ozs7Ozs7OztpQ0E5Qk07O2lDQUlBIiwiZmlsZSI6IjAuMzAyMjM3ODI2MDVhZGIyM2RhOWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWdpc3RyYXRpb24gZnJvbSAnLi9SZWdpc3RyYXRpb24uanMnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtyZWdpc3RyYXRpb25SZXF1ZXN0LCBpc1VzZXJFeGlzdHN9IGZyb20gJy4uL2FjdGlvbnMvUmVnaXN0cmF0aW9uQWN0aW9ucy5qcyc7XHJcbmltcG9ydCB7YWRkRmxhc2hNZXNzYWdlfSBmcm9tICcuLi9hY3Rpb25zL0ZsYXNoTWVzc2FnZXMuanMnO1xyXG5cclxuY29uc3QgZGl2U3R5bGUgPSB7XHJcbiAgcGFkZGluZ1RvcDogXCIxMCVcIlxyXG59XHJcblxyXG5jbGFzcyBSZWdpc3RyYXRpb25QYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHtyZWdpc3RyYXRpb25SZXF1ZXN0LCBhZGRGbGFzaE1lc3NhZ2UsIGlzVXNlckV4aXN0c30gPSB0aGlzLnByb3BzO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBjb2wtbGctb2Zmc2V0LTRcIj5cclxuICAgICAgICAgIDxSZWdpc3RyYXRpb25cclxuICAgICAgICAgICAgcmVnaXN0cmF0aW9uUmVxdWVzdD17cmVnaXN0cmF0aW9uUmVxdWVzdH1cclxuICAgICAgICAgICAgYWRkRmxhc2hNZXNzYWdlPXthZGRGbGFzaE1lc3NhZ2V9XHJcbiAgICAgICAgICAgIGlzVXNlckV4aXN0PXtpc1VzZXJFeGlzdH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUmVnaXN0cmF0aW9uUGFnZS5wcm9wVHlwZXMgPSB7XHJcbiAgcmVnaXN0cmF0aW9uUmVxdWVzdDogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBhZGRGbGFzaE1lc3NhZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbiAgaXNVc2VyRXhpc3RzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCwge3JlZ2lzdHJhdGlvblJlcXVlc3QsIGFkZEZsYXNoTWVzc2FnZSwgaXNVc2VyRXhpc3RzfSkoUmVnaXN0cmF0aW9uUGFnZSk7XHJcbi8vIGV4cG9ydCBkZWZhdWx0IFJlZ2lzdHJhdGlvblBhZ2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1JlZ2lzdHJhdGlvblBhZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9