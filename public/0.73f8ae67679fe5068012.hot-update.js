webpackHotUpdate(0,{

/***/ 696:
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
	
	var _reactRedux = __webpack_require__(318);
	
	var _ProfilePicture = __webpack_require__(697);
	
	var _ProfilePicture2 = _interopRequireDefault(_ProfilePicture);
	
	var _ProfileInfo = __webpack_require__(698);
	
	var _ProfileInfo2 = _interopRequireDefault(_ProfileInfo);
	
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
	  top: "30%",
	  left: "30%"
	};
	
	var Profile = function (_React$Component) {
	  _inherits(Profile, _React$Component);
	
	  function Profile() {
	    _classCallCheck(this, Profile);
	
	    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
	  }
	
	  _createClass(Profile, [{
	    key: 'render',
	    value: function render() {
	      var isAuthenticated = this.props.auth.isAuthenticated;
	
	      var userLinks = _react2.default.createElement('ul', { className: 'nav navbar-nav' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Logout')));
	      return _react2.default.createElement('div', { id: 'wrapper' }, _react2.default.createElement('div', { id: 'sidebar-wrapper' }, _react2.default.createElement('ul', { className: 'sidebar-nav' }, _react2.default.createElement('li', { className: 'sidebar-brand' }, _react2.default.createElement('a', { href: '#' }, "Va\u017Eiuoju-Ve\u017Eu")), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Profile')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Trips')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Trips')))), _react2.default.createElement('div', { id: 'page-content-wrapper' }, _react2.default.createElement('div', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-lg-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_ProfilePicture2.default, null), _react2.default.createElement(_ProfileInfo2.default, null)))))));
	    }
	  }]);
	
	  return Profile;
	}(_react2.default.Component);
	
	Profile.propTypes = {
	  auth: _react2.default.PropTypes.object.isRequired
	};
	
	function mapStateToProps(state) {
	  return {
	    auth: state.auth
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    actions: bindActionCreators(LoginActions, dispatch),
	    routerActions: bindActionCreators({ pushState: pushState }, dispatch)
	  };
	}
	
	var _default = (0, _reactRedux.connect)(mapStateToProps)(Profile);
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	  __REACT_HOT_LOADER__.register(Profile, 'Profile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_ProfilePicture2, "_ProfilePicture2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_ProfileInfo2, "_ProfileInfo2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(Profile, "Profile", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(mapStateToProps, "mapStateToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(mapDispatchToProps, "mapDispatchToProps", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLmpzPzI0NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTthQUVKO1FBQ0E7U0FBTTtBQUZOOztLQUtJOzs7Ozs7Ozs7Ozs4QkFFSztXQUNBLGtCQUFtQixLQUFLLE1BQU0sS0FDckM7O1dBQU0sWUFDSixzQ0FBSSxXQUNGLHdEQUFJLDJDQUFHLE1BQUssT0FHaEI7Y0FDRSx1Q0FBSyxJQUNILG9EQUFLLElBQ0QsMkRBQUksV0FDQSx1REFBSSxXQUNBLHdEQUFHLE1BQUssT0FJWixpRUFDSSwyQ0FBRyxNQUFLLE9BRVosb0RBQ0ksMkNBQUcsTUFBSyxPQUVaLGtEQUNJLDJDQUFHLE1BQUssT0FLcEIsb0RBQUssSUFDRCxpRUFBSyxXQUNELDREQUFLLFdBQ0QsZ0RBQUssV0FHSCxzREFBSyxXQUNILGlFQUNBLDREQVVyQjs7Ozs7R0FoRG1CLGdCQUFNOztBQW1ENUIsU0FBUTtTQUNBLGdCQUFNLFVBQVUsT0FBTztBQUE3Qjs7QUFHRixVQUFTLGdCQUFnQixPQUN2Qjs7V0FDUSxNQUVUO0FBRkc7OztBQUlKLFVBQVMsbUJBQW1CLFVBQzFCOztjQUNXLG1CQUFtQixjQUM1QjtvQkFBZSxtQkFBbUIsRUFBQyxXQUFELGFBRXJDO0FBSEc7OztnQkFLVyx5QkFBUSxpQkFBaUI7Ozs7Ozs7Ozs7aUNBYi9COztpQ0FNQTs7aUNBbkVIOztpQ0FNQSIsImZpbGUiOiIwLjczZjhhZTY3Njc5ZmU1MDY4MDEyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFByb2ZpbGVQaWN0dXJlIGZyb20gJy4vUHJvZmlsZVBpY3R1cmUuanMnO1xyXG5pbXBvcnQgUHJvZmlsZUluZm8gZnJvbSAnLi9Qcm9maWxlSW5mby5qcyc7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHRvcDogXCIzMCVcIixcclxuICBsZWZ0OiBcIjMwJVwiXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHRoaXMucHJvcHMuYXV0aDtcclxuICAgIGNvbnN0IHVzZXJMaW5rcyA9IChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhxb5pdW9qdS1WZcW+dVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk15IFRyaXBzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlRyaXBzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlUGljdHVyZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUluZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUHJvZmlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgYXV0aDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSl7XHJcbiAgcmV0dXJuIHtcclxuICAgIGF1dGg6IHN0YXRlLmF1dGhcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcclxuICByZXR1cm4ge1xyXG4gICAgYWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKExvZ2luQWN0aW9ucywgZGlzcGF0Y2gpLFxyXG4gICAgcm91dGVyQWN0aW9uczogYmluZEFjdGlvbkNyZWF0b3JzKHtwdXNoU3RhdGV9LCBkaXNwYXRjaClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzKShQcm9maWxlKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS5qcyJdLCJzb3VyY2VSb290IjoiIn0=