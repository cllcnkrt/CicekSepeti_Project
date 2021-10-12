/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './signUp.scss';

import React from 'react';

import image from '../../assets/images/Group52.png';
import logo from '../../assets/logo/Group6607.svg';

function SignUp() {
  return (
    <div className="signIn">
      <div className="signIn__left">
        <img src={image} alt="left-img" />
      </div>
      <div className="signIn__right">
        <div className="container">
          <div className="container__logo">
            <img src={logo} alt="logo" />
          </div>
          <form className="container__form">
            <div className="container__form-banner">
              <h1>Üye Ol</h1>
              <h3>Fırsatlardan yararlanmak için üye ol!</h3>
            </div>
            <div className="container__form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-input"
                placeholder="Email@example.com"
                value={}
                onChange={}
              />
            </div>
            <div className="container__form-inputs">
              <label htmlFor="password" className="form-label">
                Şifre
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="•••••"
                className='form-input'
                value={}
                onChange={}
              />
            </div>
            <button type="submit">Üye Ol</button>
            <span className="form-input-login">
              Hesabın var mı? <a href="/signIn">Giriş Yap</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;

/* anchor tag i link ile degisecek" */
