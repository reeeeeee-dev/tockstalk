const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  viewportWidth: 1024,
  viewportHeight: 2048,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
