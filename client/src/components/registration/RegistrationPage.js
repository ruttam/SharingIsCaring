import React from 'react';
import { connect } from 'react-redux';

import Registration from './Registration.js';
import { registrationRequest } from '../actions/RegistrationActions.js';
import { addAlertMessage } from '../actions/AlertMessages.js';

class RegistrationPage extends React.Component {
  render() {
    const { registrationRequest, addAlertMessage } = this.props;
    return (
        <div className="row">
          <div className="col-lg-4 col-lg-offset-4">
            <Registration
              registrationRequest={registrationRequest}
              addAlertMessage={addAlertMessage}
            />
          </div>
        </div>
    );
  }
}

RegistrationPage.propTypes = {
  registrationRequest: React.PropTypes.func.isRequired,
  addAlertMessage: React.PropTypes.func.isRequired
}

export default connect(null, { registrationRequest, addAlertMessage })(RegistrationPage);
