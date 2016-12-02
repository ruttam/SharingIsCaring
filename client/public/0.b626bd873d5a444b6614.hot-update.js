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
	
	var initialState = {
	  isAuthenticated: false,
	  user: {}
	};
	
	var _default = function _default() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  console.log(action);
	  switch (action.type) {
	    case _Types.SET_CURRENT_USER:
	      console.log('action.user: ', action.user);
	      var newState = Object.Assign({}, initialData, { user: action.user, isAuthenticated: !(0, _isEmpty2.default)(action.user) });
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
	
	  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
	
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

	  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_default, '_default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Auth.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzPzUwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNO29CQUVKO1NBQU07QUFETjs7Z0JBSWEsb0JBQXVDO09BQUE7T0FBQSw2RUFDcEQ7O1dBQVEsSUFDUjtXQUFRLE9BQ047aUJBQ0U7ZUFBUSxJQUFJLGlCQUFpQixPQUM3QjtXQUFNLFdBQVcsT0FBTyxPQUFPLElBQUksYUFBYSxFQUFDLE1BQU0sT0FBTyxNQUFNLGlCQUFpQixDQUFDLHVCQUFRLE9BQzlGO2NBQ0E7ZUFBUSxJQUNSOzswQkFDbUIsQ0FBQyx1QkFBUSxPQUMxQjtlQUFNLE9BRVY7QUFISTtBQUdLO2NBR1o7Ozs7Ozs7Ozs7Ozs7aUNBcEJLIiwiZmlsZSI6IjAuYjYyNmJkODczZDVhNDQ0YjY2MTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U0VUX0NVUlJFTlRfVVNFUn0gZnJvbSAnLi4vYWN0aW9ucy9UeXBlcy5qcyc7XHJcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gIHVzZXI6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbiA9IHt9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6XHJcbiAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb24udXNlcjogJywgYWN0aW9uLnVzZXIpO1xyXG4gICAgICBjb25zdCBuZXdTdGF0ZSA9IE9iamVjdC5Bc3NpZ24oe30sIGluaXRpYWxEYXRhLCB7dXNlcjogYWN0aW9uLnVzZXIsIGlzQXV0aGVudGljYXRlZDogIWlzRW1wdHkoYWN0aW9uLnVzZXIpfSk7XHJcbiAgICAgIHJldHVybiBuZXdTdGF0ZTtcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpc0F1dGhlbnRpY2F0ZWQ6ICFpc0VtcHR5KGFjdGlvbi51c2VyKSxcclxuICAgICAgICB1c2VyOiBhY3Rpb24udXNlclxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG5cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=