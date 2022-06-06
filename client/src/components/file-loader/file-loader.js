import React from 'react';
import { CommonUtils } from '@utils';

class FileLoader extends React.Component {
  render() {
    const { percent } = this.props;
    if (!CommonUtils.isNumeric(percent)) {
      return null;
    }
    const maxPercent = percent > 100 ? 100 : percent; //тернарный оператор
    return (
      <div className="file-loader">
        <div style={{ width: `${maxPercent}%` }} className="file-loader__loadline" />
      </div>
    );
  }
}
export default FileLoader;
