import React, { Component } from 'react';

import '../../../Sass/index.css';
import DBSPNavLink from '../DBSPNavLink/DBSPNavLink';

export default class DBSPMainNav extends Component {
  render() {
    return (
      <div className='dbsp-mainnav'>
        <DBSPNavLink icon='tachometer-alt' linkText='Dashboard' linkPath='/dashboard'/>
        <DBSPNavLink icon='plus-square' linkText='New Log' linkPath='/newlog' />
        <DBSPNavLink icon='clipboard-list' linkText='View Logs' linkPath='/viewlogs' />
        <DBSPNavLink icon='tint' linkText='Chemicals' linkPath='/chemicals' />
        <DBSPNavLink icon='user-circle' linkText='Account' linkPath='/account' />
        <DBSPNavLink icon='sign-out-alt' linkText='Logout' linkPath='/' />
      </div>
    );
  }
}