const getToken=require('../../utilities/GetToken');
let datavars = require('../../data/vars.json');
var axios = require('axios');
var qs = require('qs');
var data = qs.stringify({
  
});
const { strictEqual } = require('assert');
module.exports = {
    '@tags': ['Users'],
    'API - Get User with id': async function (browser) {
        // if(datavars.keycloak.token=="Placeholder"){
        //     var responseStatusCode = await getToken.GetToken(browser);
        //     console.log("======Token Test======");
            // console.log(responseStatusCode);
            // browser.assert.equal(200, responseStatusCode, `Token status code is ${responseStatusCode}`);
        // }    
        var config = {
            method: 'get',
            url: `http://localhost:8080/auth/admin/realms/master/users/${datavars.keycloak.userSearchid.replace(/"/g,'')}`,
            headers: { 
              'Authorization': 'Bearer ' + datavars.keycloak.token.replace(/"/g,'')
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            // console.log(JSON.stringify(response.data));
            browser.assert.equal(200, response.status, `Response Status code is ${response.status}`);
          })
          .catch(function (error) {
            console.log(error);
          });
        browser.end();
    } 
}