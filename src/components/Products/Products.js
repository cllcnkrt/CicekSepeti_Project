/* eslint-disable no-unused-vars */
import './products.scss';

import fetchProducts from 'actions/product/productActions';
import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import useQuery from '../../hooks/useQuery';

function Products() {
  const dispatch = useDispatch();
  const query = useQuery();
  const currentQuery = query.get('category');
  const products = useSelector((state) => state.products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCountProduct = Math.ceil(products.products.length / usersPerPage);
  const pageCountSelectedProducts = Math.ceil(
    selectedProducts.length / usersPerPage
  );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
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
    <>
      <div className="products">
        {selectedProducts.length > 0
          ? selectedProducts
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((product) => (
                <Link key={product.id} to={`urun-detay/${product.id}`}>
                  <Card product={product} />
                </Link>
              ))
          : products.products
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((product) => (
                <Link key={product.id} to={`urun-detay/${product.id}`}>
                  <Card product={product} />
                </Link>
              ))}
      </div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCountSelectedProducts || pageCountProduct}
        onPageChange={changePage}
        containerClassName="paginationBttns"
        previousLinkClassName="previousBttn"
        nextLinkClassName="nextBttn"
        disabledClassName="paginationDisabled"
        activeClassName="paginationActive"
      />
    </>
  );
}

export default Products;
