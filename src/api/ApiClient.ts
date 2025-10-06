import { buildOptions } from "./RequestBuilder";

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
    const url = `${this.baseUrl}/${endpoint}`;
    const options = buildOptions(
      method,
      headers,
      data,
      this.token,
      this.withAuth
    );
    const res = await fetch(url, options);
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


export const auth = new ApiClient("http://",true)
auth.setToken("fasfasf")