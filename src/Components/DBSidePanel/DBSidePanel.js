import React, { Component } from 'react';

import '../../Sass/index.css';
import DBSPBranding from './DBSPBranding/DBSPBranding';

export default class DBSidePanel extends Component {
  render() {
    return (
      <section className='db-side-panel'>
        <DBSPBranding />
      </section>
    );
  }
}