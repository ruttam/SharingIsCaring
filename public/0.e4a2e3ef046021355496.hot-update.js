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
	  width: '200px',
	  height: '200px',
	  background: '#E5E5E5',
	  border: 'thin solid #B7B7B7',
	  borderRadius: '50%'
	};
	
	var ProfilePicture = function (_React$Component) {
	  _inherits(ProfilePicture, _React$Component);
	
	  function ProfilePicture(props) {
	    _classCallCheck(this, ProfilePicture);
	
	    // axios({
	    //   method: 'GET',
	    //   url: 'http://localhost:5000/api/userImage/get',
	    //   mode: 'no-cors',
	    //   data: this.props.id,
	    //   dataType: 'json'
	    // })
	    // .then((result)=>{
	    //   console.log(result);
	    // });
	    var _this = _possibleConstructorReturn(this, (ProfilePicture.__proto__ || Object.getPrototypeOf(ProfilePicture)).call(this, props));
	
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
	
	      return _react2.default.createElement('div', { className: 'col-lg-4' }, _react2.default.createElement('div', { className: 'previewComponent' }, _react2.default.createElement('div', { className: 'imgPreview' }, $imagePreview, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
	          return _this3._handleSubmit(e);
	        } }, _react2.default.createElement('input', { className: 'fileInput', type: 'file', onChange: function onChange(e) {
	          return _this3._handleImageChange(e);
	        } }), _react2.default.createElement('button', { className: 'submitButton', type: 'submit', onClick: function onClick(e) {
	          return _this3._handleSubmit(e);
	        } }, 'Upload Image')))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlUGljdHVyZS5qcz8zNzIyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1VBRUY7V0FDQTtlQUNBO1dBQ0E7aUJBQWM7QUFKZDs7S0FPRTs2QkFDSjs7MkJBQVksT0FBTzsyQkFFakI7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWGlCO2lJQVlqQjs7V0FBSyxRQUFRLEVBQUMsTUFBTSxJQUFJLGFBQWE7WUFDdEM7Ozs7O21DQUVhLEdBQ1o7U0FDQTtlQUFRLElBQUksZUFBZSxLQUFLLE1BQ2pDOzs7O3dDQUVrQixHQUFHO29CQUNwQjs7U0FFQTs7V0FBSSxTQUFTLElBQ2I7V0FBSSxPQUFPLEVBQUUsT0FBTyxNQUVwQjs7Y0FBTyxZQUFZLFlBQ2pCO2dCQUFLO2lCQUVIO3dCQUFhLE9BRWhCO0FBSEc7QUFLSjs7Y0FBTyxjQUNSOzs7OzhCQUVRO29CQUFBOztXQUNGLGNBQWUsS0FBSyxNQUN6Qjs7V0FBSSxnQkFDSjtXQUFJLGFBQ0Y7eUJBQWlCLHVDQUFLLE9BQWtCLG9EQUFLLE9BQU8sV0FBVyxLQUNoRTtBQUZELGNBR0U7eUJBQWlCLHVDQUFLLE9BQWtCLG9EQUFLLE9BQU8sV0FBVyxLQUNoRTtBQUVEOztjQUNFLHVDQUFLLFdBQ0wscURBQUssV0FDSCw2REFBSyxXQUNKLGdCQUNELHVEQUFNLFVBQVUsa0JBQUMsR0FBRDtrQkFBSyxPQUFLLGNBQWM7QUFDdEMsdURBQU8sV0FBVSxhQUFZLE1BQUssUUFBTyxVQUFVLGtCQUFDLEdBQUQ7a0JBQUssT0FBSyxtQkFBbUI7QUFDaEYseURBQVEsV0FBVSxnQkFBZSxNQUFLLFVBQVMsU0FBUyxpQkFBQyxHQUFEO2tCQUFLLE9BQUssY0FBYztBQUFoRixjQU9QOzs7OztHQTVEMEIsZ0JBQU07O2dCQStEcEI7Ozs7Ozs7OztpQ0F2RVQ7O2lDQVFBIiwiZmlsZSI6IjAuZTRhMmUzZWYwNDYwMjEzNTU0OTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBkaXZDaXJjbGUgPSB7XHJcbiAgICB3aWR0aDogJzIwMHB4JyxcclxuICAgIGhlaWdodDogJzIwMHB4JyxcclxuICAgIGJhY2tncm91bmQ6ICcjRTVFNUU1JyxcclxuICAgIGJvcmRlcjogJ3RoaW4gc29saWQgI0I3QjdCNycsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc1MCUnXHJcbn1cclxuXHJcbmNsYXNzIFByb2ZpbGVQaWN0dXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xuICAgIC8vIGF4aW9zKHtcclxuICAgIC8vICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2FwaS91c2VySW1hZ2UvZ2V0JyxcclxuICAgIC8vICAgbW9kZTogJ25vLWNvcnMnLFxyXG4gICAgLy8gICBkYXRhOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgLy8gICBkYXRhVHlwZTogJ2pzb24nXHJcbiAgICAvLyB9KVxyXG4gICAgLy8gLnRoZW4oKHJlc3VsdCk9PntcclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIH0pO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtmaWxlOiAnJywgZmlsZVByZXZpZXc6ICcnfTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc29sZS5sb2coJ1VwbG9hZGluZzogJywgdGhpcy5zdGF0ZS5maWxlKTtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVJbWFnZUNoYW5nZShlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICBsZXQgZmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xyXG5cclxuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGZpbGU6IGZpbGUsXHJcbiAgICAgICAgZmlsZVByZXZpZXc6IHJlYWRlci5yZXN1bHRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSlcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGxldCB7ZmlsZVByZXZpZXd9ID0gdGhpcy5zdGF0ZTtcclxuICAgIGxldCAkaW1hZ2VQcmV2aWV3ID0gbnVsbDtcclxuICAgIGlmIChmaWxlUHJldmlldykge1xyXG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxkaXYgc3R5bGU9e2RpdkNpcmNsZX0+PGltZyBzdHlsZT17ZGl2Q2lyY2xlfSBzcmM9e2ZpbGVQcmV2aWV3fSAvPjwvZGl2Pik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAkaW1hZ2VQcmV2aWV3ID0gKDxkaXYgc3R5bGU9e2RpdkNpcmNsZX0+PGltZyBzdHlsZT17ZGl2Q2lyY2xlfSBzcmM9e2ZpbGVQcmV2aWV3fSAvPjwvZGl2Pik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByZXZpZXdDb21wb25lbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZ1ByZXZpZXdcIj5cclxuICAgICAgICB7JGltYWdlUHJldmlld31cclxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpPT50aGlzLl9oYW5kbGVTdWJtaXQoZSl9PlxyXG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZpbGVJbnB1dFwiIHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9eyhlKT0+dGhpcy5faGFuZGxlSW1hZ2VDaGFuZ2UoZSl9IC8+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInN1Ym1pdEJ1dHRvblwiIHR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXsoZSk9PnRoaXMuX2hhbmRsZVN1Ym1pdChlKX0+VXBsb2FkIEltYWdlPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBpY3R1cmU7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1Byb2ZpbGVQaWN0dXJlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==