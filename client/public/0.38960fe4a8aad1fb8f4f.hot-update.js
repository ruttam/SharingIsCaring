webpackHotUpdate(0,{

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(108);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRouter = __webpack_require__(259);
	
	var _Routes = __webpack_require__(315);
	
	var _Routes2 = _interopRequireDefault(_Routes);
	
	var _reactRedux = __webpack_require__(346);
	
	var _reduxThunk = __webpack_require__(385);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _redux = __webpack_require__(353);
	
	var _RootReducer = __webpack_require__(537);
	
	var _RootReducer2 = _interopRequireDefault(_RootReducer);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var store = (0, _redux.createStore)(
	//(state = {}) => state,
	_RootReducer2.default, (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), window.devToolsExtension ? window.devToolsExtension() : function (f) {
	  return f;
	}));
	
	_reactDom2.default.render(_react2.default.createElement(_reactRedux.Provider, { store: store }, _react2.default.createElement(_reactRouter.Router, { history: _reactRouter.hashHistory, routes: _Routes2.default })), document.getElementById('app'));
	var message = "Welcome to Važiuoju-Vežu App!";
	console.log(message);
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(store, 'store', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');
	
	  __REACT_HOT_LOADER__.register(message, 'message', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_react2, '_react2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_reactDom2, '_reactDom2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_Routes2, '_Routes2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_reduxThunk2, '_reduxThunk2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_RootReducer2, '_RootReducer2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(store, 'store', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(message, 'message', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/index.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanM/OTU1MiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7QUFFQSxLQUFNO0FBQ0o7QUFEWSw0Q0FJVix5Q0FERixVQUVFLE9BQU8sb0JBQW9CLE9BQU8sc0JBQXFCO1VBQUs7QUFGOUQsR0FIWTs7QUFTZCxvQkFBUyxPQUNQLHNEQUFVLE9BQ1YsOERBQVEsc0JBQVIsYUFBOEIsaUJBQTlCLGFBQ2EsU0FBUyxlQUFlO0FBRXZDLEtBQUksVUFBVTtBQUNkLFNBQVEsSUFBSTs7Ozs7Ozs7aUNBZk47O2lDQWNGIiwiZmlsZSI6IjAuMzg5NjBmZTRhOGFhZDFmYjhmNGYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xyXG5pbXBvcnQge1JvdXRlciwgaGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcic7XHJcbmltcG9ydCBSb3V0ZXMgZnJvbSAnLi9jb21wb25lbnRzL1JvdXRlcy5qcyc7XHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2V9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vY29tcG9uZW50cy9Sb290UmVkdWNlcic7XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIC8vKHN0YXRlID0ge30pID0+IHN0YXRlLFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGNvbXBvc2UoXHJcbiAgICBhcHBseU1pZGRsZXdhcmUodGh1bmspLFxyXG4gICAgd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uID8gd2luZG93LmRldlRvb2xzRXh0ZW5zaW9uKCk6IGYgPT4gZlxyXG4gIClcclxuKTtcclxuXHJcblJlYWN0RE9NLnJlbmRlcihcclxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cclxuICA8Um91dGVyIGhpc3Rvcnk9e2hhc2hIaXN0b3J5fSByb3V0ZXM9e1JvdXRlc30vPlxyXG4gIDwvUHJvdmlkZXI+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcclxuKTtcclxubGV0IG1lc3NhZ2UgPSBcIldlbGNvbWUgdG8gVmHFvml1b2p1LVZlxb51IEFwcCFcIjtcclxuY29uc29sZS5sb2cobWVzc2FnZSk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=