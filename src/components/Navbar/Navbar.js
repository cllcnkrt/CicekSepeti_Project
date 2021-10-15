import './navbar.scss';

import fetchCategories from 'actions/categoryActions';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  return (
    <nav className="nav">
      <ul>
        <li>
          <NavLink activeClassName="active" to="/">
            Hepsi
          </NavLink>
        </li>
        {categories.categories.map((category) => (
          <li key={category.id}>
            <NavLink
              className="title"
              activeClassName="active"
              to={`/?category=${category.title}`}
            >
              {category.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
