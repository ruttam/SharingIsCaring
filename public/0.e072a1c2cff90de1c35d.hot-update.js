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
	  if (Validator.null(data.email)) {
	    errors.email = 'This field is required';
	  } else if (!Validator.email(data.email)) {
	    errors.email = 'Email is not valid';
	  }
	  if (Validator.null(data.password)) {
	    errors.password = 'This field is required';
	  }
	  if (Validator.null(data.passwordConfirmation)) {
	    errors.passwordConfirmation = 'This field is required';
	  }
	
	  if (data.password != data.passwordConfirmation) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9WYWxpZGF0aW9uLmpzP2RhMTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OzttQkFHd0I7O0FBRnhCOzs7Ozs7OztBQUVlLFVBQVMsY0FBYyxNQUNwQztPQUFJLFNBQ0o7T0FBTSxZQUFZLG9CQUNsQjtPQUFHLFVBQVUsS0FBSyxLQUFLLFFBQ3JCO1lBQU8sUUFDUjtBQUZELFVBRU8sSUFBRyxDQUFDLFVBQVUsTUFBTSxLQUFLLFFBQzVCO1lBQU8sUUFDUjtBQUNIO09BQUcsVUFBVSxLQUFLLEtBQUssV0FDckI7WUFBTyxXQUNSO0FBQ0Q7T0FBRyxVQUFVLEtBQUssS0FBSyx1QkFDckI7WUFBTyx1QkFDUjtBQUVEOztPQUFHLEtBQUssWUFBWSxLQUFLLHNCQUN2QjtZQUFPLHVCQUNSO0FBRUQ7OzthQUVFO2NBQVMsdUJBRVo7QUFIRztHQXZCSjs7Ozs7Ozs7aUNBR3dCIiwiZmlsZSI6IjAuZTA3MmExYzJjZmY5MGRlMWMzNWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vaW1wb3J0IFZhbGlkYXRvciBmcm9tICd2YWxpZG8nO1xyXG5pbXBvcnQgaXNFbXB0eSBmcm9tICdsb2Rhc2gvaXNFbXB0eSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2YWxpZGF0ZUlucHV0KGRhdGEpIHtcclxuICBsZXQgZXJyb3JzID0ge307XHJcbiAgY29uc3QgVmFsaWRhdG9yID0gcmVxdWlyZSgndmFsaWRvJyk7XHJcbiAgaWYoVmFsaWRhdG9yLm51bGwoZGF0YS5lbWFpbCkpe1xyXG4gICAgZXJyb3JzLmVtYWlsID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gIH0gZWxzZSBpZighVmFsaWRhdG9yLmVtYWlsKGRhdGEuZW1haWwpKXtcclxuICAgICAgZXJyb3JzLmVtYWlsID0gJ0VtYWlsIGlzIG5vdCB2YWxpZCc7XHJcbiAgICB9XHJcbiAgaWYoVmFsaWRhdG9yLm51bGwoZGF0YS5wYXNzd29yZCkpe1xyXG4gICAgZXJyb3JzLnBhc3N3b3JkID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xyXG4gIH1cclxuICBpZihWYWxpZGF0b3IubnVsbChkYXRhLnBhc3N3b3JkQ29uZmlybWF0aW9uKSl7XHJcbiAgICBlcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb24gPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XHJcbiAgfVxyXG5cclxuICBpZihkYXRhLnBhc3N3b3JkICE9IGRhdGEucGFzc3dvcmRDb25maXJtYXRpb24pe1xyXG4gICAgZXJyb3JzLnBhc3N3b3JkQ29uZmlybWF0aW9uID0gJ1Bhc3N3b3JkcyBtdXN0IG1hdGNoJztcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlcnJvcnMsXHJcbiAgICBpc1ZhbGlkOiBpc0VtcHR5KGVycm9ycylcclxuICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=