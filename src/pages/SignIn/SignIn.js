/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import './signIn.scss';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import image from '../../assets/images/login.png';
import logo from '../../assets/logo/logo.svg';
import useForm from '../../helpers/useForm';
import validate from '../../helpers/validateInfo';

function SignIn() {
  const history = useHistory();
  const signIn = useSelector((state) => state.signIn);

  useEffect(() => {
    const isUser =
      window.localStorage.getItem('access_token') || signIn.signIn !== null;

    if (isUser) {
      history.push('/');
    }
  }, [history, signIn.signIn]);
  const { handleChange, form, handleSubmit, errors } = useForm(
    validate,
    'signIn'
  );

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
                placeholder="Email@example.com"
                className={errors.email ? 'form-input wrong' : 'form-input'}
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
              Hesabın var mı? <Link to="/yeni-uyelik">Üye Ol</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
