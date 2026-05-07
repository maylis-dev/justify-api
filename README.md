# Justify API

API REST de justification de texte en Node.js + TypeScript.

## Features

- génération de token
- authentification Bearer
- justification de texte (80 caractères)
- rate limit 80 000 mots/jour

## Installation

npm install

## Run

npm run dev

## Build

npm run build

## Tests

npm test

## Endpoints

### POST /api/token

Body:
{
  "email": "test@test.com"
}

### POST /api/justify

Headers:
Authorization: Bearer TOKEN

Content-Type:
text/plain