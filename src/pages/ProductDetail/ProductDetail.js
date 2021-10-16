/* eslint-disable react-hooks/rules-of-hooks */
import './productDetail.scss';

import Header from 'components/Header';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import fetchDetails from '../../actions/productDetailsActions';

function ProductDetail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const productDetails = useSelector((state) => state.productDetails);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDetails(id));
  }, [dispatch, id]);
  return (
    <div className="productDetail">
      <Header />
      <div className="productWrapper">
        <div className="productWrapper__left">
          <div className="productWrapper__left-image">
            <img src={productDetails.productDetails.imageUrl} alt="" />
          </div>
        </div>
        <div className="productWrapper__right">
          <h1 className="productWrapper__right-title">
            {productDetails.productDetails.title}
          </h1>
          <div className="productWrapper__right-info">
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Marka:</span>
              {productDetails.productDetails.brand?.title}
            </p>
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Renk:</span>{' '}
              {productDetails.productDetails.color?.title}
            </p>
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Kullanım Durumu:</span>{' '}
              {productDetails.productDetails.status?.title}
            </p>
          </div>
          <div className="productWrapper__right-price">
            {productDetails?.productDetails?.price
              ?.toLocaleString('tr-TR', {
                style: 'currency',
                currency: 'TRY',
              })
              .slice(1)}
            <span> TL</span>
          </div>
          <div className="productWrapper__right-buttons">
            <button type="button" className="productWrapper__right-BtnL">
              Satın Al
            </button>
            <button type="button" className="productWrapper__right-BtnR">
              Teklif ver
            </button>
          </div>
          <div className="productWrapper__right-desc">
            <h3 className="productWrapper__right-descTitle">Açıklama</h3>
            <p className="productWrapper__right-descContent">
              {productDetails.productDetails.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
