import './header.scss';

import React from 'react';

import accountIcon from '../../assets/icons/account.svg';
import addIcon from '../../assets/icons/add.svg';
import logo from '../../assets/logo/logo.svg';

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="wrapper__logo">
          <img src={logo} alt="wrapper-logo" />
        </div>
        <div className="wrapper__buttons">
          <button type="button">
            <img src={addIcon} alt="add-icon" />
            Ürün Ekle
          </button>
          <button type="button" className="right">
            <img src={accountIcon} alt="add-icon" />
            Giriş Yap
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
