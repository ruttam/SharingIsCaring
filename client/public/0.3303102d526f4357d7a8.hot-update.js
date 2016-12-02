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
	      console.log(_this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7U0FLZ0I7U0FvQkE7O0FBekJoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sVUFBUyxNQUFNLFVBQVM7ZUFDN0I7O1VBQU8sb0JBQ0w7NEJBQWEsS0FBSyx3Q0FBd0MsVUFBVSxLQUNsRSxVQUFDLFNBQ0M7ZUFBUSxJQUNSO2FBQUssUUFBUSxPQUFPLEtBQ3BCO2VBQVEsSUFDUjs7c0JBRUU7ZUFBTSxRQUFRLEtBRWpCO0FBSEc7QUFOQyxRQVVMLFVBQUMsUUFDQzthQUFLLFNBQVMsRUFBQyxRQUFRLE9BQU8sU0FBUyxLQUN2QztlQUFRLElBQUksTUFBSyxNQUNsQjtBQUVKO0FBQ0Y7OztBQUVNLFVBQVMsY0FBYyxVQUFVLGFBQ3RDO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSxLQUFLLGdEQUFnRCxFQUFDLFVBQUQsVUFBVyxhQUM5RTtBQUNGOzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztpQ0EvQmdCOztpQ0FvQkEiLCJmaWxlIjoiMC4zMzAzMTAyZDUyNmY0MzU3ZDdhOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNldEF1dGhvcml6YXRpb25Ub2tlbiBmcm9tICcuLi91dGlscy9TZXRBdXRob3JpemF0aW9uVG9rZW4uanMnXHJcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcclxuaW1wb3J0IHtTRVRfQ1VSUkVOVF9VU0VSfSBmcm9tICcuL1R5cGVzLmpzJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHVzZXJEYXRhKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9sb2dpbicsIHVzZXJEYXRhKS50aGVuKFxyXG4gICAgICAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCgnL3Byb2ZpbGVEYXRhJyk7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcbiAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcclxuICAgICAgICAgIHVzZXI6IHJlc3VsdHMuZGF0YS51c2VyX2lkXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9ycykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWNlYm9va0xvZ2luKHVzZXJEYXRhLCBwcm9maWxlRGF0YSl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvZmFjZWJvb2tMb2dpbicsIHt1c2VyRGF0YSwgcHJvZmlsZURhdGF9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VXNlcih1c2VyKXtcclxuLy8gICByZXR1cm4oXHJcbi8vICAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSLFxyXG4vLyAgICAgdXNlclxyXG4vLyAgICk7XHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9