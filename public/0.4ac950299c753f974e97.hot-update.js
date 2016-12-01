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
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function registrationRequest(userData) {
	  return request.post('http://localhost:5000/api/user').send({ user: userData }).accept('application/json').withCredentials().end(function (err, res) {
	    if (err) throw err;
	    this.setState({ r: "Ok" });
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

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(registrationRequest, 'registrationRequest', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(isEmailExists, 'isEmailExists', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/RegistrationActions.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUVnQjtTQWlCQTs7QUFuQmhCOzs7Ozs7OztBQUVPLFVBQVMsb0JBQW9CLFVBQ2xDO2tCQUNTLEtBQUssa0NBQ0wsS0FBSyxFQUFDLE1BQU0sWUFDWixPQUFPLG9CQUNQLGtCQUNBLElBQUksVUFBUyxLQUFLLEtBQ2Y7U0FBRyxLQUFLLE1BQ047VUFBSyxTQUFTLEVBQUUsR0FDN0I7QUFHRCxJQVhPOztBQVlQO0FBQ0E7QUFDRDs7O0FBRU0sVUFBUyxjQUFjLE9BQzVCO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSx3Q0FDZDtBQUNGOzs7Ozs7Ozs7aUNBckJlOztpQ0FpQkEiLCJmaWxlIjoiMC40YWM5NTAyOTljNzUzZjk3NGU5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZWdpc3RyYXRpb25SZXF1ZXN0KHVzZXJEYXRhKXtcclxuICByZXR1cm4gcmVxdWVzdFxyXG4gICAgICAgICAgLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcicpXHJcbiAgICAgICAgICAuc2VuZCh7dXNlcjogdXNlckRhdGF9KVxyXG4gICAgICAgICAgLmFjY2VwdCgnYXBwbGljYXRpb24vanNvbicpXHJcbiAgICAgICAgICAud2l0aENyZWRlbnRpYWxzKClcclxuICAgICAgICAgIC5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xyXG4gICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHI6IFwiT2tcIiB9KTtcclxuICB9KTtcclxuXHJcblxyXG4gIC8vIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgLy8gICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJywgdXNlckRhdGEpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1haWxFeGlzdHMoZW1haWwpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvJHtlbWFpbH1gKTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvUmVnaXN0cmF0aW9uQWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=