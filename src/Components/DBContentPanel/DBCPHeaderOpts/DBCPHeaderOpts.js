import React, { Component } from 'react';

import '../../../Sass/index.css';

export default class DBCPHeaderOpts extends Component {
  render() {
    return (
      <div className='dbcp-header__opts'>
        <label type='button' className='dbcp-header__opts-btn' onClick={this.props.changeToSeasonal}>Seasonal</label>
        <label type='button' className='dbcp-header__opts-btn' onClick={this.props.changeToYear}>Year-Round</label>
      </div>
    );
  }
}