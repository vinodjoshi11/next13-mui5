/* eslint-disable @next/next/no-img-element */
import {Button,Box, Grid,Dialog,DialogTitle,CircularProgress,DialogContent, Typography,DialogActions} from "@mui/material"; 
import { withStyles, makeStyles } from "@mui/styles";   
import CloseIcon from "@mui/icons-material/Close"; 

const styles = () => ({
  root: {
    margin: 0,
    display: "flex",
    height: "60px",
    background: "#fff", 
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative"
  },
  boxShadow:{
    boxShadow: "0 1px 0 0 rgba(0, 0, 0, 0.06)"},
  title: {
    color: "#212121",
    textAlign: "center",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: "500"
  },
  closeButton: {
    color: "#212121",
    width: "34px",
    height: "34px",
    border: "none",
    cursor: "pointer"
  },
  headerbg: {
    background: "#FAFAFA"
  }
});
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.white,
    justifyContent: "center",
    maxWidth: "480px"
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "1.4rem",
    height: "3rem",
    lineHeight: "3rem",
    borderBottom: `1px solid ${theme.palette.common.brightPurple}`
  },
  cancelBtn: {
    marginRight: "1rem",
    backgroundColor: theme.palette.common.white
  },
  saveBtn: {
    marginLeft: "1rem",
    backgroundColor: theme.palette.button.bright
  },
  checkBox: {
    color: theme.palette.primary.main
  },
  contentSection: {
    justifyContent: "center",
    margin: "1rem 0"
  },
  imageSection: {
    paddingLeft: "50%",
    paddingRight: "50%",
    paddingTop: "5%",
    paddingBottom: "5%"
  },
  content: {
    fontWeight: "900",
    marginBottom: "15%"
  },
  successIcon:{
    margin:"0.4rem auto 1rem auto!important"
  },
  check: {
    display: "block",
    margin: "1rem auto 1rem auto",
    color: theme.palette.button.bright
  },
  btn: {
    width: "100%",
    backgroundColor: theme.palette.button.bright,
    display: "block",
    color: theme.palette.common.white,
    margin: "2rem auto 2rem auto"
  },
  msgText: {
    fontSize: "16px",
    color: "#424242",
    lineHeight: "25px",
    fontWeight: "400",
    fontFamily: "'Roboto', sans-serif",
    textAlign:"center"
  },
  closeDialog: {
    margin: "0 -20px",
    textAlign:"right",
    cursor:"pointer"
  },
  closeImage: {
    height: "1rem",
    width: "1rem",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    margin: "auto"
  },
  btnContainer: {
    marginTop: "30px",
    marginBottom: "1.2rem",
    textAlign: "center"
  },
  noBtn: {
    width: "130px",
    height: "48px",
    color: ({ primary }) => primary,
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: "700",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    border: ({ primary }) => `2px solid ${primary}`,
    borderRadius: "4px",
    "&:hover": {
      background: "#fff 0% 0% no-repeat padding-box",
      border: ({ primary }) => `2px solid ${primary}`
    },
    "& span": {
      textTransform: "uppercase"
    }
  },
  yesBtn: {
    width: "120px",
    height: "48px",
    color: "#FFFFFF",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: "700",
    marginLeft: "10px",
    background: ({ primary }) => primary,
    borderRadius: "4px",
    "&:hover": {
      background: ({ primary }) => primary
    },
    "&:disabled": {
      background: "#909090 0% 0% no-repeat padding-box",
      color: "#FFFFFF"
    },
    "& span": {
      textTransform: "uppercase"
    }
  },
  heading: {
    textAlign: "center",
    fontSize: "20px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700"
  }
}));

const MuiDialogContent = withStyles(() => ({
  dividers: {
    borderTop: "none"
  }
}))(DialogContent);

const MuiDialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: "20px 20px" 
  }
}))(DialogActions);
const  MuiDialogTitle= withStyles(styles)((props) => {
  const { classes, isHeaderBgColor, onClose, heading, isLogo, ...other } = props;
  return (
    <DialogTitle disableTypography className={`${classes.root} ${heading && classes.boxShadow} ${isHeaderBgColor && classes.headerbg}`} {...other}>
      {isLogo && <span><img width="140" alt="" src="/vercel.svg" /></span>}
      <span><Typography className={classes.title}>{heading}</Typography></span>
      {onClose ? (
        <CloseIcon
          aria-label="close"
          className={classes.closeButton}
          onClick={() => onClose()}
        />
      ) : null}
    </DialogTitle>
  );
});
function DialogPrimary(props) {
  const {
    cancel,
    confirm,
    open,
    cancelBtnText,
    confirmBtnText,
    title,
    content,
    message,
    close,
    type,
    loading,
    showInfoCheck = true,
    icon,
    isLogo=false,
    isHeaderBgColor=true,
    primaryColor,
    showSuccessCheck=false,
    showLogo=false,
    headingAfterIcon = ""
  } = props;
  const classes = useStyles({ primary: primaryColor });
  const handleClose = () => {
    close(false);
  };

  const onConfirm = () => {
    confirm();
  };

  const onCancel = () => {
    if (cancel) {
      cancel();
    }
  };

  return (
    <>
      <Dialog
        PaperProps={{ classes: { root: classes.root } }}
        disableBackdropClick
        disableEscapeKeyDown
        onClose={handleClose}
        fullWidth="sm"
        maxWidth="sm"
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <><MuiDialogTitle heading={title} isLogo={isLogo} onClose={handleClose} isHeaderBgColor={isHeaderBgColor} />
          <MuiDialogActions>
            <Box width={1}>
              {showInfoCheck && <img src={`${icon ? icon : "/images/newIcon/warning-icon.svg"}`} alt={""} className={classes.check} />}
              {showSuccessCheck &&
                <img src="/images/newIcon/success-icon.svg" className={`${classes.check} ${!title && classes.successIcon || ""}`} /> 
              } 
              {showLogo &&
                <img
                  src={
                    "/images/logo.svg"
                  }  className={classes.check} alt={"logo"}/>
              }
              {headingAfterIcon && <h2 className={classes.heading}>{headingAfterIcon}</h2>}
              {content &&
                <MuiDialogContent className={classes.msgText}>{content()}</MuiDialogContent>
              }
              {message && 
                <Typography
                  variant={"subtitle2"}
                  color={"textPrimary"}
                  align="center"
                  className={classes.msgText}
                >
                  {message}
                </Typography>
              }
              <Grid className={classes.btnContainer} container justifyContent="center" alignItems="center">
                {cancelBtnText &&
                <Grid item>
                  <Button variant="outlined" onClick={onCancel} color="primary" className={classes.noBtn}>{cancelBtnText}</Button>
                </Grid>
                }
                {confirmBtnText &&
                <Grid item>
                  <Button variant="contained" color="primary" onClick={onConfirm} className={classes.yesBtn} disabled={loading}>
                    {loading && (
                      <CircularProgress
                        size={16}
                        color="textPrimary"
                        style={{ marginRight: "8px" }}
                      />
                    )}
                    {confirmBtnText}
                  </Button>
                </Grid>
                }
              </Grid>
            </Box>
          </MuiDialogActions>
        </>
      </Dialog>
    </>
  );
}

export default DialogPrimary;
