import React from 'react';
import { Row, Col } from 'react-bootstrap';

import '../../Sass/index.css';

const WadingCompleteLogViewPanel = ({logData}) => (
  <div className='complete-log-view-panel center'>
    <Row>
      <h3 className='complete-log-view-panel__title'>Complete Log</h3>
    </Row>
    <Row className='odd-row'>
      <Col xs={6} sm={4}>
        <div className='complete-log-view-panel__info-box'>
          <h4 className='complete-log-view-panel__label'>CPO:</h4>
          <p className='complete-log-view-panel__data'>
            {logData.whoChecked}
          </p>
        </div>
      </Col>
    </Row>
    <Row className='odd-row'>
      <Col xs={6} sm={4}>
        <div className='complete-log-view-panel__info-box'>
          <h4 className='complete-log-view-panel__label'>FAC:</h4>
          <p className='complete-log-view-panel__data'>
            {logData.fac}<span className='complete-log-view-panel__data-unit'>ppm</span>
          </p>
        </div>
      </Col>
      <Col xs={6} sm={4}>
        <div className='complete-log-view-panel__info-box'>
          <h4 className='complete-log-view-panel__label'>pH:</h4>
          <p className='complete-log-view-panel__data'>{logData.ph}</p>
        </div>
      </Col>
    </Row>
    {logData.ta || logData.ch || logData.cya ? (
      <Row className='odd-row'>
        <Col xs={6} sm={4}>
          <div className='complete-log-view-panel__info-box'>
            <h4 className='complete-log-view-panel__label'>TA:</h4>
            <p className='complete-log-view-panel__data'>
              {logData.ta}<span className='complete-log-view-panel__data-unit'>ppm</span>
            </p>
          </div>
        </Col>
        <Col xs={6} sm={4}>
          <div className='complete-log-view-panel__info-box'>
            <h4 className='complete-log-view-panel__label'>CH:</h4>
            <p className='complete-log-view-panel__data'>
              {logData.ch}<span className='complete-log-view-panel__data-unit'>ppm</span>
            </p>
          </div>
        </Col>
        <Col xs={6} sm={4}>
          <div className='complete-log-view-panel__info-box'>
            <h4 className='complete-log-view-panel__label'>CYA:</h4>
            <p className='complete-log-view-panel__data'>
              {logData.cya}<span className='complete-log-view-panel__data-unit'>ppm</span>
            </p>
          </div>
        </Col>
      </Row>
    ) : ''}
    {logData.cac || logData.waterLevel ? (
      <Row className='odd-row'>
        <Col xs={6} sm={4}>
          <div className='complete-log-view-panel__info-box'>
            <h4 className='complete-log-view-panel__label'>CAC:</h4>
            <p className='complete-log-view-panel__data'>
              {logData.cac}<span className='complete-log-view-panel__data-unit'>ppm</span>
            </p>
          </div>
        </Col>
        <Col xs={6} sm={4}>
          <div className='complete-log-view-panel__info-box'>
            <h4 className='complete-log-view-panel__label'>Water Level:</h4>
            <p className='complete-log-view-panel__data'>
              {logData.waterLevel}<span className='complete-log-view-panel__data-unit'>in</span>
            </p>
          </div>
        </Col>
      </Row>
    ) : ''}
    <Row className='odd-row'>
      <Col xs={6} sm={3}>
        <div className='complete-log-view-panel__info-box'>
          <h4 className='complete-log-view-panel__label'>Flow:</h4>
          <p className='complete-log-view-panel__data'>
            {logData.flowRate}<span className='complete-log-view-panel__data-unit'>gal/min</span>
          </p>
        </div>
      </Col>
    </Row>
    <Row className='odd-row'>
      <Col xs={6} sm={3}>
        <div className='complete-log-view-panel__info-box'>
          <h4 className='complete-log-view-panel__label'>Filter 1:</h4>
          <p className='complete-log-view-panel__data'>
            {logData.filterPressure1}<span className='complete-log-view-panel__data-unit'>psi</span>
          </p>
        </div>
      </Col>
    </Row>
  </div>
);

export default WadingCompleteLogViewPanel;