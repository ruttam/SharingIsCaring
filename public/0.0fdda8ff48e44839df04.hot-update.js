webpackHotUpdate(0,{

/***/ 653:
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
	
	var _Validation = __webpack_require__(654);
	
	var _Validation2 = _interopRequireDefault(_Validation);
	
	var _TextFieldGroup = __webpack_require__(363);
	
	var _TextFieldGroup2 = _interopRequireDefault(_TextFieldGroup);
	
	var _reactRouter = __webpack_require__(259);
	
	var _when = __webpack_require__(675);
	
	var _when2 = _interopRequireDefault(_when);
	
	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}
	
	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
	  } else {
	    obj[key] = value;
	  }return obj;
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
	
	var divStyle = {
	  margin: "0 0 5px 0"
	};
	
	var baseUrl = 'http://localhost:5000/api/user';
	
	var Registration = function (_React$Component) {
	  _inherits(Registration, _React$Component);
	
	  function Registration(props) {
	    _classCallCheck(this, Registration);
	
	    var _this = _possibleConstructorReturn(this, (Registration.__proto__ || Object.getPrototypeOf(Registration)).call(this, props));
	
	    _this.state = {
	      email: '',
	      password: '',
	      passwordConfirmation: '',
	      errors: {},
	      invalid: false
	    };
	    return _this;
	  }
	
	  _createClass(Registration, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement('div', null, _react2.default.createElement('form', { onSubmit: this._handleSubmit.bind(this) }, _react2.default.createElement('h4', null, 'register'), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.email,
	        onChange: this._onChange.bind(this),
	        checkEmailExists: this._checkEmailExists.bind(this),
	        value: this.state.email,
	        placeholder: 'email',
	        field: 'email',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.password,
	        onChange: this._onChange.bind(this),
	        checkEmailExists: this._checkEmailExists.bind(this),
	        value: this.state.password,
	        placeholder: 'password',
	        field: 'password',
	        type: 'password',
	        divStyle: divStyle
	      }), _react2.default.createElement(_TextFieldGroup2.default, {
	        error: this.state.errors.passwordConfirmation,
	        onChange: this._onChange.bind(this),
	        checkEmailExists: this._checkEmailExists.bind(this),
	        value: this.state.passwordConfirmation,
	        field: 'passwordConfirmation',
	        type: 'password',
	        placeholder: 'confirm password',
	        divStyle: divStyle
	      }), _react2.default.createElement('div', null), _react2.default.createElement('input', { disabled: this.state.invalid, className: 'btn .btn-primary', type: 'submit', value: 'register' })));
	    }
	  }, {
	    key: '_onChange',
	    value: function _onChange(event) {
	      this.setState(_defineProperty({}, event.target.name, event.target.value));
	    }
	  }, {
	    key: '_checkEmailExists',
	    value: function _checkEmailExists(event) {
	      var _this2 = this;
	
	      var field = event.target.name;
	      var value = event.target.value;
	      if (val !== '') {
	        this.props.isEmailExists(value).then(function (res) {
	          var errors = _this2.state.errors;
	          var invalid = void 0;
	          if (res.data.user) {
	            errors[field] = 'There is user with such ' + field;
	            invalid = true;
	          } else {
	            errors[field] = '';
	            invalid = false;
	          }
	          _this2.setState({ erros: erros, invalid: invalid });
	        });
	      }
	    }
	  }, {
	    key: 'isValid',
	    value: function isValid() {
	      var _validateInput = (0, _Validation2.default)(this.state),
	          errors = _validateInput.errors,
	          isValid = _validateInput.isValid;
	
	      if (!isValid) {
	        this.setState({ errors: errors });
	      }
	      return isValid;
	    }
	  }, {
	    key: '_handleSubmit',
	    value: function _handleSubmit(event) {
	      var _this3 = this;
	
	      event.preventDefault();
	      console.log(this.state);
	      if (this.isValid(this.state)) {
	        this.setState({ errors: {} });
	        this.props.registrationRequest(this.state).then(function () {
	          _this3.props.addFlashMessage({
	            type: 'success',
	            text: 'You registered successfully! Welcome to Vaziuoju-Vezu!'
	          });
	          _reactRouter.hashHistory.push('/');
	          //or this.context.router.push('/');
	        }, function (err) {
	          // this.setState({errors: err.response.data})
	          console.log(err);
	        });
	      }
	      //);
	      //     $.ajax({
	      //   type: "POST",
	      //   url: `${baseUrl}`,
	      //   data: this.state,
	      //      dataType: 'json',
	      //   success: function(e){console.log("Ok")}
	      // });
	      // axios({
	      //   method: 'POST',
	      //   url: 'http://localhost:5000/api/user',
	      //   mode: 'no-cors',
	      //   headers: {
	      //     'Content-Type': 'application/json'
	      //   },
	      //   data: this.state,
	      //   dataType: 'json'
	      // })
	      // .then((result)=>{
	      //
	      //   console.log(result);
	      // });
	    }
	  }]);
	
	  return Registration;
	}(_react2.default.Component);
	
	Registration.propTypes = {
	  registrationRequest: _react2.default.PropTypes.func.isRequired,
	  addFlashMessage: _react2.default.PropTypes.func.isRequired,
	  isEmailExists: _react2.default.PropTypes.func.isRequired
	};
	
	Registration.contextTypes = {
	  router: _react2.default.PropTypes.object.isRequired
	};
	
	var _default = Registration;
	exports.default = _default;
	;
	
	var _temp = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }
	
	  __REACT_HOT_LOADER__.register(divStyle, 'divStyle', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	
	  __REACT_HOT_LOADER__.register(baseUrl, 'baseUrl', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	
	  __REACT_HOT_LOADER__.register(Registration, 'Registration', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	
	  __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js');
	}();

	;
	;

	var _temp2 = function () {
	  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	    return;
	  }

	  __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_axios2, "_axios2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_Validation2, "_Validation2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_TextFieldGroup2, "_TextFieldGroup2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_when2, "_when2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_defineProperty, "_defineProperty", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(divStyle, "divStyle", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(baseUrl, "baseUrl", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(Registration, "Registration", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");

	  __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Registration.js");
	}();

	;

/***/ },

/***/ 675:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	
	/**
	 * Promises/A+ and when() implementation
	 * when is part of the cujoJS family of libraries (http://cujojs.com/)
	 * @author Brian Cavalier
	 * @author John Hann
	 */
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
		var timed = __webpack_require__(676);
		var array = __webpack_require__(681);
		var flow = __webpack_require__(684);
		var fold = __webpack_require__(685);
		var inspect = __webpack_require__(686);
		var generate = __webpack_require__(687);
		var progress = __webpack_require__(688);
		var withThis = __webpack_require__(689);
		var unhandledRejection = __webpack_require__(690);
		var TimeoutError = __webpack_require__(680);
	
		var Promise = [array, flow, fold, generate, progress,
			inspect, withThis, timed, unhandledRejection]
			.reduce(function(Promise, feature) {
				return feature(Promise);
			}, __webpack_require__(692));
	
		var apply = __webpack_require__(683)(Promise);
	
		// Public API
	
		when.promise     = promise;              // Create a pending promise
		when.resolve     = Promise.resolve;      // Create a resolved promise
		when.reject      = Promise.reject;       // Create a rejected promise
	
		when.lift        = lift;                 // lift a function to return promises
		when['try']      = attempt;              // call a function and return a promise
		when.attempt     = attempt;              // alias for when.try
	
		when.iterate     = Promise.iterate;      // DEPRECATED (use cujojs/most streams) Generate a stream of promises
		when.unfold      = Promise.unfold;       // DEPRECATED (use cujojs/most streams) Generate a stream of promises
	
		when.join        = join;                 // Join 2 or more promises
	
		when.all         = all;                  // Resolve a list of promises
		when.settle      = settle;               // Settle a list of promises
	
		when.any         = lift(Promise.any);    // One-winner race
		when.some        = lift(Promise.some);   // Multi-winner race
		when.race        = lift(Promise.race);   // First-to-settle race
	
		when.map         = map;                  // Array.map() for promises
		when.filter      = filter;               // Array.filter() for promises
		when.reduce      = lift(Promise.reduce);       // Array.reduce() for promises
		when.reduceRight = lift(Promise.reduceRight);  // Array.reduceRight() for promises
	
		when.isPromiseLike = isPromiseLike;      // Is something promise-like, aka thenable
	
		when.Promise     = Promise;              // Promise constructor
		when.defer       = defer;                // Create a {promise, resolve, reject} tuple
	
		// Error types
	
		when.TimeoutError = TimeoutError;
	
		/**
		 * Get a trusted promise for x, or by transforming x with onFulfilled
		 *
		 * @param {*} x
		 * @param {function?} onFulfilled callback to be called when x is
		 *   successfully fulfilled.  If promiseOrValue is an immediate value, callback
		 *   will be invoked immediately.
		 * @param {function?} onRejected callback to be called when x is
		 *   rejected.
		 * @param {function?} onProgress callback to be called when progress updates
		 *   are issued for x. @deprecated
		 * @returns {Promise} a new promise that will fulfill with the return
		 *   value of callback or errback or the completion value of promiseOrValue if
		 *   callback and/or errback is not supplied.
		 */
		function when(x, onFulfilled, onRejected, onProgress) {
			var p = Promise.resolve(x);
			if (arguments.length < 2) {
				return p;
			}
	
			return p.then(onFulfilled, onRejected, onProgress);
		}
	
		/**
		 * Creates a new promise whose fate is determined by resolver.
		 * @param {function} resolver function(resolve, reject, notify)
		 * @returns {Promise} promise whose fate is determine by resolver
		 */
		function promise(resolver) {
			return new Promise(resolver);
		}
	
		/**
		 * Lift the supplied function, creating a version of f that returns
		 * promises, and accepts promises as arguments.
		 * @param {function} f
		 * @returns {Function} version of f that returns promises
		 */
		function lift(f) {
			return function() {
				for(var i=0, l=arguments.length, a=new Array(l); i<l; ++i) {
					a[i] = arguments[i];
				}
				return apply(f, this, a);
			};
		}
	
		/**
		 * Call f in a future turn, with the supplied args, and return a promise
		 * for the result.
		 * @param {function} f
		 * @returns {Promise}
		 */
		function attempt(f /*, args... */) {
			/*jshint validthis:true */
			for(var i=0, l=arguments.length-1, a=new Array(l); i<l; ++i) {
				a[i] = arguments[i+1];
			}
			return apply(f, this, a);
		}
	
		/**
		 * Creates a {promise, resolver} pair, either or both of which
		 * may be given out safely to consumers.
		 * @return {{promise: Promise, resolve: function, reject: function, notify: function}}
		 */
		function defer() {
			return new Deferred();
		}
	
		function Deferred() {
			var p = Promise._defer();
	
			function resolve(x) { p._handler.resolve(x); }
			function reject(x) { p._handler.reject(x); }
			function notify(x) { p._handler.notify(x); }
	
			this.promise = p;
			this.resolve = resolve;
			this.reject = reject;
			this.notify = notify;
			this.resolver = { resolve: resolve, reject: reject, notify: notify };
		}
	
		/**
		 * Determines if x is promise-like, i.e. a thenable object
		 * NOTE: Will return true for *any thenable object*, and isn't truly
		 * safe, since it may attempt to access the `then` property of x (i.e.
		 *  clever/malicious getters may do weird things)
		 * @param {*} x anything
		 * @returns {boolean} true if x is promise-like
		 */
		function isPromiseLike(x) {
			return x && typeof x.then === 'function';
		}
	
		/**
		 * Return a promise that will resolve only once all the supplied arguments
		 * have resolved. The resolution value of the returned promise will be an array
		 * containing the resolution values of each of the arguments.
		 * @param {...*} arguments may be a mix of promises and values
		 * @returns {Promise}
		 */
		function join(/* ...promises */) {
			return Promise.all(arguments);
		}
	
		/**
		 * Return a promise that will fulfill once all input promises have
		 * fulfilled, or reject when any one input promise rejects.
		 * @param {array|Promise} promises array (or promise for an array) of promises
		 * @returns {Promise}
		 */
		function all(promises) {
			return when(promises, Promise.all);
		}
	
		/**
		 * Return a promise that will always fulfill with an array containing
		 * the outcome states of all input promises.  The returned promise
		 * will only reject if `promises` itself is a rejected promise.
		 * @param {array|Promise} promises array (or promise for an array) of promises
		 * @returns {Promise} promise for array of settled state descriptors
		 */
		function settle(promises) {
			return when(promises, Promise.settle);
		}
	
		/**
		 * Promise-aware array map function, similar to `Array.prototype.map()`,
		 * but input array may contain promises or values.
		 * @param {Array|Promise} promises array of anything, may contain promises and values
		 * @param {function(x:*, index:Number):*} mapFunc map function which may
		 *  return a promise or value
		 * @returns {Promise} promise that will fulfill with an array of mapped values
		 *  or reject if any input promise rejects.
		 */
		function map(promises, mapFunc) {
			return when(promises, function(promises) {
				return Promise.map(promises, mapFunc);
			});
		}
	
		/**
		 * Filter the provided array of promises using the provided predicate.  Input may
		 * contain promises and values
		 * @param {Array|Promise} promises array of promises and values
		 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
		 *  Must return truthy (or promise for truthy) for items to retain.
		 * @returns {Promise} promise that will fulfill with an array containing all items
		 *  for which predicate returned truthy.
		 */
		function filter(promises, predicate) {
			return when(promises, function(promises) {
				return Promise.filter(promises, predicate);
			});
		}
	
		return when;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(679));


/***/ },

/***/ 676:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var env = __webpack_require__(677);
		var TimeoutError = __webpack_require__(680);
	
		function setTimeout(f, ms, x, y) {
			return env.setTimer(function() {
				f(x, y, ms);
			}, ms);
		}
	
		return function timed(Promise) {
			/**
			 * Return a new promise whose fulfillment value is revealed only
			 * after ms milliseconds
			 * @param {number} ms milliseconds
			 * @returns {Promise}
			 */
			Promise.prototype.delay = function(ms) {
				var p = this._beget();
				this._handler.fold(handleDelay, ms, void 0, p._handler);
				return p;
			};
	
			function handleDelay(ms, x, h) {
				setTimeout(resolveDelay, ms, x, h);
			}
	
			function resolveDelay(x, h) {
				h.resolve(x);
			}
	
			/**
			 * Return a new promise that rejects after ms milliseconds unless
			 * this promise fulfills earlier, in which case the returned promise
			 * fulfills with the same value.
			 * @param {number} ms milliseconds
			 * @param {Error|*=} reason optional rejection reason to use, defaults
			 *   to a TimeoutError if not provided
			 * @returns {Promise}
			 */
			Promise.prototype.timeout = function(ms, reason) {
				var p = this._beget();
				var h = p._handler;
	
				var t = setTimeout(onTimeout, ms, reason, p._handler);
	
				this._handler.visit(h,
					function onFulfill(x) {
						env.clearTimer(t);
						this.resolve(x); // this = h
					},
					function onReject(x) {
						env.clearTimer(t);
						this.reject(x); // this = h
					},
					h.notify);
	
				return p;
			};
	
			function onTimeout(reason, h, ms) {
				var e = typeof reason === 'undefined'
					? new TimeoutError('timed out after ' + ms + 'ms')
					: reason;
				h.reject(e);
			}
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 677:
/***/ function(module, exports, __webpack_require__) {

	var require;var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	/*global process,document,setTimeout,clearTimeout,MutationObserver,WebKitMutationObserver*/
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
		/*jshint maxcomplexity:6*/
	
		// Sniff "best" async scheduling option
		// Prefer process.nextTick or MutationObserver, then check for
		// setTimeout, and finally vertx, since its the only env that doesn't
		// have setTimeout
	
		var MutationObs;
		var capturedSetTimeout = typeof setTimeout !== 'undefined' && setTimeout;
	
		// Default env
		var setTimer = function(f, ms) { return setTimeout(f, ms); };
		var clearTimer = function(t) { return clearTimeout(t); };
		var asap = function (f) { return capturedSetTimeout(f, 0); };
	
		// Detect specific env
		if (isNode()) { // Node
			asap = function (f) { return process.nextTick(f); };
	
		} else if (MutationObs = hasMutationObserver()) { // Modern browser
			asap = initMutationObserver(MutationObs);
	
		} else if (!capturedSetTimeout) { // vert.x
			var vertxRequire = require;
			var vertx = __webpack_require__(678);
			setTimer = function (f, ms) { return vertx.setTimer(ms, f); };
			clearTimer = vertx.cancelTimer;
			asap = vertx.runOnLoop || vertx.runOnContext;
		}
	
		return {
			setTimer: setTimer,
			clearTimer: clearTimer,
			asap: asap
		};
	
		function isNode () {
			return typeof process !== 'undefined' &&
				Object.prototype.toString.call(process) === '[object process]';
		}
	
		function hasMutationObserver () {
			return (typeof MutationObserver === 'function' && MutationObserver) ||
				(typeof WebKitMutationObserver === 'function' && WebKitMutationObserver);
		}
	
		function initMutationObserver(MutationObserver) {
			var scheduled;
			var node = document.createTextNode('');
			var o = new MutationObserver(run);
			o.observe(node, { characterData: true });
	
			function run() {
				var f = scheduled;
				scheduled = void 0;
				f();
			}
	
			var i = 0;
			return function (f) {
				scheduled = f;
				node.data = (i ^= 1);
			};
		}
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },

/***/ 678:
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 679:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },

/***/ 680:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		/**
		 * Custom error type for promises rejected by promise.timeout
		 * @param {string} message
		 * @constructor
		 */
		function TimeoutError (message) {
			Error.call(this);
			this.message = message;
			this.name = TimeoutError.name;
			if (typeof Error.captureStackTrace === 'function') {
				Error.captureStackTrace(this, TimeoutError);
			}
		}
	
		TimeoutError.prototype = Object.create(Error.prototype);
		TimeoutError.prototype.constructor = TimeoutError;
	
		return TimeoutError;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));

/***/ },

/***/ 681:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var state = __webpack_require__(682);
		var applier = __webpack_require__(683);
	
		return function array(Promise) {
	
			var applyFold = applier(Promise);
			var toPromise = Promise.resolve;
			var all = Promise.all;
	
			var ar = Array.prototype.reduce;
			var arr = Array.prototype.reduceRight;
			var slice = Array.prototype.slice;
	
			// Additional array combinators
	
			Promise.any = any;
			Promise.some = some;
			Promise.settle = settle;
	
			Promise.map = map;
			Promise.filter = filter;
			Promise.reduce = reduce;
			Promise.reduceRight = reduceRight;
	
			/**
			 * When this promise fulfills with an array, do
			 * onFulfilled.apply(void 0, array)
			 * @param {function} onFulfilled function to apply
			 * @returns {Promise} promise for the result of applying onFulfilled
			 */
			Promise.prototype.spread = function(onFulfilled) {
				return this.then(all).then(function(array) {
					return onFulfilled.apply(this, array);
				});
			};
	
			return Promise;
	
			/**
			 * One-winner competitive race.
			 * Return a promise that will fulfill when one of the promises
			 * in the input array fulfills, or will reject when all promises
			 * have rejected.
			 * @param {array} promises
			 * @returns {Promise} promise for the first fulfilled value
			 */
			function any(promises) {
				var p = Promise._defer();
				var resolver = p._handler;
				var l = promises.length>>>0;
	
				var pending = l;
				var errors = [];
	
				for (var h, x, i = 0; i < l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}
	
					h = Promise._handler(x);
					if(h.state() > 0) {
						resolver.become(h);
						Promise._visitRemaining(promises, i, h);
						break;
					} else {
						h.visit(resolver, handleFulfill, handleReject);
					}
				}
	
				if(pending === 0) {
					resolver.reject(new RangeError('any(): array must not be empty'));
				}
	
				return p;
	
				function handleFulfill(x) {
					/*jshint validthis:true*/
					errors = null;
					this.resolve(x); // this === resolver
				}
	
				function handleReject(e) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}
	
					errors.push(e);
					if(--pending === 0) {
						this.reject(errors);
					}
				}
			}
	
			/**
			 * N-winner competitive race
			 * Return a promise that will fulfill when n input promises have
			 * fulfilled, or will reject when it becomes impossible for n
			 * input promises to fulfill (ie when promises.length - n + 1
			 * have rejected)
			 * @param {array} promises
			 * @param {number} n
			 * @returns {Promise} promise for the earliest n fulfillment values
			 *
			 * @deprecated
			 */
			function some(promises, n) {
				/*jshint maxcomplexity:7*/
				var p = Promise._defer();
				var resolver = p._handler;
	
				var results = [];
				var errors = [];
	
				var l = promises.length>>>0;
				var nFulfill = 0;
				var nReject;
				var x, i; // reused in both for() loops
	
				// First pass: count actual array items
				for(i=0; i<l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						continue;
					}
					++nFulfill;
				}
	
				// Compute actual goals
				n = Math.max(n, 0);
				nReject = (nFulfill - n + 1);
				nFulfill = Math.min(n, nFulfill);
	
				if(n > nFulfill) {
					resolver.reject(new RangeError('some(): array must contain at least '
					+ n + ' item(s), but had ' + nFulfill));
				} else if(nFulfill === 0) {
					resolver.resolve(results);
				}
	
				// Second pass: observe each array item, make progress toward goals
				for(i=0; i<l; ++i) {
					x = promises[i];
					if(x === void 0 && !(i in promises)) {
						continue;
					}
	
					Promise._handler(x).visit(resolver, fulfill, reject, resolver.notify);
				}
	
				return p;
	
				function fulfill(x) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}
	
					results.push(x);
					if(--nFulfill === 0) {
						errors = null;
						this.resolve(results);
					}
				}
	
				function reject(e) {
					/*jshint validthis:true*/
					if(this.resolved) { // this === resolver
						return;
					}
	
					errors.push(e);
					if(--nReject === 0) {
						results = null;
						this.reject(errors);
					}
				}
			}
	
			/**
			 * Apply f to the value of each promise in a list of promises
			 * and return a new list containing the results.
			 * @param {array} promises
			 * @param {function(x:*, index:Number):*} f mapping function
			 * @returns {Promise}
			 */
			function map(promises, f) {
				return Promise._traverse(f, promises);
			}
	
			/**
			 * Filter the provided array of promises using the provided predicate.  Input may
			 * contain promises and values
			 * @param {Array} promises array of promises and values
			 * @param {function(x:*, index:Number):boolean} predicate filtering predicate.
			 *  Must return truthy (or promise for truthy) for items to retain.
			 * @returns {Promise} promise that will fulfill with an array containing all items
			 *  for which predicate returned truthy.
			 */
			function filter(promises, predicate) {
				var a = slice.call(promises);
				return Promise._traverse(predicate, a).then(function(keep) {
					return filterSync(a, keep);
				});
			}
	
			function filterSync(promises, keep) {
				// Safe because we know all promises have fulfilled if we've made it this far
				var l = keep.length;
				var filtered = new Array(l);
				for(var i=0, j=0; i<l; ++i) {
					if(keep[i]) {
						filtered[j++] = Promise._handler(promises[i]).value;
					}
				}
				filtered.length = j;
				return filtered;
	
			}
	
			/**
			 * Return a promise that will always fulfill with an array containing
			 * the outcome states of all input promises.  The returned promise
			 * will never reject.
			 * @param {Array} promises
			 * @returns {Promise} promise for array of settled state descriptors
			 */
			function settle(promises) {
				return all(promises.map(settleOne));
			}
	
			function settleOne(p) {
				var h = Promise._handler(p);
				if(h.state() === 0) {
					return toPromise(p).then(state.fulfilled, state.rejected);
				}
	
				h._unreport();
				return state.inspect(h);
			}
	
			/**
			 * Traditional reduce function, similar to `Array.prototype.reduce()`, but
			 * input may contain promises and/or values, and reduceFunc
			 * may return either a value or a promise, *and* initialValue may
			 * be a promise for the starting value.
			 * @param {Array|Promise} promises array or promise for an array of anything,
			 *      may contain a mix of promises and values.
			 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
			 * @returns {Promise} that will resolve to the final reduced value
			 */
			function reduce(promises, f /*, initialValue */) {
				return arguments.length > 2 ? ar.call(promises, liftCombine(f), arguments[2])
						: ar.call(promises, liftCombine(f));
			}
	
			/**
			 * Traditional reduce function, similar to `Array.prototype.reduceRight()`, but
			 * input may contain promises and/or values, and reduceFunc
			 * may return either a value or a promise, *and* initialValue may
			 * be a promise for the starting value.
			 * @param {Array|Promise} promises array or promise for an array of anything,
			 *      may contain a mix of promises and values.
			 * @param {function(accumulated:*, x:*, index:Number):*} f reduce function
			 * @returns {Promise} that will resolve to the final reduced value
			 */
			function reduceRight(promises, f /*, initialValue */) {
				return arguments.length > 2 ? arr.call(promises, liftCombine(f), arguments[2])
						: arr.call(promises, liftCombine(f));
			}
	
			function liftCombine(f) {
				return function(z, x, i) {
					return applyFold(f, void 0, [z,x,i]);
				};
			}
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 682:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return {
			pending: toPendingState,
			fulfilled: toFulfilledState,
			rejected: toRejectedState,
			inspect: inspect
		};
	
		function toPendingState() {
			return { state: 'pending' };
		}
	
		function toRejectedState(e) {
			return { state: 'rejected', reason: e };
		}
	
		function toFulfilledState(x) {
			return { state: 'fulfilled', value: x };
		}
	
		function inspect(handler) {
			var state = handler.state();
			return state === 0 ? toPendingState()
				 : state > 0   ? toFulfilledState(handler.value)
				               : toRejectedState(handler.value);
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 683:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		makeApply.tryCatchResolve = tryCatchResolve;
	
		return makeApply;
	
		function makeApply(Promise, call) {
			if(arguments.length < 2) {
				call = tryCatchResolve;
			}
	
			return apply;
	
			function apply(f, thisArg, args) {
				var p = Promise._defer();
				var l = args.length;
				var params = new Array(l);
				callAndResolve({ f:f, thisArg:thisArg, args:args, params:params, i:l-1, call:call }, p._handler);
	
				return p;
			}
	
			function callAndResolve(c, h) {
				if(c.i < 0) {
					return call(c.f, c.thisArg, c.params, h);
				}
	
				var handler = Promise._handler(c.args[c.i]);
				handler.fold(callAndResolveNext, c, void 0, h);
			}
	
			function callAndResolveNext(c, x, h) {
				c.params[c.i] = x;
				c.i -= 1;
				callAndResolve(c, h);
			}
		}
	
		function tryCatchResolve(f, thisArg, args, resolver) {
			try {
				resolver.resolve(f.apply(thisArg, args));
			} catch(e) {
				resolver.reject(e);
			}
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));
	
	


/***/ },

