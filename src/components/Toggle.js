import React from 'react';

export default function Toggle() {
  return (
    <div className='container'>
      <input type='checkbox' name='toggle' id='toggleTitle' />
      <label htmlFor='toggleTitle'>
        <div className='toggleCheck' data-unchecked='기본' data-checked='상세' ></div>
      </label>
    </div>
  );
}