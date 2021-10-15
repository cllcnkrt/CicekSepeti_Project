import './account.scss';

import Header from 'components/Header';
import React from 'react';

import avatar from '../../assets/icons/account.svg';
import offerImg from '../../assets/images/offer-img.png';

function Account() {
  return (
    <div className="account">
      <Header />

      <div className="account__email">
        <img src={avatar} alt="" />
        <p>aysegul@example.com</p>
      </div>
      <div className="account__offer">
        <div className="account__offer-product">
          <div className="offer__product-left">
            <div className="offer-image">
              <img src={offerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
