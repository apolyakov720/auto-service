import React from 'react';
import PropTypes from 'prop-types';

import Button from '@components/shared/button';
import ScrollBox from '@components/shared/scroll-box';
import OutsideClick from '@components/functional/outside-click';
import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';
import { CSSConstants } from '@constants';

class Dropdown extends React.Component {
  static Header = ({ children }) => <div className="dropdown__header">{children}</div>;

  static Menu = ({ children }) => (
    <div className="dropdown__menu">
      <ScrollBox>{children}</ScrollBox>
    </div>
  );

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', commonUtils.debounce(this.onClose));
    window.addEventListener('resize', commonUtils.debounce(this.onClose));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', commonUtils.debounce(this.onClose));
    window.removeEventListener('resize', commonUtils.debounce(this.onClose));
  }

  setOpen = (value) => {
    this.setState({
      isOpen: value,
    });
  };

  onClose = () => {
    this.setOpen(false);
  };

  onToggleOpen = () => {
    this.setState(({ isOpen }) => ({
      isOpen: !isOpen,
    }));
  };

  render() {
    const { trigger, theme, children } = this.props;
    const { isOpen } = this.state;

    const dropdownClass = CSSUtils.mergeModifiers('dropdown', {
      [theme]: theme,
    });

    return (
      <OutsideClick onOutsideClick={this.onClose}>
        {trigger(this.onToggleOpen)}
        {isOpen && <div className={dropdownClass}>{children}</div>}
      </OutsideClick>
    );
  }
}

Dropdown.propTypes = {
  trigger: PropTypes.func.isRequired,
  // theme
};

Dropdown.defaultProps = {
  items: [],
  itemProps: {},
};

export default Dropdown;
