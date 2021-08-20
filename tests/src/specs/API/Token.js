const getToken=require('../../utilities/GetToken');
let data = require('../../data/vars.json');
const { strictEqual } = require('assert');
module.exports = {
    '@tags': ['demo'],
    'Get Token': async function (browser) {
        if(data.keycloak.token=="Placeholder"){
            var responseStatusCode = await getToken.GetToken(browser);
            console.log(responseStatusCode);
            // browser.assert.equal(200, responseStatusCode, `Token status code is ${responseStatusCode}`);
        }

        console.log('Token fetched is: ' + data.keycloak.token)
        browser.end();
    } 
}