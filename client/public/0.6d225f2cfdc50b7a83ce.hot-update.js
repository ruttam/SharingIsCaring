webpackHotUpdate(0,{

/***/ 551:
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
	
	var _reactRedux = __webpack_require__(346);
	
	var _FlashMessage = __webpack_require__(552);
	
	var _FlashMessage2 = _interopRequireDefault(_FlashMessage);
	
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
	
	var FlashMessagesList = function (_React$Component) {
	  _inherits(FlashMessagesList, _React$Component);
	
	  function FlashMessagesList() {
	    _classCallCheck(this, FlashMessagesList);
	
	    return _possibleConstructorReturn(this, (FlashMessagesList.__proto__ || Object.getPrototypeOf(FlashMessagesList)).apply(this, arguments));
	  }
	
	  _createClass(FlashMessagesList, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;
	
	      var messages = this.props.messages.map(function (message) {
	        return _react2.default.createElement(_FlashMessage2.default, { key: message.id, message: message, deleteFlashMessage: _this2.props.deleteFlashMessage });
	      });
	      return _react2.default.createElement('div', null, messages);
	    }
	  }]);
	
	  return FlashMessagesList;
	}(_react2.default.Component);
	
	FlashMessagesList.propTypes = {
	  messages: _react2.default.PropTypes.array.isRequired,
	  deleteFlashMessage: _react2.default.PropTypes.func.isRequired
	};
	
	function mapStateToProps(state) {
	  return {
	    messages: state.flashMessages
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps, { deleteFlashMessage: _FlashMessages.deleteFlashMessage })(FlashMessagesList);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js');
	
	  __REACT_HOT_LOADER__.register(FlashMessagesList, 'FlashMessagesList', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_FlashMessage2, "_FlashMessage2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(FlashMessagesList, "FlashMessagesList", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessagesList.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2VzTGlzdC5qcz8wNjg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTs7Ozs7Ozs7Ozs7OEJBQ0k7b0JBQ047O1dBQU0sZ0JBQWdCLE1BQU0sU0FBUyxJQUFJO2dCQUN2Qyx3REFBYyxLQUFLLFFBQVEsSUFBSSxTQUFTLFNBQVMsb0JBQW9CLE9BQUssTUFBTTtBQUVsRixRQUhpQjtjQUlmLHFDQUNDLE1BR0o7Ozs7O0dBVjZCLGdCQUFNOztBQWF0QyxtQkFBa0I7YUFDTixnQkFBTSxVQUFVLE1BQzFCO3VCQUFvQixnQkFBTSxVQUFVLEtBQUs7QUFEekM7O0FBSUYsVUFBUyxnQkFBZ0IsT0FDdkI7O2VBQ1ksTUFFYjtBQUZHOzs7Z0JBSVcseUJBQVEsaUJBQWlCLEVBQUMsbUNBQUQsc0JBQXNCOzs7Ozs7Ozs7O2lDQU5yRDs7aUNBbEJIIiwiZmlsZSI6IjAuNmQyMjVmMmNmZGM1MGI3YTgzY2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuL0ZsYXNoTWVzc2FnZS5qcyc7XHJcbmltcG9ydCB7ZGVsZXRlRmxhc2hNZXNzYWdlfSBmcm9tICcuLi9hY3Rpb25zL0ZsYXNoTWVzc2FnZXMuanMnXHJcblxyXG5jbGFzcyBGbGFzaE1lc3NhZ2VzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCBtZXNzYWdlcyA9IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKG1lc3NhZ2UgPT5cclxuICAgICAgPEZsYXNoTWVzc2FnZSBrZXk9e21lc3NhZ2UuaWR9IG1lc3NhZ2U9e21lc3NhZ2V9IGRlbGV0ZUZsYXNoTWVzc2FnZT17dGhpcy5wcm9wcy5kZWxldGVGbGFzaE1lc3NhZ2V9Lz5cclxuICAgICk7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgIHttZXNzYWdlc31cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5GbGFzaE1lc3NhZ2VzTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgbWVzc2FnZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxyXG4gIGRlbGV0ZUZsYXNoTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZFxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIHJldHVybntcclxuICAgIG1lc3NhZ2VzOiBzdGF0ZS5mbGFzaE1lc3NhZ2VzXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywge2RlbGV0ZUZsYXNoTWVzc2FnZX0pKEZsYXNoTWVzc2FnZXNMaXN0KTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvRmxhc2hNZXNzYWdlc0xpc3QuanMiXSwic291cmNlUm9vdCI6IiJ9