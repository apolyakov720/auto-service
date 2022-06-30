import React from 'react';

/** Компонент "Loader" (Индикатор загрузки) */
class Loader extends React.PureComponent {
  render() {
    return (
      <div className="loader">
        <div className="loader__circle">
          <div className="loader__placeholder" />
        </div>
      </div>
    );
  }
}

export default Loader;
