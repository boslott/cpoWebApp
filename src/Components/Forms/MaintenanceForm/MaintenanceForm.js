import React, { Component } from 'react';
import moment from 'moment';
import { Row, Col, FormGroup, ControlLabel, FormControl, Radio } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import '../../../Sass/index.css';
import 'react-datepicker/dist/react-datepicker.css';

const NEW_MAINTENANCE_LOG = gql`
    mutation newMaintenanceLog(
      $adjustments: String
      $backwash: String
      $backwashLengthTime: String
      $cleanBasket: String
      $completedOn: DateTime!
      $createdOn: DateTime
      $maintenanceBy: String!
      $newChlorinatorFlowRate: String
      $newFlow: String
      $newFilterPressure1: String
      $newFilterPressure2: String
      $newFilterPressure3: String
      $newFilterPressure4: String
      $pool: String
      $turnDownChlorinator: String
      $turnUpChlorinator: String
      $turnDownORP: String
      $turnUpORP: String
      $turnDownPH: String
      $turnUpPH: String
      $vacuum: String
      $vacuumDeep: String
      $vacuumLanesLeft: String
      $vacuumLanesRight: String
      $vacuumShallow: String
      $vacuumWholePool: String
    ) {
      createMaintenanceLog (
        adjustments: $adjustments
        backwash: $backwash
        backwashLengthTime: $backwashLengthTime
        cleanBasket: $cleanBasket
        completedOn: $completedOn
        createdOn: $createdOn
        maintenanceBy: $maintenanceBy
        newChlorinatorFlowRate: $newChlorinatorFlowRate
        newFlow: $newFlow
        newFilterPressure1: $newFilterPressure1
        newFilterPressure2: $newFilterPressure2
        newFilterPressure3: $newFilterPressure3 
        newFilterPressure4: $newFilterPressure4
        pool: $pool
        turnDownChlorinator: $turnDownChlorinator
        turnUpChlorinator: $turnUpChlorinator
        turnDownORP: $turnDownORP
        turnUpORP: $turnUpORP
        turnDownPH: $turnDownPH
        turnUpPH: $turnUpPH
        vacuum: $vacuum
        vacuumDeep: $vacuumDeep
        vacuumLanesLeft: $vacuumLanesLeft
        vacuumLanesRight: $vacuumLanesRight
        vacuumShallow: $vacuumShallow
        vacuumWholePool: $vacuumWholePool
      ) {
        id
      }
    }
  `;

export default class MaintenanceForm extends Component {

