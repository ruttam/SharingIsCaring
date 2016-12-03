import React from 'react';
import { connect } from 'react-redux';
import AlertMessage from './AlertMessage.js';
import { deleteAlertMessage } from '../../actions/AlertMessages.js'

class AlertMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <AlertMessage key={message.id} message={message} deleteAlertMessage={this.props.deleteAlertMessage} />
    );
    return (
      <div>
        {messages}
      </div>
    );
  }
}

AlertMessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteAlertMessage: React.PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.alertMessages
  }
}

export default connect(mapStateToProps, { deleteAlertMessage })(AlertMessagesList);
