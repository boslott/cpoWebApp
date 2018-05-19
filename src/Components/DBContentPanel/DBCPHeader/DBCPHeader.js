import React, { Component } from 'react';

import '../../../Sass/index.css';

export default class DBCPHeader extends Component {

  // static defaultProps = {
  //   title: 'View',
  // }

  render() {
    return (
      <header className='dbcp-header'>
        <h2 className='dbcp-header__title'>{this.props.title}</h2>
      </header>
    );
  }
}