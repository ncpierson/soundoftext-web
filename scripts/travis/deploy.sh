#!/bin/bash

openssl aes-256-cbc              \
  -K $encrypted_3d45c767af4d_key \
  -iv $encrypted_3d45c767af4d_iv \
  -in deploy_key.enc             \
  -out deploy_key                \
  -d

. ./scripts/travis/add-deploy-key.sh

git clone git@github.com:${TRAVIS_REPO_SLUG}.git $TRAVIS_REPO_SLUG

cd $TRAVIS_REPO_SLUG

yarn config set version-git-message "[skip ci] v%s"

yarn release
