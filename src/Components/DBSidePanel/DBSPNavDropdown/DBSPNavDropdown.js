import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../../Sass/index.css';

export default class DBSPNavDropdown extends Component {
  render() {
    return (
      <Row className='dbsp-navdropdown'>
        <Col xs={2}></Col>
        <Col xs={8}>
          <Link to='/new/complete-log'>Complete Log</Link>
        </Col>
      </Row>
    );
  }
}