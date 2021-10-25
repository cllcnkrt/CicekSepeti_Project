import './header.scss';

import { SignInClear } from 'actions/Authorization/signInActions';
import { SignUpClear } from 'actions/Authorization/signUpActions';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';

import accountIcon from '../../assets/icons/account.svg';
import addIcon from '../../assets/icons/add.svg';
import logo from '../../assets/logo/logo.svg';

function Header() {
  const location = useLocation();
  const isUser = window.localStorage.getItem('access_token');
  const dispatch = useDispatch();
  const handleExit = () => {
    toast.success('Çıkış yapıldı', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    });
    window.localStorage.clear();
    dispatch(SignInClear());
    dispatch(SignUpClear());
  };
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
              <button type="button" className="addBtn">
                <img src={addIcon} alt="add-icon" />
                <span className="addProductText">Ürün Ekle</span>
              </button>
            </Link>
          )}
          {isUser &&
            (location.pathname === '/hesabım/alınan-teklifler' ||
              location.pathname === '/hesabım/verilen-teklifler') && (
              <Link to="/">
                <button
                  type="button"
                  className="right"
                  onClick={() => handleExit()}
                >
                  Çıkış
                </button>
              </Link>
            )}
          {isUser &&
            !(
              location.pathname === '/hesabım/alınan-teklifler' ||
              location.pathname === '/hesabım/verilen-teklifler'
            ) && (
              <Link to="/hesabım/alınan-teklifler">
                <button type="button" className="right">
                  <img src={accountIcon} alt="add-icon" />
                  Hesabım
                </button>
              </Link>
            )}
          {!isUser && (
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
