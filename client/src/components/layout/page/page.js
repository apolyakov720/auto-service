import React from 'react';

const Page = ({ children }) => (
  <div className="page">
    <div className="page__main">{children}</div>
  </div>
);

Page.Header = ({ children }) => <div className="page__header">{children}</div>;

Page.Footer = ({ children }) => <div className="page__footer">{children}</div>;

export default Page;
