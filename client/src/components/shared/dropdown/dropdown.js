import React from 'react';

import Button from '@components/shared/button';
import ScrollBox from '@components/shared/scroll-box';
import OutsideClick from '@components/functional/outside-click';
import { CSSConstants } from '@constants';
import commonUtils from '@utils/common';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
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
      open: value,
    });
  };

  onClose = () => {
    this.setOpen(false);
  };

  onToggleOpen = () => {
    this.setState(({ open }) => ({
      open: !open,
    }));
  };

  onApply = () => {
    this.props.onApply();
    this.onClose();
  };

  onCancel = () => {
    this.props.onCancel();
    this.onClose();
  };

  onClickItem = (...args) => {
    const {
      notCloseClicked,
      itemProps: { onClick },
    } = this.props;

    commonUtils.isFunction(onClick) && onClick(...args);

    if (!notCloseClicked) {
      this.onClose();
    }
  };

  render() {
    const { open } = this.state;
    const { children, header, onApply, onCancel, items, itemComponent: Component } = this.props;

    return (
      <OutsideClick onOutsideClick={this.onClose}>
        {children(this.onToggleOpen, open)}
        {open && (
          <div className="dropdown">
            {header && <div className="dropdown__header">{header}</div>}
            {!(commonUtils.isEmpty(items) || commonUtils.isNull(Component)) && (
              <div className="dropdown__main">
                <ScrollBox>
                  {items.map((props) => (
                    <Component key={props.id} {...props} onClick={this.onClickItem} />
                  ))}
                </ScrollBox>
              </div>
            )}
            {(commonUtils.isFunction(onApply) || commonUtils.isFunction(onCancel)) && (
              <div className="dropdown__footer">
                <Button caption="Отмена" onClick={this.onCancel} />
                <Button
                  caption="Применить"
                  theme={CSSConstants.THEMES.PRIMARY}
                  onClick={this.onApply}
                />
              </div>
            )}
          </div>
        )}
      </OutsideClick>
    );
  }
}

Dropdown.defaultProps = {
  items: [],
  itemProps: {},
};

export default Dropdown;
