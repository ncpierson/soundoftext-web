#!/bin/bash

source ~/.nvm/nvm.sh

cd ~/Deployment/

rm -rf soundoftext

git clone git@gitlab.com:2pool/soundoftext.git

cd soundoftext

yarn

REACT_APP_ENV=production yarn build

cp -R build/* /var/www/soundoftext.com
