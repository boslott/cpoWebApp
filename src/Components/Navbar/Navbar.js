import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import '../../Sass/index.css';
import Logo from '../Logo/Logo';
import NavbarLinks from '../NavbarLinks/NavbarLinks';

export default class Navbar extends Component {
  render() {
    return (
      <Grid fluid componentClass='nav' className='navbar__outer'>
        <Grid className='navbar__inner'>
          <Row className='navbar__items'>
            <Col xs={3} className='navbar__item'>
              <Logo />
            </Col>
            <Col md={9} className='navbar__item'>
              <NavbarLinks />
            </Col>
          </Row>
        </Grid>
      </Grid>
    );
  }
}