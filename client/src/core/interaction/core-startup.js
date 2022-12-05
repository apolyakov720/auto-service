// import localStorageService from '../services/local-storage';
// import localeService from '../services/locale';
// import { moduleLoaderConfig } from '../configurations/module-loader';

// const changeLocale = (localeId) => {
//   localeService.change(localeId);
//   localStorageService.update({ localeId });
// };

const coreStartup = () => {
  // const localeId = localStorageService.take(['localeId']);
  //
  // if (!localeId) {
  //   localStorageService.save({ localeId: 'ru' });
  // } else {
  //   changeLocale(localeId);
  // }
  //
  // return {
  //   localeId,
  //   changeLocale,
  //   locale: localeService.take,
  //   modules: moduleLoaderConfig,
  // };
};

export { coreStartup };
