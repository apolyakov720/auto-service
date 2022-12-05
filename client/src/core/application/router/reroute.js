import React from 'react';

import { isEmpty } from '@utils/common';

class Reroute extends React.PureComponent {
  render() {
    const { children, redirects } = this.props;

    if (!isEmpty(redirects)) {
      //
    }

    return children;
  }
}

export default Reroute;
