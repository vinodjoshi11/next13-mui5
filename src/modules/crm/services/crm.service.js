import { 
  READ 
} from "../../../app/services/ServerClient"; 
const authorizationHeader = { authorization: true };
 
export const getConfig= () => {
  let url = "public/api/v1/config";
  return READ(url);
}; 