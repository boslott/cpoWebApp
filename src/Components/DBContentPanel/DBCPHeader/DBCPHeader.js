import React, { Component } from 'react';

import '../../../Sass/index.css';
import DBCPHeaderOpts from '../DBCPHeaderOpts/DBCPHeaderOpts';

export default class DBCPHeader extends Component {

  // static defaultProps = {
  //   title: 'View',
  // }

  render() {
    const { title } = this.props;
    return (
      <header className='dbcp-header'>
        <h2 className='dbcp-header__title'>{title}</h2>
        {(title === 'View' || title === 'chemicals') ? 
          <DBCPHeaderOpts changeToYear={this.props.changeToYear} changeToSeasonal={this.props.changeToSeasonal} /> : '' }
      </header>
    );
  }
}