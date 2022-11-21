import commonUtils from '@utils/common';

class Storage {
  /** Конфигурация хранилища по умолчанию. */
  config = {
    /** Уникальное имя хранилища. */
    name: 'defaultStorage',

    /** Вариант хранилища: постоянное или в рамках сессии. */
    type: 'localStorage',
  };

  constructor(config, initialValues) {
    this.config = Object.assign(this.config, config);

    this._create().save(initialValues);
  }

  get _store() {
    const { type } = this.config;

    return type === 'localStorage' ? localStorage : sessionStorage;
  }

  _read() {
    const { name } = this.config;

    return JSON.parse(this._store.getItem(name));
  }

  _save(values) {
    const { name } = this.config;

    this._store.setItem(name, JSON.stringify(values));
  }

  _create() {
    const store = this._read();

    if (!store) {
      this._save({});
    }

    return this;
  }

  /**
   * Сохраняет новые значения ключей в хранилище.
   * Не изменяет значения уже существующих ключей.
   * Возвращает экземпляр хранилища.
   * */
  save(values) {
    const store = this._read();

    this._save({ ...values, ...store });

    return this;
  }

  /**
   * Изменяет значения существующих ключей в хранилище.
   * Не добавляет новые пары ключ/значение.
   * Возвращает экземпляр хранилища.
   * */
  update(values) {
    const store = this._read();

    const valuesForUpdate = commonUtils.restrictObjects(values, store);

    this._save({ ...store, ...valuesForUpdate });

    return this;
  }

  /**
   * Удаляет ключи в хранилище.
   * Игнорирует несуществующие ключи.
   * Возвращает экземпляр хранилища.
   * */
  delete(listKeys) {
    const store = this._read();

    const transformedList = commonUtils.arrayToObject(listKeys);
    const valuesAfterDelete = commonUtils.subtractObjects(store, transformedList);

    this._save(valuesAfterDelete);

    return this;
  }

  /**
   * Полностью очищает хранилище.
   * Возвращает экземпляр хранилища.
   * */
  clear() {
    this._save({});

    return this;
  }
}

export default Storage;
