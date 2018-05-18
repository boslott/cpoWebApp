import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../../Sass/index.css';
import DBSPNavDropdown from '../DBSPNavDropdown/DBSPNavDropdown';

export default class DBSPNavLink extends Component {

  state = {
    dropdown: this.props.dropdown || false,
  }

  render() {
    return (
      <Row>
        {this.state.dropdown ? (
          <div>
            <div className='dbsp-navlink'>
              <Col xs={2} className='dbsp-navlink__icon'>
                <FontAwesomeIcon icon={this.props.icon} size='lg' />
              </Col>
              <Col xs={8}>
                {this.props.linkText}
              </Col>
              <Col xs={2}>
                <FontAwesomeIcon icon='chevron-down' size='sm' />
              </Col>
            </div>
            <Row>
              <DBSPNavDropdown list={this.props.list} />
            </Row>
          </div>
        ) : (
          <Link className='dbsp-navlink' to={this.props.linkPath}>
            <Col xs={2} className='dbsp-navlink__icon'>
              <FontAwesomeIcon icon={this.props.icon} size='lg' />
            </Col>
            <Col xs={8}>
              {this.props.linkText}
            </Col>
          </Link>
        )}
      </Row>
    );
  }
}