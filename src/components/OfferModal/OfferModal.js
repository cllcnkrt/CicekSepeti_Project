/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import './offerModal.scss';

import fetchSendOffer from 'actions/sendOfferActions';
/* import usePercent from 'hooks/usePercent'; */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import checked from '../../assets/icons/checked.svg';
import closeBtn from '../../assets/icons/closeBtn.svg';
import unChecked from '../../assets/icons/unChecked.svg';

function OfferModal({ closeOfferModal, image, title, price, id }) {
  const [selectedOffer, setSelectedOffer] = useState('');
  /*   const { percentPrice } = usePercent(price, selectedOffer); */
  const dispatch = useDispatch();
  const [sendData, setSendData] = useState({
    offeredPrice: 0,
  });

  const calcPercentPrice = (percent) => {
    setSendData({ ...sendData, offeredPrice: (price * percent) / 100 });
    setSelectedOffer(percent);
  };

  return (
    <div className="offerModal">
      <div className="offerModal__container">
        <div className="offerModal__container-title">
          <h1>Teklif Ver</h1>
          <img
            onClick={() => closeOfferModal(false)}
            src={closeBtn}
            alt="close-button"
            role="none"
          />
        </div>
        <div className="offerModal__container-info">
          <div className="offerModal__container-info-left">
            <div className="offerModal__container-info-left-image">
              <img src={image} alt="" />
            </div>
            <div className="offerModal__container-info-left-title">{title}</div>
          </div>
          <div className="offerModal__container-info-right">
            <div className="offerModal__container-info-right-price">
              {price
                ?.toLocaleString('tr-TR', {
                  style: 'currency',
                  currency: 'TRY',
                })
                .slice(1)}
              <span> TL</span>
            </div>
          </div>
        </div>
        <div className="offerModal__container-options">
          <div
            className={
              selectedOffer === 20
                ? 'offerModal__container-options-20 checkedOffer'
                : 'offerModal__container-options-20 '
            }
            onClick={() => calcPercentPrice(20)}
            role="none"
          >
            <img src={selectedOffer === 20 ? checked : unChecked} alt="Check" />
            <p>%20'si Kadar Teklif Ver</p>
          </div>
          <div
            className={
              selectedOffer === 30
                ? 'offerModal__container-options-30 checkedOffer'
                : 'offerModal__container-options-30'
            }
            onClick={() => calcPercentPrice(30)}
            role="none"
          >
            <img src={selectedOffer === 30 ? checked : unChecked} alt="Check" />
            <p>%30'su Kadar Teklif Ver</p>
          </div>
          <div
            className={
              selectedOffer === 40
                ? 'offerModal__container-options-40 checkedOffer'
                : 'offerModal__container-options-40'
            }
            onClick={() => calcPercentPrice(40)}
            role="none"
          >
            <img src={selectedOffer === 40 ? checked : unChecked} alt="Check" />
            <p>%40'ı Kadar Teklif Ver</p>
          </div>
        </div>
        <div className="offerModal__container-offerPrice">
          <input
            type="number"
            placeholder="Teklif Belirle"
            value={sendData.offeredPrice > 0 ? sendData.offeredPrice : ''}
            onChange={(e) =>
              setSendData({ ...sendData, offeredPrice: e.target.value })
            }
            onClick={() => {
              setSelectedOffer('');
              setSendData({ ...sendData, offeredPrice: '' });
            }}
          />
          <div className="currency">TL</div>
        </div>
        <button
          className="OfferConfirmbutton"
          type="button"
          onClick={() => {
            dispatch(fetchSendOffer(id, sendData));
            closeOfferModal(false);
          }}
        >
          Onayla
        </button>
      </div>
    </div>
  );
}

export default OfferModal;