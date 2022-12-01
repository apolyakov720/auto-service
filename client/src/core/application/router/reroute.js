import React from 'react';

import commonUtils from '@utils/common';

class Reroute extends React.PureComponent {
  render() {
    const { children, redirects } = this.props;

    if (!commonUtils.isEmpty(redirects)) {
    }

    return children;
  }
}

export default Reroute;
