import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import '../../Sass/index.css';
import Navbar from '../../Components/Navbar/Navbar';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import Footer from '../../Components/Footer/Footer';

export default class Registration extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid componentClass='section' bsClass='container registration content'>
          <Row className='form-row'>
            <RegistrationForm history={this.props.history} />
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}