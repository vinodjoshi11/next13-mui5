import React from "react";
import Image from "next/image";
import { makeStyles, Grid, Box } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    padding: "13px 0",
    maxWidth: "1150px",
    margin: "0 auto"
  },
  toolbar: {
    display: "flex"
  },
  clientLogo: {
    display: "flex",
    marginRight: "10px"
  },
  logo: {
    cursor: "pointer",
    paddingRight: "0rem",
    display: "flex",
    alignItems: "center"
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
  rightConfig: {
    display: "flex",
    color: "#424242",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "13px",
    lineHeight: "18px",
    "& p": {
      color: "#212121",
      marginBottom: "0",
      textAlign: "right",
      "&:first-child": {
        color: "#757575"
      }
    },
    "& span": {
      color: ({ primary }) => primary,
      fontWeight: "700"
    }
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
  }
}));

function ClientLogoHeader(props) {
  const { leadLandingPageLogo = "", color = "", phone = "", email = "" } = props || {};
  const primary = (color && color) || "#5048c5";
  const classes = useStyles({ primary: primary });
  return (
    <nav className={classes.root}>
      <Grid container alignItems={"center"} justifyContent="space-between" style={{flexWrap: "nowrap"}}>
        <Grid className={classes.toolbar}>
          {leadLandingPageLogo ? <a className={classes.clientLogo}>
            <Image 
              height={"55"}
              alt=""
              src={leadLandingPageLogo}
              className={classes.logImg}
            />
          </a>
            : <a className={classes.logo}>
              <Image width={"170"}
                alt=""
                src={"/images/logo.svg"}
                className={classes.logImg}
              />
            </a>}
        </Grid>
      </Grid>
    </nav>
  );
}
export default ClientLogoHeader; 