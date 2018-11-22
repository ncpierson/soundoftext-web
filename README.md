Sound of Text
---

[![Build Status](https://travis-ci.com/ncpierson/soundoftext-web.svg?branch=master)](https://travis-ci.com/ncpierson/soundoftext-web)

[Sound of Text](https://soundoftext.com) is a website built to help language
learners convert text into audio using Google's TTS Engine.

This repository contains the Web App for soundoftext.com. You can find the API
repo [here](https://github.com/ncpierson/soundoftext-api).

# Usage

You can pull this repository as a **docker image**:

```
docker pull ncpierson/soundoftext-web
```

When run, it will automatically connect to the official api. If you want to
connect to your own api, you will need to build your own docker image, as all
the files in the image are meant to be served as a static site.

# Development

## Enforced Standards

Using Prettier is enforced in this repository. If your commit fails, simply run
`yarn prettier` to auto-format all files in-place.

## Prerequisites

### Yarn Dependencies

```
yarn
```

### Configuration

You will likely need to change the development configuration file to meet your
own needs. Use your favorite editor to edit the `.env.development` file.

## Run Locally

To start the development server:

```
yarn start
```

# Deployment

## Configuration

You will likely need to change the production configuration file:
`.env.production`.

Explanation:

- `REACT_APP_DONATIONS_API`: root api for stripe donations
- `REACT_APP_SOUNDS_API`: root api for sounds creation
- `REACT_APP_STRIPE_KEY`: public stripe key needed to interact with donations
  api

## Continuous Deployment

This application is continuously deployed to Docker Hub using Travis CI.
[View latest build](https://travis-ci.com/ncpierson/soundoftext-web)

## Manual Deployment

You might want to deploy manually if you want to skip tests or do a major/minor
version bump.

To do a version bump and deployment:

```
yarn version --patch # other options: --minor, --major
yarn deploy
```
