/* eslint-disable no-unused-vars */
import './products.scss';

import fetchProducts from 'actions/product/productActions';
import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useQuery from '../../hooks/useQuery';

function Products() {
  const dispatch = useDispatch();
  const query = useQuery();
  const currentQuery = query.get('category');
  const products = useSelector((state) => state.products);
  const [selectedProducts, setSelectedProducts] = useState([]);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  useEffect(() => {
    const filtered = products.products.filter(
      (item) => item.category.title === currentQuery
    );
    setSelectedProducts(filtered);
  }, [currentQuery, products.products]);

  return (
    <div className="products">
      {selectedProducts.length > 0
        ? selectedProducts.map((product) => (
            <Link key={product.id} to={`urun-detay/${product.id}`}>
              <Card product={product} />
            </Link>
          ))
        : products.products.slice(0, 20).map((product) => (
            <Link key={product.id} to={`urun-detay/${product.id}`}>
              <Card product={product} />
            </Link>
          ))}
    </div>
  );
}

export default Products;
