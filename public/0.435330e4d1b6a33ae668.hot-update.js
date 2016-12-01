webpackHotUpdate(0,{

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Types = __webpack_require__(360);
	
	var _isEmpty = __webpack_require__(365);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var state = {
	  isAuthenticated: false,
	  user: {}
	};
	
	var _default = function _default() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  console.log(action);
	  switch (action.type) {
	    case _Types.SET_CURRENT_USER:
	      console.log('action.user: ', action.user);
	      var newState = Object.Assign({}, state, { user: action.user, isAuthenticated: !(0, _isEmpty2.default)(action.user) });
	      return newState;
	      console.log(action);
	      return {
	        isAuthenticated: !(0, _isEmpty2.default)(action.user),
	        user: action.user
	      };
	    default:
	      return state;
	
	  }
	};
	
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(state, 'state', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_isEmpty2, '_isEmpty2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(state, 'state', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_default, '_default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzPzUwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNO29CQUVKO1NBQU07QUFETjs7Z0JBSWEsb0JBQTZCO09BQUE7T0FBQSw2RUFDMUM7O1dBQVEsSUFDUjtXQUFRLE9BQ047aUJBQ0U7ZUFBUSxJQUFJLGlCQUFpQixPQUM3QjtXQUFNLFdBQVcsT0FBTyxPQUFPLElBQUksT0FBTyxFQUFDLE1BQU0sT0FBTyxNQUFNLGlCQUFpQixDQUFDLHVCQUFRLE9BQ3hGO2NBQ0E7ZUFBUSxJQUNSOzswQkFDbUIsQ0FBQyx1QkFBUSxPQUMxQjtlQUFNLE9BRVY7QUFISTtBQUdLO2NBR1o7Ozs7Ozs7Ozs7Ozs7aUNBcEJLIiwiZmlsZSI6IjAuNDM1MzMwZTRkMWI2YTMzYWU2NjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U0VUX0NVUlJFTlRfVVNFUn0gZnJvbSAnLi4vYWN0aW9ucy9UeXBlcy5qcyc7XHJcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcclxuXHJcbmNvbnN0IHN0YXRlID0ge1xyXG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgdXNlcjoge31cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IHt9LCBhY3Rpb24gPSB7fSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBTRVRfQ1VSUkVOVF9VU0VSOlxyXG4gICAgICBjb25zb2xlLmxvZygnYWN0aW9uLnVzZXI6ICcsIGFjdGlvbi51c2VyKTtcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuQXNzaWduKHt9LCBzdGF0ZSwge3VzZXI6IGFjdGlvbi51c2VyLCBpc0F1dGhlbnRpY2F0ZWQ6ICFpc0VtcHR5KGFjdGlvbi51c2VyKX0pO1xyXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhaXNFbXB0eShhY3Rpb24udXNlciksXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9