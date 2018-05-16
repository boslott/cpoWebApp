import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.png';

import '../../Sass/index.css';

export default class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='CPO Web App' height='50'/>
        </Link>
      </div>
    );
  }
};