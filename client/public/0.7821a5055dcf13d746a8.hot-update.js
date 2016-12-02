webpackHotUpdate(0,{

/***/ 536:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	var TextFieldGroup = function TextFieldGroup(_ref) {
	  var placeholder = _ref.placeholder,
	      field = _ref.field,
	      divStyle = _ref.divStyle,
	      value = _ref.value,
	      error = _ref.error,
	      type = _ref.type,
	      onChange = _ref.onChange;
	
	  return _react2.default.createElement('div', null, _react2.default.createElement('input', {
	    value: value,
	    onChange: onChange,
	    className: 'form-control',
	    style: divStyle,
	    type: type,
	    name: field,
	    placeholder: placeholder
	  }), error && _react2.default.createElement('span', null, _react2.default.createElement('h5', null, error)));
	};
	
	TextFieldGroup.propTypes = {
	  field: _react2.default.PropTypes.string.isRequired,
	  value: _react2.default.PropTypes.string.isRequired,
	  divStyle: _react2.default.PropTypes.object,
	  error: _react2.default.PropTypes.string,
	  onChange: _react2.default.PropTypes.func.isRequired
	};
	
	TextFieldGroup.defaultProps = {
	  type: 'text'
	};
	
	var _default = TextFieldGroup;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(TextFieldGroup, 'TextFieldGroup', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/TextFieldGroup.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/TextFieldGroup.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_react2, '_react2', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/TextFieldGroup.js');

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, '_interopRequireDefault', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/TextFieldGroup.js');

	  __REACT_HOT_LOADER__.register(TextFieldGroup, 'TextFieldGroup', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/TextFieldGroup.js');

	  __REACT_HOT_LOADER__.register(_default, '_default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/TextFieldGroup.js');

	  __REACT_HOT_LOADER__.register(_temp, '_temp', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/TextFieldGroup.js');
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UZXh0RmllbGRHcm91cC5qcz84ODQ1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0FBRUEsS0FBTSxpQkFBaUIsOEJBQWtFO09BQUE7T0FBQTtPQUFBO09BQUE7T0FBQTtPQUFBO09BQUEsZ0JBQ3ZGOzswQkFDRSxxQkFDRTtZQUVBO2VBQ0E7Z0JBQ0E7WUFDQTtXQUNBO1dBQ0E7a0JBRUM7QUFSRCxLQUZGLFdBVVksc0NBQU0sMENBQUssTUFHMUI7QUFmRDs7QUFpQkEsZ0JBQWU7VUFDTixnQkFBTSxVQUFVLE9BQ3ZCO1VBQU8sZ0JBQU0sVUFBVSxPQUN2QjthQUFVLGdCQUFNLFVBQ2hCO1VBQU8sZ0JBQU0sVUFDYjthQUFVLGdCQUFNLFVBQVUsS0FBSztBQUovQjs7QUFPRixnQkFBZTtTQUNQO0FBQU47O2dCQUdhOzs7Ozs7Ozs7aUNBN0JUIiwiZmlsZSI6IjAuNzgyMWE1MDU1ZGNmMTNkNzQ2YTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNvbnN0IFRleHRGaWVsZEdyb3VwID0gKHtwbGFjZWhvbGRlciwgZmllbGQsIGRpdlN0eWxlLCB2YWx1ZSwgZXJyb3IsIHR5cGUsIG9uQ2hhbmdlfSkgPT4ge1xyXG4gIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgIDxpbnB1dFxyXG4gICAgICB2YWx1ZT17dmFsdWV9XHJcbiAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cclxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgc3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIHR5cGU9e3R5cGV9XHJcbiAgICAgIG5hbWU9e2ZpZWxkfVxyXG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtlcnJvciAmJiA8c3Bhbj48aDU+e2Vycm9yfTwvaDU+PC9zcGFuPn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRleHRGaWVsZEdyb3VwLnByb3BUeXBlcyA9IHtcclxuICBmaWVsZDogUmVhY3QuUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxyXG4gIHZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgZGl2U3R5bGU6IFJlYWN0LlByb3BUeXBlcy5vYmplY3QsXHJcbiAgZXJyb3I6IFJlYWN0LlByb3BUeXBlcy5zdHJpbmcsXHJcbiAgb25DaGFuZ2U6IFJlYWN0LlByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcblRleHRGaWVsZEdyb3VwLmRlZmF1bHRQcm9wcyA9IHtcclxuICB0eXBlOiAndGV4dCdcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkR3JvdXA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RleHRGaWVsZEdyb3VwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==