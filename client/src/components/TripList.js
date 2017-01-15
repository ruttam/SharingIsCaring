import React from 'react';
import axios from 'axios';
import classnames from 'classnames';
import { connect } from 'react-redux';
import Time from 'react-time';

import validateInput from '../validations/trip.js';
import TextFieldGroup from './common/TextFieldGroup.js';
import { createTrip } from '../actions/AuthActions.js';

const Trip = ({trip}) => {
  return (
    <div>
    <label>from {trip.from} to {trip.to}</label>
    <p>on {trip.date} at {trip.time}</p>
    <p>{trip.numberOfSeats} seats available</p>
    <p>Car: {trip.car}</p>
    </div>
  );
}

export const TripList = ({trips}) => {
  console.log(trips);
    const tripNode = trips.map((trip)=>{

      return (
          <div key={`trip-${trip.id}`} className="col-lg-6 col-lg-offset-3">
            <Trip trip={trip} />
          </div>
      );
    })
      return (<ul>{tripNode}</ul>);
  }
