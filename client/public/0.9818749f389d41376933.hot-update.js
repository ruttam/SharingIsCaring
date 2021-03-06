webpackHotUpdate(0,{

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.facebookLogin = facebookLogin;
	
	var _axios = __webpack_require__(447);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _SetAuthorizationToken = __webpack_require__(472);
	
	var _SetAuthorizationToken2 = _interopRequireDefault(_SetAuthorizationToken);
	
	var _jsonwebtoken = __webpack_require__(473);
	
	var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
	
	var _Types = __webpack_require__(360);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function login(userData) {
	  var _this = this;
	
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user/login', userData).then(function (results) {
	      _this.context.router.push('/profileData');
	      console.log(results);
	      return {
	        type: _Types.SET_CURRENT_USER,
	        user: results.data.user_id
	      };
	    }, function (errors) {
	      _this.setState({ errors: errors.response.data.message });
	      console.log(_this.state.errors);
	    });
	  };
	}
	
	function facebookLogin(userData, profileData) {
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user/facebookLogin', { userData: userData, profileData: profileData });
	  };
	}
	
	// export function setCurrentUser(user){
	//   return(
	//     type: SET_CURRENT_USER,
	//     user
	//   );
	// }
	
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(login, 'login', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	
	  __REACT_HOT_LOADER__.register(facebookLogin, 'facebookLogin', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_axios2, '_axios2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_SetAuthorizationToken2, '_SetAuthorizationToken2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_jsonwebtoken2, '_jsonwebtoken2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(login, 'login', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(facebookLogin, 'facebookLogin', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7U0FLZ0I7U0FtQkE7O0FBeEJoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sVUFBUyxNQUFNLFVBQVM7ZUFDN0I7O1VBQU8sb0JBQ0w7NEJBQWEsS0FBSyx3Q0FBd0MsVUFBVSxLQUNsRSxVQUFDLFNBQ0M7YUFBSyxRQUFRLE9BQU8sS0FDcEI7ZUFBUSxJQUNSOztzQkFFRTtlQUFNLFFBQVEsS0FFakI7QUFIRztBQUxDLFFBU0wsVUFBQyxRQUNDO2FBQUssU0FBUyxFQUFDLFFBQVEsT0FBTyxTQUFTLEtBQ3ZDO2VBQVEsSUFBSSxNQUFLLE1BQ2xCO0FBRUo7QUFDRjs7O0FBRU0sVUFBUyxjQUFjLFVBQVUsYUFDdEM7VUFBTyxvQkFDTDtZQUFPLGdCQUFNLEtBQUssZ0RBQWdELEVBQUMsVUFBRCxVQUFXLGFBQzlFO0FBQ0Y7OztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O2lDQTlCZ0I7O2lDQW1CQSIsImZpbGUiOiIwLjk4MTg3NDlmMzg5ZDQxMzc2OTMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgc2V0QXV0aG9yaXphdGlvblRva2VuIGZyb20gJy4uL3V0aWxzL1NldEF1dGhvcml6YXRpb25Ub2tlbi5qcydcclxuaW1wb3J0IGp3dCBmcm9tICdqc29ud2VidG9rZW4nO1xyXG5pbXBvcnQge1NFVF9DVVJSRU5UX1VTRVJ9IGZyb20gJy4vVHlwZXMuanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4odXNlckRhdGEpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL2xvZ2luJywgdXNlckRhdGEpLnRoZW4oXHJcbiAgICAgIChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnJvdXRlci5wdXNoKCcvcHJvZmlsZURhdGEnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSLFxyXG4gICAgICAgICAgdXNlcjogcmVzdWx0cy5kYXRhLnVzZXJfaWRcclxuICAgICAgICB9O1xyXG4gICAgICB9LFxyXG4gICAgICAoZXJyb3JzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnJvcnMucmVzcG9uc2UuZGF0YS5tZXNzYWdlfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZS5lcnJvcnMpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZhY2Vib29rTG9naW4odXNlckRhdGEsIHByb2ZpbGVEYXRhKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9mYWNlYm9va0xvZ2luJywge3VzZXJEYXRhLCBwcm9maWxlRGF0YX0pO1xyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRVc2VyKHVzZXIpe1xyXG4vLyAgIHJldHVybihcclxuLy8gICAgIHR5cGU6IFNFVF9DVVJSRU5UX1VTRVIsXHJcbi8vICAgICB1c2VyXHJcbi8vICAgKTtcclxuLy8gfVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcyJdLCJzb3VyY2VSb290IjoiIn0=