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
	exports.setProfile = setProfile;
	
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
	      dispatch({
	        type: "USER_INFO_RECEIVED",
	        userProfile: response.data
	      });
	    });
	  };
	}
	
	function setProfile(data) {
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user/setProfile/', data).then(function (response) {
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
	
	  __REACT_HOT_LOADER__.register(setProfile, 'setProfile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
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

	  __REACT_HOT_LOADER__.register(setProfile, 'setProfile', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7U0FLZ0I7U0FvQkE7U0FNQTtTQWNBOztBQTdDaEI7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLFVBQVMsTUFBTSxVQUFVLFFBQU87ZUFDckM7O1VBQU8sb0JBQ0w7NEJBQWEsS0FBSyx3Q0FBd0MsVUFBVSxLQUNsRSxVQUFDLFNBQ0M7ZUFBUSxJQUVSOzs7c0JBRUU7ZUFBTSxRQUFRLEtBRWhCO0FBSEU7Y0FHSyxLQUNSO0FBVEksUUFVTCxVQUFDLFFBQ0M7YUFBSyxTQUFTLEVBQUMsUUFBUSxPQUFPLFNBQVMsS0FDdkM7ZUFBUSxJQUFJLE1BQUssTUFDbEI7QUFFSjtBQUNGOzs7QUFFTSxVQUFTLGNBQWMsVUFBVSxhQUN0QztVQUFPLG9CQUNMO1lBQU8sZ0JBQU0sSUFBSSxnREFBZ0QsRUFBQyxVQUFELFVBQVcsYUFDN0U7QUFDRjs7O0FBRU0sVUFBUyxXQUFXLElBQ3pCO1VBQU8sb0JBQ0w7NEJBQWEsbURBQWlELElBQzdELEtBQUssVUFBQyxVQUNMO2VBQVEsSUFDUjs7ZUFFRTtzQkFBYSxTQUVoQjtBQUhHO0FBS0wsTUFUUTtBQVVWOzs7QUFFTSxVQUFTLFdBQVcsTUFDekI7VUFBTyxvQkFDTDs0QkFBYSxLQUFLLDhDQUE4QyxNQUMvRCxLQUFLLFVBQUMsVUFDTDtlQUFRLElBRVQ7QUFFRixNQU5RO0FBT1Y7OztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O2lDQXhEZ0I7O2lDQW9CQTs7aUNBTUE7O2lDQWNBIiwiZmlsZSI6IjAuZmVmNWQ1MjRmZDUxYjkyNThhYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCBzZXRBdXRob3JpemF0aW9uVG9rZW4gZnJvbSAnLi4vdXRpbHMvU2V0QXV0aG9yaXphdGlvblRva2VuLmpzJ1xyXG5pbXBvcnQgand0IGZyb20gJ2pzb253ZWJ0b2tlbic7XHJcbmltcG9ydCB7U0VUX0NVUlJFTlRfVVNFUn0gZnJvbSAnLi9UeXBlcy5qcydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih1c2VyRGF0YSwgcm91dGVyKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlci9sb2dpbicsIHVzZXJEYXRhKS50aGVuKFxyXG4gICAgICAocmVzdWx0cykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG5cclxuICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBTRVRfQ1VSUkVOVF9VU0VSLFxyXG4gICAgICAgICAgdXNlcjogcmVzdWx0cy5kYXRhLnVzZXJfaWRcclxuICAgICAgICB9KTtcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2ZpbGVEYXRhJyk7XHJcbiAgICAgIH0sXHJcbiAgICAgIChlcnJvcnMpID0+IHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcnM6IGVycm9ycy5yZXNwb25zZS5kYXRhLm1lc3NhZ2V9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLmVycm9ycyk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmFjZWJvb2tMb2dpbih1c2VyRGF0YSwgcHJvZmlsZURhdGEpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXIvZmFjZWJvb2tMb2dpbicsIHt1c2VyRGF0YSwgcHJvZmlsZURhdGF9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9maWxlKGlkKXtcclxuICByZXR1cm4gZGlzcGF0Y2ggPT4ge1xyXG4gICAgcmV0dXJuIGF4aW9zLmdldChgaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL2dldFByb2ZpbGUvJHtpZH1gKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFwiVVNFUl9JTkZPX1JFQ0VJVkVEXCIsXHJcbiAgICAgICAgdXNlclByb2ZpbGU6IHJlc3BvbnNlLmRhdGFcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRQcm9maWxlKGRhdGEpe1xyXG4gIHJldHVybiBkaXNwYXRjaCA9PiB7XHJcbiAgICByZXR1cm4gYXhpb3MucG9zdCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VyL3NldFByb2ZpbGUvJywgZGF0YSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcblxyXG4gICAgfVxyXG4gICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBleHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFVzZXIodXNlcil7XHJcbi8vICAgcmV0dXJuKFxyXG4vLyAgICAgdHlwZTogU0VUX0NVUlJFTlRfVVNFUixcclxuLy8gICAgIHVzZXJcclxuLy8gICApO1xyXG4vLyB9XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hY3Rpb25zL0F1dGhBY3Rpb25zLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==