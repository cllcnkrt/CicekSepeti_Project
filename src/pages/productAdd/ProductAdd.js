/* eslint-disable jsx-a11y/label-has-associated-control */
import './productAdd.scss';

import Header from 'components/Header';
import useForm from 'hooks/useForm';
import React from 'react';

import { validateInfo } from '../../helpers';

function ProductAdd() {
  const { handleChange, form, handleSubmit, errors } = useForm(
    validateInfo,
    'productAdd'
  );
  return (
    <div className="productAdd">
      <Header />
      <form className="productAdd__body" onSubmit={handleSubmit}>
        <div className="productAdd__body-left">
          <h2>Ürün Detayları</h2>
          <div className="productAdd-form-inputs">
            <label htmlFor="productName" className="productAdd__form-label">
              Ürün Adı
            </label>
            <input
              id="productName"
              type="text"
              name="productName"
              placeholder="Örnek: Iphone 12 Pro Max"
              className={
                errors.email ? 'form-input wrong' : 'productAdd__form-input'
              }
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="productAdd-form-inputs">
            <label htmlFor="desc" className="productAdd__form-label">
              Açıklama
            </label>
            <textarea
              id="desc"
              type="text"
              name="desc"
              placeholder="Ürün açıklaması girin"
              className={
                errors.password ? 'form-input wrong' : 'productAdd__form-input '
              }
              value={form.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="productAdd__body-right">
          <div className="productAdd__content-left">
            <h2>Ürün Görseli</h2>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProductAdd;
