import React from 'react';
import PropTypes from 'prop-types';

import Icon from '@components/shared/icon';
import { mergeClasses } from '@utils/css';

/** Компонент "Avatar" (Графическое представление профиля) */
class Avatar extends React.PureComponent {
  render() {
    const { source, size } = this.props;

    let content = <Icon source={Icon.sources.base.person} />;

    // TODO: сделать проверки на содержимое источника (абсолютная ссылка, base64 и другие)
    if (source) {
      content = <img src={source} alt="avatar-image" />;
    }

    const avatarClass = mergeClasses('avatar', {
      size: size,
    });

    return <div className={avatarClass}>{content}</div>;
  }
}

Avatar.propTypes = {
  /**
   * Источник для отображения.
   * Если свойство не передано, используется иконка по умолчанию.
   * */
  source: PropTypes.string,
  /**
   * Размер компонента.
   * Определяется на основе размера шрифта для корня документа.
   * Примечание: размер "M" устанавливается по умолчанию средствами CSS, передача свойства необязательна.
   * */
  size: PropTypes.oneOf(['XS', 'S', 'M', 'L', 'XL', 'XXL']),
};

export default Avatar;
