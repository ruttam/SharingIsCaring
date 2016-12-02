import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';

import TextFieldGroup from '../common/TextFieldGroup.js';
import validateInput from '../../validations/login.js';
import { loginRequest } from '../../actions/AuthActions.js';
import { auth } from '../../actions/AuthActions.js';

const divStyle = {
  margin: "0 0 5px 0"
}
const verticalLine = {
  borderRight: "thin solid #354c8c"
}

class EmailLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this._onChange = this._onChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  _onSubmit(event) {
    event.preventDefault();
    if(this.isValid()) {
      this.setState({ errors: {} });
      console.log(this.context.router);
      this.props.dispatch(loginRequest(this.state, this.context.router));
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
    const hasErrors = !_.isEmpty(this.state.errors);
    const { errors } = this.state;
    console.log('this.state.errors.form: ', this);
    return (
      <div className="col-lg-6" style={verticalLine}>
      <h4>login with e-mail</h4>
      <form onSubmit={this._onSubmit}>
      <div className={ classnames("form-group", { 'has-error': errors.email }) }>
      <TextFieldGroup
      error={errors.email}
      onChange={this._onChange}
      value={this.state.email}
      field="email"
      placeholder="email"
      divStyle = {divStyle}
      />
      {errors.email && <div className="help-block">{errors.email}</div>}
      </div>
      <TextFieldGroup
      error={errors.password}
      onChange={this._onChange}
      value={this.state.password}
      type="password"
      field="password"
      placeholder="password"
      divStyle = {divStyle}
      />
      <input
      className="btn .btn-primary"
      type="submit"
      value="login"
      style={divStyle}
      />
      </form>
      <Link to="/registration">Dont have an account? Register here!</Link>
      </div>
    );
  }
}

EmailLogin.contextTypes = {
  router: React.PropTypes.object.isRequired
}

function mapStateToProps(state){
  //const {eventStore} = state;
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(EmailLogin);