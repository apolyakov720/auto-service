import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/icon';
import { CSSUtils } from '@utils';
import { CSSConstants } from "@constants";

/** Компонент "Alert" (Оповещение) */
class Alert extends React.Component {
  render() {
    const { content, theme, textual, size, onClose, closable } = this.props;

    const alertClass = CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers('alert', {
        textual,
        [theme]: theme,
      }),
      {
        [CSSConstants.sizeClass[size]]: size,
      }
    );

    return (
      <div className={alertClass}>
        <div className="alert__content">{content}</div>
        {closable && (
          <div className="alert__effect" onClick={onClose}>
            <Icon source={Icon.sources.base.cross} bold />
          </div>
        )}
      </div>
    );
  }
}

Alert.propTypes = {
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
  /** Флаг, указывающий на возможность закрытия оповещения. */
  closable: PropTypes.bool,
};

Alert.defaultProps = {
  closable: true,
};

export default Alert;
