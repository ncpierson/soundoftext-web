#!/bin/bash

set -e

USERNAME=ncpierson
IMAGE=soundoftext-web

git pull

# bump version

version=`cat VERSION`
echo "Current version: $version"
read -p "New version: " version

echo $version > VERSION
git add VERSION

yarn version --new-version "$version"

git push
git push --tags

# push to docker

./scripts/build.sh

docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$version
docker push $USERNAME/$IMAGE:latest
docker push $USERNAME/$IMAGE:$version
