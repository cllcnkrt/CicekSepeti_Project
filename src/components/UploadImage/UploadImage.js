/* eslint-disable react/prop-types */
import './uploadImage.scss';

import fetchUploadImage from 'actions/imageUploadActions';
import React from 'react';
import { useDropzone } from 'react-dropzone';
import { useDispatch } from 'react-redux';

import uploadIcon from '../../assets/icons/uploadIcon.svg';

function UploadImage({ errors }) {
  const dispatch = useDispatch();
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpg, image/jpeg, image/png',
    onDrop: (acceptedFile) => {
      dispatch(fetchUploadImage(acceptedFile[0]));
    },
    maxSize: 409600,
    maxFiles: 1,
    multiple: false,
  });
  console.log('getInputProps :>> ', getInputProps);
  return (
    <div className="uploadImage">
      <div {...getRootProps()}>
        <input {...getInputProps()} />

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

          <button className="fileUpload" type="button">
            Görsel Seçin
          </button>

          <h6>PNG ve JPEG Dosya boyutu: max. 400kb </h6>
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
