#!/bin/bash

echo "###### changing directory to /tests"
cd ../../../tests

# echo "###### Install nodejs if not available "
# if node -v | grep "v12."; then
#     echo "### Node exists Proceeding..."
# else
#     echo "### Node doesnt exist Installing"
#     sudo apt-get -y install curl gnupg
#     curl -sL https://deb.nodesource.com/setup_12.x  | sudo bash -
#     sudo apt-get -y install nodejs
#     node -v
# fi

# echo "###### Installing required binaries for chrome to work"
# sudo apt-get install libnss3 libgconf-2-4 -y
# sudo apt-get install libxi6 libgconf-2-4 -y

# echo "###### Installing chrome browser on ubuntu"
# sudo apt-get install wget -y

# # rm /etc/apt/sources.list.d/google*
# # sudo apt-get update
# sudo apt-get purge google-chrome-stable -y
# # wget http://dl.google.com/linux/deb/pool/main/g/google-chrome-unstable/google-chrome-unstable_81.0.4044.17-1_amd64.deb
# # sudo apt-get install -f ./google-chrome-unstable_81.0.4044.17-1_amd64.deb -y 
# wget http://dl.google.com/linux/deb/pool/main/g/google-chrome-stable/google-chrome-stable_87.0.4280.88-1_amd64.deb
# sudo apt-get install -f ./google-chrome-stable_87.0.4280.88-1_amd64.deb -y 
# google-chrome -version

echo "###### npm install to install all the Dependencies from package.json"
# npm install

echo "###### RUNNING NIGHTWATCH TESTS ######"
# npm test src/specs/API/Token.js src/specs/API/AddUser.js src/specs/API/ListUsers.js src/specs/API/ListUserWithID.js
npm test src/specs/API/Token.js src/specs/API/AddUser.js src/specs/API/ListUsers.js src/specs/API/ListUserWithID.js
# npm test src/specs/API/Token.js src/specs/API/ListUsers.js src/specs/API/ListUserWithID.js
# npm test src/specs/API/Token.js src/specs/API/ListUserWithID.js
