import axios from "axios";
import { STORAGE } from "./localStorage.service";  
import SERVER_API from "./ServerClientInterceptor";

const CREATE = (url, body, headers) => {
  // data is an object which will be parsed by axios and converted to query params
  return SERVER_API({ method: "post", url: url, data: body, headers: headers });
};

const READ = (url, data, headers) => {
  // data is an object which will be parsed by axios and converted to query params
  return SERVER_API({
    method: "get",
    url: url,
    params: data,
    headers: headers
  });
};

const UPDATE = (url, body, headers) => {
  // data is an object which will be parsed by axios and converted to query params
  return SERVER_API({ method: "put", url: url, data: body, headers: headers });
};

const DELETE = (url, headers) => {
  // data is an object which will be parsed by axios and converted to query params
  return SERVER_API({
    method: "delete",
    url: url,
    headers: headers
  });
};

const DOWNLOAD = (url, data, headers) => {
  if (headers && headers.authorization) {
    headers.token = STORAGE.get("token");
    delete headers.authorization;
  }
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const downloadUrl = baseURL + url;

  return axios.get(
    downloadUrl,
    {
      params: data,
      headers
    }
  );
};

export { READ, UPDATE, DELETE, CREATE, DOWNLOAD };