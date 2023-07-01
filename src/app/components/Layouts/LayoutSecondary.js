import React, { useEffect } from "react"; 
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LeftDrawer from "app/components/Elements/Nav/drawer";
import { useSelector } from "react-redux";
import Header from "./Header";

const useStyles = makeStyles(() => ({
  main: {
    paddingTop: "86px"
  },
  contentSection:{
    marginLeft:"0px",
    padding:"15px 30px 30px 30px"
  },
  wrapper:{
    padding:"0",
    background: "#FAFAFA"
  },
  expandNav:{
    marginLeft:"260px",
    transition: "all .1s ease-out",
    background: "#fff"
  },
  collNav:{
    marginLeft:"80px",
    transition: "all .1s ease-out",
    background: "#fff"
  }
}));

function WithHeader({ children, bgWhite, router, ...restProps }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { collapse } = useSelector((state) => state);
 
  useEffect(()=>{
    setOpen(collapse.open);
  },[collapse]);

  const handleDrawerClick = (data) => {
    setOpen(data);
  };

  return (
    <>
      <div className={classes.wrapper}> 
        <Header {...restProps} open={open}/>
        <Box width={open?"260px":"30px"}>
          <LeftDrawer onDrawerClick={handleDrawerClick} router={router} />
        </Box>
        <main className={`${classes.main} ${open ? classes.expandNav:classes.collNav}`} >
          <div>
            <Box className={classes.contentSection}>
              {children}
            </Box>
          </div>
        </main>
      </div>
    </>
  );
}

WithHeader.defaultProps = {
  scroll: true,
  bgWhite: true,
  router: null,
  headerType: "secondary"
};

export default React.memo(WithHeader);
