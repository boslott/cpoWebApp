import React, { Component } from 'react';

import '../../Sass/index.css';
import DBSidePanel from '../../Components/DBSidePanel/DBSidePanel';
import DBContentPanel from '../../Components/DBContentPanel/DBContentPanel';

export default class ViewLogs extends Component {
  render() {
    return (
      <div className='dashboard view-logs'>
        <DBSidePanel />
        <DBContentPanel panelType='view' panelTitle='View' />
      </div>
    );
  }
}