import React, { Component } from 'react';

import '../../../Sass/index.css';
import DBCPCalMonth from '../DBCPCalMonth/DBCPCalMonth';

export default class DBCPLogCalendar extends Component {
  
  // static propTypes = {};

  state = {
    yearRound: true,
  }

  render() {
    return (
      <div className='dbcp-log-calendar'>
        <h3 className='dbcp-log-calendar__title'>
          {this.props.year}
        </h3>
        { this.state.yearRound ? (
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