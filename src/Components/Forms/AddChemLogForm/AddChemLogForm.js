import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import '../../../Sass/index.css';
import 'react-datepicker/dist/react-datepicker.css';

const NEW_CHEMICAL_ADDITION_LOG = gql`
  mutation newChemicalAdditionLog(
    $chemAmount: String
    $chemName: String
    $chemUnitMeasurement: String
    $completedOn: DateTime!
    $createdOn: DateTime
    $pool: String
    $whoAdded: String
  ) {
    createChemAddLog (
      chemAmount: $chemAmount
      chemName: $chemName
      chemUnitMeasurement: $chemUnitMeasurement
      completedOn: $completedOn
      createdOn: $createdOn
      pool: $pool
      whoAdded: $whoAdded
    ) {
      id
    }
  }
`;

export default class AddChemLogForm extends Component {

  state = {
    chemAmount: '',
    chemName: '',
    chemUnitMeasurement: '',
    completedOn: moment(),
    createdOn: moment(),
    pool: '',
    whoAdded: ''
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleDateChange = completedOn => {
    this.setState({ completedOn })
  }

  render() {
    return (
      <Mutation mutation={NEW_CHEMICAL_ADDITION_LOG}>
        {(newChemicalAdditionLog, {data}) => (
          <form
            className='chemical-addition-form'
            onSubmit = {event => {
              event.preventDefault();
              newChemicalAdditionLog({ variables: {
                chemAmount: this.state.chemAmount,
                chemName: this.state.chemName,
                chemUnitMeasurement: this.state.chemUnitMeasurement,
                completedOn: this.state.completedOn,
                createdOn: moment(),
                pool: this.state.pool,
                whoAdded: this.state.whoAdded
              }});
              this.setState({
                chemAmount: '',
                chemName: '',
                chemUnitMeasurement: '',
                completedOn: moment(),
                createdOn: moment(),
                pool: '',
                whoAdded: '',
              });
            }}
          >
            <h3 className='form__title font-3rem'>
              Chemical Addition Log
            </h3>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Completed On:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <DatePicker
                    selected={this.state.completedOn}
                    onChange={this.handleDateChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Who Added:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='whoAdded'
                    value={this.state.whoAdded}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} className='flex-jc-center'>
                  <ControlLabel>Which Pool:</ControlLabel>
                </Col>
                <Col xs={6}>
                  <FormControl
                    type='text'
                    name='pool'
                    value={this.state.pool}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} className='flex-jc-center'>
                  <ControlLabel>Chemical Name:</ControlLabel>
                </Col>
                <Col xs={6}>
                  <FormControl
                    type='text'
                    name='chemName'
                    value={this.state.chemName}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={3} className='flex-jc-center'>
                  <ControlLabel>Chemical Amount:</ControlLabel>
                </Col>
                <Col xs={3}>
                  <FormControl
                    type='text'
                    name='chemAmount'
                    value={this.state.chemAmount}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={3} className='flex-jc-center'>
                  <ControlLabel>Unit of Measurement:</ControlLabel>
                </Col>
                <Col xs={3}>
                  <FormControl
                    type='text'
                    name='chemUnitMeasurement'
                    value={this.state.chemUnitMeasurement}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row text-center'>
              <button type='submit' className='formbtn'>Submit</button>
            </Row>
          </form>
        )}
      </Mutation>
    );
  }
}