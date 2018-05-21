import React, { Component } from 'react';

import '../../../Sass/index.css';
import DBCPCalMonth from '../DBCPCalMonth/DBCPCalMonth';
import LogOptions from '../../LogOptions/LogOptions';

export default class DBCPLogCalendar extends Component {
  
  // static propTypes = {};

  render() {
    return (
      <div className='dbcp-log-calendar'>
        <LogOptions />
        <h3 className='dbcp-log-calendar__title'>
          {this.props.year}
        </h3>
        { this.props.yearRound ? (
          <div className='dbcp-log-calendar__months'>
            <DBCPCalMonth month='January' />
            <DBCPCalMonth month='February' />
            <DBCPCalMonth month='March' />
            <DBCPCalMonth month='April' />
            <DBCPCalMonth month='May' />
            <DBCPCalMonth month='June' />
            <DBCPCalMonth month='July' />
            <DBCPCalMonth month='August' />
            <DBCPCalMonth month='September' />
            <DBCPCalMonth month='October' />
            <DBCPCalMonth month='November' />
            <DBCPCalMonth month='December' />
          </div>
        ) : (
          <div className='dbcp-log-calendar__months'>
            <DBCPCalMonth month='April' />
            <DBCPCalMonth month='May' />
            <DBCPCalMonth month='June' />
            <DBCPCalMonth month='July' />
            <DBCPCalMonth month='August' />
            <DBCPCalMonth month='September' />
          </div>
        )}
      </div>
    );
  }
}