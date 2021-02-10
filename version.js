const fs = require('fs');
const package = fs.readFileSync('package.json');
const { version } = JSON.parse(package);

fs.writeFileSync('client/src/version.json', JSON.stringify({ version }));
fs.writeFileSync('version.json', JSON.stringify({ version }));
