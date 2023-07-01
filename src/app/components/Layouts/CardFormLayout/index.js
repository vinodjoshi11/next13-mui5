import React from "react";
import { makeStyles } from "@mui/styles"; 
import {
  Avatar,
  Typography,
  Grid 
} from "@mui/material"; 
const useStyles = makeStyles((theme) => ({
  loginBox: {
    width: "530px",
    borderRadius: "6px",
    backgroundColor: theme.palette.common.white,
    margin: "104px 0 2rem 0",
    position: "relative",
    zIndex: "1",
    borderWidth:"1px",
    borderStyle:"solid",
    borderColor:"#eee"
  },
  wrapper: {
    backgroundColor:"#f5f5f5",
    minHeight: "100vh",
    position: "relative"
  },
  title: {
    padding: "0.5rem 0rem",
    fontSize: "24px",
    lineHeight: "29px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "bold",
    color:theme.palette.common.darkShadeGray
  },
  subtitle: {
    fontSize: "14px",
    color: theme.palette.common.darkGrey,
    fontFamily: "'Roboto', sans-serif",
    fontWeight:"400",
    lineHeight: "21px"
  },
  logo: {
    marginTop: "1rem"
  },
  header: {
    padding: "0rem 40px",
    "@media (max-width:767px)":{
      padding: "0rem 1rem"
    }
  },
  titleTxt: {
    width: "100%", 
    marginBottom: "0",
    lineHeight: "3rem"
  },
  detailText: {
    fontSize: 15,
    paddingLeft: "5rem",
    paddingRight: "5rem",
    textAlign: "center",
    marginTop: "3rem",
    marginBottom: "1rem"
  }
}));

const CardFormLayout = (props) => {   
  const {titleAlign="center"}=props;
  const classes = useStyles();  
  return (
    <Grid
      container
      className={classes.wrapper}
      justifyContent="center"
      alignItems="flex-start"
    >
      <Grid className={classes.loginBox}>
        <Grid className={classes.logo}>
          <Grid
            container
            direction="column"
            justifyContent="left"
            alignItems="center"
            className={classes.header}
          >
            {props.beforeHeading || ""}
            {props.avatarFromParent && <Grid>
              <Avatar
                style={{ width: "56px", height: "56px" }}
                src={props.avatarFromParent}
                variant={"circle"}
                sizes={"large"}
                className={classes.logo} />
            </Grid>}
            {props.title && (<Grid className={classes.titleTxt} style={{textAlign:titleAlign}}>
              <Typography
                variant={"h3"}
                className={classes.title}
                display={"block"}
                color={"textPrimary"}
              >
                {props.title}
              </Typography>
              {props.subtitle && (
                <Typography
                  variant={"h3"}
                  className={classes.subtitle}
                  display={"block"}
                >
                  {props.subtitle}
                </Typography>
              )}
            </Grid>)
            }
            <Grid>
              {props.hideAvatar ? (
                <></>
              ) : (
                <Avatar
                  style={{ width: "56px", height: "56px" }}
                  src={"/images/logo.svg"}
                  variant={"circle"}
                  sizes={"large"}
                  className={classes.logo}
                />
              )}
            </Grid>

            {props.detail && <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                variant={"p"}
                className={classes.detailText}
                display={"inline"}
                color={"textPrimary"}
              >
                {props.detail}
              </Typography>
            </Grid>}
          </Grid>
        </Grid>
        <Grid>
          {props.children}
        </Grid>
      </Grid>
    </Grid >
  );
};

export default React.memo(CardFormLayout);