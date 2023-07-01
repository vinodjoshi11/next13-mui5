
import {  
  makeStyles
} from "@material-ui/core";
export const useSetupPasswordStyles = makeStyles((theme) => ({
  passwordForm: {
    padding: "0rem 40px",paddingBottom:"20px",
    "& .MuiButton-contained":{
      height:"48px",
      marginTop:"14px",
      "& span":{
        fontSize: "14px",
        fontFamily: "'Roboto', sans-serif",
        fontWeight: "bold", 
        textTransform: "uppercase"
      }
    }
  },
  saveBtn:{
    backgroundColor: theme.palette.button.lightPink,
    color: theme.palette.common.white,
    height:"48px",
    width:"120px",
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700",
    "& .MuiButton-label": {
      textTransform: "uppercase",    
      color: theme.palette.common.white
    },
    "&:hover":{
      background:theme.palette.common.darkPink
    }
  },
  inputText: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  floatInputText: {
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
  formLebel:{
    color: theme.palette.common.shadeGray,
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    marginBottom:"10px",
    fontWeight:"500"
  },
  dissbleEmail:{
    color: "#757575",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    marginBottom:"10px",
    backgroundColor: theme.palette.background.gray,
    border: "1px solid #BDBDBD",
    borderRadius: "2px",
    height: "48px",
    width: "100%",
    display: "block",
    padding: "15px 12px 15px"
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
  }
}));