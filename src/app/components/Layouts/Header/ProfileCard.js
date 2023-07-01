import React, { useEffect, useState } from "react"; 
import Image from "next/image";
import {Menu,Card, CardHeader, Avatar, Typography} from "@mui/material"; 
import { withStyles, makeStyles } from "@mui/styles"; 
import { useRouter } from "next/router";
import { LOGOUT } from "../../../services/auth.service";
import { STORAGE } from "app/services/localStorage.service";
import DialogPrimary from "app/components/Elements/Dialog/Infor"; 
import { decodeAuthToken } from "app/utils/decodeToken";
import { useDispatch } from "react-redux";
import { initConfig } from "redux/actions/config.actions";

const useStyles = makeStyles((theme) => ({
  badge: {
    cursor: "pointer",
    "& > .MuiBadge-badge": {
      backgroundColor: theme.palette.secondary.main,
      minWidth: "16px",
      height: "16px",
      fontSize: "9px",
      right: "10px",
      top: "10px"
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
  customerName: {
    color: theme.palette.secondary.main
  },
  profileSection: {
    textAlign: "center",
    marginLeft: "30px",
    cursor: "pointer",
    "& img": {
      marginLeft: "0",
      marginTop: "0px",
      width: "20px",
      height: "20px"
    },
    "& p": {
      color: "#424242",
      fontSize: "13px",
      fontWeight: "500",
      fontFamily: "'Roboto', sans-serif",
      marginTop: "5px"
    }
  },
  logoutButton: {
    border: "none",
    borderTop: "#EEEEEE solid 1px",
    background: "#fff",
    width: "100%",
    textAlign: "left",
    height: "47px",
    color: "#212121",
    fontFamily: "'Roboto', sans-serif",
    fontSize: "14px",
    lineHeight: "17px",
    fontWeight: "500",
    padding: "0 20px",
    cursor: "pointer",
    display:"flex",
    alignItems: "center",
    "& img": {
      margin: "0",
      marginRight: "16px",
      width: "18px"
    }
  },
  avatar: {
    width: "42px",
    height: "42px",
    backgroundColor: theme.palette.primary.dark
  }
}));

const StyledMenu = withStyles({
  paper: {
    backgroundColor: "#FFFFFF",
    border: "1px solid #E0E0E0",
    boxShadow: "0 12px 12px 0 rgba(0, 0, 0, 0.16);",
    width: "340px",
    "& .MuiCard-root": {
      boxShadow: "none",
      background: "#fff"
    },
    "& .MuiCardHeader-root": {
      padding: "30px 20px"
    },
    "& .MuiCardHeader-title": {
      color: "#212121",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "20px",
      lineHeight: "24px",
      fontWeight: "500",
      textAlign: "left",
      marginBottom: "5px"
    },
    "& .MuiCardHeader-subheader": {
      color: "#757575",
      fontFamily: "'Roboto', sans-serif",
      fontSize: "14px",
      lineHeight: "17px",
      fontWeight: "400",
      textAlign: "left"
    },
    "& .MuiMenu-list": {
      padding: "0"
    }
  }
})((props) => (
  <Menu
    elevation={0}
    // getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right"
    }}
    disableScrollLock={true}
    {...props}
  />
));

export default function SimpleMenu() {
  const router = useRouter(); 
  const dispatch=useDispatch();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setUser] = useState({ name: "", email: "", firstLatter: "" });
  const [openLogoutPopup, setOpenLogoutPopup] = useState(false);
  useEffect(() => {
    const name = decodeAuthToken("name");
    const email = decodeAuthToken("email");
    const firstLatter = ((name && name.length > 0) && name.split("")[0] || "");
    setUser({ name, email, firstLatter: firstLatter });
  }, []);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = async () => {
    try {
      const response = await LOGOUT();
      setOpenLogoutPopup(false);
      if (response && response.data) {
        dispatch(initConfig({color:"#5048c5"}));
        STORAGE.set("token", ""); 
        router.push("/login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onLogoutClick = () => {
    setOpenLogoutPopup(true);
  };

  return (
    <div>
      <div className={classes.profileSection} onClick={handleClick}>
        <Image
          alt=""
          className={classes.icon}
          src={"/images/user-icon.svg"}
          width={"20"} height={"20"}
        />
        <Typography>Profile</Typography>
      </div>
      <StyledMenu
        id="profile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Card className={classes.root}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" color={"primary"} className={classes.avatar}>
                {user.firstLatter}
              </Avatar>
            }
            title={user.name}
            subheader={user.email}
          />
          <button className={classes.logoutButton} onClick={onLogoutClick}>
            <Image
              alt=""
              className={classes.icon}
              width={"20"} height={"20"}
              src={"/images/logout-icon.svg"}
            />
            Logout
          </button>
        </Card>
      </StyledMenu>
      {openLogoutPopup && <DialogPrimary
        headingAfterIcon="Logout"
        open={openLogoutPopup}
        message={"Are you sure you want to logout?"}
        close={() => setOpenLogoutPopup(false)}
        cancel={() => setOpenLogoutPopup(false)}
        cancelBtnText="NO"
        confirm={() => logout()}
        icon={"/images/logouticon.svg"}
        confirmBtnText="YES"
      />}
    </div>
  );
}