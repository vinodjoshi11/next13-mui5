import React from "react"; 
import Header from "./Header";   
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop:"50px"
  }
}));
const WithHeader=({ children, ...restProps })=> {  
  const classes=useStyles();
  return (
    <>  
      <Header {...restProps}/> 
      <main className={classes.root}> 
        {children} 
      </main> 
    </>
  );
}; 
WithHeader.defaultProps = {
  scroll: true,  
  headerType: "primary"
};
export default React.memo(WithHeader);
