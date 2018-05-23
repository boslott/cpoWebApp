import React, { Component } from 'react';

import '../../Sass/index.css';

export default class PoolOptBtns extends Component {
  render() {
    return (
      <div className='pool-opt-btns'>
        <label
          type='button'
          className={this.props.pool === 'Main' ? 'btn pool-opt-btn active-btn' : 'btn pool-opt-btn'}
          onClick={this.props.changePoolMain}
        >Main Pool</label>
        <label
          type='button'
          className={this.props.pool === 'Wading' ? 'btn pool-opt-btn active-btn' : 'btn pool-opt-btn'}
          onClick={this.props.changePoolWading}
        >Wading Pool</label>
      </div>
    );
  }
}