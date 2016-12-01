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
	
	            _axios2.default.get('http://localhost:5000/api/user', { mode: 'cors' }).then(function (data) {
	                _this2.setState({ data: data });
	                _this2.state = { data: _this2.props.initialData };
	                console.log(data);
	            }).catch(function (error) {
	                console.log('OUR ERROR -----------', error);
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
	            return _react2.default.createElement('div', { className: 'tripBox' }, _react2.default.createElement('h1', null, 'Add a new trip'), _react2.default.createElement('h1', null, 'Trips'));
	        }
	    }]);
	
	    return TripBox;
	}(_react2.default.Component);
	//                <TripList data={this.state.data} />
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmlwLmpzPzgyZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVNO3dCQUNGOzt3QkFBYTsrQkFBQTs7aUhBRVg7O2VBQUssc0JBQXNCLE1BQUssb0JBQW9CLEtBQXBEO2dCQUNEOzs7OzsrQ0FDcUI7MEJBQ2xCOzs2QkFBTSxJQUFJLGtDQUFrQyxFQUFDLE1BQU0sVUFDbEQsS0FBSyxVQUFDLE1BQ0w7d0JBQUssU0FBUyxFQUFDLE1BQ2Y7d0JBQUssUUFBUSxFQUFDLE1BQU0sT0FBSyxNQUN6Qjt5QkFBUSxJQUNUO0FBTEQsZ0JBS0csTUFBTSxVQUFDLE9BQ1I7eUJBQVEsSUFBSSx5QkFDYjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0g7Ozs7OENBRUM7a0JBQ0Q7Ozs7MENBQ2dCLE1BQ2I7aUJBQUksUUFBUSxLQUFLLE1BQ2pCO2tCQUFLLEtBQUssS0FDVjtpQkFBSSxXQUFXLE1BQU0sT0FBTyxDQUM1QjtrQkFBSyxTQUFTLEVBQUMsTUFDZjtpQkFBSSxPQUFPLElBQ1g7a0JBQUssT0FBTyxVQUFvQixLQUNoQztrQkFBSyxPQUFPLFFBQW9CLEtBQ2hDO2tCQUFLLE9BQU8sTUFBb0IsS0FDaEM7a0JBQUssT0FBTyxRQUFvQixLQUNoQztrQkFBSyxPQUFPLFFBQW9CLEtBQ2hDO2tCQUFLLE9BQU8saUJBQW9CLEtBQ2hDO2tCQUFLLE9BQU8sT0FBb0IsS0FDaEM7a0JBQUssT0FBTyxjQUFvQixLQUNoQztpQkFBSSxNQUFNLElBQ1Y7aUJBQUksS0FBSyxRQUFRLEtBQUssTUFBTSxXQUM1QjtpQkFBSSxxQkFDRjtzQkFDRDtBQUZZLGVBRVgsS0FDRjtpQkFBSSxLQUNQOzs7OzZDQUVHO29CQUFPLFlBQVksS0FBSyxxQkFBcUIsS0FBSyxNQUNyRDs7OztrQ0FFRztvQkFDSSx1Q0FBSyxXQUNELHVEQUVBLDZEQUdYOzs7OztHQXpEaUIsZ0JBQU07QUEyRDVCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFvSGU7O0FBQ2Y7Ozs7Ozs7Ozs7O21DQWpMTSIsImZpbGUiOiIwLmRiYWVmNzRiNDhmZTE4YjIyOWYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuY2xhc3MgVHJpcEJveCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMubG9hZFRyaXBzRnJvbVNlcnZlciA9IHRoaXMubG9hZFRyaXBzRnJvbVNlcnZlci5iaW5kKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgbG9hZFRyaXBzRnJvbVNlcnZlcigpIHtcclxuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9hcGkvdXNlcicsIHttb2RlOiAnY29ycyd9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBkYXRhfSk7XHJcbiAgICAgICAgICB0aGlzLnN0YXRlID0ge2RhdGE6IHRoaXMucHJvcHMuaW5pdGlhbERhdGF9O1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnT1VSIEVSUk9SIC0tLS0tLS0tLS0tJywgZXJyb3IpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIC8veGhyLm9wZW4oJ2dldCcsIHRoaXMucHJvcHMudXJsLCB0cnVlKTtcclxuICAgICAgICAvL3hoci5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgLy8gICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogZGF0YX0pO1xyXG4gICAgICAgIC8vfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8veGhyLnNlbmQoKTtcclxuICAgIH1cclxuICAgIGNvbXBvbmVudFdpbGxNb3VudCgpe1xyXG4gICAgICB0aGlzLmxvYWRUcmlwc0Zyb21TZXJ2ZXIoKTtcclxuICAgIH1cclxuICAgIGhhbmRsZVRyaXBTdWJtaXQodHJpcCkge1xyXG4gICAgICAgIHZhciB0cmlwcyA9IHRoaXMuc3RhdGUuZGF0YTtcclxuICAgICAgICB0cmlwLmlkID0gRGF0ZS5ub3coKTtcclxuICAgICAgICB2YXIgbmV3VHJpcHMgPSB0cmlwcy5jb25jYXQoW3RyaXBdKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiBuZXdUcmlwc30pO1xyXG4gICAgICAgIHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3VzZXJJZCcsICAgICAgICAgICB0cmlwLnVzZXJJZCk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2Zyb20nLCAgICAgICAgICAgICB0cmlwLmZyb20pO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd0bycsICAgICAgICAgICAgICAgdHJpcC50byk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2RhdGUnLCAgICAgICAgICAgICB0cmlwLmRhdGUpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd0aW1lJywgICAgICAgICAgICAgdHJpcC50aW1lKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgnbnVtYmVyT2ZTZWF0cycsICAgIHRyaXAubnVtYmVyT2ZTZWF0cyk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ2NhcicsICAgICAgICAgICAgICB0cmlwLmNhcik7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3llYXJzT2ZDYXInLCAgICAgICB0cmlwLnllYXJzT2ZDYXIpO1xyXG4gICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICB4aHIub3BlbigncG9zdCcsIHRoaXMucHJvcHMuc3VibWl0VXJsLCB0cnVlKTtcclxuICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWRUcmlwc0Zyb21TZXJ2ZXIoKTtcclxuICAgICAgICB9LmJpbmQodGhpcyk7XHJcbiAgICAgICAgeGhyLnNlbmQoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwodGhpcy5sb2FkVHJpcHNGcm9tU2VydmVyLCB0aGlzLnByb3BzLnBvbGxJbnRlcnZhbCk7XHJcbiAgICB9XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwQm94XCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+QWRkIGEgbmV3IHRyaXA8L2gxPlxyXG4gICAgICAgICAgICAgICAgey8qPFRyaXBGb3JtIG9uVHJpcFN1Ym1pdD17dGhpcy5oYW5kbGVUcmlwU3VibWl0fSAvPiovfVxyXG4gICAgICAgICAgICAgICAgPGgxPlRyaXBzPC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4vLyAgICAgICAgICAgICAgICA8VHJpcExpc3QgZGF0YT17dGhpcy5zdGF0ZS5kYXRhfSAvPlxyXG4vKlxyXG5jbGFzcyBUcmlwTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgdHJpcE5vZGVzID0gdGhpcy5wcm9wcy5kYXRhLm1hcChmdW5jdGlvbih0cmlwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8VHJpcCBrZXk9e3RyaXAuaWR9IHVzZXJJZD17dHJpcC51c2VySWR9IGZyb209e3RyaXAuZnJvbX0gdG89e3RyaXAudG99IGRhdGU9e3RyaXAuZGF0ZX0gdGltZT17dHJpcC50aW1lfSBudW1iZXJPZlNlYXRzPXt0cmlwLm51bWJlck9mU2VhdHN9IGNhcj17dHJpcC5jYXJ9IHllYXJzT2ZDYXI9e3RyaXAueWVhcnNPZkNhcn0gLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXBMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICB7dHJpcE5vZGVzfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFRyaXBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgZ2V0SW5pdGlhbFN0YXRlKCkge1xyXG4gICAgICAgIHJldHVybiB7dXNlcklkOiAnJywgZnJvbTogJycsIHRvOiAnJywgZGF0ZTogJycsIHRpbWU6ICcnLCBudW1iZXJPZlNlYXRzOiAnJywgY2FyOiAnJywgeWVhcnNPZkNhcjogJyd9O1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVVzZXJJZENoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dXNlcklkOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUZyb21DaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2Zyb206IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlVG9DaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RvOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZURhdGVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlVGltZUNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7dGltZTogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVOdW1iZXJPZlNlYXRzQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtudW1iZXJPZlNlYXRzOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUNhckNoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FyOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVllYXJzT2ZDYXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3llYXJzT2ZDYXI6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHVzZXJJZCAgICAgICAgICA9IHRoaXMuc3RhdGUudXNlcklkLnRyaW0oKTtcclxuICAgICAgICB2YXIgZnJvbSAgICAgICAgICAgID0gdGhpcy5zdGF0ZS5mcm9tLnRyaW0oKTtcclxuICAgICAgICB2YXIgdG8gICAgICAgICAgICAgID0gdGhpcy5zdGF0ZS50by50cmltKCk7XHJcbiAgICAgICAgdmFyIGRhdGUgICAgICAgICAgICA9IHRoaXMuc3RhdGUuZGF0ZS50cmltKCk7XHJcbiAgICAgICAgdmFyIHRpbWUgICAgICAgICAgICA9IHRoaXMuc3RhdGUudGltZS50cmltKCk7XHJcbiAgICAgICAgdmFyIG51bWJlck9mU2VhdHMgICA9IHRoaXMuc3RhdGUubnVtYmVyT2ZTZWF0cy50cmltKCk7XHJcbiAgICAgICAgdmFyIGNhciAgICAgICAgICAgICA9IHRoaXMuc3RhdGUuY2FyLnRyaW0oKTtcclxuICAgICAgICB2YXIgeWVhcnNPZkNhciAgICAgID0gdGhpcy5zdGF0ZS55ZWFyc09mQ2FyLnRyaW0oKTtcclxuICAgICAgICBpZiAoIXVzZXJJZCB8fCAhZnJvbSB8fCAhdG8gfHwgIWRhdGUgfHwgIXRpbWUgfHwgIW51bWJlck9mU2VhdHMgfHwgIWNhciB8fCAheWVhcnNPZkNhcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMub25UcmlwU3VibWl0KHt1c2VySWQ6IHVzZXJJZCwgZnJvbTogZnJvbSwgdG86IHRvLCBkYXRlOiBkYXRlLCB0aW1lOiB0aW1lLCBudW1iZXJPZlNlYXRzOiBudW1iZXJPZlNlYXRzLCBjYXI6IGNhciwgeWVhcnNPZkNhcjogeWVhcnNPZkNhcn0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJJZDogJycsIGZyb206ICcnLCB0bzogJycsIGRhdGU6ICcnLCB0aW1lOiAnJywgbnVtYmVyT2ZTZWF0czogJycsIGNhcjogJycsIHllYXJzT2ZDYXI6ICcnfSk7XHJcbiAgICB9LFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInRyaXBGb3JtXCIgIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiICAgIHBsYWNlaG9sZGVyPVwiWW91ciBpZFwiICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VySWR9ICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VySWRDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgICAgIHBsYWNlaG9sZGVyPVwiR29pbmcgZnJvbSAuLi5cIiAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mcm9tfSAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVGcm9tQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICAgICBwbGFjZWhvbGRlcj1cIkdvaW5nIHRvIC4uLlwiICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudG99ICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVG9DaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiAgICAgIHBsYWNlaG9sZGVyPVwiR29pbmcgb24gLi4uXCIgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5kYXRlfSAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVEYXRlQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0aW1lXCIgICAgICBwbGFjZWhvbGRlcj1cIkdvaW5nIGF0IC4uLlwiICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudGltZX0gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVGltZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwibnVtYmVyXCIgICAgcGxhY2Vob2xkZXI9XCJOdW1iZXIgb2Ygc2VhdHNcIiAgIHZhbHVlPXt0aGlzLnN0YXRlLm51bWJlck9mU2VhdHN9ICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZU51bWJlck9mU2VhdHNDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAgICAgIHBsYWNlaG9sZGVyPVwiQ2FyXCIgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5jYXJ9ICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDYXJDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiICAgIHBsYWNlaG9sZGVyPVwiWWVhcnMgb2YgdGhlIGNhclwiICB2YWx1ZT17dGhpcy5zdGF0ZS55ZWFyc09mQ2FyfSAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVZZWFyc09mQ2FyQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiAgICB2YWx1ZT1cIlBvc3RcIiAvPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4vKlxyXG5jb25zdCB0cmlwU3R5bGUgPSB7XHJcbiAgICBwYWRkaW5nOiAxMCxcclxuICAgIG1hcmdpbjogMTAsXHJcbiAgICBjb2xvcjogXCJGRjAwMDBcIixcclxuICAgIGZvbnRTaXplOiBcIjIwXCJcclxufVxyXG5cclxuY2xhc3MgVHJpcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRyaXBcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1c2VySWRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VySWR9XHJcbiAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZnJvbVwiIHN0eWxlPXt0cmlwU3R5bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmZyb219XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAtPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidG9cIiBzdHlsZT17dHJpcFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50b31cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5kYXRlfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnRpbWV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJudW1iZXJPZlNlYXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgU2VhdHMgbGVmdDoge3RoaXMucHJvcHMubnVtYmVyT2ZTZWF0c31cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImNhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNhcn0ge3RoaXMucHJvcHMueWVhcnNPZkNhcn1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuXHJcblxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSovXHJcbmV4cG9ydCBkZWZhdWx0IFRyaXBCb3g7XHJcbi8qZXhwb3J0IGRlZmF1bHQgVHJpcDtcclxuZXhwb3J0IGRlZmF1bHQgVHJpcExpc3Q7XHJcbmV4cG9ydCBkZWZhdWx0IFRyaXBGb3JtOyovXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb25lbnRzL1RyaXAuanMiXSwic291cmNlUm9vdCI6IiJ9