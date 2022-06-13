import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/icon';
import { CSSUtils } from '@utils';

/** Компонент "Alert" (Оповещение) */
class Alert extends React.Component {
  render() {
    const { content, theme, closable = true } = this.props;

    const alertClass = CSSUtils.mergeModifiers('alert', {
      [theme]: theme,
    });

    return (
      <div className={alertClass}>
        <div className="alert__content">{content}</div>
        {closable && (
          <div className="alert__effect">
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
