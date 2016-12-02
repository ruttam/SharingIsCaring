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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9UcmlwLmpzPzgyZGIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQUVNO3dCQUNGOzt3QkFBYTsrQkFBQTs7aUhBRVg7O2VBQUssc0JBQXNCLE1BQUssb0JBQW9CLEtBQXBEO2dCQUNEOzs7OzsrQ0FDcUI7MEJBQ2xCOzs2QkFBTSxJQUFJLHFDQUFxQyxFQUFDLE1BQU0sVUFDckQsS0FBSyxVQUFDLE1BQ0w7d0JBQUssU0FBUyxFQUFDLE1BQ2Y7d0JBQUssUUFBUSxFQUFDLE1BQU0sT0FBSyxNQUN6Qjt5QkFBUSxJQUNUO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDs7Ozs4Q0FFQztrQkFDRDs7OzswQ0FDZ0IsTUFDYjtpQkFBSSxRQUFRLEtBQUssTUFDakI7a0JBQUssS0FBSyxLQUNWO2lCQUFJLFdBQVcsTUFBTSxPQUFPLENBQzVCO2tCQUFLLFNBQVMsRUFBQyxNQUNmO2lCQUFJLE9BQU8sSUFDWDtrQkFBSyxPQUFPLFVBQW9CLEtBQ2hDO2tCQUFLLE9BQU8sUUFBb0IsS0FDaEM7a0JBQUssT0FBTyxNQUFvQixLQUNoQztrQkFBSyxPQUFPLFFBQW9CLEtBQ2hDO2tCQUFLLE9BQU8sUUFBb0IsS0FDaEM7a0JBQUssT0FBTyxpQkFBb0IsS0FDaEM7a0JBQUssT0FBTyxPQUFvQixLQUNoQztrQkFBSyxPQUFPLGNBQW9CLEtBQ2hDO2lCQUFJLE1BQU0sSUFDVjtpQkFBSSxLQUFLLFFBQVEsS0FBSyxNQUFNLFdBQzVCO2lCQUFJLHFCQUNGO3NCQUNEO0FBRlksZUFFWCxLQUNGO2lCQUFJLEtBQ1A7Ozs7NkNBRUc7b0JBQU8sWUFBWSxLQUFLLHFCQUFxQixLQUFLLE1BQ3JEOzs7O2tDQUVHO29CQUNJLHVDQUFLLFdBQ0QsdURBRUEsNkRBR1g7Ozs7O0dBdkRpQixnQkFBTTtBQXlENUI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQW9IZTs7QUFDZjs7Ozs7Ozs7Ozs7bUNBL0tNIiwiZmlsZSI6IjAuYTZiMjA5MWUzN2MzMmQ1MWYxYWQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jbGFzcyBUcmlwQm94IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5sb2FkVHJpcHNGcm9tU2VydmVyID0gdGhpcy5sb2FkVHJpcHNGcm9tU2VydmVyLmJpbmQodGhpcyk7XHJcbiAgICB9XHJcbiAgICBsb2FkVHJpcHNGcm9tU2VydmVyKCkge1xyXG4gICAgICAgIGF4aW9zLmdldCgnaHR0cDovL2xvY2FsaG9zdDo1MDAwL2dldEFsbFRyaXBzJywge21vZGU6ICdjb3JzJ30pXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcclxuICAgICAgICAgIHRoaXMuc3RhdGUgPSB7ZGF0YTogdGhpcy5wcm9wcy5pbml0aWFsRGF0YX07XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvL3ZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAvL3hoci5vcGVuKCdnZXQnLCB0aGlzLnByb3BzLnVybCwgdHJ1ZSk7XHJcbiAgICAgICAgLy94aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gICAgdmFyIGRhdGEgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgIC8vICAgIHRoaXMuc2V0U3RhdGUoe2RhdGE6IGRhdGF9KTtcclxuICAgICAgICAvL30uYmluZCh0aGlzKTtcclxuICAgICAgICAvL3hoci5zZW5kKCk7XHJcbiAgICB9XHJcbiAgICBjb21wb25lbnRXaWxsTW91bnQoKXtcclxuICAgICAgdGhpcy5sb2FkVHJpcHNGcm9tU2VydmVyKCk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVUcmlwU3VibWl0KHRyaXApIHtcclxuICAgICAgICB2YXIgdHJpcHMgPSB0aGlzLnN0YXRlLmRhdGE7XHJcbiAgICAgICAgdHJpcC5pZCA9IERhdGUubm93KCk7XHJcbiAgICAgICAgdmFyIG5ld1RyaXBzID0gdHJpcHMuY29uY2F0KFt0cmlwXSk7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogbmV3VHJpcHN9KTtcclxuICAgICAgICB2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd1c2VySWQnLCAgICAgICAgICAgdHJpcC51c2VySWQpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdmcm9tJywgICAgICAgICAgICAgdHJpcC5mcm9tKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgndG8nLCAgICAgICAgICAgICAgIHRyaXAudG8pO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdkYXRlJywgICAgICAgICAgICAgdHJpcC5kYXRlKTtcclxuICAgICAgICBkYXRhLmFwcGVuZCgndGltZScsICAgICAgICAgICAgIHRyaXAudGltZSk7XHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ251bWJlck9mU2VhdHMnLCAgICB0cmlwLm51bWJlck9mU2VhdHMpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdjYXInLCAgICAgICAgICAgICAgdHJpcC5jYXIpO1xyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd5ZWFyc09mQ2FyJywgICAgICAgdHJpcC55ZWFyc09mQ2FyKTtcclxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgeGhyLm9wZW4oJ3Bvc3QnLCB0aGlzLnByb3BzLnN1Ym1pdFVybCwgdHJ1ZSk7XHJcbiAgICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgdGhpcy5sb2FkVHJpcHNGcm9tU2VydmVyKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHhoci5zZW5kKGRhdGEpO1xyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKHRoaXMubG9hZFRyaXBzRnJvbVNlcnZlciwgdGhpcy5wcm9wcy5wb2xsSW50ZXJ2YWwpO1xyXG4gICAgfVxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHJpcEJveFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPkFkZCBhIG5ldyB0cmlwPC9oMT5cclxuICAgICAgICAgICAgICAgIHsvKjxUcmlwRm9ybSBvblRyaXBTdWJtaXQ9e3RoaXMuaGFuZGxlVHJpcFN1Ym1pdH0gLz4qL31cclxuICAgICAgICAgICAgICAgIDxoMT5UcmlwczwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuLy8gICAgICAgICAgICAgICAgPFRyaXBMaXN0IGRhdGE9e3RoaXMuc3RhdGUuZGF0YX0gLz5cclxuLypcclxuY2xhc3MgVHJpcExpc3QgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHRyaXBOb2RlcyA9IHRoaXMucHJvcHMuZGF0YS5tYXAoZnVuY3Rpb24odHJpcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgPFRyaXAga2V5PXt0cmlwLmlkfSB1c2VySWQ9e3RyaXAudXNlcklkfSBmcm9tPXt0cmlwLmZyb219IHRvPXt0cmlwLnRvfSBkYXRlPXt0cmlwLmRhdGV9IHRpbWU9e3RyaXAudGltZX0gbnVtYmVyT2ZTZWF0cz17dHJpcC5udW1iZXJPZlNlYXRzfSBjYXI9e3RyaXAuY2FyfSB5ZWFyc09mQ2FyPXt0cmlwLnllYXJzT2ZDYXJ9IC8+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAge3RyaXBOb2Rlc31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBUcmlwRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGdldEluaXRpYWxTdGF0ZSgpIHtcclxuICAgICAgICByZXR1cm4ge3VzZXJJZDogJycsIGZyb206ICcnLCB0bzogJycsIGRhdGU6ICcnLCB0aW1lOiAnJywgbnVtYmVyT2ZTZWF0czogJycsIGNhcjogJycsIHllYXJzT2ZDYXI6ICcnfTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVVc2VySWRDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3VzZXJJZDogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVGcm9tQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtmcm9tOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVRvQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt0bzogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEYXRlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRlOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVRpbWVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3RpbWU6IGUudGFyZ2V0LnZhbHVlfSk7XHJcbiAgICB9LFxyXG4gICAgaGFuZGxlTnVtYmVyT2ZTZWF0c0NoYW5nZShlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bnVtYmVyT2ZTZWF0czogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVDYXJDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhcjogZS50YXJnZXQudmFsdWV9KTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVZZWFyc09mQ2FyQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt5ZWFyc09mQ2FyOiBlLnRhcmdldC52YWx1ZX0pO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciB1c2VySWQgICAgICAgICAgPSB0aGlzLnN0YXRlLnVzZXJJZC50cmltKCk7XHJcbiAgICAgICAgdmFyIGZyb20gICAgICAgICAgICA9IHRoaXMuc3RhdGUuZnJvbS50cmltKCk7XHJcbiAgICAgICAgdmFyIHRvICAgICAgICAgICAgICA9IHRoaXMuc3RhdGUudG8udHJpbSgpO1xyXG4gICAgICAgIHZhciBkYXRlICAgICAgICAgICAgPSB0aGlzLnN0YXRlLmRhdGUudHJpbSgpO1xyXG4gICAgICAgIHZhciB0aW1lICAgICAgICAgICAgPSB0aGlzLnN0YXRlLnRpbWUudHJpbSgpO1xyXG4gICAgICAgIHZhciBudW1iZXJPZlNlYXRzICAgPSB0aGlzLnN0YXRlLm51bWJlck9mU2VhdHMudHJpbSgpO1xyXG4gICAgICAgIHZhciBjYXIgICAgICAgICAgICAgPSB0aGlzLnN0YXRlLmNhci50cmltKCk7XHJcbiAgICAgICAgdmFyIHllYXJzT2ZDYXIgICAgICA9IHRoaXMuc3RhdGUueWVhcnNPZkNhci50cmltKCk7XHJcbiAgICAgICAgaWYgKCF1c2VySWQgfHwgIWZyb20gfHwgIXRvIHx8ICFkYXRlIHx8ICF0aW1lIHx8ICFudW1iZXJPZlNlYXRzIHx8ICFjYXIgfHwgIXllYXJzT2ZDYXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzLm9uVHJpcFN1Ym1pdCh7dXNlcklkOiB1c2VySWQsIGZyb206IGZyb20sIHRvOiB0bywgZGF0ZTogZGF0ZSwgdGltZTogdGltZSwgbnVtYmVyT2ZTZWF0czogbnVtYmVyT2ZTZWF0cywgY2FyOiBjYXIsIHllYXJzT2ZDYXI6IHllYXJzT2ZDYXJ9KTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VySWQ6ICcnLCBmcm9tOiAnJywgdG86ICcnLCBkYXRlOiAnJywgdGltZTogJycsIG51bWJlck9mU2VhdHM6ICcnLCBjYXI6ICcnLCB5ZWFyc09mQ2FyOiAnJ30pO1xyXG4gICAgfSxcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ0cmlwRm9ybVwiICBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiAgICBwbGFjZWhvbGRlcj1cIllvdXIgaWRcIiAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcklkfSAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlVXNlcklkQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICAgICBwbGFjZWhvbGRlcj1cIkdvaW5nIGZyb20gLi4uXCIgICAgdmFsdWU9e3RoaXMuc3RhdGUuZnJvbX0gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRnJvbUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICAgICAgcGxhY2Vob2xkZXI9XCJHb2luZyB0byAuLi5cIiAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRvfSAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRvQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgICAgICBwbGFjZWhvbGRlcj1cIkdvaW5nIG9uIC4uLlwiICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZGF0ZX0gICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlRGF0ZUNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGltZVwiICAgICAgcGxhY2Vob2xkZXI9XCJHb2luZyBhdCAuLi5cIiAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnRpbWV9ICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVRpbWVDaGFuZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiICAgIHBsYWNlaG9sZGVyPVwiTnVtYmVyIG9mIHNlYXRzXCIgICB2YWx1ZT17dGhpcy5zdGF0ZS5udW1iZXJPZlNlYXRzfSAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVOdW1iZXJPZlNlYXRzQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgICAgICBwbGFjZWhvbGRlcj1cIkNhclwiICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuY2FyfSAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2FyQ2hhbmdlfSAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiAgICBwbGFjZWhvbGRlcj1cIlllYXJzIG9mIHRoZSBjYXJcIiAgdmFsdWU9e3RoaXMuc3RhdGUueWVhcnNPZkNhcn0gICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlWWVhcnNPZkNhckNoYW5nZX0gLz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgICAgdmFsdWU9XCJQb3N0XCIgLz5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuLypcclxuY29uc3QgdHJpcFN0eWxlID0ge1xyXG4gICAgcGFkZGluZzogMTAsXHJcbiAgICBtYXJnaW46IDEwLFxyXG4gICAgY29sb3I6IFwiRkYwMDAwXCIsXHJcbiAgICBmb250U2l6ZTogXCIyMFwiXHJcbn1cclxuXHJcbmNsYXNzIFRyaXAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0cmlwXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidXNlcklkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudXNlcklkfVxyXG4gICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZyb21cIiBzdHlsZT17dHJpcFN0eWxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5mcm9tfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgLT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRvXCIgc3R5bGU9e3RyaXBTdHlsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMudG99XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuZGF0ZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy50aW1lfVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibnVtYmVyT2ZTZWF0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFNlYXRzIGxlZnQ6IHt0aGlzLnByb3BzLm51bWJlck9mU2VhdHN9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jYXJ9IHt0aGlzLnByb3BzLnllYXJzT2ZDYXJ9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcblxyXG5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0qL1xyXG5leHBvcnQgZGVmYXVsdCBUcmlwQm94O1xyXG4vKmV4cG9ydCBkZWZhdWx0IFRyaXA7XHJcbmV4cG9ydCBkZWZhdWx0IFRyaXBMaXN0O1xyXG5leHBvcnQgZGVmYXVsdCBUcmlwRm9ybTsqL1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvY29tcG9uZW50cy9UcmlwLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==