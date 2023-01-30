const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 10000,
  env:{  
    url : "https://rahulshettyacademy.com/"

  },
  projectId: "a9ya15",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
      specPattern: 'cypress/test_case/web_ui/*.js',
      video: true
  },
});
