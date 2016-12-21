import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

const divStyle = {
  position: 'absolute',
  bottom: '10%'
}

class Sidebar extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth;
    const userLinks = (
      <div>
        <li className="sidebar-brand">
          <a href="#">Sharing Is Caring</a>
        </li>
        <li>
          <Link to="/profile">my profile</Link>
        </li>
        <li>
          <a href="#">my trips</a>
        </li>
        <li>
          <a href="#">trips</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </div>
    );
    const guestLinks = (
      <div>
        <li className="sidebar-brand">
          <a href="#">Sharing Is Caring</a>
        </li>
        <li>
          <a href="#">trips</a>
        </li>
        <li>
          <a href="#">about</a>
        </li>
      </div>
    );
    return (
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          { isAuthenticated ? userLinks : guestLinks }
        </ul>
        <div style={divStyle}>
          <ul className="sidebar-nav">
            <li>
              { isAuthenticated ? <Link to="/">logout</Link> : <Link to="/">login</Link> }
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

Sidebar.propTypes = {
  auth: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(Sidebar);
