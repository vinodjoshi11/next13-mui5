
import React from "react";
import {
  Typography,
  makeStyles
} from "@material-ui/core";
import { useRouter } from "next/router";
import Container from "@material-ui/core/Container";
const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    marginTop: "2rem",
    paddingTop:"0.6rem",
    fontWeight: "bold"
  },
  content: {
    textAlign: "center",
    marginTop: "0.5rem",
    fontSize: "1rem"
  },
  link: {
    color: theme.palette.blue.main,
    fontWeight: "bold",
    marginLeft: "0.3rem",
    marginRight: "0.3rem",
    cursor: "pointer",
    Bottom: "5px"
  },
  container:{
    backgroundColor: theme.palette.green.main,
    padding: "0rem 0.1rem 0.8rem",
    width:"90%"
  }
}));

const PasswordSuccess = (props) => {
  const classes = useStyles(props);

  const router = useRouter();

  const goToLogin = () => {
    router.push("/login");
  };

  return (
    <React.Fragment color="primary">
      <Container  className={classes.container}>
        <Typography
          className={classes.title}
          variant="h3"
          component="h3"
        >
                Password Setup Successful
        </Typography>
        <Typography
          className={classes.content}
          variant="p"
          component="p"
        >
                Please click
          <Typography
            className={classes.link}
            variant="span"
            component="span"
            onClick={() => goToLogin()}
          >
            here
          </Typography>
          to login
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default PasswordSuccess;