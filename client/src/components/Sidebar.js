import React from 'react';
import { Link } from 'react-router';

const divStyle = {
  position: 'absolute',
  bottom: '10%'
}

export default () => {
  return (
    <div id="sidebar-wrapper">
      <ul className="sidebar-nav">
        <li className="sidebar-brand">
          <a href="#">Sharing Is Caring</a>
        </li>
        <li>
          <a href="#">Dashboard</a>
        </li>
        <li>
          <a href="#">My Profile</a>
        </li>
        <li>
          <a href="#">My Trips</a>
        </li>
        <li>
          <a href="#">Trips</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
      </ul>
      <div style={divStyle}>
        <ul className="sidebar-nav">
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
