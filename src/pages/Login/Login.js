import './login.scss';

import React from 'react';

import image from '../../assets/images/Group52.png';
import logo from '../../assets/logo/Group6607.svg';

function Login() {
  return (
    <div className="login">
      <div className="image">
        <img src={image} alt="login-img" />
      </div>
      <div className="form__section">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="form">
          <h1>Giriş Yap</h1>
          <h3>Fırsatlardan yararlanmak için giriş yap!</h3>
          <div className="inputs">
            <h3>Email</h3>
            <input type="text" />
            <h3>Şifre</h3>
            <input type="text" />
            <p>Şifremi unuttum</p>
          </div>
          <button type="submit">Giriş</button>
          <h3>
            Hesabın yok mu? <span className="register-link">Üye Ol</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Login;
