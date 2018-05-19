import React, { Component } from 'react';

import '../../Sass/index.css';
import DBSidePanel from '../../Components/DBSidePanel/DBSidePanel';
import DBContentPanel from '../../Components/DBContentPanel/DBContentPanel';

export default class NewLog extends Component {
  render() {
    return (
      <div className='dashboard new-log'>
        <DBSidePanel />
        <DBContentPanel panelType='New' />
      </div>
    );
  }
}