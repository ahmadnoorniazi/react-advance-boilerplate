module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    // module must come first
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./src/__mock__/style-mock'),
    // can also map files that are loaded by webpack with the file-loader
  },
  collectCoverageFrom: [
    '**/src/**/*.js',
    '!**/test__tests__/**',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {
      statements: 18,
      branches: 13,
      functions: 19,
      lines: 18,
    },
  },
  projects: ['./src'],
}
