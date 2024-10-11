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
      scripts,
      devDependencies,
      ...packageJSON
    }) => packageJSON,
  ],
].forEach(
  ([fileName, onBeforeCopy]) => copyIntoLib(fileName, onBeforeCopy),
)

