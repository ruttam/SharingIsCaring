webpackHotUpdate(0,{

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.login = login;
	
	var _axios = __webpack_require__(321);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _SetAuthorizationToken = __webpack_require__(558);
	
	var _SetAuthorizationToken2 = _interopRequireDefault(_SetAuthorizationToken);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function login(data) {
	  return function (dispatch) {
	    return _axios2.default.post('http://localhost:5000/api/user', data).then(function (res) {
	      var token = res.data.token;
	      localStorage.setItem('token', token);
	    });
	  };
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(login, 'login', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_axios2, '_axios2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_SetAuthorizationToken2, '_SetAuthorizationToken2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(login, 'login', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/actions/AuthActions.js');
	}();

	;

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = setAuthorizationToken;
	
	var _axios = __webpack_require__(321);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function setAuthorizationToken(token) {
	  if (token) {
	    _axios2.default.defaults.headers.common['Authorization'] = 'Bearer ' + token;
	  } else {
	    delete _axios2.default.defaults.headers.common['Authorization'];
	  }
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(setAuthorizationToken, 'setAuthorizationToken', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/utils/SetAuthorizationToken.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_axios2, '_axios2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/utils/SetAuthorizationToken.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/utils/SetAuthorizationToken.js');

	  __REACT_HOT_LOADER__.register(setAuthorizationToken, 'setAuthorizationToken', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/utils/SetAuthorizationToken.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/utils/SetAuthorizationToken.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYWN0aW9ucy9BdXRoQWN0aW9ucy5qcz8wMTJjIiwid2VicGFjazovLy8uL3NyYy91dGlscy9TZXRBdXRob3JpemF0aW9uVG9rZW4uanM/YWNhNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O1NBR2dCOztBQUhoQjs7OztBQUNBOzs7Ozs7OztBQUVPLFVBQVMsTUFBTSxNQUNwQjtVQUFPLG9CQUNMOzRCQUFhLEtBQUssa0NBQWtDLE1BQU0sS0FBTSxlQUM5RDtXQUFNLFFBQVEsSUFBSSxLQUNsQjtvQkFBYSxRQUFRLFNBQ3RCO0FBQ0YsTUFKUTtBQUtWOzs7Ozs7Ozs7aUNBUGU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUJDRFE7O0FBRnhCOzs7Ozs7OztBQUVlLFVBQVMsc0JBQXNCLE9BQzVDO09BQUcsT0FDRDtxQkFBTSxTQUFTLFFBQVEsT0FBTywrQkFDL0I7QUFGRCxVQUdFO1lBQU8sZ0JBQU0sU0FBUyxRQUFRLE9BQy9CO0FBQ0Y7Ozs7Ozs7OztpQ0FOdUIiLCJmaWxlIjoiMC42ODBmZWEzNjUyYzk1ZWI1NjY5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHNldEF1dGhvcml6YXRpb25Ub2tlbiBmcm9tICcuLi91dGlscy9TZXRBdXRob3JpemF0aW9uVG9rZW4uanMnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oZGF0YSl7XHJcbiAgcmV0dXJuIGRpc3BhdGNoID0+IHtcclxuICAgIHJldHVybiBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInLCBkYXRhKS50aGVuKCByZXMgPT4ge1xyXG4gICAgICBjb25zdCB0b2tlbiA9IHJlcy5kYXRhLnRva2VuO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FjdGlvbnMvQXV0aEFjdGlvbnMuanMiLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2V0QXV0aG9yaXphdGlvblRva2VuKHRva2VuKXtcclxuICBpZih0b2tlbil7XHJcbiAgICBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRlbGV0ZSBheGlvcy5kZWZhdWx0cy5oZWFkZXJzLmNvbW1vblsnQXV0aG9yaXphdGlvbiddO1xyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvU2V0QXV0aG9yaXphdGlvblRva2VuLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==