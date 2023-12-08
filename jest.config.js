module.exports = {
  // preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native(-.*)?|@react-native(-community)?)/)',
  ],
  testMatch: [
    // app
    // '<rootDir>/src/app/**/**.spec.ts',

    // app - uc1
    '<rootDir>/src/app/uc1_works_loader/**.spec.ts',
      // '<rootDir>/src/app/uc1_works_loader/Work.spec.ts',
      // '<rootDir>/src/app/uc1_works_loader/WorkLoader.spec.ts',
  ],
};