/***/ 684:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function flow(Promise) {
	
			var resolve = Promise.resolve;
			var reject = Promise.reject;
			var origCatch = Promise.prototype['catch'];
	
			/**
			 * Handle the ultimate fulfillment value or rejection reason, and assume
			 * responsibility for all errors.  If an error propagates out of result
			 * or handleFatalError, it will be rethrown to the host, resulting in a
			 * loud stack track on most platforms and a crash on some.
			 * @param {function?} onResult
			 * @param {function?} onError
			 * @returns {undefined}
			 */
			Promise.prototype.done = function(onResult, onError) {
				this._handler.visit(this._handler.receiver, onResult, onError);
			};
	
			/**
			 * Add Error-type and predicate matching to catch.  Examples:
			 * promise.catch(TypeError, handleTypeError)
			 *   .catch(predicate, handleMatchedErrors)
			 *   .catch(handleRemainingErrors)
			 * @param onRejected
			 * @returns {*}
			 */
			Promise.prototype['catch'] = Promise.prototype.otherwise = function(onRejected) {
				if (arguments.length < 2) {
					return origCatch.call(this, onRejected);
				}
	
				if(typeof onRejected !== 'function') {
					return this.ensure(rejectInvalidPredicate);
				}
	
				return origCatch.call(this, createCatchFilter(arguments[1], onRejected));
			};
	
			/**
			 * Wraps the provided catch handler, so that it will only be called
			 * if the predicate evaluates truthy
			 * @param {?function} handler
			 * @param {function} predicate
			 * @returns {function} conditional catch handler
			 */
			function createCatchFilter(handler, predicate) {
				return function(e) {
					return evaluatePredicate(e, predicate)
						? handler.call(this, e)
						: reject(e);
				};
			}
	
			/**
			 * Ensures that onFulfilledOrRejected will be called regardless of whether
			 * this promise is fulfilled or rejected.  onFulfilledOrRejected WILL NOT
			 * receive the promises' value or reason.  Any returned value will be disregarded.
			 * onFulfilledOrRejected may throw or return a rejected promise to signal
			 * an additional error.
			 * @param {function} handler handler to be called regardless of
			 *  fulfillment or rejection
			 * @returns {Promise}
			 */
			Promise.prototype['finally'] = Promise.prototype.ensure = function(handler) {
				if(typeof handler !== 'function') {
					return this;
				}
	
				return this.then(function(x) {
					return runSideEffect(handler, this, identity, x);
				}, function(e) {
					return runSideEffect(handler, this, reject, e);
				});
			};
	
			function runSideEffect (handler, thisArg, propagate, value) {
				var result = handler.call(thisArg);
				return maybeThenable(result)
					? propagateValue(result, propagate, value)
					: propagate(value);
			}
	
			function propagateValue (result, propagate, x) {
				return resolve(result).then(function () {
					return propagate(x);
				});
			}
	
			/**
			 * Recover from a failure by returning a defaultValue.  If defaultValue
			 * is a promise, it's fulfillment value will be used.  If defaultValue is
			 * a promise that rejects, the returned promise will reject with the
			 * same reason.
			 * @param {*} defaultValue
			 * @returns {Promise} new promise
			 */
			Promise.prototype['else'] = Promise.prototype.orElse = function(defaultValue) {
				return this.then(void 0, function() {
					return defaultValue;
				});
			};
	
			/**
			 * Shortcut for .then(function() { return value; })
			 * @param  {*} value
			 * @return {Promise} a promise that:
			 *  - is fulfilled if value is not a promise, or
			 *  - if value is a promise, will fulfill with its value, or reject
			 *    with its reason.
			 */
			Promise.prototype['yield'] = function(value) {
				return this.then(function() {
					return value;
				});
			};
	
			/**
			 * Runs a side effect when this promise fulfills, without changing the
			 * fulfillment value.
			 * @param {function} onFulfilledSideEffect
			 * @returns {Promise}
			 */
			Promise.prototype.tap = function(onFulfilledSideEffect) {
				return this.then(onFulfilledSideEffect)['yield'](this);
			};
	
			return Promise;
		};
	
		function rejectInvalidPredicate() {
			throw new TypeError('catch predicate must be a function');
		}
	
		function evaluatePredicate(e, predicate) {
			return isError(predicate) ? e instanceof predicate : predicate(e);
		}
	
		function isError(predicate) {
			return predicate === Error
				|| (predicate != null && predicate.prototype instanceof Error);
		}
	
		function maybeThenable(x) {
			return (typeof x === 'object' || typeof x === 'function') && x !== null;
		}
	
		function identity(x) {
			return x;
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 685:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	/** @author Jeff Escalante */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function fold(Promise) {
	
			Promise.prototype.fold = function(f, z) {
				var promise = this._beget();
	
				this._handler.fold(function(z, x, to) {
					Promise._handler(z).fold(function(x, z, to) {
						to.resolve(f.call(this, z, x));
					}, x, this, to);
				}, z, promise._handler.receiver, promise._handler);
	
				return promise;
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 686:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var inspect = __webpack_require__(682).inspect;
	
		return function inspection(Promise) {
	
			Promise.prototype.inspect = function() {
				return inspect(Promise._handler(this));
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 687:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function generate(Promise) {
	
			var resolve = Promise.resolve;
	
			Promise.iterate = iterate;
			Promise.unfold = unfold;
	
			return Promise;
	
			/**
			 * @deprecated Use github.com/cujojs/most streams and most.iterate
			 * Generate a (potentially infinite) stream of promised values:
			 * x, f(x), f(f(x)), etc. until condition(x) returns true
			 * @param {function} f function to generate a new x from the previous x
			 * @param {function} condition function that, given the current x, returns
			 *  truthy when the iterate should stop
			 * @param {function} handler function to handle the value produced by f
			 * @param {*|Promise} x starting value, may be a promise
			 * @return {Promise} the result of the last call to f before
			 *  condition returns true
			 */
			function iterate(f, condition, handler, x) {
				return unfold(function(x) {
					return [x, f(x)];
				}, condition, handler, x);
			}
	
			/**
			 * @deprecated Use github.com/cujojs/most streams and most.unfold
			 * Generate a (potentially infinite) stream of promised values
			 * by applying handler(generator(seed)) iteratively until
			 * condition(seed) returns true.
			 * @param {function} unspool function that generates a [value, newSeed]
			 *  given a seed.
			 * @param {function} condition function that, given the current seed, returns
			 *  truthy when the unfold should stop
			 * @param {function} handler function to handle the value produced by unspool
			 * @param x {*|Promise} starting value, may be a promise
			 * @return {Promise} the result of the last value produced by unspool before
			 *  condition returns true
			 */
			function unfold(unspool, condition, handler, x) {
				return resolve(x).then(function(seed) {
					return resolve(condition(seed)).then(function(done) {
						return done ? seed : resolve(unspool(seed)).spread(next);
					});
				});
	
				function next(item, newSeed) {
					return resolve(handler(item)).then(function() {
						return unfold(unspool, condition, handler, newSeed);
					});
				}
			}
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 688:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function progress(Promise) {
	
			/**
			 * @deprecated
			 * Register a progress handler for this promise
			 * @param {function} onProgress
			 * @returns {Promise}
			 */
			Promise.prototype.progress = function(onProgress) {
				return this.then(void 0, void 0, onProgress);
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 689:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function addWith(Promise) {
			/**
			 * Returns a promise whose handlers will be called with `this` set to
			 * the supplied receiver.  Subsequent promises derived from the
			 * returned promise will also have their handlers called with receiver
			 * as `this`. Calling `with` with undefined or no arguments will return
			 * a promise whose handlers will again be called in the usual Promises/A+
			 * way (no `this`) thus safely undoing any previous `with` in the
			 * promise chain.
			 *
			 * WARNING: Promises returned from `with`/`withThis` are NOT Promises/A+
			 * compliant, specifically violating 2.2.5 (http://promisesaplus.com/#point-41)
			 *
			 * @param {object} receiver `this` value for all handlers attached to
			 *  the returned promise.
			 * @returns {Promise}
			 */
			Promise.prototype['with'] = Promise.prototype.withThis = function(receiver) {
				var p = this._beget();
				var child = p._handler;
				child.receiver = receiver;
				this._handler.chain(child, receiver);
				return p;
			};
	
			return Promise;
		};
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));
	


/***/ },

/***/ 690:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require) {
	
		var setTimer = __webpack_require__(677).setTimer;
		var format = __webpack_require__(691);
	
		return function unhandledRejection(Promise) {
	
			var logError = noop;
			var logInfo = noop;
			var localConsole;
	
			if(typeof console !== 'undefined') {
				// Alias console to prevent things like uglify's drop_console option from
				// removing console.log/error. Unhandled rejections fall into the same
				// category as uncaught exceptions, and build tools shouldn't silence them.
				localConsole = console;
				logError = typeof localConsole.error !== 'undefined'
					? function (e) { localConsole.error(e); }
					: function (e) { localConsole.log(e); };
	
				logInfo = typeof localConsole.info !== 'undefined'
					? function (e) { localConsole.info(e); }
					: function (e) { localConsole.log(e); };
			}
	
			Promise.onPotentiallyUnhandledRejection = function(rejection) {
				enqueue(report, rejection);
			};
	
			Promise.onPotentiallyUnhandledRejectionHandled = function(rejection) {
				enqueue(unreport, rejection);
			};
	
			Promise.onFatalRejection = function(rejection) {
				enqueue(throwit, rejection.value);
			};
	
			var tasks = [];
			var reported = [];
			var running = null;
	
			function report(r) {
				if(!r.handled) {
					reported.push(r);
					logError('Potentially unhandled rejection [' + r.id + '] ' + format.formatError(r.value));
				}
			}
	
			function unreport(r) {
				var i = reported.indexOf(r);
				if(i >= 0) {
					reported.splice(i, 1);
					logInfo('Handled previous rejection [' + r.id + '] ' + format.formatObject(r.value));
				}
			}
	
			function enqueue(f, x) {
				tasks.push(f, x);
				if(running === null) {
					running = setTimer(flush, 0);
				}
			}
	
			function flush() {
				running = null;
				while(tasks.length > 0) {
					tasks.shift()(tasks.shift());
				}
			}
	
			return Promise;
		};
	
		function throwit(e) {
			throw e;
		}
	
		function noop() {}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 691:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return {
			formatError: formatError,
			formatObject: formatObject,
			tryStringify: tryStringify
		};
	
		/**
		 * Format an error into a string.  If e is an Error and has a stack property,
		 * it's returned.  Otherwise, e is formatted using formatObject, with a
		 * warning added about e not being a proper Error.
		 * @param {*} e
		 * @returns {String} formatted string, suitable for output to developers
		 */
		function formatError(e) {
			var s = typeof e === 'object' && e !== null && (e.stack || e.message) ? e.stack || e.message : formatObject(e);
			return e instanceof Error ? s : s + ' (WARNING: non-Error used)';
		}
	
		/**
		 * Format an object, detecting "plain" objects and running them through
		 * JSON.stringify if possible.
		 * @param {Object} o
		 * @returns {string}
		 */
		function formatObject(o) {
			var s = String(o);
			if(s === '[object Object]' && typeof JSON !== 'undefined') {
				s = tryStringify(o, s);
			}
			return s;
		}
	
		/**
		 * Try to return the result of JSON.stringify(x).  If that fails, return
		 * defaultValue
		 * @param {*} x
		 * @param {*} defaultValue
		 * @returns {String|*} JSON.stringify(x) or defaultValue
		 */
		function tryStringify(x, defaultValue) {
			try {
				return JSON.stringify(x);
			} catch(e) {
				return defaultValue;
			}
		}
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ },

/***/ 692:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	
		var makePromise = __webpack_require__(693);
		var Scheduler = __webpack_require__(694);
		var async = __webpack_require__(677).asap;
	
		return makePromise({
			scheduler: new Scheduler(async)
		});
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	})(__webpack_require__(679));


/***/ },

/***/ 693:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process) {/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		return function makePromise(environment) {
	
			var tasks = environment.scheduler;
			var emitRejection = initEmitRejection();
	
			var objectCreate = Object.create ||
				function(proto) {
					function Child() {}
					Child.prototype = proto;
					return new Child();
				};
	
			/**
			 * Create a promise whose fate is determined by resolver
			 * @constructor
			 * @returns {Promise} promise
			 * @name Promise
			 */
			function Promise(resolver, handler) {
				this._handler = resolver === Handler ? handler : init(resolver);
			}
	
			/**
			 * Run the supplied resolver
			 * @param resolver
			 * @returns {Pending}
			 */
			function init(resolver) {
				var handler = new Pending();
	
				try {
					resolver(promiseResolve, promiseReject, promiseNotify);
				} catch (e) {
					promiseReject(e);
				}
	
				return handler;
	
				/**
				 * Transition from pre-resolution state to post-resolution state, notifying
				 * all listeners of the ultimate fulfillment or rejection
				 * @param {*} x resolution value
				 */
				function promiseResolve (x) {
					handler.resolve(x);
				}
				/**
				 * Reject this promise with reason, which will be used verbatim
				 * @param {Error|*} reason rejection reason, strongly suggested
				 *   to be an Error type
				 */
				function promiseReject (reason) {
					handler.reject(reason);
				}
	
				/**
				 * @deprecated
				 * Issue a progress event, notifying all progress listeners
				 * @param {*} x progress event payload to pass to all listeners
				 */
				function promiseNotify (x) {
					handler.notify(x);
				}
			}
	
			// Creation
	
			Promise.resolve = resolve;
			Promise.reject = reject;
			Promise.never = never;
	
			Promise._defer = defer;
			Promise._handler = getHandler;
	
			/**
			 * Returns a trusted promise. If x is already a trusted promise, it is
			 * returned, otherwise returns a new trusted Promise which follows x.
			 * @param  {*} x
			 * @return {Promise} promise
			 */
			function resolve(x) {
				return isPromise(x) ? x
					: new Promise(Handler, new Async(getHandler(x)));
			}
	
			/**
			 * Return a reject promise with x as its reason (x is used verbatim)
			 * @param {*} x
			 * @returns {Promise} rejected promise
			 */
			function reject(x) {
				return new Promise(Handler, new Async(new Rejected(x)));
			}
	
			/**
			 * Return a promise that remains pending forever
			 * @returns {Promise} forever-pending promise.
			 */
			function never() {
				return foreverPendingPromise; // Should be frozen
			}
	
			/**
			 * Creates an internal {promise, resolver} pair
			 * @private
			 * @returns {Promise}
			 */
			function defer() {
				return new Promise(Handler, new Pending());
			}
	
			// Transformation and flow control
	
			/**
			 * Transform this promise's fulfillment value, returning a new Promise
			 * for the transformed result.  If the promise cannot be fulfilled, onRejected
			 * is called with the reason.  onProgress *may* be called with updates toward
			 * this promise's fulfillment.
			 * @param {function=} onFulfilled fulfillment handler
			 * @param {function=} onRejected rejection handler
			 * @param {function=} onProgress @deprecated progress handler
			 * @return {Promise} new promise
			 */
			Promise.prototype.then = function(onFulfilled, onRejected, onProgress) {
				var parent = this._handler;
				var state = parent.join().state();
	
				if ((typeof onFulfilled !== 'function' && state > 0) ||
					(typeof onRejected !== 'function' && state < 0)) {
					// Short circuit: value will not change, simply share handler
					return new this.constructor(Handler, parent);
				}
	
				var p = this._beget();
				var child = p._handler;
	
				parent.chain(child, parent.receiver, onFulfilled, onRejected, onProgress);
	
				return p;
			};
	
			/**
			 * If this promise cannot be fulfilled due to an error, call onRejected to
			 * handle the error. Shortcut for .then(undefined, onRejected)
			 * @param {function?} onRejected
			 * @return {Promise}
			 */
			Promise.prototype['catch'] = function(onRejected) {
				return this.then(void 0, onRejected);
			};
	
			/**
			 * Creates a new, pending promise of the same type as this promise
			 * @private
			 * @returns {Promise}
			 */
			Promise.prototype._beget = function() {
				return begetFrom(this._handler, this.constructor);
			};
	
			function begetFrom(parent, Promise) {
				var child = new Pending(parent.receiver, parent.join().context);
				return new Promise(Handler, child);
			}
	
			// Array combinators
	
			Promise.all = all;
			Promise.race = race;
			Promise._traverse = traverse;
	
			/**
			 * Return a promise that will fulfill when all promises in the
			 * input array have fulfilled, or will reject when one of the
			 * promises rejects.
			 * @param {array} promises array of promises
			 * @returns {Promise} promise for array of fulfillment values
			 */
			function all(promises) {
				return traverseWith(snd, null, promises);
			}
	
			/**
			 * Array<Promise<X>> -> Promise<Array<f(X)>>
			 * @private
			 * @param {function} f function to apply to each promise's value
			 * @param {Array} promises array of promises
			 * @returns {Promise} promise for transformed values
			 */
			function traverse(f, promises) {
				return traverseWith(tryCatch2, f, promises);
			}
	
			function traverseWith(tryMap, f, promises) {
				var handler = typeof f === 'function' ? mapAt : settleAt;
	
				var resolver = new Pending();
				var pending = promises.length >>> 0;
				var results = new Array(pending);
	
				for (var i = 0, x; i < promises.length && !resolver.resolved; ++i) {
					x = promises[i];
	
					if (x === void 0 && !(i in promises)) {
						--pending;
						continue;
					}
	
					traverseAt(promises, handler, i, x, resolver);
				}
	
				if(pending === 0) {
					resolver.become(new Fulfilled(results));
				}
	
				return new Promise(Handler, resolver);
	
				function mapAt(i, x, resolver) {
					if(!resolver.resolved) {
						traverseAt(promises, settleAt, i, tryMap(f, x, i), resolver);
					}
				}
	
				function settleAt(i, x, resolver) {
					results[i] = x;
					if(--pending === 0) {
						resolver.become(new Fulfilled(results));
					}
				}
			}
	
			function traverseAt(promises, handler, i, x, resolver) {
				if (maybeThenable(x)) {
					var h = getHandlerMaybeThenable(x);
					var s = h.state();
	
					if (s === 0) {
						h.fold(handler, i, void 0, resolver);
					} else if (s > 0) {
						handler(i, h.value, resolver);
					} else {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
					}
				} else {
					handler(i, x, resolver);
				}
			}
	
			Promise._visitRemaining = visitRemaining;
			function visitRemaining(promises, start, handler) {
				for(var i=start; i<promises.length; ++i) {
					markAsHandled(getHandler(promises[i]), handler);
				}
			}
	
			function markAsHandled(h, handler) {
				if(h === handler) {
					return;
				}
	
				var s = h.state();
				if(s === 0) {
					h.visit(h, void 0, h._unreport);
				} else if(s < 0) {
					h._unreport();
				}
			}
	
			/**
			 * Fulfill-reject competitive race. Return a promise that will settle
			 * to the same state as the earliest input promise to settle.
			 *
			 * WARNING: The ES6 Promise spec requires that race()ing an empty array
			 * must return a promise that is pending forever.  This implementation
			 * returns a singleton forever-pending promise, the same singleton that is
			 * returned by Promise.never(), thus can be checked with ===
			 *
			 * @param {array} promises array of promises to race
			 * @returns {Promise} if input is non-empty, a promise that will settle
			 * to the same outcome as the earliest input promise to settle. if empty
			 * is empty, returns a promise that will never settle.
			 */
			function race(promises) {
				if(typeof promises !== 'object' || promises === null) {
					return reject(new TypeError('non-iterable passed to race()'));
				}
	
				// Sigh, race([]) is untestable unless we return *something*
				// that is recognizable without calling .then() on it.
				return promises.length === 0 ? never()
					 : promises.length === 1 ? resolve(promises[0])
					 : runRace(promises);
			}
	
			function runRace(promises) {
				var resolver = new Pending();
				var i, x, h;
				for(i=0; i<promises.length; ++i) {
					x = promises[i];
					if (x === void 0 && !(i in promises)) {
						continue;
					}
	
					h = getHandler(x);
					if(h.state() !== 0) {
						resolver.become(h);
						visitRemaining(promises, i+1, h);
						break;
					} else {
						h.visit(resolver, resolver.resolve, resolver.reject);
					}
				}
				return new Promise(Handler, resolver);
			}
	
			// Promise internals
			// Below this, everything is @private
	
			/**
			 * Get an appropriate handler for x, without checking for cycles
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandler(x) {
				if(isPromise(x)) {
					return x._handler.join();
				}
				return maybeThenable(x) ? getHandlerUntrusted(x) : new Fulfilled(x);
			}
	
			/**
			 * Get a handler for thenable x.
			 * NOTE: You must only call this if maybeThenable(x) == true
			 * @param {object|function|Promise} x
			 * @returns {object} handler
			 */
			function getHandlerMaybeThenable(x) {
				return isPromise(x) ? x._handler.join() : getHandlerUntrusted(x);
			}
	
			/**
			 * Get a handler for potentially untrusted thenable x
			 * @param {*} x
			 * @returns {object} handler
			 */
			function getHandlerUntrusted(x) {
				try {
					var untrustedThen = x.then;
					return typeof untrustedThen === 'function'
						? new Thenable(untrustedThen, x)
						: new Fulfilled(x);
				} catch(e) {
					return new Rejected(e);
				}
			}
	
			/**
			 * Handler for a promise that is pending forever
			 * @constructor
			 */
			function Handler() {}
	
			Handler.prototype.when
				= Handler.prototype.become
				= Handler.prototype.notify // deprecated
				= Handler.prototype.fail
				= Handler.prototype._unreport
				= Handler.prototype._report
				= noop;
	
			Handler.prototype._state = 0;
	
			Handler.prototype.state = function() {
				return this._state;
			};
	
			/**
			 * Recursively collapse handler chain to find the handler
			 * nearest to the fully resolved value.
			 * @returns {object} handler nearest the fully resolved value
			 */
			Handler.prototype.join = function() {
				var h = this;
				while(h.handler !== void 0) {
					h = h.handler;
				}
				return h;
			};
	
			Handler.prototype.chain = function(to, receiver, fulfilled, rejected, progress) {
				this.when({
					resolver: to,
					receiver: receiver,
					fulfilled: fulfilled,
					rejected: rejected,
					progress: progress
				});
			};
	
			Handler.prototype.visit = function(receiver, fulfilled, rejected, progress) {
				this.chain(failIfRejected, receiver, fulfilled, rejected, progress);
			};
	
			Handler.prototype.fold = function(f, z, c, to) {
				this.when(new Fold(f, z, c, to));
			};
	
			/**
			 * Handler that invokes fail() on any handler it becomes
			 * @constructor
			 */
			function FailIfRejected() {}
	
			inherit(Handler, FailIfRejected);
	
			FailIfRejected.prototype.become = function(h) {
				h.fail();
			};
	
			var failIfRejected = new FailIfRejected();
	
			/**
			 * Handler that manages a queue of consumers waiting on a pending promise
			 * @constructor
			 */
			function Pending(receiver, inheritedContext) {
				Promise.createContext(this, inheritedContext);
	
				this.consumers = void 0;
				this.receiver = receiver;
				this.handler = void 0;
				this.resolved = false;
			}
	
			inherit(Handler, Pending);
	
			Pending.prototype._state = 0;
	
			Pending.prototype.resolve = function(x) {
				this.become(getHandler(x));
			};
	
			Pending.prototype.reject = function(x) {
				if(this.resolved) {
					return;
				}
	
				this.become(new Rejected(x));
			};
	
			Pending.prototype.join = function() {
				if (!this.resolved) {
					return this;
				}
	
				var h = this;
	
				while (h.handler !== void 0) {
					h = h.handler;
					if (h === this) {
						return this.handler = cycle();
					}
				}
	
				return h;
			};
	
			Pending.prototype.run = function() {
				var q = this.consumers;
				var handler = this.handler;
				this.handler = this.handler.join();
				this.consumers = void 0;
	
				for (var i = 0; i < q.length; ++i) {
					handler.when(q[i]);
				}
			};
	
			Pending.prototype.become = function(handler) {
				if(this.resolved) {
					return;
				}
	
				this.resolved = true;
				this.handler = handler;
				if(this.consumers !== void 0) {
					tasks.enqueue(this);
				}
	
				if(this.context !== void 0) {
					handler._report(this.context);
				}
			};
	
			Pending.prototype.when = function(continuation) {
				if(this.resolved) {
					tasks.enqueue(new ContinuationTask(continuation, this.handler));
				} else {
					if(this.consumers === void 0) {
						this.consumers = [continuation];
					} else {
						this.consumers.push(continuation);
					}
				}
			};
	
			/**
			 * @deprecated
			 */
			Pending.prototype.notify = function(x) {
				if(!this.resolved) {
					tasks.enqueue(new ProgressTask(x, this));
				}
			};
	
			Pending.prototype.fail = function(context) {
				var c = typeof context === 'undefined' ? this.context : context;
				this.resolved && this.handler.join().fail(c);
			};
	
			Pending.prototype._report = function(context) {
				this.resolved && this.handler.join()._report(context);
			};
	
			Pending.prototype._unreport = function() {
				this.resolved && this.handler.join()._unreport();
			};
	
			/**
			 * Wrap another handler and force it into a future stack
			 * @param {object} handler
			 * @constructor
			 */
			function Async(handler) {
				this.handler = handler;
			}
	
			inherit(Handler, Async);
	
			Async.prototype.when = function(continuation) {
				tasks.enqueue(new ContinuationTask(continuation, this));
			};
	
			Async.prototype._report = function(context) {
				this.join()._report(context);
			};
	
			Async.prototype._unreport = function() {
				this.join()._unreport();
			};
	
			/**
			 * Handler that wraps an untrusted thenable and assimilates it in a future stack
			 * @param {function} then
			 * @param {{then: function}} thenable
			 * @constructor
			 */
			function Thenable(then, thenable) {
				Pending.call(this);
				tasks.enqueue(new AssimilateTask(then, thenable, this));
			}
	
			inherit(Pending, Thenable);
	
			/**
			 * Handler for a fulfilled promise
			 * @param {*} x fulfillment value
			 * @constructor
			 */
			function Fulfilled(x) {
				Promise.createContext(this);
				this.value = x;
			}
	
			inherit(Handler, Fulfilled);
	
			Fulfilled.prototype._state = 1;
	
			Fulfilled.prototype.fold = function(f, z, c, to) {
				runContinuation3(f, z, this, c, to);
			};
	
			Fulfilled.prototype.when = function(cont) {
				runContinuation1(cont.fulfilled, this, cont.receiver, cont.resolver);
			};
	
			var errorId = 0;
	
			/**
			 * Handler for a rejected promise
			 * @param {*} x rejection reason
			 * @constructor
			 */
			function Rejected(x) {
				Promise.createContext(this);
	
				this.id = ++errorId;
				this.value = x;
				this.handled = false;
				this.reported = false;
	
				this._report();
			}
	
			inherit(Handler, Rejected);
	
			Rejected.prototype._state = -1;
	
			Rejected.prototype.fold = function(f, z, c, to) {
				to.become(this);
			};
	
			Rejected.prototype.when = function(cont) {
				if(typeof cont.rejected === 'function') {
					this._unreport();
				}
				runContinuation1(cont.rejected, this, cont.receiver, cont.resolver);
			};
	
			Rejected.prototype._report = function(context) {
				tasks.afterQueue(new ReportTask(this, context));
			};
	
			Rejected.prototype._unreport = function() {
				if(this.handled) {
					return;
				}
				this.handled = true;
				tasks.afterQueue(new UnreportTask(this));
			};
	
			Rejected.prototype.fail = function(context) {
				this.reported = true;
				emitRejection('unhandledRejection', this);
				Promise.onFatalRejection(this, context === void 0 ? this.context : context);
			};
	
			function ReportTask(rejection, context) {
				this.rejection = rejection;
				this.context = context;
			}
	
			ReportTask.prototype.run = function() {
				if(!this.rejection.handled && !this.rejection.reported) {
					this.rejection.reported = true;
					emitRejection('unhandledRejection', this.rejection) ||
						Promise.onPotentiallyUnhandledRejection(this.rejection, this.context);
				}
			};
	
			function UnreportTask(rejection) {
				this.rejection = rejection;
			}
	
			UnreportTask.prototype.run = function() {
				if(this.rejection.reported) {
					emitRejection('rejectionHandled', this.rejection) ||
						Promise.onPotentiallyUnhandledRejectionHandled(this.rejection);
				}
			};
	
			// Unhandled rejection hooks
			// By default, everything is a noop
	
			Promise.createContext
				= Promise.enterContext
				= Promise.exitContext
				= Promise.onPotentiallyUnhandledRejection
				= Promise.onPotentiallyUnhandledRejectionHandled
				= Promise.onFatalRejection
				= noop;
	
			// Errors and singletons
	
			var foreverPendingHandler = new Handler();
			var foreverPendingPromise = new Promise(Handler, foreverPendingHandler);
	
			function cycle() {
				return new Rejected(new TypeError('Promise cycle'));
			}
	
			// Task runners
	
			/**
			 * Run a single consumer
			 * @constructor
			 */
			function ContinuationTask(continuation, handler) {
				this.continuation = continuation;
				this.handler = handler;
			}
	
			ContinuationTask.prototype.run = function() {
				this.handler.join().when(this.continuation);
			};
	
			/**
			 * Run a queue of progress handlers
			 * @constructor
			 */
			function ProgressTask(value, handler) {
				this.handler = handler;
				this.value = value;
			}
	
			ProgressTask.prototype.run = function() {
				var q = this.handler.consumers;
				if(q === void 0) {
					return;
				}
	
				for (var c, i = 0; i < q.length; ++i) {
					c = q[i];
					runNotify(c.progress, this.value, this.handler, c.receiver, c.resolver);
				}
			};
	
			/**
			 * Assimilate a thenable, sending it's value to resolver
			 * @param {function} then
			 * @param {object|function} thenable
			 * @param {object} resolver
			 * @constructor
			 */
			function AssimilateTask(then, thenable, resolver) {
				this._then = then;
				this.thenable = thenable;
				this.resolver = resolver;
			}
	
			AssimilateTask.prototype.run = function() {
				var h = this.resolver;
				tryAssimilate(this._then, this.thenable, _resolve, _reject, _notify);
	
				function _resolve(x) { h.resolve(x); }
				function _reject(x)  { h.reject(x); }
				function _notify(x)  { h.notify(x); }
			};
	
			function tryAssimilate(then, thenable, resolve, reject, notify) {
				try {
					then.call(thenable, resolve, reject, notify);
				} catch (e) {
					reject(e);
				}
			}
	
			/**
			 * Fold a handler value with z
			 * @constructor
			 */
			function Fold(f, z, c, to) {
				this.f = f; this.z = z; this.c = c; this.to = to;
				this.resolver = failIfRejected;
				this.receiver = this;
			}
	
			Fold.prototype.fulfilled = function(x) {
				this.f.call(this.c, this.z, x, this.to);
			};
	
			Fold.prototype.rejected = function(x) {
				this.to.reject(x);
			};
	
			Fold.prototype.progress = function(x) {
				this.to.notify(x);
			};
	
			// Other helpers
	
			/**
			 * @param {*} x
			 * @returns {boolean} true iff x is a trusted Promise
			 */
			function isPromise(x) {
				return x instanceof Promise;
			}
	
			/**
			 * Test just enough to rule out primitives, in order to take faster
			 * paths in some code
			 * @param {*} x
			 * @returns {boolean} false iff x is guaranteed *not* to be a thenable
			 */
			function maybeThenable(x) {
				return (typeof x === 'object' || typeof x === 'function') && x !== null;
			}
	
			function runContinuation1(f, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}
	
				Promise.enterContext(h);
				tryCatchReject(f, h.value, receiver, next);
				Promise.exitContext();
			}
	
			function runContinuation3(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.become(h);
				}
	
				Promise.enterContext(h);
				tryCatchReject3(f, x, h.value, receiver, next);
				Promise.exitContext();
			}
	
			/**
			 * @deprecated
			 */
			function runNotify(f, x, h, receiver, next) {
				if(typeof f !== 'function') {
					return next.notify(x);
				}
	
				Promise.enterContext(h);
				tryCatchReturn(f, x, receiver, next);
				Promise.exitContext();
			}
	
			function tryCatch2(f, a, b) {
				try {
					return f(a, b);
				} catch(e) {
					return reject(e);
				}
			}
	
			/**
			 * Return f.call(thisArg, x), or if it throws return a rejected promise for
			 * the thrown exception
			 */
			function tryCatchReject(f, x, thisArg, next) {
				try {
					next.become(getHandler(f.call(thisArg, x)));
				} catch(e) {
					next.become(new Rejected(e));
				}
			}
	
			/**
			 * Same as above, but includes the extra argument parameter.
			 */
			function tryCatchReject3(f, x, y, thisArg, next) {
				try {
					f.call(thisArg, x, y, next);
				} catch(e) {
					next.become(new Rejected(e));
				}
			}
	
			/**
			 * @deprecated
			 * Return f.call(thisArg, x), or if it throws, *return* the exception
			 */
			function tryCatchReturn(f, x, thisArg, next) {
				try {
					next.notify(f.call(thisArg, x));
				} catch(e) {
					next.notify(e);
				}
			}
	
			function inherit(Parent, Child) {
				Child.prototype = objectCreate(Parent.prototype);
				Child.prototype.constructor = Child;
			}
	
			function snd(x, y) {
				return y;
			}
	
			function noop() {}
	
			function initEmitRejection() {
				/*global process, self, CustomEvent*/
				if(typeof process !== 'undefined' && process !== null
					&& typeof process.emit === 'function') {
					// Returning falsy here means to call the default
					// onPotentiallyUnhandledRejection API.  This is safe even in
					// browserify since process.emit always returns falsy in browserify:
					// https://github.com/defunctzombie/node-process/blob/master/browser.js#L40-L46
					return function(type, rejection) {
						return type === 'unhandledRejection'
							? process.emit(type, rejection.value, rejection)
							: process.emit(type, rejection);
					};
				} else if(typeof self !== 'undefined' && typeof CustomEvent === 'function') {
					return (function(noop, self, CustomEvent) {
						var hasCustomEvent = false;
						try {
							var ev = new CustomEvent('unhandledRejection');
							hasCustomEvent = ev instanceof CustomEvent;
						} catch (e) {}
	
						return !hasCustomEvent ? noop : function(type, rejection) {
							var ev = new CustomEvent(type, {
								detail: {
									reason: rejection.value,
									key: rejection
								},
								bubbles: false,
								cancelable: true
							});
	
							return !self.dispatchEvent(ev);
						};
					}(noop, self, CustomEvent));
				}
	
				return noop;
			}
	
			return Promise;
		};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(14)))

