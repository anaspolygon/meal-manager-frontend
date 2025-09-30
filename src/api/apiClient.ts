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
  async request(endpoint = "", { method = "GET", data = null, headers = {} }) {
    const options = { method, headers: { ...headers } };
    if (this.withAuth && this.token) {
      options.headers["Authorization"] = `Bearer ${this.token}`;
    }
  }
}
