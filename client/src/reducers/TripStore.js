import isEmpty from 'lodash/isEmpty';

const initialState = {
  trips: []
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_TRIPS':
      return {
        trips: action.trips
      }
      case 'TRIP_CREATED':
        return Object.assign({}, state, {trips: [action.trips, ...state.trips]});
    default: return state;
  }
}
