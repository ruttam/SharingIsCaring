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
	            console.log(this);
	            var isAuthenticated = this.props.auth.isAuthenticated;
	
	            var userLinks = _react2.default.createElement('ul', { className: 'nav navbar-nav' }, _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Logout')));
	            return _react2.default.createElement('div', { id: 'wrapper' }, _react2.default.createElement('div', { id: 'sidebar-wrapper' }, _react2.default.createElement('ul', { className: 'sidebar-nav' }, _react2.default.createElement('li', { className: 'sidebar-brand' }, _react2.default.createElement('a', { href: '#' }, "Va\u017Eiuoju-Ve\u017Eu")), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Profile')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'My Trips')), _react2.default.createElement('li', null, _react2.default.createElement('a', { href: '#' }, 'Trips')))), _react2.default.createElement('div', { id: 'page-content-wrapper' }, _react2.default.createElement('div', { className: 'container-fluid' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'col-lg-12' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement(_ProfilePicture2.default, null), _react2.default.createElement(_ProfileInfo2.default, null)))))));
	        }
	    }]);
	
	    return Profile;
	}(_react2.default.Component);
	
	Profile.propTypes = {
	    auth: _react2.default.PropTypes.object
	};
	
	function mapStateToProps(state) {
	    return {
	        auth: state.auth
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

	    __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");

	    __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Profile.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLmpzPzI0NWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtlQUVKO1VBQ0E7V0FBTTtBQUZOOztLQUtJOzs7Ozs7Ozs7OztrQ0FFRjtxQkFBUSxJQUFJO2lCQUNMLGtCQUFtQixLQUFLLE1BQU0sS0FDckM7O2lCQUFNLFlBQ0osc0NBQUksV0FDRix3REFBSSwyQ0FBRyxNQUFLLE9BR2hCO29CQUNFLHVDQUFLLElBQ0gsb0RBQUssSUFDRCwyREFBSSxXQUNBLHVEQUFJLFdBQ0Esd0RBQUcsTUFBSyxPQUlaLGlFQUNJLDJDQUFHLE1BQUssT0FFWixvREFDSSwyQ0FBRyxNQUFLLE9BRVosa0RBQ0ksMkNBQUcsTUFBSyxPQUtwQixvREFBSyxJQUNELGlFQUFLLFdBQ0QsNERBQUssV0FDRCxnREFBSyxXQUdILHNEQUFLLFdBQ0gsaUVBQ0EsNERBVXJCOzs7OztHQWhEbUIsZ0JBQU07O0FBbUQ1QixTQUFRO1dBQ0EsZ0JBQU0sVUFBVTtBQUF0Qjs7QUFHRixVQUFTLGdCQUFnQixPQUN2Qjs7ZUFDUSxNQUVUO0FBRkc7OztnQkFJVyx5QkFBUSxpQkFBaUI7Ozs7Ozs7Ozs7bUNBTi9COzttQ0E3REg7O21DQU1BIiwiZmlsZSI6IjAuNzBkODZiNjYxY2UxM2ZhOWE3NzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgUHJvZmlsZVBpY3R1cmUgZnJvbSAnLi9Qcm9maWxlUGljdHVyZS5qcyc7XHJcbmltcG9ydCBQcm9maWxlSW5mbyBmcm9tICcuL1Byb2ZpbGVJbmZvLmpzJztcclxuXHJcbmNvbnN0IGRpdlN0eWxlID0ge1xyXG4gIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgdG9wOiBcIjMwJVwiLFxyXG4gIGxlZnQ6IFwiMzAlXCJcclxufVxyXG5cclxuY2xhc3MgUHJvZmlsZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICBjb25zdCB7aXNBdXRoZW50aWNhdGVkfSA9IHRoaXMucHJvcHMuYXV0aDtcclxuICAgIGNvbnN0IHVzZXJMaW5rcyA9IChcclxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXZiYXItbmF2XCI+XHJcbiAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+TG9nb3V0PC9hPjwvbGk+XHJcbiAgICAgICAgPC91bD5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgaWQ9XCJzaWRlYmFyLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNpZGViYXItbmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic2lkZWJhci1icmFuZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFZhxb5pdW9qdS1WZcW+dVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5NeSBQcm9maWxlPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPk15IFRyaXBzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlRyaXBzPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBpZD1cInBhZ2UtY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTEyXCI+XHJcblxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9maWxlUGljdHVyZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvZmlsZUluZm8gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuUHJvZmlsZS5wcm9wVHlwZXMgPSB7XHJcbiAgYXV0aDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdFxyXG59XHJcblxyXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpe1xyXG4gIHJldHVybiB7XHJcbiAgICBhdXRoOiBzdGF0ZS5hdXRoXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMpKFByb2ZpbGUpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==