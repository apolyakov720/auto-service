import React from 'react';
import PropTypes from 'prop-types';

import baseIconSet from './sets/base';
import { CSSConstants } from '@constants';
import CSSUtils from '@utils/css';

/** Компонент "Icon" (Иконка) */
class Icon extends React.PureComponent {
  isColor = (value) => CSS.supports('color', value);

  render() {
    const { source, size, bold, color, onClick } = this.props;

    if (!source) {
      return null;
    }

    const SVG = source;

    const isThemeColor = Object.values(CSSConstants.THEMES).includes(color);
    const styleColor = (!isThemeColor && this.isColor(color) && { color: color }) || {};

    const iconClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('icon', {
        bold,
        [CSSConstants.THEMES[color.toUpperCase()]]: isThemeColor,
      }),
      {
        size: size,
      },
    );

    return (
      <div className={iconClass} style={styleColor} onClick={onClick}>
        <SVG />
      </div>
    );
  }
}

Icon.propTypes = {
  /**
   * Источник иконки.
   * Свойство обязательно для заполнения.
   * Валидное значение - допустимый React элемент
   * (т.к. используется загрузчик svgr, который преобразует каждую иконку в React элемент).
   * Все источники определяются в статической переменной класса Icon.sources.
   * */
  source: PropTypes.elementType.isRequired,
  /**
   * Размер компонента.
   * Определяется на основе размера шрифта для корня документа.
   * Примечание: по умолчанию размер иконки наследуются от родительского узла средствами CSS.
   * */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
  /** Флаг для придания жирного начертания. */
  bold: PropTypes.bool,
  /**
   * Цвет иконки.
   * Цвет можно задать используя уже определенные значения тем, либо валидный, поддерживаемый CSS цвет.
   * По умолчанию используется цвет текста родительского узла.
   * */
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error', 'disabled']),
    PropTypes.string,
  ]),
};

Icon.defaultProps = {
  color: '',
};

Icon.sources = {
  /** Базовый набор иконок, который не зависит от тематики. */
  base: baseIconSet,
};

export default Icon;
