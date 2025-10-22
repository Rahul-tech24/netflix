import axios from "axios";

// Configure axios to include credentials (cookies) with all requests
axios.defaults.withCredentials = true;

// For monorepo setup, the proxy will handle the API calls in development
// No need to set baseURL as Vite proxy will handle /api routes

export default axios;