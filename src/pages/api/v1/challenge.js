import { CREATE } from "../../../app/services/ServerClient";
import Cookies from "cookies"; 
 
export default async function handler(req, res) {
  const cookie = new Cookies(req, res);
  try {
    const { username, mfaCode, session } = req.query;
    const response = await CREATE(
      `/user/api/v1/MFA/challenge?username=${encodeURIComponent(username)}&mfaCode=${mfaCode}&session=${session}`,
      "",
      { authorization: false }
    ); 
 
    if (response && response.data) {
      const { IdToken, AccessToken,Session, RefreshToken } = response.data;
      const role = "manager";
      cookie.set("authToken", IdToken, { path: "/", httpOnly: true });
      cookie.set("accessToken", AccessToken, { path: "/", httpOnly: true });
      cookie.set("role", role, { path: "/", httpOnly: false });
      res.status(200).json({
        success: true,
        role: role,
        token: IdToken || "",
        session:Session,
        msg: "User authenticated",
        refreshToken: RefreshToken || ""
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
