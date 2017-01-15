import React from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Time from 'react-time';

import validateInput from '../validations/trip.js';
import TextFieldGroup from './common/TextFieldGroup.js';
import { createTrip } from '../actions/AuthActions.js';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      numberOfSeats: '',
      date: '',
      time: '',
      car: '',
      errors: {},
      invalid: false
    };
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  _onSubmit(event) {
    event.preventDefault();
    let errors = {};
    if(this.isValid(this.state)) {
      this.setState({ errors: {} });
      this.props.dispatch(createTrip(this.state));
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }
  render() {
    const { errors } = this.state;
      return (
          <div className="col-lg-6 col-lg-offset-3">
              <h4>add a new trip</h4>
              <form onSubmit={this._onSubmit}>
                <div className={ classnames("form-group", { 'has-error': errors.from }) }>
                  <TextFieldGroup
                  onChange={this._onChange}
                  value={this.state.from}
                  placeholder="from"
                  field="from"
                  />
                  {errors.from && <div className="help-block">{ errors.from }</div>}
                </div>
                <div className={ classnames("form-group", { 'has-error': errors.to }) }>
                  <TextFieldGroup
                  onChange={this._onChange}
                  value={this.state.to}
                  placeholder="to"
                  field="to"
                  />
                  {errors.to && <div className="help-block">{ errors.to }</div>}
                </div>
                <div className={ classnames("form-group", { 'has-error': errors.numberOfSeats }) }>
                  <TextFieldGroup
                  onChange={this._onChange}
                  value={this.state.numberOfSeats}
                  placeholder="number of seats left"
                  field="numberOfSeats"
                  />
                  {errors.numberOfSeats && <div className="help-block">{ errors.numberOfSeats }</div>}
                </div>
                <div className={ classnames("form-group", { 'has-error': errors.date }) }>
                  <TextFieldGroup
                  onChange={this._onChange}
                  value={this.state.date}
                  placeholder="date of departure"
                  field="date"
                  type="date"
                  />
                  {errors.dateOfBirth && <div className="help-block">{ errors.date }</div>}
                </div>
                <div className={ classnames("form-group", { 'has-error': errors.time }) }>
                  <TextFieldGroup
                  onChange={this._onChange}
                  value={this.state.time}
                  placeholder="time of departure"
                  field="time"
                  type="time"
                  />
                  {errors.time && <div className="help-block">{ errors.time }</div>}
                </div>
                <div className={ classnames("form-group", { 'has-error': errors.car }) }>
                  <TextFieldGroup
                  onChange={this._onChange}
                  value={this.state.car}
                  placeholder="car"
                  field="car"
                  />
                  {errors.car && <div className="help-block">{ errors.car }</div>}
                </div>
                <div className="form-group">
                  <input className="btn .btn-primary" type="submit" value="save" />
                </div>
              </form>
          </div>
      );
  }
}

TripForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

TripForm.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(TripForm);
