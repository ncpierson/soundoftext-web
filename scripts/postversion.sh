#!/bin/bash

echo $npm_package_version > VERSION

git add VERSION

git commit --amend --no-edit

git push
git push --tags
