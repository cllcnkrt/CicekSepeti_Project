import './header.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import accountIcon from '../../assets/icons/account.svg';
import addIcon from '../../assets/icons/add.svg';
import logo from '../../assets/logo/logo.svg';

function Header() {
  const isUser = window.localStorage.getItem('access_token');
  return (
    <div className="header">
      <div className="wrapper">
        <div className="wrapper__logo">
          <Link to="/">
            <img src={logo} alt="wrapper-logo" />
          </Link>
        </div>
        <div className="wrapper__buttons">
          {isUser && (
            <Link to="/urun-ekleme">
              <button type="button">
                <img src={addIcon} alt="add-icon" />
                Ürün Ekle
              </button>
            </Link>
          )}
          {isUser ? (
            <Link to="/hesabım/alınan-teklifler">
              <button type="button" className="right">
                <img src={accountIcon} alt="add-icon" />
                Hesabım
              </button>
            </Link>
          ) : (
            <Link to="/giris">
              <button type="button" className="right">
                <img src={accountIcon} alt="add-icon" />
                Giriş Yap
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
