import React from 'react';
import PropTypes from 'prop-types';

import Input from '@components/shared/input';
import Icon from '@components/shared/icon';

/** Компонент "SearchBar" (Панель поиска) */
class SearchBar extends React.PureComponent {
  state = {
    value: '',
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
    const { value } = this.state;

    const effectIconColor = value ? '' : 'white';

    return (
      <Input placeholder={placeholder} onChange={this.setValue} value={value} mask={mask}>
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
  placeholder: PropTypes.string,
  /**
   * Функция обработчик, вызывается при каждом изменении строки поиска.
   * Принимает строку регулярного выражения или null в качестве единственного аргумента.
   * */
  onChange: PropTypes.func,
};

SearchBar.defaultProps = {
  placeholder: 'Поиск...',
};

export default SearchBar;
