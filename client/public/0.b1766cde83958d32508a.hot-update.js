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
	
	var _RegistrationActions = __webpack_require__(388);
	
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
	  position: "absolute",
	  top: "30%"
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
	      var registrationRequest = this.props.registrationRequest;
	
	      return _react2.default.createElement('div', { className: 'row', style: divStyle }, _react2.default.createElement('div', { className: 'col-lg-4 col-lg-offset-4' }, _react2.default.createElement(_Registration2.default, { registrationRequest: registrationRequest })));
	    }
	  }]);
	
	  return RegistrationPage;
	}(_react2.default.Component);
	
	RegistrationPage.propTypes = {
	  registrationRequest: _react2.default.PropTypes.func.isRequired
	};
	
	var _default = (0, _reactRedux.connect)(null, { registrationRequest: _RegistrationActions.registrationRequest })(RegistrationPage);
	
	exports.default = _default;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb25QYWdlLmpzPzM1YTQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07YUFFSjtRQUFLO0FBREw7O0tBSUk7Ozs7Ozs7Ozs7OzhCQUNJO1dBQ0Msc0JBQXVCLEtBQUssTUFDbkM7O2NBQ0UsdUNBQUssV0FBVSxPQUFNLE9BQ25CLG1EQUFLLFdBQ0gsc0ZBQWMscUJBSXJCOzs7OztHQVY0QixnQkFBTTs7QUFhckMsa0JBQWlCO3dCQUNNLGdCQUFNLFVBQVUsS0FBSztBQUExQzs7Z0JBR2EseUJBQVEsTUFBTSxFQUFDLDBDQUFELHVCQUF1Qjs7Ozs7Ozs7OztpQ0F0QjlDOztpQ0FLQSIsImZpbGUiOiIwLmIxNzY2Y2RlODM5NThkMzI1MDhhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmVnaXN0cmF0aW9uIGZyb20gJy4vUmVnaXN0cmF0aW9uLmpzJztcclxuaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7cmVnaXN0cmF0aW9uUmVxdWVzdH0gZnJvbSAnLi9SZWdpc3RyYXRpb25BY3Rpb25zLmpzJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiXHJcbn1cclxuXHJcbmNsYXNzIFJlZ2lzdHJhdGlvblBhZ2UgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHJlbmRlcigpe1xyXG4gICAgY29uc3Qge3JlZ2lzdHJhdGlvblJlcXVlc3R9ID0gdGhpcy5wcm9wcztcclxuICAgIHJldHVybihcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBzdHlsZT17ZGl2U3R5bGV9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTQgY29sLWxnLW9mZnNldC00XCI+XHJcbiAgICAgICAgICA8UmVnaXN0cmF0aW9uIHJlZ2lzdHJhdGlvblJlcXVlc3Q9e3JlZ2lzdHJhdGlvblJlcXVlc3R9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcblJlZ2lzdHJhdGlvblBhZ2UucHJvcFR5cGVzID0ge1xyXG4gIHJlZ2lzdHJhdGlvblJlcXVlc3Q6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLCB7cmVnaXN0cmF0aW9uUmVxdWVzdH0pKFJlZ2lzdHJhdGlvblBhZ2UpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb25QYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==