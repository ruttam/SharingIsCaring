webpackHotUpdate(0,{

/***/ 306:
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
	
	var _axios = __webpack_require__(307);
	
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
	
	var TripBox = function (_React$Component) {
	    _inherits(TripBox, _React$Component);
	
	    function TripBox() {
	        _classCallCheck(this, TripBox);
	
	        var _this = _possibleConstructorReturn(this, (TripBox.__proto__ || Object.getPrototypeOf(TripBox)).call(this));
	
	        _this.loadTripsFromServer = _this.loadTripsFromServer.bind(_this);
	        return _this;
	    }
	
	    _createClass(TripBox, [{
	        key: 'loadTripsFromServer',
	        value: function loadTripsFromServer() {
	            var _this2 = this;
	
	            _axios2.default.get('http://localhost:5000/getAllTrips', { mode: 'cors' }).then(function (data) {
	                _this2.setState({ data: data });
	                _this2.state = { data: _this2.props.initialData };
	                console.log(data);
	            });
	            //var xhr = new XMLHttpRequest();
	            //xhr.open('get', this.props.url, true);
	            //xhr.onload = function() {
	            //    var data = JSON.parse(xhr.responseText);
	            //    this.setState({data: data});
	            //}.bind(this);
	            //xhr.send();
	        }
	    }, {
	        key: 'componentWillMount',
	        value: function componentWillMount() {
	            this.loadTripsFromServer();
	        }
	    }, {
	        key: 'handleTripSubmit',
	        value: function handleTripSubmit(trip) {
	            var trips = this.state.data;
	            trip.id = Date.now();
	            var newTrips = trips.concat([trip]);
	            this.setState({ data: newTrips });
	            var data = new FormData();
	            data.append('userId', trip.userId);
	            data.append('from', trip.from);
	            data.append('to', trip.to);
	            data.append('date', trip.date);
	            data.append('time', trip.time);
	            data.append('numberOfSeats', trip.numberOfSeats);
	            data.append('car', trip.car);
	            data.append('yearsOfCar', trip.yearsOfCar);
	            var xhr = new XMLHttpRequest();
	            xhr.open('post', this.props.submitUrl, true);
	            xhr.onload = function () {
	                this.loadTripsFromServer();
	            }.bind(this);
	            xhr.send(data);
	        }
	    }, {
	        key: 'componentDidMount',
	        value: function componentDidMount() {
	            window.setInterval(this.loadTripsFromServer, this.props.pollInterval);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement('div', { className: 'tripBox' }, _react2.default.createElement('h1', null, 'Add a new trip'), '//                ', _react2.default.createElement(TripForm, { onTripSubmit: this.handleTripSubmit }), _react2.default.createElement('h1', null, 'Trips'), '//                ', _react2.default.createElement(TripList, { data: this.state.data }));
	        }
	    }]);
	
	    return TripBox;
	}(_react2.default.Component);
	/*
	class TripList extends React.Component{
	    render() {
	        var tripNodes = this.props.data.map(function(trip) {
	            return (
	                <Trip key={trip.id} userId={trip.userId} from={trip.from} to={trip.to} date={trip.date} time={trip.time} numberOfSeats={trip.numberOfSeats} car={trip.car} yearsOfCar={trip.yearsOfCar} />
	            );
	        });
	        return (
	            <div className="tripList">
	                {tripNodes}
	            </div>
	        );
	    }
	}
	class TripForm extends React.Component{
	    getInitialState() {
	        return {userId: '', from: '', to: '', date: '', time: '', numberOfSeats: '', car: '', yearsOfCar: ''};
	    },
	    handleUserIdChange(e) {
	        this.setState({userId: e.target.value});
	    },
	    handleFromChange(e) {
	        this.setState({from: e.target.value});
	    },
	    handleToChange(e) {
	        this.setState({to: e.target.value});
	    },
	    handleDateChange(e) {
	        this.setState({date: e.target.value});
	    },
	    handleTimeChange(e) {
	        this.setState({time: e.target.value});
	    },
	    handleNumberOfSeatsChange(e) {
	        this.setState({numberOfSeats: e.target.value});
	    },
	    handleCarChange(e) {
	        this.setState({car: e.target.value});
	    },
	    handleYearsOfCarChange(e) {
	        this.setState({yearsOfCar: e.target.value});
	    },
	    handleSubmit(e) {
	        e.preventDefault();
	        var userId          = this.state.userId.trim();
	        var from            = this.state.from.trim();
	        var to              = this.state.to.trim();
	        var date            = this.state.date.trim();
	        var time            = this.state.time.trim();
	        var numberOfSeats   = this.state.numberOfSeats.trim();
	        var car             = this.state.car.trim();
	        var yearsOfCar      = this.state.yearsOfCar.trim();
	        if (!userId || !from || !to || !date || !time || !numberOfSeats || !car || !yearsOfCar) {
	            return;
	        }
	        this.props.onTripSubmit({userId: userId, from: from, to: to, date: date, time: time, numberOfSeats: numberOfSeats, car: car, yearsOfCar: yearsOfCar});
	        this.setState({userId: '', from: '', to: '', date: '', time: '', numberOfSeats: '', car: '', yearsOfCar: ''});
	    },
	    render() {
	        return (
	            <form className="tripForm"  onSubmit={this.handleSubmit}>
	                <input type="number"    placeholder="Your id"           value={this.state.userId}           onChange={this.handleUserIdChange} />
	                <input type="text"      placeholder="Going from ..."    value={this.state.from}             onChange={this.handleFromChange} />
	                <input type="text"      placeholder="Going to ..."      value={this.state.to}               onChange={this.handleToChange} />
	                <input type="date"      placeholder="Going on ..."      value={this.state.date}             onChange={this.handleDateChange} />
	                <input type="time"      placeholder="Going at ..."      value={this.state.time}             onChange={this.handleTimeChange} />
	                <input type="number"    placeholder="Number of seats"   value={this.state.numberOfSeats}    onChange={this.handleNumberOfSeatsChange} />
	                <input type="text"      placeholder="Car"               value={this.state.car}              onChange={this.handleCarChange} />
	                <input type="number"    placeholder="Years of the car"  value={this.state.yearsOfCar}       onChange={this.handleYearsOfCarChange} />
	                <input type="submit"    value="Post" />
	            </form>
	        );
	    }
	}
	/*
	const tripStyle = {
	    padding: 10,
	    margin: 10,
	    color: "FF0000",
	    fontSize: "20"
	}
	
	class Trip extends React.Component{
	
	    render(){
	        return (
	            <div className="trip">
	                <h1 className="userId">
	                    {this.props.userId}
	                </h1>
	                <a className="from" style={tripStyle}>
	                    {this.props.from}
	                </a>
	                ->
	                <a className="to" style={tripStyle}>
	                    {this.props.to}
	                </a>
	                <p className="date">
	                    {this.props.date}
	                </p>
	                <p className="time">
	                    {this.props.time}
	                </p>
	                <p className="numberOfSeats">
	                    Seats left: {this.props.numberOfSeats}
	                </p>
	                <a className="car">
	                    {this.props.car} {this.props.yearsOfCar}
	                </a>
	
	
	             </div>
	        );
	    }
	}*/
	
	var _default = TripBox;
	exports.default = _default;
	/*export default Trip;
	export default TripList;
	export default TripForm;*/
	
	;
	
	var _temp = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }
	
	    __REACT_HOT_LOADER__.register(TripBox, 'TripBox', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js');
	
	    __REACT_HOT_LOADER__.register(_default, 'default', 'C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js');
	}();

	;
	;

	var _temp2 = function () {
	    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
	        return;
	    }

	    __REACT_HOT_LOADER__.register(_createClass, "_createClass", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_react2, "_react2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_axios2, "_axios2", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_interopRequireDefault, "_interopRequireDefault", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_classCallCheck, "_classCallCheck", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_possibleConstructorReturn, "_possibleConstructorReturn", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_inherits, "_inherits", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(TripBox, "TripBox", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_default, "_default", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");

	    __REACT_HOT_LOADER__.register(_temp, "_temp", "C:/Users/Ruta/Desktop/Vaziuoju-Vezu/src/components/Trip.js");
	}();

	;

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmlwLmpzPzgyZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVNO3dCQUNGOzt3QkFBYTsrQkFBQTs7aUhBRVg7O2VBQUssc0JBQXNCLE1BQUssb0JBQW9CLEtBQXBEO2dCQUNEOzs7OzsrQ0FDcUI7MEJBQ2xCOzs2QkFBTSxJQUFJLHFDQUFxQyxFQUFDLE1BQU0sVUFDckQsS0FBSyxVQUFDLE1BQ0w7d0JBQUssU0FBUyxFQUFDLE1BQ2Y7d0JBQUssUUFBUSxFQUFDLE1BQU0sT0FBSyxNQUN6Qjt5QkFBUSxJQUNUO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7Ozs4Q0FFQztrQkFDRDs7OzswQ0FDZ0IsTUFDYjtpQkFBSSxRQUFRLEtBQUssTUFDakI7a0JBQUssS0FBSyxLQUNWO2lCQUFJLFdBQVcsTUFBTSxPQUFPLENBQzVCO2tCQUFLLFNBQVMsRUFBQyxNQUNmO2lCQUFJLE9BQU8sSUFDWDtrQkFBSyxPQUFPLFVBQW9CLEtBQ2hDO2tCQUFLLE9BQU8sUUFBb0IsS0FDaEM7a0JBQUssT0FBTyxNQUFvQixLQUNoQztrQkFBSyxPQUFPLFFBQW9CLEtBQ2hDO2tCQUFLLE9BQU8sUUFBb0IsS0FDaEM7a0JBQUssT0FBTyxpQkFBb0IsS0FDaEM7a0JBQUssT0FBTyxPQUFvQixLQUNoQztrQkFBSyxPQUFPLGNBQW9CLEtBQ2hDO2lCQUFJLE1BQU0sSUFDVjtpQkFBSSxLQUFLLFFBQVEsS0FBSyxNQUFNLFdBQzVCO2lCQUFJLHFCQUNGO3NCQUNEO0FBRlksZUFFWCxLQUNGO2lCQUFJLEtBQ1A7Ozs7NkNBRUc7b0JBQU8sWUFBWSxLQUFLLHFCQUFxQixLQUFLLE1BQ3JEOzs7O2tDQUVHO29CQUNJLHVDQUFLLFdBQ0QsMEVBQ0Usb0RBQUMsWUFBUyxjQUFjLEtBQzFCLHlFQUNFLG9EQUFDLFlBQVMsTUFBTSxLQUFLLE1BR2xDOzs7OztHQXhEaUIsZ0JBQU07QUEwRDVCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBb0hlOztBQUNmOzs7Ozs7Ozs7OzttQ0EvS00iLCJmaWxlIjoiMC5mMDIwYWY1ZWVkZTU2ZGRiNzgwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcbmNsYXNzIFRyaXBCb3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLmxvYWRUcmlwc0Zyb21TZXJ2ZXIgPSB0aGlzLmxvYWRUcmlwc0Zyb21TZXJ2ZXIuYmluZCh0aGlzKTtcclxuICAgIH1cclxuICAgIGxvYWRUcmlwc0Zyb21TZXJ2ZXIoKSB7XHJcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvZ2V0QWxsVHJpcHMnLCB7bW9kZTogJ2NvcnMnfSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xyXG4gICAgICAgICAgdGhpcy5zdGF0ZSA9IHtkYXRhOiB0aGlzLnByb3BzLmluaXRpYWxEYXRhfTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIC8veGhyLm9wZW4oJ2dldCcsIHRoaXMucHJvcHMudXJsLCB0cnVlKTtcclxuICAgICAgICAvL3hoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xyXG4gICAgICAgIC8vfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8veGhyLnNlbmQoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICB0aGlzLmxvYWRUcmlwc0Zyb21TZXJ2ZXIoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVRyaXBTdWJtaXQodHJpcCkge1xyXG4gICAgICAgIHZhciB0cmlwcyA9IHRoaXMuc3RhdGUuZGF0YTtcclxuICAgICAgICB0cmlwLmlkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB2YXIgbmV3VHJpcHMgPSB0cmlwcy5jb25jYXQoW3RyaXBdKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBuZXdUcmlwc30pO1xyXG4gICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXJJZCcsICAgICAgICAgICB0cmlwLnVzZXJJZCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2Zyb20nLCAgICAgICAgICAgICB0cmlwLmZyb20pO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd0bycsICAgICAgICAgICAgICAgdHJpcC50byk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2RhdGUnLCAgICAgICAgICAgICB0cmlwLmRhdGUpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd0aW1lJywgICAgICAgICAgICAgdHJpcC50aW1lKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnbnVtYmVyT2ZTZWF0cycsICAgIHRyaXAubnVtYmVyT2ZTZWF0cyk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2NhcicsICAgICAgICAgICAgICB0cmlwLmNhcik7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3llYXJzT2ZDYXInLCAgICAgICB0cmlwLnllYXJzT2ZDYXIpO1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbigncG9zdCcsIHRoaXMucHJvcHMuc3VibWl0VXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRUcmlwc0Zyb21TZXJ2ZXIoKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5sb2FkVHJpcHNGcm9tU2VydmVyLCB0aGlzLnByb3BzLnBvbGxJbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwQm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QWRkIGEgbmV3IHRyaXA8L2gxPlxyXG4vLyAgICAgICAgICAgICAgICA8VHJpcEZvcm0gb25UcmlwU3VibWl0PXt0aGlzLmhhbmRsZVRyaXBTdWJtaXR9IC8+XHJcbiAgICAgICAgICAgICAgICA8aDE+VHJpcHM8L2gxPlxyXG4vLyAgICAgICAgICAgICAgICA8VHJpcExpc3QgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbi8qXHJcbmNsYXNzIFRyaXBMaXN0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB0cmlwTm9kZXMgPSB0aGlzLnByb3BzLmRhdGEubWFwKGZ1bmN0aW9uKHRyaXApIHtcclxuICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxUcmlwIGtleT17dHJpcC5pZH0gdXNlcklkPXt0cmlwLnVzZXJJZH0gZnJvbT17dHJpcC5mcm9tfSB0bz17dHJpcC50b30gZGF0ZT17dHJpcC5kYXRlfSB0aW1lPXt0cmlwLnRpbWV9IG51bWJlck9mU2VhdHM9e3RyaXAubnVtYmVyT2ZTZWF0c30gY2FyPXt0cmlwLmNhcn0geWVhcnNPZkNhcj17dHJpcC55ZWFyc09mQ2FyfSAvPlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcExpc3RcIj5cclxuICAgICAgICAgICAgICAgIHt0cmlwTm9kZXN9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgVHJpcEZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBnZXRJbml0aWFsU3RhdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHt1c2VySWQ6ICcnLCBmcm9tOiAnJywgdG86ICcnLCBkYXRlOiAnJywgdGltZTogJycsIG51bWJlck9mU2VhdHM6ICcnLCBjYXI6ICcnLCB5ZWFyc09mQ2FyOiAnJ307XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlVXNlcklkQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VySWQ6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRnJvbUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZnJvbTogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVUb0NoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dG86IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlRGF0ZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0ZTogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVUaW1lQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0aW1lOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZU51bWJlck9mU2VhdHNDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe251bWJlck9mU2VhdHM6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlQ2FyQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtjYXI6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlWWVhcnNPZkNhckNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7eWVhcnNPZkNhcjogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVTdWJtaXQoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgdXNlcklkICAgICAgICAgID0gdGhpcy5zdGF0ZS51c2VySWQudHJpbSgpO1xyXG4gICAgICAgIHZhciBmcm9tICAgICAgICAgICAgPSB0aGlzLnN0YXRlLmZyb20udHJpbSgpO1xyXG4gICAgICAgIHZhciB0byAgICAgICAgICAgICAgPSB0aGlzLnN0YXRlLnRvLnRyaW0oKTtcclxuICAgICAgICB2YXIgZGF0ZSAgICAgICAgICAgID0gdGhpcy5zdGF0ZS5kYXRlLnRyaW0oKTtcclxuICAgICAgICB2YXIgdGltZSAgICAgICAgICAgID0gdGhpcy5zdGF0ZS50aW1lLnRyaW0oKTtcclxuICAgICAgICB2YXIgbnVtYmVyT2ZTZWF0cyAgID0gdGhpcy5zdGF0ZS5udW1iZXJPZlNlYXRzLnRyaW0oKTtcclxuICAgICAgICB2YXIgY2FyICAgICAgICAgICAgID0gdGhpcy5zdGF0ZS5jYXIudHJpbSgpO1xyXG4gICAgICAgIHZhciB5ZWFyc09mQ2FyICAgICAgPSB0aGlzLnN0YXRlLnllYXJzT2ZDYXIudHJpbSgpO1xyXG4gICAgICAgIGlmICghdXNlcklkIHx8ICFmcm9tIHx8ICF0byB8fCAhZGF0ZSB8fCAhdGltZSB8fCAhbnVtYmVyT2ZTZWF0cyB8fCAhY2FyIHx8ICF5ZWFyc09mQ2FyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblRyaXBTdWJtaXQoe3VzZXJJZDogdXNlcklkLCBmcm9tOiBmcm9tLCB0bzogdG8sIGRhdGU6IGRhdGUsIHRpbWU6IHRpbWUsIG51bWJlck9mU2VhdHM6IG51bWJlck9mU2VhdHMsIGNhcjogY2FyLCB5ZWFyc09mQ2FyOiB5ZWFyc09mQ2FyfSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcklkOiAnJywgZnJvbTogJycsIHRvOiAnJywgZGF0ZTogJycsIHRpbWU6ICcnLCBudW1iZXJPZlNlYXRzOiAnJywgY2FyOiAnJywgeWVhcnNPZkNhcjogJyd9KTtcclxuICAgIH0sXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwidHJpcEZvcm1cIiAgb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgICAgcGxhY2Vob2xkZXI9XCJZb3VyIGlkXCIgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnVzZXJJZH0gICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJJZENoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICAgICAgcGxhY2Vob2xkZXI9XCJHb2luZyBmcm9tIC4uLlwiICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZyb219ICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUZyb21DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgICAgIHBsYWNlaG9sZGVyPVwiR29pbmcgdG8gLi4uXCIgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50b30gICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUb0NoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiICAgICAgcGxhY2Vob2xkZXI9XCJHb2luZyBvbiAuLi5cIiAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmRhdGV9ICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZURhdGVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRpbWVcIiAgICAgIHBsYWNlaG9sZGVyPVwiR29pbmcgYXQgLi4uXCIgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS50aW1lfSAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVUaW1lQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiAgICBwbGFjZWhvbGRlcj1cIk51bWJlciBvZiBzZWF0c1wiICAgdmFsdWU9e3RoaXMuc3RhdGUubnVtYmVyT2ZTZWF0c30gICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlTnVtYmVyT2ZTZWF0c0NoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICAgICAgcGxhY2Vob2xkZXI9XCJDYXJcIiAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmNhcn0gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNhckNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgICAgcGxhY2Vob2xkZXI9XCJZZWFycyBvZiB0aGUgY2FyXCIgIHZhbHVlPXt0aGlzLnN0YXRlLnllYXJzT2ZDYXJ9ICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVllYXJzT2ZDYXJDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiICAgIHZhbHVlPVwiUG9zdFwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbi8qXHJcbmNvbnN0IHRyaXBTdHlsZSA9IHtcclxuICAgIHBhZGRpbmc6IDEwLFxyXG4gICAgbWFyZ2luOiAxMCxcclxuICAgIGNvbG9yOiBcIkZGMDAwMFwiLFxyXG4gICAgZm9udFNpemU6IFwiMjBcIlxyXG59XHJcblxyXG5jbGFzcyBUcmlwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInVzZXJJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnVzZXJJZH1cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJmcm9tXCIgc3R5bGU9e3RyaXBTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZnJvbX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIC0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0b1wiIHN0eWxlPXt0cmlwU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRvfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmRhdGV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudGltZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm51bWJlck9mU2VhdHNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZWF0cyBsZWZ0OiB7dGhpcy5wcm9wcy5udW1iZXJPZlNlYXRzfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiY2FyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2FyfSB7dGhpcy5wcm9wcy55ZWFyc09mQ2FyfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuXHJcbiAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59Ki9cclxuZXhwb3J0IGRlZmF1bHQgVHJpcEJveDtcclxuLypleHBvcnQgZGVmYXVsdCBUcmlwO1xyXG5leHBvcnQgZGVmYXVsdCBUcmlwTGlzdDtcclxuZXhwb3J0IGRlZmF1bHQgVHJpcEZvcm07Ki9cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbXBvbmVudHMvVHJpcC5qcyJdLCJzb3VyY2VSb290IjoiIn0=