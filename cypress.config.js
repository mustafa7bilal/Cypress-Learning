const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
const cucumber = require("cypress-cucumber-preprocessor").default; // keep this because you're using old one

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Test Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    // Only .feature files here
    specPattern: "cypress/integration/BDD/**/*.feature",

  
    
    env: {
      url: "https://rahulshettyacademy.com"
    },
    
    stepDefinitions: "cypress/integration/BDD/eCommerce/step_definitions/*.js",

    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    
      mochawesome(on);
    
      return config;
    },
    

    viewportHeight: 1000,
    viewportWidth: 1440,
    defaultCommandTimeout: 6000,
    projectId: "qahmm4",
  },
});
