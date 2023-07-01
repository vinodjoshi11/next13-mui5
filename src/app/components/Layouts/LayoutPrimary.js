import React from "react"; 
import Header from "./Header/index";     

const WithHeader=({ children, bgWhite, scroll, ...restProps })=> { 
  let scrollContainerForApp = {
    margin: "0",
    padding: "0",
    minHeight: "calc(100vh - 64px)",
    backgroundColor: bgWhite ? "#ffffff" : "#f5f5f5"
  };
 
  return (
    <> 
      <Header {...restProps}/> 
      <main style={scrollContainerForApp}>{children}</main>
    </>
  );
};
WithHeader.defaultProps = {  
  headerType: "primary",
  scroll: "true",
  bgWhite: true
};
export default React.memo(WithHeader); 