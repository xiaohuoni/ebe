module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/(?!core-js)/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
};
