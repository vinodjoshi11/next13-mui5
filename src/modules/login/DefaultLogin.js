import React, { forwardRef, useEffect,useRef, useImperativeHandle, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Typography, Checkbox, Button, FormControlLabel,
  Box,InputAdornment
} from "@mui/material";  
import CssTextField from "app/components/Elements/Inputs/CssTextField"; 
import { useDefaultLoginStyles } from "./style"; 
import { heapTrack } from "app/utils/heap";
import LayoutPrimary from "app/components/Layouts/LayoutPrimary";
import CardFormLayout from "app/components/Layouts/CardFormLayout/index";
const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(4, "Password should be of minimum 4 characters length")
    .required("Password is required")
});
const initialValues = {
  email: "",
  password: ""
};
export const DefaultLogin = forwardRef((props, ref) => {
  const { isLoading, loginErrorMessage, setLoginErrorMessage, login, cancel } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const classes = useDefaultLoginStyles(props); 
  const [formValue, setFormValue] = React.useState(initialValues);
  const userCodeInputRef = useRef(null);  
  const formik = useFormik({
    initialValues: formValue,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => { 
      login(values); 
    }
  }); 

  useImperativeHandle(ref, () => ({
    async clearUserCode() {
      formik.setFieldValue("userCode", "");
      userCodeInputRef.current.focus();
    },
    async clearLoginCreds() {
      cancelVerificationCodeFlow();
    }
  })); 

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    const name = localStorage.getItem("userNameEmail");
    if (name) {
      setRememberMe(true);
      formik.setFieldValue("email", name);
    }
  }, []);
  

  const cancelVerificationCodeFlow = () => {
    formik.resetForm({values:{
      email: "",
      password: "",
      userCode: ""
    }});
    cancel();
  };

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <LayoutPrimary hideExtraSpace={true} headerType="onlyLogoHeader">
        <CardFormLayout hideAvatar titleAlign={"left"} title="Login" subtitle="Please login to your account"
          beforeHeading={
            (loginErrorMessage && <div className={classes.topError}>
              <img src="/images/newIcon/error-icon.svg" alt={""}/> {loginErrorMessage}
            </div>)
          }>
          <Box  ref={formik}
            component={"form"}
            onSubmit={formik.handleSubmit}
            className={classes.formWrapper}
          >
            <Box p={4} className={classes.loginForm}>
              <Box my={4}>
                <Typography className={classes.formLabel}>
                  Email *
                </Typography>
                <CssTextField
                  name="email"
                  inputProps={{
                    "data-cy": "email"
                  }}
                  value={formik.values.email}
                  onChange={formik.handleChange} 
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant={"outlined"}
                  autoFocus
                  className={classes.inputText}
                  type="email"
                  placeholder={"Enter email"}
                  disabled={isLoading}
                  fullWidth
                />
              </Box>
              <Box my={4}>
                <Typography className={classes.formLabel}>
                  Password *
                </Typography>
                <CssTextField
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onKeyDown={() => {
                    setLoginErrorMessage(false); 
                  }}
                  error={
                    (formik.touched.password &&
                      Boolean(formik.errors.password))

                  }
                  helperText={
                    (formik.touched.password && formik.errors.password)
                  }
                  className={classes.inputText}
                  placeholder={"Enter password"}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  variant={"outlined"}
                  fullWidth
                  disabled={isLoading}
                  inputProps={{
                    "data-cy": "password"
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <span
                          className={`${classes.passIcon}`}
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                         
                        >
                          {showPassword ?
                            <span
                              className={`${classes.faEyeSlash}`}
                             
                            ></span>
                            :
                            <span
                              className={`${classes.faEye}`}
                             
                            ></span>
                          }
                        </span>
                      </InputAdornment>
                    )
                  }}
                />
              </Box>
              <Box>
                <Box className={classes.flexBox}>
                  <Box mt={0} display="flex">
                    <FormControlLabel
                      className={classes.formControlLabel}
                      control={<Checkbox color="primary" checked={rememberMe} onChange={(e) => setRememberMe(!rememberMe)} name="rememberMe" />}
                      label={<Typography className={classes.checkboxLabel}>Remember me</Typography>}
                    />
                  </Box>
                  <Box mt={4} style={{ cursor: "pointer", marginTop: "5px" }}>
                    <Link href={"/forgot-password"} color={"primary"} className={`${classes.forgetPasswordTxt} ${classes.forgot}`} >
                      <span data-cy="forgot-password">
                        Forgot Password?
                      </span>
                    </Link>
                  </Box>
                </Box>
              </Box> 
              <Box className={classes.loginBottom}>
                <Button type={"submit"} disabled={isLoading}
                  className={`${(isLoading) && classes.loginButtonDisabled || ""} ${classes.loginButton}`} fullWidth
                  disableElevation onClick={() => heapTrack("Login")}
                  variant={"contained"}
                  data-cy="login">
                  Login
                </Button> 
              </Box>
            </Box>
          </Box>
        </CardFormLayout>
      </LayoutPrimary>
    </div>
  );
});
