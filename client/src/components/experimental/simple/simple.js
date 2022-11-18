import React from 'react';

import CSSUtils from '@utils/css';

/**
 * Экспериментальный** класс для избавления от написания дублирующего кода.
 * Любой простой компонент наследуюет этот класс.
 * Метод getClass служит для определения имени класса наследующего компонента.
 * Все модификаторы и дополнительные класса наследующего компонента передаются в свойствах modifiers и classes соответственно.
 * Имя класса будет определяться на основании имени конструктора наследующего класса.
 *
 * ** - не известно какое будет имя конструктора класса при использовании минификации кода.
 * */
class Simple extends React.PureComponent {
  getClass() {
    const { modifiers, classes } = this.props;

    return CSSUtils.mergeClasses(
      CSSUtils.mergeModifiers(this.constructor.name, modifiers),
      classes,
    );
  }
}

export default Simple;
