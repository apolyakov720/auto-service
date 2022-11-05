import React from 'react';
import PropTypes from 'prop-types';

import CSSUtils from '@utils/css';
import { CSSConstants } from '@constants';

/** Компонент "Button" (Кнопка) */
class Button extends React.PureComponent {
  render() {
    const { type, caption, theme, size, extra, circled, noStroke, full, onClick, ...props } =
      this.props;

    const buttonClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('button', {
        circled,
        full,
        [theme]: theme,
        'no-stroke': noStroke,
      }),
      {
        [CSSConstants.SIZE_CLASSES[size]]: size,
      },
    );

    return (
      <button type={type} className={buttonClass} onClick={onClick} {...props}>
        {caption && <span className="button__caption">{caption}</span>}
        {extra && <span className="button__extra">{extra}</span>}
      </button>
    );
  }
}

Button.propTypes = {
  /** Определяет тип кнопки. */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  /** Название кнопки. */
  caption: PropTypes.string,
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error', 'disabled']),
  /**
   * Размер компонента.
   * Определяется на основе размера шрифта для корня документа.
   * Примечание: размер "M" устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /**
   * Дополнительное содержимое компонента.
   * Принимает React элемент, либо допустимый в качестве дочернего элемента React тип данных.
   * */
  extra: PropTypes.oneOfType([PropTypes.element, PropTypes.elementType]),
  /** Флаг для придания компоненту округленного внешенего вида. */
  circled: PropTypes.bool,
  /** Флаг для скрытия границ кнопки, путем установления цвета границ в цвет фона. */
  noStroke: PropTypes.bool,
  /**
   * Функция обработчик нажатия на кнопку.
   * Принимает событие клика в качестве единственного аргумента.
   * */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
