import React from 'react';
import PropTypes from 'prop-types';

import CSSUtils from '@utils/css';

/** Компонент "FormControl" (Элемент управления формы) */
class FormControl extends React.PureComponent {
  // Части компонента можно передавать в различной последовательности.
  // Поэтому необходимо отсортировать все переданные части в определенной последовательности.
  // Для этого определим вес каждой части.
  orders = {
    Extra: -1,
    Control: 0,
    Effect: 1,
  };

  static Extra(props) {
    return <div className="form-control__extra" {...props} />;
  }

  static Control(props) {
    return <div className="form-control__component" {...props} />;
  }

  static Effect(props) {
    return <div className="form-control__effect" {...props} />;
  }

  render() {
    const { children, theme, dropdown, onClick } = this.props;

    const formControlClass = CSSUtils.mergeModifiers('form-control', {
      dropdown,
      [theme]: theme,
    });

    return (
      <div className={formControlClass} onClick={onClick}>
        {React.Children.toArray(children).sort((a, b) => {
          return this.orders[a.type.name] - this.orders[b.type.name];
        })}
      </div>
    );
  }
}

FormControl.propTypes = {
  /**
   * Тема компонента.
   * Определяет внешний вид компонента.
   * */
  theme: PropTypes.oneOf(['primary', 'secondary', 'info', 'warning', 'error', 'disabled']),
  /**
   * Флаг для изменения внешнего вида.
   * Убирает скругления и цвет для нижней границы компонета.
   * */
  dropdown: PropTypes.bool,
};

export default FormControl;
