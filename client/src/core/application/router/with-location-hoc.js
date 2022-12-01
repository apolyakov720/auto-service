import React from 'react';
import { useLocation } from 'react-router-dom';

export default function (Component) {
  // Возвращаем именованную функцию, чтобы ее имя было видно при дебаге в консоле разработчика.
  return function withLocationHOC(props) {
    return <Component location={useLocation()} {...props} />;
  };
}
