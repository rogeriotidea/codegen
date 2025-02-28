/**
 * For a detailed explanation regarding each configuration property, visit:
 */

/** @type {import('jest').Config} */
export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  coverageReporters: ["json", "text", "lcov", "clover"],
  // força um coverage para todos os arquivos
  collectCoverageFrom: ["src/**/*.js", "!index.js"],
  coverageThreshold: {
    global: {
      branch: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  maxWorkers: "50%",
  textEnvironment: "node",
  watchIgnorePatterns: ["node_modules"],
  transformIgnorePatterns: ["node_modules"],
};
