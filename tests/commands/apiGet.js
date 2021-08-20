var util = require('util');
var events = require('events');

function apiGet () {}
util.inherits(apiGet, events.EventEmitter);

apiGet.prototype.command = function(apiUrl, token, success) {
  let request = require("request");
  console.log("url = " + apiUrl);
  let options = {
    uri: apiUrl,
    method: "GET",
    json: true,
    headers:{
      'Content-Type': 'application/json',					
      'Authorization': 'Bearer ' + token
    }
  };

  
  request(options, function (error, response) {
    if (error) {
      //console.log("my err" + error);
      console.log('this is my test');
      return;
    }
    //console.log("apiGet res = " + JSON.stringify(response));
    return success(JSON.stringify(response.body));
    this.emit('complete');
  }.bind(this));
};

module.exports = apiGet;