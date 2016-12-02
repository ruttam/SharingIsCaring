import React from 'react';

class Layout extends React.Component {
  render(){
    return(
      <div>
      <div>React whatever</div>
      {this.props.children}
      </div>
    );
  }
}

export default Layout;
