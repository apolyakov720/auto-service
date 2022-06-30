import React from 'react';
import PropTypes from 'prop-types';

/** Компонент "Logotype" (Логотип) */
class Logotype extends React.PureComponent {
  render() {
    const { caption } = this.props;

    return (
      <div className="logotype">
        <div className="logotype__placeholder" />
        {caption && <div className="logotype__caption">{caption}</div>}
      </div>
    );
  }
}

Logotype.propTypes = {
  /** Подпись к логотипу. */
  caption: PropTypes.string,
};

export default Logotype;
