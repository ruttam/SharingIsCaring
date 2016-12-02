webpackHotUpdate(0,{

/***/ 697:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();
	
	var _react = __webpack_require__(78);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}
	
	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}
	
	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}
	
	var divCircle = {
	  width: '500px',
	  height: '500px',
	  background: '#E5E5E5',
	  border: 'thin solid #B7B7B7'
	};
	
	var ProfilePicture = function (_React$Component) {
	  _inherits(ProfilePicture, _React$Component);
	
	  function ProfilePicture(props) {
	    _classCallCheck(this, ProfilePicture);
	
	    var _this = _possibleConstructorReturn(this, (ProfilePicture.__proto__ || Object.getPrototypeOf(ProfilePicture)).call(this, props));
	
	    axios({
	      method: 'GET',
	      url: 'http://localhost:5000/api/userImage',
	      mode: 'no-cors',
	      data: _this.props.id,
	      dataType: 'json'
	    }).then(function (result) {
	      console.log(result);
	    });
	    _this.state = { file: '', filePreview: '' };
	    return _this;
	  }
	
	  _createClass(ProfilePicture, [{
	    key: '_handleSubmit',
	    value: function _handleSubmit(e) {
	      e.preventDefault();
	      console.log('Uploading: ', this.state.file);
	    }
	  }, {
	    key: '_handleImageChange',
	    value: function _handleImageChange(e) {
	      var _this2 = this;
	
	      e.preventDefault();
	
	      var reader = new FileReader();
	      var file = e.target.files[0];
	
	      reader.onloadend = function () {
	        _this2.setState({
	          file: file,
	          filePreview: reader.result
	        });
	      };
	
	      reader.readAsDataURL(file);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this3 = this;
	
	      var filePreview = this.state.filePreview;
	
	      var $imagePreview = null;
	      if (filePreview) {
	        $imagePreview = _react2.default.createElement('img', { src: filePreview });
	      } else {
	        $imagePreview = _react2.default.createElement('img', { src: filePreview });
	      }
	
	      return _react2.default.createElement('div', { className: 'previewComponent' }, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
	          return _this3._handleSubmit(e);
	        } }, _react2.default.createElement('input', { className: 'fileInput', type: 'file', onChange: function onChange(e) {
	          return _this3._handleImageChange(e);
	        } }), _react2.default.createElement('button', { className: 'submitButton', type: 'submit', onClick: function onClick(e) {
	          return _this3._handleSubmit(e);
	        } }, 'Upload Image')), _react2.default.createElement('div', { className: 'imgPreview' }, $imagePreview));
	    }
	  }]);
	
	  return ProfilePicture;
	}(_react2.default.Component);
	
	var _default = ProfilePicture;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divCircle, 'divCircle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	
	  __REACT_HOT_LOADER__.register(ProfilePicture, 'ProfilePicture', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(divCircle, "divCircle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(ProfilePicture, "ProfilePicture", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUGljdHVyZS5qcz8zNzIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTTtVQUVGO1dBQ0E7ZUFDQTtXQUFRO0FBSFI7O0tBTUU7NkJBQ0o7OzJCQUFZLE9BQU87MkJBQUE7O2lJQUVqQjs7O2VBRUU7WUFDQTthQUNBO2FBQU0sTUFBSyxNQUNYO2lCQUFVO0FBSlYsUUFNRCxLQUFLLFVBQUMsUUFDTDtlQUFRLElBQ1Q7QUFDRDtXQUFLLFFBQVEsRUFBQyxNQUFNLElBQUksYUFBYTtZQUN0Qzs7Ozs7bUNBRWEsR0FDWjtTQUNBO2VBQVEsSUFBSSxlQUFlLEtBQUssTUFDakM7Ozs7d0NBRWtCLEdBQUc7b0JBQ3BCOztTQUVBOztXQUFJLFNBQVMsSUFDYjtXQUFJLE9BQU8sRUFBRSxPQUFPLE1BRXBCOztjQUFPLFlBQVksWUFDakI7Z0JBQUs7aUJBRUg7d0JBQWEsT0FFaEI7QUFIRztBQUtKOztjQUFPLGNBQ1I7Ozs7OEJBRVE7b0JBQUE7O1dBQ0YsY0FBZSxLQUFLLE1BQ3pCOztXQUFJLGdCQUNKO1dBQUksYUFDRjt5QkFBaUIsdUNBQUssS0FDdkI7QUFGRCxjQUdFO3lCQUFpQix1Q0FBSyxLQUN2QjtBQUVEOztjQUNFLHVDQUFLLFdBQ0gsOERBQU0sVUFBVSxrQkFBQyxHQUFEO2tCQUFLLE9BQUssY0FBYztBQUN0Qyx1REFBTyxXQUFVLGFBQVksTUFBSyxRQUFPLFVBQVUsa0JBQUMsR0FBRDtrQkFBSyxPQUFLLG1CQUFtQjtBQUNoRix5REFBUSxXQUFVLGdCQUFlLE1BQUssVUFBUyxTQUFTLGlCQUFDLEdBQUQ7a0JBQUssT0FBSyxjQUFjO0FBQWhGLGNBRUYseURBQUssV0FDRixnQkFJUjs7Ozs7R0F6RDBCLGdCQUFNOztnQkE0RHBCOzs7Ozs7Ozs7aUNBbkVUOztpQ0FPQSIsImZpbGUiOiIwLmI3YWU0MGE5OGQyMDhmY2JhZmI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgZGl2Q2lyY2xlID0ge1xyXG4gICAgd2lkdGg6ICc1MDBweCcsXHJcbiAgICBoZWlnaHQ6ICc1MDBweCcsXHJcbiAgICBiYWNrZ3JvdW5kOiAnI0U1RTVFNScsXHJcbiAgICBib3JkZXI6ICd0aGluIHNvbGlkICNCN0I3QjcnXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGVQaWN0dXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGF4aW9zKHtcclxuICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VySW1hZ2UnLFxyXG4gICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRlID0ge2ZpbGU6ICcnLCBmaWxlUHJldmlldzogJyd9O1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnVXBsb2FkaW5nOiAnLCB0aGlzLnN0YXRlLmZpbGUpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUltYWdlQ2hhbmdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICBmaWxlUHJldmlldzogcmVhZGVyLnJlc3VsdFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtmaWxlUHJldmlld30gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0ICRpbWFnZVByZXZpZXcgPSBudWxsO1xyXG4gICAgaWYgKGZpbGVQcmV2aWV3KSB7XHJcbiAgICAgICRpbWFnZVByZXZpZXcgPSAoPGltZyBzcmM9e2ZpbGVQcmV2aWV3fSAvPik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxpbWcgc3JjPXtmaWxlUHJldmlld30gLz4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0NvbXBvbmVudFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpPT50aGlzLl9oYW5kbGVJbWFnZUNoYW5nZShlKX0gLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5faGFuZGxlU3VibWl0KGUpfT5VcGxvYWQgSW1hZ2U8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XHJcbiAgICAgICAgICB7JGltYWdlUHJldmlld31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGljdHVyZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZVBpY3R1cmUuanMiXSwic291cmNlUm9vdCI6IiJ9