/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import './forgetPassword.scss';

import React from 'react';
import { Link } from 'react-router-dom';

import image from '../../assets/images/login.png';
import logo from '../../assets/logo/logo.svg';
import { authValidate } from '../../helpers';
import useAuth from '../../hooks/useAuth';

function ForgetPassword() {
  const { handleChange, form, handleSubmit, errors } = useAuth(
    authValidate,
    'signIn'
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
                className={errors.email ? 'form-input wrong' : 'form-input'}
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <Link to="/">
              <button className="gonder" type="submit">
                Gönder
              </button>
            </Link>
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
