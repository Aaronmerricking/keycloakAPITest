var axios = require('axios');
var qs = require('qs');
var datavars = require('../data/vars.json')
async function GetToken(browser){

    var data = qs.stringify({
    'username': 'admin',
    'password': 'admin',
    'grant_type': 'password',
    'client_id': 'admin-cli' 
    });
    var config = {
      method: 'post',
      url: 'http://localhost:8080/auth/realms/master/protocol/openid-connect/token',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.status));
    //   console.log('printing out accesstoken: ' + JSON.stringify(response.data.access_token));
      datavars.keycloak.token=JSON.stringify(response.data.access_token)
      // console.log('Token Stored is: ' + datavars.keycloak.token)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export {GetToken};