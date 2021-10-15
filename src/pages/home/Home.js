/* eslint-disable jsx-a11y/anchor-is-valid */
import './home.scss';

import Navbar from 'components/Navbar/Navbar';
import Products from 'components/Products';
import React from 'react';

import banner from '../../assets/images/Banner1.png';
import Header from '../../components/Header';

function Home() {
  return (
    <div className="home">
      <Header />
      <img className="banner" src={banner} alt="" />
      <Navbar />
      <Products />
    </div>
  );
}

export default Home;
