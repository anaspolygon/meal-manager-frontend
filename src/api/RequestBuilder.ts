export function buildOptions(
  method: string,
  headers: Record<string, string>,
  data: object | null,
  token: string | null,
  withAuth: boolean
): RequestInit {
  const options: RequestInit = { method, headers: { ...headers } };

  if (withAuth && token) {
    (options.headers as Record<string, string>)[
      "Authorization"
    ] = `Bearer ${token}`;
  }

  if (data) {
    if (data instanceof FormData) {
      options.body = data;
    } else {
      (options.headers as Record<string, string>)["Content-Type"] =
        "application/json";
      options.body = JSON.stringify(data);
    }
  }

  return options;
}
