import React, { Component } from 'react';

import '../../../Sass/index.css';
import Logo from '../../Logo/Logo';

export default class DBSPBranding extends Component {
  render() {
    return (
      <section className='dbsp-branding'>
        <div className='dbsp-branding__logo'>
          <Logo />
        </div>
        <h2 className='dbsp-branding__text'>CPO Log</h2>
      </section>
    );
  }
}