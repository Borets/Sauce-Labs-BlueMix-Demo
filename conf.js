  // conf.js
exports.config = {
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,
  


  //seleniumAddress: 'http://ondemand.saucelabs.com:80/wd/hub',
  specs: ['specs/*spec.js'],
  framework: "jasmine2",

  // restartBrowserBetweenTests: true,

  onPrepare: function(){
      var caps = browser.getCapabilities();
      var jasmineReporters = require('jasmine-reporters');
      return browser.getProcessedConfig().then(function(config) {
        // you could use other properties here if you want, such as platform and version
        var browserName = config.capabilities.browserName;

        var junitReporter = new jasmineReporters.JUnitXmlReporter({
            consolidateAll: false,
            savePath: 'test-reports',
            // this will produce distinct xml files for each capability
            filePrefix: browserName + '-xmloutput',
            modifySuiteName: function(generatedSuiteName, suite) {
                // this will produce distinct suite names for each capability,
                // e.g. 'firefox.login tests' and 'chrome.login tests'
                return browserName + '.' + generatedSuiteName;
            }
        });
        jasmine.getEnv().addReporter(junitReporter);
    });

  },

  multiCapabilities: [{
    browserName: 'firefox',
    version: '51',
    platform: 'OS X 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  },{
    browserName: 'firefox',
    version: '50',
    platform: 'OS X 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  },{
    browserName: 'firefox',
    version: '49',
    platform: 'OS X 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  },{
    browserName: 'firefox',
    version: '47',
    platform: 'OS X 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  },{
    browserName: 'firefox',
    version: '46',
    platform: 'OS X 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  }, {
    browserName: 'firefox',
    version: '45',
    platform: 'OS X 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  }, {
    browserName: 'firefox',
    version: '44',
    platform: 'OS X 10.12',
    name: "firefox-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  }],

  onComplete: function() {

    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    };
    printSessionId("Insert Job Name Here");
  }
};
