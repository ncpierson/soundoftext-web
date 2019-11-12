#!/bin/bash

set -ex

USERNAME=ncpierson
IMAGE=soundoftext-web
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
    down
}

start () {
  docker run               \
    --name=soundoftext-web \
    --detach               \
    -p 3000:80             \
    ncpierson/soundoftext-web:latest
}

stop () {
  docker rm -f soundoftext-web
}

up () {
  docker-compose          \
    -f docker-compose.yml \
    up                    \
    --detach
}

# Begin Script

COMMAND=${1}

case "$COMMAND" in
  build) build $@;;
  deploy)
    build
    deploy
    ;;
  down) down;;
  start) start;;
  stop) stop;;
  up) up;;
esac
