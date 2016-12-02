import React from 'react';
import { connect } from 'react-redux';

import EmailLogin from './EmailLogin.js';
import FacebookLogin from './FacebookLogin.js';

const divStyle = {
  left: "30%"
}

class LoginPage extends React.Component {
  render() {
    const {isAuthenticated} = this.props.auth;
    const userLinks = (
      <ul className="nav navbar-nav">
        <li>
          <a href="#">Logout</a>
        </li>
      </ul>
    );
    return (
      <div className="row">
        <div className="col-lg-8" style={divStyle}>
          <EmailLogin />
          <FacebookLogin />
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
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

export default connect(mapStateToProps)(LoginPage);
