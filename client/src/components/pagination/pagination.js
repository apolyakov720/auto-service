import React from 'react';

import PaginationItem from './pagination-item';
import Icon from '@components/icon';
import { CommonUtils } from '@utils';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    const { quantity, size } = this.props;
    let pageSize = null;
    let countPages = null;
    let pages = [];
    let isAvailable = CommonUtils.isNumeric(quantity) || quantity > 0;

    if (isAvailable) {
      pageSize = CommonUtils.isNumeric(size) ? Math.abs(size) : 5;
      countPages = Math.floor(quantity / pageSize) + (quantity % pageSize > 0 ? 1 : 0);
      pages = [...new Array(countPages)];
    }

    this.state = {
      pageSize,
      countPages,
      isAvailable,
      pages,
      selected: 0,
    };
  }

  setSelectedPage = (selected) => {
    this.setState({
      selected,
    });
  };

  setPreviousPage = () => {
    this.setState({
      selected: this.state.selected - 1,
    });
  };

  setNextPage = () => {
    this.setState({
      selected: this.state.selected + 1,
    });
  };

  get pages() {
    const { pages, selected } = this.state;

    let visiblePages = [0, selected - 1, selected, selected + 1, pages.length - 1];
    // const horizontalDots = <Icon source={Icon.sources.base.dotsHorizontal} size="s" bold />;

    return pages.reduce((accumulator, _, index) => {
      let content = index + 1;
      let disabled = false;

      if (selected === 0) {
        visiblePages = visiblePages.concat(2);
      }

      if (selected === pages.length - 1) {
        visiblePages = visiblePages.concat(pages.length - 3);
      }

      if (!visiblePages.includes(index)) {
        content = null;
        disabled = true;
      }

      accumulator.push(
        <PaginationItem
          id={index}
          key={index}
          content={content}
          selected={index === selected}
          onClick={this.setSelectedPage}
          disabled={disabled}
        />,
      );

      return accumulator;
    }, []);
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
