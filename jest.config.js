export default {
  testEnvironment: 'node',
	testRegex: '.*\\.spec.ts$',
	preset: 'ts-jest',
	rootDir: './',
	roots: ['<rootDir>/src', '<rootDir>/tests'],
	transform: {
		"\\.ts$": [
			"ts-jest",
			{
				useESM: true,
				tsconfig: 'tsconfig.spec.json',
			}
		]
	},
  clearMocks: true,
	extensionsToTreatAsEsm: ['.ts'],
	moduleFileExtensions: ['ts', 'js'],
	moduleDirectories: ['node_modules', '**/node_modules', '**/src'],
	testPathIgnorePatterns: ['<rootDir>/lib/', '<rootDir>/node_modules/'],
}
