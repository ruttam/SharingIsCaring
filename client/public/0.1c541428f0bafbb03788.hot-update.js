webpackHotUpdate(0,{

/***/ 655:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.registrationRequest = registrationRequest;
	exports.isEmailExists = isEmailExists;
	
	var _axios = __webpack_require__(447);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _superagent = __webpack_require__(670);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function registrationRequest(userData) {
	  return function () {
	    return _superagent2.default.post('http://localhost:5000/api/user').send({ user: userData }).accept('application/json').type('application/json').end(function (err, res) {
	      console.log(res);
	      console.log(err);
	      return { res: res, err: err };
	    });
	  };
	
	  // return dispatch => {
	  //   return axios.post('http://localhost:5000/api/user', userData);
	  // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUdnQjtTQW9CQTs7QUF2QmhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sVUFBUyxvQkFBb0IsVUFDbEM7VUFBTyxZQUNMO2lDQUNPLEtBQUssa0NBQ0wsS0FBSyxFQUFDLE1BQU0sWUFDWixPQUFPLG9CQUNQLEtBQUssb0JBQ0wsSUFBSSxVQUFTLEtBQUssS0FDZjtlQUFRLElBQ1I7ZUFBUSxJQUNSO2NBQU8sRUFBQyxLQUFELEtBQU0sS0FDeEI7QUFDRixNQVZVO0FBYVQ7O0FBQ0E7QUFDQTtBQUNEOzs7QUFFTSxVQUFTLGNBQWMsT0FDNUI7VUFBTyxvQkFDTDtZQUFPLGdCQUFNLHdDQUNkO0FBQ0Y7Ozs7Ozs7OztpQ0F4QmU7O2lDQW9CQSIsImZpbGUiOiIwLjFjNTQxNDI4ZjBiYWZiYjAzNzg4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RyYXRpb25SZXF1ZXN0KHVzZXJEYXRhKXtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHJlcXVlc3RcclxuICAgICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInKVxyXG4gICAgICAgICAgLnNlbmQoe3VzZXI6IHVzZXJEYXRhfSlcclxuICAgICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgICAgLnR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgICAgLmVuZChmdW5jdGlvbihlcnIsIHJlcyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB7cmVzLCBlcnJ9O1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuICAvLyByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gIC8vICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcicsIHVzZXJEYXRhKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsRXhpc3RzKGVtYWlsKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyLyR7ZW1haWx9YCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL1JlZ2lzdHJhdGlvbkFjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9