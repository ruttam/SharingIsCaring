import React from 'react';
import { Link } from 'react-router';
import TextFieldGroup from './TextFieldGroup.js';
import validateInput from './LoginValidation.js';
import {connect} from 'react-redux';
import {login} from '../actions/AuthActions.js';
import {auth} from '../actions/AuthActions.js';
import {cookie} from 'react-cookie';

function mapStateToProps(state){
  //const {eventStore} = state;
  console.log(state);
  return state;
}

const divStyle = {
  margin: "0 0 5px 0"
}
const verticalLine = {
  borderRight: "thin solid #354c8c"
}

class EmailLogin extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
  }

  render() {

    const hasErrors = !_.isEmpty(this.state.errors);
    console.log('this.state.errors.form: ', this);
    return (
      <div className="col-lg-6" style={verticalLine}>
      <h4>login with e-mail</h4>
      <form onSubmit={this._handleSubmit.bind(this)}>
      {hasErrors && <div className="alert alert-danger">{this.state.errors}</div>}
      <TextFieldGroup
        error={this.state.errors.email}
        onChange={this._onChange.bind(this)}
        value={this.state.email}
        field="email"
        placeholder="email"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        error={this.state.errors.password}
        onChange={this._onChange.bind(this)}
        value={this.state.password}
        type="password"
        field="password"
        placeholder="password"
        divStyle = {divStyle}
      />
        <input style={divStyle} className="btn .btn-primary" type="submit" value="login" />
      </form>
      <Link to="/registration">Dont have an account? Register here!</Link>
      </div>
    );
  }

  _onChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  isValid(){
    const {errors, isValid} = validateInput(this.state);
    if(!isValid){
      this.setState({errors});
    }
    return isValid;
  }

  _handleSubmit(e){
    e.preventDefault();
    if(this.isValid()){
      this.setState({errors: {}});
      console.log(this.context.router);
      this.props.dispatch(login(this.state, this.context.router));
    }
  }
}

EmailLogin.propTypes = {
  login: React.PropTypes.func
}

EmailLogin.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateToProps)(EmailLogin);
