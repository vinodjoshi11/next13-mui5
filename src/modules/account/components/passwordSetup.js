/* eslint-disable react/no-unknown-property */
import React from "react";
import { 
  Button,
  Typography,
  InputAdornment
} from "@material-ui/core";
import { useFormik } from "formik";
import * as yup from "yup";
import { setupPassword } from "../services/account.service";
import { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import { get } from "lodash"; 
import CssTextField from "app/components/ElementsV2/Inputs/CssTextField"; 
import { useSetupPasswordStyles } from "./style";
import { Toast } from "app/services/toast.service";
  
const validationSchema = yup.object({ 
  newPassword: yup
    .string("Enter your password")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
  confirmPassword: yup
    .string("Enter your password")
    .oneOf([yup.ref("newPassword"), null], "Passwords must match")
    .min(8, "Password should be of minimum 8 characters length")
    .matches(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})",
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required")
});

const PasswordSetupForm = (props) => {
  const [isLoading, setLoading] = React.useState(false);
  const [isSetup, setIsSetup] = React.useState(false);
  const [showNewPassword, setShowNewPassword] = React.useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const { afterSuccess ,isResetPassword} = props;
  const classes = useSetupPasswordStyles(props);
  const router = useRouter();

  const email = get(router.query, "email", null);
  const temporaryPassword = get(router.query, "tp", null);
  
  const formik = useFormik({
    initialValues: { 
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setLoading(true);
      NProgress.start();
      try {
        await setupPassword(
          email,
          temporaryPassword,
          get(values, "newPassword", "")
        ); 
        Toast.info("Password setup successfully");
        setIsSetup(true);
        afterSuccess(true);
        setLoading(false);
        NProgress.done();

      } catch (error) {
        const response = get(error, "response", null);
        const message=response?.data?.error;
        if (message) { 
          Toast.info(message); 
        }
        setLoading(false);
        NProgress.done();
      }
    }
  });   
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <form className={classes.passwordForm} onSubmit={formik.handleSubmit}>
        <div className={classes.inputText}>
          <Typography variant="h6" className={classes.formLebel}>
            Email
          </Typography>
          <Typography variant="p" className={classes.dissbleEmail}>
            {email}
          </Typography>
        </div> 

        <div className={classes.inputText}>
          <Typography variant="h6" className={classes.formLebel}>
            New Password *
          </Typography>
          <CssTextField
            className={classes.floatInputText}
            variant={"outlined"}
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
            onCut={(e) => {
              e.preventDefault();
              return false;
            }}
            value={formik.values.newPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.newPassword && Boolean(formik.errors.newPassword)
            }
            helperText={formik.touched.newPassword && formik.errors.newPassword}
            placeholder={(isResetPassword && "Enter new password") || "Create password"}
            name="newPassword"
            type={((showNewPassword) && "text") || "password"}
            fullWidth
            disabled={isLoading || isSetup}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span 
                    className={`${classes.passIcon}`}
                    aria-label="toggle password visibility"
                    onClick={()=>setShowNewPassword(!showNewPassword)}
                    onMouseDown={handleMouseDownPassword} 
                  >
                    {showNewPassword ?
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
        </div>

        <div className={classes.inputText}>
          <Typography variant="h6" className={classes.formLebel}>
            Confirm Password *
          </Typography>
          <CssTextField
            className={classes.floatInputText}
            variant={"outlined"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onCopy={(e) => {
              e.preventDefault();
              return false;
            }}
            onCut={(e) => {
              e.preventDefault();
              return false;
            }}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
            placeholder={(isResetPassword && "Re-enter new password") || "Re-enter password"}
            name="confirmPassword"
            type={(showConfirmPassword && "text") || "password"}
            fullWidth
            disabled={isLoading || isSetup}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <span 
                    className={`${classes.passIcon}`}
                    aria-label="toggle password visibility"
                    onClick={()=>setShowConfirmPassword(!showConfirmPassword)}
                    onMouseDown={handleMouseDownPassword}
                   
                  >
                    {showConfirmPassword ?
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
        </div>

        <Button
          type={"submit"}
          disabled={isLoading || isSetup}
          className={classes.saveBtn}
          fullWidth
        >
          Save
        </Button>
      </form>
    </React.Fragment>
  );
};

export default PasswordSetupForm;
