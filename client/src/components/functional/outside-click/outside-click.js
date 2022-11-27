import React from 'react';
import PropTypes from 'prop-types';

import { isFunction } from '@utils/common';

class OutsideClick extends React.Component {
  constructor(props) {
    super(props);

    this.outsideNode = React.createRef();
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.onMouseDown);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  onMouseDown = (event) => {
    const { current } = this.outsideNode;

    const isContained = current && current.contains(event.target);

    if (!isContained) {
      document.addEventListener('mouseup', this.onMouseUp);
    }
  };

  onMouseUp = (event) => {
    const { onOutsideClick } = this.props;
    const { current } = this.outsideNode;

    const isContained = current && current.contains(event.target);

    if (!isContained && isFunction(onOutsideClick)) {
      onOutsideClick(event);
    }

    document.removeEventListener('mouseup', this.onMouseUp);
  };

  render() {
    const { children } = this.props;

    return (
      <div className="trigger" ref={this.outsideNode}>
        {children}
      </div>
    );
  }
}

OutsideClick.propTypes = {
  onOutsideClick: PropTypes.func,
};

export default OutsideClick;
