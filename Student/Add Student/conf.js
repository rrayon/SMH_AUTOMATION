
var HTMLReport = require('protractor-html-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
      'browserName': 'chrome',
  },

  onPrepare: function() {
  browser.manage().window().setSize(1600, 1000);


  var jasmineReporters = require('jasmine-reporters');
	jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    consolidateAll: true,
    savePath: './',
    filePrefix: 'xmlresults'
	}));

  var fs = require('fs-extra');
 
	fs.emptyDir('screenshots/', function (err) {
        console.log(err);
    });
 
    jasmine.getEnv().addReporter({
        specDone: function(result) {
            if (result.status == 'failed') {
                browser.getCapabilities().then(function (caps) {
                    var browserName = caps.get('browserName');
 
                    browser.takeScreenshot().then(function (png) {
                        var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName+ '.png');
                        stream.write(new Buffer(png, 'base64'));
                        stream.end();
                    });
                });
            }
        }
    });

	},

  onComplete: function() {
     var browserName, browserVersion;
     var capsPromise = browser.getCapabilities();
 
     capsPromise.then(function (caps) {
        browserName = caps.get('browserName');
        browserVersion = caps.get('version');
 
        var HTMLReport = require('protractor-html-reporter');
 
        testConfig = {
            reportTitle: 'Test Execution Report',
            outputPath: './',
            screenshotPath: './screenshots',
            testBrowser: browserName,
            browserVersion: browserVersion,
            modifiedSuiteName: false,
            screenshotsOnlyOnFailure: true
        };
        new HTMLReport().from('xmlresults.xml', testConfig);
    });
 },

  baseUrl: 'http://10.100.106.26:4200',
}
