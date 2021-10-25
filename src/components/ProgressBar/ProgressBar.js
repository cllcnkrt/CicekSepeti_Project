/* eslint-disable react/prop-types */
import './progressBar.scss';

import React /* , { useEffect } */ from 'react';
/* import { useSelector } from 'react-redux'; */

function ProgressBar({ errors, progress }) {
  /*   const imageUpload = useSelector((state) => state.imageUpload); */
  const progressStyle = { width: `${progress}%` };
  /*  useEffect(() => {
    if (imageUpload?.isFetching) {
      const classname = 'progressBar__container';
    }
  }, [imageUpload?.isFetching]); */
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
