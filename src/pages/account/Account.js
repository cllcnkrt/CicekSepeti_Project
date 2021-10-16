import './account.scss';

import Header from 'components/Header';
import React from 'react';
import { NavLink } from 'react-router-dom';

import avatar from '../../assets/icons/mailAccount.svg';
/* import offerImg from '../../assets/images/offer-img.png'; */

function Account() {
  return (
    <div className="account">
      <Header />
      <div className="account__email">
        <img src={avatar} alt="avatar" />
        <p>aysegul@example.com</p>
      </div>
      <div className="offerNavbar">
        {' '}
        <ul>
          <li>
            <NavLink activeClassName="accountActive " to="/">
              Teklif Aldıklarım
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="accountActive " to="/">
              Teklif Verdiklerim
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
