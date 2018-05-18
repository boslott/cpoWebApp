import React, { Component } from 'react';

import '../../Sass/index.css';
import DBSPBranding from './DBSPBranding/DBSPBranding';
import DBSPMainNav from './DBSPMainNav/DBSPMainNav';
import DBSPFooter from './DBSPFooter/DBSPFooter';

export default class DBSidePanel extends Component {
  render() {
    return (
      <section className='db-side-panel'>
        <DBSPBranding />
        <DBSPMainNav />
        <DBSPFooter />
      </section>
    );
  }
}