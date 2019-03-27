import React from 'react';
import './style.scss';

class NavBar extends React.PureComponent {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">
          Line Test
        </a>
      </nav>
    );
  }
}

export default NavBar;
