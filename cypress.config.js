const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      specPattern: 'cypress/test_case/web_ui/*.js',
      video: true
  },
});
