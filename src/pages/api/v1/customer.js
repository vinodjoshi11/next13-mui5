import { READ } from "../../../app/services/ServerClient";
export default async function handler(req, res) { 
  try {  
    const response = await READ(
      "api/v1/customer",
      "",
      { authorization: false }
    ); 
    if (response && response.data) { 
      res.status(200).json(response.data);
    }
  } catch (error) {
    const { response } = error;
    if (response) {
      res.status(response.status).json(response.data);
    } else {
      res.status(500).json("INTERNAL SERVER ERROR");
    }
  }
}
