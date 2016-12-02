webpackHotUpdate(0,{

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateInput;
	
	var _isEmpty = __webpack_require__(455);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function validateInput(data) {
	  var errors = {};
	  var Validator = __webpack_require__(492);
	  if (data.email == "") {
	    errors.email = 'this field is required';
	  } else if (!Validator.email(data.email)) {
	    errors.email = 'email is not valid';
	  }
	  if (data.password == "") {
	    errors.password = 'this field is required';
	  }
	  return {
	    errors: errors,
	    isValid: (0, _isEmpty2.default)(errors)
	  };
	}
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(validateInput, 'validateInput', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/LoginValidation.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_isEmpty2, '_isEmpty2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/LoginValidation.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/LoginValidation.js');

	  __REACT_HOT_LOADER__.register(validateInput, 'validateInput', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/LoginValidation.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/LoginValidation.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Mb2dpblZhbGlkYXRpb24uanM/Zjg5ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O21CQUV3Qjs7QUFGeEI7Ozs7Ozs7O0FBRWUsVUFBUyxjQUFjLE1BQ3BDO09BQUksU0FDSjtPQUFNLFlBQVksb0JBQ2xCO09BQUcsS0FBSyxTQUFTLElBQ2Y7WUFBTyxRQUNSO0FBRkQsVUFFTyxJQUFHLENBQUMsVUFBVSxNQUFNLEtBQUssUUFDNUI7WUFBTyxRQUNWO0FBQ0Q7T0FBRyxLQUFLLFlBQVksSUFDbEI7WUFBTyxXQUNSO0FBQ0Q7O2FBRUU7Y0FBUyx1QkFFWjtBQUhHOzs7Ozs7Ozs7aUNBWm9CIiwiZmlsZSI6IjAuYTdhMzgxMDZkYzk3MmY0ODI3NDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoZGF0YSkge1xyXG4gIGxldCBlcnJvcnMgPSB7fTtcclxuICBjb25zdCBWYWxpZGF0b3IgPSByZXF1aXJlKCd2YWxpZG8nKTtcclxuICBpZihkYXRhLmVtYWlsID09IFwiXCIpe1xyXG4gICAgZXJyb3JzLmVtYWlsID0gJ3RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gIH0gZWxzZSBpZighVmFsaWRhdG9yLmVtYWlsKGRhdGEuZW1haWwpKXtcclxuICAgICAgZXJyb3JzLmVtYWlsID0gJ2VtYWlsIGlzIG5vdCB2YWxpZCc7XHJcbiAgfVxyXG4gIGlmKGRhdGEucGFzc3dvcmQgPT0gXCJcIil7XHJcbiAgICBlcnJvcnMucGFzc3dvcmQgPSAndGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgfVxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvcnMsXHJcbiAgICBpc1ZhbGlkOiBpc0VtcHR5KGVycm9ycylcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvTG9naW5WYWxpZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==