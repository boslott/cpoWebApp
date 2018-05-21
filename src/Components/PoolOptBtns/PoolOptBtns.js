import React, { Component } from 'react';

import '../../Sass/index.css';

export default class PoolOptBtns extends Component {
  render() {
    return (
      <div className='pool-opt-btns'>
        <label type='button' className='btn pool-opt-btn'>Main Pool</label>
        <label type='button' className='btn pool-opt-btn'>Wading Pool</label>
      </div>
    );
  }
}