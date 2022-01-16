const fs = require('fs');
const path = require('path');
const packageJSON = require('../package.json');

const buildDirectoryPath = path.join(__dirname, '../build');

const prepareBuildDirectory = () => {
  if (fs.existsSync(buildDirectoryPath)) {
    clearBuildDirectory();
  } else {
    fs.mkdirSync(buildDirectoryPath);
  }
};

const clearBuildDirectory = (exception) => {
  try {
    const files = fs.readdirSync(buildDirectoryPath);

    if (files.length === 0) {
      return;
    }

    for (let i = 0; i < files.length; i++) {
      const filePath = `${buildDirectoryPath}/${files[i]}`;

      if (!exception || !exception.length || exception.indexOf(files[i]) === -1) {
        if (fs.statSync(filePath).isFile()) {
          fs.unlinkSync(filePath);
        } else {
          fs.rmSync(filePath);
        }
      }
    }
  } catch (e) {
    return;
  }
};

const copyIndexHtmlFile = (inputFile = '', outputFile = '') => {
  return new Promise((resolve, reject) => {
    if (!inputFile || !outputFile) {
      throw new Error('Input or output files are empty');
    }

    fs.readFile(path.resolve(__dirname, inputFile), 'utf8', (error, data) => {
      if (error) {
        return reject(error);
      }

      const productNameRegExp = new RegExp('PRODUCT_NAME', 'g');
      const productVersionRegExp = new RegExp('PRODUCT_VERSION', 'g');

      const resultData = data
        .replace(productNameRegExp, packageJSON.name)
        .replace(productVersionRegExp, packageJSON.version);

      fs.writeFile(path.resolve(__dirname, outputFile), resultData, 'utf8', (error) => {
        if (error) {
          return reject(error);
        }

        resolve();
      });
    });
  });
};

module.exports = {
  prepareBuildDirectory,
  copyIndexHtmlFile,
};
