import { get } from "lodash"; 
import {STORAGE} from "../services/localStorage.service";
import jwt_decode from "jwt-decode";
 
export const decodeAuthToken = (name="email") => {
  const data = STORAGE.get("token");
  if (data) {
    const decoded = jwt_decode(data);
    return get(decoded, `${name}`);
  }
  return "";
}; 