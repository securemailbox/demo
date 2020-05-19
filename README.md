# Secure Mailboxes Demo Application

A simple webapp for showcasing the functionality of the secure mailboxes API service.

## Quickstart

```bash
yarn install
yarn start
```

## Setup

The application has a couple notable dependencies

Build time:

- [node](https://nodejs.org/en/) (and [yarn](https://yarnpkg.com/))
- [typescript](https://www.typescriptlang.org/)

Run time:

- [hasura](https://hasura.io)
- [Secure mailboxes API](https://github.com/securemailboxes/api)

**Node & typescript**:
Node is used to compile the application via [parcel](https://parceljs.org/).

It's recommended to install `node` via [nvm](https://github.com/nvm-sh/nvm). The project has been tested with the latest stable version (12.16.x).

```bash
nvm install 12.16.3
nvm use 12.16.3

# Install typescript globally
yarn global add typescript
```

**Hasura**:
Hasura provides the graphql API interface on top of a secure mailboxes postgres instance.

It's recommend to run Hasura via it's [docker image](https://hasura.io/docs/1.0/graphql/manual/getting-started/docker-simple.html). Assuming docker is already installed, this can be easily achieved by utilizing the [`run-hasura.sh`](./run-hasura.sh) script. Note that you will likely need to update the `DATABASE_URL` environment variable provided to the hasura container. This can be done by editing the `run-hasura.sh` file.

```bash
chmod u+x run-hasura.sh
./run-hasura.sh
```

**Secure mailboxes API**:
An API instance must be running for this tool to be able to collect any information of value. Instructions on setting this up can be found in the [secure mailboxes README](https://github.com/securemailbox/api/blob/develop/README.md).
