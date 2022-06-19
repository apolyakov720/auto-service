import React from 'react';
import PropTypes from 'prop-types';

import { CSSUtils } from '@utils';
import { CSSConstants } from '@constants';

/** Компонент "Button" (Кнопка) */
class Button extends React.Component {
  render() {
    const { caption, theme, size, extra, circled, noStroke, onClick } = this.props;

    const buttonClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('button', {
        circled,
        [theme]: theme,
        'no-stroke': noStroke,
      }),
      {
        [CSSConstants.sizeClass[size]]: size,
      },
    );

    return (
      <button className={buttonClass} onClick={onClick}>
        {caption && <span className="button__caption">{caption}</span>}
        {extra && <span className="button__extra">{extra}</span>}
      </button>
    );
  }
}

Button.propTypes = {
  /** Название кнопки. */
  caption: PropTypes.string,
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error']),
  /**
   * Размер компонента.
   * Определяется на основе размера шрифта для корня документа.
   * Примечание: размер "M" устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  size: PropTypes.oneOf(['S', 'M', 'L', 'XL', 'XXL']),
  /**
   * Дополнительное содержимое компонента.
   * Принимает React элемент, либо допустимый в качестве дочернего элемента React тип данных.
   * */
  extra: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  /** Флаг для придания компоненту округленного внешенего вида. */
  circled: PropTypes.bool,
  /** Флаг для скрытия границ кнопки, путем установления цвета границ в цвет фона. */
  noStroke: PropTypes.bool,
  /** Функция обработчик нажатия на кнопку. */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  circled: false,
  noStroke: false,
};

export default Button;
