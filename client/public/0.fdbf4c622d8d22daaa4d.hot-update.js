webpackHotUpdate(0,{

/***/ 389:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = validateInput;
	
	var _validator = __webpack_require__(390);
	
	var _validator2 = _interopRequireDefault(_validator);
	
	var _isEmpty = __webpack_require__(455);
	
	var _isEmpty2 = _interopRequireDefault(_isEmpty);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function validateInput(data) {
	  var errors = {};
	
	  if (_validator2.default.isNull(data.email)) {
	    errors.email = 'This field is required';
	  }
	  if (_validator2.default.isNull(data.password)) {
	    errors.password = 'This field is required';
	  }
	  if (_validator2.default.isNull(data.passwordConfirmation)) {
	    errors.passwordConfirmation = 'This field is required';
	  }
	  if (!_validator2.default.isEmail(data.email)) {
	    errors.email = 'Email is not valid';
	  }
	  if (!_validator2.default.equals(data.password, data.passwordConfirmation)) {
	    errors.passwordConfirmation = 'Passwords must match';
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
	
	  __REACT_HOT_LOADER__.register(validateInput, 'validateInput', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_validator2, '_validator2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');

	  __REACT_HOT_LOADER__.register(_isEmpty2, '_isEmpty2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');

	  __REACT_HOT_LOADER__.register(validateInput, 'validateInput', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Validation.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WYWxpZGF0aW9uLmpzP2RhMTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFHd0I7O0FBSHhCOzs7O0FBQ0E7Ozs7Ozs7O0FBRWUsVUFBUyxjQUFjLE1BQ3BDO09BQUksU0FFSjs7T0FBRyxvQkFBVSxPQUFPLEtBQUssUUFDdkI7WUFBTyxRQUNSO0FBQ0Q7T0FBRyxvQkFBVSxPQUFPLEtBQUssV0FDdkI7WUFBTyxXQUNSO0FBQ0Q7T0FBRyxvQkFBVSxPQUFPLEtBQUssdUJBQ3ZCO1lBQU8sdUJBQ1I7QUFDRDtPQUFHLENBQUMsb0JBQVUsUUFBUSxLQUFLLFFBQ3pCO1lBQU8sUUFDUjtBQUNEO09BQUcsQ0FBQyxvQkFBVSxPQUFPLEtBQUssVUFBVSxLQUFLLHVCQUN2QztZQUFPLHVCQUNSO0FBRUQ7OzthQUVFO2NBQVMsdUJBRVo7QUFIRzs7Ozs7Ozs7O2lDQXBCb0IiLCJmaWxlIjoiMC5mZGJmNGM2MjJkOGQyMmRhYWE0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZhbGlkYXRvciBmcm9tICd2YWxpZGF0b3InO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGRhdGEpIHtcclxuICBsZXQgZXJyb3JzID0ge307XHJcblxyXG4gIGlmKFZhbGlkYXRvci5pc051bGwoZGF0YS5lbWFpbCkpe1xyXG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gIH1cclxuICBpZihWYWxpZGF0b3IuaXNOdWxsKGRhdGEucGFzc3dvcmQpKXtcclxuICAgIGVycm9ycy5wYXNzd29yZCA9ICdUaGlzIGZpZWxkIGlzIHJlcXVpcmVkJztcclxuICB9XHJcbiAgaWYoVmFsaWRhdG9yLmlzTnVsbChkYXRhLnBhc3N3b3JkQ29uZmlybWF0aW9uKSl7XHJcbiAgICBlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb24gPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgfVxyXG4gIGlmKCFWYWxpZGF0b3IuaXNFbWFpbChkYXRhLmVtYWlsKSl7XHJcbiAgICBlcnJvcnMuZW1haWwgPSAnRW1haWwgaXMgbm90IHZhbGlkJztcclxuICB9XHJcbiAgaWYoIVZhbGlkYXRvci5lcXVhbHMoZGF0YS5wYXNzd29yZCwgZGF0YS5wYXNzd29yZENvbmZpcm1hdGlvbikpe1xyXG4gICAgZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uID0gJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJztcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvcnMsXHJcbiAgICBpc1ZhbGlkOiBpc0VtcHR5KGVycm9ycylcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=