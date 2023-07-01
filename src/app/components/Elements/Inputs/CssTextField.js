import { TextField } from "@mui/material";
import { withStyles } from "@mui/styles"; 
const CssTextField =  withStyles((theme) => ({
  root: {
    "&  .MuiOutlinedInput-input": {
      height: "42px",
      background: "#FFFFFF 0% 0% no-repeat padding-box", 
      padding: "0 16px 0 16px",
      borderRadius: "2px",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "14px",
      color: "#212121"
    },
    "& fieldset": {
      border: "1px solid #BDBDBD",
      borderRadius: "2px"
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderRadius: "2px",
      borderWidth:"1px"
    },
    "& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline": {
      borderRadius: "2px",
      borderWidth:"1px"
    }
  }
}))(TextField); 

export default CssTextField;
