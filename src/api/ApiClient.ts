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
    const url = `${this.baseUrl}${endpoint}`;
    // console.log("Request URL:", url);
    const options = buildOptions(
      method,
      headers,
      data,
      this.token,
      this.withAuth
    );
    const res = await fetch(url, options);
    console.log(url, options);
    const contentType = res.headers.get("content-type");
    const responseData =
      contentType && contentType.includes("application/json")
        ? await res.json()
        : await res.text();
    try {
      if (!res.ok) {
        // const err = await res.json();
        console.log("Response not ok:", res.status);
        return {
          success: false,
          status: res.status,
          message: responseData?.message || "Request failed",
          error: responseData,
        };
        throw new Error(`HTTP error! Status: ${res.status}`);
      } else {
        return res.status === 204
          ? null
          : {
              success: true,
              status: res.status,
              data: responseData,
            };
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error, error.message);
        return error.message;
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

export const auth = new ApiClient("http://localhost:3000/api", false);
auth.setToken("fasfasf");
