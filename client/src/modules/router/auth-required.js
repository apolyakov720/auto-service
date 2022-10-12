import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRequired = ({ children, app, route, redirects }) => {
  const { isAuthorized } = app;
  const { onAuth, offAuth } = redirects;
  const { isAuthNoRequired } = route;

  if (isAuthorized && isAuthNoRequired) {
    return <Navigate to={onAuth} replace />;
  }

  if (!(isAuthorized || isAuthNoRequired)) {
    return <Navigate to={offAuth} replace />;
  }

  return children;
};

export default AuthRequired;
