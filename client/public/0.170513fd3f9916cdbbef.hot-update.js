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
	    return _superagent2.default.post('http://localhost:5000/api/user').send({ user: userData }).accept('application/json').type('text/x-foo').withCredentials('application/json').end(function (err, res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUdnQjtTQXFCQTs7QUF4QmhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sVUFBUyxvQkFBb0IsVUFDbEM7VUFBTyxZQUNMO2lDQUNPLEtBQUssa0NBQ0wsS0FBSyxFQUFDLE1BQU0sWUFDWixPQUFPLG9CQUNQLEtBQUssY0FDTCxnQkFBZ0Isb0JBQ2hCLElBQUksVUFBUyxLQUFLLEtBQ2Y7ZUFBUSxJQUNSO2VBQVEsSUFDUjtjQUFPLEVBQUMsS0FBRCxLQUFNLEtBQ3hCO0FBQ0YsTUFYVTtBQWNUOztBQUNBO0FBQ0E7QUFDRDs7O0FBRU0sVUFBUyxjQUFjLE9BQzVCO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSx3Q0FDZDtBQUNGOzs7Ozs7Ozs7aUNBekJlOztpQ0FxQkEiLCJmaWxlIjoiMC4xNzA1MTNmZDNmOTkxNmNkYmJlZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUmVxdWVzdCh1c2VyRGF0YSl7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0XHJcbiAgICAgICAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJylcclxuICAgICAgICAgIC5zZW5kKHt1c2VyOiB1c2VyRGF0YX0pXHJcbiAgICAgICAgICAuYWNjZXB0KCdhcHBsaWNhdGlvbi9qc29uJylcclxuICAgICAgICAgIC50eXBlKCd0ZXh0L3gtZm9vJylcclxuICAgICAgICAgIC53aXRoQ3JlZGVudGlhbHMoJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgICAgLmVuZChmdW5jdGlvbihlcnIsIHJlcyl7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgIHJldHVybiB7cmVzLCBlcnJ9O1xyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuICAvLyByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gIC8vICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcicsIHVzZXJEYXRhKTtcclxuICAvLyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VtYWlsRXhpc3RzKGVtYWlsKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyLyR7ZW1haWx9YCk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL1JlZ2lzdHJhdGlvbkFjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9