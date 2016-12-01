webpackHotUpdate(0,{

/***/ 552:
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
	
	var _classnames = __webpack_require__(553);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
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
	
	var FlashMessage = function (_React$Component) {
	  _inherits(FlashMessage, _React$Component);
	
	  function FlashMessage() {
	    _classCallCheck(this, FlashMessage);
	
	    return _possibleConstructorReturn(this, (FlashMessage.__proto__ || Object.getPrototypeOf(FlashMessage)).apply(this, arguments));
	  }
	
	  _createClass(FlashMessage, [{
	    key: 'render',
	    value: function render() {
	      var _props$message = this.props.message,
	          id = _props$message.id,
	          type = _props$message.type,
	          text = _props$message.text;
	
	      return _react2.default.createElement('div', { classnames: (0, _classnames2.default)('alert', {
	          'alert-success': type === 'success',
	          'alert-danger': type === 'error'
	        }) }, text);
	    }
	  }]);
	
	  return FlashMessage;
	}(_react2.default.Component);
	
	FlashMessage.propTypes = {
	  message: _react2.default.PropTypes.object.isRequired
	};
	
	var _default = FlashMessage;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(FlashMessage, 'FlashMessage', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_classnames2, "_classnames2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(FlashMessage, "FlashMessage", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessage.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2UuanM/MmViZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBRU07Ozs7Ozs7Ozs7OzhCQUNLOzRCQUNrQixLQUFLLE1BQU07V0FBN0I7V0FBSTtXQUFNLHNCQUNqQjs7OEJBQ0UsdUJBQUssc0NBQXVCOzRCQUNULFNBQ2pCOzJCQUFnQixTQUVqQjtBQUhDLFVBRGUsR0FBakIsRUFPSDs7Ozs7R0FYd0IsZ0JBQU07O0FBY2pDLGNBQWE7WUFDRixnQkFBTSxVQUFVLE9BQU87QUFBaEM7O2dCQUdhOzs7Ozs7Ozs7aUNBbEJUIiwiZmlsZSI6IjAuOGY5NjE5YWM3OGNmYTRlZjRiNTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBjbGFzc25hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5cclxuY2xhc3MgRmxhc2hNZXNzYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aWQsIHR5cGUsIHRleHR9ID0gdGhpcy5wcm9wcy5tZXNzYWdlO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzbmFtZXM9e2NsYXNzbmFtZXMoJ2FsZXJ0Jywge1xyXG4gICAgICAgICdhbGVydC1zdWNjZXNzJzogdHlwZSA9PT0gJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICdhbGVydC1kYW5nZXInOiB0eXBlID09PSAnZXJyb3InXHJcbiAgICAgIH0pfT5cclxuICAgICAge3RleHR9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbkZsYXNoTWVzc2FnZS5wcm9wVHlwZXMgPSB7XHJcbiAgbWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsYXNoTWVzc2FnZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==