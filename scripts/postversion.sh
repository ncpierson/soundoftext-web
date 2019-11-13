#!/bin/bash

echo $npm_package_version > .version

git add .version

git commit --amend --no-edit

git push
git push --tags
