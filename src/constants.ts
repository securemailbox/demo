const HASURA_GRAPHQL_ENGINE_HOSTNAME = "localhost:8081";

const scheme = (proto) => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const wsUrl = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const httpUrl = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;
