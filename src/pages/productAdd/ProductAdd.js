/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/label-has-associated-control */
import './productAdd.scss';

import fetchBrand from 'actions/brandActions';
import fetchCategories from 'actions/categoryActions';
import fetchColor from 'actions/colorActions';
/* import fetchUploadImage, { imageUploadClear } from 'actions/imageUploadActions'; */
import fetchStatus from 'actions/statusActions';
import Dropdown from 'components/Dropdown/Dropdown';
import Header from 'components/Header';
import UploadImage from 'components/UploadImage';
import { productAddValidate } from 'helpers';
import useProductAdd from 'hooks/useProductAdd';
import React, { useEffect, useState } from 'react';
/* import { useDropzone } from 'react-dropzone'; */
import { useDispatch, useSelector } from 'react-redux';

/* import uploadIcon from '../../assets/icons/uploadIcon.svg'; */

function ProductAdd() {
  const colors = useSelector((state) => state.colors);
  const brands = useSelector((state) => state.brands);
  const status = useSelector((state) => state.status);
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const [selectForm, setSelectForm] = useState({
    color: { id: '', title: '' },
    brand: { id: '', title: '' },
    status: { id: '', title: '' },
    category: { id: '', title: '' },
  });

  useEffect(() => {
    if (!colors.isFetching && colors.colors.length === 0) {
      dispatch(fetchColor());
    }
    if (!brands.isFetching && brands.brands.length === 0) {
      dispatch(fetchBrand());
    }
    if (!categories.isFetching && categories.categories.length === 0) {
      dispatch(fetchCategories());
    }
    if (!status.isFetching && status.status.length === 0) {
      dispatch(fetchStatus());
    }
  }, [
    brands.brands.length,
    brands.isFetching,
    categories.categories.length,
    categories.isFetching,
    colors.colors.length,
    colors.isFetching,
    dispatch,
    status.isFetching,
    status.status.length,
  ]);
  const [isOfferable, setIsOfferable] = useState(false);
  const { handleChange, form, handleSubmit, errors /*  setForm  */ } =
    useProductAdd(productAddValidate, isOfferable, selectForm);
  const selectClick = (item, name) => {
    if (item.title.length > 0 && name === 'category') {
      setSelectForm({ ...selectForm, category: item });
    }
    if (item.title.length > 0 && name === 'brand') {
      setSelectForm({ ...selectForm, brand: item });
    }
    if (item.title.length > 0 && name === 'status') {
      setSelectForm({ ...selectForm, status: item });
    }
    if (item.title.length > 0 && name === 'color') {
      setSelectForm({ ...selectForm, color: item });
    }
  };
  /*   const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      acceptedFile.map((file) => dispatch(fetchUploadImage(file)));
    },
  });
  const imageUpload = useSelector((state) => state.imageUpload.imageUpload); */

  return (
    <div className="productAdd">
      <Header />
      <form className="productAdd__body" onSubmit={handleSubmit}>
        <div className="productAdd__body-left">
          <h1>Ürün Detayları</h1>
          <div className="productAdd__body-left-info">
            <div className="productAdd__body-left-info__productName">
              <label htmlFor="title" className="form-label">
                Ürün Adı
              </label>
              <div className="productAdd__body-left-info__productName-input">
                <input
                  id="title"
                  type="text"
                  name="title"
                  placeholder="Örnek Iphone 12 Pro Max"
                  value={form.title}
                  onChange={handleChange}
                  className={
                    errors.title ? 'input-title wrong' : 'input-title '
                  }
                />
              </div>
            </div>
            <div className="productAdd__body-left-info__desc">
              <label htmlFor="description" className="form-label">
                Açıklama
              </label>
              <div className="productAdd__body-left-info__desc-textarea">
                <textarea
                  id="description"
                  type="text"
                  name="description"
                  placeholder="Ürün açıklaması girin"
                  value={form.description}
                  onChange={handleChange}
                  className={
                    errors.description
                      ? 'textarea-input wrong'
                      : 'textarea-input'
                  }
                />
              </div>
            </div>
          </div>
          <div className="productAdd__body-left-option">
            <div className="productAdd__body-left-option__left">
              <Dropdown
                title="Kategori"
                name="category"
                selectOption={categories.categories}
                value={selectForm.category?.title}
                selectClick={selectClick}
                className={
                  errors.category
                    ? 'dropdown__select wrong'
                    : 'dropdown__select'
                }
              />
              <Dropdown
                title="Renk"
                name="color"
                selectOption={colors.colors}
                value={selectForm.color?.title}
                selectClick={selectClick}
                className={
                  errors.color ? 'dropdown__select wrong' : 'dropdown__select'
                }
              />
            </div>

            <div className="productAdd__body-left-option__right">
              <Dropdown
                title="Marka"
                name="brand"
                selectOption={brands.brands}
                value={selectForm.brand?.title}
                selectClick={selectClick}
                className={
                  errors.brand ? 'dropdown__select wrong' : 'dropdown__select'
                }
              />
              <Dropdown
                title="Kullanım durumu"
                name="status"
                selectOption={status.status}
                value={selectForm.status?.title}
                selectClick={selectClick}
                className={
                  errors.status ? 'dropdown__select wrong' : 'dropdown__select'
                }
              />
            </div>
          </div>
          <div className="productAdd__body-left-price">
            <div className="productAdd__body-left-price-product">
              <label htmlFor="">Fiyat</label>

              <div className="productAdd__body-left-price-product-input">
                <input
                  name="price"
                  type="number"
                  placeholder="Bir fiyat girin"
                  value={form.price}
                  onChange={handleChange}
                  className={errors.price && 'wrong'}
                />
                <span className="priceCurrency">TL</span>
              </div>
            </div>
            <div className="productAdd__body-left-price-option">
              <label htmlFor="">Teklif opsiyonu</label>
              <input
                name="isOfferable"
                className={errors.isOfferable ? 'checkbox wrong' : 'checkbox '}
                type="checkbox"
                id="switch"
                value={form.isOfferable}
                onChange={handleChange}
                onClick={() => setIsOfferable((prev) => !prev)}
              />
              <label className="price-label" htmlFor="switch">
                option
              </label>
            </div>
          </div>
        </div>
        {/* ------------------------------------------------------------------------ */}
        <div className="productAdd__body-right">
          <div className="right__up">
            <UploadImage errors={errors} />
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
