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
	    return _superagent2.default.post('http://localhost:5000/api/values').send({ user: userData }).accept('application/json').type('text/x-foo').withCredentials('application/json').end(function (err, res) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUdnQjtTQXFCQTs7QUF4QmhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sVUFBUyxvQkFBb0IsVUFDbEM7VUFBTyxZQUNMO2lDQUNPLEtBQUssb0NBQ0wsS0FBSyxFQUFDLE1BQU0sWUFDWixPQUFPLG9CQUNQLEtBQUssY0FDTCxnQkFBZ0Isb0JBQ2hCLElBQUksVUFBUyxLQUFLLEtBQ2Y7ZUFBUSxJQUNSO2VBQVEsSUFDUjtjQUFPLEVBQUMsS0FBRCxLQUFNLEtBQ3hCO0FBQ0YsTUFYVTtBQWNUOztBQUNBO0FBQ0E7QUFDRDs7O0FBRU0sVUFBUyxjQUFjLE9BQzVCO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSx3Q0FDZDtBQUNGOzs7Ozs7Ozs7aUNBekJlOztpQ0FxQkEiLCJmaWxlIjoiMC45YTllMDRhZjhiODM3NjYwOGYzZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUmVxdWVzdCh1c2VyRGF0YSl7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHJldHVybiByZXF1ZXN0XHJcbiAgICAgICAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS92YWx1ZXMnKVxyXG4gICAgICAgICAgLnNlbmQoe3VzZXI6IHVzZXJEYXRhfSlcclxuICAgICAgICAgIC5hY2NlcHQoJ2FwcGxpY2F0aW9uL2pzb24nKVxyXG4gICAgICAgICAgLnR5cGUoJ3RleHQveC1mb28nKVxyXG4gICAgICAgICAgLndpdGhDcmVkZW50aWFscygnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgICAuZW5kKGZ1bmN0aW9uKGVyciwgcmVzKXtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHtyZXMsIGVycn07XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG4gIC8vIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgLy8gICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJywgdXNlckRhdGEpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxFeGlzdHMoZW1haWwpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvJHtlbWFpbH1gKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvUmVnaXN0cmF0aW9uQWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=