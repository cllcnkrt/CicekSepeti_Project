import './forgetPassword.scss';

import { forgetPasswordValidate } from 'helpers';
import useForgetPassword from 'hooks/useForgetPassword';
import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/login.png';
import logo from '../../assets/logo/logo.svg';

function ForgetPassword() {
  const { handleChange, input, handleSubmit, error } = useForgetPassword(
    forgetPasswordValidate
  );

  return (
    <div className="forgetPassword">
      <div className="forgetPassword__left">
        <img className="forgetPassword__left-img" src={image} alt="left-img" />
      </div>
      <div className="forgetPassword__right">
        <div className="forgetPassword__right-container">
          <div className="forgetPassword__right-container__logo">
            <img src={logo} alt="logo" />
          </div>
          <form
            className="forgetPassword__right-container__form"
            onSubmit={handleSubmit}
          >
            <div className="forgetPassword__right-container__form-banner">
              <h1>Şifre Yenile</h1>
              <h3>Lütfen üye olduğunuz e-posta adresini girin!</h3>
            </div>
            <div className="forgetPassword__right-container__form-inputs">
              <input
                id="email"
                type="email"
                name="email"
                placeholder="e-posta"
                className={error?.email ? 'form-input wrong' : 'form-input'}
                value={input?.email}
                onChange={handleChange}
              />
            </div>
            <button className="gonder" type="submit">
              Gönder
            </button>
            <h2 className="ya-da">Ya da</h2>
            <Link to="/yeni-uyelik">
              <button type="submit">Üye Ol</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
