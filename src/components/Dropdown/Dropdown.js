/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './dropdown.scss';

import React from 'react';

import arrowDown from '../../assets/icons/arrowDown.svg';

function Dropdown({ title, name, selectOption }) {
  return (
    <div className="dropdown">
      <label htmlFor="">{title}</label>
      <div className="dropdown__select" name={name} id={name}>
        <span>{title} seç</span>
        <img src={arrowDown} alt="" />
      </div>
      <div className="dropdown__select-list">
        {selectOption?.map((item) => (
          <div className="dropdown__select-list-item">{item.title}</div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
