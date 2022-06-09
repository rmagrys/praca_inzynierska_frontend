import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const isLoggedIn = !!localStorage.getItem('token');

  return isLoggedIn ? Element : <Navigate to={{ pathname: '/login' }} />;
};

export default PrivateRoute;
