import React, { Component } from 'react';

import '../../Sass/index.css';
import DBCPHeader from './DBCPHeader/DBCPHeader';
import DBCPLogCalendar from './DBCPLogCalendar/DBCPLogCalendar';

export default class DBContentPanel extends Component {
  render() {
    return (
      <main className='db-content-panel'>
        <DBCPHeader title={this.props.panelType} />
        {this.props.panelType === 'view' ? <DBCPLogCalendar year='2018' /> : '' }
      </main>
    );
  }
}