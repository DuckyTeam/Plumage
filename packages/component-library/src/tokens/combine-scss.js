/**
 * Take all files from ./dist and combine them in a single "./dist/main.css" file.
 */

const fs = require('fs');

const files = fs.readdirSync(`${__dirname}/build/`);
const outputContent = [];
files.forEach((file) => {
  const fileContent = fs.readFileSync(`${__dirname}/build/${file}`).toString();
  outputContent.push(fileContent);
});

fs.writeFileSync(`${__dirname}/../styles/_tokens.scss`, outputContent.join(''));
