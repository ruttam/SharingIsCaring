import React from 'react';
import {connect} from 'react-redux';
import EmailLogin from './EmailLogin.js';
import FacebookLoginButton from './FacebookLoginButton.js';


const divStyle = {
  position: "absolute",
  top: "30%",
  left: "30%"
}

class Login extends React.Component {


  render() {
    const {isAuthenticated} = this.props.auth;
    const userLinks = (
      <ul className="nav navbar-nav">
        <li><a href="#">Logout</a></li>
        </ul>
    );
    return (
      <div style={divStyle}>
      <div className="row">
        <EmailLogin />
        <FacebookLoginButton />
      </div>
      </div>
    );
  }
}

Login.propTypes = {
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

export default connect(mapStateToProps)(Login);
