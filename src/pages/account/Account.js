import './account.scss';

import fetchGivenOffers from 'actions/account/givenOffersActions';
import fetchReceivedOffers from 'actions/account/receivedOffersActions';
import ConfirmModal from 'components/ConfimModal/ConfirmModal';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import fetchAcceptOffer from '../../actions/account/acceptOfferActions';
import avatar from '../../assets/icons/mailAccount.svg';

function Account() {
  const userInfo = window.localStorage.getItem('user-info');
  const location = useLocation();
  const givenOffers = useSelector((state) => state.givenOffers.givenOffers);
  const receivedOffers = useSelector(
    (state) => state.receivedOffers.receivedOffers
  );
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const dispatch = useDispatch();
  const [offeredId, setOfferedId] = useState('');
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
          ? receivedOffers?.map((item) => (
              <div className="offerBody__card">
                <div className="offerBody__card-left">
                  <img src={item.product.imageUrl} alt="" />
                  <div className="offerBody__card-left-desc">
                    <h1>{item.product.title}</h1>
                    <div className="offerBody__card-left-desc-price">
                      <p>Alınan Teklif: </p>{' '}
                      <span>
                        {' '}
                        {item.offeredPrice
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
                  {item.isSold ? (
                    <p>Satıldı</p>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          setOpenConfirmModal(true);
                          setOfferedId(item.id);
                        }}
                        className="offerConfirm"
                        type="button"
                      >
                        Onayla
                      </button>
                      <button className="offerreject" type="button">
                        Reddet
                      </button>
                    </>
                  )}
                </div>
              </div>
            ))
          : givenOffers?.map((item) => (
              <div className="offerBody__card">
                <div className="offerBody__card-left">
                  <img src={item.product.imageUrl} alt="" />
                  <div className="offerBody__card-left-desc">
                    <h1>{item.product.title}</h1>
                    <div className="offerBody__card-left-desc-price">
                      <p>Verilen Teklif: </p>{' '}
                      <span>
                        {' '}
                        {item.offeredPrice
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
      {openConfirmModal && (
        <ConfirmModal
          closeConfirmModal={setOpenConfirmModal}
          title="Onayla"
          question="Onaylamak istiyor musunuz?"
          buttonLeft="Vazgeç"
          buttonRight="Onayla"
          action={() => fetchAcceptOffer(offeredId)}
        />
      )}
    </div>
  );
}

export default Account;
