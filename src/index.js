var path = require('path');

var appRoot = path.join(__dirname, '..');

require('electron-compile').init(appRoot, require.resolve('./src/background'));

  // "build": {
  //   "win": {
  //     "target": "NSIS"
  //   }
  // },