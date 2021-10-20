/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './productAdd.scss';

import Header from 'components/Header';
import React, { useState } from 'react';

import uploadIcon from '../../assets/icons/uploadIcon.svg';

function ProductAdd() {
  const [checkbox, setCheckbox] = useState(false);
  console.log(checkbox);
  return (
    <div className="productAdd">
      <Header />
      <form className="productAdd__body">
        <div className="productAdd__body-left">
          <h1>Ürün Detayları</h1>
          <div className="productAdd__body-left-info">
            <div className="productAdd__body-left-info__productName">
              <label htmlFor="email" className="form-label">
                Ürün Adı
              </label>
              <div className="productAdd__body-left-info__productName-input">
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Örnek Iphone 12 Pro Max"
                />
              </div>
            </div>
            <div className="productAdd__body-left-info__desc">
              <label htmlFor="email" className="form-label">
                Açıklama
              </label>
              <div className="productAdd__body-left-info__desc-textarea">
                <textarea
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ürün açıklaması girin"
                />
              </div>
            </div>
          </div>
          <div className="productAdd__body-left-option">
            <div className="productAdd__body-left-option__left">
              <div className="productAdd__body-left-option__left-category">
                <label htmlFor="">Kategori</label>
                <select className="option" name="" id="">
                  <option value="">kategori </option>
                  <option value="">kategori 2</option>
                  <option value="">kategori 3</option>
                </select>
              </div>
              <div className="productAdd__body-left-option__left-color">
                <label htmlFor="">Renk</label>
                <select className="option" name="" id="">
                  <option value="">Renk </option>
                  <option value="">Renk 2</option>
                  <option value="">Renk 3</option>
                </select>
              </div>
            </div>
            <div className="productAdd__body-left-option__right">
              <div className="productAdd__body-left-option__right-brand">
                <label htmlFor="">Marka</label>
                <select className="option" name="" id="">
                  <option value="">Marka </option>
                  <option value="">Marka 2</option>
                  <option value="">Marka 3</option>
                </select>
              </div>
              <div className="productAdd__body-left-option__right-status">
                <label htmlFor="">Kullanım Durumu</label>
                <select className="option" name="" id="">
                  <option value="">Kullanım Durumu</option>
                  <option value="">Kullanım Durumu 2</option>
                  <option value="">Kullanım Durumu 3</option>
                </select>
              </div>
            </div>
          </div>
          <div className="productAdd__body-left-price">
            <div className="productAdd__body-left-price-product">
              <label htmlFor="">Fiyat</label>

              <div className="productAdd__body-left-price-product-input">
                <input type="number" placeholder="Bir fiyat girin" />
                <span className="priceCurrency">TL</span>
              </div>
            </div>
            <div className="productAdd__body-left-price-option">
              <label htmlFor="">Teklif opsiyonu</label>
              <input
                className="checkbox"
                type="checkbox"
                id="switch"
                onClick={() => setCheckbox(!checkbox)}
              />
              <label className="price-label" htmlFor="switch">
                option
              </label>
            </div>
          </div>
        </div>
        <div className="productAdd__body-right">
          <h1>Ürün Görseli</h1>
          <div className="productAdd__body-right-container">
            <div className="productAdd__body-right-container-icon">
              <img src={uploadIcon} alt="" />
            </div>
            <h2>Sürükleyip bırakarak yükle </h2>
            <h3>veya</h3>
            <button className="fileUpload" type="button">
              Görsel Seçin
              <input
                type="file"
                name="image"
                id="image"
                multiple={false}
                /*  onChange={(e) => setSelectedFile(e.target.files[0])} */
                accept="image/png, image/jpeg, image/jpg"
              />
            </button>

            <h6>PNG ve JPEG Dosya boyutu: max. 400kb </h6>
          </div>
          <button className="saveButton" type="submit">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductAdd;
