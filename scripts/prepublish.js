import { resolve } from 'path'
import copyfiles from 'copyfiles'
import { readFileSync, writeFileSync } from 'fs'

const copyIntoLib = (fileName, onBeforeCopy) => {
  const file = readFileSync(resolve(fileName), 'utf-8')

  writeFileSync(
    resolve('./lib', fileName),
    JSON.stringify(
      onBeforeCopy(JSON.parse(file)),
      null,
      2,
    ),
    {
      encoding: 'utf-8'
    }
  )
}

copyfiles(['README.md', 'LICENSE', 'lib'], {}, () => {});

[
  [
    'tsconfig.json',
    ({
      compilerOptions: {
        declaration,
        declarationDir,
        emitDeclarationOnly,
        stripInternal,
        ...compilerOptions
      },
    }) => ({ compilerOptions }),
  ],
  [
    'package.json',
    ({
      engines,
      scripts,
      devDependencies,
      ...packageJSON
    }) => ({
      ...packageJSON,
      module: 'index.js',
      types: 'index.d.ts',
      sideEffects: false,
      exports: {
        '.': './index.js',
        './apply': './apply.js',
        './compose': './compose.js',
        './curry': './curry.js',
        './guard': './guard.js',
        './identity': './identity.js',
        './inject': './inject.js',
        './pipe': './pipe.js',
        './rethrow': './rethrow.js',
        './tap': './tap.js',
        './either': './either/index.js',
        './lens': './lens/index.js',
        './maybe': './maybe/index.js',
        './permutation': './permutation/index.js',
      }
    }),
  ],
].forEach(
  ([fileName, onBeforeCopy]) => copyIntoLib(fileName, onBeforeCopy),
)

