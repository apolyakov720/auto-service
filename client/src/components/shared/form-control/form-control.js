import React from 'react';
import PropTypes from 'prop-types';

import CSSUtils from '@utils/css';

/** Компонент "FormControl" (Элемент управления формы) */
class FormControl extends React.PureComponent {
  static Extra = (props) => <div className="form-control__extra" {...props} />;

  static Control = (props) => <div className="form-control__control" {...props} />;

  static Effect = (props) => <div className="form-control__effect" {...props} />;

  render() {
    const { children, theme, ...props } = this.props;

    const formControlClass = CSSUtils.mergeModifiers('form-control', {
      [theme]: theme,
    });

    return (
      <div className={formControlClass} {...props}>
        {children}
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
};

export default FormControl;
