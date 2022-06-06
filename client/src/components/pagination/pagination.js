import React from 'react';

import PaginationItem from './pagination-item';
import Icon from '@components/icon';
import { CommonUtils } from '@utils';

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
    let pages = [];
    let isAvailable = CommonUtils.isNumeric(quantity) && quantity > 0 && quantity > size;

    if (isAvailable) {
      pageSize = CommonUtils.isNumeric(size) && size > 0 ? size : 5;
      countPages = Math.floor(quantity / pageSize) + (quantity % pageSize > 0 ? 1 : 0);
      pages = [...new Array(countPages)];
    }

    return {
      pageSize,
      countPages,
      isAvailable,
      pages,
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
    const { pages, selected } = this.state;
    const pageCount = pages.length - 1;

    let visiblePages = new Set([0, selected - 1, selected, selected + 1, pageCount]);
    const horizontalDots = <Icon source={Icon.sources.base.dotsHorizontal} size="s" bold />;

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
            <PaginationItem
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
    const { isAvailable, selected, pages } = this.state;

    if (!isAvailable) {
      return null;
    }

    const leftChevron = <Icon source={Icon.sources.base.chevronLeft} size="s" bold />;
    const rightChevron = <Icon source={Icon.sources.base.chevronRight} size="s" bold />;

    return (
      <ul className="pagination">
        <PaginationItem
          content={leftChevron}
          onClick={this.setPreviousPage}
          disabled={selected === 0}
        />
        {this.pages}
        <PaginationItem
          content={rightChevron}
          onClick={this.setNextPage}
          disabled={selected === pages.length - 1}
        />
      </ul>
    );
  }
}

export default Pagination;
