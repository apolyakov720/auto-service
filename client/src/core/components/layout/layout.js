import React from 'react';

class Layout extends React.Component {
  static Header = ({ children }) => <header className="layout__header">{children}</header>;

  static Main = ({ children, panelPrimary, panelSecondary }) => (
    <main className="layout__main">
      {panelPrimary && <div className="layout__panel layout__panel--primary">{panelPrimary}</div>}
      <div className="layout__content">
        <div className="layout__outlet">{children}</div>
      </div>
      {panelSecondary && (
        <div className="layout__panel layout__panel--secondary">{panelSecondary}</div>
      )}
    </main>
  );

  static Footer = ({ children }) => <footer className="layout__footer">{children}</footer>;

  render() {
    const { children } = this.props;

    return <div className="layout">{children}</div>;
  }
}

export default Layout;
