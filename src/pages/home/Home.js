import './home.scss';

import React from 'react';

import banner from '../../assets/images/Banner1.png';
import image from '../../assets/images/Image5.png';
import Header from '../../components/Header';

function Home() {
  return (
    <div className="home">
      <Header />
      <div className="home__banner">
        <img src={banner} alt="" />
      </div>
      <nav className="home__nav">nav</nav>

      <section className="home__products">
        <div className="product">
          <div className="product__image-container">
            <img src={image} alt="product" />
          </div>

          <div className="product-content">
            <div className="product-title">
              <p className="product-brand">Levis</p>
              <p className="product-color">Renk: Mavi</p>
            </div>
            <p className="product-price">19.20TL</p>
          </div>
        </div>

        <div className="product">
          <div className="product__image-container">
            <img src={image} alt="product" />
          </div>

          <div className="product-content">
            <div className="product-title">
              <p className="product-brand">Levis</p>
              <p className="product-color">Renk: Mavi</p>
            </div>
            <p className="product-price">19.20TL</p>
          </div>
        </div>

        <div className="product">
          <div className="product__image-container">
            <img src={image} alt="product" />
          </div>

          <div className="product-content">
            <div className="product-title">
              <p className="product-brand">Levis</p>
              <p className="product-color">Renk: Mavi</p>
            </div>
            <p className="product-price">19.20TL</p>
          </div>
        </div>

        <div className="product">
          <div className="product__image-container">
            <img src={image} alt="product" />
          </div>

          <div className="product-content">
            <div className="product-title">
              <p className="product-brand">Levis</p>
              <p className="product-color">Renk: Mavi</p>
            </div>
            <p className="product-price">19.20TL</p>
          </div>
        </div>

        <div className="product">
          <div className="product__image-container">
            <img src={image} alt="product" />
          </div>

          <div className="product-content">
            <div className="product-title">
              <p className="product-brand">Levis</p>
              <p className="product-color">Renk: Mavi</p>
            </div>
            <p className="product-price">19.20TL</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
