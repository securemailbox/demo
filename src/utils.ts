import { securemailboxesUrl } from "./constants";

// Taken and modified from SO
// See: https://stackoverflow.com/a/56399551/4668680
export const genFakeFingerprint = (len: number = 40): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return [...Array(len)]
    .map((_) => chars[~~(Math.random() * chars.length)])
    .join("");
};

type RequestResponse = [number, Object];

export const request = async (
  endpoint: string,
  body: Object
): Promise<RequestResponse> => {
  const response = await fetch(`${securemailboxesUrl}${endpoint}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(body),
  });

  const json = await response.json();
  return [response.status, json];
};
