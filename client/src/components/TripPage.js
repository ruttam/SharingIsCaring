import React from 'react';
import { connect } from 'react-redux';

import TripForm from './TripForm.js';
import { TripList } from './TripList.js';
import { getTrips } from '../actions/AuthActions.js';

const divStyle = {
  position: "absolute",
  top: "30%",
  left: "30%"
}

class TripPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentWillMount(){
    this.props.dispatch(getTrips());
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const data = this.props.tripStore.trips;
    console.log(data);
    return (
      <div className="row">
        { this.props.auth.isAuthenticated ? <TripForm /> : null }
          <TripList trips={data} />
      </div>
    );
  }
}

TripPage.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth,
    tripStore: state.tripStore
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
    routerActions: bindActionCreators({pushState}, dispatch)
  }
}

export default connect(mapStateToProps)(TripPage);
