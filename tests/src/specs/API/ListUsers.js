const getToken=require('../../utilities/GetToken');
let datavars = require('../../data/vars.json');
var axios = require('axios');
var qs = require('qs');

const { strictEqual } = require('assert');
var request = require('request');

module.exports = {
    '@tags': ['Users'],
    'API - Get Users': async function (browser) {

      // var responseStatusCode = await getToken.GetToken(browser);
      // console.log(responseStatusCode)

      var data = qs.stringify({
        
      });
      var config = {
        method: 'get',
        url: 'http://localhost:8080/auth/admin/realms/master/users',
        headers: { 
          'Authorization': 'Bearer '+datavars.keycloak.token.replace(/"/g,'')
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data[0].id));
        datavars.keycloak.userSearchid=JSON.stringify(response.data[0].id)
        // console.log(response);
        browser.assert.equal(200, response.status, `Response Status code is ${response.status}`);
      })
      .catch(function (error) {
        console.log(error);
      });
        browser.end();
    } 
}