import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Components/LoginForm/LoginForm';
import RegistrationForm from '../../Components/RegistrationForm/RegistrationForm';

export default class Login extends Component {
  render() {
    return (
      <section className='login'>
        <Navbar />
        <Grid>
          <Row className='form-row'>
            <LoginForm history={this.props.history} />
          </Row>
          <Row className='form-row'>
            <RegistrationForm history={this.props.history} />
          </Row>
        </Grid>
      </section>
    );
  }
}