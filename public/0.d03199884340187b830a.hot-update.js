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
	      router.push('/profileData');
	      dispatch({
	        type: _Types.SET_CURRENT_USER,
	        user: results.data.user_id
	      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7U0FLZ0I7U0FrQkE7O0FBdkJoQjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O0FBRU8sVUFBUyxNQUFNLFVBQVUsUUFBTztlQUNyQzs7VUFBTyxvQkFDTDs0QkFBYSxLQUFLLHdDQUF3QyxVQUFVLEtBQ2xFLFVBQUMsU0FDQztjQUFPLEtBQ1A7O3NCQUVFO2VBQU0sUUFBUSxLQUVqQjtBQUhHO0FBSkMsUUFRTCxVQUFDLFFBQ0M7YUFBSyxTQUFTLEVBQUMsUUFBUSxPQUFPLFNBQVMsS0FDdkM7ZUFBUSxJQUFJLE1BQUssTUFDbEI7QUFFSjtBQUNGOzs7QUFFTSxVQUFTLGNBQWMsVUFBVSxhQUN0QztVQUFPLG9CQUNMO1lBQU8sZ0JBQU0sS0FBSyxnREFBZ0QsRUFBQyxVQUFELFVBQVcsYUFDOUU7QUFDRjs7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7aUNBN0JnQjs7aUNBa0JBIiwiZmlsZSI6IjAuZDAzMTk5ODg0MzQwMTg3YjgzMGEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzZXRBdXRob3JpemF0aW9uVG9rZW4gZnJvbSAnLi4vdXRpbHMvU2V0QXV0aG9yaXphdGlvblRva2VuLmpzJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7U0VUX0NVUlJFTlRfVVNFUn0gZnJvbSAnLi9UeXBlcy5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih1c2VyRGF0YSwgcm91dGVyKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9sb2dpbicsIHVzZXJEYXRhKS50aGVuKFxyXG4gICAgICAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZURhdGEnKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSLFxyXG4gICAgICAgICAgdXNlcjogcmVzdWx0cy5kYXRhLnVzZXJfaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9ycykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWNlYm9va0xvZ2luKHVzZXJEYXRhLCBwcm9maWxlRGF0YSl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvZmFjZWJvb2tMb2dpbicsIHt1c2VyRGF0YSwgcHJvZmlsZURhdGF9KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50VXNlcih1c2VyKXtcclxuLy8gICByZXR1cm4oXHJcbi8vICAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSLFxyXG4vLyAgICAgdXNlclxyXG4vLyAgICk7XHJcbi8vIH1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMiXSwic291cmNlUm9vdCI6IiJ9