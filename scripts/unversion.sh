#!/bin/bash

git pull

git push origin :v`cat VERSION`

git reset HEAD~ --hard

git push -f origin master
