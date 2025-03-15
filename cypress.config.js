const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "16ped7",
  chromeWebSecurity: true,
  viewportWidth: 1024,
  viewportHeight: 2048,
  video: true,
  e2e: {
    setupNodeEvents(on, config) {},
  },
});
