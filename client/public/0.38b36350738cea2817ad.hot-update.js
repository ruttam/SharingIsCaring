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
	            return _react2.default.createElement('div', { id: 'wrapper' }, '// Sidebar', _react2.default.createElement('div', { id: 'sidebar-wrapper' }, _react2.default.createElement('ul', { className: 'sidebar-nav' }, _react2.default.createElement('li', { className: 'sidebar-brand' }, _react2.default.createElement('a', { href: '#' }, 'Start Bootstrap')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Dashboard')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Trips')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Trips')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Add Trip')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Profile')))), '// /#sidebar-wrapper // Page Content', _react2.default.createElement('div', { id: 'page-content-wrapper' }, _react2.default.createElement('div', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-lg-12' }, _react2.default.createElement('div', { className: 'col-lg-6' }, _react2.default.createElement('div', { style: divStyle }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_ProfilePicture2.default, null)))), _react2.default.createElement('a', { href: '#menu-toggle', className: 'btn btn-default', id: 'menu-toggle' }, 'Toggle Menu'))))), '//s /#page-content-wrapper -->');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLmpzPzI0NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU07ZUFFSjtVQUNBO1dBQU07QUFGTjs7S0FLSTs7Ozs7Ozs7Ozs7a0NBRUs7aUJBQ0Esa0JBQW1CLEtBQUssTUFBTSxLQUNyQzs7aUJBQU0sWUFDSixzQ0FBSSxXQUNGLHdEQUFJLDJDQUFHLE1BQUssT0FHaEI7b0JBQ0UsdUNBQUssSUFBRyxhQUdOLHFEQUFLLElBQ0QsMkRBQUksV0FDQSx1REFBSSxXQUNBLHdEQUFHLE1BQUssT0FJWix5REFDSSwyQ0FBRyxNQUFLLE9BRVosbURBQ0ksMkNBQUcsTUFBSyxPQUVaLCtDQUNJLDJDQUFHLE1BQUssT0FFWixrREFDSSwyQ0FBRyxNQUFLLE9BRVosa0RBQ0ksMkNBQUcsTUFBSyxPQUFSLGtCQU9aLCtFQUFLLElBQ0QsaUVBQUssV0FDRCw0REFBSyxXQUNELGdEQUFLLFdBQ0wsc0RBQUssV0FDSCxxREFBSyxPQUNMLG1EQUFLLFdBQ0gsaUVBSUEsK0NBQUcsTUFBSyxnQkFBZSxXQUFVLG1CQUFrQixJQUFHLGlCQUF0RCxvQkFRckI7Ozs7O0dBM0RtQixnQkFBTTs7QUE4RDVCLFNBQVE7V0FDQSxnQkFBTSxVQUFVLE9BQU87QUFBN0I7O0FBR0YsVUFBUyxnQkFBZ0IsT0FDdkI7O2VBQ1EsTUFFVDtBQUZHOzs7QUFJSixVQUFTLG1CQUFtQixVQUMxQjs7a0JBQ1csbUJBQW1CLGNBQzVCO3dCQUFlLG1CQUFtQixFQUFDLFdBQUQsYUFFckM7QUFIRzs7O2dCQUtXLHlCQUFRLGlCQUFpQjs7Ozs7Ozs7OzttQ0FiL0I7O21DQU1BOzttQ0E5RUg7O21DQU1BIiwiZmlsZSI6IjAuMzhiMzYzNTA3MzhjZWEyODE3YWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSAnLi9Qcm9maWxlUGljdHVyZS5qcyc7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gIHRvcDogXCIzMCVcIixcclxuICBsZWZ0OiBcIjMwJVwiXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHRoaXMucHJvcHMuYXV0aDtcclxuICAgIGNvbnN0IHVzZXJMaW5rcyA9IChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG5cclxuICAgICAgICAvLyBTaWRlYmFyXHJcbiAgICAgICAgPGRpdiBpZD1cInNpZGViYXItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2lkZWJhci1uYXZcIj5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzaWRlYmFyLWJyYW5kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU3RhcnQgQm9vdHN0cmFwXHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPkRhc2hib2FyZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5UcmlwczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBUcmlwczwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5BZGQgVHJpcDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvLyAvI3NpZGViYXItd3JhcHBlclxyXG5cclxuICAgICAgICAvLyBQYWdlIENvbnRlbnRcclxuICAgICAgICA8ZGl2IGlkPVwicGFnZS1jb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtkaXZTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZVBpY3R1cmUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNtZW51LXRvZ2dsZVwiIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdFwiIGlkPVwibWVudS10b2dnbGVcIj5Ub2dnbGUgTWVudTwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICAvL3MgLyNwYWdlLWNvbnRlbnQtd3JhcHBlciAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5Qcm9maWxlLnByb3BUeXBlcyA9IHtcclxuICBhdXRoOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKXtcclxuICByZXR1cm4ge1xyXG4gICAgYXV0aDogc3RhdGUuYXV0aFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBhY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoTG9naW5BY3Rpb25zLCBkaXNwYXRjaCksXHJcbiAgICByb3V0ZXJBY3Rpb25zOiBiaW5kQWN0aW9uQ3JlYXRvcnMoe3B1c2hTdGF0ZX0sIGRpc3BhdGNoKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2ZpbGUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==