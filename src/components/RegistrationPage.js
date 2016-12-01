import React from 'react';
import Registration from './Registration.js';
import {connect} from 'react-redux';
import {registrationRequest, isEmailExists} from '../actions/RegistrationActions.js';
import {addFlashMessage} from '../actions/FlashMessages.js';

const divStyle = {
  paddingTop: "10%"
}

class RegistrationPage extends React.Component {
  render(){
    const {registrationRequest, addFlashMessage, isEmailExists} = this.props;
    return(
      <div style={divStyle}>
      <div className="row">
        <div className="col-lg-4 col-lg-offset-4">
          <Registration
            registrationRequest={registrationRequest}
            addFlashMessage={addFlashMessage}
            isEmailExists={isEmailExists}
          />
          </div>
          </div>
          </div>
    );
  }
}

RegistrationPage.propTypes = {
  registrationRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isEmailExists: React.PropTypes.func.isRequired
}

export default connect(null, {registrationRequest, addFlashMessage, isEmailExists})(RegistrationPage);
// export default RegistrationPage;
