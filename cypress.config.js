const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
/*{
  "reporter": "mochawesome",
  "reporterOptions": {
      "reportDir": "cypress/report/mochawesome-report",
      "overwrite": true,
      "html": true,
      "json": false,
      "timestamp": "mmddyyyy_HHMMss"
   },
*/
   env:{
      URL:'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
   }
});

/*const  {downloadFile} = require('cypress-downloadfile/lib/addPlugin');

  module.exports = (on,config) =>
  {
    on('task', {downloadFile});
  }
});
*/