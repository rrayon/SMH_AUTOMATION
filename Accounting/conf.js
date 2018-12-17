exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  capabilities: {
      'browserName': 'chrome',
  },
  baseUrl: 'http://10.100.106.16:4200/authentication/login',
}