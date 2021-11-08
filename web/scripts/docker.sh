#!/bin/bash

set -ex

USERNAME=soundoftext
IMAGE=web
VERSION=`cat .version`

# Begin Functions

build () {
  docker build                 \
    --no-cache                 \
    -t $USERNAME/$IMAGE:latest \
    .

  docker tag $USERNAME/$IMAGE:latest $USERNAME/$IMAGE:$VERSION
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
    soundoftext/web:latest
}

stop () {
  docker rm -f soundoftext-web
}

push () {
  docker push $USERNAME/$IMAGE:latest
  docker push $USERNAME/$IMAGE:$VERSION
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
    push
    ;;
  down) down;;
  start) start;;
  stop) stop;;
  push) push;;
  up) up;;
esac
