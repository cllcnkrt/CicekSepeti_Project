/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './dropdown.scss';

import { textCapitalize } from 'helpers';
import React, { useState } from 'react';

import arrowDown from '../../assets/icons/arrowDown.svg';

function Dropdown({
  title,
  name,
  selectOption,
  value,
  selectClick,
  className,
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="dropdown"
      role="none"
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <label htmlFor="">{title}</label>
      <div className={className} name={name} id={name}>
        <span>{textCapitalize(value) || `${title} seç`}</span>
        <img src={arrowDown} alt="" />
      </div>
      <div
        className={
          isOpen ? 'dropdown__select-list open' : 'dropdown__select-list '
        }
      >
        <div className="dropdown__title">
          <p className="dropdown__title-p">{title} seç</p>
          <img src={arrowDown} alt="" />
        </div>
        {selectOption?.map((item) => (
          <div
            key={item.id}
            role="none"
            onClick={(event) => {
              selectClick(item, name);
              setIsOpen(false);
              event.stopPropagation();
            }}
            name={name}
            className="dropdown__select-list-item"
          >
            {textCapitalize(item.title)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
