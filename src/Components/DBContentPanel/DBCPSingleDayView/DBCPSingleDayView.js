import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../../../Sass/index.css';
import PoolOptBtns from '../../PoolOptBtns/PoolOptBtns';
import SingleCompleteLogView from '../../SingleCompleteLogView/SingleCompleteLogView';

export default class DBCPSingleDayView extends Component {

  state = {
    pool: 'Main',
  }

  changePoolMain = () => {
    this.setState({ pool: 'Main' });
  }

  changePoolWading = () => {
    this.setState({ pool: 'Wading' });
  }

  render() {
    return (
      <Row className='dbcpsingle-day-view'>
        <Row className='dbcpsingle-day-view__btn-row'>
          <PoolOptBtns pool={this.state.pool} changePoolMain={this.changePoolMain} changePoolWading={this.changePoolWading} />
        </Row>
        <Row className='dbcpsingle-day-view__log-row'>
          <SingleCompleteLogView date={this.props.date} pool={this.state.pool} />
        </Row>
        <Row className='dbcpsingle-day-view__log-row'>
          <div className='card w60'>Quick Logs</div>
        </Row>
        <Row className='dbcpsingle-day-view__log-row'>
          <div className='card w60'>Maintenance Log</div>
        </Row>
        <Row className='dbcpsingle-day-view__log-row'>
          <div className='card w60'>Chemical Additions Log</div>
        </Row>
      </Row>
    );
  }
}