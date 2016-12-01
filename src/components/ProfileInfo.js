import React from 'react';
import axios from 'axios';
import validateInput from './Validation.js';
import {getProfile, setProfile} from '../actions/AuthActions.js';
import TextFieldGroup from './TextFieldGroup.js';
import {hashHistory} from 'react-router';
import {connect} from 'react-redux';

const divStyle = {
  margin: "0 0 5px 0"
}

class ProfileInfo extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name:      '',
      surname:   '',
      dateOfBirth:  '',
      profession:  '',
      telephoneNumber:  '',
      about:  '',
      errors: {}
    };
  }

  componentWillMount(){
    console.log(this);
    localStorage.setItem('id', this.props.auth.currentUserId);
    this.props.dispatch(getProfile(this.props.auth.currentUserId));

  }

  render() {
    const user = this.props.auth.userProfile;


    console.log('-----------------', this);
    if (!user) {
      return null;
    }


      if(!this.state.name) {
        console.log('Upating;');
        this.setState(Object.assign({},user));
      }

    return (
      <div className="col-lg-4">
      <form onSubmit={this._handleSubmit.bind(this)}>
      <h4>profile info</h4>
      <TextFieldGroup
        onChange={this._onChange.bind(this)}
        value={this.state.name}
        placeholder="name"
        field="name"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        onChange={this._onChange.bind(this)}
        value={this.state.surname}
        placeholder="surname"
        field="surname"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        onChange={this._onChange.bind(this)}
        value={this.state.dateOfBirth}
        placeholder="date of birth"
        field="dateOfBirth"
        type="date"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        onChange={this._onChange.bind(this)}
        value={this.state.profession}
        placeholder="profession"
        field="profession"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        onChange={this._onChange.bind(this)}
        value={this.state.telephoneNumber}
        placeholder="telephone number"
        field="telephoneNumber"
        divStyle = {divStyle}
      />
      <TextFieldGroup
        onChange={this._onChange.bind(this)}
        value={this.state.about}
        placeholder="about you"
        field="about"
        divStyle = {divStyle}
      />
      <div></div>
      <input className="btn .btn-primary" type="submit" value="save" />
      </form>
      </div>
    );
  }

  _onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }


  _handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
      // this.setState({errors: {}});
      this.props.dispatch(setProfile(this.state));
      // this.props.registrationRequest(this.state).then(
      //   () => {
      //     this.props.addFlashMessage({
      //       type: 'success',
      //       text: 'You registered successfully! Welcome to Vaziuoju-Vezu!'
      //     });
      //     hashHistory.push('/');
      //     //or this.context.router.push('/');
      //   },
      //   (err) => {
      //     // this.setState({errors: err.response.data})
      //     console.log(err);
      //   });
  }
}

// Registration.propTypes = {
//   registrationRequest: React.PropTypes.func.isRequired,
//   addFlashMessage: React.PropTypes.func.isRequired,
//   isEmailExists: React.PropTypes.func.isRequired
// }

// Registration.contextTypes = {
//   router: React.PropTypes.object.isRequired
// }

function mapStateToProps(state){
  console.log(state);
  return state;
}

export default connect(mapStateToProps)(ProfileInfo);
