const { resolve } = require('path');
const { writeFileSync } = require('fs');

const typedocJSON = require('../typedoc.json');

const basePath = `../${typedocJSON.out}`;

writeFileSync(
  resolve(__dirname, basePath, `_category_.yml`),
  `label: API
collapsed: true`,
);

writeFileSync(
  resolve(__dirname, basePath, `modules/_category_.yml`),
  `label: Modules
collapsed: true`,
);
