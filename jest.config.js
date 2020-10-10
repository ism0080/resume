module.exports = {
  displayName: 'web',
  testMatch: ['<rootDir>/packages/**/*.test.{ts,tsx}'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  },
  moduleDirectories: ['<rootDir>/node_modules'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'test-file-stub',
    '\\.(css|less)$': 'identity-obj-proxy'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/packages/**/*.{ts,tsx}',
    '!<rootDir>/**/index.ts',
    '!<rootDir>/**/*.interface.*',
    '!<rootDir>/**/*.stories.*',
    '!<rootDir>/packages/mock-data/**/*',
    '!<rootDir>/**/*.d.ts',
    '!<rootDir>/**/*.test.{ts, tsx}'
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '<rootDir>/packages/contracts/'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  setupFiles: ['jest-canvas-mock']
}
