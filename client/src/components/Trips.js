import React from 'react';
import {connect} from 'react-redux';
import ProfilePicture from './ProfilePicture.js';
import ProfileInfo from './ProfileInfo.js';

const divStyle = {
  position: "absolute",
  top: "30%",
  left: "30%"
}

class Profile extends React.Component {

  render() {
    const {isAuthenticated} = this.props.auth;
    const userLinks = (
      <ul className="nav navbar-nav">
        <li><a href="#">Logout</a></li>
        </ul>
    );
    return (
      <div id="wrapper">
        <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        Važiuoju-Vežu
                    </a>
                </li>
                <li>
                    <a href="#">My Profile</a>
                </li>
                <li>
                    <a href="#">My Trips</a>
                </li>
                <li>
                    <a href="#">Trips</a>
                </li>
            </ul>
        </div>

        <div id="page-content-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">


                      <div className="row">
                        <ProfilePicture />
                        <Trip />
                      </div>


                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}

Profile.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
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

export default connect(mapStateToProps)(Profile);
