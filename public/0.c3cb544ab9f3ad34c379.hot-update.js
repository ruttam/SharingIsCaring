webpackHotUpdate(0,{

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.registrationRequest = registrationRequest;
	exports.isUserExists = isUserExists;
	
	var _axios = __webpack_require__(321);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function registrationRequest(userData) {
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user', userData);
	  };
	}
	
	function isUserExists(identifier) {
	  return function (dispatch) {
	    return _axios2.default.get('http://localhost:5000/api/user/' + identifier);
	  };
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(registrationRequest, 'registrationRequest', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');
	
	  __REACT_HOT_LOADER__.register(isUserExists, 'isUserExists', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_axios2, '_axios2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(registrationRequest, 'registrationRequest', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(isUserExists, 'isUserExists', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUVnQjtTQU1BOztBQVJoQjs7Ozs7Ozs7QUFFTyxVQUFTLG9CQUFvQixVQUNsQztVQUFPLG9CQUNMO1lBQU8sZ0JBQU0sS0FBSyxrQ0FDbkI7QUFDRjs7O0FBRU0sVUFBUyxhQUFhLFlBQzNCO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSx3Q0FDZDtBQUNGOzs7Ozs7Ozs7aUNBVmU7O2lDQU1BIiwiZmlsZSI6IjAuYzNjYjU0NGFiOWYzYWQzNGMzNzkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUmVxdWVzdCh1c2VyRGF0YSl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInLCB1c2VyRGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyRXhpc3RzKGlkZW50aWZpZXIpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvJHtpZGVudGlmaWVyfWApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==