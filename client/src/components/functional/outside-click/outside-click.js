import React from 'react';
import PropTypes from 'prop-types';

import { CommonUtils } from '@utils';

class OutsideClick extends React.Component {
  constructor(props) {
    super(props);

    this.outsideNode = React.createRef();
  }

  componentDidMount() {
    this.addMouseDownEventListener();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.onMouseDown);
    document.removeEventListener('mouseup', this.onMouseUp);
  }

  addMouseDownEventListener = () => {
    document.addEventListener('mousedown', this.onMouseDown);
  };

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

    if (!isContained && CommonUtils.isFunction(onOutsideClick)) {
      onOutsideClick(event);
    }

    document.removeEventListener('mouseup', this.onMouseUp);
  };

  render() {
    const { children } = this.props;

    return <div ref={this.outsideNode}>{children}</div>;
  }
}

OutsideClick.propTypes = {
  onOutsideClick: PropTypes.func,
};

export default OutsideClick;
