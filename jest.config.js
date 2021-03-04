const { pathsToModuleNameMapper } = require('ts-jest/utils');

const { compilerOptions } = require('./tsconfig.spec.json');

module.exports = {
  testEnvironment: 'node',
	testRegex: '.*\\.spec.ts$',
	preset: 'ts-jest/presets/js-with-babel',
	rootDir: './',
	roots: ['<rootDir>/src', '<rootDir>/test'],
	globals: {
  	'ts-jest': {
  		tsconfig: '<rootDir>/tsconfig.spec.json',
		  babelConfig: '<rootDir>/.babelrc'
	  }
	},
	transform: {
		"\\.ts$": "ts-jest"
	},
  clearMocks: true,
	moduleFileExtensions: ['ts', 'js'],
	moduleDirectories: ['node_modules', '**/node_modules', '**/src'],
	moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
	testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
};