/***/ },

/***/ 694:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/** @license MIT License (c) copyright 2010-2014 original author or authors */
	/** @author Brian Cavalier */
	/** @author John Hann */
	
	(function(define) { 'use strict';
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
		// Credit to Twisol (https://github.com/Twisol) for suggesting
		// this type of extensible queue + trampoline approach for next-tick conflation.
	
		/**
		 * Async task scheduler
		 * @param {function} async function to schedule a single async function
		 * @constructor
		 */
		function Scheduler(async) {
			this._async = async;
			this._running = false;
	
			this._queue = this;
			this._queueLen = 0;
			this._afterQueue = {};
			this._afterQueueLen = 0;
	
			var self = this;
			this.drain = function() {
				self._drain();
			};
		}
	
		/**
		 * Enqueue a task
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.enqueue = function(task) {
			this._queue[this._queueLen++] = task;
			this.run();
		};
	
		/**
		 * Enqueue a task to run after the main task queue
		 * @param {{ run:function }} task
		 */
		Scheduler.prototype.afterQueue = function(task) {
			this._afterQueue[this._afterQueueLen++] = task;
			this.run();
		};
	
		Scheduler.prototype.run = function() {
			if (!this._running) {
				this._running = true;
				this._async(this.drain);
			}
		};
	
		/**
		 * Drain the handler queue entirely, and then the after queue
		 */
		Scheduler.prototype._drain = function() {
			var i = 0;
			for (; i < this._queueLen; ++i) {
				this._queue[i].run();
				this._queue[i] = void 0;
			}
	
			this._queueLen = 0;
			this._running = false;
	
			for (i = 0; i < this._afterQueueLen; ++i) {
				this._afterQueue[i].run();
				this._afterQueue[i] = void 0;
			}
	
			this._afterQueueLen = 0;
		};
	
		return Scheduler;
	
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}(__webpack_require__(679)));


