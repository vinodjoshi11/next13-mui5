import Cookies from "cookies"; 
const jwt = require("jsonwebtoken");

export default async function handler(req, res) {
  const cookie = new Cookies(req, res); 
  try {
    const { username, password } = req.query;
    const role="manager";
    const payload = {
      user_email:username,
      rol: role 
    };
    const token = jwt.sign(
      payload,
      "secret-key",
      {
        expiresIn:60 * 60*24
      }
    );  
    if (token) { 
      const role = "manager";
      cookie.set("authToken", token, { path: "/", httpOnly: true}); 
      cookie.set("role", role, { path: "/", httpOnly: false });
      res.status(200).json({
        success: true,
        role: role,
        token: token || "", 
        msg: "User authenticated"
      });
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
