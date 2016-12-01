import React from 'react';
import axios from 'axios';
import validateInput from './Validation.js'
import TextFieldGroup from './TextFieldGroup.js'
import {hashHistory} from 'react-router'

const divStyle = {
  margin: "0 0 5px 0"
}

const baseUrl = 'http://localhost:5000/api/user';

class Registration extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email:      '',
      password:   '',
      passwordConfirmation:  '',
      errors:     {},
      invalid: false
    };
  }
  render() {
    return (
      <div>
      <form onSubmit={this._handleSubmit.bind(this)}>
      <h4>register</h4>
      <TextFieldGroup
        error={this.state.errors.email}
        onChange={this._onChange.bind(this)}
        checkEmailExists={this._checkEmailExists.bind(this)}
        value={this.state.email}
        placeholder="email"
        field="email"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        error={this.state.errors.password}
        onChange={this._onChange.bind(this)}
        checkEmailExists={this._checkEmailExists.bind(this)}
        value={this.state.password}
        placeholder="password"
        field="password"
        type="password"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        error={this.state.errors.passwordConfirmation}
        onChange={this._onChange.bind(this)}
        checkEmailExists={this._checkEmailExists.bind(this)}
        value={this.state.passwordConfirmation}
        field="passwordConfirmation"
        type="password"
        placeholder="confirm password"
        divStyle = {divStyle}
      />
      <div></div>
      <input disabled={this.state.invalid} className="btn .btn-primary" type="submit" value="register" />
      </form>
      </div>
    );
  }

  _onChange(event){
    this.setState({[event.target.name]: event.target.value});
    this.isValid();
  }

  _checkEmailExists(event){
    const field = event.target.name;
    const value = event.target.value;
    if(val !== ''){
      this.props.isEmailExists(value).then(res => {
          let errors = this.state.errors;
          let invalid;
          if(res.data.user){
            errors[field] = 'There is user with such ' + field;
            invalid = true;
          } else {
            errors[field] = '';
            invalid = false;
          }
          this.setState({erros, invalid})
      });
    }
  }

  isValid(){
    const { errors, isValid} = validateInput(this.state);
    if(!isValid){
      this.setState({errors});
    }
    return isValid;
  }

  _handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    if(this.isValid(this.state)) {
      this.setState({errors: {}});
      this.props.registrationRequest(this.state).then(
        () => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'You registered successfully! Welcome to Vaziuoju-Vezu!'
          });
          hashHistory.push('/');
          //or this.context.router.push('/');
        },
        (err) => {
          // this.setState({errors: err.response.data})
          console.log(err);
        });
    }
    //);
//     $.ajax({
//   type: "POST",
//   url: `${baseUrl}`,
//   data: this.state,
//      dataType: 'json',
//   success: function(e){console.log("Ok")}
// });
    // axios({
    //   method: 'POST',
    //   url: 'http://localhost:5000/api/user',
    //   mode: 'no-cors',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: this.state,
    //   dataType: 'json'
    // })
    // .then((result)=>{
    //
    //   console.log(result);
    // });
  }
}

Registration.propTypes = {
  registrationRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isEmailExists: React.PropTypes.func.isRequired
}

Registration.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default Registration;
