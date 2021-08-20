#!/bin/bash

echo "###### changing directory to /tests"
cd ../../../tests

echo "######## Run Tests"
npm test src/specs/API/Token.js src/specs/API/AddUser.js
# npm test src/specs/API/Token.js src/specs/API/ListUserWithID.js