module.exports = {
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/vendor/*'],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleDirectories: ['node_modules', 'src', './'],
  moduleFileExtensions: ['js', 'jsx', 'json'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'babel-jest',
  },
  setupFiles: ['<rootDir>/test/__setup__/setupFiles.js'],
  setupFilesAfterEnv: ['<rootDir>/test/__setup__/setupTests.js'],
  snapshotSerializers: ['jest-serializer-html'],
  roots: ['test'],
  testPathIgnorePatterns: ['/node_modules/'],
  testEnvironment: 'jest-environment-jsdom-global',
  testEnvironmentOptions: {
    resources: 'usable',
  },
  testRegex: '/test/.*?\\.(test|spec)\\.js$',
  testURL: 'http://localhost:3000',
  transform: {
    '.*': 'babel-jest',
  },

  verbose: true,
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
};
