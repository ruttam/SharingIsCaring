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
	      var messages = this.props.message.map(function (message) {
	        return _react2.default.createElement(_FlashMessage2.default, { key: message.id, message: message });
	      });
	      return _react2.default.createElement('div', { className: 'alert .alert-success' }, messages);
	    }
	  }]);
	
	  return FlashMessagesList;
	}(_react2.default.Component);
	
	FlashMessagesList.propTypes = {
	  messages: _react2.default.PropTypes.array.isRequired
	};
	
	function mapStateToProps(state) {
	  return {
	    messages: state.flashMessages
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(FlashMessagesList);
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2VzTGlzdC5qcz8wNjg2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FFTTs7Ozs7Ozs7Ozs7OEJBRUY7V0FBTSxnQkFBZ0IsTUFBTSxRQUFRLElBQUk7Z0JBQ3RDLHdEQUFjLEtBQUssUUFBUSxJQUFJLFNBQVM7QUFFMUMsUUFIaUI7Y0FJZix1Q0FBSyxXQUNKLDBCQUdKOzs7OztHQVY2QixnQkFBTTs7QUFhdEMsbUJBQWtCO2FBQ04sZ0JBQU0sVUFBVSxNQUFNO0FBQWhDOztBQUdGLFVBQVMsZ0JBQWdCLE9BQ3ZCOztlQUNZLE1BRWI7QUFGRzs7O2dCQUlXLHlCQUFRLGlCQUFpQjs7Ozs7Ozs7OztpQ0FOL0I7O2lDQWpCSCIsImZpbGUiOiIwLmU1YjcwZmEwY2IzZDMxZTUzMGQ0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IEZsYXNoTWVzc2FnZSBmcm9tICcuL0ZsYXNoTWVzc2FnZS5qcydcclxuXHJcbmNsYXNzIEZsYXNoTWVzc2FnZXNMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IG1lc3NhZ2VzID0gdGhpcy5wcm9wcy5tZXNzYWdlLm1hcChtZXNzYWdlID0+XHJcbiAgICAgIDxGbGFzaE1lc3NhZ2Uga2V5PXttZXNzYWdlLmlkfSBtZXNzYWdlPXttZXNzYWdlfS8+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IC5hbGVydC1zdWNjZXNzXCI+XHJcbiAgICAgIHttZXNzYWdlc31cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5GbGFzaE1lc3NhZ2VzTGlzdC5wcm9wVHlwZXMgPSB7XHJcbiAgbWVzc2FnZXM6IFJlYWN0LlByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgcmV0dXJue1xyXG4gICAgbWVzc2FnZXM6IHN0YXRlLmZsYXNoTWVzc2FnZXNcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShGbGFzaE1lc3NhZ2VzTGlzdCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZXNMaXN0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==