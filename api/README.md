Sound of Text
---

[Sound of Text](https://soundoftext.com) is a website built to help language
learners convert text into audio using the TTS Engine from Google Translate.

This repository contains the Node/Express API server for soundoftext.com.

You can clone this repository locally or pull the **docker image**:

```
docker pull ncpierson/soundoftext-api
```

This image requires environment variables, explained in the
[development](#manually) section below.

# Table of Contents

- [Development](#development)
- [Deployment](#deployment)
- [API Documentation](#documentation)

# Development

## Prerequisites

You will need to fill in `config/development.env`.

### Reveal Secrets

One way of getting these variables is if you are part of git secret in this
project. If so, then you can reveal the secrets as long as you have access to
your private gpg key:

```
git secret reveal
```

### Manually

You can fill in the `config/example.env` file manually:

```
cp config/example.env config/development.env
vim config/development.env # make changes!
```

Explanation:

- `DB__HOST`: hostname where mongodb is running. If running locally, you can set this to "soundoftext-db"
- `STORAGE__ACCESS_KEY_ID`: access key id for AWS or Digital Ocean Spaces
- `STORAGE__SECRET_ACCESS_KEY`: secret value for the access key id
- `STRIPE__KEY`: secret stripe api key

## Run locally

The development server runs completely in docker, so no need to install dependencies locally. Fill in the configuration details as above.

Start development server:

```
yarn start
```

You can now interact with the server at http://localhost:5757

Stop development server:

```
yarn stop
```

# Deployment

## Manual Deployment

You might want to deploy manually if you want to skip tests or do a major/minor
version bump.

As a prerequisite, you will need to have the secret files revealed, or to have
filled them in manually.

To do a version bump and deployment:

```
yarn version --patch # other options: --minor, --major
yarn deploy
```

# Documentation

## Language Codes

Language codes come from the
[google-tts-languages](https://github.com/ncpierson/google-tts-languages)
repository.

# Reference

## POST /sounds/

### Request

#### Google TTS Engine

```json
{
    "engine": "google",
    "data": {
        "text": "Hello, world",
        "voice": "en-US"
    }
}
```

### Response

#### On Success

An HTTP status code of 200 with payload:

```json
{
    "success": true,
    "id": "<RFC4122 uuid>"
}
```

IDs look something like this: "416eda90-552e-11e7-9a60-63d42f732a9c"

#### On Failure

An HTTP status code of 400 with payload:

```json
{
    "success": false,
    "message": "Request failed due to..."
}
```

## GET /sounds/:id

### Response

#### On Success

First, the sound will be pending if it is not done being fetched:

```json
{
    "status": "Pending"
}
```

Once complete, you will receive a different status:

```json
{
    "status": "Done",
    "location": "https://hostname/full/path/to/audio.mp3"
}
```

Otherwise, you will receive an error:

```json
{
    "status": "Error",
    "message": "Failed to generate due to..."
}
```
