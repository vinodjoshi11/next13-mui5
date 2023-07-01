import React from "react";
import Image from "next/image";
import { Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "64px",
    backgroundColor: "#FFFFFF"
  },
  subRoot: {
    width: "100%",
    height: "64px",
    padding: "0 110px 0 30px",
    borderBottom: "rgba(0, 0, 0, 0.06) solid 1px",
    paddingTop: "14px",
    "@media (max-width:767px)": {
      paddingLeft:"20px",
      paddingRight:"20px"
    }
  },
  logo: {
    cursor: "pointer",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  logImg: {
    height: "30px",
    marginRight: "0.5rem"
  },
  title:{
    fontFamily: "Manrope",
    color: "#212121",
    fontSize:"24px",
    letterSpacing:"-2.33px",
    fontWeight:"600"
  }  
}));

export default function OnlyLogoHeader(props) {
  const classes = useStyles(props); 
  const {logoJustifyContent="space-between"}=props;

  return (
    <nav className={classes.root}>
      <div className={classes.subRoot}>
        <Grid container alignItems={"center"} justifyContent={logoJustifyContent}>
          <Grid item className={classes.logo}>
            <Image src={"/images/logo.svg"} height={30} width={30} className={classes.logImg} />
            <Typography variant={"h2"} display={"inline"} color={"textPrimary"} className={classes.title}>
                insurance
            </Typography>
          </Grid>                  
        </Grid>
      </div>
    </nav>
  );
}

OnlyLogoHeader.propTypes = {};

OnlyLogoHeader.defaultProps = {};
