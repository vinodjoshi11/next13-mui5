import React from "react";
import {
  Button,
  Typography, 
  Grid
} from "@mui/material"; 
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import * as yup from "yup";
import { forgotPassword } from "../services/account.service"; 
import NProgress from "nprogress";
import { get } from "lodash";
import CssTextField from "app/components/Elements/Inputs/CssTextField";
import { Toast } from "app/services/toast.service";

const useStyles = makeStyles((theme) => ({
  fieldIcon:{
    width: "24px",
    height: "24px",
    backgroundSize: "100% 100%",
    position: "absolute",
    top: "50%",
    right: "10px",
    transform: "translateY(-50%)"
  },
  emailIcon:{
    backgroundImage: "url(/images/email_login.svg)"
  },
  passwordForm: {
    padding: "26px 3rem 1rem",
    "& input":{
      paddingRight:"40px"
    },
    "@media (max-width:767px)":{
      padding: "1rem 1rem"
    },
    "& > div":{
      position:"relative"
    }
  },
  inputText: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  logoSection: {
    marginTop: "1rem",
    marginBottom: "1rem"
  },
  logo: {
    marginTop: "1rem",
    marginBottom: "3rem"
  },
  logoSectionText: {
    fontSize: 15
  },
  submitBtnContainer: {
    marginTop: "30px",
    marginBottom: "1rem",

    "& span":{
      padding: "6px 0 5px 0px",
      fontSize: "14px",
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "bold",
      textTransform: "uppercase",
      lineHeight: "20px"
    }
  },
  floatInputText: {
    "& input": {
      padding: "15px 12px 15px",
      height:"48px",
      boxSizing: "border-box",
      color: theme.palette.common.darkShadeGray,
      fontFamily: "'Roboto', sans-serif",
      fontSize: "14px",
      lineHeight: "17px"
    },
    "& input::placeholder": {
      color: theme.palette.common.darkGrey,
      opacity: 1,
      fontSize: "14px",
      fontFamily: "'Roboto', sans-serif"
    },
    "& .MuiFilledInput-root::before": {
      borderRadius: "2px !important",
      border: "1px solid #BDBDBD",
      outline: "0",
      height:"48px",
      bottom:"0"
    },
    "& .MuiFilledInput-root::after": {
      borderRadius: "0 !important"
    },
    "& .MuiFilledInput-underline:after": {
      bottom:"0"
    },
    "& .MuiFilledInput-underline.Mui-focused:before": {
      bottom:"0"
    },
    "& .MuiFilledInput-underline.Mui-focused:after": {
      bottom:"0"
    }
  },
  formLebel:{
    color: theme.palette.common.shadeGray,
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    marginBottom:"10px",
    fontWeight:"500"
  },
  resetPassword:{
    backgroundColor: theme.palette.button.lightPink,
    color: theme.palette.common.white,
    height:"48px",
    width:"auto",
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700",
    paddingRight:"24px",
    paddingLeft:"24px",
    "& .MuiButton-label": {
      textTransform: "uppercase", 
      color: theme.palette.common.white
    },
    "&:hover":{
      background:`${theme.palette.primary.dark}!important`
    }
  }
}));

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is Required")
});

const ForgotPasswordForm = (props) => {
  const [isLoading, setLoading] = React.useState(false);
  const classes = useStyles(props); 

  const formik = useFormik({
    initialValues: {
      email: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setErrors }) => {
      setLoading(true);
      NProgress.start();
      try {Toast.dismiss();
        await forgotPassword(values.email); 
        Toast.info(`An email has been sent to you to ${values.email}.  Please follow the instructions to reset your password.`);
        setLoading(false);
        NProgress.done();
      } catch (error) {
        const response = get(error, "response", null);
        if (response) {
          setErrors({
            email: response.data.error
          });
        }
        setLoading(false);
        NProgress.done();
      }
    }
  });

  return (
    <>
      <form className={classes.passwordForm} onSubmit={formik.handleSubmit}>
        <div>
          <Typography className={classes.formLebel}>
            Email *
          </Typography>
          <CssTextField
            // label="Email"
            autoFocus={true}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              formik.touched.email &&
              Boolean(formik.errors.email)
            }
            helperText={
              formik.touched.email && formik.errors.email
            }
            className={classes.floatInputText}
            placeholder="Enter email"
            name="email"
            type="email" variant={"outlined"}
            autoComplete="off"
            fullWidth
            disabled={isLoading}
          /> 
        </div> 
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          className={classes.submitBtnContainer}
        >
          <Button
            type={"submit"}
            disabled={isLoading}
            className={classes.resetPassword}
            fullWidth
          >
            Reset Password
          </Button>
        </Grid>
      </form>
    </>
  );
};

export default ForgotPasswordForm;
