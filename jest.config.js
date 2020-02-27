module.exports = {
  displayName: 'web',
  testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'test-file-stub',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  // collectCoverage: false,
  // coverageThreshold: {
  //   global: {
  //     branches: 75,
  //     functions: 75,
  //     lines: 80,
  //     statements: 80,
  //   },
  // },
  // coveragePathIgnorePatterns: ['.*.interface.ts'],
  // collectCoverageFrom: [
  //   '<rootDir>/src/**/*.{ts,tsx}',
  //   '!<rootDir>/src/**/__tests__/**/*',
  //   '!<rootDir>/src/res/**/*',
  //   '!<rootDir>/src/App.tsx',
  // ],
}
