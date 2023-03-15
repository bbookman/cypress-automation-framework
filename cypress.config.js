const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts, tsx, feature}",
  },

  env: {
    webdriver_uni: "https://www.webdriveruniversity.com",
    automation_test_store: "https://automationteststore.com",
  },

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
  },
});
