import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Zoom from "@mui/material/Zoom";
import DashboardHeader from "./Dashboard"; 
import OnlyLogoHeader from "./OnlyLogoHeader";
import { STORAGE } from "app/services/localStorage.service"; 

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: "0"
  },
  expandHeader: {
    marginLeft: "260px",
    position: "fixed",
    width: "calc(100% - 260px)",
    boxShadow: "none",
    backgroundColor: "#fff",
    zIndex: "91"
  },
  appHeader: {
    marginLeft: "0px !important",
    width: "100% !important",
    backgroundColor:"#fff",
    boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.06) !important",
    height:"80px",
    justifyContent: "center"
  },
  collapseHeader: {
    marginLeft: ({ isToken, hideExtraSpace }) => `${(isToken && !hideExtraSpace) && "80px" || "0px"}`,
    position: "fixed",
    width: ({ isToken, hideExtraSpace }) => `calc(100% - ${(isToken && !hideExtraSpace) && "80px" || "0px"})`,
    boxShadow: "none",
    backgroundColor: "#fff",
    zIndex: "2"
  }
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func
};

const appBarStyles = makeStyles((theme) => ({
  root: {
    // boxShadow: "none",
  },
  colorPrimary: {
    backgroundColor: theme.palette.background.default
  }

}));
const getToken=()=>{
  if(typeof window !== "undefined"){
    return STORAGE.get("token") || false;
  }else
    return false;
};
function Header(props) {
  const isToken = getToken();
  const classes = useStyles({ ...props, isToken: isToken, hideExtraSpace: props.hideExtraSpace || false });
  const appBarClassKey = appBarStyles(props);
  const getHeader = () => {
    switch (props.headerType) { 
      case "secondary":
        return <DashboardHeader greetings={true} />;
      case "onlyLogoHeader":
        return <OnlyLogoHeader {...props}/>; 
      default:
        return <>Header</>;
    }
  };

  return (
    <AppBar position={props.position}
      className={`${(["clientlogoheader"].includes(props.headerType) && classes.appHeader) || ""} ${props.headerType === "smblogged" ? appBarClassKey : props.open ? classes.expandHeader : classes.collapseHeader}`}>
      <Toolbar disableGutters className={classes.toolBarRoot}>
        {getHeader()}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  position: PropTypes.string,
  headerType: PropTypes.string
};

Header.defaultProps = {
  position: "static"
};

export default Header;
