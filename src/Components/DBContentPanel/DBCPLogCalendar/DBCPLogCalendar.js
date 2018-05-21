import React, { Component } from 'react';

import '../../../Sass/index.css';
import DBCPCalMonth from '../DBCPCalMonth/DBCPCalMonth';

export default class DBCPLogCalendar extends Component {
  
  // static propTypes = {};

  render() {
    return (
      <div className='dbcp-log-calendar'>
        <h3 className='dbcp-log-calendar__title'>
          {this.props.year}
        </h3>
        { this.props.yearRound ? (
          <div className='dbcp-log-calendar__months'>
            <DBCPCalMonth year={this.props.year} month='January' />
            <DBCPCalMonth year={this.props.year} month='February' />
            <DBCPCalMonth year={this.props.year} month='March' />
            <DBCPCalMonth year={this.props.year} month='April' />
            <DBCPCalMonth year={this.props.year} month='May' />
            <DBCPCalMonth year={this.props.year} month='June' />
            <DBCPCalMonth year={this.props.year} month='July' />
            <DBCPCalMonth year={this.props.year} month='August' />
            <DBCPCalMonth year={this.props.year} month='September' />
            <DBCPCalMonth year={this.props.year} month='October' />
            <DBCPCalMonth year={this.props.year} month='November' />
            <DBCPCalMonth year={this.props.year} month='December' />
          </div>
        ) : (
          <div className='dbcp-log-calendar__months'>
            <DBCPCalMonth year={this.props.year}  month='April' />
            <DBCPCalMonth year={this.props.year}  month='May' />
            <DBCPCalMonth year={this.props.year}  month='June' />
            <DBCPCalMonth year={this.props.year}  month='July' />
            <DBCPCalMonth year={this.props.year}  month='August' />
            <DBCPCalMonth year={this.props.year}  month='September' />
          </div>
        )}
      </div>
    );
  }
}