import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Navbar from '../../Components/Navbar/Navbar';
import LoginForm from '../../Components/LoginForm/LoginForm';

export default class Login extends Component {
  render() {
    return (
      <section className='login'>
        <Navbar />
        <Grid>
          <Row>
            <Col xs={12} sm={6} className='loginCol'>
              <LoginForm history={this.props.history}/>
            </Col>
            <Col xs={12} sm={6}>
              <p>Registration Form!</p>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}