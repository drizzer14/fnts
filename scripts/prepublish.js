import copyfiles from 'copyfiles'
import { resolve, join } from 'path'
import { readFileSync, writeFileSync, readdirSync } from 'fs'

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

const generateExports = (dir, path) => {
  const exports = {
    '.': './index.js'
  }

  const entities = readdirSync(dir, { withFileTypes: true })

  for (const entity of entities) {
    if (entity.isDirectory() && entity.name !== 'types') {
      exports['./'.concat(join(path, entity.name))] = './'.concat(join(path, entity.name, 'index.js'))
      Object.assign(exports, generateExports(join(dir, entity.name), join(path, entity.name)))
    } else if (entity.isFile() && entity.name !== 'index.ts') {
      exports['./'.concat(join(path, entity.name.slice(0, -3)))] = './'.concat(join(path, entity.name.replace('.ts', '.js')))
    }
  }

  return exports
}

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
      exports: generateExports('src', '.')
    }),
  ],
].forEach(
  ([fileName, onBeforeCopy]) => copyIntoLib(fileName, onBeforeCopy),
)

