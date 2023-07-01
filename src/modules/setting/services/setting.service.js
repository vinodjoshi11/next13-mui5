import {
  CREATE,
  UPDATE,
  DELETE,
  READ
} from "../../../app/services/ServerClient";
const authorizationHeader = { authorization: true };
 
export const getProfile = (username) => {
  return READ(`/user/client/api/v1/admin/user/${username}`, {}, authorizationHeader);
}; 
 
export const getCustomers = (username) => {
  return READ("/user/api/v1/customer");
}; 
