import React from 'react';

// TODO: написать компонент, возможно вынести его отсюда
class InlineLoader extends React.PureComponent {
  render() {
    const { message } = this.props;

    return (
      <div className="inline-loader">
        {message}
      </div>
    )
  }
}

export default InlineLoader;