#!/bin/bash

set -ex

USERNAME=ncpierson
IMAGE=soundoftext-api
VERSION=`cat .version`

# Begin Functions

build () {
  docker build                 \
    --no-cache                 \
    -t $USERNAME/$IMAGE:latest \
    .
}

deploy () {
  docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$VERSION
  docker push $USERNAME/$IMAGE:latest
  docker push $USERNAME/$IMAGE:$VERSION
}

down () {
  docker-compose          \
    -f docker-compose.yml \
    down                  \
    $@
}

up () {
  docker-compose          \
    -f docker-compose.yml \
    up                    \
    --detach              \
    $@
}

# Begin Script

COMMAND=${1}
shift

case "$COMMAND" in
  build) build;;
  deploy)
    build
    deploy
    ;;
  down) down $@;;
  up) up $@;;
esac
