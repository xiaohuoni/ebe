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
    'ebe-utils/src/**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/public/**',
    // 临时忽略 core 包，后续也需要增加测试用例
    '!src/core/**/*.{ts,tsx}',
  ],
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
};
