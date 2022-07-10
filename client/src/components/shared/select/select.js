import React from 'react';
import PropTypes from 'prop-types';

import Alert from '@components/shared/alert';
import FormControl from '@components/shared/form-control';
import Icon from '@components/shared/icon';
import SearchBar from '@components/shared/search-bar';
import Dropdown from '@components/shared/dropdown';
import { CSSUtils } from '@utils';
import { CSSConstants } from '@constants';

class Select extends React.Component {
  state = {
    open: false,
    filter: null,
    selectedList: [],
    accumulatedList: [],
  };

  componentDidUpdate(_, prevState) {
    const { open, selectedList } = this.state;

    if (!prevState.open && open) {
      this.setState({
        accumulatedList: selectedList,
      });
    }
  }

  mergeAccumulatorList = (onApplyFlag) => {
    this.setState(({ accumulatedList, selectedList }) => ({
      accumulatedList: [],
      selectedList: onApplyFlag ? accumulatedList : selectedList,
    }));
  };

  toggleInAccumulatedList = (id) => {
    const { multiple } = this.props;
    const { accumulatedList } = this.state;
    let shallow = multiple ? [...accumulatedList] : [];

    const isContained = shallow.includes(id);

    if (isContained) {
      shallow = shallow.filter((item) => item !== id);
    } else {
      shallow.push(id);
    }

    this.setState({
      accumulatedList: shallow,
    });

    if (!multiple) {
      this.onApplyList();
    }
  };

  toggleOpen = () => {
    if (!this.props.items.length) {
      return;
    }

    this.setOpen(!this.state.open);
  };

  setOpen = (value) => {
    this.setState({
      open: value,
      filter: null,
    });
  };

  onCloseItem = (event, id) => {
    event.stopPropagation();

    this.setState(({ selectedList, accumulatedList }) => ({
      selectedList: selectedList.filter((value) => value !== id),
      accumulatedList: accumulatedList.filter((value) => value !== id),
    }));
  };

  onSearchOption = (value) => {
    this.setState({
      filter: value,
    });
  };

  onCancelList = () => {
    this.mergeAccumulatorList();
    this.setOpen(false);
  };

  onApplyList = () => {
    this.mergeAccumulatorList(true);
    this.setOpen(false);
  };

  get sampleSheet() {
    const { items, placeholder, placeholderEmpty } = this.props;
    const { selectedList } = this.state;

    const selectPlaceholder = (text) => <li className="select__placeholder">{text}</li>;

    if (items.length === 0) {
      return selectPlaceholder(placeholderEmpty);
    }

    if (selectedList.length === 0) {
      return selectPlaceholder(placeholder);
    }

    const visibleList = selectedList.slice(0, 2);
    const collapse = selectedList.slice(2).length;

    const resultList = visibleList.map((id) => {
      const item = items.find((value) => value.id === id);

      return (
        <li key={id} className="select__sample-item">
          <Alert textual id={id} content={item.title} onClose={this.onCloseItem} />
        </li>
      );
    });

    if (collapse) {
      const collapseItemClass = CSSUtils.mergeModifiers('select__sample-item', {
        collapse: true,
      });

      resultList.push(
        <li key="select-collapse-item" className={collapseItemClass}>
          <Alert textual content={`+${collapse}`} />
        </li>,
      );
    }

    return resultList;
  }

  get list() {
    const { items } = this.props;
    const { filter, accumulatedList } = this.state;

    const preparedItems = items
      .map(({ id, title }) => {
        const isSelected = accumulatedList.includes(id);
        const isHighlighted = filter instanceof RegExp && filter.test(title);

        return {
          id,
          title,
          isSelected,
          isHighlighted,
          order: isHighlighted ? 0 : 1,
        };
      })
      .sort((a, b) => a.order - b.order);

    return preparedItems.map(({ id, title, isSelected, isHighlighted }) => {
      const listItemClass = CSSUtils.mergeModifiers('select__list-item', {
        selected: isSelected,
        highlighted: isHighlighted,
      });
      const iconColor = isSelected ? '' : 'white';

      return (
        <li
          className={listItemClass}
          key={id}
          onClick={() => {
            this.toggleInAccumulatedList(id);
          }}>
          <div>{title}</div>
          <Icon source={Icon.sources.base.check} color={iconColor} />
        </li>
      );
    });
  }

  render() {
    const { open } = this.state;
    const { searchable, multiple } = this.props;

    let theme = null;
    let chevron = <Icon source={Icon.sources.base.chevronDown} />;

    if (open) {
      theme = CSSConstants.THEMES.PRIMARY;
      chevron = <Icon source={Icon.sources.base.chevronUp} />;
    }

    return (
      <div className="select">
        <FormControl theme={theme} dropdown={open} onClick={this.toggleOpen}>
          <FormControl.Effect>{chevron}</FormControl.Effect>
          <FormControl.Control>
            <ul className="select__sample-sheet">{this.sampleSheet}</ul>
          </FormControl.Control>
        </FormControl>
        <Dropdown open={open}>
          <Dropdown.Header>
            {searchable && <SearchBar onChange={this.onSearchOption} />}
          </Dropdown.Header>
          <Dropdown.Main>{this.list}</Dropdown.Main>
          {multiple && <Dropdown.Footer onApply={this.onApplyList} onCancel={this.onCancelList} />}
        </Dropdown>
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
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
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  /** Текстовый подсказка при пустом списке. */
  placeholderEmpty: PropTypes.string,
  /** Флаг, указывающий на то, что можно выполнить поиск элементов списка. */
  searchable: PropTypes.bool,
  /** Флаг, указывающий на то, что может быть множественный выбор элементов списка. */
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
};

export default Select;