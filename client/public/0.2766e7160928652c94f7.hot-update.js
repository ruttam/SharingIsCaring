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
	  width: '250px',
	  height: '250px',
	  background: '#E5E5E5',
	  border: 'thin solid #B7B7B7',
	  borderRadius: '50%'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUGljdHVyZS5qcz8zNzIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1VBRUY7V0FDQTtlQUNBO1dBQ0E7aUJBQWM7QUFKZDs7S0FPRTs2QkFDSjs7MkJBQVksT0FBTzsyQkFBQTs7aUlBRWpCOzs7ZUFFRTtZQUNBO2FBQ0E7YUFBTSxNQUFLLE1BQ1g7aUJBQVU7QUFKVixRQU1ELEtBQUssVUFBQyxRQUNMO2VBQVEsSUFDVDtBQUNEO1dBQUssUUFBUSxFQUFDLE1BQU0sSUFBSSxhQUFhO1lBQ3RDOzs7OzttQ0FFYSxHQUNaO1NBQ0E7ZUFBUSxJQUFJLGVBQWUsS0FBSyxNQUNqQzs7Ozt3Q0FFa0IsR0FBRztvQkFDcEI7O1NBRUE7O1dBQUksU0FBUyxJQUNiO1dBQUksT0FBTyxFQUFFLE9BQU8sTUFFcEI7O2NBQU8sWUFBWSxZQUNqQjtnQkFBSztpQkFFSDt3QkFBYSxPQUVoQjtBQUhHO0FBS0o7O2NBQU8sY0FDUjs7Ozs4QkFFUTtvQkFBQTs7V0FDRixjQUFlLEtBQUssTUFDekI7O1dBQUksZ0JBQ0o7V0FBSSxhQUNGO3lCQUFpQix1Q0FBSyxPQUFrQixvREFBSyxPQUFPLFdBQVcsS0FDaEU7QUFGRCxjQUdFO3lCQUFpQix1Q0FBSyxPQUFrQixvREFBSyxPQUFPLFdBQVcsS0FDaEU7QUFFRDs7Y0FDRSx1Q0FBSyxXQUNILDhEQUFNLFVBQVUsa0JBQUMsR0FBRDtrQkFBSyxPQUFLLGNBQWM7QUFDdEMsdURBQU8sV0FBVSxhQUFZLE1BQUssUUFBTyxVQUFVLGtCQUFDLEdBQUQ7a0JBQUssT0FBSyxtQkFBbUI7QUFDaEYseURBQVEsV0FBVSxnQkFBZSxNQUFLLFVBQVMsU0FBUyxpQkFBQyxHQUFEO2tCQUFLLE9BQUssY0FBYztBQUFoRixjQUVGLHlEQUFLLFdBQ0YsZ0JBSVI7Ozs7O0dBekQwQixnQkFBTTs7Z0JBNERwQjs7Ozs7Ozs7O2lDQXBFVDs7aUNBUUEiLCJmaWxlIjoiMC4yNzY2ZTcxNjA5Mjg2NTJjOTRmNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNvbnN0IGRpdkNpcmNsZSA9IHtcclxuICAgIHdpZHRoOiAnMjUwcHgnLFxyXG4gICAgaGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgYmFja2dyb3VuZDogJyNFNUU1RTUnLFxyXG4gICAgYm9yZGVyOiAndGhpbiBzb2xpZCAjQjdCN0I3JyxcclxuICAgIGJvcmRlclJhZGl1czogJzUwJSdcclxufVxyXG5cclxuY2xhc3MgUHJvZmlsZVBpY3R1cmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgYXhpb3Moe1xyXG4gICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXJJbWFnZS9nZXQnLFxyXG4gICAgICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAgIGRhdGE6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgIH0pXHJcbiAgICAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnN0YXRlID0ge2ZpbGU6ICcnLCBmaWxlUHJldmlldzogJyd9O1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZygnVXBsb2FkaW5nOiAnLCB0aGlzLnN0YXRlLmZpbGUpO1xyXG4gIH1cclxuXHJcbiAgX2hhbmRsZUltYWdlQ2hhbmdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIGxldCBmaWxlID0gZS50YXJnZXQuZmlsZXNbMF07XHJcblxyXG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgZmlsZTogZmlsZSxcclxuICAgICAgICBmaWxlUHJldmlldzogcmVhZGVyLnJlc3VsdFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKVxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgbGV0IHtmaWxlUHJldmlld30gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0ICRpbWFnZVByZXZpZXcgPSBudWxsO1xyXG4gICAgaWYgKGZpbGVQcmV2aWV3KSB7XHJcbiAgICAgICRpbWFnZVByZXZpZXcgPSAoPGRpdiBzdHlsZT17ZGl2Q2lyY2xlfT48aW1nIHN0eWxlPXtkaXZDaXJjbGV9IHNyYz17ZmlsZVByZXZpZXd9IC8+PC9kaXY+KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICRpbWFnZVByZXZpZXcgPSAoPGRpdiBzdHlsZT17ZGl2Q2lyY2xlfT48aW1nIHN0eWxlPXtkaXZDaXJjbGV9IHNyYz17ZmlsZVByZXZpZXd9IC8+PC9kaXY+KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdDb21wb25lbnRcIj5cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT50aGlzLl9oYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZpbGVJbnB1dFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKT0+dGhpcy5faGFuZGxlSW1hZ2VDaGFuZ2UoZSl9IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+VXBsb2FkIEltYWdlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nUHJldmlld1wiPlxyXG4gICAgICAgICAgeyRpbWFnZVByZXZpZXd9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBpY3R1cmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVQaWN0dXJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==