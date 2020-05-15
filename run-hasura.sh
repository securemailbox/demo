#! /bin/bash

# Need to use `host.docker.internal` as workaround for no docker net
# Docs: https://hasura.io/docs/1.0/graphql/manual/deployment/docker/index.html#deployment-docker
docker run --name securemailbox-hasura -d -p 8081:8080 \
       -e HASURA_GRAPHQL_DATABASE_URL=postgres://postgres:postgres@host.docker.internal:5432/securemailbox \
       -e HASURA_GRAPHQL_ENABLE_CONSOLE=true \
       hasura/graphql-engine:v1.2.1
