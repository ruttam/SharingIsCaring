import React from 'react';
import axios from 'axios';

class TripBox extends React.Component{
    constructor(){
      super();
      this.loadTripsFromServer = this.loadTripsFromServer.bind(this);
    }
    loadTripsFromServer() {
        axios.get('http://localhost:5000/api/user', {mode: 'cors'})
        .then((data) => {
          this.setState({data: data});
          //this.state = {data: this.props.initialData};
          console.log(data);
        }).catch((error) => {
          console.log('error: ', error)
        });
        //var xhr = new XMLHttpRequest();
        //xhr.open('get', this.props.url, true);
        //xhr.onload = function() {
        //    var data = JSON.parse(xhr.responseText);
        //    this.setState({data: data});
        //}.bind(this);
        //xhr.send();
    }
    componentWillMount(){
      this.loadTripsFromServer();
    }
    handleTripSubmit(trip) {
        var trips = this.state.data;
        trip.id = Date.now();
        var newTrips = trips.concat([trip]);
        this.setState({data: newTrips});
        var data = new FormData();
        data.append('userId',           trip.userId);
        data.append('from',             trip.from);
        data.append('to',               trip.to);
        data.append('date',             trip.date);
        data.append('time',             trip.time);
        data.append('numberOfSeats',    trip.numberOfSeats);
        data.append('car',              trip.car);
        data.append('yearsOfCar',       trip.yearsOfCar);
        var xhr = new XMLHttpRequest();
        xhr.open('post', this.props.submitUrl, true);
        xhr.onload = function() {
          this.loadTripsFromServer();
        }.bind(this);
        xhr.send(data);
    }
    // componentDidMount() {
    //     window.setInterval(this.loadTripsFromServer, this.props.pollInterval);
    // }
    render() {
        return (
            <div className="tripBox">
                <h1>Add a new trip</h1>
                {/*<TripForm onTripSubmit={this.handleTripSubmit} />*/}
                <h1>Trips</h1>
            </div>
        );
    }
}
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
export default TripBox;
/*export default Trip;
export default TripList;
export default TripForm;*/
