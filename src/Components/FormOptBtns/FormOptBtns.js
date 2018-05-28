import React from 'react';

import '../../Sass/index.css';

const FormOptBtns = ({ formOpt, changeForm }) => (
  <div className='form-opt-btns'>
    <label
      type='button'
      className={formOpt === 'main-complete' ? 'btn pool-opt-btn active-btn' : 'btn pool-opt-btn'}
      onClick={() => changeForm('main-complete')}
    >
      Main Complete Form
    </label>
    <label
      type='button'
      className={formOpt === 'wading-complete' ? 'btn pool-opt-btn active-btn' : 'btn pool-opt-btn'}
      onClick={() => changeForm('wading-complete')}
    >
      Wading Complete Form
    </label>
    <label
      type='button'
      className={formOpt === 'maintenance' ? 'btn pool-opt-btn active-btn' : 'btn pool-opt-btn'}
      onClick={() => changeForm('maintenance')}
    >
      Maintenance Form
    </label>
    <label
      type='button'
      className={formOpt === 'quick-log' ? 'btn pool-opt-btn active-btn' : 'btn pool-opt-btn'}
      onClick={() => changeForm('quick-log')}
    >
      Quick Log Form
    </label>
    <label
      type='button'
      className={formOpt === 'chemical-add' ? 'btn pool-opt-btn active-btn' : 'btn pool-opt-btn'}
      onClick={() => changeForm('chemical-add')}
    >
      Chemical Addition Form
    </label>
  </div>
);

export default FormOptBtns;