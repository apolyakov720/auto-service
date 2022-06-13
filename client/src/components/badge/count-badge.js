import React from 'react';
import PropTypes from 'prop-types';

import Badge from './badge';
import { CommonUtils } from '@utils';

/** Компонент "CountBadge" (Числовой значок) */
class CountBadge extends React.Component {
  get value() {
    const { count, limit = 1 } = this.props;

    if (CommonUtils.isNumeric(count) && count > -1) {
      const digitNumber = String(count).length;

      if (digitNumber > limit) {
        return '9'.repeat(limit).concat('+');
      }

      return count;
    }

    return 0;
  }

  render() {
    const { theme } = this.props;

    return <Badge content={this.value} theme={theme} circled />;
  }
}

CountBadge.propTypes = {
  /**
   * Отображаемое число.
   * Должно быть положительным.
   * Число будет свернуто по максимальной допустимой разрядности (см. свойство "limit").
   * */
  count: PropTypes.number,
  /**
   * Максимальная разрядность числа.
   * */
  limit: PropTypes.number,
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * Примечание: основная тема устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error']),
};

CountBadge.defaultProps = {
  limit: 1,
};

export default CountBadge;
