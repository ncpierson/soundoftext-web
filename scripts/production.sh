#!/bin/bash

source ~/.nvm/nvm.sh

cd ~/Deployment/

rm -rf soundoftext-web

git clone git@github.com:ncpierson/soundoftext-web.git

cd soundoftext-web

yarn

REACT_APP_ENV=production yarn build

cp -R build/* /var/www/soundoftext.com
