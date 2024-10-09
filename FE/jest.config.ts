// jest.config.ts

import { Config } from '@jest/types';  // Correct way to import Jest types

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(scss|sass|css)$": "jest-css-modules-transform"
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.app.json",
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"], // Make sure this exists
  testMatch: ["**/__tests__/**/*.+(ts|tsx|js)", "**/?(*.)+(spec|test).+(ts|tsx|js)"],
  moduleNameMapper: {
    '\\.(scss|sass|css)$': 'identity-obj-proxy',
  },
};

export default config;
