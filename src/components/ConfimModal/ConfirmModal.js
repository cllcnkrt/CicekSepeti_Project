/* eslint-disable react/prop-types */
import './confirmModal.scss';

import React from 'react';
import { useDispatch } from 'react-redux';

function ConfirmModal({
  closeConfirmModal,
  title,
  question,
  buttonLeft,
  buttonRight,
  action,
}) {
  const dispatch = useDispatch();

  return (
    <div className="confirmModal">
      <div className="confirmModal__container">
        <div className="confirmModal__container-title">
          <h1>{title}</h1>
        </div>
        <div className="confirmModal__container-body">
          <p>{question}</p>
        </div>
        <div className="confirmModal__container-footer">
          <button
            className="cancelBtn "
            type="button"
            onClick={() => closeConfirmModal(false)}
          >
            {buttonLeft}
          </button>
          <button
            type="button"
            onClick={() => {
              dispatch(action());
              closeConfirmModal(false);
            }}
          >
            {buttonRight}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
