#!/bin/bash

chmod 600 deploy_key
eval $(ssh-agent -s)
ssh-add deploy_key

git config user.name "Travis"
git config user.email "travis@travis-ci.com"
