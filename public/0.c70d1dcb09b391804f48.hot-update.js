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
	
	var _axios = __webpack_require__(447);
	
	var _axios2 = _interopRequireDefault(_axios);
	
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
	
	    (0, _axios2.default)({
	      method: 'GET',
	      url: 'http://localhost:5000/api/userImage/get',
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
	        $imagePreview = _react2.default.createElement('div', { style: divCircle }, _react2.default.createElement('img', { style: divCircle, src: filePreview }));
	      } else {
	        $imagePreview = _react2.default.createElement('div', { style: divCircle }, _react2.default.createElement('img', { style: divCircle, src: filePreview }));
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

	  __REACT_HOT_LOADER__.register(_axios2, "_axios2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/ProfilePicture.js");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUGljdHVyZS5qcz8zNzIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1VBRUY7V0FDQTtlQUNBO1dBQVE7QUFIUjs7S0FNRTs2QkFDSjs7MkJBQVksT0FBTzsyQkFBQTs7aUlBRWpCOzs7ZUFFRTtZQUNBO2FBQ0E7YUFBTSxNQUFLLE1BQ1g7aUJBQVU7QUFKVixRQU1ELEtBQUssVUFBQyxRQUNMO2VBQVEsSUFDVDtBQUNEO1dBQUssUUFBUSxFQUFDLE1BQU0sSUFBSSxhQUFhO1lBQ3RDOzs7OzttQ0FFYSxHQUNaO1NBQ0E7ZUFBUSxJQUFJLGVBQWUsS0FBSyxNQUNqQzs7Ozt3Q0FFa0IsR0FBRztvQkFDcEI7O1NBRUE7O1dBQUksU0FBUyxJQUNiO1dBQUksT0FBTyxFQUFFLE9BQU8sTUFFcEI7O2NBQU8sWUFBWSxZQUNqQjtnQkFBSztpQkFFSDt3QkFBYSxPQUVoQjtBQUhHO0FBS0o7O2NBQU8sY0FDUjs7Ozs4QkFFUTtvQkFBQTs7V0FDRixjQUFlLEtBQUssTUFDekI7O1dBQUksZ0JBQ0o7V0FBSSxhQUNGO3lCQUFpQix1Q0FBSyxPQUFrQixvREFBSyxPQUFPLFdBQVcsS0FDaEU7QUFGRCxjQUdFO3lCQUFpQix1Q0FBSyxPQUFrQixvREFBSyxPQUFPLFdBQVcsS0FDaEU7QUFFRDs7Y0FDRSx1Q0FBSyxXQUNILDhEQUFNLFVBQVUsa0JBQUMsR0FBRDtrQkFBSyxPQUFLLGNBQWM7QUFDdEMsdURBQU8sV0FBVSxhQUFZLE1BQUssUUFBTyxVQUFVLGtCQUFDLEdBQUQ7a0JBQUssT0FBSyxtQkFBbUI7QUFDaEYseURBQVEsV0FBVSxnQkFBZSxNQUFLLFVBQVMsU0FBUyxpQkFBQyxHQUFEO2tCQUFLLE9BQUssY0FBYztBQUFoRixjQUVGLHlEQUFLLFdBQ0YsZ0JBSVI7Ozs7O0dBekQwQixnQkFBTTs7Z0JBNERwQjs7Ozs7Ozs7O2lDQW5FVDs7aUNBT0EiLCJmaWxlIjoiMC5jNzBkMWRjYjA5YjM5MTgwNGY0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGRpdkNpcmNsZSA9IHtcclxuICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgaGVpZ2h0OiAnNTAwcHgnLFxyXG4gICAgYmFja2dyb3VuZDogJyNFNUU1RTUnLFxyXG4gICAgYm9yZGVyOiAndGhpbiBzb2xpZCAjQjdCN0I3J1xyXG59XHJcblxyXG5jbGFzcyBQcm9maWxlUGljdHVyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcbiAgICBheGlvcyh7XHJcbiAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlckltYWdlL2dldCcsXHJcbiAgICAgIG1vZGU6ICduby1jb3JzJyxcclxuICAgICAgZGF0YTogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgZGF0YVR5cGU6ICdqc29uJ1xyXG4gICAgfSlcclxuICAgIC50aGVuKChyZXN1bHQpPT57XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuc3RhdGUgPSB7ZmlsZTogJycsIGZpbGVQcmV2aWV3OiAnJ307XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKCdVcGxvYWRpbmc6ICcsIHRoaXMuc3RhdGUuZmlsZSk7XHJcbiAgfVxyXG5cclxuICBfaGFuZGxlSW1hZ2VDaGFuZ2UoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgbGV0IGZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcclxuXHJcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICBmaWxlOiBmaWxlLFxyXG4gICAgICAgIGZpbGVQcmV2aWV3OiByZWFkZXIucmVzdWx0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBsZXQge2ZpbGVQcmV2aWV3fSA9IHRoaXMuc3RhdGU7XHJcbiAgICBsZXQgJGltYWdlUHJldmlldyA9IG51bGw7XHJcbiAgICBpZiAoZmlsZVByZXZpZXcpIHtcclxuICAgICAgJGltYWdlUHJldmlldyA9ICg8ZGl2IHN0eWxlPXtkaXZDaXJjbGV9PjxpbWcgc3R5bGU9e2RpdkNpcmNsZX0gc3JjPXtmaWxlUHJldmlld30gLz48L2Rpdj4pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgJGltYWdlUHJldmlldyA9ICg8ZGl2IHN0eWxlPXtkaXZDaXJjbGV9PjxpbWcgc3R5bGU9e2RpdkNpcmNsZX0gc3JjPXtmaWxlUHJldmlld30gLz48L2Rpdj4pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJldmlld0NvbXBvbmVudFwiPlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+XHJcbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZmlsZUlucHV0XCIgdHlwZT1cImZpbGVcIiBvbkNoYW5nZT17KGUpPT50aGlzLl9oYW5kbGVJbWFnZUNoYW5nZShlKX0gLz5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0QnV0dG9uXCIgdHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9eyhlKT0+dGhpcy5faGFuZGxlU3VibWl0KGUpfT5VcGxvYWQgSW1hZ2U8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdQcmV2aWV3XCI+XHJcbiAgICAgICAgICB7JGltYWdlUHJldmlld31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlUGljdHVyZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZVBpY3R1cmUuanMiXSwic291cmNlUm9vdCI6IiJ9