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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7U0FLZ0I7U0FrQkE7U0FNQTs7QUE3QmhCOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFTyxVQUFTLE1BQU0sVUFBVSxRQUFPO2VBQ3JDOztVQUFPLG9CQUNMOzRCQUFhLEtBQUssd0NBQXdDLFVBQVUsS0FDbEUsVUFBQyxTQUNDO2NBQU8sS0FDUDs7c0JBRUU7ZUFBTSxRQUFRLEtBRWpCO0FBSEc7QUFKQyxRQVFMLFVBQUMsUUFDQzthQUFLLFNBQVMsRUFBQyxRQUFRLE9BQU8sU0FBUyxLQUN2QztlQUFRLElBQUksTUFBSyxNQUNsQjtBQUVKO0FBQ0Y7OztBQUVNLFVBQVMsY0FBYyxVQUFVLGFBQ3RDO1VBQU8sb0JBQ0w7WUFBTyxnQkFBTSxJQUFJLGdEQUFnRCxFQUFDLFVBQUQsVUFBVyxhQUM3RTtBQUNGOzs7QUFFTSxVQUFTLFdBQVcsSUFDekI7VUFBTyxvQkFDTDs0QkFBYSxtREFBaUQsSUFDN0QsS0FBSyxVQUFDLFVBQ0w7ZUFBUSxJQUNUO0FBRUYsTUFMUTtBQU1WOzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztpQ0F2Q2dCOztpQ0FrQkE7O2lDQU1BIiwiZmlsZSI6IjAuYjJhYTQ4NzJkNTU1MDE4Y2QyNzEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzZXRBdXRob3JpemF0aW9uVG9rZW4gZnJvbSAnLi4vdXRpbHMvU2V0QXV0aG9yaXphdGlvblRva2VuLmpzJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7U0VUX0NVUlJFTlRfVVNFUn0gZnJvbSAnLi9UeXBlcy5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih1c2VyRGF0YSwgcm91dGVyKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9sb2dpbicsIHVzZXJEYXRhKS50aGVuKFxyXG4gICAgICAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZmlsZURhdGEnKTtcclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSLFxyXG4gICAgICAgICAgdXNlcjogcmVzdWx0cy5kYXRhLnVzZXJfaWRcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgKGVycm9ycykgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yczogZXJyb3JzLnJlc3BvbnNlLmRhdGEubWVzc2FnZX0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUuZXJyb3JzKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWNlYm9va0xvZ2luKHVzZXJEYXRhLCBwcm9maWxlRGF0YSl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9mYWNlYm9va0xvZ2luJywge3VzZXJEYXRhLCBwcm9maWxlRGF0YX0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFByb2ZpbGUoaWQpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KGBodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvZ2V0UHJvZmlsZS8ke2lkfWApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgfVxyXG4gICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XHJcbi8vICAgcmV0dXJuKFxyXG4vLyAgICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcclxuLy8gICAgIHVzZXJcclxuLy8gICApO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==