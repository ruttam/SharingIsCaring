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
	      var newState = Object.assign({}, state, { currentUserId: action.user, isAuthenticated: !(0, _isEmpty2.default)(action.user) });
	      return newState;
	    case _Types.USER_INFO_RECEIVED:
	      var updatedState = Object.assign({}, state, { userProfile: action.userProfile, isAuthenticated: !(0, _isEmpty2.default)(action.user) });
	      console.log('action: ', action);
	      return updatedState;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzPzUwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNO29CQUVKO1NBQU07QUFETjs7Z0JBSWEsb0JBQTZCO09BQUE7T0FBQSw2RUFDMUM7O1dBQVEsSUFDUjtXQUFRLE9BQ047aUJBQ0U7V0FBTSxXQUFXLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBQyxlQUFlLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyx1QkFBUSxPQUNqRztjQUNBO2lCQUNFO1dBQU0sZUFBZSxPQUFPLE9BQU8sSUFBSSxPQUFPLEVBQUMsYUFBYSxPQUFPLGFBQWEsaUJBQWlCLENBQUMsdUJBQVEsT0FDMUc7ZUFBUSxJQUFJLFlBQ1o7Y0FDSjtBQUFTO2NBR1o7Ozs7Ozs7Ozs7Ozs7aUNBbEJLIiwiZmlsZSI6IjAuNGJlODZmMDZkOTliZDFiYTE3YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U0VUX0NVUlJFTlRfVVNFUiwgVVNFUl9JTkZPX1JFQ0VJVkVEfSBmcm9tICcuLi9hY3Rpb25zL1R5cGVzLmpzJztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xyXG5cclxuY29uc3Qgc3RhdGUgPSB7XHJcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICB1c2VyOiB7fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHN0YXRlID0ge30sIGFjdGlvbiA9IHt9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coYWN0aW9uKTtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6XHJcbiAgICAgIGNvbnN0IG5ld1N0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtjdXJyZW50VXNlcklkOiBhY3Rpb24udXNlciwgaXNBdXRoZW50aWNhdGVkOiAhaXNFbXB0eShhY3Rpb24udXNlcil9KTtcclxuICAgICAgcmV0dXJuIG5ld1N0YXRlO1xyXG4gICAgICBjYXNlIFVTRVJfSU5GT19SRUNFSVZFRDpcclxuICAgICAgICBjb25zdCB1cGRhdGVkU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge3VzZXJQcm9maWxlOiBhY3Rpb24udXNlclByb2ZpbGUsIGlzQXV0aGVudGljYXRlZDogIWlzRW1wdHkoYWN0aW9uLnVzZXIpfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2FjdGlvbjogJywgYWN0aW9uKTtcclxuICAgICAgICByZXR1cm4gdXBkYXRlZFN0YXRlO1xyXG4gICAgZGVmYXVsdDogcmV0dXJuIHN0YXRlO1xyXG5cclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvQXV0aC5qcyJdLCJzb3VyY2VSb290IjoiIn0=