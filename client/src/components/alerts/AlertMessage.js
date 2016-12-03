import React from 'react';
import classnames from 'classnames';

class AlertMessage extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }

  _onClick() {
    this.props.deleteAlertMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <div className="col-lg-6 col-lg-offset-4">
        <div className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'error'
        })}>
          <button onClick={this._onClick} className="close"><span>&times;</span></button>
          {text}
        </div>
      </div>
    );
  }
}

AlertMessage.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteAlertMessage: React.PropTypes.func.isRequired
}

export default AlertMessage;
