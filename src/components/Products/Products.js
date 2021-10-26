/* eslint-disable no-unused-vars */
import './products.scss';

import fetchProducts from 'actions/product/productActions';
import Card from 'components/Card/Card';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import loadingGif from '../../assets/gif/loading.gif';
import useQuery from '../../hooks/useQuery';

function Products() {
  const dispatch = useDispatch();
  const query = useQuery();
  const currentQuery = query.get('category');
  const products = useSelector((state) => state.products);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const productsPerPage = 20;
  const pagesVisited = pageNumber * productsPerPage;
  const pageCountProduct = Math.ceil(
    products.products.length / productsPerPage
  );
  const pageCountSelectedProducts = Math.ceil(
    selectedProducts.length / productsPerPage
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
  if (products.isFetching) {
    return <img src={loadingGif} alt="loading" />;
  }
  return (
    <>
      <div className="products">
        {selectedProducts.length > 0
          ? selectedProducts
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => (
                <Link key={product.id} to={`urun-detay/${product.id}`}>
                  <Card product={product} />
                </Link>
              ))
          : products.products
              .slice(pagesVisited, pagesVisited + productsPerPage)
              .map((product) => (
                <Link key={product.id} to={`urun-detay/${product.id}`}>
                  <Card product={product} />
                </Link>
              ))}
      </div>
      <div className="paginate">
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
      </div>
    </>
  );
}

export default Products;
