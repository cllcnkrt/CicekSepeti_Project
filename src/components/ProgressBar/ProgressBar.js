/* eslint-disable react/prop-types */
import './progressBar.scss';

import React from 'react';

function ProgressBar({ errors, progress }) {
  const progressStyle = { width: `${progress}%` };

  return (
    <div
      className={
        errors.imageUrl
          ? 'progressBar__ container wrong'
          : 'progressBar__container'
      }
    >
      <span className="progressBar-percentage">%{progress}</span>
      <div className="progressBar">
        <div style={progressStyle} className="progressBar__outside">
          <div className="progressBar__outside-inside" />
        </div>
      </div>
      <h4>Yükleniyor</h4>
    </div>
  );
}

export default ProgressBar;
