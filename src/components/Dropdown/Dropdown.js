/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './dropdown.scss';

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
        setIsOpen(true);
      }}
    >
      <label htmlFor="">{title}</label>
      <div className={className} name={name} id={name}>
        <span>{value || `${title} seç`}</span>
        <img src={arrowDown} alt="" />
      </div>
      <div
        className={
          isOpen ? 'dropdown__select-list open' : 'dropdown__select-list '
        }
      >
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
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
