import React, { Component } from 'react';
import { Grid, Row} from 'react-bootstrap';

import '../../Sass/index.css';
import Logo from '../Logo/Logo';
import NavbarLinks from '../NavbarLinks/NavbarLinks';

export default class Navbar extends Component {
  render() {
    return (
      <Grid fluid componentClass='nav' className='navbar__outer'>
        <Grid className='navbar__inner'>
          <Row className='navbar__items'>
            <Logo />
            <NavbarLinks />
          </Row>
        </Grid>
      </Grid>
    );
  }
}