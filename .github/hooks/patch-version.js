const fs = require('fs');

// Read file and parse into JSON
const pjson = JSON.parse(fs.readFileSync(__dirname + '/../../package.json', 'utf8'));

const version = pjson.version;
const versions = version.split('.');
const major = new Date().getUTCFullYear().toString().substr(-2);
const minor = new Date().getMonth() + 1;
const patch = Number(versions.slice(-1) || 0);
const newVersion = `${major}.${minor}.${patch + 1}`;
pjson.version = newVersion;

fs.writeFileSync(__dirname + '/../../package.json', JSON.stringify(pjson, null, 2));

console.info(`Version updated: ${newVersion}`);
