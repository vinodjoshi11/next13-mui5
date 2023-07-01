import Cookies from "cookies";

/* TO DO
    - Add secure flag on set cookie on prod branch
 */
export default async function handler(req, res) {
  const cookie = new Cookies(req, res);
  try { 
    cookie.set("authToken", "", { path: "/", httpOnly: true });
    cookie.set("accessToken", "", { path: "/", httpOnly: true }); 
    cookie.set("role", "", { path: "/", httpOnly: true });  
    res.status(200).json({ success: true, msg: "User logged out" }); 
  } catch (error) {
    console.error(error);
    const { response } = error;
    if (response) {
      cookie.set("authToken", "", { path: "/", httpOnly: true });
      cookie.set("accessToken", "", { path: "/", httpOnly: true });
      res.status(500).json("INTERNAL SERVER ERROR");
    } else {
      res.status(500).json("INTERNAL SERVER ERROR");
    }
  }
}
