/* eslint-disable jsx-a11y/label-has-associated-control */
import './signUp.scss';

import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';

import image from '../../assets/images/login.png';
import logo from '../../assets/logo/logo.svg';
import { validateInfo } from '../../helpers';
import useForm from '../../hooks/useForm';

function SignUp() {
  const history = useHistory();
  const signUp = useSelector((state) => state.signUp);
  useEffect(() => {
    const isUser = window.localStorage.getItem('access_token');
    if (isUser) {
      history.push('/');
    }
  }, [history, signUp.signUp]);
  const { handleChange, form, handleSubmit, errors } = useForm(
    validateInfo,
    'signUp'
  );

  return (
    <div className="signUp">
      <div className="signUp__left">
        <img src={image} alt="left-img" />
      </div>
      <div className="signUp__right">
        <div className="container">
          <div className="container__logo">
            <img src={logo} alt="logo" />
          </div>
          <form className="container__form" onSubmit={handleSubmit}>
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
            </div>
            <button type="submit">Üye Ol</button>
            <span className="form-input-login">
              Hesabın var mı? <Link to="/giris">Giriş Yap</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
