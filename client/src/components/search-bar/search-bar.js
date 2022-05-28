import React from 'react';
import Input from '@components/input';
import Icon from '@components/icon';

class SearchBar extends React.Component {
  state = {
    value: '',
    theme: '',
  };

  setValue = (value = '') => {
    if (typeof value === 'object') {
      value = '';
    }

    this.setState({
      value,
    });
  };

  setTheme = () => {
    this.setState({
      theme: 'active',
    });
  };

  unsetTheme = () => {
    this.setState({
      theme: '',
    });
  };

  onChangeHandler = (event) => {
    const { onChange } = this.props;

    const value = event?.target?.value;

    this.setValue(value);

    onChange && onChange(value);
  };

  render() {
    const { placeholder = 'Поиск...' } = this.props;
    const { value, theme } = this.state;
    let effect = <Icon source={Icon.sources.base.cross} />;

    if (!value) {
      effect = null;
    }

    return (
      <Input
        theme={theme}
        extra={<Icon source={Icon.sources.base.search} />}
        effect={effect}
        effectProps={{
          onClick: this.setValue,
        }}
        placeholder={placeholder}
        onFocus={this.setTheme}
        onBlur={this.unsetTheme}
        onChange={this.onChangeHandler}
        value={value}
      />
    );
  }
}

export default SearchBar;
