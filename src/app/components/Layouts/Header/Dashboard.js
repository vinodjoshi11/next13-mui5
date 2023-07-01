import React from "react";
import Image from "next/image";
import { Grid, Box, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles"; 
import ProfileCard from "./ProfileCard"; 
import { useDispatch, useSelector } from "react-redux"; 

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    padding: "21px 30px"
  },
  logoWrapper: {
    display: "flex",
    alignItems: "center"
  },
  loginButton: {
    marginRight: "2.375rem"
  },
  logo: {
    cursor: "pointer",
    paddingRight: "0rem",
    display: "flex",
    alignItems: "center"
  },
  logImg: {
    width: "44px",
    height: "44px",
    marginRight: "10px"
  },
  greetings: {
    height: "fit-content",
    "& h3": {
      fontWeight: 400
    }
  },
  badge: {
    cursor: "pointer",
    "& > .MuiBadge-badge": {
      minWidth: "16px",
      height: "16px",
      fontSize: "9px",
      right: "10px",
      top: "10px"
    }
  },
  actionButton: {
    display: "flex"
  },
  icon: {
    marginLeft: "10px",
    marginTop: "6px",
    width: "1.4rem",
    height: "1.4rem",
    align: "center",
    justifyContent: "center"
  },
  title: {
    fontFamily: "Montserrat",
    fontSize: "31px",
    letterSpacing: "-2.33px",
    fontWeight: "600"
  },
  menuIcon: {
    paddingLeft: "0",
    "&:hover": {
      background: "none"
    }
  },
  headerMenuIcon: {
    display: "flex"
  },
  selectPartner: {
    width: "206px",
    marginLeft: "38px"
  }
}));

export default function DashboardHeader(props) {
  const classes = useStyles(props); 
  const dispatch = useDispatch(); 
  const { collapse } = useSelector((state) => ({ 
    collapse: state.collapse
  })); 
  const handleDrawer = () => {
    if (!collapse.open) {
      dispatch({ type: "COLLAPSE_UPDATE", collapse: { open: true } });
    } else {
      dispatch({ type: "COLLAPSE_UPDATE", collapse: { open: false } });
    }
  };
 
  const renderIcon = () => {
    return <div className={classes.headerMenuIcon}>
      <IconButton
        onClick={handleDrawer}
        className={classes.menuIcon}
        id="icon"
      >
        <Image width={"20"} height={"20"}
          alt=""
          src={"/images/menu-icon.svg"}
        />
      </IconButton>
    </div>;
  };
 
  return (
    <nav className={classes.root}>
      <Grid container alignItems={"center"} justifyContent="space-between">
        <Grid className={classes.toolbar}>{renderIcon()}</Grid>
        <Grid item className={classes.greetings}>
        </Grid>
        <Grid item className={classes.actionButton}>
          <Box display={"flex"} flexDirection={"column"}>
            <Box display={"flex"}>
              <ProfileCard />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </nav>
  );
}

DashboardHeader.propTypes = {};

DashboardHeader.defaultProps = {};
