import React from 'react';
import FBLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import { facebookLoginRequest } from '../../actions/AuthActions.js';

const divStyle = {
  padding: "45px 0px 0px 15px"
}

class FacebookLogin extends React.Component{
  constructor(props) {
    super(props);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  responseFacebook(response){
    console.log(response);
    this.props.dispatch(facebookLoginRequest(response));
  }

  render() {
    return (
      <div style={divStyle} className="col-lg-6">
      <FBLogin
        appId="1841589546055063"
        autoLoad={false}
        fields="name, first_name, last_name, email"
        callback={ this.responseFacebook }
      />
      </div>
    )
  }
}

FacebookLogin.contextTypes = {
  router: React.PropTypes.object.isRequired
}

FacebookLogin.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(FacebookLogin);
