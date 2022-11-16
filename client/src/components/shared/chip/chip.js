import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/shared/icon';
import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';
import { CSSConstants } from '@constants';

class Chip extends React.PureComponent {
  render() {
    const { label, onClick, onClose } = this.props;

    const chipClass = '';

    return (
      <div className="chip">
        <div className="chip__label">{label}</div>
        {commonUtils.isFunction(onClose) && (
          <div className="chip__action">
            <Icon source={Icon.sources.base.cross} bold />
          </div>
        )}
      </div>
    );
  }
}

Chip.propTypes = {
  label: PropTypes.string,
};

export default Chip;
