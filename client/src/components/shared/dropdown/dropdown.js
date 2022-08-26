import React from 'react';

import Button from '@components/shared/button';
import ScrollBox from '@components/shared/scroll-box';
import OutsideClick from '@components/functional/outside-click';
import { CSSConstants } from '@constants';
import { CommonUtils } from '@utils';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', CommonUtils.debounce(this.onClose));
    window.addEventListener('resize', CommonUtils.debounce(this.onClose));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', CommonUtils.debounce(this.onClose));
    window.removeEventListener('resize', CommonUtils.debounce(this.onClose));
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

    CommonUtils.isFunction(onClick) && onClick(...args);

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
            {!(CommonUtils.isEmpty(items) || CommonUtils.isNull(Component)) && (
              <div className="dropdown__main">
                <ScrollBox>
                  {items.map((props) => (
                    <Component key={props.id} {...props} onClick={this.onClickItem} />
                  ))}
                </ScrollBox>
              </div>
            )}
            {(CommonUtils.isFunction(onApply) || CommonUtils.isFunction(onCancel)) && (
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
