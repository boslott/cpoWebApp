import React, { Component } from 'react';
import { FormGroup, FormControl, Row } from 'react-bootstrap';

import '../../Sass/index.css';

export default class RegistrationForm extends Component {

  state = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.history.push('/dashboard');
    this.setState({ name: '', email: '', password: '', passwordConfirm: '' });
  }

  render() {
    return (
      <form className='form'>
        <h2 className='form__title'>Register</h2>
        <FormGroup controlId='name'>
          <FormControl
            type='name'
            name='name'
            bsSize='large'
            value={this.state.name}
            onChange={this.handleInputChange}
            placeholder='Name'
          />
        </FormGroup>
        <FormGroup controlId='reg-email'>
          <FormControl
            type='email'
            name='email'
            bsSize='large'
            value={this.state.email}
            onChange={this.handleInputChange}
            placeholder='Email'
          />
        </FormGroup>
        <FormGroup controlId='reg-password'>
          <FormControl
            type='password'
            name='password'
            bsSize='large'
            value={this.state.password}
            onChange={this.handleInputChange}
            placeholder='Password'
          />
        </FormGroup>
        <FormGroup controlId='passwordConfirm'>
          <FormControl
            type='password'
            name='passwordConfirm'
            bsSize='large'
            value={this.state.passwordConfirm}
            onChange={this.handleInputChange}
            placeholder='Confirm Password'
          />
        </FormGroup>
        <Row className='text-center formbtn__row'>
          <a className='formbtn' onClick={this.handleFormSubmit}>Submit</a>
        </Row>
        <Row className='text-center'>
          <p className='form__link-para'>
            Already have an account? <a className='form__link' onClick={() => this.props.history.push('/login')}>LOGIN</a> now
          </p>
        </Row>
      </form>
    );
  }
}