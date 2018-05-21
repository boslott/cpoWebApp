import React, { Component } from 'react';

import '../../Sass/index.css';

export default class LogOptions extends Component {
  render() {
    return (
      <div className='log-options__btn-box'>
        <label className='log-options__btn' type='button'>Complete Logs</label>
        <label className='log-options__btn' type='button'>Quick Logs</label>
        <label className='log-options__btn' type='button'>Maintenance Logs</label>
        <label className='log-options__btn' type='button'>Chemcial Additions</label>
      </div>
    );
  }
}