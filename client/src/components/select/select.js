import React from 'react';
import PropTypes from 'prop-types';

import Alert from "@components/alert";
import FormControl from '@components/form-control';
import FormField from "@components/form-field";
import Icon from '@components/icon';
import { CSSConstants } from "@constants";
import SearchBar from "@components/search-bar";
import ScrollBox from "@components/scroll-box";
import Button from "@components/button";

class Select extends React.Component {
  state = {
    open: false,
    selectedList: [],
  };

  addToSelectedList = (id) => {
    const selectedList = this.state.selectedList.concat(id);

    this.setState({
      selectedList,
    });
  };

  toggleOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  get sampleSheet() {
    const { items, placeholder, placeholderEmpty } = this.props;
    const { selectedList } = this.state;

    if (items.length === 0) {
      return (
        <li className="select__placeholder">{placeholderEmpty}</li>
      );
    }

    if (selectedList.length === 0) {
      return (
        <li className="select__placeholder">{placeholder}</li>
      );
    }

    return selectedList.map((id, index) => {
      const item = items.find((value) => value.id === id);

      return (
        <li key={index} className="select__sample-item">
          <Alert
            textual
            content={item.title}
          />
        </li>
      );
    });
  }

  get list() {
    const { items = [] } = this.props;

    return items.map(({ id, title }) => {
      return (
        <li
          className="select__list-item"
          key={id}
          onClick={() => {
            this.addToSelectedList(id);
          }}
        >{title}</li>
      );
    });
  };

  render() {
    const { open, selectedList } = this.state;
    const {
      label,
      placeholder,
      searchable,
      items,
      required,
    } = this.props;

    const theme = open ? CSSConstants.theme.PRIMARY : '';
    const chevron = open ? (
      <Icon source={Icon.sources.base.chevronUp} />
    ) : (
      <Icon source={Icon.sources.base.chevronDown} />
    );

    return (
      <div className="select">
        <div className="select__control" onClick={this.toggleOpen}>
          <FormField label={label} required={required}>
            <FormControl
              effect={chevron}
              theme={theme}
              dropdown={open}
            >
              <ul className="select__sample-sheet">{this.sampleSheet}</ul>
            </FormControl>
          </FormField>
        </div>
        {open && (
          <div className="dropdown">
            {searchable && (
              <div className="dropdown__search">
                <SearchBar />
              </div>
            )}
            <ul className="dropdown__main">
              <ScrollBox>
                {this.list}
              </ScrollBox>
            </ul>
            <div className="dropdown__footer">
              <Button caption="Отмена" />
              <Button caption="Применить" theme={CSSConstants.theme.PRIMARY} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

Select.propTypes = {
  /**
   * Элементы списка.
   * Свойство обязательно для заполнения.
   * Примечание:
   * 1. Если список состоит из одного элемента, то он выбирается по умолчанию.
   * 2. Если список пуст, то выбор недоступен.
   * */
  items: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Идентификатор элемета.
     * Свойство обязательно для заполнения.
     * */
    id: PropTypes.string.isRequired,
    /**
     * Название элемента списка.
     * Свойство обязательно для заполнения.
     * */
    title: PropTypes.string.isRequired,
  })).isRequired,
  label: PropTypes.string,
  required: PropTypes.bool,
  /** Текстовый подсказка выбора (какие элементы в этом списке?) для пользователя. */
  placeholder: PropTypes.string,
  placeholderEmpty: PropTypes.string,
  /** Флаг, указывающий на то, что можно выполнить поиск элементов списка */
  searchable: PropTypes.bool,
  /** Флаг, указывающий на то, что может быть множественный выбор элементов списка */
  multiple: PropTypes.bool,
  /**
   * Функция обработчик, вызывается при каждом выборе элементов списка.
   * Принимает массив идентификаторов элементов в качестве единственного аргумента.
   * */
  onSelect: PropTypes.func,
};

Select.defaultProps = {
  items: [],
  placeholder: 'Выберите значение из списка',
  placeholderEmpty: 'Элементы списка отсутствуют',
  searchable: true,
  required: false,
};

export default Select;
