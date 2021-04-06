#!/bin/bash

yarn start

sleep 2

ava test/**/*.acc.js
code=$?

yarn stop

exit $code
