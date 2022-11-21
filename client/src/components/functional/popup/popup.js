import React from 'react';

import OutsideClick from '@components/functional/outside-click';
import commonUtils from '@utils/common';

class Popup extends React.Component {
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
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <OutsideClick onOutsideClick={this.onClose}>
        {children(this.onToggleOpen, isOpen)}
      </OutsideClick>
    );
  }
}

export default Popup;
