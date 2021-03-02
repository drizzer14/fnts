const { resolve } = require('path');
const { writeFileSync } = require('fs');

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

copyIntoLib('tsconfig.json', ({ compilerOptions }) => ({ compilerOptions }));
copyIntoLib('package.json', ({ scripts: _s, devDependencies: _dd, ...packageJSON }) => packageJSON);
