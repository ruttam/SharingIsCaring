import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import classnames from 'classnames';
import isEmpty from 'lodash/isEmpty';
import axios from 'axios';

import TextFieldGroup from '../common/TextFieldGroup.js';
import validateInput from '../../validations/login.js';
import { loginRequest } from '../../actions/AuthActions.js';

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
      this.props.dispatch(loginRequest(this.state, this.context.router));
      //  this.props.loginRequest(this.state, this.context.router).then(
      //    (results) => {
      //      console.log(results);
      //      this.props.setCurrentUser({
      //        type: SET_CURRENT_USER,
      //        userId: results.data.user_id
      //      });
      //      console.log(this.state.userId);
      //      this.context.router.push('/profileData');
      //    },
      //    (errors) => {
      //      errors.form = errors.response.data.message;
      //      this.setState({ errors });
      //    }
      //  );
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
    const hasErrors = !isEmpty(this.state.errors);
    const { errors } = this.state;
    return (
      <div className="col-lg-6" style={verticalLine}>
        <h4>login with e-mail</h4>
        <form onSubmit={this._onSubmit}>
          { errors.form && <div className="alert alert-danger">{ errors.form }</div> }
          <div className={ classnames("form-group", { 'has-error': errors.email }) }>
            <TextFieldGroup
              error={errors.email}
              onChange={this._onChange}
              value={this.state.email}
              field="email"
              placeholder="email"
            />
            { errors.email && <div className="help-block">{ errors.email }</div> }
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.password }) }>
            <TextFieldGroup
              error={errors.password}
              onChange={this._onChange}
              value={this.state.password}
              type="password"
              field="password"
              placeholder="password"
            />
            { errors.password && <div className="help-block">{ errors.password }</div> }
          </div>
          <input
          className="btn .btn-primary"
          type="submit"
          value="login"
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

EmailLogin.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(EmailLogin);
