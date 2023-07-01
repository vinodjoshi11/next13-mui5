import { 
  Button
} from "@mui/material";
import { makeStyles, withStyles } from "@mui/styles"; 
export const useDefaultLoginStyles = makeStyles((theme) => ({
  formControlLabel:{
    padding:"0",
    marginBottom:"0",
    "& input":{
      paddingRight:"0",
      display: "none"
    },
    "& .MuiCheckbox-colorPrimary":{ 
      paddingTop:"0",
      paddingBottom:"0"
    },
    "& .MuiCheckbox-colorPrimary:not(.Mui-checked)":{
      color:"#bdbdbd",
      "&.Mui-checked":{
        color:theme.palette.common.darkPink
      }
    }
  },
  checkboxLabel:{
    fontSize: "1rem",
    fontFamily: "Lato",
    fontWeight: 400,
    lineHeight: 1.5,
    letterSpacing: "0.01em"
  },
  topError:{
    backgroundColor: "#FFF3F5",
    borderRadius: "3px",
    width: "450px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#DB3039",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "12px",
    lineHeight: "14px",
    margin: "0 auto",
    "& img":{
      marginRight:"10px"
    }
  },
  orText:{
    margin:"24px -40px 24px -40px",
    position:"relative",
    textAlign:"center",
    "& span":{
      color: theme.palette.common.shadeGray,
      backgroundColor: theme.palette.background.gray,
      width: "48px",
      height: "34px",
      borderRadius: "17px",
      padding: "4px 8px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "500",
      fontFamily: "'Roboto', sans-serif",
      position:"relative",
      zIndex:"1"  
    },
    "&::before":{
      width:"100%",
      content:"''",
      position:"absolute",
      height:"1px",
      backgroundColor:"#EEEEEE",
      left: "0",
      top: "16px"
    }
  },
  inputText: {
    "& input": {
      padding: "15px 12px 15px",
      height:"48px",
      boxSizing: "border-box",
      color: theme.palette.common.darkShadeGray,
      fontFamily: "'Roboto', sans-serif",
      fontSize: "14px",
      lineHeight: "17px"
    },
    "& input::placeholder": {
      color: theme.palette.common.darkGrey,
      opacity: 1,
      fontSize: "14px",
      fontFamily: "'Roboto', sans-serif"
    },
    "& .MuiFilledInput-root::before": {
      borderRadius: "2px !important",
      border: "1px solid #BDBDBD",
      outline: "0",
      height:"48px",
      bottom:"0"
    },
    "& .MuiFilledInput-root::after": {
      borderRadius: "0 !important"
    },
    "& .MuiFilledInput-underline:after": {
      bottom:"0"
    },
    "& .MuiFilledInput-underline.Mui-focused:before": {
      bottom:"0"
    },
    "& .MuiFilledInput-underline.Mui-focused:after": {
      bottom:"0"
    }
  },
  formLabel:{
    color: theme.palette.common.shadeGray,
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    marginBottom:"10px",
    fontWeight:"500"
  },
  loginButtonDisabled:{
    backgroundColor: "#E0E0E0!important",
    borderRadius: "4px" 
  }, 
  loginButton:{
    height:"48px",
    width:"120px",
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700",
    color:"#fff !important",
    background:theme.palette.common.darkPink,
    "& .MuiButton-label": {
      textTransform: "uppercase",
      color:"#fff"
    },
    "&:hover":{
      background:theme.palette.common.darkPink
    }
  },
  flexBox:{
    display:"flex", flexDirection:"row", justifyContent:"space-between"
  },
  loginBottom:{
    margin:"32px 0",
    opacity: "1!important"
  },
  forgetPasswordTxt: {
    color: theme.palette.primary.dark,
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "400",
    textDecoration:"none",
    ":hover":{
      textDecoration:"none!important"
    }
  },
  forgot: {
    color: theme.palette.button.lightPink
  }, 
  loginBox: {
    borderRadius: "20px",
    backgroundColor: theme.palette.common.white,
    margin: "4rem 0",
    boxShadow: "-2px 3px 10px #00000029",
    position: "relative",
    zIndex: "50",
    border: `1px solid ${theme.palette.common.brightPurple}`
  },
  wrapper: {
    backgroundColor: theme.palette.background.white,
    height: "100%",
    position: "relative"
  },
  title: {
    padding: "0.5rem 0",
    fontSize: "26px",
    fontFamily: "lato",
    fontWeight: "bold"
  },
  header: {
    padding: "1rem 0rem 0 0"
  },
  loginForm: {
    padding: "0rem 40px",
    "& input": {
      paddingRight: "40px",
      "&::-ms-reveal":{
        display:"none"
      },
      "&::-ms-clear":{
        display:"none"
      } 
    },
    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":{
      borderColor:theme.palette.common.darkPink
    },
    "@media (max-width:767px)": {
      padding: "0rem 1rem"
    },
    "&>div": {
      position: "relative"
    }
  },
  berryOne: {
    position: "absolute",
    top: "-2rem",
    left: "-6.5rem",
    zIndex: "5",
    width: "8rem"
  },
  berryTwo: {
    position: "absolute",
    bottom: "-1rem",
    right: "-6rem",
    zIndex: "5",
    width: "8rem"
  },
  formWrapper: {
    position: "relative",
    zIndex: "50",
    backgroundColor: theme.palette.common.white,
    borderRadius: "1.25rem"
  },
  titleTxt: {
    width: "100%",
    textAlign: "center",
    marginBottom: "40px",
    paddingBottom: "20px",
    borderBottom: `1px solid ${theme.palette.common.brightPurple}`
  },
  bottomButtons: {
    marginTop: "50px",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center"
  },
  callButton: {
    marginRight: "48px",
    width: "240px",
    height: "40px",
    color: "#6A1BA3",
    font: "normal normal normal 20px/24px Lato",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: "2px solid #6A1BA3",
    borderRadius: "5px",
    "&:active": {
      background: "#E2D6FD 0% 0% no-repeat padding-box!important",
      border: "2px solid #6A1BA3",
      color: "#6A1BA3"
    },
    "&:hover": {
      background: "#E2D6FD 0% 0% no-repeat padding-box",
      border: "2px solid #6A1BA3"
    }
  },
  nextButton: {
    width: "240px",
    height: "40px",
    color: "#FFFFFF",
    font: "normal normal normal 20px/24px Lato",
    background: "#872EC7 0% 0% no-repeat padding-box",
    border: "2px solid #6A1BA3",
    borderRadius: "5px",
    "&:active": {
      background: "#932F99  0% 0% no-repeat padding-box!important",
      border: "2px solid #6A1BA3"
    },
    "&:hover": {
      background: "#932F99  0% 0% no-repeat padding-box",
      border: "2px solid #6A1BA3"
    },
    "&:disabled": {
      background: "#909090 0% 0% no-repeat padding-box",
      border: "2px solid #909090",
      color: "#FFFFFF"
    }
  },
  fieldIcon: {
    width: "24px",
    height: "24px",
    backgroundSize: "100% 100%",
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)"
  },
  nameIcon: {
    backgroundImage: "url(/images/username.svg)"
  },
  emailIcon: {
    backgroundImage: "url(/images/email_login.svg)"
  },
  faEye: {
    width: "24px",
    height: "24px",
    backgroundImage: "url(/images/eye_off.svg)",
    backgroundSize: "100% 100%",
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)"
  },
  faEyeSlash: {
    width: "24px",
    height: "24px",
    backgroundImage: "url(/images/eye_on.svg)",
    backgroundSize: "100% 100%",
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)"
  },
  bottomNonMFAButtons: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center"
  },
  nextNonMFAButton: {
    width: "80%",
    height: "46px",
    borderRadius: "4px"
  }
}));
    
export const SSOButton = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.shadeGray,
    borderRadius: "4px",
    border: "1px solid #EEEEEE",
    width: "210px",
    padding: "12px 17px",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "'Roboto', sans-serif",
    justifyContent: "flex-start",
    textTransform:"capitalize"
  }
}))(Button); 