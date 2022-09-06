import React from 'react';
import PropTypes from 'prop-types';

import { PaginationListItem } from '@components/shared/list-items';
import Icon from '@components/shared/icon';
import commonUtils from '@utils/common';
import { CSSConstants } from '@constants';

/** Компонент "Pagination" (Нумерация страниц) */
class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.state = this.calculate();
  }

  componentDidUpdate(prevProps) {
    const { quantity, size } = this.props;

    if (prevProps.quantity !== quantity || prevProps.size !== size) {
      this.setState(this.calculate());
    }
  }

  calculate = () => {
    const { quantity, size } = this.props;
    let pageSize = null;
    let countPages = null;
    const isAvailable = commonUtils.isNumeric(quantity) && quantity > 0 && quantity > size;

    if (isAvailable) {
      pageSize = commonUtils.isNumeric(size) && size > 0 ? size : 5;
      countPages = Math.floor(quantity / pageSize) + (quantity % pageSize > 0 ? 1 : 0);
    }

    return {
      pageSize,
      countPages,
      isAvailable,
      selected: 0,
    };
  };

  setSelectedPage = (selected) => {
    const { onChange } = this.props;

    this.setState({
      selected,
    });

    onChange && onChange(selected);
  };

  setPreviousPage = () => {
    this.setSelectedPage(this.state.selected - 1);
  };

  setNextPage = () => {
    this.setSelectedPage(this.state.selected + 1);
  };

  get pages() {
    const { countPages, selected } = this.state;
    const pages = [...new Array(countPages)];
    const pageCount = countPages - 1;

    let visiblePages = new Set([0, selected - 1, selected, selected + 1, pageCount]);
    const horizontalDots = (
      <Icon source={Icon.sources.base.dotsHorizontal} size={CSSConstants.SIZES.S} bold />
    );

    if (selected <= 3) {
      [1, 2, 3, 4].forEach((page) => visiblePages.add(page));
    }

    if (selected >= pageCount - 3) {
      [pageCount - 1, pageCount - 2, pageCount - 3, pageCount - 4].forEach((page) =>
        visiblePages.add(page),
      );
    }

    return pages.reduce(
      (accumulator, _, index) => {
        let content = index + 1;
        let disabled = false;

        if (!visiblePages.has(index)) {
          if (index <= selected - 2 && !accumulator.leftCollapse) {
            accumulator.leftCollapse = true;
            visiblePages.add(index);
          }

          if (index >= selected + 2 && !accumulator.rightCollapse) {
            accumulator.rightCollapse = true;
            visiblePages.add(index);
          }

          content = horizontalDots;
          disabled = true;
        }

        if (visiblePages.has(index)) {
          accumulator.pages.push(
            <PaginationListItem
              id={index}
              key={index}
              content={content}
              selected={index === selected}
              onClick={this.setSelectedPage}
              disabled={disabled}
            />,
          );
        }

        return accumulator;
      },
      {
        pages: [],
        leftCollapse: false,
        rightCollapse: false,
      },
    ).pages;
  }

  render() {
    const { isAvailable, selected, countPages } = this.state;

    if (!isAvailable) {
      return null;
    }

    const leftChevron = (
      <Icon source={Icon.sources.base.chevronLeft} size={CSSConstants.SIZES.S} bold />
    );
    const rightChevron = (
      <Icon source={Icon.sources.base.chevronRight} size={CSSConstants.SIZES.S} bold />
    );

    return (
      <ul className="pagination">
        <PaginationListItem
          content={leftChevron}
          onClick={this.setPreviousPage}
          disabled={selected === 0}
        />
        {this.pages}
        <PaginationListItem
          content={rightChevron}
          onClick={this.setNextPage}
          disabled={selected === countPages - 1}
        />
      </ul>
    );
  }
}

Pagination.propTypes = {
  /**
   * Количество элементов для постраничного распеделения.
   * Должно быть больше нуля и больше размера страницы (см. свойство "size").
   * */
  quantity: PropTypes.number.isRequired,
  /**
   * Размер страницы.
   * Максимальное количество элементов на странице.
   * */
  size: PropTypes.number,
  /**
   * Функция обработчик, вызывается при каждом изменении номера страницы.
   * Принимает номер выбранной страницы в качестве единственного аргумента.
   * */
  onChange: PropTypes.func,
};

Pagination.defaultProps = {
  size: 5,
};

export default Pagination;
