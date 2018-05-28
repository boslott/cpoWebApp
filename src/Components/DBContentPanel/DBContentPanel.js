import React, { Component } from 'react';

import '../../Sass/index.css';
import DBCPHeader from './DBCPHeader/DBCPHeader';
import DBCPLogCalendar from './DBCPLogCalendar/DBCPLogCalendar';
import DBCPSingleDayView from './DBCPSingleDayView/DBCPSingleDayView';
import DBCPNewLog from './DBCPNewLog/DBCPNewLog';

export default class DBContentPanel extends Component {

  state = {
    yearRound: false,
  }

  changeToYear = () => {
    this.setState({ yearRound: true });
  }

  changeToSeasonal = () => {
    this.setState({ yearRound: false });
  }

  render() {
    return (
      <main className='db-content-panel'>
        <DBCPHeader title={this.props.panelTitle} changeToYear={this.changeToYear} changeToSeasonal={this.changeToSeasonal} />
        {(this.props.panelType === 'view' || this.props.panelType === 'chemicals') ? <DBCPLogCalendar year='2018' yearRound={this.state.yearRound} /> : '' }
        {this.props.panelType === 'single-day-view' ? <DBCPSingleDayView date={this.props.panelTitle} /> : ''}
        {this.props.panelType === 'New' ? <DBCPNewLog /> : ''}
      </main>
    );
  }
}