import './navbar.scss';

import fetchCategories from 'actions/categoryActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { textCapitalize } from '../../helpers';
import useQuery from '../../hooks/useQuery';

function Navbar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const query = useQuery();
  const currentQuery = query.get('category');
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink
            activeClassName={currentQuery === null ? `navbarActive` : ''}
            to="/"
          >
            Hepsi
          </NavLink>
        </li>
        {categories.categories.map((category) => (
          <li key={category.id}>
            <NavLink
              activeClassName={
                currentQuery !== null && category.title === currentQuery
                  ? 'navbarActive'
                  : ''
              }
              to={`/?category=${category.title}`}
            >
              {textCapitalize(category.title)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
