#!/bin/bash

set -ex

USERNAME=ncpierson
IMAGE=soundoftext-web

docker build                 \
  --no-cache                 \
  -t $USERNAME/$IMAGE:latest \
  .
