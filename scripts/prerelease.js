const { resolve } = require('path');
const { writeFileSync } = require('fs');
const copyfiles = require('copyfiles');

const copyIntoLib = (fileName, onBeforeCopy = (f) => f) => {
	writeFileSync(
		resolve(
			__dirname,
			'../lib',
			`${fileName}`
		),
		JSON.stringify(
			onBeforeCopy(
				require(`../${fileName}`)
			),
			null,
			2
		)
	);
};

copyfiles(
	[
		'README.md',
		'LICENSE',
		'lib',
	],
	{},
	() => {}
);

[
	['tsconfig.json', ({ compilerOptions: {
		declaration: _d, declarationDir: _dd, emitDeclarationOnly: _edo, rootDir: _rd, ...compilerOptions
	} }) => ({ compilerOptions })],
	['package.json', ({ scripts: _s, devDependencies: _dd, ...packageJSON }) => packageJSON]
].forEach(
	([fileName, onBeforeCopy]) => copyIntoLib(fileName, onBeforeCopy)
);

