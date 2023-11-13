module.exports = {
  // preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  testMatch: [
    // app
    '<rootDir>/spec/app/**',
    // '<rootDir>/spec/app/f2.spec.ts',
  ],
};
