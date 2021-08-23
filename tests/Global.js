// const browser = require('chromedriver');

// module.exports = {

//   after: (done) => {
//     console.log('=====> Inside AFTER Global Hook')
//     browser.stop();
//     done();
//   },
// };

var HtmlReporter = require('nightwatch-html-reporter');
var reporter = new HtmlReporter({
    openBrowser: true,
    reportsDirectory: __dirname + '/reports'
});
module.exports = {
    reporter: reporter.fn
};

// var allure = require('allure-commandline');

// // returns ChildProcess instance
// var generation = allure(['generate', 'allure-results']);

// generation.on('exit', function(exitCode) {
//     console.log('Generation is finished with code:', exitCode);
// });