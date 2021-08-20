const getToken=require('../../utilities/GetToken');
let datavars = require('../../data/vars.json');
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({

});
const { strictEqual } = require('assert');
var request = require('request');

module.exports = {
    '@tags': ['Users'],
    'API - Add User': function (browser) {

      let firstName = 'test_' + Math.random().toString(36).replace(/[^a-z]+/g, '');
      let email = 'test_' + Math.random().toString(36).replace(/[^a-z]+/g, '') + '@test.com';
      let username = 'test_' + Math.random().toString(36).replace(/[^a-z]+/g, '');

      var data = JSON.stringify({"firstName": firstName,"lastName":"ravi14","email": email,"enabled":"true","username": username});

      var config = {
        method: 'post',
        url: 'http://localhost:8080/auth/admin/realms/master/users',
        headers: { 
          'Content-Type': 'application/json', 
          'Authorization': 'Bearer '+datavars.keycloak.token.replace(/"/g,'')
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        browser.assert.equal(201, response.status, `Response Status code is ${response.status}`);
      })
      .catch(function (error) {
        console.log(error);
      });
        browser.end();
    } 
}