import React from 'react';

import { getClassNameByKey, mergeClasses, mergeModifiers } from '@utils/css';

/**
 * Класс для избавления от написания дублирующего кода.
 * Любой простой компонент, наследующий этот класс получает следующие свойства и методы:
 * 1. className - имя класса, которое определяется на основании свойства className или имени конструктора класса;
 * 2. getClassNameWrapper - метод для определения имени обертки класса, путем слияния модификаторов и дополнительных классов,
 * которые передаются в свойствах modifiers и classes соответственно;
 * */
class Simple extends React.PureComponent {
  constructor(props) {
    super(props);

    this.className = getClassNameByKey(props.className || this.constructor.name);
  }

  getClassNameWrapper() {
    const { modifiers, classes } = this.props;

    return mergeClasses(mergeModifiers(this.className, modifiers), classes);
  }
}

export default Simple;
