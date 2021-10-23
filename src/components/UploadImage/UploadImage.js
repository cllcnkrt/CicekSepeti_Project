/* eslint-disable react/prop-types */
import './uploadImage.scss';

import fetchUploadImage, { imageUploadClear } from 'actions/imageUploadActions';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch, useSelector } from 'react-redux';

import uploadIcon from '../../assets/icons/uploadIcon.svg';

function UploadImage({ errors }) {
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFile) => {
      acceptedFile.map((file) => dispatch(fetchUploadImage(file)));
    },
  });
  const imageUpload = useSelector((state) => state.imageUpload.imageUpload);
  return (
    <div className="uploadImage">
      <h1>Ürün Görseli</h1>

      <div
        className={
          errors.imageUrl
            ? 'productAdd__body-right-container wrong'
            : 'productAdd__body-right-container'
        }
      >
        <div className="productAdd__body-right-container-icon">
          <img src={uploadIcon} alt="" />
        </div>
        <h2>Sürükleyip bırakarak yükle </h2>
        <h3>veya</h3>
        <div {...getRootProps()}>
          <button className="fileUpload" type="button">
            <input {...getInputProps()} />
            Görsel Seçin
          </button>
        </div>
        <h6>PNG ve JPEG Dosya boyutu: max. 400kb </h6>
      </div>

      {imageUpload.url.length > 0 && (
        <div className="showingImage">
          <div
            role="none"
            className="deleteImageButton"
            onClick={() => {
              imageUploadClear();
            }}
          >
            X
          </div>
          <img src={imageUpload.url} alt="" />
        </div>
      )}
    </div>
  );
}

export default UploadImage;
