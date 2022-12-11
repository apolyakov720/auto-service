const fs = require('fs');
const path = require('path');

const clearFolder = (folderPath, excludeListFiles) => {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    const filePath = path.join(folderPath, file);

    if (!Array.isArray(excludeListFiles) || excludeListFiles.indexOf(file) === -1) {
      if (fs.statSync(filePath).isFile()) {
        fs.unlinkSync(filePath);
      } else {
        fs.rmSync(filePath, { recursive: true, force: true });
      }
    }
  }
};

const checkAndCreateFolder = (folderPath) => {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
};

const copyFile = (inputFilePath, outputFilePath, replacement) => {
  let data = fs.readFileSync(inputFilePath, 'utf8');

  if (typeof replacement === 'object' && replacement !== null) {
    Object.entries(replacement).forEach(([key, value]) => {
      data = data.replace(new RegExp(`${value}`, 'g'), key);
    });
  }

  fs.writeFileSync(outputFilePath, data, 'utf8');
};

module.exports = {
  clearFolder,
  checkAndCreateFolder,
  copyFile,
};
