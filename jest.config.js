const { defaults } = require("jest-config");

module.exports = {
  // An array of glob patterns indicating a set of files for which coverage information should be collected
  // https://jestjs.io/docs/en/configuration#collectcoveragefrom-array
  collectCoverageFrom: ["**/*.{js,jsx}"],

  // An array of directory names to be searched recursively up from the requiring module's location
  // https://jestjs.io/docs/en/configuration#moduledirectories-arraystring
  moduleDirectories: [...defaults.moduleDirectories, "src"],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  // https://jestjs.io/docs/en/configuration#modulenamemapper-objectstring-string--arraystring
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss|less)$": require(
      "identity-obj-proxy"
    ),
  },

  // A list of paths to modules that run some code to configure or set up the testing framework before each test
  // https://jestjs.io/docs/en/configuration#setupfilesafterenv-array
  setupFilesAfterEnv: [
    require.resolve("@testing-library/jest-dom"),
  ],

  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  // https://jestjs.io/docs/en/configuration#testpathignorepatterns-arraystring
  testPathIgnorePatterns: [
    ...defaults.testPathIgnorePatterns,
    "/.github/",
    "/.next/",
    "/build/",
    "/dist/",
  ],

  // A map from regular expressions to paths to transformers
  // https://jestjs.io/docs/en/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.(css|sass|scss|less)$": require.resolve("./config/jest/css.js"),
    "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|sass|scss|less|json)$)": require.resolve(
      "./config/jest/file.js"
    ),
  },

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // https://jestjs.io/docs/en/configuration#transformignorepatterns-arraystring
  transformIgnorePatterns: [
    ...defaults.transformIgnorePatterns,
    "^.+\\.module\\.(css|sass|scss|less)$",
  ],

  // Use a custom watch plugins
  // https://jestjs.io/docs/en/configuration#watchplugins-arraystring--string-object
  watchPlugins: [
    require.resolve("jest-watch-typeahead/filename"),
    require.resolve("jest-watch-typeahead/testname"),
  ],
};
