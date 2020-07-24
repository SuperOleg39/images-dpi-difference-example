#!/usr/bin/env node

const sharp = require('sharp');
const argv = process.argv.slice(2);

const input = argv[0];
const output = argv[1];
const width = +argv[2];
const height = +argv[3];
 
(async () => {
  await sharp(input)
    .resize(width, height)
    .toFile(output);

  console.log('Image resized');
})();
