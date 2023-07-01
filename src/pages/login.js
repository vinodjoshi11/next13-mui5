import React, { useEffect } from "react";
import NProgress from "nprogress"; //nprogress module
import jwt_decode from "jwt-decode";
import { get } from "lodash";
import { STORAGE } from "../app/services/localStorage.service";
import { useRouter } from "next/router";
import { LOGIN } from "../app/services/auth.service"; 
import { isValidUser } from "../app/services/auth.service"; 
import { Toast } from "app/services/toast.service"; 
import { ALL_ROUTES } from "app/utils/route-details";
import { DefaultLogin } from "modules/login/DefaultLogin"; 
 
export const getServerSideProps = (ctx) => isValidUser(ctx);
 
export default function Login(props) {  
  const [username, setUsername] = React.useState(""); 
  const [isLoading, setLoading] = React.useState(false);  
  const [loginErrorMessage, setLoginErrorMessage] = React.useState("");
  const loginRef = React.useRef(); 
  const router = useRouter();
  
  useEffect(()=>{
    let token = STORAGE.get("token");
    if(token){
      let decoded = jwt_decode(token);  
      const exp = get(decoded, "exp");
      const tokenExp = (exp * 1000 < Date.now());
      if(tokenExp){ 
        STORAGE.set("role", "");
        STORAGE.set("token", ""); 
      }
    }
  },[props]); 
  const login = async (values) => {
    Toast.dismiss();
    try {
      let { email, password } = values;
      setLoginErrorMessage(""); 
      setUsername(email);
      setLoading(true);
      NProgress.start();

      let response = await LOGIN(email, password);  
      if (response && response.status >= 200 < 400) {
        const role = get(response, "data.role", "manager");
        const token = get(response, "data.token", "");    
        STORAGE.set("role", role);
        STORAGE.set("token", token);  
        router.push(ALL_ROUTES.CUSTOMER_LISTING);
        NProgress.done();
        setLoading(false);
      }
    } catch (error) { 
      NProgress.done();
      setLoading(false); 
      setLoginErrorMessage("Incorrect email or password");
    }
  };
  

  return (
    <>  
      <DefaultLogin 
        isLoading={isLoading}
        loginErrorMessage={loginErrorMessage}
        setLoginErrorMessage={setLoginErrorMessage}
        login={login}    
        username={username}  
        ref={loginRef}
      />  
    </>
  );
}
