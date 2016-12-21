import React from 'react';
import axios from 'axios';
import { hashHistory } from 'react-router';
import { connect } from 'react-redux';
import Time from 'react-time';
import classnames from 'classnames';

import validateInput from '../../validations/profile.js';
import { getProfile, setProfile } from '../../actions/AuthActions.js';
import TextFieldGroup from '../common/TextFieldGroup.js';

class ProfileInfo extends React.Component {
  constructor(props) {
    super(props);
    let now = new Date();
    this.state = {
      name:      '',
      surname:   '',
      telephoneNumber:  '',
      dateOfBirth:  '',
      profession:  '',
      about:  '',
      lastLoginDate: now,
      lastLoginTime: now,
      user_id: '',
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
    let errors = {};
    if(this.isValid(this.state)) {
      this.setState({ errors: {} });
      this.props.dispatch(setProfile(this.state));
    }
    console.log(this.state);
  }

  isValid() {
    const { errors, isValid } = validateInput(this.state);
    if(!isValid) {
      this.setState({ errors });
    }
    return isValid;
  }

  componentWillMount() {
    console.log(localStorage);
    this.props.dispatch(getProfile(localStorage.currentUserId)).then(
      (response) => {
        this.setState({
          name:      response.data.name,
          surname:   response.data.surname,
          telephoneNumber:  response.data.telephoneNumber,
          dateOfBirth:  response.data.dateOfBirth,
          profession:   response.data.profession,
          about:      response.data.about,
          lastLoginDate: '',
          lastLoginTime: '',
          user_id: localStorage.currentUserId,
          errors: {},
          invalid: false
        });
      }
    );
  }

  render() {
    const user = this.props.auth;
    if (!user) {
      return null;
    }
    const { errors } = this.state;
    return (
      <div className="col-lg-4">
        <form onSubmit={this._onSubmit}>
          <h4>profile info</h4>
          <div className={ classnames("form-group", { 'has-error': errors.name }) }>
            <TextFieldGroup
            onChange={this._onChange}
            value={this.state.name}
            placeholder="name"
            field="name"
            />
            {errors.name && <div className="help-block">{ errors.name }</div>}
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.surname }) }>
            <TextFieldGroup
            onChange={this._onChange}
            value={this.state.surname}
            placeholder="surname"
            field="surname"
            />
            {errors.surname && <div className="help-block">{ errors.surname }</div>}
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.telephoneNumber }) }>
            <TextFieldGroup
            onChange={this._onChange}
            value={this.state.telephoneNumber}
            placeholder="telephone number"
            field="telephoneNumber"
            />
            {errors.telephoneNumber && <div className="help-block">{ errors.telephoneNumber }</div>}
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.dateOfBirth }) }>
            <TextFieldGroup
            onChange={this._onChange}
            value={this.state.dateOfBirth}
            placeholder="date of birth"
            field="dateOfBirth"
            type="date"
            />
            {errors.dateOfBirth && <div className="help-block">{ errors.dateOfBirth }</div>}
          </div>
          <div className={ classnames("form-group", { 'has-error': errors.profession }) }>
            <TextFieldGroup
            onChange={this._onChange}
            value={this.state.profession}
            placeholder="profession"
            field="profession"
            />
            {errors.profession && <div className="help-block">{ errors.profession }</div>}
          </div>
          <div className="form-group">
            <TextFieldGroup
            onChange={this._onChange}
            value={this.state.about}
            placeholder="about you"
            field="about"
            type="textarea"
            />
          </div>
          <div className="form-group">
            <input className="btn .btn-primary" type="submit" value="save" />
          </div>
        </form>
      </div>
    );
  }
}

ProfileInfo.contextTypes = {
  router: React.PropTypes.object.isRequired
}

ProfileInfo.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(ProfileInfo);
