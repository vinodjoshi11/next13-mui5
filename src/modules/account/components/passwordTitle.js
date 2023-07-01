
import React from "react";
import {
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  title: {
    textAlign: "center",
    marginTop: "2rem",
    fontWeight: "bold"
  }
}));

const PasswordFormTitle = (props) => {
  const classes = useStyles(props);
  return (
    <Typography
      className={classes.title}
      variant="h3"
      component="h3"
    >
      {props.title}
    </Typography>
  );
};

export default PasswordFormTitle;