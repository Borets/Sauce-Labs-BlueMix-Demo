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
    browserName: 'chrome',
    version: '56',
    platform: 'Windows 7',
    name: "chrome-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  },{
    browserName: 'chrome',
    version: '55',
    platform: 'Windows 7',
    name: "chrome-tests",
    shardTestFiles: true,
    build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
    maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '54',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '53',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '52',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'chrome',
  //   version: '51',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'chrome',
  //   version: '50',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'chrome',
  //   version: '49',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '56',
  //   platform: 'Windows 7',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'chrome',
  //   version: '55',
  //   platform: 'OS X 10.12',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '54',
  //   platform: 'OS X 10.12',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '53',
  //   platform: 'OS X 10.12',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '52',
  //   platform: 'OS X 10.12',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'chrome',
  //   version: '51',
  //   platform: 'OS X 10.12',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'chrome',
  //   version: '50',
  //   platform: 'OS X 10.12',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'chrome',
  //   version: '49',
  //   platform: 'OS X 10.12',
  //   name: "chrome-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // },{
  //   browserName: 'internet explorer',
  //   version: '11',  
  //   platform: 'Windows 7',
  //   name: "ie11-tests",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'chrome',
  //   version: '43',
  //   platform: 'Windows 8.1',
  //   name: "chrome-win8-1",
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
  // }, {
  //   browserName: 'internet explorer',
  //   version: '10',
  //   platform: 'Windows 7',
  //   name: 'win7-ie10',
  //   shardTestFiles: true,
  //   build: "BlueMix_E2E_Build "+process.env.BUILD_NUMBER,
  //   maxInstances: 200
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
