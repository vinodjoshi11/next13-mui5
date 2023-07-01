import axios from "axios";
import { STORAGE } from "./localStorage.service";

const REST_API = axios.create({
  baseURL: "",
  // timeout: 5000, // 5 seconds
  responseType: "json",
  responseEncoding: "utf-8",
  validateStatus: (status) => {
    // `validateStatus` defines whether to resolve or reject the promise for a given
    // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
    // or `undefined`), the promise will be resolved; otherwise, the promise will be
    // rejected.
    return status >= 200 && status < 300; // default
  }
});

// Add a request interceptor
REST_API.interceptors.request.use(
  function (config) {
    if (config.headers && config.headers.authorization) {
      config.headers.token = STORAGE.get("token");
    }
    delete config.headers.authorization;
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
REST_API.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

const CREATE = (url, body, headers) => {
  // data is an object which will be parsed by axios and converted to query params
  return REST_API({ method: "post", url: url, data: body, headers: headers });
};

const READ = (url, data) => {
  // data is an object which will be parsed by axios and converted to query params
  return REST_API({ method: "get", url: url, data: data });
};

const UPDATE = (url, body) => {
  // data is an object which will be parsed by axios and converted to query params
  return REST_API({ method: "put", url: url, data: body });
};

const DELETE = (url, body) => {
  // data is an object which will be parsed by axios and converted to query params
  return REST_API({ method: "delete", url: url, data: body });
};

export { READ, UPDATE, DELETE, CREATE };
