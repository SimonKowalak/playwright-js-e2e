const { } = require('@playwright/test');

const config = {
  testDir: './tests', // config default test folder
  retries: 2, // config 2 times run test before fail status
  workers: 1, // config 1 workers
  timeout: 30 * 1000, // config 30 sec 
  expect: {

    timeout: 5000
  },

  reporter: 'html',
  projects: [

    {
      name: 'chrome',
      use: {

        browserName: 'chromium',
        headless: false,
        screenshot: 'on',
        video: 'retain-on-failure',
        trace: 'on',//off,on
      }

    },


    /*
        {
          name : 'safari',
          use: {
    
            browserName : 'webkit',
            headless : false,
            screenshot : 'on',
            video: 'retain-on-failure',
            trace : 'on',//off,on     
          }
    
        },
        
        {
          name : 'firefox',
          use: {
    
            browserName : 'firefox',
            headless : false,
            screenshot : 'on',
            video: 'retain-on-failure',
            trace : 'on',//off,on
             }
    
        }
    
        */

  ]

};

module.exports = config;