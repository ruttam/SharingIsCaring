import React from 'react';
import axios from 'axios';
import classnames from 'classnames';

import validateInput from '../../validations/registration.js';
import TextFieldGroup from '../common/TextFieldGroup.js';

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
    this._checkEmailExists = this._checkEmailExists.bind(this);
  }

  _onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  _checkEmailExists(event) {
    const field = event.target.name;
    const value = event.target.value;
    let errors = {};
    let invalid = false;
    if(value !== '') {
      this.setState({ errors: {} });
      this.props.isEmailExists(value).then(
        () => {
          invalid = false;
          this.setState({ invalid });
        },
        (err) => {
          errors.email = err.response.data.message;
          invalid = true;
          this.setState({ errors, invalid });
        }
      );
    }
  }

  _onSubmit(event) {
    event.preventDefault();
    let errors = {};
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
          errors.email = err.response.message;
          this.setState({ errors });
        }
      );
    }
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this._onSubmit} >
          <h4>register</h4>
          <div className={ classnames("form-group", { 'has-error': errors.email }) }>
          <TextFieldGroup
            error={errors.email}
            onChange={this._onChange}
            checkEmailExists={this._checkEmailExists}
            value={this.state.email}
            placeholder="email"
            field="email"
          />
          {errors.email && <div className="help-block">{ errors.email }</div>}
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.password }) }>
          <TextFieldGroup
            error={errors.password}
            onChange={this._onChange}
            value={this.state.password}
            placeholder="password"
            field="password"
            type="password"
          />
          {errors.password && <div className="help-block">{ errors.password }</div>}
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.passwordConfirmation }) }>
          <TextFieldGroup
            error={errors.passwordConfirmation}
            onChange={this._onChange}
            value={this.state.passwordConfirmation}
            field="passwordConfirmation"
            type="password"
            placeholder="confirm password"
          />
          {errors.passwordConfirmation && <div className="help-block">{ errors.passwordConfirmation }</div>}
          </div>
          <input disabled={this.state.invalid} className="btn btn-primary" type="submit" value="register" />
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
