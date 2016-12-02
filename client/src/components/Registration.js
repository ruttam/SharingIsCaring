import React from 'react';
import axios from 'axios';

import validateInput from '../validations/registration.js';
import TextFieldGroup from './common/TextFieldGroup.js';

const divStyle = {
  margin: "0 0 5px 0"
}

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      invalid: false
    };
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  _onSubmit(event) {
    event.preventDefault();
    if(this.isValid(this.state)) {
      this.setState({ errors: {} });
      this.props.registrationRequest(this.state).then(
        () => {
          this.props.addAlertMessage({
            type: 'success',
            text: 'You have registered successfully! Welcome to Sharing Is Caring!'
          });
          //hashHistory.push('/');
          //or
          this.context.router.push('/');
        },
        (err) => {
          this.setState({ errors: err.message });
          this.props.addAlertMessage({
            type: 'error',
            text: this.state.errors
          });
        }
      );
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors });
      return false;
    }
    return true;
  }

  _checkEmailExists(event) {
    const field = event.target.name;
    const value = event.target.value;
    if(val !== ''){
      this.props.isEmailExists(value).then(res => {
          let errors = this.state.errors;
          let invalid;
          if(res.data.user) {
            errors[field] = 'There is user with such ' + field;
            invalid = true;
          } else {
            errors[field] = '';
            invalid = false;
          }
          this.setState({ erros, invalid });
      });
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this._onSubmit} >
          <h4>register</h4>
          <TextFieldGroup
            error={errors.email}
            onChange={this._onChange}
            checkEmailExists={this._checkEmailExists}
            value={this.state.email}
            placeholder="email"
            field="email"
            divStyle={divStyle}
          />
          <TextFieldGroup
            error={errors.password}
            onChange={this._onChange}
            value={this.state.password}
            placeholder="password"
            field="password"
            type="password"
            divStyle={divStyle}
          />
          <TextFieldGroup
            error={errors.passwordConfirmation}
            onChange={this._onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
            type="password"
            placeholder="confirm password"
            divStyle={divStyle}
          />
          <input className="btn btn-primary" type="submit" value="register" />
        </form>
      </div>
    );
  }
}

Registration.propTypes = {
  registrationRequest: React.PropTypes.func.isRequired,
  addAlertMessage: React.PropTypes.func.isRequired,
  isEmailExists: React.PropTypes.func.isRequired
}

Registration.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Registration;
