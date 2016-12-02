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
	
	  switch (action.type) {
	    case _Types.SET_CURRENT_USER:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzPzUwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNO29CQUVKO1NBQU07QUFETjs7Z0JBSWEsb0JBQXVDO09BQUE7T0FBQSw2RUFDcEQ7O1dBQVEsT0FDTjtpQkFDRTtlQUFRLElBQ1I7OzBCQUNtQixDQUFDLHVCQUFRLE9BQzFCO2VBQU0sT0FFVjtBQUhJO0FBR0s7Y0FHWjs7Ozs7Ozs7Ozs7OztpQ0FoQksiLCJmaWxlIjoiMC5lMjE2YWJiNGMxNTg3NDUwNGUyZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTRVRfQ1VSUkVOVF9VU0VSfSBmcm9tICcuLi9hY3Rpb25zL1R5cGVzLmpzJztcclxuaW1wb3J0IGlzRW1wdHkgZnJvbSAnbG9kYXNoL2lzRW1wdHknO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgdXNlcjoge31cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uID0ge30pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DVVJSRU5UX1VTRVI6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiAhaXNFbXB0eShhY3Rpb24udXNlciksXHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnVzZXJcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9