import React, { Component } from 'react';

import '../../Sass/index.css';
import NavbarLink from '../NavbarLink/NavbarLink';

export default class NavbarLinks extends Component {
  render() {
    return (
      <nav className='navbar__links-box'>
        <NavbarLink route='/' text='Home' />
        <NavbarLink route='/contact' text='Contact Us' />
        <NavbarLink route='/documentation' text='Documentation' />
        <NavbarLink route='/login' text='Login' />
      </nav>
    );
  }
}