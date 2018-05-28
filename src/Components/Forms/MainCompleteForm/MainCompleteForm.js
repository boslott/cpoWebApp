import React, { Component } from 'react';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import '../../../Sass/index.css';
import 'react-datepicker/dist/react-datepicker.css';

const NEW_MAINPOOL_COMPLETE_LOG = gql`
    mutation newMainPoolCompleteLog(
      $cac: String
      $ch: String
      $clVolume: String
      $completedOn: DateTime!
      $cya: String
      $fac: String
      $filterPressure1: String
      $filterPressure2: String
      $filterPressure3: String
      $filterPressure4: String
      $flowRate: String
      $orp: String
      $phController: String
      $phMan: String
      $ta: String
      $waterLevel: String
      $whoChecked: String!
    ) {
      createMainPoolCompleteLog (
        cac: $cac
        ch: $ch
        clVolume: $clVolume
        completedOn: $completedOn
        cya: $cya
        fac: $fac
        filterPressure1: $filterPressure1
        filterPressure2: $filterPressure2
        filterPressure3: $filterPressure3
        filterPressure4: $filterPressure4
        flowRate: $flowRate
        orp: $orp
        phController: $phController
        phMan: $phMan
        ta: $ta
        waterLevel: $waterLevel
        whoChecked: $whoChecked
      ) {
        id
      }
    }
  `;

export default class MainCompleteForm extends Component {

  state = {
    cac: '',
    ch: '',
    clVolume: '',
    completedOn: '',
    createdOn: new Date(),
    cya: '',
    fac: '',
    filterPressure1: '',
    filterPressure2: '',
    filterPressure3: '',
    filterPressure4: '',
    flowRate: '',
    orp: '',
    phController: '',
    phMan: '',
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

  handleDate = completedOn => {
    this.setState({ completedOn })
  }

  render() {
    return (
      <Mutation mutation={NEW_MAINPOOL_COMPLETE_LOG}>
        {(newMainPoolCompleteLog, {data}) => (
          <form
            className='main-complete-form'
            onSubmit = {event => {
              event.preventDefault();
              newMainPoolCompleteLog({ variables: {
                cac: this.state.cac,
                ch: this.state.ch,
                clVolume: this.state.clVolume,
                completedOn: this.state.completedOn,
                createdOn: this.state.createdOn,
                cya: this.state.cya,
                fac: this.state.fac,
                filterPressure1: this.state.filterPressure1,
                filterPressure2: this.state.filterPressure2,
                filterPressure3: this.state.filterPressure3,
                filterPressure4: this.state.filterPressure4,
                flowRate: this.state.flowRate,
                orp: this.state.orp,
                phController: this.state.phController,
                phMan: this.state.phMan,
                ta: this.state.ta,
                waterLevel: this.state.waterLevel,
                whoChecked: this.state.whoChecked
              }});
              this.setState({ 
                cac: '',
                ch: '',
                clVolume: '',
                completedOn: '',
                createdOn: '',
                cya: '',
                fac: '',
                filterPressure1: '',
                filterPressure2: '',
                filterPressure3: '',
                filterPressure4: '',
                flowRate: '',
                orp: '',
                phController: '',
                phMan: '',
                ta: '',
                waterLevel: '',
                whoChecked: '',
              });
            }}
          >
            <h3 className='form__title font-3rem'>
              Main Pool Complete Log
            </h3>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Completed On:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <DatePicker
                    selected={moment()}
                    onChange={this.handleDate}
                  />
                  {/* <FormControl
                    type='text'
                    name='completedOn'
                    value={this.state.completedOn}
                    onChange={this.handleInputChange}
                  /> */}
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
                    name='phMan'
                    value={this.state.phMan}
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
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>Flow Rate:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='flowRate'
                    value={this.state.flowRate}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>CAC:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='cac'
                    value={this.state.cac}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>Water Level:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='waterLevel'
                    value={this.state.waterLevel}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>ORP:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='orp'
                    value={this.state.orp}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>pH Controller:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='phController'
                    value={this.state.phController}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={2} className='flex-jc-center'>
                  <ControlLabel>Cl Volume:</ControlLabel>
                </Col>
                <Col xs={4} sm={2}>
                  <FormControl
                    type='text'
                    name='clVolume'
                    value={this.state.clVolume}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
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
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Filter 2:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='filterPressure2'
                    value={this.state.filterPressure2}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Filter 3:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='filterPressure3'
                    value={this.state.filterPressure3}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={4} sm={3} className='flex-jc-center'>
                  <ControlLabel>Filter 4:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='filterPressure4'
                    value={this.state.filterPressure4}
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