  state = {
    adjustments: '',
    backwash: '',
    backwashLengthTime: '0',
    cleanBasket: '',
    completedOn: moment(),
    createdOn: moment(),
    maintenanceBy: '',
    newChlorinatorFlowRate: '',
    newFlow: '',
    newFilterPressure1: '',
    newFilterPressure2: '',
    newFilterPressure3: '',
    newFilterPressure4: '',
    pool: '',
    turnDownChlorinator: '',
    turnUpChlorinator: '',
    turnDownORP: '',
    turnUpORP: '',
    turnDownPH: '',
    turnUpPH: '',
    vacuum: '',
    vacuumDeep: '',
    vacuumLanesLeft: '',
    vacuumLanesRight: '',
    vacuumShallow: '',
    vacuumWholePool: '',
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
      <Mutation mutation={NEW_MAINTENANCE_LOG}>
        {(newMaintenanceLog, {data}) => (
          <form
            className='maintenance-form'
            onSubmit = {event => {
              event.preventDefault();
              newMaintenanceLog({ variables: {
                adjustments: this.state.adjustments,
                backwash: this.state.backwash,
                backwashLengthTime: this.state.backwashLengthTime,
                cleanBasket: this.state.cleanBasket,
                completedOn: this.state.completedOn,
                createdOn: moment(),
                maintenanceBy: this.state.maintenanceBy,
                newChlorinatorFlowRate: this.state.newChlorinatorFlowRate,
                newFlow: this.state.newFlow,
                newFilterPressure1: this.state.newFilterPressure1,
                newFilterPressure2: this.state.newFilterPressure2,
                newFilterPressure3: this.state.newFilterPressure3,
                newFilterPressure4: this.state.newFilterPressure4,
                pool: this.state.pool,
                turnDownChlorinator: this.state.turnDownChlorinator,
                turnUpChlorinator: this.state.turnUpChlorinator,
                turnDownORP: this.state.turnDownORP,
                turnUpORP: this.state.turnUpORP,
                turnDownPH: this.state.turnDownPH,
                turnUpPH: this.state.turnUpPH,
                vacuum: this.state.vacuum,
                vacuumDeep: this.state.vacuumDeep,
                vacuumLanesLeft: this.state.vacuumLanesLeft,
                vacuumLanesRight: this.state.vacuumLanesRight,
                vacuumShallow: this.state.vacuumShallow,
                vacuumWholePool: this.state.vacuumWholePool,
              }});
              this.setState({ 
                adjustments: '',
                backwash: '',
                backwashLengthTime: '0',
                cleanBasket: '',
                completedOn: moment(),
                createdOn: moment(),
                maintenanceBy: '',
                newChlorinatorFlowRate: '',
                newFlow: '',
                newFilterPressure1: '',
                newFilterPressure2: '',
                newFilterPressure3: '',
                newFilterPressure4: '',
                pool: '',
                turnDownChlorinator: '',
                turnUpChlorinator: '',
                turnDownORP: '',
                turnUpORP: '',
                turnDownPH: '',
                turnUpPH: '',
                vacuum: '',
                vacuumDeep: '',
                vacuumLanesLeft: '',
                vacuumLanesRight: '',
                vacuumShallow: '',
                vacuumWholePool: '',
              });
            }}
          >
            <h3 className='form__title font-3rem'>
              Maintenance Log
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
                  <ControlLabel>Who Maintenanced:</ControlLabel>
                </Col>
                <Col xs={4} sm={3}>
                  <FormControl
                    type='text'
                    name='maintenanceBy'
                    value={this.state.maintenanceBy}
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
                <Col xs={6} className='flex-jc-center'>
                  <ControlLabel>Clean Out Pump Room Skimmer Basket:</ControlLabel>
                </Col>
                <Col xs={6} sm={3} className='flex-jc-center'>
                  <Radio
                    name='cleanBasket'
                    inline
                    value='true'
                    checked={this.state.cleanBasket === 'true' ? true : false}
                    onChange={this.handleInputChange}
                  >
                    Yes
                  </Radio>
                  <Radio
                    name='cleanBasket'
                    inline
                    value='false'
                    checked={this.state.cleanBasket === 'true' ? '' : true }
                    onChange={this.handleInputChange}
                  >
                    No
                  </Radio>
                </Col>
              </FormGroup>
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={3} className='flex-jc-center'>
                  <ControlLabel>Backwash:</ControlLabel>
                </Col>
                <Col xs={3}>
                  <Radio
                    name='backwash'
                    inline
                    value='true'
                    checked={this.state.backwash === 'true' ? true : false}
                    onChange={this.handleInputChange}
                  >
                    Yes
                  </Radio>
                  <Radio
                    name='backwash'
                    inline
                    value='false'
                    checked={this.state.backwash === 'true' ? '' : true}
                    onChange={this.handleInputChange}
                  >
                    No
                  </Radio>
                </Col>
              </FormGroup>
              {this.state.backwash === 'true' ? (
                <FormGroup bsClass='flex-all-center'>
                  <Col xs={3} className='flex-jc-center'>
                    <ControlLabel>Backwash Length (mins):</ControlLabel>
                  </Col>
                  <Col xs={3}>
                    <FormControl
                      type='text'
                      name='backwashLengthTime'
                      value={this.state.backwashLengthTime}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </FormGroup>
              ) : ''}
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={3} className='flex-jc-center'>
                  <ControlLabel>Vacuum</ControlLabel>
                </Col>
                <Col xs={3}>
                  <Radio
                    name='vacuum'
                    inline
                    value='true'
                    checked={this.state.vacuum === 'true' ? true : false}
                    onChange={this.handleInputChange}
                  >
                    Yes
                  </Radio>
                  <Radio
                    name='vacuum'
                    inline
                    value='false'
                    checked={this.state.vacuum === 'true' ? '' : true}
                    onChange={this.handleInputChange}
                  >
                    No
                  </Radio>
                </Col>
              </FormGroup>
              {this.state.vacuum === 'true' ? (
                <Col xs={6}>
                  <Row className='log-form-row'>
                    <FormGroup bsClass='flex-all-center'>
                      <Col xs={6}>
                        <ControlLabel>Shallow Area</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='vacuumShallow'
                          inline
                          value='true'
                          checked={this.state.vacuumShallow === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='vacuumShallow'
                          inline
                          value='false'
                          checked={this.state.vacuumShallow === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup bsClass='flex-all-center'>
                      <Col xs={6}>
                        <ControlLabel>Lanes Right</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='vacuumLanesRight'
                          inline
                          value='true'
                          checked={this.state.vacuumLanesRight === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='vacuumLanesRight'
                          inline
                          value='false'
                          checked={this.state.vacuumShallow === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup bsClass='flex-all-center'>
                      <Col xs={6}>
                        <ControlLabel>Lanes Left</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='vacuumLanesLeft'
                          inline
                          value='true'
                          checked={this.state.vacuumLanesLeft === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='vacuumLanesLeft'
                          inline
                          value='false'
                          checked={this.state.vacuumLanesLeft === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup bsClass='flex-all-center'>
                      <Col xs={6}>
                        <ControlLabel>Deep End</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='vacuumDeep'
                          inline
                          value='true'
                          checked={this.state.vacuumDeep === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='vacuumDeep'
                          inline
                          value='false'
                          checked={this.state.vacuumDeep === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup bsClass='flex-all-center'>
                      <Col xs={6}>
                        <ControlLabel>Whole Pool</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='vacuumWholePool'
                          inline
                          value='true'
                          checked={this.state.vacuumWholePool === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='vacuumWholePool'
                          inline
                          value='false'
                          checked={this.state.vacuumWholePool === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </FormGroup>
                  </Row>
                </Col>
              ) : ''}
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={3} className='flex-jc-center'>
                  <ControlLabel>Adjustments:</ControlLabel>
                </Col>
                <Col xs={3}>
                  <Radio
                    name='adjustments'
                    inline
                    value='true'
                    checked={this.state.adjustments === 'true' ? true : false}
                    onChange={this.handleInputChange}
                  >
                    Yes
                  </Radio>
                  <Radio
                    name='adjustments'
                    inline
                    value='false'
                    checked={this.state.adjustments === 'true' ? '' : true}
                    onChange={this.handleInputChange}
                  >
                    No
                  </Radio>
                </Col>
              </FormGroup>
              {this.state.adjustments === 'true' ? (
                <Col xs={6}>
                  <FormGroup bsClass='flex-all-center'>
                    <Row className='flex-center-all'>
                      <Col xs={6}>
                        <ControlLabel>Turned Down Chlorinator</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='turnDownChlorinator'
                          inline
                          value='true'
                          checked={this.state.turnDownChlorinator === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='turnDownChlorinator'
                          inline
                          value='false'
                          checked={this.state.turnDownChlorinator === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup bsClass='flex-all-center'>
                    <Row className='flex-center-all'>
                      <Col xs={6}>
                        <ControlLabel>Turned Up Chlorinator</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='turnUpChlorinator'
                          inline
                          value='true'
                          checked={this.state.turnUpChlorinator === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='turnUpChlorinator'
                          inline
                          value='false'
                          checked={this.state.turnUpChlorinator === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </Row>
                  </FormGroup>
                  {(this.state.turnDownChlorinator === 'true' || this.state.turnUpChlorinator === 'true') ? (
                    <FormGroup bsClass='flex-all-center my-2'>
                      <Row className='flex-center-all mx-1'>
                        <Col xs={6}>
                          <ControlLabel>New Chlorinator Flow Rate:</ControlLabel>
                        </Col>
                        <Col xs={6}>
                          <FormControl
                            type='text'
                            name='newChlorinatorFlowRate'
                            value={this.state.newChlorinatorFlowRate}
                            onChange={this.handleInputChange}
                          />
                        </Col>
                      </Row>
                    </FormGroup>
                  ) : ''}
                  <FormGroup bsClass='flex-all-center'>
                    <Row className='flex-center-all'>
                      <Col xs={6}>
                        <ControlLabel>Turned Down ORP</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='turnDownORP'
                          inline
                          value='true'
                          checked={this.state.turnDownORP === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='turnDownORP'
                          inline
                          value='false'
                          checked={this.state.turnDownORP === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup bsClass='flex-all-center'>
                    <Row className='flex-center-all'>
                      <Col xs={6}>
                        <ControlLabel>Turned Up ORP</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='turnUpORP'
                          inline
                          value='true'
                          checked={this.state.turnUpORP === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='turnUpORP'
                          inline
                          value='false'
                          checked={this.state.turnUpORP === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup bsClass='flex-all-center'>
                    <Row className='flex-center-all'>
                      <Col xs={6}>
                        <ControlLabel>Turned Down pH Controller</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='turnDownPH'
                          inline
                          value='true'
                          checked={this.state.turnDownPH === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='turnDownPH'
                          inline
                          value='false'
                          checked={this.state.turnDownPH === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup bsClass='flex-all-center'>
                    <Row className='flex-center-all'>
                      <Col xs={6}>
                        <ControlLabel>Turned Up pH Controller</ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <Radio
                          name='turnUpPH'
                          inline
                          value='true'
                          checked={this.state.turnUpPH === 'true' ? true : false}
                          onChange={this.handleInputChange}
                        >
                          Yes
                        </Radio>
                        <Radio
                          name='turnUpPH'
                          inline
                          value='false'
                          checked={this.state.turnUpPH === 'true' ? '' : true}
                          onChange={this.handleInputChange}
                        >
                          No
                        </Radio>
                      </Col>
                    </Row>
                  </FormGroup>
                </Col>
              ) : ''}
            </Row>
            <Row className='log-form-row'>
              <FormGroup bsClass='flex-all-center'>
                <Col xs={6} className='flex-jc-center'>
                  <ControlLabel>New System Readings:</ControlLabel>
                </Col>
                <Col xs={6}>
                  <Row className='log-form-row'>
                    <FormGroup className='flex-all-center'>
                      <Col xs={6}>
                        <ControlLabel>
                          New Flow Rate:
                        </ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <FormControl
                          type='text'
                          name='newFlow'
                          value={this.state.newFlow}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup className='flex-center-all'>
                      <Col xs={6}>
                        <ControlLabel>
                          New Filter 1 PSI:
                        </ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <FormControl
                          type='text'
                          name='newFilterPressure1'
                          value={this.state.newFilterPressure1}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup className='flex-jc-center'>
                      <Col xs={6}>
                        <ControlLabel>
                          New Filter 2 PSI:
                        </ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <FormControl
                          type='text'
                          name='newFilterPressure2'
                          value={this.state.newFilterPressure2}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup className='flex-jc-center'>
                      <Col xs={6}>
                        <ControlLabel>
                          New Filter 3 PSI:
                        </ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <FormControl
                          type='text'
                          name='newFilterPressure3'
                          value={this.state.newFilterPressure3}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                  </Row>
                  <Row className='log-form-row'>
                    <FormGroup className='flex-jc-center'>
                      <Col xs={6}>
                        <ControlLabel>
                          New Filter 4 PSI:
                        </ControlLabel>
                      </Col>
                      <Col xs={6}>
                        <FormControl
                          type='text'
                          name='newFilterPressure4'
                          value={this.state.newFilterPressure4}
                          onChange={this.handleInputChange}
                        />
                      </Col>
                    </FormGroup>
                  </Row>
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