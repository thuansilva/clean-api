/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
  },
};
