import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../../Sass/index.css';

export default class NavbarLink extends Component {
  render() {
    return (
      <Link to={this.props.route}
        className={window.location.pathname === this.props.route ?
          'navbar__link navbar__link-active' : 'navbar__link'
        }
      >
        <h2>{this.props.text}</h2>
      </Link>
    );
  }
}