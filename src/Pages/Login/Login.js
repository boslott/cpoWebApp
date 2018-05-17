import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Components/LoginForm/LoginForm';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';
import Footer from '../../Components/Footer/Footer';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Grid componentClass='section' bsClass='container login'>
          <Row className='form-row'>
            <LoginForm history={this.props.history} />
          </Row>
          <Row className='form-row'>
            <RegistrationForm history={this.props.history} />
          </Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}