module.exports = {
  testEnvironment: 'node',
	testRegex: '.*\\.spec.ts$',
	preset: 'ts-jest',
	rootDir: './',
	roots: ['<rootDir>/src', '<rootDir>/tests'],
	globals: {
  	'ts-jest': {
  		tsconfig: '<rootDir>/tsconfig.spec.json',
	  }
	},
	transform: {
		"\\.ts$": "ts-jest"
	},
  clearMocks: true,
	moduleFileExtensions: ['ts', 'js'],
	moduleDirectories: ['node_modules', '**/node_modules', '**/src'],
	testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
}
