const { resolve } = require('path')
const copyfiles = require('copyfiles')
const { writeFileSync } = require('fs')

const copyIntoLib = (fileName, onBeforeCopy = (f) => f) => {
  writeFileSync(
    resolve(
      __dirname,
      '../lib',
      `${fileName}`,
    ),
    JSON.stringify(
      onBeforeCopy(
        require(`../${fileName}`),
      ),
      null,
      2,
    ),
  )
}

copyfiles(
  [
    'README.md',
    'LICENSE',
    'lib',
  ],
  {},
  () => {},
);

[
  [
    'tsconfig.json',
    ({
      compilerOptions: {
        declaration,
        declarationDir,
        emitDeclarationOnly,
        rootDir,
        stripInternal,
        ...compilerOptions
      },
    }) => ({ compilerOptions }),
  ],
  [
    'package.json',
    ({
      scripts,
      devDependencies,
      ...packageJSON
    }) => ({
      ...packageJSON,
      main: 'cjs/index.js',
      module: 'esm/index.js'
    }),
  ],
].forEach(
  ([fileName, onBeforeCopy]) => copyIntoLib(fileName, onBeforeCopy),
)

