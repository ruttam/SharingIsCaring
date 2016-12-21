import React from 'react';
import { connect } from 'react-redux';

import ProfilePicture from './ProfilePicture.js';
import ProfileInfo from './ProfileInfo.js';

const divStyle = {
  position: "absolute",
  top: "30%",
  left: "30%"
}

class ProfilePage extends React.Component {
  render() {
    const userLinks = (
      <ul className="nav navbar-nav">
        <li><a href="#">Logout</a></li>
      </ul>
    );
    return (
      <div className="row">
        <div className="col-lg-8 col-lg-offset-3">
          <div className="row">
            <ProfilePicture />
            <ProfileInfo />
          </div>
        </div>
      </div>
    );
  }
}

ProfilePage.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(LoginActions, dispatch),
    routerActions: bindActionCreators({pushState}, dispatch)
  }
}

export default connect(mapStateToProps)(ProfilePage);
