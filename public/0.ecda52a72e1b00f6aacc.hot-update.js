webpackHotUpdate(0,{

/***/ 538:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Types = __webpack_require__(541);
	
	var _shortid = __webpack_require__(542);
	
	var _shortid2 = _interopRequireDefault(_shortid);
	
	var _lodash = __webpack_require__(554);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _toConsumableArray(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }return arr2;
	  } else {
	    return Array.from(arr);
	  }
	}
	
	var _default = function _default() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _Types.ADD_FLASH_MESSAGE:
	      return [].concat(_toConsumableArray(state), [{
	        id: _shortid2.default.generate(),
	        type: action.message.type,
	        text: action.message.text
	      }]);
	    case _Types.DELETE_FLASH_MESSAGE:
	      var index = (0, _lodash2.default)(state, { id: action.id });
	      if (index >= 0) {
	        return [].concat(_toConsumableArray(state.slice(0, index)), _toConsumableArray(state.slice(index + 1)));
	      }
	      return state;
	    default:
	      return state;
	  }
	};
	
	exports.default = _default;
	;

	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessages.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_shortid2, '_shortid2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessages.js');

	  __REACT_HOT_LOADER__.register(_lodash2, '_lodash2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessages.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessages.js');

	  __REACT_HOT_LOADER__.register(_toConsumableArray, '_toConsumableArray', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessages.js');

	  __REACT_HOT_LOADER__.register(_default, '_default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessages.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/FlashMessages.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GbGFzaE1lc3NhZ2VzLmpzP2Q4ZDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBRWUsb0JBQTZCO09BQUE7T0FBQSw2RUFDMUM7O1dBQVEsT0FDTjtpQkFDRTsyQ0FDSzthQUVHLGtCQUNKO2VBQU0sT0FBTyxRQUNiO2VBQU0sT0FBTyxRQUdqQjtBQUxJO2lCQU1GO1dBQU0sUUFBUSxzQkFBVSxPQUFPLEVBQUMsSUFBSSxPQUNwQztXQUFHLFNBQVMsR0FDWjs2Q0FDSyxNQUFNLE1BQU0sR0FBRyw0QkFDZixNQUFNLE1BQU0sUUFFbEI7QUFDQztjQUNKO0FBQVM7Y0FFWiIsImZpbGUiOiIwLmVjZGE1MmE3MmUxYjAwZjZhYWNjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FERF9GTEFTSF9NRVNTQUdFLCBERUxFVEVfRkxBU0hfTUVTU0FHRX0gZnJvbSAnLi4vYWN0aW9ucy9UeXBlcy5qcydcclxuaW1wb3J0IHNob3J0aWQgZnJvbSAnc2hvcnRpZCc7XHJcbmltcG9ydCBmaW5kSW5kZXggZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IChzdGF0ZSA9IFtdLCBhY3Rpb24gPSB7fSkgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQUREX0ZMQVNIX01FU1NBR0U6XHJcbiAgICAgIHJldHVybiBbXHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IHNob3J0aWQuZ2VuZXJhdGUoKSxcclxuICAgICAgICAgIHR5cGU6IGFjdGlvbi5tZXNzYWdlLnR5cGUsXHJcbiAgICAgICAgICB0ZXh0OiBhY3Rpb24ubWVzc2FnZS50ZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICBdO1xyXG4gICAgICBjYXNlIERFTEVURV9GTEFTSF9NRVNTQUdFOlxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gZmluZEluZGV4KHN0YXRlLCB7aWQ6IGFjdGlvbi5pZH0pO1xyXG4gICAgICAgIGlmKGluZGV4ID49IDApIHtcclxuICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgLi4uc3RhdGUuc2xpY2UoMCwgaW5kZXgpLFxyXG4gICAgICAgICAgLi4uc3RhdGUuc2xpY2UoaW5kZXggKyAxKVxyXG4gICAgICAgIF07XHJcbiAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL0ZsYXNoTWVzc2FnZXMuanMiXSwic291cmNlUm9vdCI6IiJ9