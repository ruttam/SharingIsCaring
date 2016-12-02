import React from 'react';
import FBLogin from 'react-facebook-login';

const divStyle = {
  padding: "45px 0px 0px 15px"
}

class FacebookLogin extends React.Component{
  constructor(props) {
    super(props);
    // this.FB = this.props.fb;
    // this.state = {
    //   message: ""
    // };
  }

  // componentDidMount() {
  //   this.FB.Event.subscribe('auth.logout', this.onLogout.bind(this));
  //   this.FB.Event.subscribe('auth.statusChange', function(response){
  //     console.log("Ok");
  //     if( response.status === "connected" ) {
  //       this.FB.api('/me', {message: 'last_name'}, function(response) {
  //         console.log(response);
  //         //var message = "Welcome, " + response.last_name;
  //         self.setState({
  //           message: message
  //         });
  //         alert('Good');
  //       })
  //     }
  //   });
  // }
  //
  // onStatusChange(response) {
  //   var self = this;
  //   if( response.status === "connected" ) {
  //     this.FB.api('/me', {message: 'last_name'}, function(response) {
  //       console.log(response);
  //       var message = "Welcome, " + response.last_name;
  //       self.setState({
  //         message: message
  //       });
  //       alert('Good');
  //     })
  //   }
  //   alert(this.state.message);
  // }
  //
  // onLogout(response) {
  //   this.setState({
  //     message: "Logout"
  //   });
  // }
  //
  // render() {
  //   let message = this.state.message;
  //   console.log(message);
  //   return (
  //     <div style={divStyle} className="col-lg-4"><h4>login with Facebook</h4>
  //     <div
  //       className="fb-login-button"
  //       data-max-rows="1"
  //       data-size="xlarge"
  //       data-show-faces="false"
  //       data-auto-logout-link="true"
  //     >
  //     </div>
  //     <div>{this.state.message}</div>
  //     </div>
  //   );
  // }

  responseFacebook(response){
    console.log(response);
  }

  render() {
    return (
      <div style={divStyle} className="col-lg-6">
      <FBLogin
        appId="1841589546055063"
        autoLoad={true}
        fields="name,email,picture"
        callback={this.responseFacebook}
      />
      </div>
    )
  }
}

export default FacebookLogin;
