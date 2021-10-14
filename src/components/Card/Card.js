/* eslint-disable react/prop-types */
import './card.scss';

import React from 'react';

function Card({ product }) {
  return (
    <div className="card">
      <img className="card-img" src={product.imageUrl} alt="brand" />
      <div className="card-content">
        <h1 className="card-brand">{product.brand.title}</h1>
        <div className="card-color">
          <span className="color">Renk:</span> {product.color.title}
        </div>
      </div>
      <div className="card-price">{product.price}TL</div>
    </div>
  );
}

export default Card;
