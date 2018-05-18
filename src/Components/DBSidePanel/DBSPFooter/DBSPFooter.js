import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import '../../../Sass/index.css';

export default class DBSPFooter extends Component {
  render() {
    return (
      <footer className='dbsp-footer'>
        <div className='dbsp-footer__help-box'>
          <FontAwesomeIcon icon='question-circle' size='lg' />
          <h4 className='dbsp-footer__help-text'>Help</h4>
        </div>
      </footer>
    );
  }
}