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
	  return _superagent2.default.post('http://localhost:5000/api/user').send({ user: userData }).accept('application/json').withCredentials().end(function (err, res) {
	    console.log(res);
	    console.log(err);
	  });
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUdnQjtTQWlCQTs7QUFwQmhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sVUFBUyxvQkFBb0IsVUFDbEM7K0JBQ1MsS0FBSyxrQ0FDTCxLQUFLLEVBQUMsTUFBTSxZQUNaLE9BQU8sb0JBQ1Asa0JBQ0EsSUFBSSxVQUFTLEtBQUssS0FDZjthQUFRLElBQ1I7YUFBUSxJQUNuQjtBQUdELElBWE87O0FBWVA7QUFDQTtBQUNEOzs7QUFFTSxVQUFTLGNBQWMsT0FDNUI7VUFBTyxvQkFDTDtZQUFPLGdCQUFNLHdDQUNkO0FBQ0Y7Ozs7Ozs7OztpQ0FyQmU7O2lDQWlCQSIsImZpbGUiOiIwLjFmODgwOWJmZjNjOGQyZWE4ZTViLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgcmVxdWVzdCBmcm9tICdzdXBlcmFnZW50JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RyYXRpb25SZXF1ZXN0KHVzZXJEYXRhKXtcclxuICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcicpXHJcbiAgICAgICAgICAuc2VuZCh7dXNlcjogdXNlckRhdGF9KVxyXG4gICAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgICAud2l0aENyZWRlbnRpYWxzKClcclxuICAgICAgICAgIC5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgLy8gICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJywgdXNlckRhdGEpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxFeGlzdHMoZW1haWwpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvJHtlbWFpbH1gKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvUmVnaXN0cmF0aW9uQWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=