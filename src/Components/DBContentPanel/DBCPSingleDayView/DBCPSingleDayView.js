import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../../../Sass/index.css';
import PoolOptBtns from '../../PoolOptBtns/PoolOptBtns';

export default class DBCPSingleDayView extends Component {
  render() {
    return (
      <Row className='dbcpsingle-day-view'>
        <Row className='dbcpsingle-day-view__btn-row'>
          <PoolOptBtns />
        </Row>
        <Row className='dbcpsingle-day-view__log-row'>
          <div className='card w60'>Complete Log</div>
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