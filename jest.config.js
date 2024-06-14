module.exports = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  // testEnvironment: 'node',
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['/node_modules/(?!core-js)/'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  collectCoverage: false,
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    'ebe-utils/src/**/*.{ts,tsx}',
    '!src/index.ts',
    '!src/worker.ts',
    // 平台的预处理代码同步过来
    '!src/utils/factory/**/*.{ts,tsx}',
    // TODO: h5 还没开始做
    '!src/cmd/h5Cmd/**/*.{ts,tsx}',
    '!src/plugins/project/framework/alita/template/files/modalindex.ts',
    '!src/plugins/project/framework/alita/template/files/modalmodal.ts',
    '!src/plugins/project/framework/alita/template/files/modaltypes.ts',
    '!src/plugins/project/framework/alita/template/files/popoverwrapper.ts',
    '!ebe-utils/src/node/cli.ts',
    '!ebe-utils/src/node/constants.ts',
    '!ebe-utils/src/index.ts',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/public/**',
    // 临时忽略 core 包，后续也需要增加测试用例
    '!src/core/**/*.{ts,tsx}',
  ],
  testMatch: ['<rootDir>/tests/**/*.test.ts'],
};
