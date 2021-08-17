import fs from 'fs';
import luaparse from 'luaparse';
import prettier from 'prettier';

import prettierOptions from './.prettierrc.js';
import convertSNKRXMainLua from './convertSNKRXMainLua.mjs';

console.error('Loading lua file...');
fs.readFile('./node_modules/snkrx/main.lua', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.error('Lua file loaded. Parsing into JS object...');
  const rawObject = luaparse.parse(data);

  console.error('Lua file parsed into JS object. Extracting...');
  const extractedObject = convertSNKRXMainLua(rawObject);

  console.error('JS object flattened. Stringifying to JS...');
  const jsString = 'export default ' + JSON.stringify(extractedObject);

  console.error('JS Stringified. Applying prettier...');
  const jsFileContents = prettier.format(jsString, prettierOptions);

  console.error('JS object stringified. Writing to file...');
  fs.writeFile('./src/data/generated.js', jsFileContents, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File written.');
  });
});
