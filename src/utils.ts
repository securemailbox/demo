// Taken and modified from SO
// See: https://stackoverflow.com/a/56399551/4668680
export const genFakeFingerprint = (len: number = 40): string => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return [...Array(len)]
    .map((_) => chars[~~(Math.random() * chars.length)])
    .join("");
};
