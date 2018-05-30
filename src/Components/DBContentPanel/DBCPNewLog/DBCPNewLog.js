import React, { Component } from 'react';
import { Row } from 'react-bootstrap';

import '../../../Sass/index.css';
import FormOptBtns from '../../FormOptBtns/FormOptBtns';
import MainCompleteForm from '../../Forms/MainCompleteForm/MainCompleteForm';
import WadingCompleteForm from '../../Forms/WadingCompleteForm/WadingCompleteForm';

export default class DBCPNewLog extends Component {

  state = {
    formOpt: '',
  }

  changeForm = choice => {
    this.setState({ formOpt: choice });
  }

  render() {
    return (
      <div className='dbcpnew-log'>
        <Row className='btn-row'>
          <FormOptBtns formOpt={this.state.formOpt} changeForm={choice => this.changeForm(choice)} />
        </Row>
        <Row className='flex-center-all'>
          {this.state.formOpt ? (
            <div className='card w80'>
              {this.state.formOpt === 'main-complete' ? <MainCompleteForm /> : ''}
              {this.state.formOpt === 'wading-complete' ? <WadingCompleteForm /> : ''}
            </div>
          ) : ''}
        </Row>
      </div>
    );
  }
}