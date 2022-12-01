import React from 'react';

import { LayoutProvider, LayoutConsumer } from './layout-context';
import { mergeModifiers } from '@utils/css';

class Layout extends React.Component {
  static Header = ({ children }) => <header className="layout__header">{children}</header>;

  static Main = ({ children, panelPrimary, panelSecondary }) => (
    <LayoutConsumer>
      {({ moduleId }) => {
        const layoutModuleClass = mergeModifiers('layout__module', { moduleId });

        return (
          <main className="layout__main">
            {panelPrimary && (
              <div className="layout__panel layout__panel--primary">{panelPrimary}</div>
            )}
            <div className="layout__content">
              <div className={layoutModuleClass}>{children}</div>
            </div>
            {panelSecondary && (
              <div className="layout__panel layout__panel--secondary">{panelSecondary}</div>
            )}
          </main>
        );
      }}
    </LayoutConsumer>
  );

  static Footer = ({ children }) => <footer className="layout__footer">{children}</footer>;

  render() {
    const { children, id, ...layoutProps } = this.props;

    const layoutClass = mergeModifiers('layout', { id });

    return (
      <LayoutProvider value={layoutProps}>
        <div className={layoutClass}>{children}</div>
      </LayoutProvider>
    );
  }
}

Layout.Header.displayName = 'Layout.Header';
Layout.Main.displayName = 'Layout.Main';
Layout.Footer.displayName = 'Layout.Footer';

export default Layout;
