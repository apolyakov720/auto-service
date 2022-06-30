import React from 'react';
import PropsTypes from 'prop-types';

import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import { CSSConstants } from '@constants';

/** Компонент "SearchBar" (Панель поиска) */
class SearchBar extends React.Component {
  state = {
    value: '',
    theme: '',
  };

  sanitizeValue = (value) =>
    String(value)
      .replace(/[.?*+^$[\]\\(){}|-]/g, '\\$&')
      .trim();

  setValue = (value = '') => {
    this.setState({
      value,
    });

    this.onChange(value);
  };

  setTheme = () => {
    this.setState({
      theme: CSSConstants.THEMES.PRIMARY,
    });
  };

  unsetTheme = () => {
    this.setState({
      theme: '',
    });
  };

  onChange = (value) => {
    const { onChange } = this.props;

    if (onChange) {
      let searchValue = null;
      const searchParts = [];

      if (value) {
        value.split(/\s+/).forEach((token) => {
          const sanitizedValue = this.sanitizeValue(token);

          searchParts.push(`(?=(.*${sanitizedValue}.*))`);
        });

        searchValue = new RegExp(searchParts.join(''), 'ig');
      }

      onChange(searchValue);
    }
  };

  onChangeValue = (event) => {
    this.setValue(event?.target?.value);
  };

  render() {
    const { placeholder = 'Поиск...', mask } = this.props;
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
        onChange={this.onChangeValue}
        value={value}
        mask={mask}
      />
    );
  }
}

SearchBar.propTypes = {
  /** Текстовый подсказка поиска (что искать?) для пользователя. */
  placeholder: PropsTypes.string,
  /**
   * Функция обработчик, вызывается при каждом изменении строки поиска.
   * Принимает строку регулярного выражения или null в качестве единственного аргумента.
   * */
  onChange: PropsTypes.func,
};

SearchBar.defaultProps = {
  placeholder: 'Поиск...',
};

export default SearchBar;
