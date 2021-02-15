/* eslint-disable max-len */
module.exports = {
  projects: [
    {
      displayName: 'test',
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/file-mock.js',
        '\\.(css|less|scss)$': 'identity-obj-proxy'
      },
      transformIgnorePatterns: ['/node_modules/(?!(user-feedback)/)'],
      testURL: 'http://localhost:6789/home?env=qa&password=123&username=3p.tester&assignmentId=4d001d4d-f51b-4bf6-81ab-9bdf24d2a817'
    },
    {
      runner: 'jest-runner-eslint',
      displayName: 'lint',
      testMatch: ['<rootDir>/**/*.spec.js']
    }
  ],
  verbose: true
};
