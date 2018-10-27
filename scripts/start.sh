#!/bin/bash

docker run               \
  --name=soundoftext-web \
  --detach               \
  -p 3000:80             \
  ncpierson/soundoftext-web:latest
