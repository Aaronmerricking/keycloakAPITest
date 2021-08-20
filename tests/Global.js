const browser = require('chromedriver');

module.exports = {

  after: (done) => {
    console.log('=====> Inside AFTER Global Hook')
    browser.stop();
    done();
  },
};