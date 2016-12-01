webpackHotUpdate(0,{

/***/ 446:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	exports.facebookLogin = facebookLogin;
	exports.getProfile = getProfile;
	
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
	
	function login(userData, router) {
	  var _this = this;
	
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user/login', userData).then(function (results) {
	      console.log(results);
	
	      dispatch({
	        type: _Types.SET_CURRENT_USER,
	        user: results.data.user_id
	      });
	      router.push('/profileData');
	    }, function (errors) {
	      _this.setState({ errors: errors.response.data.message });
	      console.log(_this.state.errors);
	    });
	  };
	}
	
	function facebookLogin(userData, profileData) {
	  return function (dispatch) {
	    return _axios2.default.get('http://localhost:5000/api/user/facebookLogin', { userData: userData, profileData: profileData });
	  };
	}
	
	function getProfile(id) {
	  return function (dispatch) {
	    return _axios2.default.get('http://localhost:5000/api/user/getProfile/' + id).then(function (response) {
	      console.log(response);
	    });
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
	
	  __REACT_HOT_LOADER__.register(getProfile, 'getProfile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
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

	  __REACT_HOT_LOADER__.register(getProfile, 'getProfile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7U0FLZ0I7U0FvQkE7U0FNQTs7QUEvQmhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxVQUFTLE1BQU0sVUFBVSxRQUFPO2VBQ3JDOztVQUFPLG9CQUNMOzRCQUFhLEtBQUssd0NBQXdDLFVBQVUsS0FDbEUsVUFBQyxTQUNDO2VBQVEsSUFFUjs7O3NCQUVFO2VBQU0sUUFBUSxLQUVoQjtBQUhFO2NBR0ssS0FDUjtBQVRJLFFBVUwsVUFBQyxRQUNDO2FBQUssU0FBUyxFQUFDLFFBQVEsT0FBTyxTQUFTLEtBQ3ZDO2VBQVEsSUFBSSxNQUFLLE1BQ2xCO0FBRUo7QUFDRjs7O0FBRU0sVUFBUyxjQUFjLFVBQVUsYUFDdEM7VUFBTyxvQkFDTDtZQUFPLGdCQUFNLElBQUksZ0RBQWdELEVBQUMsVUFBRCxVQUFXLGFBQzdFO0FBQ0Y7OztBQUVNLFVBQVMsV0FBVyxJQUN6QjtVQUFPLG9CQUNMOzRCQUFhLG1EQUFpRCxJQUM3RCxLQUFLLFVBQUMsVUFDTDtlQUFRLElBQ1Q7QUFFRixNQUxRO0FBTVY7OztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O2lDQXpDZ0I7O2lDQW9CQTs7aUNBTUEiLCJmaWxlIjoiMC4yYzc3NGI2OGZhZWUzMjExYmIyMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNldEF1dGhvcml6YXRpb25Ub2tlbiBmcm9tICcuLi91dGlscy9TZXRBdXRob3JpemF0aW9uVG9rZW4uanMnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHtTRVRfQ1VSUkVOVF9VU0VSfSBmcm9tICcuL1R5cGVzLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHVzZXJEYXRhLCByb3V0ZXIpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL2xvZ2luJywgdXNlckRhdGEpLnRoZW4oXHJcbiAgICAgIChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcblxyXG4gICAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IFNFVF9DVVJSRU5UX1VTRVIsXHJcbiAgICAgICAgICB1c2VyOiByZXN1bHRzLmRhdGEudXNlcl9pZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZURhdGEnKTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9ycykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWNlYm9va0xvZ2luKHVzZXJEYXRhLCBwcm9maWxlRGF0YSl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9mYWNlYm9va0xvZ2luJywge3VzZXJEYXRhLCBwcm9maWxlRGF0YX0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2ZpbGUoaWQpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvZ2V0UHJvZmlsZS8ke2lkfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XHJcbi8vICAgcmV0dXJuKFxyXG4vLyAgICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcclxuLy8gICAgIHVzZXJcclxuLy8gICApO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==