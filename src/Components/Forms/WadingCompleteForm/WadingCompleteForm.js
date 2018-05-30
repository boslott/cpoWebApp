import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import '../../../Sass/index.css';
import 'react-datepicker/dist/react-datepicker.css';

import '../../../Sass/index.css';

const NEW_WADINGPOOL_COMPLETE_LOG = gql`
    mutation newWadingPoolCompleteLog(
      $cac: String
      $ch: String
      $completedOn: DateTime!
      $createdOn: DateTime
      $cya: String
      $fac: String
      $filterPressure1: String
      $flowRate: String
      $ph: String
      $ta: String
      $waterLevel: String
      $whoChecked: String!
    ) {
      createWadingPoolCompleteLog (
        cac: $cac
        ch: $ch
        completedOn: $completedOn
        createdOn: $createdOn
        cya: $cya
        fac: $fac
        filterPressure1: $filterPressure1
        flowRate: $flowRate
        ph: $ph
        ta: $ta
        waterLevel: $waterLevel
        whoChecked: $whoChecked
      ) {
        id
      }
    }
  `;

export default class WadingCompleteForm extends Component {

  state = {
    cac: '',
    ch: '',
    completedOn: moment(),
    createdOn: moment(),
    cya: '',
    fac: '',
    filterPressure1: '',
    flowRate: '',
    ph: '',
    ta: '',
    waterLevel: '',
    whoChecked: '',
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
      <Mutation mutation={NEW_WADINGPOOL_COMPLETE_LOG}>
        {(newWadingPoolCompleteLog, {data}) => (
          <form
            className='wading-complete-form'
            onSubmit = {event => {
              event.preventDefault();
              newWadingPoolCompleteLog({ variables: {
                cac: this.state.cac,
                ch: this.state.ch,
                completedOn: this.state.completedOn,
                createdOn: this.state.createdOn,
                cya: this.state.cya,
                fac: this.state.fac,
                filterPressure1: this.state.filterPressure1,
                flowRate: this.state.flowRate,
                ph: this.state.ph,
                ta: this.state.ta,
                waterLevel: this.state.waterLevel,
                whoChecked: this.state.whoChecked
              }});
              this.setState({ 
                cac: '',
                ch: '',
                completedOn: moment(),
                createdOn: moment(),
                cya: '',
                fac: '',
                filterPressure1: '',
                flowRate: '',
                ph: '',
                ta: '',
                waterLevel: '',
                whoChecked: '',
              });
            }}
          >
            <h3 className='form__title font-3rem'>
              Wading Pool Complete Log
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
                  <ControlLabel>Who Checked:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='whoChecked'
                    value={this.state.whoChecked}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>FAC:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='fac'
                    value={this.state.fac}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>pH:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='ph'
                    value={this.state.ph}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>TA:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='ta'
                    value={this.state.ta}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>CH:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='ch'
                    value={this.state.ch}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>CYA:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='cya'
                    value={this.state.cya}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Flow Rate:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='flowRate'
                    value={this.state.flowRate}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Filter 1:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='filterPressure1'
                    value={this.state.filterPressure1}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>CAC:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='cac'
                    value={this.state.cac}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Water Level:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='waterLevel'
                    value={this.state.waterLevel}
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