/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanM/YjAxZSIsIndlYnBhY2s6Ly8vLi9+L3doZW4vd2hlbi5qcz85OTA3Iiwid2VicGFjazovLy8uL34vd2hlbi9saWIvZGVjb3JhdG9ycy90aW1lZC5qcz8yMTJhIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvZW52LmpzP2E2ZGQiLCJ3ZWJwYWNrOi8vL3ZlcnR4IChpZ25vcmVkKT9iZDE2Iiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzPzBiYmEiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9UaW1lb3V0RXJyb3IuanM/YTdlYiIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvYXJyYXkuanM/ZTMzMiIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL3N0YXRlLmpzP2UyNTMiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9hcHBseS5qcz8wZTdjIiwid2VicGFjazovLy8uL34vd2hlbi9saWIvZGVjb3JhdG9ycy9mbG93LmpzPzBmYTYiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL2ZvbGQuanM/NDg5YyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvaW5zcGVjdC5qcz83ODU2Iiwid2VicGFjazovLy8uL34vd2hlbi9saWIvZGVjb3JhdG9ycy9pdGVyYXRlLmpzP2RhYzgiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3Byb2dyZXNzLmpzP2VjNjAiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3dpdGguanM/OWVmNyIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL2RlY29yYXRvcnMvdW5oYW5kbGVkUmVqZWN0aW9uLmpzPzI4ZjYiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9mb3JtYXQuanM/NTVjYiIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL1Byb21pc2UuanM/OGU1MSIsIndlYnBhY2s6Ly8vLi9+L3doZW4vbGliL21ha2VQcm9taXNlLmpzPzhhZjkiLCJ3ZWJwYWNrOi8vLy4vfi93aGVuL2xpYi9TY2hlZHVsZXIuanM/OTI1NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNO1dBQ0k7QUFBUjs7QUFHRixLQUFNLFVBQVU7O0tBRVY7MkJBQ0o7O3lCQUFZLE9BQU07MkJBQUE7OzZIQUVoQjs7V0FBSztjQUVIO2lCQUNBOzZCQUNBO2VBQ0E7Z0JBQVM7QUFKVDtZQU1IOzs7Ozs4QkFFQztjQUNFLHFDQUNBLDhDQUFNLFVBQVUsS0FBSyxjQUFjLEtBQ25DLG1EQUNBO2dCQUNTLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7MkJBQWtCLEtBQUssa0JBQWtCLEtBQ3pDO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTttQkFFRjtBQVJFO2dCQVNPLEtBQUssTUFBTSxPQUNsQjttQkFBVSxLQUFLLFVBQVUsS0FDekI7MkJBQWtCLEtBQUssa0JBQWtCLEtBQ3pDO2dCQUFPLEtBQUssTUFDWjtzQkFDQTtnQkFDQTtlQUNBO21CQUVGO0FBVEU7Z0JBVU8sS0FBSyxNQUFNLE9BQ2xCO21CQUFVLEtBQUssVUFBVSxLQUN6QjsyQkFBa0IsS0FBSyxrQkFBa0IsS0FDekM7Z0JBQU8sS0FBSyxNQUNaO2dCQUNBO2VBQ0E7c0JBQ0E7bUJBRUY7QUFURSxnREFVRixnREFBTyxVQUFVLEtBQUssTUFBTSxTQUFTLFdBQVUsb0JBQW1CLE1BQUssVUFBUyxPQUluRjs7OzsrQkFFUyxPQUNSO1lBQUssNkJBQVcsTUFBTSxPQUFPLE1BQU8sTUFBTSxPQUMzQzs7Ozt1Q0FFaUIsT0FBTTtvQkFDdEI7O1dBQU0sUUFBUSxNQUFNLE9BQ3BCO1dBQU0sUUFB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Q0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxjQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYSxTQUFTO0FBQ3RCLGNBQWEsZ0JBQWdCO0FBQzdCLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQXlCLGNBQWM7QUFDdkMsMEJBQXlCLGFBQWE7QUFDdEMsMEJBQXlCLGFBQWE7QUFDdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBYyxZQUFZLFlBQVk7QUFDdEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYSxFQUFFO0FBQ2YsZ0JBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLEVBQUU7QUFDZixnQkFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTTs7QUFFTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUTtBQUNSO0FBQ0E7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBQztBQUNELEVBQUMseUJBQXdHOzs7Ozs7Ozs7QUM5NUJ6RztBQUNBO0FBQ0E7O0FBRUEsb0JBQW1CO0FBQ25COztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQVksU0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWEsZ0JBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxjQUFhLHlCQUF5QjtBQUN0QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxFQUFDO0FBQ0QsRUFBQyx5QkFBd0ciLCJmaWxlIjoiMC4wZmRkYThmZjQ4ZTQ0ODM5ZGYwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHZhbGlkYXRlSW5wdXQgZnJvbSAnLi9WYWxpZGF0aW9uLmpzJ1xuaW1wb3J0IFRleHRGaWVsZEdyb3VwIGZyb20gJy4vVGV4dEZpZWxkR3JvdXAuanMnXHJcbmltcG9ydCB7aGFzaEhpc3Rvcnl9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuaW1wb3J0IHdoZW4gZnJvbSAnd2hlbic7XHJcblxyXG5jb25zdCBkaXZTdHlsZSA9IHtcclxuICBtYXJnaW46IFwiMCAwIDVweCAwXCJcclxufVxyXG5cclxuY29uc3QgYmFzZVVybCA9ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInO1xyXG5cclxuY2xhc3MgUmVnaXN0cmF0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBlbWFpbDogICAgICAnJyxcclxuICAgICAgcGFzc3dvcmQ6ICAgJycsXHJcbiAgICAgIHBhc3N3b3JkQ29uZmlybWF0aW9uOiAgJycsXHJcbiAgICAgIGVycm9yczogICAgIHt9LFxyXG4gICAgICBpbnZhbGlkOiBmYWxzZVxyXG4gICAgfTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpfT5cclxuICAgICAgPGg0PnJlZ2lzdGVyPC9oND5cclxuICAgICAgPFRleHRGaWVsZEdyb3VwXHJcbiAgICAgICAgZXJyb3I9e3RoaXMuc3RhdGUuZXJyb3JzLmVtYWlsfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKX1cbiAgICAgICAgY2hlY2tFbWFpbEV4aXN0cz17dGhpcy5fY2hlY2tFbWFpbEV4aXN0cy5iaW5kKHRoaXMpfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5lbWFpbH1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbFwiXG4gICAgICAgIGZpZWxkPVwiZW1haWxcIlxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cbiAgICAgIC8+XG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmR9XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgY2hlY2tFbWFpbEV4aXN0cz17dGhpcy5fY2hlY2tFbWFpbEV4aXN0cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxuICAgICAgICBwbGFjZWhvbGRlcj1cInBhc3N3b3JkXCJcclxuICAgICAgICBmaWVsZD1cInBhc3N3b3JkXCJcbiAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgZGl2U3R5bGUgPSB7ZGl2U3R5bGV9XHJcbiAgICAgIC8+XG4gICAgICA8VGV4dEZpZWxkR3JvdXBcclxuICAgICAgICBlcnJvcj17dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmRDb25maXJtYXRpb259XHJcbiAgICAgICAgb25DaGFuZ2U9e3RoaXMuX29uQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgY2hlY2tFbWFpbEV4aXN0cz17dGhpcy5fY2hlY2tFbWFpbEV4aXN0cy5iaW5kKHRoaXMpfVxyXG4gICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkQ29uZmlybWF0aW9ufVxyXG4gICAgICAgIGZpZWxkPVwicGFzc3dvcmRDb25maXJtYXRpb25cIlxuICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cImNvbmZpcm0gcGFzc3dvcmRcIlxuICAgICAgICBkaXZTdHlsZSA9IHtkaXZTdHlsZX1cclxuICAgICAgLz5cclxuICAgICAgPGRpdj48L2Rpdj5cclxuICAgICAgPGlucHV0IGRpc2FibGVkPXt0aGlzLnN0YXRlLmludmFsaWR9IGNsYXNzTmFtZT1cImJ0biAuYnRuLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJyZWdpc3RlclwiIC8+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKGV2ZW50KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe1tldmVudC50YXJnZXQubmFtZV06IGV2ZW50LnRhcmdldC52YWx1ZX0pO1xyXG4gIH1cclxuXHJcbiAgX2NoZWNrRW1haWxFeGlzdHMoZXZlbnQpe1xyXG4gICAgY29uc3QgZmllbGQgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgaWYodmFsICE9PSAnJyl7XHJcbiAgICAgIHRoaXMucHJvcHMuaXNFbWFpbEV4aXN0cyh2YWx1ZSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgbGV0IGVycm9ycyA9IHRoaXMuc3RhdGUuZXJyb3JzO1xyXG4gICAgICAgICAgbGV0IGludmFsaWQ7XHJcbiAgICAgICAgICBpZihyZXMuZGF0YS51c2VyKXtcclxuICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICdUaGVyZSBpcyB1c2VyIHdpdGggc3VjaCAnICsgZmllbGQ7XHJcbiAgICAgICAgICAgIGludmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JzW2ZpZWxkXSA9ICcnO1xyXG4gICAgICAgICAgICBpbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtlcnJvcywgaW52YWxpZH0pXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNWYWxpZCgpe1xyXG4gICAgY29uc3QgeyBlcnJvcnMsIGlzVmFsaWR9ID0gdmFsaWRhdGVJbnB1dCh0aGlzLnN0YXRlKTtcclxuICAgIGlmKCFpc1ZhbGlkKXtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWxpZDtcclxuICB9XHJcblxyXG4gIF9oYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIGlmKHRoaXMuaXNWYWxpZCh0aGlzLnN0YXRlKSkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiB7fX0pO1xuICAgICAgdGhpcy5wcm9wcy5yZWdpc3RyYXRpb25SZXF1ZXN0KHRoaXMuc3RhdGUpLnRoZW4oXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByb3BzLmFkZEZsYXNoTWVzc2FnZSh7XG4gICAgICAgICAgICB0eXBlOiAnc3VjY2VzcycsXG4gICAgICAgICAgICB0ZXh0OiAnWW91IHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5ISBXZWxjb21lIHRvIFZheml1b2p1LVZlenUhJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGhhc2hIaXN0b3J5LnB1c2goJy8nKTtcbiAgICAgICAgICAvL29yIHRoaXMuY29udGV4dC5yb3V0ZXIucHVzaCgnLycpO1xuICAgICAgICB9LFxuICAgICAgICAoZXJyKSA9PiB7XG4gICAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7ZXJyb3JzOiBlcnIucmVzcG9uc2UuZGF0YX0pXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vKTtcbi8vICAgICAkLmFqYXgoe1xuLy8gICB0eXBlOiBcIlBPU1RcIixcbi8vICAgdXJsOiBgJHtiYXNlVXJsfWAsXG4vLyAgIGRhdGE6IHRoaXMuc3RhdGUsXG4vLyAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4vLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGUpe2NvbnNvbGUubG9nKFwiT2tcIil9XG4vLyB9KTtcbiAgICAvLyBheGlvcyh7XHJcbiAgICAvLyAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgLy8gICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL3VzZXInLFxyXG4gICAgLy8gICBtb2RlOiAnbm8tY29ycycsXHJcbiAgICAvLyAgIGhlYWRlcnM6IHtcclxuICAgIC8vICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAvLyAgIH0sXHJcbiAgICAvLyAgIGRhdGE6IHRoaXMuc3RhdGUsXHJcbiAgICAvLyAgIGRhdGFUeXBlOiAnanNvbidcclxuICAgIC8vIH0pXHJcbiAgICAvLyAudGhlbigocmVzdWx0KT0+e1xyXG4gICAgLy9cclxuICAgIC8vICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgIC8vIH0pO1xyXG4gIH1cclxufVxyXG5cclxuUmVnaXN0cmF0aW9uLnByb3BUeXBlcyA9IHtcclxuICByZWdpc3RyYXRpb25SZXF1ZXN0OiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIGFkZEZsYXNoTWVzc2FnZTogUmVhY3QuUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcclxuICBpc0VtYWlsRXhpc3RzOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkXHJcbn1cclxuXHJcblJlZ2lzdHJhdGlvbi5jb250ZXh0VHlwZXMgPSB7XHJcbiAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWRcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0cmF0aW9uO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9SZWdpc3RyYXRpb24uanMiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cblxuLyoqXG4gKiBQcm9taXNlcy9BKyBhbmQgd2hlbigpIGltcGxlbWVudGF0aW9uXG4gKiB3aGVuIGlzIHBhcnQgb2YgdGhlIGN1am9KUyBmYW1pbHkgb2YgbGlicmFyaWVzIChodHRwOi8vY3Vqb2pzLmNvbS8pXG4gKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyXG4gKiBAYXV0aG9yIEpvaG4gSGFublxuICovXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbiAocmVxdWlyZSkge1xuXG5cdHZhciB0aW1lZCA9IHJlcXVpcmUoJy4vbGliL2RlY29yYXRvcnMvdGltZWQnKTtcblx0dmFyIGFycmF5ID0gcmVxdWlyZSgnLi9saWIvZGVjb3JhdG9ycy9hcnJheScpO1xuXHR2YXIgZmxvdyA9IHJlcXVpcmUoJy4vbGliL2RlY29yYXRvcnMvZmxvdycpO1xuXHR2YXIgZm9sZCA9IHJlcXVpcmUoJy4vbGliL2RlY29yYXRvcnMvZm9sZCcpO1xuXHR2YXIgaW5zcGVjdCA9IHJlcXVpcmUoJy4vbGliL2RlY29yYXRvcnMvaW5zcGVjdCcpO1xuXHR2YXIgZ2VuZXJhdGUgPSByZXF1aXJlKCcuL2xpYi9kZWNvcmF0b3JzL2l0ZXJhdGUnKTtcblx0dmFyIHByb2dyZXNzID0gcmVxdWlyZSgnLi9saWIvZGVjb3JhdG9ycy9wcm9ncmVzcycpO1xuXHR2YXIgd2l0aFRoaXMgPSByZXF1aXJlKCcuL2xpYi9kZWNvcmF0b3JzL3dpdGgnKTtcblx0dmFyIHVuaGFuZGxlZFJlamVjdGlvbiA9IHJlcXVpcmUoJy4vbGliL2RlY29yYXRvcnMvdW5oYW5kbGVkUmVqZWN0aW9uJyk7XG5cdHZhciBUaW1lb3V0RXJyb3IgPSByZXF1aXJlKCcuL2xpYi9UaW1lb3V0RXJyb3InKTtcblxuXHR2YXIgUHJvbWlzZSA9IFthcnJheSwgZmxvdywgZm9sZCwgZ2VuZXJhdGUsIHByb2dyZXNzLFxuXHRcdGluc3BlY3QsIHdpdGhUaGlzLCB0aW1lZCwgdW5oYW5kbGVkUmVqZWN0aW9uXVxuXHRcdC5yZWR1Y2UoZnVuY3Rpb24oUHJvbWlzZSwgZmVhdHVyZSkge1xuXHRcdFx0cmV0dXJuIGZlYXR1cmUoUHJvbWlzZSk7XG5cdFx0fSwgcmVxdWlyZSgnLi9saWIvUHJvbWlzZScpKTtcblxuXHR2YXIgYXBwbHkgPSByZXF1aXJlKCcuL2xpYi9hcHBseScpKFByb21pc2UpO1xuXG5cdC8vIFB1YmxpYyBBUElcblxuXHR3aGVuLnByb21pc2UgICAgID0gcHJvbWlzZTsgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBlbmRpbmcgcHJvbWlzZVxuXHR3aGVuLnJlc29sdmUgICAgID0gUHJvbWlzZS5yZXNvbHZlOyAgICAgIC8vIENyZWF0ZSBhIHJlc29sdmVkIHByb21pc2Vcblx0d2hlbi5yZWplY3QgICAgICA9IFByb21pc2UucmVqZWN0OyAgICAgICAvLyBDcmVhdGUgYSByZWplY3RlZCBwcm9taXNlXG5cblx0d2hlbi5saWZ0ICAgICAgICA9IGxpZnQ7ICAgICAgICAgICAgICAgICAvLyBsaWZ0IGEgZnVuY3Rpb24gdG8gcmV0dXJuIHByb21pc2VzXG5cdHdoZW5bJ3RyeSddICAgICAgPSBhdHRlbXB0OyAgICAgICAgICAgICAgLy8gY2FsbCBhIGZ1bmN0aW9uIGFuZCByZXR1cm4gYSBwcm9taXNlXG5cdHdoZW4uYXR0ZW1wdCAgICAgPSBhdHRlbXB0OyAgICAgICAgICAgICAgLy8gYWxpYXMgZm9yIHdoZW4udHJ5XG5cblx0d2hlbi5pdGVyYXRlICAgICA9IFByb21pc2UuaXRlcmF0ZTsgICAgICAvLyBERVBSRUNBVEVEICh1c2UgY3Vqb2pzL21vc3Qgc3RyZWFtcykgR2VuZXJhdGUgYSBzdHJlYW0gb2YgcHJvbWlzZXNcblx0d2hlbi51bmZvbGQgICAgICA9IFByb21pc2UudW5mb2xkOyAgICAgICAvLyBERVBSRUNBVEVEICh1c2UgY3Vqb2pzL21vc3Qgc3RyZWFtcykgR2VuZXJhdGUgYSBzdHJlYW0gb2YgcHJvbWlzZXNcblxuXHR3aGVuLmpvaW4gICAgICAgID0gam9pbjsgICAgICAgICAgICAgICAgIC8vIEpvaW4gMiBvciBtb3JlIHByb21pc2VzXG5cblx0d2hlbi5hbGwgICAgICAgICA9IGFsbDsgICAgICAgICAgICAgICAgICAvLyBSZXNvbHZlIGEgbGlzdCBvZiBwcm9taXNlc1xuXHR3aGVuLnNldHRsZSAgICAgID0gc2V0dGxlOyAgICAgICAgICAgICAgIC8vIFNldHRsZSBhIGxpc3Qgb2YgcHJvbWlzZXNcblxuXHR3aGVuLmFueSAgICAgICAgID0gbGlmdChQcm9taXNlLmFueSk7ICAgIC8vIE9uZS13aW5uZXIgcmFjZVxuXHR3aGVuLnNvbWUgICAgICAgID0gbGlmdChQcm9taXNlLnNvbWUpOyAgIC8vIE11bHRpLXdpbm5lciByYWNlXG5cdHdoZW4ucmFjZSAgICAgICAgPSBsaWZ0KFByb21pc2UucmFjZSk7ICAgLy8gRmlyc3QtdG8tc2V0dGxlIHJhY2VcblxuXHR3aGVuLm1hcCAgICAgICAgID0gbWFwOyAgICAgICAgICAgICAgICAgIC8vIEFycmF5Lm1hcCgpIGZvciBwcm9taXNlc1xuXHR3aGVuLmZpbHRlciAgICAgID0gZmlsdGVyOyAgICAgICAgICAgICAgIC8vIEFycmF5LmZpbHRlcigpIGZvciBwcm9taXNlc1xuXHR3aGVuLnJlZHVjZSAgICAgID0gbGlmdChQcm9taXNlLnJlZHVjZSk7ICAgICAgIC8vIEFycmF5LnJlZHVjZSgpIGZvciBwcm9taXNlc1xuXHR3aGVuLnJlZHVjZVJpZ2h0ID0gbGlmdChQcm9taXNlLnJlZHVjZVJpZ2h0KTsgIC8vIEFycmF5LnJlZHVjZVJpZ2h0KCkgZm9yIHByb21pc2VzXG5cblx0d2hlbi5pc1Byb21pc2VMaWtlID0gaXNQcm9taXNlTGlrZTsgICAgICAvLyBJcyBzb21ldGhpbmcgcHJvbWlzZS1saWtlLCBha2EgdGhlbmFibGVcblxuXHR3aGVuLlByb21pc2UgICAgID0gUHJvbWlzZTsgICAgICAgICAgICAgIC8vIFByb21pc2UgY29uc3RydWN0b3Jcblx0d2hlbi5kZWZlciAgICAgICA9IGRlZmVyOyAgICAgICAgICAgICAgICAvLyBDcmVhdGUgYSB7cHJvbWlzZSwgcmVzb2x2ZSwgcmVqZWN0fSB0dXBsZVxuXG5cdC8vIEVycm9yIHR5cGVzXG5cblx0d2hlbi5UaW1lb3V0RXJyb3IgPSBUaW1lb3V0RXJyb3I7XG5cblx0LyoqXG5cdCAqIEdldCBhIHRydXN0ZWQgcHJvbWlzZSBmb3IgeCwgb3IgYnkgdHJhbnNmb3JtaW5nIHggd2l0aCBvbkZ1bGZpbGxlZFxuXHQgKlxuXHQgKiBAcGFyYW0geyp9IHhcblx0ICogQHBhcmFtIHtmdW5jdGlvbj99IG9uRnVsZmlsbGVkIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHggaXNcblx0ICogICBzdWNjZXNzZnVsbHkgZnVsZmlsbGVkLiAgSWYgcHJvbWlzZU9yVmFsdWUgaXMgYW4gaW1tZWRpYXRlIHZhbHVlLCBjYWxsYmFja1xuXHQgKiAgIHdpbGwgYmUgaW52b2tlZCBpbW1lZGlhdGVseS5cblx0ICogQHBhcmFtIHtmdW5jdGlvbj99IG9uUmVqZWN0ZWQgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4geCBpc1xuXHQgKiAgIHJlamVjdGVkLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9uP30gb25Qcm9ncmVzcyBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiBwcm9ncmVzcyB1cGRhdGVzXG5cdCAqICAgYXJlIGlzc3VlZCBmb3IgeC4gQGRlcHJlY2F0ZWRcblx0ICogQHJldHVybnMge1Byb21pc2V9IGEgbmV3IHByb21pc2UgdGhhdCB3aWxsIGZ1bGZpbGwgd2l0aCB0aGUgcmV0dXJuXG5cdCAqICAgdmFsdWUgb2YgY2FsbGJhY2sgb3IgZXJyYmFjayBvciB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiBwcm9taXNlT3JWYWx1ZSBpZlxuXHQgKiAgIGNhbGxiYWNrIGFuZC9vciBlcnJiYWNrIGlzIG5vdCBzdXBwbGllZC5cblx0ICovXG5cdGZ1bmN0aW9uIHdoZW4oeCwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MpIHtcblx0XHR2YXIgcCA9IFByb21pc2UucmVzb2x2ZSh4KTtcblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcblx0XHRcdHJldHVybiBwO1xuXHRcdH1cblxuXHRcdHJldHVybiBwLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZXMgYSBuZXcgcHJvbWlzZSB3aG9zZSBmYXRlIGlzIGRldGVybWluZWQgYnkgcmVzb2x2ZXIuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHJlc29sdmVyIGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCwgbm90aWZ5KVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSB3aG9zZSBmYXRlIGlzIGRldGVybWluZSBieSByZXNvbHZlclxuXHQgKi9cblx0ZnVuY3Rpb24gcHJvbWlzZShyZXNvbHZlcikge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlcik7XG5cdH1cblxuXHQvKipcblx0ICogTGlmdCB0aGUgc3VwcGxpZWQgZnVuY3Rpb24sIGNyZWF0aW5nIGEgdmVyc2lvbiBvZiBmIHRoYXQgcmV0dXJuc1xuXHQgKiBwcm9taXNlcywgYW5kIGFjY2VwdHMgcHJvbWlzZXMgYXMgYXJndW1lbnRzLlxuXHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmXG5cdCAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdmVyc2lvbiBvZiBmIHRoYXQgcmV0dXJucyBwcm9taXNlc1xuXHQgKi9cblx0ZnVuY3Rpb24gbGlmdChmKSB7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0Zm9yKHZhciBpPTAsIGw9YXJndW1lbnRzLmxlbmd0aCwgYT1uZXcgQXJyYXkobCk7IGk8bDsgKytpKSB7XG5cdFx0XHRcdGFbaV0gPSBhcmd1bWVudHNbaV07XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYXBwbHkoZiwgdGhpcywgYSk7XG5cdFx0fTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsIGYgaW4gYSBmdXR1cmUgdHVybiwgd2l0aCB0aGUgc3VwcGxpZWQgYXJncywgYW5kIHJldHVybiBhIHByb21pc2Vcblx0ICogZm9yIHRoZSByZXN1bHQuXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGZcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRmdW5jdGlvbiBhdHRlbXB0KGYgLyosIGFyZ3MuLi4gKi8pIHtcblx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuXHRcdGZvcih2YXIgaT0wLCBsPWFyZ3VtZW50cy5sZW5ndGgtMSwgYT1uZXcgQXJyYXkobCk7IGk8bDsgKytpKSB7XG5cdFx0XHRhW2ldID0gYXJndW1lbnRzW2krMV07XG5cdFx0fVxuXHRcdHJldHVybiBhcHBseShmLCB0aGlzLCBhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGVzIGEge3Byb21pc2UsIHJlc29sdmVyfSBwYWlyLCBlaXRoZXIgb3IgYm90aCBvZiB3aGljaFxuXHQgKiBtYXkgYmUgZ2l2ZW4gb3V0IHNhZmVseSB0byBjb25zdW1lcnMuXG5cdCAqIEByZXR1cm4ge3twcm9taXNlOiBQcm9taXNlLCByZXNvbHZlOiBmdW5jdGlvbiwgcmVqZWN0OiBmdW5jdGlvbiwgbm90aWZ5OiBmdW5jdGlvbn19XG5cdCAqL1xuXHRmdW5jdGlvbiBkZWZlcigpIHtcblx0XHRyZXR1cm4gbmV3IERlZmVycmVkKCk7XG5cdH1cblxuXHRmdW5jdGlvbiBEZWZlcnJlZCgpIHtcblx0XHR2YXIgcCA9IFByb21pc2UuX2RlZmVyKCk7XG5cblx0XHRmdW5jdGlvbiByZXNvbHZlKHgpIHsgcC5faGFuZGxlci5yZXNvbHZlKHgpOyB9XG5cdFx0ZnVuY3Rpb24gcmVqZWN0KHgpIHsgcC5faGFuZGxlci5yZWplY3QoeCk7IH1cblx0XHRmdW5jdGlvbiBub3RpZnkoeCkgeyBwLl9oYW5kbGVyLm5vdGlmeSh4KTsgfVxuXG5cdFx0dGhpcy5wcm9taXNlID0gcDtcblx0XHR0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuXHRcdHRoaXMubm90aWZ5ID0gbm90aWZ5O1xuXHRcdHRoaXMucmVzb2x2ZXIgPSB7IHJlc29sdmU6IHJlc29sdmUsIHJlamVjdDogcmVqZWN0LCBub3RpZnk6IG5vdGlmeSB9O1xuXHR9XG5cblx0LyoqXG5cdCAqIERldGVybWluZXMgaWYgeCBpcyBwcm9taXNlLWxpa2UsIGkuZS4gYSB0aGVuYWJsZSBvYmplY3Rcblx0ICogTk9URTogV2lsbCByZXR1cm4gdHJ1ZSBmb3IgKmFueSB0aGVuYWJsZSBvYmplY3QqLCBhbmQgaXNuJ3QgdHJ1bHlcblx0ICogc2FmZSwgc2luY2UgaXQgbWF5IGF0dGVtcHQgdG8gYWNjZXNzIHRoZSBgdGhlbmAgcHJvcGVydHkgb2YgeCAoaS5lLlxuXHQgKiAgY2xldmVyL21hbGljaW91cyBnZXR0ZXJzIG1heSBkbyB3ZWlyZCB0aGluZ3MpXG5cdCAqIEBwYXJhbSB7Kn0geCBhbnl0aGluZ1xuXHQgKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB4IGlzIHByb21pc2UtbGlrZVxuXHQgKi9cblx0ZnVuY3Rpb24gaXNQcm9taXNlTGlrZSh4KSB7XG5cdFx0cmV0dXJuIHggJiYgdHlwZW9mIHgudGhlbiA9PT0gJ2Z1bmN0aW9uJztcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCByZXNvbHZlIG9ubHkgb25jZSBhbGwgdGhlIHN1cHBsaWVkIGFyZ3VtZW50c1xuXHQgKiBoYXZlIHJlc29sdmVkLiBUaGUgcmVzb2x1dGlvbiB2YWx1ZSBvZiB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIGFuIGFycmF5XG5cdCAqIGNvbnRhaW5pbmcgdGhlIHJlc29sdXRpb24gdmFsdWVzIG9mIGVhY2ggb2YgdGhlIGFyZ3VtZW50cy5cblx0ICogQHBhcmFtIHsuLi4qfSBhcmd1bWVudHMgbWF5IGJlIGEgbWl4IG9mIHByb21pc2VzIGFuZCB2YWx1ZXNcblx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdCAqL1xuXHRmdW5jdGlvbiBqb2luKC8qIC4uLnByb21pc2VzICovKSB7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKGFyZ3VtZW50cyk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgZnVsZmlsbCBvbmNlIGFsbCBpbnB1dCBwcm9taXNlcyBoYXZlXG5cdCAqIGZ1bGZpbGxlZCwgb3IgcmVqZWN0IHdoZW4gYW55IG9uZSBpbnB1dCBwcm9taXNlIHJlamVjdHMuXG5cdCAqIEBwYXJhbSB7YXJyYXl8UHJvbWlzZX0gcHJvbWlzZXMgYXJyYXkgKG9yIHByb21pc2UgZm9yIGFuIGFycmF5KSBvZiBwcm9taXNlc1xuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0ICovXG5cdGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuXHRcdHJldHVybiB3aGVuKHByb21pc2VzLCBQcm9taXNlLmFsbCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgYWx3YXlzIGZ1bGZpbGwgd2l0aCBhbiBhcnJheSBjb250YWluaW5nXG5cdCAqIHRoZSBvdXRjb21lIHN0YXRlcyBvZiBhbGwgaW5wdXQgcHJvbWlzZXMuICBUaGUgcmV0dXJuZWQgcHJvbWlzZVxuXHQgKiB3aWxsIG9ubHkgcmVqZWN0IGlmIGBwcm9taXNlc2AgaXRzZWxmIGlzIGEgcmVqZWN0ZWQgcHJvbWlzZS5cblx0ICogQHBhcmFtIHthcnJheXxQcm9taXNlfSBwcm9taXNlcyBhcnJheSAob3IgcHJvbWlzZSBmb3IgYW4gYXJyYXkpIG9mIHByb21pc2VzXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIGZvciBhcnJheSBvZiBzZXR0bGVkIHN0YXRlIGRlc2NyaXB0b3JzXG5cdCAqL1xuXHRmdW5jdGlvbiBzZXR0bGUocHJvbWlzZXMpIHtcblx0XHRyZXR1cm4gd2hlbihwcm9taXNlcywgUHJvbWlzZS5zZXR0bGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFByb21pc2UtYXdhcmUgYXJyYXkgbWFwIGZ1bmN0aW9uLCBzaW1pbGFyIHRvIGBBcnJheS5wcm90b3R5cGUubWFwKClgLFxuXHQgKiBidXQgaW5wdXQgYXJyYXkgbWF5IGNvbnRhaW4gcHJvbWlzZXMgb3IgdmFsdWVzLlxuXHQgKiBAcGFyYW0ge0FycmF5fFByb21pc2V9IHByb21pc2VzIGFycmF5IG9mIGFueXRoaW5nLCBtYXkgY29udGFpbiBwcm9taXNlcyBhbmQgdmFsdWVzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oeDoqLCBpbmRleDpOdW1iZXIpOip9IG1hcEZ1bmMgbWFwIGZ1bmN0aW9uIHdoaWNoIG1heVxuXHQgKiAgcmV0dXJuIGEgcHJvbWlzZSBvciB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSB0aGF0IHdpbGwgZnVsZmlsbCB3aXRoIGFuIGFycmF5IG9mIG1hcHBlZCB2YWx1ZXNcblx0ICogIG9yIHJlamVjdCBpZiBhbnkgaW5wdXQgcHJvbWlzZSByZWplY3RzLlxuXHQgKi9cblx0ZnVuY3Rpb24gbWFwKHByb21pc2VzLCBtYXBGdW5jKSB7XG5cdFx0cmV0dXJuIHdoZW4ocHJvbWlzZXMsIGZ1bmN0aW9uKHByb21pc2VzKSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5tYXAocHJvbWlzZXMsIG1hcEZ1bmMpO1xuXHRcdH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZpbHRlciB0aGUgcHJvdmlkZWQgYXJyYXkgb2YgcHJvbWlzZXMgdXNpbmcgdGhlIHByb3ZpZGVkIHByZWRpY2F0ZS4gIElucHV0IG1heVxuXHQgKiBjb250YWluIHByb21pc2VzIGFuZCB2YWx1ZXNcblx0ICogQHBhcmFtIHtBcnJheXxQcm9taXNlfSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlcyBhbmQgdmFsdWVzXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb24oeDoqLCBpbmRleDpOdW1iZXIpOmJvb2xlYW59IHByZWRpY2F0ZSBmaWx0ZXJpbmcgcHJlZGljYXRlLlxuXHQgKiAgTXVzdCByZXR1cm4gdHJ1dGh5IChvciBwcm9taXNlIGZvciB0cnV0aHkpIGZvciBpdGVtcyB0byByZXRhaW4uXG5cdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIHRoYXQgd2lsbCBmdWxmaWxsIHdpdGggYW4gYXJyYXkgY29udGFpbmluZyBhbGwgaXRlbXNcblx0ICogIGZvciB3aGljaCBwcmVkaWNhdGUgcmV0dXJuZWQgdHJ1dGh5LlxuXHQgKi9cblx0ZnVuY3Rpb24gZmlsdGVyKHByb21pc2VzLCBwcmVkaWNhdGUpIHtcblx0XHRyZXR1cm4gd2hlbihwcm9taXNlcywgZnVuY3Rpb24ocHJvbWlzZXMpIHtcblx0XHRcdHJldHVybiBQcm9taXNlLmZpbHRlcihwcm9taXNlcywgcHJlZGljYXRlKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB3aGVuO1xufSk7XG59KSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbiAoZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSk7IH0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doZW4vd2hlbi5qc1xuLy8gbW9kdWxlIGlkID0gNjc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbihyZXF1aXJlKSB7XG5cblx0dmFyIGVudiA9IHJlcXVpcmUoJy4uL2VudicpO1xuXHR2YXIgVGltZW91dEVycm9yID0gcmVxdWlyZSgnLi4vVGltZW91dEVycm9yJyk7XG5cblx0ZnVuY3Rpb24gc2V0VGltZW91dChmLCBtcywgeCwgeSkge1xuXHRcdHJldHVybiBlbnYuc2V0VGltZXIoZnVuY3Rpb24oKSB7XG5cdFx0XHRmKHgsIHksIG1zKTtcblx0XHR9LCBtcyk7XG5cdH1cblxuXHRyZXR1cm4gZnVuY3Rpb24gdGltZWQoUHJvbWlzZSkge1xuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBhIG5ldyBwcm9taXNlIHdob3NlIGZ1bGZpbGxtZW50IHZhbHVlIGlzIHJldmVhbGVkIG9ubHlcblx0XHQgKiBhZnRlciBtcyBtaWxsaXNlY29uZHNcblx0XHQgKiBAcGFyYW0ge251bWJlcn0gbXMgbWlsbGlzZWNvbmRzXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGUuZGVsYXkgPSBmdW5jdGlvbihtcykge1xuXHRcdFx0dmFyIHAgPSB0aGlzLl9iZWdldCgpO1xuXHRcdFx0dGhpcy5faGFuZGxlci5mb2xkKGhhbmRsZURlbGF5LCBtcywgdm9pZCAwLCBwLl9oYW5kbGVyKTtcblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBoYW5kbGVEZWxheShtcywgeCwgaCkge1xuXHRcdFx0c2V0VGltZW91dChyZXNvbHZlRGVsYXksIG1zLCB4LCBoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiByZXNvbHZlRGVsYXkoeCwgaCkge1xuXHRcdFx0aC5yZXNvbHZlKHgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBhIG5ldyBwcm9taXNlIHRoYXQgcmVqZWN0cyBhZnRlciBtcyBtaWxsaXNlY29uZHMgdW5sZXNzXG5cdFx0ICogdGhpcyBwcm9taXNlIGZ1bGZpbGxzIGVhcmxpZXIsIGluIHdoaWNoIGNhc2UgdGhlIHJldHVybmVkIHByb21pc2Vcblx0XHQgKiBmdWxmaWxscyB3aXRoIHRoZSBzYW1lIHZhbHVlLlxuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBtcyBtaWxsaXNlY29uZHNcblx0XHQgKiBAcGFyYW0ge0Vycm9yfCo9fSByZWFzb24gb3B0aW9uYWwgcmVqZWN0aW9uIHJlYXNvbiB0byB1c2UsIGRlZmF1bHRzXG5cdFx0ICogICB0byBhIFRpbWVvdXRFcnJvciBpZiBub3QgcHJvdmlkZWRcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24obXMsIHJlYXNvbikge1xuXHRcdFx0dmFyIHAgPSB0aGlzLl9iZWdldCgpO1xuXHRcdFx0dmFyIGggPSBwLl9oYW5kbGVyO1xuXG5cdFx0XHR2YXIgdCA9IHNldFRpbWVvdXQob25UaW1lb3V0LCBtcywgcmVhc29uLCBwLl9oYW5kbGVyKTtcblxuXHRcdFx0dGhpcy5faGFuZGxlci52aXNpdChoLFxuXHRcdFx0XHRmdW5jdGlvbiBvbkZ1bGZpbGwoeCkge1xuXHRcdFx0XHRcdGVudi5jbGVhclRpbWVyKHQpO1xuXHRcdFx0XHRcdHRoaXMucmVzb2x2ZSh4KTsgLy8gdGhpcyA9IGhcblx0XHRcdFx0fSxcblx0XHRcdFx0ZnVuY3Rpb24gb25SZWplY3QoeCkge1xuXHRcdFx0XHRcdGVudi5jbGVhclRpbWVyKHQpO1xuXHRcdFx0XHRcdHRoaXMucmVqZWN0KHgpOyAvLyB0aGlzID0gaFxuXHRcdFx0XHR9LFxuXHRcdFx0XHRoLm5vdGlmeSk7XG5cblx0XHRcdHJldHVybiBwO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBvblRpbWVvdXQocmVhc29uLCBoLCBtcykge1xuXHRcdFx0dmFyIGUgPSB0eXBlb2YgcmVhc29uID09PSAndW5kZWZpbmVkJ1xuXHRcdFx0XHQ/IG5ldyBUaW1lb3V0RXJyb3IoJ3RpbWVkIG91dCBhZnRlciAnICsgbXMgKyAnbXMnKVxuXHRcdFx0XHQ6IHJlYXNvbjtcblx0XHRcdGgucmVqZWN0KGUpO1xuXHRcdH1cblxuXHRcdHJldHVybiBQcm9taXNlO1xuXHR9O1xuXG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSk7IH0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3RpbWVkLmpzXG4vLyBtb2R1bGUgaWQgPSA2NzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbi8qZ2xvYmFsIHByb2Nlc3MsZG9jdW1lbnQsc2V0VGltZW91dCxjbGVhclRpbWVvdXQsTXV0YXRpb25PYnNlcnZlcixXZWJLaXRNdXRhdGlvbk9ic2VydmVyKi9cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKHJlcXVpcmUpIHtcblx0Lypqc2hpbnQgbWF4Y29tcGxleGl0eTo2Ki9cblxuXHQvLyBTbmlmZiBcImJlc3RcIiBhc3luYyBzY2hlZHVsaW5nIG9wdGlvblxuXHQvLyBQcmVmZXIgcHJvY2Vzcy5uZXh0VGljayBvciBNdXRhdGlvbk9ic2VydmVyLCB0aGVuIGNoZWNrIGZvclxuXHQvLyBzZXRUaW1lb3V0LCBhbmQgZmluYWxseSB2ZXJ0eCwgc2luY2UgaXRzIHRoZSBvbmx5IGVudiB0aGF0IGRvZXNuJ3Rcblx0Ly8gaGF2ZSBzZXRUaW1lb3V0XG5cblx0dmFyIE11dGF0aW9uT2JzO1xuXHR2YXIgY2FwdHVyZWRTZXRUaW1lb3V0ID0gdHlwZW9mIHNldFRpbWVvdXQgIT09ICd1bmRlZmluZWQnICYmIHNldFRpbWVvdXQ7XG5cblx0Ly8gRGVmYXVsdCBlbnZcblx0dmFyIHNldFRpbWVyID0gZnVuY3Rpb24oZiwgbXMpIHsgcmV0dXJuIHNldFRpbWVvdXQoZiwgbXMpOyB9O1xuXHR2YXIgY2xlYXJUaW1lciA9IGZ1bmN0aW9uKHQpIHsgcmV0dXJuIGNsZWFyVGltZW91dCh0KTsgfTtcblx0dmFyIGFzYXAgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gY2FwdHVyZWRTZXRUaW1lb3V0KGYsIDApOyB9O1xuXG5cdC8vIERldGVjdCBzcGVjaWZpYyBlbnZcblx0aWYgKGlzTm9kZSgpKSB7IC8vIE5vZGVcblx0XHRhc2FwID0gZnVuY3Rpb24gKGYpIHsgcmV0dXJuIHByb2Nlc3MubmV4dFRpY2soZik7IH07XG5cblx0fSBlbHNlIGlmIChNdXRhdGlvbk9icyA9IGhhc011dGF0aW9uT2JzZXJ2ZXIoKSkgeyAvLyBNb2Rlcm4gYnJvd3NlclxuXHRcdGFzYXAgPSBpbml0TXV0YXRpb25PYnNlcnZlcihNdXRhdGlvbk9icyk7XG5cblx0fSBlbHNlIGlmICghY2FwdHVyZWRTZXRUaW1lb3V0KSB7IC8vIHZlcnQueFxuXHRcdHZhciB2ZXJ0eFJlcXVpcmUgPSByZXF1aXJlO1xuXHRcdHZhciB2ZXJ0eCA9IHZlcnR4UmVxdWlyZSgndmVydHgnKTtcblx0XHRzZXRUaW1lciA9IGZ1bmN0aW9uIChmLCBtcykgeyByZXR1cm4gdmVydHguc2V0VGltZXIobXMsIGYpOyB9O1xuXHRcdGNsZWFyVGltZXIgPSB2ZXJ0eC5jYW5jZWxUaW1lcjtcblx0XHRhc2FwID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0c2V0VGltZXI6IHNldFRpbWVyLFxuXHRcdGNsZWFyVGltZXI6IGNsZWFyVGltZXIsXG5cdFx0YXNhcDogYXNhcFxuXHR9O1xuXG5cdGZ1bmN0aW9uIGlzTm9kZSAoKSB7XG5cdFx0cmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJlxuXHRcdFx0T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXSc7XG5cdH1cblxuXHRmdW5jdGlvbiBoYXNNdXRhdGlvbk9ic2VydmVyICgpIHtcblx0XHRyZXR1cm4gKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyID09PSAnZnVuY3Rpb24nICYmIE11dGF0aW9uT2JzZXJ2ZXIpIHx8XG5cdFx0XHQodHlwZW9mIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgPT09ICdmdW5jdGlvbicgJiYgV2ViS2l0TXV0YXRpb25PYnNlcnZlcik7XG5cdH1cblxuXHRmdW5jdGlvbiBpbml0TXV0YXRpb25PYnNlcnZlcihNdXRhdGlvbk9ic2VydmVyKSB7XG5cdFx0dmFyIHNjaGVkdWxlZDtcblx0XHR2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcblx0XHR2YXIgbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKHJ1bik7XG5cdFx0by5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTtcblxuXHRcdGZ1bmN0aW9uIHJ1bigpIHtcblx0XHRcdHZhciBmID0gc2NoZWR1bGVkO1xuXHRcdFx0c2NoZWR1bGVkID0gdm9pZCAwO1xuXHRcdFx0ZigpO1xuXHRcdH1cblxuXHRcdHZhciBpID0gMDtcblx0XHRyZXR1cm4gZnVuY3Rpb24gKGYpIHtcblx0XHRcdHNjaGVkdWxlZCA9IGY7XG5cdFx0XHRub2RlLmRhdGEgPSAoaSBePSAxKTtcblx0XHR9O1xuXHR9XG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZSk7IH0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGVuL2xpYi9lbnYuanNcbi8vIG1vZHVsZSBpZCA9IDY3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiAoaWdub3JlZCkgKi9cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyB2ZXJ0eCAoaWdub3JlZClcbi8vIG1vZHVsZSBpZCA9IDY3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJkZWZpbmUgY2Fubm90IGJlIHVzZWQgaW5kaXJlY3RcIik7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9hbWQtZGVmaW5lLmpzXG4vLyBtb2R1bGUgaWQgPSA2Nzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdC8qKlxuXHQgKiBDdXN0b20gZXJyb3IgdHlwZSBmb3IgcHJvbWlzZXMgcmVqZWN0ZWQgYnkgcHJvbWlzZS50aW1lb3V0XG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0ZnVuY3Rpb24gVGltZW91dEVycm9yIChtZXNzYWdlKSB7XG5cdFx0RXJyb3IuY2FsbCh0aGlzKTtcblx0XHR0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuXHRcdHRoaXMubmFtZSA9IFRpbWVvdXRFcnJvci5uYW1lO1xuXHRcdGlmICh0eXBlb2YgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIFRpbWVvdXRFcnJvcik7XG5cdFx0fVxuXHR9XG5cblx0VGltZW91dEVycm9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoRXJyb3IucHJvdG90eXBlKTtcblx0VGltZW91dEVycm9yLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IFRpbWVvdXRFcnJvcjtcblxuXHRyZXR1cm4gVGltZW91dEVycm9yO1xufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hlbi9saWIvVGltZW91dEVycm9yLmpzXG4vLyBtb2R1bGUgaWQgPSA2ODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKHJlcXVpcmUpIHtcblxuXHR2YXIgc3RhdGUgPSByZXF1aXJlKCcuLi9zdGF0ZScpO1xuXHR2YXIgYXBwbGllciA9IHJlcXVpcmUoJy4uL2FwcGx5Jyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGFycmF5KFByb21pc2UpIHtcblxuXHRcdHZhciBhcHBseUZvbGQgPSBhcHBsaWVyKFByb21pc2UpO1xuXHRcdHZhciB0b1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmU7XG5cdFx0dmFyIGFsbCA9IFByb21pc2UuYWxsO1xuXG5cdFx0dmFyIGFyID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZTtcblx0XHR2YXIgYXJyID0gQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0O1xuXHRcdHZhciBzbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxuXHRcdC8vIEFkZGl0aW9uYWwgYXJyYXkgY29tYmluYXRvcnNcblxuXHRcdFByb21pc2UuYW55ID0gYW55O1xuXHRcdFByb21pc2Uuc29tZSA9IHNvbWU7XG5cdFx0UHJvbWlzZS5zZXR0bGUgPSBzZXR0bGU7XG5cblx0XHRQcm9taXNlLm1hcCA9IG1hcDtcblx0XHRQcm9taXNlLmZpbHRlciA9IGZpbHRlcjtcblx0XHRQcm9taXNlLnJlZHVjZSA9IHJlZHVjZTtcblx0XHRQcm9taXNlLnJlZHVjZVJpZ2h0ID0gcmVkdWNlUmlnaHQ7XG5cblx0XHQvKipcblx0XHQgKiBXaGVuIHRoaXMgcHJvbWlzZSBmdWxmaWxscyB3aXRoIGFuIGFycmF5LCBkb1xuXHRcdCAqIG9uRnVsZmlsbGVkLmFwcGx5KHZvaWQgMCwgYXJyYXkpXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gb25GdWxmaWxsZWQgZnVuY3Rpb24gdG8gYXBwbHlcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgdGhlIHJlc3VsdCBvZiBhcHBseWluZyBvbkZ1bGZpbGxlZFxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlLnNwcmVhZCA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aGVuKGFsbCkudGhlbihmdW5jdGlvbihhcnJheSkge1xuXHRcdFx0XHRyZXR1cm4gb25GdWxmaWxsZWQuYXBwbHkodGhpcywgYXJyYXkpO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBQcm9taXNlO1xuXG5cdFx0LyoqXG5cdFx0ICogT25lLXdpbm5lciBjb21wZXRpdGl2ZSByYWNlLlxuXHRcdCAqIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGZ1bGZpbGwgd2hlbiBvbmUgb2YgdGhlIHByb21pc2VzXG5cdFx0ICogaW4gdGhlIGlucHV0IGFycmF5IGZ1bGZpbGxzLCBvciB3aWxsIHJlamVjdCB3aGVuIGFsbCBwcm9taXNlc1xuXHRcdCAqIGhhdmUgcmVqZWN0ZWQuXG5cdFx0ICogQHBhcmFtIHthcnJheX0gcHJvbWlzZXNcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgdGhlIGZpcnN0IGZ1bGZpbGxlZCB2YWx1ZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIGFueShwcm9taXNlcykge1xuXHRcdFx0dmFyIHAgPSBQcm9taXNlLl9kZWZlcigpO1xuXHRcdFx0dmFyIHJlc29sdmVyID0gcC5faGFuZGxlcjtcblx0XHRcdHZhciBsID0gcHJvbWlzZXMubGVuZ3RoPj4+MDtcblxuXHRcdFx0dmFyIHBlbmRpbmcgPSBsO1xuXHRcdFx0dmFyIGVycm9ycyA9IFtdO1xuXG5cdFx0XHRmb3IgKHZhciBoLCB4LCBpID0gMDsgaSA8IGw7ICsraSkge1xuXHRcdFx0XHR4ID0gcHJvbWlzZXNbaV07XG5cdFx0XHRcdGlmKHggPT09IHZvaWQgMCAmJiAhKGkgaW4gcHJvbWlzZXMpKSB7XG5cdFx0XHRcdFx0LS1wZW5kaW5nO1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aCA9IFByb21pc2UuX2hhbmRsZXIoeCk7XG5cdFx0XHRcdGlmKGguc3RhdGUoKSA+IDApIHtcblx0XHRcdFx0XHRyZXNvbHZlci5iZWNvbWUoaCk7XG5cdFx0XHRcdFx0UHJvbWlzZS5fdmlzaXRSZW1haW5pbmcocHJvbWlzZXMsIGksIGgpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGgudmlzaXQocmVzb2x2ZXIsIGhhbmRsZUZ1bGZpbGwsIGhhbmRsZVJlamVjdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYocGVuZGluZyA9PT0gMCkge1xuXHRcdFx0XHRyZXNvbHZlci5yZWplY3QobmV3IFJhbmdlRXJyb3IoJ2FueSgpOiBhcnJheSBtdXN0IG5vdCBiZSBlbXB0eScpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHA7XG5cblx0XHRcdGZ1bmN0aW9uIGhhbmRsZUZ1bGZpbGwoeCkge1xuXHRcdFx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSovXG5cdFx0XHRcdGVycm9ycyA9IG51bGw7XG5cdFx0XHRcdHRoaXMucmVzb2x2ZSh4KTsgLy8gdGhpcyA9PT0gcmVzb2x2ZXJcblx0XHRcdH1cblxuXHRcdFx0ZnVuY3Rpb24gaGFuZGxlUmVqZWN0KGUpIHtcblx0XHRcdFx0Lypqc2hpbnQgdmFsaWR0aGlzOnRydWUqL1xuXHRcdFx0XHRpZih0aGlzLnJlc29sdmVkKSB7IC8vIHRoaXMgPT09IHJlc29sdmVyXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZXJyb3JzLnB1c2goZSk7XG5cdFx0XHRcdGlmKC0tcGVuZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdHRoaXMucmVqZWN0KGVycm9ycyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBOLXdpbm5lciBjb21wZXRpdGl2ZSByYWNlXG5cdFx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgZnVsZmlsbCB3aGVuIG4gaW5wdXQgcHJvbWlzZXMgaGF2ZVxuXHRcdCAqIGZ1bGZpbGxlZCwgb3Igd2lsbCByZWplY3Qgd2hlbiBpdCBiZWNvbWVzIGltcG9zc2libGUgZm9yIG5cblx0XHQgKiBpbnB1dCBwcm9taXNlcyB0byBmdWxmaWxsIChpZSB3aGVuIHByb21pc2VzLmxlbmd0aCAtIG4gKyAxXG5cdFx0ICogaGF2ZSByZWplY3RlZClcblx0XHQgKiBAcGFyYW0ge2FycmF5fSBwcm9taXNlc1xuXHRcdCAqIEBwYXJhbSB7bnVtYmVyfSBuXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHByb21pc2UgZm9yIHRoZSBlYXJsaWVzdCBuIGZ1bGZpbGxtZW50IHZhbHVlc1xuXHRcdCAqXG5cdFx0ICogQGRlcHJlY2F0ZWRcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBzb21lKHByb21pc2VzLCBuKSB7XG5cdFx0XHQvKmpzaGludCBtYXhjb21wbGV4aXR5OjcqL1xuXHRcdFx0dmFyIHAgPSBQcm9taXNlLl9kZWZlcigpO1xuXHRcdFx0dmFyIHJlc29sdmVyID0gcC5faGFuZGxlcjtcblxuXHRcdFx0dmFyIHJlc3VsdHMgPSBbXTtcblx0XHRcdHZhciBlcnJvcnMgPSBbXTtcblxuXHRcdFx0dmFyIGwgPSBwcm9taXNlcy5sZW5ndGg+Pj4wO1xuXHRcdFx0dmFyIG5GdWxmaWxsID0gMDtcblx0XHRcdHZhciBuUmVqZWN0O1xuXHRcdFx0dmFyIHgsIGk7IC8vIHJldXNlZCBpbiBib3RoIGZvcigpIGxvb3BzXG5cblx0XHRcdC8vIEZpcnN0IHBhc3M6IGNvdW50IGFjdHVhbCBhcnJheSBpdGVtc1xuXHRcdFx0Zm9yKGk9MDsgaTxsOyArK2kpIHtcblx0XHRcdFx0eCA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRpZih4ID09PSB2b2lkIDAgJiYgIShpIGluIHByb21pc2VzKSkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCsrbkZ1bGZpbGw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXB1dGUgYWN0dWFsIGdvYWxzXG5cdFx0XHRuID0gTWF0aC5tYXgobiwgMCk7XG5cdFx0XHRuUmVqZWN0ID0gKG5GdWxmaWxsIC0gbiArIDEpO1xuXHRcdFx0bkZ1bGZpbGwgPSBNYXRoLm1pbihuLCBuRnVsZmlsbCk7XG5cblx0XHRcdGlmKG4gPiBuRnVsZmlsbCkge1xuXHRcdFx0XHRyZXNvbHZlci5yZWplY3QobmV3IFJhbmdlRXJyb3IoJ3NvbWUoKTogYXJyYXkgbXVzdCBjb250YWluIGF0IGxlYXN0ICdcblx0XHRcdFx0KyBuICsgJyBpdGVtKHMpLCBidXQgaGFkICcgKyBuRnVsZmlsbCkpO1xuXHRcdFx0fSBlbHNlIGlmKG5GdWxmaWxsID09PSAwKSB7XG5cdFx0XHRcdHJlc29sdmVyLnJlc29sdmUocmVzdWx0cyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlY29uZCBwYXNzOiBvYnNlcnZlIGVhY2ggYXJyYXkgaXRlbSwgbWFrZSBwcm9ncmVzcyB0b3dhcmQgZ29hbHNcblx0XHRcdGZvcihpPTA7IGk8bDsgKytpKSB7XG5cdFx0XHRcdHggPSBwcm9taXNlc1tpXTtcblx0XHRcdFx0aWYoeCA9PT0gdm9pZCAwICYmICEoaSBpbiBwcm9taXNlcykpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdFByb21pc2UuX2hhbmRsZXIoeCkudmlzaXQocmVzb2x2ZXIsIGZ1bGZpbGwsIHJlamVjdCwgcmVzb2x2ZXIubm90aWZ5KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHA7XG5cblx0XHRcdGZ1bmN0aW9uIGZ1bGZpbGwoeCkge1xuXHRcdFx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSovXG5cdFx0XHRcdGlmKHRoaXMucmVzb2x2ZWQpIHsgLy8gdGhpcyA9PT0gcmVzb2x2ZXJcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXN1bHRzLnB1c2goeCk7XG5cdFx0XHRcdGlmKC0tbkZ1bGZpbGwgPT09IDApIHtcblx0XHRcdFx0XHRlcnJvcnMgPSBudWxsO1xuXHRcdFx0XHRcdHRoaXMucmVzb2x2ZShyZXN1bHRzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiByZWplY3QoZSkge1xuXHRcdFx0XHQvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSovXG5cdFx0XHRcdGlmKHRoaXMucmVzb2x2ZWQpIHsgLy8gdGhpcyA9PT0gcmVzb2x2ZXJcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlcnJvcnMucHVzaChlKTtcblx0XHRcdFx0aWYoLS1uUmVqZWN0ID09PSAwKSB7XG5cdFx0XHRcdFx0cmVzdWx0cyA9IG51bGw7XG5cdFx0XHRcdFx0dGhpcy5yZWplY3QoZXJyb3JzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEFwcGx5IGYgdG8gdGhlIHZhbHVlIG9mIGVhY2ggcHJvbWlzZSBpbiBhIGxpc3Qgb2YgcHJvbWlzZXNcblx0XHQgKiBhbmQgcmV0dXJuIGEgbmV3IGxpc3QgY29udGFpbmluZyB0aGUgcmVzdWx0cy5cblx0XHQgKiBAcGFyYW0ge2FycmF5fSBwcm9taXNlc1xuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24oeDoqLCBpbmRleDpOdW1iZXIpOip9IGYgbWFwcGluZyBmdW5jdGlvblxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG1hcChwcm9taXNlcywgZikge1xuXHRcdFx0cmV0dXJuIFByb21pc2UuX3RyYXZlcnNlKGYsIHByb21pc2VzKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBGaWx0ZXIgdGhlIHByb3ZpZGVkIGFycmF5IG9mIHByb21pc2VzIHVzaW5nIHRoZSBwcm92aWRlZCBwcmVkaWNhdGUuICBJbnB1dCBtYXlcblx0XHQgKiBjb250YWluIHByb21pc2VzIGFuZCB2YWx1ZXNcblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwcm9taXNlcyBhcnJheSBvZiBwcm9taXNlcyBhbmQgdmFsdWVzXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbih4OiosIGluZGV4Ok51bWJlcik6Ym9vbGVhbn0gcHJlZGljYXRlIGZpbHRlcmluZyBwcmVkaWNhdGUuXG5cdFx0ICogIE11c3QgcmV0dXJuIHRydXRoeSAob3IgcHJvbWlzZSBmb3IgdHJ1dGh5KSBmb3IgaXRlbXMgdG8gcmV0YWluLlxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIHRoYXQgd2lsbCBmdWxmaWxsIHdpdGggYW4gYXJyYXkgY29udGFpbmluZyBhbGwgaXRlbXNcblx0XHQgKiAgZm9yIHdoaWNoIHByZWRpY2F0ZSByZXR1cm5lZCB0cnV0aHkuXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZmlsdGVyKHByb21pc2VzLCBwcmVkaWNhdGUpIHtcblx0XHRcdHZhciBhID0gc2xpY2UuY2FsbChwcm9taXNlcyk7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5fdHJhdmVyc2UocHJlZGljYXRlLCBhKS50aGVuKGZ1bmN0aW9uKGtlZXApIHtcblx0XHRcdFx0cmV0dXJuIGZpbHRlclN5bmMoYSwga2VlcCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBmaWx0ZXJTeW5jKHByb21pc2VzLCBrZWVwKSB7XG5cdFx0XHQvLyBTYWZlIGJlY2F1c2Ugd2Uga25vdyBhbGwgcHJvbWlzZXMgaGF2ZSBmdWxmaWxsZWQgaWYgd2UndmUgbWFkZSBpdCB0aGlzIGZhclxuXHRcdFx0dmFyIGwgPSBrZWVwLmxlbmd0aDtcblx0XHRcdHZhciBmaWx0ZXJlZCA9IG5ldyBBcnJheShsKTtcblx0XHRcdGZvcih2YXIgaT0wLCBqPTA7IGk8bDsgKytpKSB7XG5cdFx0XHRcdGlmKGtlZXBbaV0pIHtcblx0XHRcdFx0XHRmaWx0ZXJlZFtqKytdID0gUHJvbWlzZS5faGFuZGxlcihwcm9taXNlc1tpXSkudmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZpbHRlcmVkLmxlbmd0aCA9IGo7XG5cdFx0XHRyZXR1cm4gZmlsdGVyZWQ7XG5cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm4gYSBwcm9taXNlIHRoYXQgd2lsbCBhbHdheXMgZnVsZmlsbCB3aXRoIGFuIGFycmF5IGNvbnRhaW5pbmdcblx0XHQgKiB0aGUgb3V0Y29tZSBzdGF0ZXMgb2YgYWxsIGlucHV0IHByb21pc2VzLiAgVGhlIHJldHVybmVkIHByb21pc2Vcblx0XHQgKiB3aWxsIG5ldmVyIHJlamVjdC5cblx0XHQgKiBAcGFyYW0ge0FycmF5fSBwcm9taXNlc1xuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSBwcm9taXNlIGZvciBhcnJheSBvZiBzZXR0bGVkIHN0YXRlIGRlc2NyaXB0b3JzXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gc2V0dGxlKHByb21pc2VzKSB7XG5cdFx0XHRyZXR1cm4gYWxsKHByb21pc2VzLm1hcChzZXR0bGVPbmUpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBzZXR0bGVPbmUocCkge1xuXHRcdFx0dmFyIGggPSBQcm9taXNlLl9oYW5kbGVyKHApO1xuXHRcdFx0aWYoaC5zdGF0ZSgpID09PSAwKSB7XG5cdFx0XHRcdHJldHVybiB0b1Byb21pc2UocCkudGhlbihzdGF0ZS5mdWxmaWxsZWQsIHN0YXRlLnJlamVjdGVkKTtcblx0XHRcdH1cblxuXHRcdFx0aC5fdW5yZXBvcnQoKTtcblx0XHRcdHJldHVybiBzdGF0ZS5pbnNwZWN0KGgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFRyYWRpdGlvbmFsIHJlZHVjZSBmdW5jdGlvbiwgc2ltaWxhciB0byBgQXJyYXkucHJvdG90eXBlLnJlZHVjZSgpYCwgYnV0XG5cdFx0ICogaW5wdXQgbWF5IGNvbnRhaW4gcHJvbWlzZXMgYW5kL29yIHZhbHVlcywgYW5kIHJlZHVjZUZ1bmNcblx0XHQgKiBtYXkgcmV0dXJuIGVpdGhlciBhIHZhbHVlIG9yIGEgcHJvbWlzZSwgKmFuZCogaW5pdGlhbFZhbHVlIG1heVxuXHRcdCAqIGJlIGEgcHJvbWlzZSBmb3IgdGhlIHN0YXJ0aW5nIHZhbHVlLlxuXHRcdCAqIEBwYXJhbSB7QXJyYXl8UHJvbWlzZX0gcHJvbWlzZXMgYXJyYXkgb3IgcHJvbWlzZSBmb3IgYW4gYXJyYXkgb2YgYW55dGhpbmcsXG5cdFx0ICogICAgICBtYXkgY29udGFpbiBhIG1peCBvZiBwcm9taXNlcyBhbmQgdmFsdWVzLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24oYWNjdW11bGF0ZWQ6KiwgeDoqLCBpbmRleDpOdW1iZXIpOip9IGYgcmVkdWNlIGZ1bmN0aW9uXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHRoYXQgd2lsbCByZXNvbHZlIHRvIHRoZSBmaW5hbCByZWR1Y2VkIHZhbHVlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gcmVkdWNlKHByb21pc2VzLCBmIC8qLCBpbml0aWFsVmFsdWUgKi8pIHtcblx0XHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyLmNhbGwocHJvbWlzZXMsIGxpZnRDb21iaW5lKGYpLCBhcmd1bWVudHNbMl0pXG5cdFx0XHRcdFx0OiBhci5jYWxsKHByb21pc2VzLCBsaWZ0Q29tYmluZShmKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogVHJhZGl0aW9uYWwgcmVkdWNlIGZ1bmN0aW9uLCBzaW1pbGFyIHRvIGBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQoKWAsIGJ1dFxuXHRcdCAqIGlucHV0IG1heSBjb250YWluIHByb21pc2VzIGFuZC9vciB2YWx1ZXMsIGFuZCByZWR1Y2VGdW5jXG5cdFx0ICogbWF5IHJldHVybiBlaXRoZXIgYSB2YWx1ZSBvciBhIHByb21pc2UsICphbmQqIGluaXRpYWxWYWx1ZSBtYXlcblx0XHQgKiBiZSBhIHByb21pc2UgZm9yIHRoZSBzdGFydGluZyB2YWx1ZS5cblx0XHQgKiBAcGFyYW0ge0FycmF5fFByb21pc2V9IHByb21pc2VzIGFycmF5IG9yIHByb21pc2UgZm9yIGFuIGFycmF5IG9mIGFueXRoaW5nLFxuXHRcdCAqICAgICAgbWF5IGNvbnRhaW4gYSBtaXggb2YgcHJvbWlzZXMgYW5kIHZhbHVlcy5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9uKGFjY3VtdWxhdGVkOiosIHg6KiwgaW5kZXg6TnVtYmVyKToqfSBmIHJlZHVjZSBmdW5jdGlvblxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSB0aGF0IHdpbGwgcmVzb2x2ZSB0byB0aGUgZmluYWwgcmVkdWNlZCB2YWx1ZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHJlZHVjZVJpZ2h0KHByb21pc2VzLCBmIC8qLCBpbml0aWFsVmFsdWUgKi8pIHtcblx0XHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID4gMiA/IGFyci5jYWxsKHByb21pc2VzLCBsaWZ0Q29tYmluZShmKSwgYXJndW1lbnRzWzJdKVxuXHRcdFx0XHRcdDogYXJyLmNhbGwocHJvbWlzZXMsIGxpZnRDb21iaW5lKGYpKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBsaWZ0Q29tYmluZShmKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oeiwgeCwgaSkge1xuXHRcdFx0XHRyZXR1cm4gYXBwbHlGb2xkKGYsIHZvaWQgMCwgW3oseCxpXSk7XG5cdFx0XHR9O1xuXHRcdH1cblx0fTtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hlbi9saWIvZGVjb3JhdG9ycy9hcnJheS5qc1xuLy8gbW9kdWxlIGlkID0gNjgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbigpIHtcblxuXHRyZXR1cm4ge1xuXHRcdHBlbmRpbmc6IHRvUGVuZGluZ1N0YXRlLFxuXHRcdGZ1bGZpbGxlZDogdG9GdWxmaWxsZWRTdGF0ZSxcblx0XHRyZWplY3RlZDogdG9SZWplY3RlZFN0YXRlLFxuXHRcdGluc3BlY3Q6IGluc3BlY3Rcblx0fTtcblxuXHRmdW5jdGlvbiB0b1BlbmRpbmdTdGF0ZSgpIHtcblx0XHRyZXR1cm4geyBzdGF0ZTogJ3BlbmRpbmcnIH07XG5cdH1cblxuXHRmdW5jdGlvbiB0b1JlamVjdGVkU3RhdGUoZSkge1xuXHRcdHJldHVybiB7IHN0YXRlOiAncmVqZWN0ZWQnLCByZWFzb246IGUgfTtcblx0fVxuXG5cdGZ1bmN0aW9uIHRvRnVsZmlsbGVkU3RhdGUoeCkge1xuXHRcdHJldHVybiB7IHN0YXRlOiAnZnVsZmlsbGVkJywgdmFsdWU6IHggfTtcblx0fVxuXG5cdGZ1bmN0aW9uIGluc3BlY3QoaGFuZGxlcikge1xuXHRcdHZhciBzdGF0ZSA9IGhhbmRsZXIuc3RhdGUoKTtcblx0XHRyZXR1cm4gc3RhdGUgPT09IDAgPyB0b1BlbmRpbmdTdGF0ZSgpXG5cdFx0XHQgOiBzdGF0ZSA+IDAgICA/IHRvRnVsZmlsbGVkU3RhdGUoaGFuZGxlci52YWx1ZSlcblx0XHRcdCAgICAgICAgICAgICAgIDogdG9SZWplY3RlZFN0YXRlKGhhbmRsZXIudmFsdWUpO1xuXHR9XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hlbi9saWIvc3RhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24oKSB7XG5cblx0bWFrZUFwcGx5LnRyeUNhdGNoUmVzb2x2ZSA9IHRyeUNhdGNoUmVzb2x2ZTtcblxuXHRyZXR1cm4gbWFrZUFwcGx5O1xuXG5cdGZ1bmN0aW9uIG1ha2VBcHBseShQcm9taXNlLCBjYWxsKSB7XG5cdFx0aWYoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHtcblx0XHRcdGNhbGwgPSB0cnlDYXRjaFJlc29sdmU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFwcGx5O1xuXG5cdFx0ZnVuY3Rpb24gYXBwbHkoZiwgdGhpc0FyZywgYXJncykge1xuXHRcdFx0dmFyIHAgPSBQcm9taXNlLl9kZWZlcigpO1xuXHRcdFx0dmFyIGwgPSBhcmdzLmxlbmd0aDtcblx0XHRcdHZhciBwYXJhbXMgPSBuZXcgQXJyYXkobCk7XG5cdFx0XHRjYWxsQW5kUmVzb2x2ZSh7IGY6ZiwgdGhpc0FyZzp0aGlzQXJnLCBhcmdzOmFyZ3MsIHBhcmFtczpwYXJhbXMsIGk6bC0xLCBjYWxsOmNhbGwgfSwgcC5faGFuZGxlcik7XG5cblx0XHRcdHJldHVybiBwO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGNhbGxBbmRSZXNvbHZlKGMsIGgpIHtcblx0XHRcdGlmKGMuaSA8IDApIHtcblx0XHRcdFx0cmV0dXJuIGNhbGwoYy5mLCBjLnRoaXNBcmcsIGMucGFyYW1zLCBoKTtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGhhbmRsZXIgPSBQcm9taXNlLl9oYW5kbGVyKGMuYXJnc1tjLmldKTtcblx0XHRcdGhhbmRsZXIuZm9sZChjYWxsQW5kUmVzb2x2ZU5leHQsIGMsIHZvaWQgMCwgaCk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gY2FsbEFuZFJlc29sdmVOZXh0KGMsIHgsIGgpIHtcblx0XHRcdGMucGFyYW1zW2MuaV0gPSB4O1xuXHRcdFx0Yy5pIC09IDE7XG5cdFx0XHRjYWxsQW5kUmVzb2x2ZShjLCBoKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiB0cnlDYXRjaFJlc29sdmUoZiwgdGhpc0FyZywgYXJncywgcmVzb2x2ZXIpIHtcblx0XHR0cnkge1xuXHRcdFx0cmVzb2x2ZXIucmVzb2x2ZShmLmFwcGx5KHRoaXNBcmcsIGFyZ3MpKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdHJlc29sdmVyLnJlamVjdChlKTtcblx0XHR9XG5cdH1cblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hlbi9saWIvYXBwbHkuanNcbi8vIG1vZHVsZSBpZCA9IDY4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24oKSB7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGZsb3coUHJvbWlzZSkge1xuXG5cdFx0dmFyIHJlc29sdmUgPSBQcm9taXNlLnJlc29sdmU7XG5cdFx0dmFyIHJlamVjdCA9IFByb21pc2UucmVqZWN0O1xuXHRcdHZhciBvcmlnQ2F0Y2ggPSBQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZSB0aGUgdWx0aW1hdGUgZnVsZmlsbG1lbnQgdmFsdWUgb3IgcmVqZWN0aW9uIHJlYXNvbiwgYW5kIGFzc3VtZVxuXHRcdCAqIHJlc3BvbnNpYmlsaXR5IGZvciBhbGwgZXJyb3JzLiAgSWYgYW4gZXJyb3IgcHJvcGFnYXRlcyBvdXQgb2YgcmVzdWx0XG5cdFx0ICogb3IgaGFuZGxlRmF0YWxFcnJvciwgaXQgd2lsbCBiZSByZXRocm93biB0byB0aGUgaG9zdCwgcmVzdWx0aW5nIGluIGFcblx0XHQgKiBsb3VkIHN0YWNrIHRyYWNrIG9uIG1vc3QgcGxhdGZvcm1zIGFuZCBhIGNyYXNoIG9uIHNvbWUuXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbj99IG9uUmVzdWx0XG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbj99IG9uRXJyb3Jcblx0XHQgKiBAcmV0dXJucyB7dW5kZWZpbmVkfVxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbihvblJlc3VsdCwgb25FcnJvcikge1xuXHRcdFx0dGhpcy5faGFuZGxlci52aXNpdCh0aGlzLl9oYW5kbGVyLnJlY2VpdmVyLCBvblJlc3VsdCwgb25FcnJvcik7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEFkZCBFcnJvci10eXBlIGFuZCBwcmVkaWNhdGUgbWF0Y2hpbmcgdG8gY2F0Y2guICBFeGFtcGxlczpcblx0XHQgKiBwcm9taXNlLmNhdGNoKFR5cGVFcnJvciwgaGFuZGxlVHlwZUVycm9yKVxuXHRcdCAqICAgLmNhdGNoKHByZWRpY2F0ZSwgaGFuZGxlTWF0Y2hlZEVycm9ycylcblx0XHQgKiAgIC5jYXRjaChoYW5kbGVSZW1haW5pbmdFcnJvcnMpXG5cdFx0ICogQHBhcmFtIG9uUmVqZWN0ZWRcblx0XHQgKiBAcmV0dXJucyB7Kn1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IFByb21pc2UucHJvdG90eXBlLm90aGVyd2lzZSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcblx0XHRcdGlmIChhcmd1bWVudHMubGVuZ3RoIDwgMikge1xuXHRcdFx0XHRyZXR1cm4gb3JpZ0NhdGNoLmNhbGwodGhpcywgb25SZWplY3RlZCk7XG5cdFx0XHR9XG5cblx0XHRcdGlmKHR5cGVvZiBvblJlamVjdGVkICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmVuc3VyZShyZWplY3RJbnZhbGlkUHJlZGljYXRlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG9yaWdDYXRjaC5jYWxsKHRoaXMsIGNyZWF0ZUNhdGNoRmlsdGVyKGFyZ3VtZW50c1sxXSwgb25SZWplY3RlZCkpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBXcmFwcyB0aGUgcHJvdmlkZWQgY2F0Y2ggaGFuZGxlciwgc28gdGhhdCBpdCB3aWxsIG9ubHkgYmUgY2FsbGVkXG5cdFx0ICogaWYgdGhlIHByZWRpY2F0ZSBldmFsdWF0ZXMgdHJ1dGh5XG5cdFx0ICogQHBhcmFtIHs/ZnVuY3Rpb259IGhhbmRsZXJcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBwcmVkaWNhdGVcblx0XHQgKiBAcmV0dXJucyB7ZnVuY3Rpb259IGNvbmRpdGlvbmFsIGNhdGNoIGhhbmRsZXJcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBjcmVhdGVDYXRjaEZpbHRlcihoYW5kbGVyLCBwcmVkaWNhdGUpIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHJldHVybiBldmFsdWF0ZVByZWRpY2F0ZShlLCBwcmVkaWNhdGUpXG5cdFx0XHRcdFx0PyBoYW5kbGVyLmNhbGwodGhpcywgZSlcblx0XHRcdFx0XHQ6IHJlamVjdChlKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogRW5zdXJlcyB0aGF0IG9uRnVsZmlsbGVkT3JSZWplY3RlZCB3aWxsIGJlIGNhbGxlZCByZWdhcmRsZXNzIG9mIHdoZXRoZXJcblx0XHQgKiB0aGlzIHByb21pc2UgaXMgZnVsZmlsbGVkIG9yIHJlamVjdGVkLiAgb25GdWxmaWxsZWRPclJlamVjdGVkIFdJTEwgTk9UXG5cdFx0ICogcmVjZWl2ZSB0aGUgcHJvbWlzZXMnIHZhbHVlIG9yIHJlYXNvbi4gIEFueSByZXR1cm5lZCB2YWx1ZSB3aWxsIGJlIGRpc3JlZ2FyZGVkLlxuXHRcdCAqIG9uRnVsZmlsbGVkT3JSZWplY3RlZCBtYXkgdGhyb3cgb3IgcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSB0byBzaWduYWxcblx0XHQgKiBhbiBhZGRpdGlvbmFsIGVycm9yLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgaGFuZGxlciB0byBiZSBjYWxsZWQgcmVnYXJkbGVzcyBvZlxuXHRcdCAqICBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZVsnZmluYWxseSddID0gUHJvbWlzZS5wcm90b3R5cGUuZW5zdXJlID0gZnVuY3Rpb24oaGFuZGxlcikge1xuXHRcdFx0aWYodHlwZW9mIGhhbmRsZXIgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0aGlzLnRoZW4oZnVuY3Rpb24oeCkge1xuXHRcdFx0XHRyZXR1cm4gcnVuU2lkZUVmZmVjdChoYW5kbGVyLCB0aGlzLCBpZGVudGl0eSwgeCk7XG5cdFx0XHR9LCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdHJldHVybiBydW5TaWRlRWZmZWN0KGhhbmRsZXIsIHRoaXMsIHJlamVjdCwgZSk7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0ZnVuY3Rpb24gcnVuU2lkZUVmZmVjdCAoaGFuZGxlciwgdGhpc0FyZywgcHJvcGFnYXRlLCB2YWx1ZSkge1xuXHRcdFx0dmFyIHJlc3VsdCA9IGhhbmRsZXIuY2FsbCh0aGlzQXJnKTtcblx0XHRcdHJldHVybiBtYXliZVRoZW5hYmxlKHJlc3VsdClcblx0XHRcdFx0PyBwcm9wYWdhdGVWYWx1ZShyZXN1bHQsIHByb3BhZ2F0ZSwgdmFsdWUpXG5cdFx0XHRcdDogcHJvcGFnYXRlKHZhbHVlKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBwcm9wYWdhdGVWYWx1ZSAocmVzdWx0LCBwcm9wYWdhdGUsIHgpIHtcblx0XHRcdHJldHVybiByZXNvbHZlKHJlc3VsdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wYWdhdGUoeCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZWNvdmVyIGZyb20gYSBmYWlsdXJlIGJ5IHJldHVybmluZyBhIGRlZmF1bHRWYWx1ZS4gIElmIGRlZmF1bHRWYWx1ZVxuXHRcdCAqIGlzIGEgcHJvbWlzZSwgaXQncyBmdWxmaWxsbWVudCB2YWx1ZSB3aWxsIGJlIHVzZWQuICBJZiBkZWZhdWx0VmFsdWUgaXNcblx0XHQgKiBhIHByb21pc2UgdGhhdCByZWplY3RzLCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIHJlamVjdCB3aXRoIHRoZVxuXHRcdCAqIHNhbWUgcmVhc29uLlxuXHRcdCAqIEBwYXJhbSB7Kn0gZGVmYXVsdFZhbHVlXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IG5ldyBwcm9taXNlXG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGVbJ2Vsc2UnXSA9IFByb21pc2UucHJvdG90eXBlLm9yRWxzZSA9IGZ1bmN0aW9uKGRlZmF1bHRWYWx1ZSkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gZGVmYXVsdFZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFNob3J0Y3V0IGZvciAudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIHZhbHVlOyB9KVxuXHRcdCAqIEBwYXJhbSAgeyp9IHZhbHVlXG5cdFx0ICogQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlIHRoYXQ6XG5cdFx0ICogIC0gaXMgZnVsZmlsbGVkIGlmIHZhbHVlIGlzIG5vdCBhIHByb21pc2UsIG9yXG5cdFx0ICogIC0gaWYgdmFsdWUgaXMgYSBwcm9taXNlLCB3aWxsIGZ1bGZpbGwgd2l0aCBpdHMgdmFsdWUsIG9yIHJlamVjdFxuXHRcdCAqICAgIHdpdGggaXRzIHJlYXNvbi5cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZVsneWllbGQnXSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aGVuKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUnVucyBhIHNpZGUgZWZmZWN0IHdoZW4gdGhpcyBwcm9taXNlIGZ1bGZpbGxzLCB3aXRob3V0IGNoYW5naW5nIHRoZVxuXHRcdCAqIGZ1bGZpbGxtZW50IHZhbHVlLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uRnVsZmlsbGVkU2lkZUVmZmVjdFxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfVxuXHRcdCAqL1xuXHRcdFByb21pc2UucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkU2lkZUVmZmVjdCkge1xuXHRcdFx0cmV0dXJuIHRoaXMudGhlbihvbkZ1bGZpbGxlZFNpZGVFZmZlY3QpWyd5aWVsZCddKHRoaXMpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblx0fTtcblxuXHRmdW5jdGlvbiByZWplY3RJbnZhbGlkUHJlZGljYXRlKCkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhdGNoIHByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGV2YWx1YXRlUHJlZGljYXRlKGUsIHByZWRpY2F0ZSkge1xuXHRcdHJldHVybiBpc0Vycm9yKHByZWRpY2F0ZSkgPyBlIGluc3RhbmNlb2YgcHJlZGljYXRlIDogcHJlZGljYXRlKGUpO1xuXHR9XG5cblx0ZnVuY3Rpb24gaXNFcnJvcihwcmVkaWNhdGUpIHtcblx0XHRyZXR1cm4gcHJlZGljYXRlID09PSBFcnJvclxuXHRcdFx0fHwgKHByZWRpY2F0ZSAhPSBudWxsICYmIHByZWRpY2F0ZS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvcik7XG5cdH1cblxuXHRmdW5jdGlvbiBtYXliZVRoZW5hYmxlKHgpIHtcblx0XHRyZXR1cm4gKHR5cGVvZiB4ID09PSAnb2JqZWN0JyB8fCB0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJykgJiYgeCAhPT0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIGlkZW50aXR5KHgpIHtcblx0XHRyZXR1cm4geDtcblx0fVxuXG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doZW4vbGliL2RlY29yYXRvcnMvZmxvdy5qc1xuLy8gbW9kdWxlIGlkID0gNjg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuLyoqIEBhdXRob3IgSmVmZiBFc2NhbGFudGUgKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24oKSB7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIGZvbGQoUHJvbWlzZSkge1xuXG5cdFx0UHJvbWlzZS5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uKGYsIHopIHtcblx0XHRcdHZhciBwcm9taXNlID0gdGhpcy5fYmVnZXQoKTtcblxuXHRcdFx0dGhpcy5faGFuZGxlci5mb2xkKGZ1bmN0aW9uKHosIHgsIHRvKSB7XG5cdFx0XHRcdFByb21pc2UuX2hhbmRsZXIoeikuZm9sZChmdW5jdGlvbih4LCB6LCB0bykge1xuXHRcdFx0XHRcdHRvLnJlc29sdmUoZi5jYWxsKHRoaXMsIHosIHgpKTtcblx0XHRcdFx0fSwgeCwgdGhpcywgdG8pO1xuXHRcdFx0fSwgeiwgcHJvbWlzZS5faGFuZGxlci5yZWNlaXZlciwgcHJvbWlzZS5faGFuZGxlcik7XG5cblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblx0fTtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL2ZvbGQuanNcbi8vIG1vZHVsZSBpZCA9IDY4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkge1xuXG5cdHZhciBpbnNwZWN0ID0gcmVxdWlyZSgnLi4vc3RhdGUnKS5pbnNwZWN0O1xuXG5cdHJldHVybiBmdW5jdGlvbiBpbnNwZWN0aW9uKFByb21pc2UpIHtcblxuXHRcdFByb21pc2UucHJvdG90eXBlLmluc3BlY3QgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBpbnNwZWN0KFByb21pc2UuX2hhbmRsZXIodGhpcykpO1xuXHRcdH07XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblx0fTtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUpOyB9KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hlbi9saWIvZGVjb3JhdG9ycy9pbnNwZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSA2ODZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiBmdW5jdGlvbiBnZW5lcmF0ZShQcm9taXNlKSB7XG5cblx0XHR2YXIgcmVzb2x2ZSA9IFByb21pc2UucmVzb2x2ZTtcblxuXHRcdFByb21pc2UuaXRlcmF0ZSA9IGl0ZXJhdGU7XG5cdFx0UHJvbWlzZS51bmZvbGQgPSB1bmZvbGQ7XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblxuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkIFVzZSBnaXRodWIuY29tL2N1am9qcy9tb3N0IHN0cmVhbXMgYW5kIG1vc3QuaXRlcmF0ZVxuXHRcdCAqIEdlbmVyYXRlIGEgKHBvdGVudGlhbGx5IGluZmluaXRlKSBzdHJlYW0gb2YgcHJvbWlzZWQgdmFsdWVzOlxuXHRcdCAqIHgsIGYoeCksIGYoZih4KSksIGV0Yy4gdW50aWwgY29uZGl0aW9uKHgpIHJldHVybnMgdHJ1ZVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGYgZnVuY3Rpb24gdG8gZ2VuZXJhdGUgYSBuZXcgeCBmcm9tIHRoZSBwcmV2aW91cyB4XG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gY29uZGl0aW9uIGZ1bmN0aW9uIHRoYXQsIGdpdmVuIHRoZSBjdXJyZW50IHgsIHJldHVybnNcblx0XHQgKiAgdHJ1dGh5IHdoZW4gdGhlIGl0ZXJhdGUgc2hvdWxkIHN0b3Bcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBoYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB0aGUgdmFsdWUgcHJvZHVjZWQgYnkgZlxuXHRcdCAqIEBwYXJhbSB7KnxQcm9taXNlfSB4IHN0YXJ0aW5nIHZhbHVlLCBtYXkgYmUgYSBwcm9taXNlXG5cdFx0ICogQHJldHVybiB7UHJvbWlzZX0gdGhlIHJlc3VsdCBvZiB0aGUgbGFzdCBjYWxsIHRvIGYgYmVmb3JlXG5cdFx0ICogIGNvbmRpdGlvbiByZXR1cm5zIHRydWVcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBpdGVyYXRlKGYsIGNvbmRpdGlvbiwgaGFuZGxlciwgeCkge1xuXHRcdFx0cmV0dXJuIHVuZm9sZChmdW5jdGlvbih4KSB7XG5cdFx0XHRcdHJldHVybiBbeCwgZih4KV07XG5cdFx0XHR9LCBjb25kaXRpb24sIGhhbmRsZXIsIHgpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkIFVzZSBnaXRodWIuY29tL2N1am9qcy9tb3N0IHN0cmVhbXMgYW5kIG1vc3QudW5mb2xkXG5cdFx0ICogR2VuZXJhdGUgYSAocG90ZW50aWFsbHkgaW5maW5pdGUpIHN0cmVhbSBvZiBwcm9taXNlZCB2YWx1ZXNcblx0XHQgKiBieSBhcHBseWluZyBoYW5kbGVyKGdlbmVyYXRvcihzZWVkKSkgaXRlcmF0aXZlbHkgdW50aWxcblx0XHQgKiBjb25kaXRpb24oc2VlZCkgcmV0dXJucyB0cnVlLlxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHVuc3Bvb2wgZnVuY3Rpb24gdGhhdCBnZW5lcmF0ZXMgYSBbdmFsdWUsIG5ld1NlZWRdXG5cdFx0ICogIGdpdmVuIGEgc2VlZC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjb25kaXRpb24gZnVuY3Rpb24gdGhhdCwgZ2l2ZW4gdGhlIGN1cnJlbnQgc2VlZCwgcmV0dXJuc1xuXHRcdCAqICB0cnV0aHkgd2hlbiB0aGUgdW5mb2xkIHNob3VsZCBzdG9wXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbn0gaGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgdGhlIHZhbHVlIHByb2R1Y2VkIGJ5IHVuc3Bvb2xcblx0XHQgKiBAcGFyYW0geCB7KnxQcm9taXNlfSBzdGFydGluZyB2YWx1ZSwgbWF5IGJlIGEgcHJvbWlzZVxuXHRcdCAqIEByZXR1cm4ge1Byb21pc2V9IHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgdmFsdWUgcHJvZHVjZWQgYnkgdW5zcG9vbCBiZWZvcmVcblx0XHQgKiAgY29uZGl0aW9uIHJldHVybnMgdHJ1ZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHVuZm9sZCh1bnNwb29sLCBjb25kaXRpb24sIGhhbmRsZXIsIHgpIHtcblx0XHRcdHJldHVybiByZXNvbHZlKHgpLnRoZW4oZnVuY3Rpb24oc2VlZCkge1xuXHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShjb25kaXRpb24oc2VlZCkpLnRoZW4oZnVuY3Rpb24oZG9uZSkge1xuXHRcdFx0XHRcdHJldHVybiBkb25lID8gc2VlZCA6IHJlc29sdmUodW5zcG9vbChzZWVkKSkuc3ByZWFkKG5leHQpO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXG5cdFx0XHRmdW5jdGlvbiBuZXh0KGl0ZW0sIG5ld1NlZWQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc29sdmUoaGFuZGxlcihpdGVtKSkudGhlbihmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdW5mb2xkKHVuc3Bvb2wsIGNvbmRpdGlvbiwgaGFuZGxlciwgbmV3U2VlZCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL2l0ZXJhdGUuanNcbi8vIG1vZHVsZSBpZCA9IDY4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24oKSB7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHByb2dyZXNzKFByb21pc2UpIHtcblxuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkXG5cdFx0ICogUmVnaXN0ZXIgYSBwcm9ncmVzcyBoYW5kbGVyIGZvciB0aGlzIHByb21pc2Vcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvblByb2dyZXNzXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9XG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGUucHJvZ3Jlc3MgPSBmdW5jdGlvbihvblByb2dyZXNzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy50aGVuKHZvaWQgMCwgdm9pZCAwLCBvblByb2dyZXNzKTtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cdH07XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9KSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hlbi9saWIvZGVjb3JhdG9ycy9wcm9ncmVzcy5qc1xuLy8gbW9kdWxlIGlkID0gNjg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbigpIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gYWRkV2l0aChQcm9taXNlKSB7XG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyBhIHByb21pc2Ugd2hvc2UgaGFuZGxlcnMgd2lsbCBiZSBjYWxsZWQgd2l0aCBgdGhpc2Agc2V0IHRvXG5cdFx0ICogdGhlIHN1cHBsaWVkIHJlY2VpdmVyLiAgU3Vic2VxdWVudCBwcm9taXNlcyBkZXJpdmVkIGZyb20gdGhlXG5cdFx0ICogcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGFsc28gaGF2ZSB0aGVpciBoYW5kbGVycyBjYWxsZWQgd2l0aCByZWNlaXZlclxuXHRcdCAqIGFzIGB0aGlzYC4gQ2FsbGluZyBgd2l0aGAgd2l0aCB1bmRlZmluZWQgb3Igbm8gYXJndW1lbnRzIHdpbGwgcmV0dXJuXG5cdFx0ICogYSBwcm9taXNlIHdob3NlIGhhbmRsZXJzIHdpbGwgYWdhaW4gYmUgY2FsbGVkIGluIHRoZSB1c3VhbCBQcm9taXNlcy9BK1xuXHRcdCAqIHdheSAobm8gYHRoaXNgKSB0aHVzIHNhZmVseSB1bmRvaW5nIGFueSBwcmV2aW91cyBgd2l0aGAgaW4gdGhlXG5cdFx0ICogcHJvbWlzZSBjaGFpbi5cblx0XHQgKlxuXHRcdCAqIFdBUk5JTkc6IFByb21pc2VzIHJldHVybmVkIGZyb20gYHdpdGhgL2B3aXRoVGhpc2AgYXJlIE5PVCBQcm9taXNlcy9BK1xuXHRcdCAqIGNvbXBsaWFudCwgc3BlY2lmaWNhbGx5IHZpb2xhdGluZyAyLjIuNSAoaHR0cDovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC00MSlcblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSByZWNlaXZlciBgdGhpc2AgdmFsdWUgZm9yIGFsbCBoYW5kbGVycyBhdHRhY2hlZCB0b1xuXHRcdCAqICB0aGUgcmV0dXJuZWQgcHJvbWlzZS5cblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZVsnd2l0aCddID0gUHJvbWlzZS5wcm90b3R5cGUud2l0aFRoaXMgPSBmdW5jdGlvbihyZWNlaXZlcikge1xuXHRcdFx0dmFyIHAgPSB0aGlzLl9iZWdldCgpO1xuXHRcdFx0dmFyIGNoaWxkID0gcC5faGFuZGxlcjtcblx0XHRcdGNoaWxkLnJlY2VpdmVyID0gcmVjZWl2ZXI7XG5cdFx0XHR0aGlzLl9oYW5kbGVyLmNoYWluKGNoaWxkLCByZWNlaXZlcik7XG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cdH07XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpOyB9KSk7XG5cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGVuL2xpYi9kZWNvcmF0b3JzL3dpdGguanNcbi8vIG1vZHVsZSBpZCA9IDY4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24ocmVxdWlyZSkge1xuXG5cdHZhciBzZXRUaW1lciA9IHJlcXVpcmUoJy4uL2VudicpLnNldFRpbWVyO1xuXHR2YXIgZm9ybWF0ID0gcmVxdWlyZSgnLi4vZm9ybWF0Jyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVuaGFuZGxlZFJlamVjdGlvbihQcm9taXNlKSB7XG5cblx0XHR2YXIgbG9nRXJyb3IgPSBub29wO1xuXHRcdHZhciBsb2dJbmZvID0gbm9vcDtcblx0XHR2YXIgbG9jYWxDb25zb2xlO1xuXG5cdFx0aWYodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0XHQvLyBBbGlhcyBjb25zb2xlIHRvIHByZXZlbnQgdGhpbmdzIGxpa2UgdWdsaWZ5J3MgZHJvcF9jb25zb2xlIG9wdGlvbiBmcm9tXG5cdFx0XHQvLyByZW1vdmluZyBjb25zb2xlLmxvZy9lcnJvci4gVW5oYW5kbGVkIHJlamVjdGlvbnMgZmFsbCBpbnRvIHRoZSBzYW1lXG5cdFx0XHQvLyBjYXRlZ29yeSBhcyB1bmNhdWdodCBleGNlcHRpb25zLCBhbmQgYnVpbGQgdG9vbHMgc2hvdWxkbid0IHNpbGVuY2UgdGhlbS5cblx0XHRcdGxvY2FsQ29uc29sZSA9IGNvbnNvbGU7XG5cdFx0XHRsb2dFcnJvciA9IHR5cGVvZiBsb2NhbENvbnNvbGUuZXJyb3IgIT09ICd1bmRlZmluZWQnXG5cdFx0XHRcdD8gZnVuY3Rpb24gKGUpIHsgbG9jYWxDb25zb2xlLmVycm9yKGUpOyB9XG5cdFx0XHRcdDogZnVuY3Rpb24gKGUpIHsgbG9jYWxDb25zb2xlLmxvZyhlKTsgfTtcblxuXHRcdFx0bG9nSW5mbyA9IHR5cGVvZiBsb2NhbENvbnNvbGUuaW5mbyAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdFx0PyBmdW5jdGlvbiAoZSkgeyBsb2NhbENvbnNvbGUuaW5mbyhlKTsgfVxuXHRcdFx0XHQ6IGZ1bmN0aW9uIChlKSB7IGxvY2FsQ29uc29sZS5sb2coZSk7IH07XG5cdFx0fVxuXG5cdFx0UHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uID0gZnVuY3Rpb24ocmVqZWN0aW9uKSB7XG5cdFx0XHRlbnF1ZXVlKHJlcG9ydCwgcmVqZWN0aW9uKTtcblx0XHR9O1xuXG5cdFx0UHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZCA9IGZ1bmN0aW9uKHJlamVjdGlvbikge1xuXHRcdFx0ZW5xdWV1ZSh1bnJlcG9ydCwgcmVqZWN0aW9uKTtcblx0XHR9O1xuXG5cdFx0UHJvbWlzZS5vbkZhdGFsUmVqZWN0aW9uID0gZnVuY3Rpb24ocmVqZWN0aW9uKSB7XG5cdFx0XHRlbnF1ZXVlKHRocm93aXQsIHJlamVjdGlvbi52YWx1ZSk7XG5cdFx0fTtcblxuXHRcdHZhciB0YXNrcyA9IFtdO1xuXHRcdHZhciByZXBvcnRlZCA9IFtdO1xuXHRcdHZhciBydW5uaW5nID0gbnVsbDtcblxuXHRcdGZ1bmN0aW9uIHJlcG9ydChyKSB7XG5cdFx0XHRpZighci5oYW5kbGVkKSB7XG5cdFx0XHRcdHJlcG9ydGVkLnB1c2gocik7XG5cdFx0XHRcdGxvZ0Vycm9yKCdQb3RlbnRpYWxseSB1bmhhbmRsZWQgcmVqZWN0aW9uIFsnICsgci5pZCArICddICcgKyBmb3JtYXQuZm9ybWF0RXJyb3Ioci52YWx1ZSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHVucmVwb3J0KHIpIHtcblx0XHRcdHZhciBpID0gcmVwb3J0ZWQuaW5kZXhPZihyKTtcblx0XHRcdGlmKGkgPj0gMCkge1xuXHRcdFx0XHRyZXBvcnRlZC5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGxvZ0luZm8oJ0hhbmRsZWQgcHJldmlvdXMgcmVqZWN0aW9uIFsnICsgci5pZCArICddICcgKyBmb3JtYXQuZm9ybWF0T2JqZWN0KHIudmFsdWUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmdW5jdGlvbiBlbnF1ZXVlKGYsIHgpIHtcblx0XHRcdHRhc2tzLnB1c2goZiwgeCk7XG5cdFx0XHRpZihydW5uaW5nID09PSBudWxsKSB7XG5cdFx0XHRcdHJ1bm5pbmcgPSBzZXRUaW1lcihmbHVzaCwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZmx1c2goKSB7XG5cdFx0XHRydW5uaW5nID0gbnVsbDtcblx0XHRcdHdoaWxlKHRhc2tzLmxlbmd0aCA+IDApIHtcblx0XHRcdFx0dGFza3Muc2hpZnQoKSh0YXNrcy5zaGlmdCgpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gUHJvbWlzZTtcblx0fTtcblxuXHRmdW5jdGlvbiB0aHJvd2l0KGUpIHtcblx0XHR0aHJvdyBlO1xuXHR9XG5cblx0ZnVuY3Rpb24gbm9vcCgpIHt9XG5cbn0pO1xufSh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUgOiBmdW5jdGlvbihmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKTsgfSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doZW4vbGliL2RlY29yYXRvcnMvdW5oYW5kbGVkUmVqZWN0aW9uLmpzXG4vLyBtb2R1bGUgaWQgPSA2OTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdHJldHVybiB7XG5cdFx0Zm9ybWF0RXJyb3I6IGZvcm1hdEVycm9yLFxuXHRcdGZvcm1hdE9iamVjdDogZm9ybWF0T2JqZWN0LFxuXHRcdHRyeVN0cmluZ2lmeTogdHJ5U3RyaW5naWZ5XG5cdH07XG5cblx0LyoqXG5cdCAqIEZvcm1hdCBhbiBlcnJvciBpbnRvIGEgc3RyaW5nLiAgSWYgZSBpcyBhbiBFcnJvciBhbmQgaGFzIGEgc3RhY2sgcHJvcGVydHksXG5cdCAqIGl0J3MgcmV0dXJuZWQuICBPdGhlcndpc2UsIGUgaXMgZm9ybWF0dGVkIHVzaW5nIGZvcm1hdE9iamVjdCwgd2l0aCBhXG5cdCAqIHdhcm5pbmcgYWRkZWQgYWJvdXQgZSBub3QgYmVpbmcgYSBwcm9wZXIgRXJyb3IuXG5cdCAqIEBwYXJhbSB7Kn0gZVxuXHQgKiBAcmV0dXJucyB7U3RyaW5nfSBmb3JtYXR0ZWQgc3RyaW5nLCBzdWl0YWJsZSBmb3Igb3V0cHV0IHRvIGRldmVsb3BlcnNcblx0ICovXG5cdGZ1bmN0aW9uIGZvcm1hdEVycm9yKGUpIHtcblx0XHR2YXIgcyA9IHR5cGVvZiBlID09PSAnb2JqZWN0JyAmJiBlICE9PSBudWxsICYmIChlLnN0YWNrIHx8IGUubWVzc2FnZSkgPyBlLnN0YWNrIHx8IGUubWVzc2FnZSA6IGZvcm1hdE9iamVjdChlKTtcblx0XHRyZXR1cm4gZSBpbnN0YW5jZW9mIEVycm9yID8gcyA6IHMgKyAnIChXQVJOSU5HOiBub24tRXJyb3IgdXNlZCknO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZvcm1hdCBhbiBvYmplY3QsIGRldGVjdGluZyBcInBsYWluXCIgb2JqZWN0cyBhbmQgcnVubmluZyB0aGVtIHRocm91Z2hcblx0ICogSlNPTi5zdHJpbmdpZnkgaWYgcG9zc2libGUuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBvXG5cdCAqIEByZXR1cm5zIHtzdHJpbmd9XG5cdCAqL1xuXHRmdW5jdGlvbiBmb3JtYXRPYmplY3Qobykge1xuXHRcdHZhciBzID0gU3RyaW5nKG8pO1xuXHRcdGlmKHMgPT09ICdbb2JqZWN0IE9iamVjdF0nICYmIHR5cGVvZiBKU09OICE9PSAndW5kZWZpbmVkJykge1xuXHRcdFx0cyA9IHRyeVN0cmluZ2lmeShvLCBzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHM7XG5cdH1cblxuXHQvKipcblx0ICogVHJ5IHRvIHJldHVybiB0aGUgcmVzdWx0IG9mIEpTT04uc3RyaW5naWZ5KHgpLiAgSWYgdGhhdCBmYWlscywgcmV0dXJuXG5cdCAqIGRlZmF1bHRWYWx1ZVxuXHQgKiBAcGFyYW0geyp9IHhcblx0ICogQHBhcmFtIHsqfSBkZWZhdWx0VmFsdWVcblx0ICogQHJldHVybnMge1N0cmluZ3wqfSBKU09OLnN0cmluZ2lmeSh4KSBvciBkZWZhdWx0VmFsdWVcblx0ICovXG5cdGZ1bmN0aW9uIHRyeVN0cmluZ2lmeSh4LCBkZWZhdWx0VmFsdWUpIHtcblx0XHR0cnkge1xuXHRcdFx0cmV0dXJuIEpTT04uc3RyaW5naWZ5KHgpO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0cmV0dXJuIGRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdH1cblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGVuL2xpYi9mb3JtYXQuanNcbi8vIG1vZHVsZSBpZCA9IDY5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiogQGxpY2Vuc2UgTUlUIExpY2Vuc2UgKGMpIGNvcHlyaWdodCAyMDEwLTIwMTQgb3JpZ2luYWwgYXV0aG9yIG9yIGF1dGhvcnMgKi9cbi8qKiBAYXV0aG9yIEJyaWFuIENhdmFsaWVyICovXG4vKiogQGF1dGhvciBKb2huIEhhbm4gKi9cblxuKGZ1bmN0aW9uKGRlZmluZSkgeyAndXNlIHN0cmljdCc7XG5kZWZpbmUoZnVuY3Rpb24gKHJlcXVpcmUpIHtcblxuXHR2YXIgbWFrZVByb21pc2UgPSByZXF1aXJlKCcuL21ha2VQcm9taXNlJyk7XG5cdHZhciBTY2hlZHVsZXIgPSByZXF1aXJlKCcuL1NjaGVkdWxlcicpO1xuXHR2YXIgYXN5bmMgPSByZXF1aXJlKCcuL2VudicpLmFzYXA7XG5cblx0cmV0dXJuIG1ha2VQcm9taXNlKHtcblx0XHRzY2hlZHVsZXI6IG5ldyBTY2hlZHVsZXIoYXN5bmMpXG5cdH0pO1xuXG59KTtcbn0pKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uIChmYWN0b3J5KSB7IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKTsgfSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2hlbi9saWIvUHJvbWlzZS5qc1xuLy8gbW9kdWxlIGlkID0gNjkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qKiBAbGljZW5zZSBNSVQgTGljZW5zZSAoYykgY29weXJpZ2h0IDIwMTAtMjAxNCBvcmlnaW5hbCBhdXRob3Igb3IgYXV0aG9ycyAqL1xuLyoqIEBhdXRob3IgQnJpYW4gQ2F2YWxpZXIgKi9cbi8qKiBAYXV0aG9yIEpvaG4gSGFubiAqL1xuXG4oZnVuY3Rpb24oZGVmaW5lKSB7ICd1c2Ugc3RyaWN0JztcbmRlZmluZShmdW5jdGlvbigpIHtcblxuXHRyZXR1cm4gZnVuY3Rpb24gbWFrZVByb21pc2UoZW52aXJvbm1lbnQpIHtcblxuXHRcdHZhciB0YXNrcyA9IGVudmlyb25tZW50LnNjaGVkdWxlcjtcblx0XHR2YXIgZW1pdFJlamVjdGlvbiA9IGluaXRFbWl0UmVqZWN0aW9uKCk7XG5cblx0XHR2YXIgb2JqZWN0Q3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fFxuXHRcdFx0ZnVuY3Rpb24ocHJvdG8pIHtcblx0XHRcdFx0ZnVuY3Rpb24gQ2hpbGQoKSB7fVxuXHRcdFx0XHRDaGlsZC5wcm90b3R5cGUgPSBwcm90bztcblx0XHRcdFx0cmV0dXJuIG5ldyBDaGlsZCgpO1xuXHRcdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZSBhIHByb21pc2Ugd2hvc2UgZmF0ZSBpcyBkZXRlcm1pbmVkIGJ5IHJlc29sdmVyXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IHByb21pc2Vcblx0XHQgKiBAbmFtZSBQcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlciwgaGFuZGxlcikge1xuXHRcdFx0dGhpcy5faGFuZGxlciA9IHJlc29sdmVyID09PSBIYW5kbGVyID8gaGFuZGxlciA6IGluaXQocmVzb2x2ZXIpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIFJ1biB0aGUgc3VwcGxpZWQgcmVzb2x2ZXJcblx0XHQgKiBAcGFyYW0gcmVzb2x2ZXJcblx0XHQgKiBAcmV0dXJucyB7UGVuZGluZ31cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBpbml0KHJlc29sdmVyKSB7XG5cdFx0XHR2YXIgaGFuZGxlciA9IG5ldyBQZW5kaW5nKCk7XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHJlc29sdmVyKHByb21pc2VSZXNvbHZlLCBwcm9taXNlUmVqZWN0LCBwcm9taXNlTm90aWZ5KTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0cHJvbWlzZVJlamVjdChlKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGhhbmRsZXI7XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogVHJhbnNpdGlvbiBmcm9tIHByZS1yZXNvbHV0aW9uIHN0YXRlIHRvIHBvc3QtcmVzb2x1dGlvbiBzdGF0ZSwgbm90aWZ5aW5nXG5cdFx0XHQgKiBhbGwgbGlzdGVuZXJzIG9mIHRoZSB1bHRpbWF0ZSBmdWxmaWxsbWVudCBvciByZWplY3Rpb25cblx0XHRcdCAqIEBwYXJhbSB7Kn0geCByZXNvbHV0aW9uIHZhbHVlXG5cdFx0XHQgKi9cblx0XHRcdGZ1bmN0aW9uIHByb21pc2VSZXNvbHZlICh4KSB7XG5cdFx0XHRcdGhhbmRsZXIucmVzb2x2ZSh4KTtcblx0XHRcdH1cblx0XHRcdC8qKlxuXHRcdFx0ICogUmVqZWN0IHRoaXMgcHJvbWlzZSB3aXRoIHJlYXNvbiwgd2hpY2ggd2lsbCBiZSB1c2VkIHZlcmJhdGltXG5cdFx0XHQgKiBAcGFyYW0ge0Vycm9yfCp9IHJlYXNvbiByZWplY3Rpb24gcmVhc29uLCBzdHJvbmdseSBzdWdnZXN0ZWRcblx0XHRcdCAqICAgdG8gYmUgYW4gRXJyb3IgdHlwZVxuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBwcm9taXNlUmVqZWN0IChyZWFzb24pIHtcblx0XHRcdFx0aGFuZGxlci5yZWplY3QocmVhc29uKTtcblx0XHRcdH1cblxuXHRcdFx0LyoqXG5cdFx0XHQgKiBAZGVwcmVjYXRlZFxuXHRcdFx0ICogSXNzdWUgYSBwcm9ncmVzcyBldmVudCwgbm90aWZ5aW5nIGFsbCBwcm9ncmVzcyBsaXN0ZW5lcnNcblx0XHRcdCAqIEBwYXJhbSB7Kn0geCBwcm9ncmVzcyBldmVudCBwYXlsb2FkIHRvIHBhc3MgdG8gYWxsIGxpc3RlbmVyc1xuXHRcdFx0ICovXG5cdFx0XHRmdW5jdGlvbiBwcm9taXNlTm90aWZ5ICh4KSB7XG5cdFx0XHRcdGhhbmRsZXIubm90aWZ5KHgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENyZWF0aW9uXG5cblx0XHRQcm9taXNlLnJlc29sdmUgPSByZXNvbHZlO1xuXHRcdFByb21pc2UucmVqZWN0ID0gcmVqZWN0O1xuXHRcdFByb21pc2UubmV2ZXIgPSBuZXZlcjtcblxuXHRcdFByb21pc2UuX2RlZmVyID0gZGVmZXI7XG5cdFx0UHJvbWlzZS5faGFuZGxlciA9IGdldEhhbmRsZXI7XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIGEgdHJ1c3RlZCBwcm9taXNlLiBJZiB4IGlzIGFscmVhZHkgYSB0cnVzdGVkIHByb21pc2UsIGl0IGlzXG5cdFx0ICogcmV0dXJuZWQsIG90aGVyd2lzZSByZXR1cm5zIGEgbmV3IHRydXN0ZWQgUHJvbWlzZSB3aGljaCBmb2xsb3dzIHguXG5cdFx0ICogQHBhcmFtICB7Kn0geFxuXHRcdCAqIEByZXR1cm4ge1Byb21pc2V9IHByb21pc2Vcblx0XHQgKi9cblx0XHRmdW5jdGlvbiByZXNvbHZlKHgpIHtcblx0XHRcdHJldHVybiBpc1Byb21pc2UoeCkgPyB4XG5cdFx0XHRcdDogbmV3IFByb21pc2UoSGFuZGxlciwgbmV3IEFzeW5jKGdldEhhbmRsZXIoeCkpKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm4gYSByZWplY3QgcHJvbWlzZSB3aXRoIHggYXMgaXRzIHJlYXNvbiAoeCBpcyB1c2VkIHZlcmJhdGltKVxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqIEByZXR1cm5zIHtQcm9taXNlfSByZWplY3RlZCBwcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gcmVqZWN0KHgpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCBuZXcgQXN5bmMobmV3IFJlamVjdGVkKHgpKSk7XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHJlbWFpbnMgcGVuZGluZyBmb3JldmVyXG5cdFx0ICogQHJldHVybnMge1Byb21pc2V9IGZvcmV2ZXItcGVuZGluZyBwcm9taXNlLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG5ldmVyKCkge1xuXHRcdFx0cmV0dXJuIGZvcmV2ZXJQZW5kaW5nUHJvbWlzZTsgLy8gU2hvdWxkIGJlIGZyb3plblxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIENyZWF0ZXMgYW4gaW50ZXJuYWwge3Byb21pc2UsIHJlc29sdmVyfSBwYWlyXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRmdW5jdGlvbiBkZWZlcigpIHtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCBuZXcgUGVuZGluZygpKTtcblx0XHR9XG5cblx0XHQvLyBUcmFuc2Zvcm1hdGlvbiBhbmQgZmxvdyBjb250cm9sXG5cblx0XHQvKipcblx0XHQgKiBUcmFuc2Zvcm0gdGhpcyBwcm9taXNlJ3MgZnVsZmlsbG1lbnQgdmFsdWUsIHJldHVybmluZyBhIG5ldyBQcm9taXNlXG5cdFx0ICogZm9yIHRoZSB0cmFuc2Zvcm1lZCByZXN1bHQuICBJZiB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLCBvblJlamVjdGVkXG5cdFx0ICogaXMgY2FsbGVkIHdpdGggdGhlIHJlYXNvbi4gIG9uUHJvZ3Jlc3MgKm1heSogYmUgY2FsbGVkIHdpdGggdXBkYXRlcyB0b3dhcmRcblx0XHQgKiB0aGlzIHByb21pc2UncyBmdWxmaWxsbWVudC5cblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9uPX0gb25GdWxmaWxsZWQgZnVsZmlsbG1lbnQgaGFuZGxlclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb249fSBvblJlamVjdGVkIHJlamVjdGlvbiBoYW5kbGVyXG5cdFx0ICogQHBhcmFtIHtmdW5jdGlvbj19IG9uUHJvZ3Jlc3MgQGRlcHJlY2F0ZWQgcHJvZ3Jlc3MgaGFuZGxlclxuXHRcdCAqIEByZXR1cm4ge1Byb21pc2V9IG5ldyBwcm9taXNlXG5cdFx0ICovXG5cdFx0UHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzKSB7XG5cdFx0XHR2YXIgcGFyZW50ID0gdGhpcy5faGFuZGxlcjtcblx0XHRcdHZhciBzdGF0ZSA9IHBhcmVudC5qb2luKCkuc3RhdGUoKTtcblxuXHRcdFx0aWYgKCh0eXBlb2Ygb25GdWxmaWxsZWQgIT09ICdmdW5jdGlvbicgJiYgc3RhdGUgPiAwKSB8fFxuXHRcdFx0XHQodHlwZW9mIG9uUmVqZWN0ZWQgIT09ICdmdW5jdGlvbicgJiYgc3RhdGUgPCAwKSkge1xuXHRcdFx0XHQvLyBTaG9ydCBjaXJjdWl0OiB2YWx1ZSB3aWxsIG5vdCBjaGFuZ2UsIHNpbXBseSBzaGFyZSBoYW5kbGVyXG5cdFx0XHRcdHJldHVybiBuZXcgdGhpcy5jb25zdHJ1Y3RvcihIYW5kbGVyLCBwYXJlbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgcCA9IHRoaXMuX2JlZ2V0KCk7XG5cdFx0XHR2YXIgY2hpbGQgPSBwLl9oYW5kbGVyO1xuXG5cdFx0XHRwYXJlbnQuY2hhaW4oY2hpbGQsIHBhcmVudC5yZWNlaXZlciwgb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MpO1xuXG5cdFx0XHRyZXR1cm4gcDtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogSWYgdGhpcyBwcm9taXNlIGNhbm5vdCBiZSBmdWxmaWxsZWQgZHVlIHRvIGFuIGVycm9yLCBjYWxsIG9uUmVqZWN0ZWQgdG9cblx0XHQgKiBoYW5kbGUgdGhlIGVycm9yLiBTaG9ydGN1dCBmb3IgLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKVxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb24/fSBvblJlamVjdGVkXG5cdFx0ICogQHJldHVybiB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnRoZW4odm9pZCAwLCBvblJlamVjdGVkKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyBhIG5ldywgcGVuZGluZyBwcm9taXNlIG9mIHRoZSBzYW1lIHR5cGUgYXMgdGhpcyBwcm9taXNlXG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX1cblx0XHQgKi9cblx0XHRQcm9taXNlLnByb3RvdHlwZS5fYmVnZXQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBiZWdldEZyb20odGhpcy5faGFuZGxlciwgdGhpcy5jb25zdHJ1Y3Rvcik7XG5cdFx0fTtcblxuXHRcdGZ1bmN0aW9uIGJlZ2V0RnJvbShwYXJlbnQsIFByb21pc2UpIHtcblx0XHRcdHZhciBjaGlsZCA9IG5ldyBQZW5kaW5nKHBhcmVudC5yZWNlaXZlciwgcGFyZW50LmpvaW4oKS5jb250ZXh0KTtcblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCBjaGlsZCk7XG5cdFx0fVxuXG5cdFx0Ly8gQXJyYXkgY29tYmluYXRvcnNcblxuXHRcdFByb21pc2UuYWxsID0gYWxsO1xuXHRcdFByb21pc2UucmFjZSA9IHJhY2U7XG5cdFx0UHJvbWlzZS5fdHJhdmVyc2UgPSB0cmF2ZXJzZTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybiBhIHByb21pc2UgdGhhdCB3aWxsIGZ1bGZpbGwgd2hlbiBhbGwgcHJvbWlzZXMgaW4gdGhlXG5cdFx0ICogaW5wdXQgYXJyYXkgaGF2ZSBmdWxmaWxsZWQsIG9yIHdpbGwgcmVqZWN0IHdoZW4gb25lIG9mIHRoZVxuXHRcdCAqIHByb21pc2VzIHJlamVjdHMuXG5cdFx0ICogQHBhcmFtIHthcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXNcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgYXJyYXkgb2YgZnVsZmlsbG1lbnQgdmFsdWVzXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gYWxsKHByb21pc2VzKSB7XG5cdFx0XHRyZXR1cm4gdHJhdmVyc2VXaXRoKHNuZCwgbnVsbCwgcHJvbWlzZXMpO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEFycmF5PFByb21pc2U8WD4+IC0+IFByb21pc2U8QXJyYXk8ZihYKT4+XG5cdFx0ICogQHByaXZhdGVcblx0XHQgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmIGZ1bmN0aW9uIHRvIGFwcGx5IHRvIGVhY2ggcHJvbWlzZSdzIHZhbHVlXG5cdFx0ICogQHBhcmFtIHtBcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXNcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gcHJvbWlzZSBmb3IgdHJhbnNmb3JtZWQgdmFsdWVzXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gdHJhdmVyc2UoZiwgcHJvbWlzZXMpIHtcblx0XHRcdHJldHVybiB0cmF2ZXJzZVdpdGgodHJ5Q2F0Y2gyLCBmLCBwcm9taXNlcyk7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJhdmVyc2VXaXRoKHRyeU1hcCwgZiwgcHJvbWlzZXMpIHtcblx0XHRcdHZhciBoYW5kbGVyID0gdHlwZW9mIGYgPT09ICdmdW5jdGlvbicgPyBtYXBBdCA6IHNldHRsZUF0O1xuXG5cdFx0XHR2YXIgcmVzb2x2ZXIgPSBuZXcgUGVuZGluZygpO1xuXHRcdFx0dmFyIHBlbmRpbmcgPSBwcm9taXNlcy5sZW5ndGggPj4+IDA7XG5cdFx0XHR2YXIgcmVzdWx0cyA9IG5ldyBBcnJheShwZW5kaW5nKTtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDAsIHg7IGkgPCBwcm9taXNlcy5sZW5ndGggJiYgIXJlc29sdmVyLnJlc29sdmVkOyArK2kpIHtcblx0XHRcdFx0eCA9IHByb21pc2VzW2ldO1xuXG5cdFx0XHRcdGlmICh4ID09PSB2b2lkIDAgJiYgIShpIGluIHByb21pc2VzKSkge1xuXHRcdFx0XHRcdC0tcGVuZGluZztcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHRyYXZlcnNlQXQocHJvbWlzZXMsIGhhbmRsZXIsIGksIHgsIHJlc29sdmVyKTtcblx0XHRcdH1cblxuXHRcdFx0aWYocGVuZGluZyA9PT0gMCkge1xuXHRcdFx0XHRyZXNvbHZlci5iZWNvbWUobmV3IEZ1bGZpbGxlZChyZXN1bHRzKSk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBuZXcgUHJvbWlzZShIYW5kbGVyLCByZXNvbHZlcik7XG5cblx0XHRcdGZ1bmN0aW9uIG1hcEF0KGksIHgsIHJlc29sdmVyKSB7XG5cdFx0XHRcdGlmKCFyZXNvbHZlci5yZXNvbHZlZCkge1xuXHRcdFx0XHRcdHRyYXZlcnNlQXQocHJvbWlzZXMsIHNldHRsZUF0LCBpLCB0cnlNYXAoZiwgeCwgaSksIHJlc29sdmVyKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRmdW5jdGlvbiBzZXR0bGVBdChpLCB4LCByZXNvbHZlcikge1xuXHRcdFx0XHRyZXN1bHRzW2ldID0geDtcblx0XHRcdFx0aWYoLS1wZW5kaW5nID09PSAwKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZXIuYmVjb21lKG5ldyBGdWxmaWxsZWQocmVzdWx0cykpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gdHJhdmVyc2VBdChwcm9taXNlcywgaGFuZGxlciwgaSwgeCwgcmVzb2x2ZXIpIHtcblx0XHRcdGlmIChtYXliZVRoZW5hYmxlKHgpKSB7XG5cdFx0XHRcdHZhciBoID0gZ2V0SGFuZGxlck1heWJlVGhlbmFibGUoeCk7XG5cdFx0XHRcdHZhciBzID0gaC5zdGF0ZSgpO1xuXG5cdFx0XHRcdGlmIChzID09PSAwKSB7XG5cdFx0XHRcdFx0aC5mb2xkKGhhbmRsZXIsIGksIHZvaWQgMCwgcmVzb2x2ZXIpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHMgPiAwKSB7XG5cdFx0XHRcdFx0aGFuZGxlcihpLCBoLnZhbHVlLCByZXNvbHZlcik7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmVzb2x2ZXIuYmVjb21lKGgpO1xuXHRcdFx0XHRcdHZpc2l0UmVtYWluaW5nKHByb21pc2VzLCBpKzEsIGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVyKGksIHgsIHJlc29sdmVyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRQcm9taXNlLl92aXNpdFJlbWFpbmluZyA9IHZpc2l0UmVtYWluaW5nO1xuXHRcdGZ1bmN0aW9uIHZpc2l0UmVtYWluaW5nKHByb21pc2VzLCBzdGFydCwgaGFuZGxlcikge1xuXHRcdFx0Zm9yKHZhciBpPXN0YXJ0OyBpPHByb21pc2VzLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdG1hcmtBc0hhbmRsZWQoZ2V0SGFuZGxlcihwcm9taXNlc1tpXSksIGhhbmRsZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG1hcmtBc0hhbmRsZWQoaCwgaGFuZGxlcikge1xuXHRcdFx0aWYoaCA9PT0gaGFuZGxlcikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHZhciBzID0gaC5zdGF0ZSgpO1xuXHRcdFx0aWYocyA9PT0gMCkge1xuXHRcdFx0XHRoLnZpc2l0KGgsIHZvaWQgMCwgaC5fdW5yZXBvcnQpO1xuXHRcdFx0fSBlbHNlIGlmKHMgPCAwKSB7XG5cdFx0XHRcdGguX3VucmVwb3J0KCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogRnVsZmlsbC1yZWplY3QgY29tcGV0aXRpdmUgcmFjZS4gUmV0dXJuIGEgcHJvbWlzZSB0aGF0IHdpbGwgc2V0dGxlXG5cdFx0ICogdG8gdGhlIHNhbWUgc3RhdGUgYXMgdGhlIGVhcmxpZXN0IGlucHV0IHByb21pc2UgdG8gc2V0dGxlLlxuXHRcdCAqXG5cdFx0ICogV0FSTklORzogVGhlIEVTNiBQcm9taXNlIHNwZWMgcmVxdWlyZXMgdGhhdCByYWNlKClpbmcgYW4gZW1wdHkgYXJyYXlcblx0XHQgKiBtdXN0IHJldHVybiBhIHByb21pc2UgdGhhdCBpcyBwZW5kaW5nIGZvcmV2ZXIuICBUaGlzIGltcGxlbWVudGF0aW9uXG5cdFx0ICogcmV0dXJucyBhIHNpbmdsZXRvbiBmb3JldmVyLXBlbmRpbmcgcHJvbWlzZSwgdGhlIHNhbWUgc2luZ2xldG9uIHRoYXQgaXNcblx0XHQgKiByZXR1cm5lZCBieSBQcm9taXNlLm5ldmVyKCksIHRodXMgY2FuIGJlIGNoZWNrZWQgd2l0aCA9PT1cblx0XHQgKlxuXHRcdCAqIEBwYXJhbSB7YXJyYXl9IHByb21pc2VzIGFycmF5IG9mIHByb21pc2VzIHRvIHJhY2Vcblx0XHQgKiBAcmV0dXJucyB7UHJvbWlzZX0gaWYgaW5wdXQgaXMgbm9uLWVtcHR5LCBhIHByb21pc2UgdGhhdCB3aWxsIHNldHRsZVxuXHRcdCAqIHRvIHRoZSBzYW1lIG91dGNvbWUgYXMgdGhlIGVhcmxpZXN0IGlucHV0IHByb21pc2UgdG8gc2V0dGxlLiBpZiBlbXB0eVxuXHRcdCAqIGlzIGVtcHR5LCByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdpbGwgbmV2ZXIgc2V0dGxlLlxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHJhY2UocHJvbWlzZXMpIHtcblx0XHRcdGlmKHR5cGVvZiBwcm9taXNlcyAhPT0gJ29iamVjdCcgfHwgcHJvbWlzZXMgPT09IG51bGwpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdub24taXRlcmFibGUgcGFzc2VkIHRvIHJhY2UoKScpKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2lnaCwgcmFjZShbXSkgaXMgdW50ZXN0YWJsZSB1bmxlc3Mgd2UgcmV0dXJuICpzb21ldGhpbmcqXG5cdFx0XHQvLyB0aGF0IGlzIHJlY29nbml6YWJsZSB3aXRob3V0IGNhbGxpbmcgLnRoZW4oKSBvbiBpdC5cblx0XHRcdHJldHVybiBwcm9taXNlcy5sZW5ndGggPT09IDAgPyBuZXZlcigpXG5cdFx0XHRcdCA6IHByb21pc2VzLmxlbmd0aCA9PT0gMSA/IHJlc29sdmUocHJvbWlzZXNbMF0pXG5cdFx0XHRcdCA6IHJ1blJhY2UocHJvbWlzZXMpO1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIHJ1blJhY2UocHJvbWlzZXMpIHtcblx0XHRcdHZhciByZXNvbHZlciA9IG5ldyBQZW5kaW5nKCk7XG5cdFx0XHR2YXIgaSwgeCwgaDtcblx0XHRcdGZvcihpPTA7IGk8cHJvbWlzZXMubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0eCA9IHByb21pc2VzW2ldO1xuXHRcdFx0XHRpZiAoeCA9PT0gdm9pZCAwICYmICEoaSBpbiBwcm9taXNlcykpIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGggPSBnZXRIYW5kbGVyKHgpO1xuXHRcdFx0XHRpZihoLnN0YXRlKCkgIT09IDApIHtcblx0XHRcdFx0XHRyZXNvbHZlci5iZWNvbWUoaCk7XG5cdFx0XHRcdFx0dmlzaXRSZW1haW5pbmcocHJvbWlzZXMsIGkrMSwgaCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aC52aXNpdChyZXNvbHZlciwgcmVzb2x2ZXIucmVzb2x2ZSwgcmVzb2x2ZXIucmVqZWN0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG5ldyBQcm9taXNlKEhhbmRsZXIsIHJlc29sdmVyKTtcblx0XHR9XG5cblx0XHQvLyBQcm9taXNlIGludGVybmFsc1xuXHRcdC8vIEJlbG93IHRoaXMsIGV2ZXJ5dGhpbmcgaXMgQHByaXZhdGVcblxuXHRcdC8qKlxuXHRcdCAqIEdldCBhbiBhcHByb3ByaWF0ZSBoYW5kbGVyIGZvciB4LCB3aXRob3V0IGNoZWNraW5nIGZvciBjeWNsZXNcblx0XHQgKiBAcGFyYW0geyp9IHhcblx0XHQgKiBAcmV0dXJucyB7b2JqZWN0fSBoYW5kbGVyXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0SGFuZGxlcih4KSB7XG5cdFx0XHRpZihpc1Byb21pc2UoeCkpIHtcblx0XHRcdFx0cmV0dXJuIHguX2hhbmRsZXIuam9pbigpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1heWJlVGhlbmFibGUoeCkgPyBnZXRIYW5kbGVyVW50cnVzdGVkKHgpIDogbmV3IEZ1bGZpbGxlZCh4KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBHZXQgYSBoYW5kbGVyIGZvciB0aGVuYWJsZSB4LlxuXHRcdCAqIE5PVEU6IFlvdSBtdXN0IG9ubHkgY2FsbCB0aGlzIGlmIG1heWJlVGhlbmFibGUoeCkgPT0gdHJ1ZVxuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fGZ1bmN0aW9ufFByb21pc2V9IHhcblx0XHQgKiBAcmV0dXJucyB7b2JqZWN0fSBoYW5kbGVyXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gZ2V0SGFuZGxlck1heWJlVGhlbmFibGUoeCkge1xuXHRcdFx0cmV0dXJuIGlzUHJvbWlzZSh4KSA/IHguX2hhbmRsZXIuam9pbigpIDogZ2V0SGFuZGxlclVudHJ1c3RlZCh4KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBHZXQgYSBoYW5kbGVyIGZvciBwb3RlbnRpYWxseSB1bnRydXN0ZWQgdGhlbmFibGUgeFxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9IGhhbmRsZXJcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBnZXRIYW5kbGVyVW50cnVzdGVkKHgpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHZhciB1bnRydXN0ZWRUaGVuID0geC50aGVuO1xuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIHVudHJ1c3RlZFRoZW4gPT09ICdmdW5jdGlvbidcblx0XHRcdFx0XHQ/IG5ldyBUaGVuYWJsZSh1bnRydXN0ZWRUaGVuLCB4KVxuXHRcdFx0XHRcdDogbmV3IEZ1bGZpbGxlZCh4KTtcblx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRyZXR1cm4gbmV3IFJlamVjdGVkKGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgZm9yIGEgcHJvbWlzZSB0aGF0IGlzIHBlbmRpbmcgZm9yZXZlclxuXHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIEhhbmRsZXIoKSB7fVxuXG5cdFx0SGFuZGxlci5wcm90b3R5cGUud2hlblxuXHRcdFx0PSBIYW5kbGVyLnByb3RvdHlwZS5iZWNvbWVcblx0XHRcdD0gSGFuZGxlci5wcm90b3R5cGUubm90aWZ5IC8vIGRlcHJlY2F0ZWRcblx0XHRcdD0gSGFuZGxlci5wcm90b3R5cGUuZmFpbFxuXHRcdFx0PSBIYW5kbGVyLnByb3RvdHlwZS5fdW5yZXBvcnRcblx0XHRcdD0gSGFuZGxlci5wcm90b3R5cGUuX3JlcG9ydFxuXHRcdFx0PSBub29wO1xuXG5cdFx0SGFuZGxlci5wcm90b3R5cGUuX3N0YXRlID0gMDtcblxuXHRcdEhhbmRsZXIucHJvdG90eXBlLnN0YXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fc3RhdGU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJlY3Vyc2l2ZWx5IGNvbGxhcHNlIGhhbmRsZXIgY2hhaW4gdG8gZmluZCB0aGUgaGFuZGxlclxuXHRcdCAqIG5lYXJlc3QgdG8gdGhlIGZ1bGx5IHJlc29sdmVkIHZhbHVlLlxuXHRcdCAqIEByZXR1cm5zIHtvYmplY3R9IGhhbmRsZXIgbmVhcmVzdCB0aGUgZnVsbHkgcmVzb2x2ZWQgdmFsdWVcblx0XHQgKi9cblx0XHRIYW5kbGVyLnByb3RvdHlwZS5qb2luID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaCA9IHRoaXM7XG5cdFx0XHR3aGlsZShoLmhhbmRsZXIgIT09IHZvaWQgMCkge1xuXHRcdFx0XHRoID0gaC5oYW5kbGVyO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGg7XG5cdFx0fTtcblxuXHRcdEhhbmRsZXIucHJvdG90eXBlLmNoYWluID0gZnVuY3Rpb24odG8sIHJlY2VpdmVyLCBmdWxmaWxsZWQsIHJlamVjdGVkLCBwcm9ncmVzcykge1xuXHRcdFx0dGhpcy53aGVuKHtcblx0XHRcdFx0cmVzb2x2ZXI6IHRvLFxuXHRcdFx0XHRyZWNlaXZlcjogcmVjZWl2ZXIsXG5cdFx0XHRcdGZ1bGZpbGxlZDogZnVsZmlsbGVkLFxuXHRcdFx0XHRyZWplY3RlZDogcmVqZWN0ZWQsXG5cdFx0XHRcdHByb2dyZXNzOiBwcm9ncmVzc1xuXHRcdFx0fSk7XG5cdFx0fTtcblxuXHRcdEhhbmRsZXIucHJvdG90eXBlLnZpc2l0ID0gZnVuY3Rpb24ocmVjZWl2ZXIsIGZ1bGZpbGxlZCwgcmVqZWN0ZWQsIHByb2dyZXNzKSB7XG5cdFx0XHR0aGlzLmNoYWluKGZhaWxJZlJlamVjdGVkLCByZWNlaXZlciwgZnVsZmlsbGVkLCByZWplY3RlZCwgcHJvZ3Jlc3MpO1xuXHRcdH07XG5cblx0XHRIYW5kbGVyLnByb3RvdHlwZS5mb2xkID0gZnVuY3Rpb24oZiwgeiwgYywgdG8pIHtcblx0XHRcdHRoaXMud2hlbihuZXcgRm9sZChmLCB6LCBjLCB0bykpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVyIHRoYXQgaW52b2tlcyBmYWlsKCkgb24gYW55IGhhbmRsZXIgaXQgYmVjb21lc1xuXHRcdCAqIEBjb25zdHJ1Y3RvclxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIEZhaWxJZlJlamVjdGVkKCkge31cblxuXHRcdGluaGVyaXQoSGFuZGxlciwgRmFpbElmUmVqZWN0ZWQpO1xuXG5cdFx0RmFpbElmUmVqZWN0ZWQucHJvdG90eXBlLmJlY29tZSA9IGZ1bmN0aW9uKGgpIHtcblx0XHRcdGguZmFpbCgpO1xuXHRcdH07XG5cblx0XHR2YXIgZmFpbElmUmVqZWN0ZWQgPSBuZXcgRmFpbElmUmVqZWN0ZWQoKTtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgdGhhdCBtYW5hZ2VzIGEgcXVldWUgb2YgY29uc3VtZXJzIHdhaXRpbmcgb24gYSBwZW5kaW5nIHByb21pc2Vcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBQZW5kaW5nKHJlY2VpdmVyLCBpbmhlcml0ZWRDb250ZXh0KSB7XG5cdFx0XHRQcm9taXNlLmNyZWF0ZUNvbnRleHQodGhpcywgaW5oZXJpdGVkQ29udGV4dCk7XG5cblx0XHRcdHRoaXMuY29uc3VtZXJzID0gdm9pZCAwO1xuXHRcdFx0dGhpcy5yZWNlaXZlciA9IHJlY2VpdmVyO1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gdm9pZCAwO1xuXHRcdFx0dGhpcy5yZXNvbHZlZCA9IGZhbHNlO1xuXHRcdH1cblxuXHRcdGluaGVyaXQoSGFuZGxlciwgUGVuZGluZyk7XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5fc3RhdGUgPSAwO1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUucmVzb2x2ZSA9IGZ1bmN0aW9uKHgpIHtcblx0XHRcdHRoaXMuYmVjb21lKGdldEhhbmRsZXIoeCkpO1xuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5yZWplY3QgPSBmdW5jdGlvbih4KSB7XG5cdFx0XHRpZih0aGlzLnJlc29sdmVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dGhpcy5iZWNvbWUobmV3IFJlamVjdGVkKHgpKTtcblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUuam9pbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCF0aGlzLnJlc29sdmVkKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgaCA9IHRoaXM7XG5cblx0XHRcdHdoaWxlIChoLmhhbmRsZXIgIT09IHZvaWQgMCkge1xuXHRcdFx0XHRoID0gaC5oYW5kbGVyO1xuXHRcdFx0XHRpZiAoaCA9PT0gdGhpcykge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmhhbmRsZXIgPSBjeWNsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBoO1xuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBxID0gdGhpcy5jb25zdW1lcnM7XG5cdFx0XHR2YXIgaGFuZGxlciA9IHRoaXMuaGFuZGxlcjtcblx0XHRcdHRoaXMuaGFuZGxlciA9IHRoaXMuaGFuZGxlci5qb2luKCk7XG5cdFx0XHR0aGlzLmNvbnN1bWVycyA9IHZvaWQgMDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBxLmxlbmd0aDsgKytpKSB7XG5cdFx0XHRcdGhhbmRsZXIud2hlbihxW2ldKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUuYmVjb21lID0gZnVuY3Rpb24oaGFuZGxlcikge1xuXHRcdFx0aWYodGhpcy5yZXNvbHZlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMucmVzb2x2ZWQgPSB0cnVlO1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcblx0XHRcdGlmKHRoaXMuY29uc3VtZXJzICE9PSB2b2lkIDApIHtcblx0XHRcdFx0dGFza3MuZW5xdWV1ZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYodGhpcy5jb250ZXh0ICE9PSB2b2lkIDApIHtcblx0XHRcdFx0aGFuZGxlci5fcmVwb3J0KHRoaXMuY29udGV4dCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLndoZW4gPSBmdW5jdGlvbihjb250aW51YXRpb24pIHtcblx0XHRcdGlmKHRoaXMucmVzb2x2ZWQpIHtcblx0XHRcdFx0dGFza3MuZW5xdWV1ZShuZXcgQ29udGludWF0aW9uVGFzayhjb250aW51YXRpb24sIHRoaXMuaGFuZGxlcikpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYodGhpcy5jb25zdW1lcnMgPT09IHZvaWQgMCkge1xuXHRcdFx0XHRcdHRoaXMuY29uc3VtZXJzID0gW2NvbnRpbnVhdGlvbl07XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5jb25zdW1lcnMucHVzaChjb250aW51YXRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIEBkZXByZWNhdGVkXG5cdFx0ICovXG5cdFx0UGVuZGluZy5wcm90b3R5cGUubm90aWZ5ID0gZnVuY3Rpb24oeCkge1xuXHRcdFx0aWYoIXRoaXMucmVzb2x2ZWQpIHtcblx0XHRcdFx0dGFza3MuZW5xdWV1ZShuZXcgUHJvZ3Jlc3NUYXNrKHgsIHRoaXMpKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0UGVuZGluZy5wcm90b3R5cGUuZmFpbCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0XHRcdHZhciBjID0gdHlwZW9mIGNvbnRleHQgPT09ICd1bmRlZmluZWQnID8gdGhpcy5jb250ZXh0IDogY29udGV4dDtcblx0XHRcdHRoaXMucmVzb2x2ZWQgJiYgdGhpcy5oYW5kbGVyLmpvaW4oKS5mYWlsKGMpO1xuXHRcdH07XG5cblx0XHRQZW5kaW5nLnByb3RvdHlwZS5fcmVwb3J0ID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdFx0dGhpcy5yZXNvbHZlZCAmJiB0aGlzLmhhbmRsZXIuam9pbigpLl9yZXBvcnQoY29udGV4dCk7XG5cdFx0fTtcblxuXHRcdFBlbmRpbmcucHJvdG90eXBlLl91bnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0dGhpcy5yZXNvbHZlZCAmJiB0aGlzLmhhbmRsZXIuam9pbigpLl91bnJlcG9ydCgpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBXcmFwIGFub3RoZXIgaGFuZGxlciBhbmQgZm9yY2UgaXQgaW50byBhIGZ1dHVyZSBzdGFja1xuXHRcdCAqIEBwYXJhbSB7b2JqZWN0fSBoYW5kbGVyXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gQXN5bmMoaGFuZGxlcikge1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcblx0XHR9XG5cblx0XHRpbmhlcml0KEhhbmRsZXIsIEFzeW5jKTtcblxuXHRcdEFzeW5jLnByb3RvdHlwZS53aGVuID0gZnVuY3Rpb24oY29udGludWF0aW9uKSB7XG5cdFx0XHR0YXNrcy5lbnF1ZXVlKG5ldyBDb250aW51YXRpb25UYXNrKGNvbnRpbnVhdGlvbiwgdGhpcykpO1xuXHRcdH07XG5cblx0XHRBc3luYy5wcm90b3R5cGUuX3JlcG9ydCA9IGZ1bmN0aW9uKGNvbnRleHQpIHtcblx0XHRcdHRoaXMuam9pbigpLl9yZXBvcnQoY29udGV4dCk7XG5cdFx0fTtcblxuXHRcdEFzeW5jLnByb3RvdHlwZS5fdW5yZXBvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuam9pbigpLl91bnJlcG9ydCgpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVyIHRoYXQgd3JhcHMgYW4gdW50cnVzdGVkIHRoZW5hYmxlIGFuZCBhc3NpbWlsYXRlcyBpdCBpbiBhIGZ1dHVyZSBzdGFja1xuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZW5cblx0XHQgKiBAcGFyYW0ge3t0aGVuOiBmdW5jdGlvbn19IHRoZW5hYmxlXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gVGhlbmFibGUodGhlbiwgdGhlbmFibGUpIHtcblx0XHRcdFBlbmRpbmcuY2FsbCh0aGlzKTtcblx0XHRcdHRhc2tzLmVucXVldWUobmV3IEFzc2ltaWxhdGVUYXNrKHRoZW4sIHRoZW5hYmxlLCB0aGlzKSk7XG5cdFx0fVxuXG5cdFx0aW5oZXJpdChQZW5kaW5nLCBUaGVuYWJsZSk7XG5cblx0XHQvKipcblx0XHQgKiBIYW5kbGVyIGZvciBhIGZ1bGZpbGxlZCBwcm9taXNlXG5cdFx0ICogQHBhcmFtIHsqfSB4IGZ1bGZpbGxtZW50IHZhbHVlXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gRnVsZmlsbGVkKHgpIHtcblx0XHRcdFByb21pc2UuY3JlYXRlQ29udGV4dCh0aGlzKTtcblx0XHRcdHRoaXMudmFsdWUgPSB4O1xuXHRcdH1cblxuXHRcdGluaGVyaXQoSGFuZGxlciwgRnVsZmlsbGVkKTtcblxuXHRcdEZ1bGZpbGxlZC5wcm90b3R5cGUuX3N0YXRlID0gMTtcblxuXHRcdEZ1bGZpbGxlZC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uKGYsIHosIGMsIHRvKSB7XG5cdFx0XHRydW5Db250aW51YXRpb24zKGYsIHosIHRoaXMsIGMsIHRvKTtcblx0XHR9O1xuXG5cdFx0RnVsZmlsbGVkLnByb3RvdHlwZS53aGVuID0gZnVuY3Rpb24oY29udCkge1xuXHRcdFx0cnVuQ29udGludWF0aW9uMShjb250LmZ1bGZpbGxlZCwgdGhpcywgY29udC5yZWNlaXZlciwgY29udC5yZXNvbHZlcik7XG5cdFx0fTtcblxuXHRcdHZhciBlcnJvcklkID0gMDtcblxuXHRcdC8qKlxuXHRcdCAqIEhhbmRsZXIgZm9yIGEgcmVqZWN0ZWQgcHJvbWlzZVxuXHRcdCAqIEBwYXJhbSB7Kn0geCByZWplY3Rpb24gcmVhc29uXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gUmVqZWN0ZWQoeCkge1xuXHRcdFx0UHJvbWlzZS5jcmVhdGVDb250ZXh0KHRoaXMpO1xuXG5cdFx0XHR0aGlzLmlkID0gKytlcnJvcklkO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHg7XG5cdFx0XHR0aGlzLmhhbmRsZWQgPSBmYWxzZTtcblx0XHRcdHRoaXMucmVwb3J0ZWQgPSBmYWxzZTtcblxuXHRcdFx0dGhpcy5fcmVwb3J0KCk7XG5cdFx0fVxuXG5cdFx0aW5oZXJpdChIYW5kbGVyLCBSZWplY3RlZCk7XG5cblx0XHRSZWplY3RlZC5wcm90b3R5cGUuX3N0YXRlID0gLTE7XG5cblx0XHRSZWplY3RlZC5wcm90b3R5cGUuZm9sZCA9IGZ1bmN0aW9uKGYsIHosIGMsIHRvKSB7XG5cdFx0XHR0by5iZWNvbWUodGhpcyk7XG5cdFx0fTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS53aGVuID0gZnVuY3Rpb24oY29udCkge1xuXHRcdFx0aWYodHlwZW9mIGNvbnQucmVqZWN0ZWQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0dGhpcy5fdW5yZXBvcnQoKTtcblx0XHRcdH1cblx0XHRcdHJ1bkNvbnRpbnVhdGlvbjEoY29udC5yZWplY3RlZCwgdGhpcywgY29udC5yZWNlaXZlciwgY29udC5yZXNvbHZlcik7XG5cdFx0fTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS5fcmVwb3J0ID0gZnVuY3Rpb24oY29udGV4dCkge1xuXHRcdFx0dGFza3MuYWZ0ZXJRdWV1ZShuZXcgUmVwb3J0VGFzayh0aGlzLCBjb250ZXh0KSk7XG5cdFx0fTtcblxuXHRcdFJlamVjdGVkLnByb3RvdHlwZS5fdW5yZXBvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmKHRoaXMuaGFuZGxlZCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmhhbmRsZWQgPSB0cnVlO1xuXHRcdFx0dGFza3MuYWZ0ZXJRdWV1ZShuZXcgVW5yZXBvcnRUYXNrKHRoaXMpKTtcblx0XHR9O1xuXG5cdFx0UmVqZWN0ZWQucHJvdG90eXBlLmZhaWwgPSBmdW5jdGlvbihjb250ZXh0KSB7XG5cdFx0XHR0aGlzLnJlcG9ydGVkID0gdHJ1ZTtcblx0XHRcdGVtaXRSZWplY3Rpb24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIHRoaXMpO1xuXHRcdFx0UHJvbWlzZS5vbkZhdGFsUmVqZWN0aW9uKHRoaXMsIGNvbnRleHQgPT09IHZvaWQgMCA/IHRoaXMuY29udGV4dCA6IGNvbnRleHQpO1xuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBSZXBvcnRUYXNrKHJlamVjdGlvbiwgY29udGV4dCkge1xuXHRcdFx0dGhpcy5yZWplY3Rpb24gPSByZWplY3Rpb247XG5cdFx0XHR0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuXHRcdH1cblxuXHRcdFJlcG9ydFRhc2sucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYoIXRoaXMucmVqZWN0aW9uLmhhbmRsZWQgJiYgIXRoaXMucmVqZWN0aW9uLnJlcG9ydGVkKSB7XG5cdFx0XHRcdHRoaXMucmVqZWN0aW9uLnJlcG9ydGVkID0gdHJ1ZTtcblx0XHRcdFx0ZW1pdFJlamVjdGlvbigndW5oYW5kbGVkUmVqZWN0aW9uJywgdGhpcy5yZWplY3Rpb24pIHx8XG5cdFx0XHRcdFx0UHJvbWlzZS5vblBvdGVudGlhbGx5VW5oYW5kbGVkUmVqZWN0aW9uKHRoaXMucmVqZWN0aW9uLCB0aGlzLmNvbnRleHQpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiBVbnJlcG9ydFRhc2socmVqZWN0aW9uKSB7XG5cdFx0XHR0aGlzLnJlamVjdGlvbiA9IHJlamVjdGlvbjtcblx0XHR9XG5cblx0XHRVbnJlcG9ydFRhc2sucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYodGhpcy5yZWplY3Rpb24ucmVwb3J0ZWQpIHtcblx0XHRcdFx0ZW1pdFJlamVjdGlvbigncmVqZWN0aW9uSGFuZGxlZCcsIHRoaXMucmVqZWN0aW9uKSB8fFxuXHRcdFx0XHRcdFByb21pc2Uub25Qb3RlbnRpYWxseVVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQodGhpcy5yZWplY3Rpb24pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvLyBVbmhhbmRsZWQgcmVqZWN0aW9uIGhvb2tzXG5cdFx0Ly8gQnkgZGVmYXVsdCwgZXZlcnl0aGluZyBpcyBhIG5vb3BcblxuXHRcdFByb21pc2UuY3JlYXRlQ29udGV4dFxuXHRcdFx0PSBQcm9taXNlLmVudGVyQ29udGV4dFxuXHRcdFx0PSBQcm9taXNlLmV4aXRDb250ZXh0XG5cdFx0XHQ9IFByb21pc2Uub25Qb3RlbnRpYWxseVVuaGFuZGxlZFJlamVjdGlvblxuXHRcdFx0PSBQcm9taXNlLm9uUG90ZW50aWFsbHlVbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkXG5cdFx0XHQ9IFByb21pc2Uub25GYXRhbFJlamVjdGlvblxuXHRcdFx0PSBub29wO1xuXG5cdFx0Ly8gRXJyb3JzIGFuZCBzaW5nbGV0b25zXG5cblx0XHR2YXIgZm9yZXZlclBlbmRpbmdIYW5kbGVyID0gbmV3IEhhbmRsZXIoKTtcblx0XHR2YXIgZm9yZXZlclBlbmRpbmdQcm9taXNlID0gbmV3IFByb21pc2UoSGFuZGxlciwgZm9yZXZlclBlbmRpbmdIYW5kbGVyKTtcblxuXHRcdGZ1bmN0aW9uIGN5Y2xlKCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWplY3RlZChuZXcgVHlwZUVycm9yKCdQcm9taXNlIGN5Y2xlJykpO1xuXHRcdH1cblxuXHRcdC8vIFRhc2sgcnVubmVyc1xuXG5cdFx0LyoqXG5cdFx0ICogUnVuIGEgc2luZ2xlIGNvbnN1bWVyXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gQ29udGludWF0aW9uVGFzayhjb250aW51YXRpb24sIGhhbmRsZXIpIHtcblx0XHRcdHRoaXMuY29udGludWF0aW9uID0gY29udGludWF0aW9uO1xuXHRcdFx0dGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcblx0XHR9XG5cblx0XHRDb250aW51YXRpb25UYXNrLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHRoaXMuaGFuZGxlci5qb2luKCkud2hlbih0aGlzLmNvbnRpbnVhdGlvbik7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJ1biBhIHF1ZXVlIG9mIHByb2dyZXNzIGhhbmRsZXJzXG5cdFx0ICogQGNvbnN0cnVjdG9yXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gUHJvZ3Jlc3NUYXNrKHZhbHVlLCBoYW5kbGVyKSB7XG5cdFx0XHR0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuXHRcdFx0dGhpcy52YWx1ZSA9IHZhbHVlO1xuXHRcdH1cblxuXHRcdFByb2dyZXNzVGFzay5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcSA9IHRoaXMuaGFuZGxlci5jb25zdW1lcnM7XG5cdFx0XHRpZihxID09PSB2b2lkIDApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKHZhciBjLCBpID0gMDsgaSA8IHEubGVuZ3RoOyArK2kpIHtcblx0XHRcdFx0YyA9IHFbaV07XG5cdFx0XHRcdHJ1bk5vdGlmeShjLnByb2dyZXNzLCB0aGlzLnZhbHVlLCB0aGlzLmhhbmRsZXIsIGMucmVjZWl2ZXIsIGMucmVzb2x2ZXIpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBBc3NpbWlsYXRlIGEgdGhlbmFibGUsIHNlbmRpbmcgaXQncyB2YWx1ZSB0byByZXNvbHZlclxuXHRcdCAqIEBwYXJhbSB7ZnVuY3Rpb259IHRoZW5cblx0XHQgKiBAcGFyYW0ge29iamVjdHxmdW5jdGlvbn0gdGhlbmFibGVcblx0XHQgKiBAcGFyYW0ge29iamVjdH0gcmVzb2x2ZXJcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBBc3NpbWlsYXRlVGFzayh0aGVuLCB0aGVuYWJsZSwgcmVzb2x2ZXIpIHtcblx0XHRcdHRoaXMuX3RoZW4gPSB0aGVuO1xuXHRcdFx0dGhpcy50aGVuYWJsZSA9IHRoZW5hYmxlO1xuXHRcdFx0dGhpcy5yZXNvbHZlciA9IHJlc29sdmVyO1xuXHRcdH1cblxuXHRcdEFzc2ltaWxhdGVUYXNrLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBoID0gdGhpcy5yZXNvbHZlcjtcblx0XHRcdHRyeUFzc2ltaWxhdGUodGhpcy5fdGhlbiwgdGhpcy50aGVuYWJsZSwgX3Jlc29sdmUsIF9yZWplY3QsIF9ub3RpZnkpO1xuXG5cdFx0XHRmdW5jdGlvbiBfcmVzb2x2ZSh4KSB7IGgucmVzb2x2ZSh4KTsgfVxuXHRcdFx0ZnVuY3Rpb24gX3JlamVjdCh4KSAgeyBoLnJlamVjdCh4KTsgfVxuXHRcdFx0ZnVuY3Rpb24gX25vdGlmeSh4KSAgeyBoLm5vdGlmeSh4KTsgfVxuXHRcdH07XG5cblx0XHRmdW5jdGlvbiB0cnlBc3NpbWlsYXRlKHRoZW4sIHRoZW5hYmxlLCByZXNvbHZlLCByZWplY3QsIG5vdGlmeSkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dGhlbi5jYWxsKHRoZW5hYmxlLCByZXNvbHZlLCByZWplY3QsIG5vdGlmeSk7XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdHJlamVjdChlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBGb2xkIGEgaGFuZGxlciB2YWx1ZSB3aXRoIHpcblx0XHQgKiBAY29uc3RydWN0b3Jcblx0XHQgKi9cblx0XHRmdW5jdGlvbiBGb2xkKGYsIHosIGMsIHRvKSB7XG5cdFx0XHR0aGlzLmYgPSBmOyB0aGlzLnogPSB6OyB0aGlzLmMgPSBjOyB0aGlzLnRvID0gdG87XG5cdFx0XHR0aGlzLnJlc29sdmVyID0gZmFpbElmUmVqZWN0ZWQ7XG5cdFx0XHR0aGlzLnJlY2VpdmVyID0gdGhpcztcblx0XHR9XG5cblx0XHRGb2xkLnByb3RvdHlwZS5mdWxmaWxsZWQgPSBmdW5jdGlvbih4KSB7XG5cdFx0XHR0aGlzLmYuY2FsbCh0aGlzLmMsIHRoaXMueiwgeCwgdGhpcy50byk7XG5cdFx0fTtcblxuXHRcdEZvbGQucHJvdG90eXBlLnJlamVjdGVkID0gZnVuY3Rpb24oeCkge1xuXHRcdFx0dGhpcy50by5yZWplY3QoeCk7XG5cdFx0fTtcblxuXHRcdEZvbGQucHJvdG90eXBlLnByb2dyZXNzID0gZnVuY3Rpb24oeCkge1xuXHRcdFx0dGhpcy50by5ub3RpZnkoeCk7XG5cdFx0fTtcblxuXHRcdC8vIE90aGVyIGhlbHBlcnNcblxuXHRcdC8qKlxuXHRcdCAqIEBwYXJhbSB7Kn0geFxuXHRcdCAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlIGlmZiB4IGlzIGEgdHJ1c3RlZCBQcm9taXNlXG5cdFx0ICovXG5cdFx0ZnVuY3Rpb24gaXNQcm9taXNlKHgpIHtcblx0XHRcdHJldHVybiB4IGluc3RhbmNlb2YgUHJvbWlzZTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBUZXN0IGp1c3QgZW5vdWdoIHRvIHJ1bGUgb3V0IHByaW1pdGl2ZXMsIGluIG9yZGVyIHRvIHRha2UgZmFzdGVyXG5cdFx0ICogcGF0aHMgaW4gc29tZSBjb2RlXG5cdFx0ICogQHBhcmFtIHsqfSB4XG5cdFx0ICogQHJldHVybnMge2Jvb2xlYW59IGZhbHNlIGlmZiB4IGlzIGd1YXJhbnRlZWQgKm5vdCogdG8gYmUgYSB0aGVuYWJsZVxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIG1heWJlVGhlbmFibGUoeCkge1xuXHRcdFx0cmV0dXJuICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHggPT09ICdmdW5jdGlvbicpICYmIHggIT09IG51bGw7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gcnVuQ29udGludWF0aW9uMShmLCBoLCByZWNlaXZlciwgbmV4dCkge1xuXHRcdFx0aWYodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuIG5leHQuYmVjb21lKGgpO1xuXHRcdFx0fVxuXG5cdFx0XHRQcm9taXNlLmVudGVyQ29udGV4dChoKTtcblx0XHRcdHRyeUNhdGNoUmVqZWN0KGYsIGgudmFsdWUsIHJlY2VpdmVyLCBuZXh0KTtcblx0XHRcdFByb21pc2UuZXhpdENvbnRleHQoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBydW5Db250aW51YXRpb24zKGYsIHgsIGgsIHJlY2VpdmVyLCBuZXh0KSB7XG5cdFx0XHRpZih0eXBlb2YgZiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRyZXR1cm4gbmV4dC5iZWNvbWUoaCk7XG5cdFx0XHR9XG5cblx0XHRcdFByb21pc2UuZW50ZXJDb250ZXh0KGgpO1xuXHRcdFx0dHJ5Q2F0Y2hSZWplY3QzKGYsIHgsIGgudmFsdWUsIHJlY2VpdmVyLCBuZXh0KTtcblx0XHRcdFByb21pc2UuZXhpdENvbnRleHQoKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBAZGVwcmVjYXRlZFxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHJ1bk5vdGlmeShmLCB4LCBoLCByZWNlaXZlciwgbmV4dCkge1xuXHRcdFx0aWYodHlwZW9mIGYgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0cmV0dXJuIG5leHQubm90aWZ5KHgpO1xuXHRcdFx0fVxuXG5cdFx0XHRQcm9taXNlLmVudGVyQ29udGV4dChoKTtcblx0XHRcdHRyeUNhdGNoUmV0dXJuKGYsIHgsIHJlY2VpdmVyLCBuZXh0KTtcblx0XHRcdFByb21pc2UuZXhpdENvbnRleHQoKTtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiB0cnlDYXRjaDIoZiwgYSwgYikge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0cmV0dXJuIGYoYSwgYik7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0cmV0dXJuIHJlamVjdChlKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm4gZi5jYWxsKHRoaXNBcmcsIHgpLCBvciBpZiBpdCB0aHJvd3MgcmV0dXJuIGEgcmVqZWN0ZWQgcHJvbWlzZSBmb3Jcblx0XHQgKiB0aGUgdGhyb3duIGV4Y2VwdGlvblxuXHRcdCAqL1xuXHRcdGZ1bmN0aW9uIHRyeUNhdGNoUmVqZWN0KGYsIHgsIHRoaXNBcmcsIG5leHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdG5leHQuYmVjb21lKGdldEhhbmRsZXIoZi5jYWxsKHRoaXNBcmcsIHgpKSk7XG5cdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0bmV4dC5iZWNvbWUobmV3IFJlamVjdGVkKGUpKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBTYW1lIGFzIGFib3ZlLCBidXQgaW5jbHVkZXMgdGhlIGV4dHJhIGFyZ3VtZW50IHBhcmFtZXRlci5cblx0XHQgKi9cblx0XHRmdW5jdGlvbiB0cnlDYXRjaFJlamVjdDMoZiwgeCwgeSwgdGhpc0FyZywgbmV4dCkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Zi5jYWxsKHRoaXNBcmcsIHgsIHksIG5leHQpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdG5leHQuYmVjb21lKG5ldyBSZWplY3RlZChlKSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0LyoqXG5cdFx0ICogQGRlcHJlY2F0ZWRcblx0XHQgKiBSZXR1cm4gZi5jYWxsKHRoaXNBcmcsIHgpLCBvciBpZiBpdCB0aHJvd3MsICpyZXR1cm4qIHRoZSBleGNlcHRpb25cblx0XHQgKi9cblx0XHRmdW5jdGlvbiB0cnlDYXRjaFJldHVybihmLCB4LCB0aGlzQXJnLCBuZXh0KSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRuZXh0Lm5vdGlmeShmLmNhbGwodGhpc0FyZywgeCkpO1xuXHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdG5leHQubm90aWZ5KGUpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIGluaGVyaXQoUGFyZW50LCBDaGlsZCkge1xuXHRcdFx0Q2hpbGQucHJvdG90eXBlID0gb2JqZWN0Q3JlYXRlKFBhcmVudC5wcm90b3R5cGUpO1xuXHRcdFx0Q2hpbGQucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gQ2hpbGQ7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gc25kKHgsIHkpIHtcblx0XHRcdHJldHVybiB5O1xuXHRcdH1cblxuXHRcdGZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5cdFx0ZnVuY3Rpb24gaW5pdEVtaXRSZWplY3Rpb24oKSB7XG5cdFx0XHQvKmdsb2JhbCBwcm9jZXNzLCBzZWxmLCBDdXN0b21FdmVudCovXG5cdFx0XHRpZih0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2VzcyAhPT0gbnVsbFxuXHRcdFx0XHQmJiB0eXBlb2YgcHJvY2Vzcy5lbWl0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdC8vIFJldHVybmluZyBmYWxzeSBoZXJlIG1lYW5zIHRvIGNhbGwgdGhlIGRlZmF1bHRcblx0XHRcdFx0Ly8gb25Qb3RlbnRpYWxseVVuaGFuZGxlZFJlamVjdGlvbiBBUEkuICBUaGlzIGlzIHNhZmUgZXZlbiBpblxuXHRcdFx0XHQvLyBicm93c2VyaWZ5IHNpbmNlIHByb2Nlc3MuZW1pdCBhbHdheXMgcmV0dXJucyBmYWxzeSBpbiBicm93c2VyaWZ5OlxuXHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vZGVmdW5jdHpvbWJpZS9ub2RlLXByb2Nlc3MvYmxvYi9tYXN0ZXIvYnJvd3Nlci5qcyNMNDAtTDQ2XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbih0eXBlLCByZWplY3Rpb24pIHtcblx0XHRcdFx0XHRyZXR1cm4gdHlwZSA9PT0gJ3VuaGFuZGxlZFJlamVjdGlvbidcblx0XHRcdFx0XHRcdD8gcHJvY2Vzcy5lbWl0KHR5cGUsIHJlamVjdGlvbi52YWx1ZSwgcmVqZWN0aW9uKVxuXHRcdFx0XHRcdFx0OiBwcm9jZXNzLmVtaXQodHlwZSwgcmVqZWN0aW9uKTtcblx0XHRcdFx0fTtcblx0XHRcdH0gZWxzZSBpZih0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIEN1c3RvbUV2ZW50ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHJldHVybiAoZnVuY3Rpb24obm9vcCwgc2VsZiwgQ3VzdG9tRXZlbnQpIHtcblx0XHRcdFx0XHR2YXIgaGFzQ3VzdG9tRXZlbnQgPSBmYWxzZTtcblx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0dmFyIGV2ID0gbmV3IEN1c3RvbUV2ZW50KCd1bmhhbmRsZWRSZWplY3Rpb24nKTtcblx0XHRcdFx0XHRcdGhhc0N1c3RvbUV2ZW50ID0gZXYgaW5zdGFuY2VvZiBDdXN0b21FdmVudDtcblx0XHRcdFx0XHR9IGNhdGNoIChlKSB7fVxuXG5cdFx0XHRcdFx0cmV0dXJuICFoYXNDdXN0b21FdmVudCA/IG5vb3AgOiBmdW5jdGlvbih0eXBlLCByZWplY3Rpb24pIHtcblx0XHRcdFx0XHRcdHZhciBldiA9IG5ldyBDdXN0b21FdmVudCh0eXBlLCB7XG5cdFx0XHRcdFx0XHRcdGRldGFpbDoge1xuXHRcdFx0XHRcdFx0XHRcdHJlYXNvbjogcmVqZWN0aW9uLnZhbHVlLFxuXHRcdFx0XHRcdFx0XHRcdGtleTogcmVqZWN0aW9uXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGJ1YmJsZXM6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRjYW5jZWxhYmxlOiB0cnVlXG5cdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuICFzZWxmLmRpc3BhdGNoRXZlbnQoZXYpO1xuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH0obm9vcCwgc2VsZiwgQ3VzdG9tRXZlbnQpKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG5vb3A7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFByb21pc2U7XG5cdH07XG59KTtcbn0odHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lIDogZnVuY3Rpb24oZmFjdG9yeSkgeyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTsgfSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3doZW4vbGliL21ha2VQcm9taXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA2OTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqIEBsaWNlbnNlIE1JVCBMaWNlbnNlIChjKSBjb3B5cmlnaHQgMjAxMC0yMDE0IG9yaWdpbmFsIGF1dGhvciBvciBhdXRob3JzICovXG4vKiogQGF1dGhvciBCcmlhbiBDYXZhbGllciAqL1xuLyoqIEBhdXRob3IgSm9obiBIYW5uICovXG5cbihmdW5jdGlvbihkZWZpbmUpIHsgJ3VzZSBzdHJpY3QnO1xuZGVmaW5lKGZ1bmN0aW9uKCkge1xuXG5cdC8vIENyZWRpdCB0byBUd2lzb2wgKGh0dHBzOi8vZ2l0aHViLmNvbS9Ud2lzb2wpIGZvciBzdWdnZXN0aW5nXG5cdC8vIHRoaXMgdHlwZSBvZiBleHRlbnNpYmxlIHF1ZXVlICsgdHJhbXBvbGluZSBhcHByb2FjaCBmb3IgbmV4dC10aWNrIGNvbmZsYXRpb24uXG5cblx0LyoqXG5cdCAqIEFzeW5jIHRhc2sgc2NoZWR1bGVyXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGFzeW5jIGZ1bmN0aW9uIHRvIHNjaGVkdWxlIGEgc2luZ2xlIGFzeW5jIGZ1bmN0aW9uXG5cdCAqIEBjb25zdHJ1Y3RvclxuXHQgKi9cblx0ZnVuY3Rpb24gU2NoZWR1bGVyKGFzeW5jKSB7XG5cdFx0dGhpcy5fYXN5bmMgPSBhc3luYztcblx0XHR0aGlzLl9ydW5uaW5nID0gZmFsc2U7XG5cblx0XHR0aGlzLl9xdWV1ZSA9IHRoaXM7XG5cdFx0dGhpcy5fcXVldWVMZW4gPSAwO1xuXHRcdHRoaXMuX2FmdGVyUXVldWUgPSB7fTtcblx0XHR0aGlzLl9hZnRlclF1ZXVlTGVuID0gMDtcblxuXHRcdHZhciBzZWxmID0gdGhpcztcblx0XHR0aGlzLmRyYWluID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRzZWxmLl9kcmFpbigpO1xuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogRW5xdWV1ZSBhIHRhc2tcblx0ICogQHBhcmFtIHt7IHJ1bjpmdW5jdGlvbiB9fSB0YXNrXG5cdCAqL1xuXHRTY2hlZHVsZXIucHJvdG90eXBlLmVucXVldWUgPSBmdW5jdGlvbih0YXNrKSB7XG5cdFx0dGhpcy5fcXVldWVbdGhpcy5fcXVldWVMZW4rK10gPSB0YXNrO1xuXHRcdHRoaXMucnVuKCk7XG5cdH07XG5cblx0LyoqXG5cdCAqIEVucXVldWUgYSB0YXNrIHRvIHJ1biBhZnRlciB0aGUgbWFpbiB0YXNrIHF1ZXVlXG5cdCAqIEBwYXJhbSB7eyBydW46ZnVuY3Rpb24gfX0gdGFza1xuXHQgKi9cblx0U2NoZWR1bGVyLnByb3RvdHlwZS5hZnRlclF1ZXVlID0gZnVuY3Rpb24odGFzaykge1xuXHRcdHRoaXMuX2FmdGVyUXVldWVbdGhpcy5fYWZ0ZXJRdWV1ZUxlbisrXSA9IHRhc2s7XG5cdFx0dGhpcy5ydW4oKTtcblx0fTtcblxuXHRTY2hlZHVsZXIucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghdGhpcy5fcnVubmluZykge1xuXHRcdFx0dGhpcy5fcnVubmluZyA9IHRydWU7XG5cdFx0XHR0aGlzLl9hc3luYyh0aGlzLmRyYWluKTtcblx0XHR9XG5cdH07XG5cblx0LyoqXG5cdCAqIERyYWluIHRoZSBoYW5kbGVyIHF1ZXVlIGVudGlyZWx5LCBhbmQgdGhlbiB0aGUgYWZ0ZXIgcXVldWVcblx0ICovXG5cdFNjaGVkdWxlci5wcm90b3R5cGUuX2RyYWluID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdGZvciAoOyBpIDwgdGhpcy5fcXVldWVMZW47ICsraSkge1xuXHRcdFx0dGhpcy5fcXVldWVbaV0ucnVuKCk7XG5cdFx0XHR0aGlzLl9xdWV1ZVtpXSA9IHZvaWQgMDtcblx0XHR9XG5cblx0XHR0aGlzLl9xdWV1ZUxlbiA9IDA7XG5cdFx0dGhpcy5fcnVubmluZyA9IGZhbHNlO1xuXG5cdFx0Zm9yIChpID0gMDsgaSA8IHRoaXMuX2FmdGVyUXVldWVMZW47ICsraSkge1xuXHRcdFx0dGhpcy5fYWZ0ZXJRdWV1ZVtpXS5ydW4oKTtcblx0XHRcdHRoaXMuX2FmdGVyUXVldWVbaV0gPSB2b2lkIDA7XG5cdFx0fVxuXG5cdFx0dGhpcy5fYWZ0ZXJRdWV1ZUxlbiA9IDA7XG5cdH07XG5cblx0cmV0dXJuIFNjaGVkdWxlcjtcblxufSk7XG59KHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZSA6IGZ1bmN0aW9uKGZhY3RvcnkpIHsgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7IH0pKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93aGVuL2xpYi9TY2hlZHVsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDY5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9