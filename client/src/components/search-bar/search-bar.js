import React from 'react';
import PropsTypes from 'prop-types';

import Input from '@components/input';
import Icon from '@components/icon';
import { CSSConstants } from '@constants';

/** Компонент "SearchBar" (Панель поиска) */
class SearchBar extends React.Component {
  state = {
    value: '',
    theme: '',
  };

  setValue = (value = '') => {
    this.setState({
      value,
    });
  };

  setTheme = () => {
    this.setState({
      theme: CSSConstants.theme.PRIMARY,
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

    const effectIconColor = value ? '' : 'white';

    return (
      <Input
        theme={theme}
        extra={<Icon source={Icon.sources.base.search} />}
        effect={<Icon source={Icon.sources.base.cross} color={effectIconColor} />}
        additionalProps={{
          onEffectClick: this.setValue,
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

SearchBar.propTypes = {
  /** Текстовый подсказка поиска(что искать?) для пользователя. */
  placeholder: PropsTypes.string,
  /**
   * Функция обработчик, вызывается при каждом изменении строки поиска.
   * Принимает строку поиска в качестве единственного аргумента.
   * */
  onChange: PropsTypes.func,
};

SearchBar.defaultProps = {
  placeholder: 'Поиск...',
};

export default SearchBar;
