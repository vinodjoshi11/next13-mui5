import React, { useState }  from "react"; 
import { useRouter } from "next/router"; 
import PasswordSetupForm from "modules/account/components/passwordSetup";
import LayoutPrimarySmb from "app/components/Layouts/LayoutPrimarySmb";
import CardFormSmbLayout from "app/components/Layouts/CardFormSmbLayout";
import { get } from "lodash"; 
import { getUserDetails, LOGOUT } from "app/services/auth.service";
import {ALL_ROUTES } from "app/utils/route-details";  
import { Toast } from "app/services/toast.service";
import jwt_decode from "jwt-decode";
import { STORAGE } from "app/services/localStorage.service";
import { loginRedirection } from "app/utils/login-redirection";
export default function ChangePassword(props) { 
  
  const {isResetPassword=false}=props;  
  const router = useRouter();  
  const [isLoading,setIsLoading]=useState(false);

  const goToDashboard=(user,query)=>{ 
    const { role, valid } = user;   
    let isSetup=false;
    const email = get(query, "email", null);
    setIsLoading(true);
    if(valid && user.token){ 
      const decoded = jwt_decode(user.token);
      const loginEmail = get(decoded, "email"); 
      if(email === loginEmail){
        isSetup=false;
        if (role && role === "SMB") { 
          router.push(ALL_ROUTES.USER_DASHBOARD);
        } else {
          loginRedirection(router);
        }
        Toast.info("This account has been activated");
        return isSetup; 
      }else{
        isSetup=true;
      }
    }else{
      isSetup=true;
    }   
    setIsLoading(false);
    return isSetup;
  };

  const callLogout = async () => {
    await LOGOUT();
    STORAGE.set("token", "");
    STORAGE.set("refreshToken", "");
    STORAGE.set("role", "");
    router.push("/login");
  };
  
  React.useEffect(async()=>{  
    const { user, query }=props; 
    const isSetup= await goToDashboard(user,query);
    const email = get(query, "email", null);
    const temporaryPassword = get(query, "tp", null); 
    if (email && temporaryPassword && isSetup){
      try {
        setIsLoading(true);
        await getUserDetails(email,temporaryPassword);
        setIsLoading(false);
        if (user.valid) {
          await LOGOUT();
          STORAGE.set("token", "");
          STORAGE.set("refreshToken", "");
          STORAGE.set("role", "");
        }
      } catch(error){  
        const status = error?.response?.status || "";   
        if(status === 401 && !isResetPassword){
          callLogout();
          Toast.info("This account has been activated"); 
        }   
        setIsLoading(false);
        console.error(error);
      } 
    }
  },[]);

  React.useEffect(() => {
    router.prefetch("/analytics/dashboard");
  }, []); 
  
  const goToLogin = () => {
    router.push("/login");
  };
 
  return ( 
    <LayoutPrimarySmb logoJustifyContent={"space-between"} headerType={"onlylogoheader"}>
      {(!isLoading) && <CardFormSmbLayout titleAlign={"left"} hideAvatar 
        title={(isResetPassword && "Reset Password") || "Create Password"}  subtitle={(isResetPassword && " ") || "to activate your account "}>
        <PasswordSetupForm afterSuccess={goToLogin} isResetPassword={isResetPassword}/>
      </CardFormSmbLayout>} 
    </LayoutPrimarySmb> 
  );
}
