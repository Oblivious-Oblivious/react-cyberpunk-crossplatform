module.exports = {
  // preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  testMatch: [
    // app
    // '<rootDir>/spec/app/**',

    // app - uc1
    '<rootDir>/spec/app/uc1_works_loader/**',
  ],
};
