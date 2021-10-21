/* eslint-disable no-debugger */
/* eslint-disable react-hooks/rules-of-hooks */
import './productDetail.scss';

import fetchGivenOffers from 'actions/account/givenOffersActions';
import fetchPurchase from 'actions/product/purchaseActions';
import Header from 'components/Header';
import OfferModal from 'components/OfferModal';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchDetails from '../../actions/product/productDetailsActions';
import ConfirmModal from '../../components/ConfimModal';
import { textCapitalize } from '../../helpers';

function ProductDetail() {
  const productDetails = useSelector(
    (state) => state.productDetails.productDetails
  );
  const { id } = useParams();
  const dispatch = useDispatch();
  const givenOffers = useSelector((state) => state.givenOffers.givenOffers);
  const offerable = givenOffers.filter(
    (item) => productDetails.id === item.product.id
  )[0];
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [openOfferModal, setOpenOfferModal] = useState(false);
  useEffect(() => {
    dispatch(fetchGivenOffers());
    dispatch(fetchDetails(id));
  }, [dispatch, id]);
  console.log('aaaaaa', productDetails);
  console.log(id);
  return (
    <div className="productDetail">
      <Header />
      <div className="productWrapper">
        <div className="productWrapper__left">
          <div className="productWrapper__left-image">
            <img src={productDetails.imageUrl} alt="" />
          </div>
        </div>
        <div className="productWrapper__right">
          <h1 className="productWrapper__right-title">
            {productDetails.title}
          </h1>
          <div className="productWrapper__right-info">
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Marka:</span>{' '}
              {productDetails.brand?.title &&
                textCapitalize(productDetails.brand?.title)}
            </p>
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Renk:</span>{' '}
              {productDetails.color?.title &&
                textCapitalize(productDetails.color?.title)}
            </p>
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Kullanım Durumu:</span>{' '}
              {productDetails.status &&
                textCapitalize(productDetails.status.title)}
            </p>
          </div>
          <div className="productWrapper__right-price">
            {productDetails?.price
              ?.toLocaleString('tr-TR', {
                style: 'currency',
                currency: 'TRY',
              })
              .slice(1)}
            <span> TL</span>
          </div>
          {offerable && (
            <div className="offered-product">
              <p>Verilen Teklif: </p>{' '}
              <span>
                {' '}
                {offerable.offeredPrice
                  .toLocaleString('tr-TR', {
                    style: 'currency',
                    currency: 'TRY',
                  })
                  .slice(1)}
                TL
              </span>
            </div>
          )}
          <div className="productWrapper__right-buttons">
            {productDetails.isSold ? (
              <div className="soldProduct">Bu Ürün Satışta değil</div>
            ) : (
              <>
                <button
                  type="button"
                  className="productWrapper__right-BtnL"
                  onClick={() => setOpenConfirmModal(true)}
                >
                  Satın Al
                </button>
                <button
                  type="button"
                  className="productWrapper__right-BtnR"
                  onClick={() => setOpenOfferModal(true)}
                >
                  Teklif ver
                </button>
              </>
            )}
          </div>
          <div className="productWrapper__right-desc">
            <h3 className="productWrapper__right-descTitle">Açıklama</h3>
            <p className="productWrapper__right-descContent">
              {productDetails.description}
            </p>
          </div>
        </div>
      </div>

      {openConfirmModal && (
        <ConfirmModal
          closeConfirmModal={setOpenConfirmModal}
          title="Satın Al"
          question="Satın Almak istiyor musunuz?"
          buttonLeft="Vazgeç"
          buttonRight="Satın Al"
          action={() => fetchPurchase(id)}
        />
      )}
      {openOfferModal && (
        <OfferModal
          closeOfferModal={setOpenOfferModal}
          image={productDetails?.imageUrl}
          title={productDetails?.brand?.title}
          price={productDetails?.price}
          offerId={productDetails.id}
        />
      )}
    </div>
  );
}

export default ProductDetail;
