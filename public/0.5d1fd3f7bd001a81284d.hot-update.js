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
	    case 'USER_INFO_RECEIVED':
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BdXRoLmpzPzUwNzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNO29CQUVKO1NBQU07QUFETjs7Z0JBSWEsb0JBQTZCO09BQUE7T0FBQSw2RUFDMUM7O1dBQVEsSUFDUjtXQUFRLE9BQ047aUJBQ0U7V0FBTSxXQUFXLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBQyxlQUFlLE9BQU8sTUFBTSxpQkFBaUIsQ0FBQyx1QkFBUSxPQUNqRztjQUNBO1VBQ0U7V0FBTSxlQUFlLE9BQU8sT0FBTyxJQUFJLE9BQU8sRUFBQyxhQUFhLE9BQU8sYUFBYSxpQkFBaUIsQ0FBQyx1QkFBUSxPQUMxRztlQUFRLElBQUksWUFDWjtjQUNKO0FBQVM7Y0FHWjs7Ozs7Ozs7Ozs7OztpQ0FsQksiLCJmaWxlIjoiMC41ZDFmZDNmN2JkMDAxYTgxMjg0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTRVRfQ1VSUkVOVF9VU0VSLCBVU0VSX0lORk9fUkVDRUlWRUR9IGZyb20gJy4uL2FjdGlvbnMvVHlwZXMuanMnO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XHJcblxyXG5jb25zdCBzdGF0ZSA9IHtcclxuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gIHVzZXI6IHt9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoc3RhdGUgPSB7fSwgYWN0aW9uID0ge30pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgU0VUX0NVUlJFTlRfVVNFUjpcclxuICAgICAgY29uc3QgbmV3U3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge2N1cnJlbnRVc2VySWQ6IGFjdGlvbi51c2VyLCBpc0F1dGhlbnRpY2F0ZWQ6ICFpc0VtcHR5KGFjdGlvbi51c2VyKX0pO1xyXG4gICAgICByZXR1cm4gbmV3U3RhdGU7XHJcbiAgICAgIGNhc2UgJ1VTRVJfSU5GT19SRUNFSVZFRCc6XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZFN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHt1c2VyUHJvZmlsZTogYWN0aW9uLnVzZXJQcm9maWxlLCBpc0F1dGhlbnRpY2F0ZWQ6ICFpc0VtcHR5KGFjdGlvbi51c2VyKX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhY3Rpb246ICcsIGFjdGlvbik7XHJcbiAgICAgICAgcmV0dXJuIHVwZGF0ZWRTdGF0ZTtcclxuICAgIGRlZmF1bHQ6IHJldHVybiBzdGF0ZTtcclxuXHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0F1dGguanMiXSwic291cmNlUm9vdCI6IiJ9