import React from 'react';
import PropTypes from 'prop-types';

import baseIconSet from './sets/base';
import { CSSConstants } from '@constants';
import { CSSUtils } from '@utils';

/** Компонент иконка */
class Icon extends React.Component {
  isColor = (value) => CSS.supports('color', value);

  render() {
    const { source, size, bold, color = '' } = this.props;

    if (!source) {
      return null;
    }

    const Svg = source;

    const isThemeColor = Object.values(CSSConstants.theme).includes(color);
    const styleColor = (!isThemeColor && this.isColor(color) && { color: color }) || {};

    const iconClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('icon', {
        bold,
        [CSSConstants.theme[color.toUpperCase()]]: isThemeColor,
      }),
      {
        [CSSConstants.sizeClass[size]]: size,
      },
    );

    return (
      <div className={iconClass} style={styleColor}>
        <Svg />
      </div>
    );
  }
}

Icon.propTypes = {
  /**
   * Источник иконки.
   * Поле обязательно для заполнения.
   * Валидное значение - допустимый React элемент
   * (т.к. используется загрузчик svgr, который преобразует каждую иконку в React элемент).
   * Все источники определяются в статической переменной класса Icon.sources.
   * */
  source: PropTypes.elementType.isRequired,
  /**
   * Размер иконки.
   * Определяется на основе размера шрифта для корня документа.
   * Примечание: по умолчанию размер иконки наследуются от родительского узла средствами CSS.
   * */
  size: PropTypes.oneOf(['S', 'M', 'L', 'XL', 'XXL']),
  /** Флаг для придания жирного начертания. */
  bold: PropTypes.bool,
  /**
   * Цвет иконки.
   * Цвет можно задать используя уже определенные значения тем, либо валидный, поддерживаемый CSS цвет.
   * По умолчанию используется цвет текста родительского узла.
   * */
  color: PropTypes.oneOfType([
    PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error']),
    PropTypes.string,
  ]),
};

Icon.defaultProps = {
  color: '',
};

Icon.sources = {
  base: baseIconSet,
};

export default Icon;
