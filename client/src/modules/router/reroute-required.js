import React from 'react';
import { Navigate } from 'react-router-dom';

import { redirects } from './config';

// children - маршрут и вложенные в него маршруты, которые необходимо показать
// state - состояние приложение (авторизовано или нет)
// isNotRequired - маршрут доступен только в неавторизованном приложении
// force - флаг для принудительной переадресации
const RerouteRequired = ({ children, state, isNotRequired, force = false }) => {
  if (force) {
    return state ? (
      <Navigate to={redirects.toAuth} replace />
    ) : (
      <Navigate to={redirects.fromAuth} replace />
    );
  }

  if (state && isNotRequired) {
    return <Navigate to={redirects.toAuth} replace />;
  }

  if (!(state || isNotRequired)) {
    return <Navigate to={redirects.fromAuth} replace />;
  }

  return children;
};

export default RerouteRequired;
