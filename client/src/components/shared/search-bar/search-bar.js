import React from 'react';
import PropsTypes from 'prop-types';

import Input from '@components/shared/input';
import Icon from '@components/shared/icon';
import { CSSConstants } from '@constants';

/** Компонент "SearchBar" (Панель поиска) */
class SearchBar extends React.PureComponent {
  state = {
    value: '',
    theme: null,
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
      theme: null,
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

  onClear = (event) => {
    event.stopPropagation();
    this.setValue();
  };

  render() {
    const { placeholder, mask } = this.props;
    const { value, theme } = this.state;

    const effectIconColor = value ? '' : 'white';

    return (
      <Input
        theme={theme}
        placeholder={placeholder}
        onFocus={this.setTheme}
        onBlur={this.unsetTheme}
        onChange={this.setValue}
        value={value}
        mask={mask}>
        <Input.Extra>
          <Icon source={Icon.sources.base.search} />
        </Input.Extra>
        <Input.Effect onClick={this.onClear}>
          <Icon source={Icon.sources.base.cross} color={effectIconColor} />
        </Input.Effect>
      </Input>
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
