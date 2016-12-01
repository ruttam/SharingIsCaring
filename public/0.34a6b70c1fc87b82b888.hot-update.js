webpackHotUpdate(0,{

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.registrationRequest = registrationRequest;
	exports.isEmailExists = isEmailExists;
	
	var _axios = __webpack_require__(447);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _superagent = __webpack_require__(676);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function registrationRequest(userData) {
	  //   return () => {
	  //     return request
	  //           .post('http://localhost:5000/api/user')
	  //           .end(function(err, res){
	  //               console.log(res);
	  //               console.log(err);
	  //               return {res, err};
	  //   });
	  // }
	
	
	  return function (dispatch) {
	    return _axios2.default.get('http://localhost:5000/api/user');
	  };
	}
	
	function isEmailExists(email) {
	  return function (dispatch) {
	    return _axios2.default.get('http://localhost:5000/api/user/' + email);
	  };
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(registrationRequest, 'registrationRequest', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');
	
	  __REACT_HOT_LOADER__.register(isEmailExists, 'isEmailExists', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_axios2, '_axios2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(_superagent2, '_superagent2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(registrationRequest, 'registrationRequest', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(isEmailExists, 'isEmailExists', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUdnQjtTQWlCQTs7QUFwQmhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sVUFBUyxvQkFBb0IsVUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0U7OztVQUFPLG9CQUNMO1lBQU8sZ0JBQU0sSUFDZDtBQUNGOzs7QUFFTSxVQUFTLGNBQWMsT0FDNUI7VUFBTyxvQkFDTDtZQUFPLGdCQUFNLHdDQUNkO0FBQ0Y7Ozs7Ozs7OztpQ0FyQmU7O2lDQWlCQSIsImZpbGUiOiIwLjM0YTZiNzBjMWZjODdiODJiODg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RyYXRpb25SZXF1ZXN0KHVzZXJEYXRhKXtcclxuLy8gICByZXR1cm4gKCkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIHJlcXVlc3RcclxuLy8gICAgICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInKVxyXG4vLyAgICAgICAgICAgLmVuZChmdW5jdGlvbihlcnIsIHJlcyl7XHJcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuLy8gICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4vLyAgICAgICAgICAgICAgIHJldHVybiB7cmVzLCBlcnJ9O1xyXG4vLyAgIH0pO1xyXG4vLyB9XHJcblxyXG5cclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJyk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbEV4aXN0cyhlbWFpbCl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci8ke2VtYWlsfWApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==