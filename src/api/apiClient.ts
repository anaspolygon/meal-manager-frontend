class ApiClient {
  baseUrl: string;
  withAuth: boolean;
  token: string | null;
  constructor(baseUrl: string, withAuth = false) {
    this.baseUrl = baseUrl;
    this.withAuth = withAuth;
    this.token = null;
  }
  setToken(token: string) {
    this.token = token;
  }
  async request(
    endpoint = "",
    {
      method = "GET",
      data = null,
      headers = {},
    }: {
      method?: string;
      data?: object | null;
      headers?: Record<string, string>;
    }
  ) {
    const options: RequestInit = { method, headers: { ...headers } };
    if (this.withAuth && this.token) {
      (options.headers as Record<string, string>)[
        "Authorization"
      ] = `Bearer ${this.token}`;
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
    const res = await fetch(`${this.baseUrl}/${endpoint}`, options);
    try {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.status === 204 ? null : await res.json();
    } catch (error) {
      if (error instanceof Error) {
        console.error("API Error:", error.message);
      } else {
        console.error("API Error:", error);
      }
      throw error;
    }
  }

  get(endpoint: string) {
    return this.request(endpoint, { method: "GET" });
  }
  post(endpoint: string, data: object | null) {
    return this.request(endpoint, { method: "POST", data });
  }
  put(endpoint: string, data: object | null) {
    return this.request(endpoint, { method: "PUT", data });
  }
  patch(endpoint: string, data: object | null) {
    return this.request(endpoint, { method: "PATCH", data });
  }
  delete(endpoint: string) {
    return this.request(endpoint, { method: "DELETE" });
  }
}
