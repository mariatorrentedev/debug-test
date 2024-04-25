const Domain = "http://127.0.0.1:8009";
/*
 * Customer 1: Fixing JWT token parameter from `nayme` change to `name` using jwt.io.
 *
 * Incorrect JWT token
 * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWQiOiJ1c2VyLmlkIiwibmF5bWUiOiJ1c2VyLm5hbWUiLCJpYXQiOjE2MDk5NzMyMzl9.7VSmwQSmkhkEAba8zgd1_05b8hQKovTZtVHxFKa3MNk
 *
 */
const SSOToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwiaWQiOiJ1c2VyLmlkIiwibmFtZSI6InVzZXIubmFtZSIsImlhdCI6MTYwOTk3MzIzOX0.uuNlvgea9GR_BfGz3FkkbJiAiyfgNaRXSGJ6qN77C0c";

export function getSSOToken() {
  return SSOToken;
}

export async function get(url, parameters) {
  const params = {
    ...parameters,
    ssoToken: getSSOToken(),
  };
  const paramString =
    "?" +
    Object.keys(params)
      .map((key) => {
        return key + "=" + params[key];
      })
      .join("&");
  const response = await fetch(Domain + url + paramString);
  const body = await response.text();
  return JSON.parse(body);
}
