import React from 'react';

import { CommonUtils } from '@utils';

class FileLoader extends React.Component {
  render() {
    const { percent } = this.props;

    if (!CommonUtils.isNumeric(percent)) {
      return null;
    }

    return (
      <div className="file-loader">
        <div
          style={{ width: `${percent > 100 ? 100 : percent}%` }}
          className="file-loader__load-line"
        />
      </div>
    );
  }
}

export default FileLoader;
