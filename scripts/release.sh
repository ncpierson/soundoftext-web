#!/bin/bash

set -e

yarn version --patch

yarn deploy
