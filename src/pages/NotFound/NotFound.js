import './notFound.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import notFoundImg from '../../assets/images/notFound.png';

function NotFound() {
  return (
    <div className="NotFound">
      <img src={notFoundImg} alt="notFoundImg" />
      <h1>Aradığın Sayfayı Bulamadım!</h1>
      <div className="error">
        <p className="error-p">404 Error</p>
      </div>
      <p>Buradan hemen anasayfaya dönüş yapabilirsiniz.</p>
      <Link to="/">
        <button type="button">Anasayfaya Dön</button>
      </Link>
    </div>
  );
}

export default NotFound;
