/* eslint-disable jsx-a11y/anchor-is-valid */
import './home.scss';

import fetchCategories from 'actions/categoryActions';
import fetchProducts from 'actions/productActions';
import Card from 'components/Card/Card';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import banner from '../../assets/images/Banner1.png';
import Header from '../../components/Header';

function Home() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="home">
      <Header />
      <img className="banner" src={banner} alt="" />
      <nav className="nav">
        <ul>
          <li>
            <NavLink activeClassName="active" to="/">
              Hepsi
            </NavLink>
          </li>
          {categories.categories.map((category) => (
            <li key={category.id}>
              <NavLink className="title" activeClassName="active" to="/">
                {category.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <main className="main">
        {products.products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </main>
    </div>
  );
}

export default Home;
