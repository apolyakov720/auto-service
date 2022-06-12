import React from 'react';
import PropTypes from 'prop-types';

import { CSSUtils } from '@utils';
import { CSSConstants } from '@constants';

/** Компонент кнопка */
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
  /** Название кнопки */
  caption: PropTypes.string,
  /**
   * Тема кнопки.
   * Определяет внешний вид компонента.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error']),
  /**
   * Размер кнопки.
   * Определяется на основе размера шрифта для корня документа.
   * Примечание: размер "M" устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  size: PropTypes.oneOf(['S', 'M', 'L', 'XL', 'XXL']),
  /**
   * Дополнительное содержимое кнопки.
   * Принимает допустимый в качестве дочернего элемента React тип данных.
   * */
  extra: PropTypes.elementType,
  /** Флаг для придания кнопки округленного внешенего вида. */
  circled: PropTypes.bool,
  /** Флаг для скрытия границ кнопки, путем установления цвета границ в цвет фона. */
  noStroke: PropTypes.bool,
  /** Функция обработчик нажатия на кнопку. */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  size: 'M',
  circled: false,
  noStroke: false,
};

export default Button;
