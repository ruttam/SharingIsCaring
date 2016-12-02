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
	
	function login(userData, router) {
	  var _this = this;
	
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user/login', userData).then(function (results) {
	      console.log(_this);
	      router.push('/profileData');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7U0FLZ0I7U0FvQkE7O0FBekJoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sVUFBUyxNQUFNLFVBQVUsUUFBTztlQUNyQzs7VUFBTyxvQkFDTDs0QkFBYSxLQUFLLHdDQUF3QyxVQUFVLEtBQ2xFLFVBQUMsU0FDQztlQUFRLElBQ1I7Y0FBTyxLQUNQO2VBQVEsSUFDUjs7c0JBRUU7ZUFBTSxRQUFRLEtBRWpCO0FBSEc7QUFOQyxRQVVMLFVBQUMsUUFDQzthQUFLLFNBQVMsRUFBQyxRQUFRLE9BQU8sU0FBUyxLQUN2QztlQUFRLElBQUksTUFBSyxNQUNsQjtBQUVKO0FBQ0Y7OztBQUVNLFVBQVMsY0FBYyxVQUFVLGFBQ3RDO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSxLQUFLLGdEQUFnRCxFQUFDLFVBQUQsVUFBVyxhQUM5RTtBQUNGOzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztpQ0EvQmdCOztpQ0FvQkEiLCJmaWxlIjoiMC5mNjczYzI1YWIyNjlhZjI1NzMyMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNldEF1dGhvcml6YXRpb25Ub2tlbiBmcm9tICcuLi91dGlscy9TZXRBdXRob3JpemF0aW9uVG9rZW4uanMnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHtTRVRfQ1VSUkVOVF9VU0VSfSBmcm9tICcuL1R5cGVzLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHVzZXJEYXRhLCByb3V0ZXIpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL2xvZ2luJywgdXNlckRhdGEpLnRoZW4oXHJcbiAgICAgIChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlRGF0YScpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgIHR5cGU6IFNFVF9DVVJSRU5UX1VTRVIsXHJcbiAgICAgICAgICB1c2VyOiByZXN1bHRzLmRhdGEudXNlcl9pZFxyXG4gICAgICAgIH07XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcnMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVycm9ycy5yZXNwb25zZS5kYXRhLm1lc3NhZ2V9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmFjZWJvb2tMb2dpbih1c2VyRGF0YSwgcHJvZmlsZURhdGEpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL2ZhY2Vib29rTG9naW4nLCB7dXNlckRhdGEsIHByb2ZpbGVEYXRhfSk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XHJcbi8vICAgcmV0dXJuKFxyXG4vLyAgICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcclxuLy8gICAgIHVzZXJcclxuLy8gICApO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==