#!/usr/bin/env node

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');
const argv = process.argv.slice(2);

const input = argv[0];
const dest = argv[1];
 
(async () => {
  await imagemin([input], {
    destination: dest,
    plugins: [
      imageminWebp({ quality: 75 })
    ]
  });

  console.log('Images optimized');
})();
