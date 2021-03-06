import './account.scss';

import fetchGivenOffers from 'actions/account/givenOffersActions';
import fetchReceivedOffers from 'actions/account/receivedOffersActions';
import fetchRejectOffer from 'actions/account/rejectOfferActions';
import fetchPurchase from 'actions/product/purchaseActions';
import ConfirmModal from 'components/ConfimModal/ConfirmModal';
import Header from 'components/Header';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory, useLocation } from 'react-router-dom';

import fetchAcceptOffer from '../../actions/account/acceptOfferActions';
import loadingGif from '../../assets/gif/loading.gif';
import avatar from '../../assets/icons/mailAccount.svg';

function Account() {
  const userInfo = window.localStorage.getItem('user-info');
  const location = useLocation();
  const givenOffers = useSelector((state) => state.givenOffers);
  const receivedOffers = useSelector((state) => state.receivedOffers);
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openRejectModal, setOpenRejectModal] = useState(false);
  const [openAcceptModal, setOpenAcceptModal] = useState(false);
  const [purchaseId, setPurchaseId] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  const [offeredId, setOfferedId] = useState('');
  const handleUrl = (item) => {
    history.push(`/urun-detay/${item.product.id}`);
  };
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      dispatch(fetchReceivedOffers());
      dispatch(fetchGivenOffers());
    }
    return () => {
      mounted = false;
    };
  }, [dispatch]);
  if (givenOffers.isFetching || receivedOffers.isFetching) {
    return (
      <div className="loading">
        <img src={loadingGif} alt="loading" />
      </div>
    );
  }
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
              to="/hesab??m/al??nan-teklifler"
            >
              Teklif Ald??klar??m
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName="offerActive"
              to="/hesab??m/verilen-teklifler"
            >
              Teklif Verdiklerim
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="offerBody">
        {location.pathname === '/hesab??m/al??nan-teklifler'
          ? receivedOffers?.receivedOffers.map((item) => (
              <div key={item.key} className="offerBody__card">
                <div className="offerBody__card-left">
                  <img
                    role="none"
                    onClick={() => handleUrl(item)}
                    src={item.product.imageUrl}
                    alt=""
                  />
                  <div className="offerBody__card-left-desc">
                    <h1>{item.product.title}</h1>
                    <div className="offerBody__card-left-desc-price">
                      <p>Al??nan Teklif: </p>{' '}
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
                  {item.status === 'accepted' && (
                    <p className="blue">Onayland??</p>
                  )}
                  {item.status === 'rejected' && (
                    <p className="red">Reddedildi</p>
                  )}
                  {item.status === 'offered' &&
                    item.product.isSold === true &&
                    item.isSold !== false && <p>Sat??ld??</p>}
                  {item.status === 'offered' &&
                    item.product.isSold === false && (
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
                        <button
                          onClick={() => {
                            setOpenRejectModal(true);
                            setOfferedId(item.id);
                          }}
                          className="offerReject"
                          type="button"
                        >
                          Reddet
                        </button>
                      </>
                    )}{' '}
                </div>
              </div>
            ))
          : givenOffers?.givenOffers.map((item) => (
              <div key={item.key} className="offerBody__card">
                <div className="offerBody__card-left">
                  <img
                    role="none"
                    onClick={() => handleUrl(item)}
                    src={item.product.imageUrl}
                    alt=""
                  />
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
                  {item.status === 'offered' && !item.product.isSold && (
                    <p className="orange">Beklemede</p>
                  )}
                  {(item.status === 'rejected' || item.status === 'offered') &&
                    item.product.isSold === true && (
                      <p className="gray">T??kendi</p>
                    )}

                  {item.status === 'accepted' &&
                    (item.isSold === true || item.isSold === 'sold') && (
                      <p className="green">Sat??n al??nd??</p>
                    )}

                  {item.status === 'rejected' &&
                    (item.isSold === false ||
                      item.product.isSold === false) && (
                      <p className="red">Reddedildi</p>
                    )}
                  {item.status === 'accepted' && !item.product.isSold && (
                    <>
                      <button
                        onClick={() => {
                          setOpenAcceptModal(true);
                          setPurchaseId(item.product.id);
                        }}
                        className="offerConfirm accepted"
                        type="button"
                      >
                        Onayla
                      </button>
                      <p className="blue accept">Onayland??</p>
                    </>
                  )}
                </div>
              </div>
            ))}
      </div>
      {openConfirmModal && (
        <ConfirmModal
          closeConfirmModal={setOpenConfirmModal}
          title="Onayla"
          question="Onaylamak istiyor musunuz?"
          buttonLeft="Vazge??"
          buttonRight="Onayla"
          action={() => fetchAcceptOffer(offeredId)}
        />
      )}
      {openAcceptModal && (
        <ConfirmModal
          closeConfirmModal={setOpenAcceptModal}
          title="Onayla"
          question="Onaylamak istiyor musunuz?"
          buttonLeft="Vazge??"
          buttonRight="Onayla"
          action={() => fetchPurchase(purchaseId)}
        />
      )}
      {openRejectModal && (
        <ConfirmModal
          closeConfirmModal={setOpenRejectModal}
          title="Reddet"
          question="Reddetmek istiyor musunuz?"
          buttonLeft="Vazge??"
          buttonRight="Reddet"
          action={() => fetchRejectOffer(offeredId)}
        />
      )}
    </div>
  );
}

export default Account;
