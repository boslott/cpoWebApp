import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../../Sass/index.css';

export default class DBSPNavLink extends Component {
  render() {
    return (
      <Row>
        <Link className='dbsp-navlink' to={this.props.linkPath}>
          <Col xs={2} className='dbsp-navlink__icon'>
            <FontAwesomeIcon icon={this.props.icon} size='lg' />
          </Col>
          <Col xs={8}>
            {this.props.linkText}
          </Col>
        </Link>
      </Row>
    );
  }
}