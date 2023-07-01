import { ALL_AUTH_ROUTE, ALL_ROUTES } from "app/utils/route-details";
import { CREATE } from "./RestClient"; 
import Cookies from "cookies";
import jwt_decode from "jwt-decode";
import { get } from "lodash"; 
import { READ } from "./ServerClient";
const PUBLIC_ROUTES = ["404", "500", "505"];
 
export const getUserDetails = (email, password) =>{
  return READ(`/user/api/v1/user/details?username=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`);
};
  
export const LOGIN = (username, password) =>
  CREATE(`/api/v1/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`);
 
export const LOGOUT = () => CREATE("/api/v1/logout"); 
 
export const isValidUser = (ctx) => {
  const { req, res, query = {} } = ctx;
  const USER = {
    authenticated: false,
    authorized: false,
    role: "",
    token: "",
    accessToken: "",
    destination: "",
    valid: false,
    tokenExp: false
  };
  const cookie = new Cookies(req, res);
  const token = cookie.get("authToken"); 
  const role = cookie.get("role");
  const route = get(req, "url", "/");
  USER.role = role || "manager";
  if (token) {
    USER.authenticated = true;
    USER.token = token; 
    let decoded = jwt_decode(token);  
    const exp = get(decoded, "exp");
    USER.tokenExp = (exp * 1000 < Date.now()); 
  } 
  if (PUBLIC_ROUTES.includes(route)) {
    USER.authorized = true;
    USER.authenticated = true;
    USER.destination = "/";
  } else if (role === "user" && USER.authenticated) {
    USER.authorized = true;
    USER.destination = ALL_ROUTES.USER_DASHBOARD;
  }  else if (role === "manager" && route.includes("admin") && USER.authenticated) {
    USER.authorized = true;
    USER.destination = ALL_ROUTES.CUSTOMER_LISTING;
  }
  USER.valid = USER.tokenExp ? false : USER.authorized && USER.authenticated; 
  if ((USER.valid && !USER.tokenExp) && (["/login", "/"].includes(route) || USER.destination === "/login")) {
    ctx.res.writeHead(302, { Location: USER.destination });
    ctx.res.end();
  } else if ((!USER.valid) && (["/"].includes(route) || ALL_AUTH_ROUTE.includes(route))) {
    cookie.set("authToken", ""); 
    cookie.set("accessToken", ""); 
    cookie.set("role", ""); 
    ctx.res.writeHead(302, { Location: "/login" }); 
    ctx.res.end();
  }   
 
  return { props: { user: USER, query: query } };
};
