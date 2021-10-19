/* eslint-disable react/prop-types */
import './confirmModal.scss';

import React from 'react';

function ConfirmModal({ closeModal, buttonLeft, buttonRight }) {
  return (
    <div className="confirmModal">
      <div className="confirmModal__container">
        <div className="confirmModal__container-title">
          <h1>Satın Al</h1>
        </div>
        <div className="confirmModal__container-body">
          <p>Satın Almak istiyor musunuz?</p>
        </div>
        <div className="confirmModal__container-footer">
          <button
            className="cancelBtn "
            type="button"
            onClick={() => closeModal(false)}
          >
            {buttonLeft}
          </button>
          <button type="button">{buttonRight}</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
