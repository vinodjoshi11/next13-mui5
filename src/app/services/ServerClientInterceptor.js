import axios from "axios";
import { STORAGE } from "./localStorage.service";
import { LOGOUT } from "./auth.service";
import { HTTP_CODES } from "app/constants/app-constant"; 
 
const SERVER_API = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  timeout: 30000, // 5 seconds
  responseType: "json",
  responseEncoding: "utf-8",
  validateStatus: (status) => {
    // `validateStatus` defines whether to resolve or reject the promise for a given
    // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
    // or `undefined`), the promise will be resolved; otherwise, the promise will be
    // rejected.
    return status >= 200 && status < 511; // default
  }
});

// Add a request interceptor
SERVER_API.interceptors.request.use(
  function (config) {
    if (config.headers && config.headers.authorization) {
      config.headers.token = STORAGE.get("token");
      delete config.headers.authorization;
    }

    if (config.headers && config.headers.serverAuthorization) {
      config.headers.token = config.headers.serverToken;
      delete config.headers.authorization;
    } 
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
SERVER_API.interceptors.response.use(
  (response) => {
    const status = response?.status;
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data 
    if (status>=400) {  
      if (status === HTTP_CODES.UNAUTHORIZED && !["/setup-password"].includes(window.location.pathname)) {
        callLogout();
      } else {const error={response:response};
        return Promise.reject(error);
      }
    } else {
      return response;
    }
  },
  (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return handleError(error);
  }
);

const handleError = async (error) => {
  const status = error?.response?.status;
  // was triggering logout fn 
  if (status === HTTP_CODES.UNAUTHORIZED) {
    await callLogout();
  }
  return Promise.reject(error);
};

const callLogout = async () => {
  await LOGOUT();
  STORAGE.set("token", "");
  STORAGE.set("refreshToken", "");
  STORAGE.set("role", "");
  window.location.href = window.location.origin + "/login";
};

export default SERVER_API;  