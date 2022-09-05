import React from 'react';
import PropTypes from 'prop-types';

import { CSSUtils } from '@utils';
import { componentsConstants } from '@constants';

const { FORM_CONTROL_DISPLAY_EXTRA, FORM_CONTROL_DISPLAY_CONTROL, FORM_CONTROL_DISPLAY_EFFECT } =
  componentsConstants;

/** Компонент "FormControl" (Элемент управления формы) */
class FormControl extends React.PureComponent {
  static Extra() {
    return null;
  }

  static Control() {
    return null;
  }

  static Effect() {
    return null;
  }

  renderContent = () => {
    const { children } = this.props;

    let extraElement = null;
    let controlElement = null;
    let effectElement = null;

    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const { props = {}, type: { displayName } = {} } = child;

        if (displayName === FORM_CONTROL_DISPLAY_EXTRA) {
          extraElement = <div className="form-control__extra" {...props} />;
        }

        if (displayName === FORM_CONTROL_DISPLAY_CONTROL) {
          controlElement = <div className="form-control__container" {...props} />;
        }

        if (displayName === FORM_CONTROL_DISPLAY_EFFECT) {
          effectElement = <div className="form-control__effect" {...props} />;
        }
      }
    });

    return (
      <>
        {extraElement}
        <div className="form-control__component">
          {controlElement}
          {effectElement}
        </div>
      </>
    );
  };

  render() {
    const { theme, dropdown, onClick } = this.props;

    const formControlClass = CSSUtils.mergeModifiers('form-control', {
      dropdown,
      [theme]: theme,
    });

    return (
      <div className={formControlClass} onClick={onClick}>
        {this.renderContent()}
      </div>
    );
  }
}

FormControl.Extra.displayName = FORM_CONTROL_DISPLAY_EXTRA;
FormControl.Control.displayName = FORM_CONTROL_DISPLAY_CONTROL;
FormControl.Effect.displayName = FORM_CONTROL_DISPLAY_EFFECT;

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
