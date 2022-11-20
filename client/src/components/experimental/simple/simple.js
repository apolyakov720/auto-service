import React from 'react';

import CSSUtils from '@utils/css';

/**
 * Экспериментальный** класс для избавления от написания дублирующего кода.
 * Любой простой компонент, наследующий этот класс получает следующие свойства и методы:
 * 1. className - имя класса, которое определяется на основании свойства className или имени конструктора класса;
 * 2. getClassNameWrapper - метод для определения имени обертки класса, путем слияния модификаторов и дополнительных классов,
 * которые передаются в свойствах modifiers и classes соответственно;
 *
 * ** - не известно какое будет имя конструктора класса при использовании минификации кода.
 * */
class Simple extends React.PureComponent {
  constructor(props) {
    super(props);

    this.className = CSSUtils.getClassNameByKey(props.className || this.constructor.name);
  }

  getClassNameWrapper() {
    const { modifiers, classes } = this.props;

    return CSSUtils.mergeClasses(CSSUtils.mergeModifiers(this.className, modifiers), classes);
  }
}

export default Simple;
