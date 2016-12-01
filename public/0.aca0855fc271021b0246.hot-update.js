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
	    return _axios2.default.post('http://localhost:5000/api/user', userData);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzP2RmODMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztTQUdnQjtTQWlCQTs7QUFwQmhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRU8sVUFBUyxvQkFBb0IsVUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0U7OztVQUFPLG9CQUNMO1lBQU8sZ0JBQU0sS0FBSyxrQ0FDbkI7QUFDRjs7O0FBRU0sVUFBUyxjQUFjLE9BQzVCO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSx3Q0FDZDtBQUNGOzs7Ozs7Ozs7aUNBckJlOztpQ0FpQkEiLCJmaWxlIjoiMC5hY2EwODU1ZmMyNzEwMjFiMDI0Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAnc3VwZXJhZ2VudCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVnaXN0cmF0aW9uUmVxdWVzdCh1c2VyRGF0YSl7XHJcbi8vICAgcmV0dXJuICgpID0+IHtcclxuLy8gICAgIHJldHVybiByZXF1ZXN0XHJcbi8vICAgICAgICAgICAucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyJylcclxuLy8gICAgICAgICAgIC5lbmQoZnVuY3Rpb24oZXJyLCByZXMpe1xyXG4vLyAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbi8vICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuLy8gICAgICAgICAgICAgICByZXR1cm4ge3JlcywgZXJyfTtcclxuLy8gICB9KTtcclxuLy8gfVxyXG5cclxuXHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInLCB1c2VyRGF0YSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFbWFpbEV4aXN0cyhlbWFpbCl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci8ke2VtYWlsfWApO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9SZWdpc3RyYXRpb25BY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==