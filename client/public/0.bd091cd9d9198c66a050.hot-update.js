webpackHotUpdate(0,{

/***/ 389:
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
	  if (!Validator.undefined(data.email)) {
	    errors.email = 'This field is required';
	  } else if (!Validator.email(data.email)) {
	    errors.email = 'Email is not valid';
	  }
	  if (!Validator.undefined(data.password)) {
	    errors.password = 'This field is required';
	  }
	  if (!Validator.undefined(data.passwordConfirmation)) {
	    errors.passwordConfirmation = 'This field is required';
	  }
	
	  if (!(data.password == data.passwordConfirmation)) {
	    errors.passwordConfirmation = 'Passwords must match';
	  }
	
	  return {
	    errors: errors,
	    isValid: (0, _isEmpty2.default)(errors)
	  };
	} //import Validator from 'valido';
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(validateInput, 'validateInput', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_isEmpty2, '_isEmpty2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');

	  __REACT_HOT_LOADER__.register(validateInput, 'validateInput', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WYWxpZGF0aW9uLmpzP2RhMTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFHd0I7O0FBRnhCOzs7Ozs7OztBQUVlLFVBQVMsY0FBYyxNQUNwQztPQUFJLFNBQ0o7T0FBTSxZQUFZLG9CQUNsQjtPQUFHLENBQUMsVUFBVSxVQUFVLEtBQUssUUFDM0I7WUFBTyxRQUNSO0FBRkQsVUFFTyxJQUFHLENBQUMsVUFBVSxNQUFNLEtBQUssUUFDNUI7WUFBTyxRQUNSO0FBQ0g7T0FBRyxDQUFDLFVBQVUsVUFBVSxLQUFLLFdBQzNCO1lBQU8sV0FDUjtBQUNEO09BQUcsQ0FBQyxVQUFVLFVBQVUsS0FBSyx1QkFDM0I7WUFBTyx1QkFDUjtBQUVEOztPQUFHLEVBQUUsS0FBSyxZQUFZLEtBQUssdUJBQ3pCO1lBQU8sdUJBQ1I7QUFFRDs7O2FBRUU7Y0FBUyx1QkFFWjtBQUhHO0dBdkJKOzs7Ozs7OztpQ0FHd0IiLCJmaWxlIjoiMC5iZDA5MWNkOWQ5MTk4YzY2YTA1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgVmFsaWRhdG9yIGZyb20gJ3ZhbGlkbyc7XHJcbmltcG9ydCBpc0VtcHR5IGZyb20gJ2xvZGFzaC9pc0VtcHR5JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZhbGlkYXRlSW5wdXQoZGF0YSkge1xyXG4gIGxldCBlcnJvcnMgPSB7fTtcclxuICBjb25zdCBWYWxpZGF0b3IgPSByZXF1aXJlKCd2YWxpZG8nKTtcclxuICBpZighVmFsaWRhdG9yLnVuZGVmaW5lZChkYXRhLmVtYWlsKSl7XHJcbiAgICBlcnJvcnMuZW1haWwgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgfSBlbHNlIGlmKCFWYWxpZGF0b3IuZW1haWwoZGF0YS5lbWFpbCkpe1xyXG4gICAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgbm90IHZhbGlkJztcclxuICAgIH1cclxuICBpZighVmFsaWRhdG9yLnVuZGVmaW5lZChkYXRhLnBhc3N3b3JkKSl7XHJcbiAgICBlcnJvcnMucGFzc3dvcmQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgfVxyXG4gIGlmKCFWYWxpZGF0b3IudW5kZWZpbmVkKGRhdGEucGFzc3dvcmRDb25maXJtYXRpb24pKXtcclxuICAgIGVycm9ycy5wYXNzd29yZENvbmZpcm1hdGlvbiA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcclxuICB9XHJcblxyXG4gIGlmKCEoZGF0YS5wYXNzd29yZCA9PSBkYXRhLnBhc3N3b3JkQ29uZmlybWF0aW9uKSl7XHJcbiAgICBlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb24gPSAnUGFzc3dvcmRzIG11c3QgbWF0Y2gnO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVycm9ycyxcclxuICAgIGlzVmFsaWQ6IGlzRW1wdHkoZXJyb3JzKVxyXG4gIH1cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9WYWxpZGF0aW9uLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==