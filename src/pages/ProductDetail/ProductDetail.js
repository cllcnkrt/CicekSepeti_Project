import './productDetail.scss';

import Header from 'components/Header';
import React from 'react';

import image from '../../assets/images/image6.png';

function productDetail() {
  return (
    <div className="productDetail">
      <Header />
      <div className="productWrapper">
        <div className="productWrapper__left">
          <div className="productWrapper__left-image">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="productWrapper__right">
          <h1 className="productWrapper__right-title">
            Beli Uzun Trençkot Kareli
          </h1>
          <div className="productWrapper__right-info">
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Marka:</span> Luis Vitton
            </p>
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Renk:</span> Bej Rengi
            </p>
            <p className="productWrapper__right-infoTitle">
              <span className="right-infoTitle">Kullanım Durumu:</span> Az
              kullanılmış
            </p>
          </div>
          <div className="productWrapper__right-price">319,90 TL</div>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              laudantium doloremque aliquam inventore delectus nulla commodi,
              consequatur necessitatibus blanditiis maxime eos impedit corrupti
              nobis at soluta facilis corporis consequuntur natus?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default productDetail;
