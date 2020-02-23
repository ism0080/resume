module.exports = {
  displayName: 'web',
  testMatch: ['<rootDir>/src/**/*.spec.{ts,tsx}'],
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    // components: '<rootDir>/src/components',
    // scenes: '<rootDir>/src/scenes/',
    // hooks: '<rootDir>/src/hooks',
    // res: '<rootDir>/src/res',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'test-file-stub',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  //   testPathIgnorePatterns: ['<rootDir>/src/res/.*'],
  //   coveragePathIgnorePatterns: ['.*.interface.ts', 'index.ts'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
