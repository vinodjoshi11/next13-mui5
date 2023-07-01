/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import { Grid, Drawer, Box } from "@mui/material"; 
import { makeStyles } from "@mui/styles"; 
import clsx from "clsx";
import SideBar from "./SideBar";
import { useDispatch, useSelector } from "react-redux";
const drawerWidth = "260px";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  menuButton: {
    marginRight: "36px"
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    height: "50vh",
    "& .MuiList-padding": {
      paddingTop: "0px",
      paddingBottom: "0px"
    }
  },
  drawerOpen: {
    marginTop: "0",
    height: "auto",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    borderRadius: "0",
    border: "none",
    background: "#FAFAFA",
    "& .bigLogo": {
      display: "block"
    },
    "& .smallLogo": {
      display: "none"
    }
  },
  drawerClose: {
    marginTop: "0",
    height: "100%",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowY: "visible",
    width: "80px",
    [theme.breakpoints.up("sm")]: {
      width: "80px"
    },
    borderRadius: "0",
    border: "none",
    background: "#FAFAFA",
    position: "absolute",
    "& .bigLogo": {
      display: "none"
    },
    "& .smallLogo": {
      display: "block"
    },
    "& .sideNavWrapper": {
      overflow: "visible",
      height: "auto"
    },
    "& .MuiCollapse-entered": {
      position: "absolute",
      left: "80px",
      width: "200px",
      background: "#fff",
      zIndex: "1",
      boxShadow: "2px 2px 5px rgb(0 0 0 / 8%)",
      top: "0",
      transitionDuration: "0ms !important",
      transition: "height 0ms cubic-bezier(0, 0, 0, 0) 0ms !important"
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "right",
    justifyContent: "flex-end",
    padding: 0,
    margin: 0,
    height: "2rem",
    backgroundColor: theme.palette.background.lighterPurple,
    border: "1px solid #D9D9D9",
    borderBottom: "none",
    borderRight: "none",
    borderLeft: "none",
    borderTopRightRadius: "10px"
  },
  iconContainer: {
    position: "fixed",
    top: "96px",
    left: "222px",
    zIndex: 1202,
    radius: "2px",
    backgroundColor: theme.palette.common.white,
    border: `2px solid ${theme.palette.background.backgroundGrey}`,
    "&:hover": {
      backgroundColor: theme.palette.common.brightPurple
    },
    width: "2px",
    height: "2px",
    "&:hover $icon": {
      pointerEvents: "none",
      color: "white"
    }
  },
  iconContainerclose: {
    position: "fixed",
    top: "96px",
    left: "12px",
    zIndex: 1202,
    border: `0.2px solid ${theme.palette.background.backgroundGrey}`,
    "&:hover": {
      backgroundColor: theme.palette.common.brightPurple
    },
    width: "2px",
    height: "2px",
    "&:hover $icon": {
      pointerEvents: "none",
      color: "white"
    }
  },
  icon: {
    color: theme.palette.background.backgroundGrey,
    width: "22px",
    height: "22px"
  },
  logo: {
    height: "86px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
    paddingLeft: "30px"
  },
  logoCollaspe: {
    width: "80px",
    position: "fixed",
    top: "0",
    zIndex: "9",
    background: "#FAFAFA",
    left: "0",
    justifyContent: "center",
    padding: "0"
  }
}));

export default function LeftDrawer(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { collapse } = useSelector((state) => state);
  const { open = false } = collapse || {};
  const onSideNavClick = () => {
    dispatch({ type: "COLLAPSE_UPDATE", collapse: { open: true } });
    props.onDrawerClick(true);
  }; 
  const [logo, setLogo] = React.useState("images/logo.svg");
 
  return (
    <div className={classes.root}>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open
          })
        }}
      >
        <Box className={classes.logoWrapper}>
          <Grid item className={`${classes.logo} ${!open ? classes.logoCollaspe : ""}`}>
            <a className="smallLogo">
              <img width={"28"}
                alt=""
                src={"/images/logo.svg"}
                className={classes.logImg}
              />
            </a>
            <a className="bigLogo">
              <img width={"140"}
                alt=""
                src={logo || "/images/logo.svg"}
                onError={() => setLogo("/images/logo.svg")}
                className={classes.logImg}
              />
            </a> 
          </Grid> 
        </Box> 
        <SideBar
          router={props.router}
          onSideNavClick={onSideNavClick}
          open={open}
        />
      </Drawer>
    </div>
  );
}
