#!/bin/bash

echo "Build docker detached"
docker-compose -f keycloak-mysql.yml up -d

## Bash add pause prompt for 15 seconds ##
read -t 15 -p "I am going to wait for 15 seconds only ..."

echo "###### changing directory to /tests"
cd ../../../tests

echo "###### npm install to install all the Dependencies from package.json"
npm install

echo "###### RUNNING NIGHTWATCH TESTS ######"
npm test src/specs/API/Token.js src/specs/API/AddUser.js 
npm test src/specs/API/Token.js src/specs/API/ListUsers.js 
npm test src/specs/API/Token.js src/specs/API/ListUserWithID.js
