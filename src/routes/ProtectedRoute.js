/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

function ProtectedRoute({ component: Component, isAuthenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(routerProps) =>
        isAuthenticated ? <Component {...routerProps} /> : <Redirect to="/" />
      }
    />
  );
}

export default ProtectedRoute;
