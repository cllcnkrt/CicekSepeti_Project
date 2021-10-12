/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './signIn.scss';

import React from 'react';

import image from '../../assets/images/Group52.png';
import logo from '../../assets/logo/Group6607.svg';
import useForm from './useForm';
import validate from './validateInfo';

function SignIn() {
  const { handleChange, form, handleSubmit, errors, isSubmitting } =
    useForm(validate);
  console.log(form, isSubmitting, errors);
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
          <form className="container__form" onSubmit={handleSubmit}>
            <div className="container__form-banner">
              <h1>Giriş Yap</h1>
              <h3>Fırsatlardan yararlanmak için giriş yap!</h3>
            </div>
            <div className="container__form-inputs">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className={errors.email ? 'form-input wrong' : 'form-input'}
                placeholder="Email@example.com"
                value={form.email}
                onChange={handleChange}
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
                className={errors.password ? 'form-input wrong' : 'form-input'}
                value={form.password}
                onChange={handleChange}
              />
              <p>Şifremi Unuttum</p>
            </div>
            <button type="submit">Giriş Yap</button>
            <span className="form-input-login">
              Hesabın var mı? <a href="#">Üye Ol</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;

/* anchor tag i link ile degisecek" */
