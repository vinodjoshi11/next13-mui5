import axios from "axios";
import {
  CREATE,
  UPDATE,
  DELETE,
  READ
} from "../../../app/services/ServerClient";
const authorizationHeader = { authorization: true };

export const getAddressDetails = (address) => {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAP_KEY}`
  );
}; 