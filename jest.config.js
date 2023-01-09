module.exports = {
  moduleFileExtensions: ["js", "ts", "json", "vue"],
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.ts$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
};
