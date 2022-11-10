import React from 'react';
import PropTypes from 'prop-types';

import { DropdownProvider, DropdownConsumer } from './dropdown-context';
import Button from '@components/shared/button';
import ScrollBox from '@components/shared/scroll-box';
import OutsideClick from '@components/functional/outside-click';
import CSSUtils from '@utils/css';
import commonUtils from '@utils/common';
import { CSSConstants } from '@constants';

class Dropdown extends React.Component {
  static Header = ({ children }) => {
    if (children) {
      return <div className="dropdown__header">{children}</div>;
    }

    return null;
  };

  static Menu = ({ children }) => {
    if (children) {
      return (
        <div className="dropdown__menu">
          <ScrollBox>{children}</ScrollBox>
        </div>
      );
    }

    return null;
  };

  static Controls = ({ onApply, onCancel }) => {
    if (onApply || onCancel) {
      return (
        <DropdownConsumer>
          {({ onClose }) => {
            const onCancelHandler = () => {
              if (commonUtils.isFunction(onCancel)) {
                onCancel();
              }

              onClose();
            };

            const onApplyHandler = () => {
              if (commonUtils.isFunction(onApply)) {
                onApply();
              }

              onClose();
            };

            return (
              <div className="dropdown__controls">
                <div className="controls">
                  {onCancel && (
                    <div className="controls__secondary">
                      <Button caption="Закрыть" onClick={onCancelHandler} />
                    </div>
                  )}
                  {onApply && (
                    <div className="controls__primary">
                      <Button caption="Принять" onClick={onApplyHandler} />
                    </div>
                  )}
                </div>
              </div>
            );
          }}
        </DropdownConsumer>
      );
    }

    return null;
  };

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

  onToggleOpen = (event) => {
    event.stopPropagation();

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
        <DropdownProvider value={{ onClose: this.onClose }}>
          {trigger(this.onToggleOpen)}
          {isOpen && <div className={dropdownClass}>{children}</div>}
        </DropdownProvider>
      </OutsideClick>
    );
  }
}

Dropdown.propTypes = {
  trigger: PropTypes.func.isRequired,
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error', 'disabled']),
};

Dropdown.defaultProps = {
  items: [],
  itemProps: {},
};

export default Dropdown;
