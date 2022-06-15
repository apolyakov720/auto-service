import React from 'react';
import PropTypes from 'prop-types';

import { CSSUtils, CommonUtils } from '@utils';
import { CSSConstants } from "@constants";

/** Компонент "Badge" (Значок) */
class Badge extends React.Component {
  render() {
    const { theme, content, squared, circled, size } = this.props;

    const badgeClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('badge', {
        circled,
        squared,
        [theme]: theme,
      }),
      {
        [CSSConstants.sizeClass[size]]: size,
      }
    );

    return (
      <div className={badgeClass}>{!CommonUtils.isEmpty(content) && <span>{content}</span>}</div>
    );
  }
}

Badge.propTypes = {
  /**
   * Содержимое компонента.
   * Свойство обязательно для заполнения.
   * Принимает React элемент, либо допустимый в качестве дочернего элемента React тип данных.
   * */
  content: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.elementType,
  ]),
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * Примечание: основная тема устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error']),
  /** Флаг для придания компоненту более прямоугольного внешнего вида. */
  squared: PropTypes.bool,
  /**
   * Флаг, который определяет круглую форму компонента, устанавливая равную величину наполнения средствами CSS.
   * Имеет более высокий приоритет над "squared" свойством (определяется каскадностью таблицы стилей).
   * */
  circled: PropTypes.bool,
};

Badge.defaultProps = {
  squared: false,
  circled: false,
};

export default Badge;
