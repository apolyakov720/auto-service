const utilities = require('./utilities');

utilities.prepareBuildDirectory();

utilities.copyIndexHtmlFile('../src/index.html', '../build/index.html');
