import React, { Component } from 'react';

import '../../Sass/index.css';
import DBSidePanel from '../../Components/DBSidePanel/DBSidePanel';
import DBContentPanel from '../../Components/DBContentPanel/DBContentPanel';

export default class Dashboard extends Component {
  render() {
    return (
      <main className='dashboard'>
        <DBSidePanel />
        <DBContentPanel />
      </main>
    );
  }
}