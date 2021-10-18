import './account.scss';

import fetchGivenOffers from 'actions/givenOffersActions';
import fetchReceivedOffers from 'actions/receivedOffersActions';
import Header from 'components/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import avatar from '../../assets/icons/mailAccount.svg';
import offerImg from '../../assets/images/offer-img.png';

function Account() {
  const userInfo = window.localStorage.getItem('user-info');
  const location = useLocation();
  const givenOffers = useSelector((state) => state.givenOffers);
  const receivedOffers = useSelector((state) => state.receiveders);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReceivedOffers());
    dispatch(fetchGivenOffers());
  }, [dispatch, location.pathname]);
  return (
    <div className="account">
      <Header />
      <div className="account__email">
        <img src={avatar} alt="avatar" />
        <p>{userInfo}</p>
      </div>
      <div className="offerNavbar">
        {' '}
        <ul>
          <li>
            <NavLink
              activeClassName="offerActive"
              to="/hesabım/alınan-teklifler"
            >
              Teklif Aldıklarım
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="offerActive"
              to="/hesabım/verilen-teklifler"
            >
              Teklif Verdiklerim
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="offerBody">
        {location.pathname === '/hesabım/alınan-teklifler'
          ? receivedOffers.receivedOffers.map((item) => (
              <div className="offerBody__card">
                <div className="offerBody__card-left">
                  <img src={offerImg} alt="" />
                  <div className="offerBody__card-left-desc">
                    <h1>{item.title}</h1>
                    <div className="offerBody__card-left-desc-price">
                      <p>Alınan Teklif: </p>{' '}
                      <span>
                        {' '}
                        {item.price
                          .toLocaleString('tr-TR', {
                            style: 'currency',
                            currency: 'TRY',
                          })
                          .slice(1)}
                        TL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="offerBody__card-right">
                  <button className="offerConfirm" type="button">
                    Onayla
                  </button>
                  <button className="offerreject" type="button">
                    Reddet
                  </button>
                </div>
              </div>
            ))
          : givenOffers.givenOffers.map((item) => (
              <div className="offerBody__card">
                <div className="offerBody__card-left">
                  <img src={offerImg} alt="" />
                  <div className="offerBody__card-left-desc">
                    <h1>{item.title}</h1>
                    <div className="offerBody__card-left-desc-price">
                      <p>Alınan Teklif: </p>{' '}
                      <span>
                        {item.price
                          .toLocaleString('tr-TR', {
                            style: 'currency',
                            currency: 'TRY',
                          })
                          .slice(1)}
                        TL
                      </span>
                    </div>
                  </div>
                </div>
                <div className="offerBody__card-right">
                  <button className="offerConfirm" type="button">
                    Onayla
                  </button>
                  <button className="offerreject" type="button">
                    Reddet
                  </button>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default Account;
