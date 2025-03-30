export default {
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ['text', 'json-summary'],
  moduleFileExtensions: ['vue', 'js', 'ts'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jsdom',
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.(js|ts)$': 'babel-jest',
    '^.+\\.svg$': '<rootDir>/jest.transform.svg.js',
  },
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};
