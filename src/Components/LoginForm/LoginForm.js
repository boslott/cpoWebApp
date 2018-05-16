import React, { Component } from 'react';
import { FormGroup, FormControl, Row } from 'react-bootstrap';

import '../../Sass/index.css';

export default class LoginForm extends Component {

  state = {
    email: '',
    password: '',
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    console.log('Logged in!');
    // this.props.history.push('/dashboard');
  }

  render() {
    return (
      <form className='form'>
        <h2 className='form__title'>Login</h2>
        <FormGroup controlId='email'>
          <FormControl
            type='email'
            name='email'
            bsSize='large'
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder='Email'
          />
        </FormGroup>
        <FormGroup controlId='password'>
          <FormControl
            type='password'
            name='password'
            bsSize='large'
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder='Password'
          />
        </FormGroup>
        <Row className='btn-row'>
          <a className='formbtn' onClick={this.handleFormSubmit}>Submit</a>
        </Row>
      </form>
    );
  }
}