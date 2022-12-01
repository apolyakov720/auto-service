import ru from './localizations/ru.json';
import en from './localizations/en.json';

/**
 * Сервис локализации.
 * Используется для получения локализованных строк в выбранной локализации.
 * Для настройки необходимо:
 * 1. Передать уникальный идентификатор локали localeId в объекте конфигурации;
 * 2. Положить в папку локализаций файл, имя которого будет "localeId".json;
 * 3. Импортировать файл локализации в модуль сервиса.
 * По умолчанию localeId равен "ru" (русский).
 *
 * Примечание:
 * Данная реализация является простой, более сложная предполагает динамический импорт файлов.
 * Некоторые функции под динамическую загрузку уже реализованы, но они пока не используются.
 * */
class Locale {
  /** Конфигурация локализации по умолчанию. */
  config = {
    /** Уникальный идентификатор локали. */
    localeId: 'ru',
  };

  /** Загруженные локализации. */
  _resources = {
    ru,
    en,
  };

  constructor(config = {}) {
    const { localeId } = config;
    const { localeId: defaultLocaleId } = this.config;

    this.config = { ...this.config, localeId: localeId || defaultLocaleId };
  }

  /** Метод не используется. */
  _load(localeId) {
    return new Promise((resolve, reject) => {
      import(`./localizations/${localeId}.json`)
        .then((resource) => resolve(resource.default))
        .catch((error) => reject(error));
    });
  }

  /** Метод не используется. */
  _showLoadFailMessage(localeId) {
    console.warn(`Locale service: can't find the localization file "${localeId}.json"`);
  }

  /**
   * Метод не используется.
   * Динамически загружает файл локализации.
   * Если файл был загружен ранее, то загрузка не происходит.
   * Если загрузка не удалась, то выводится сообщение о неудачной загрузке в консоль.
   * */
  _loadResource(localeId) {
    if (this._resources[localeId]) {
      return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
      this._load(localeId)
        .then((locale) => {
          this._resources[localeId] = locale;

          resolve();
        })
        .catch(() => {
          this._showLoadFailMessage(localeId);

          reject();
        });
    });
  }

  get _resource() {
    const { localeId } = this.config;

    return this._resources[localeId];
  }

  /** Изменение локализации. */
  change = (localeId) => {
    this.config.localeId = localeId;
  };

  /**
   * Получение локализованной строки по ключу.
   * Возвращает локализованную строку или пустую строку, если отсутствует ключ или локализация.
   * Принимает дополнительные строки (%s) и ключи (%k) для замены в той последовательности, в которой они указаны в файле локализации.
   * */
  take = (key, ...substitutions) => {
    const resource = this._resource;
    let value = resource[key];

    if (!(key && resource && value)) {
      return '';
    }

    if (substitutions.length) {
      let index = 0;

      value = value.replace(/%(s|k)/g, (_, type) => {
        const replacement = substitutions[index++] || '';

        if (type === 'k') {
          return this.take(replacement);
        }

        return replacement;
      });
    }

    return value;
  };
}

export default Locale;
