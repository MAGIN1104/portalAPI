export const buildCurlSnippet = (options: {
  baseUrl: string;
  path: string;
  method: string;
  requiresAuth?: boolean;
  authToken: string;
  payloadJson: string;
}): string => {
  const { baseUrl, path, method, requiresAuth, authToken, payloadJson } = options;
  const url = `${baseUrl}${path}`;
  const headerLines = [
    "Content-Type: application/json",
    ...(requiresAuth ? [`Authorization: ${authToken || "Bearer <token>"}`] : []),
  ];
  const headers = headerLines
    .map((header) => `  -H "${header}" \\\n`)
    .join("");
  const body = payloadJson.replace(/'/g, "'\"'\"'");
  return `curl -X ${method} "${url}" \\\n${headers}  -d '${body}'`;
};
