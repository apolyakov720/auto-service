/** Не используется. Для копирования и создания html файла используем htmlWebpackPlugin. */

const packageJSON = require('../package.json');
const { checkAndCreateFolder, clearFolder, copyFile } = require('./utils');

checkAndCreateFolder('../build');
clearFolder('../build');
copyFile('../src/index.html', '../build/index.html', {
  [packageJSON.name]: 'PRODUCT_NAME',
  [packageJSON.version]: 'PRODUCT_VERSION',
});
