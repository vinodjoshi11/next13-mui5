import { makeStyles } from "@mui/styles";
export const useSidebarStyles = makeStyles((theme) => ({
  main: {
    paddingTop: "1rem"
  },
  dashboardIcon: {
    height: "20px",
    minWidth: "36px"
  },
  sideNavWrapper: {
    height: "calc(100vh - 86px)",
    padding: "0",
    overflowY: "auto",
    margin: 0,
    listStyle: "none",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderBottomRightRadius: "0",
    scrollbarWidth: "none", 
    "&::-webkit-scrollbar": {
      width: "0.4em"
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: theme.palette.primary.lighterPurple
    },
    "& > .MuiListItem-root": {
      height: "55px",
      paddingLeft: "24px",
      marginBottom: "5px",
      backgroundColor: theme.palette.background.lighterPurple,
      cursor: "pointer"
    },
    "& > .MuiListItem-root:hover": {
      backgroundColor: theme.palette.background.primary,
      color: theme.palette.primary.dark,
      fontWeight: "bold"
    },
    "& > .Mui-selected": {
      backgroundColor: theme.palette.background.lighterPurple,
      color: `${theme.palette.primary.dark}!important`,
      fontWeight: "500"
    }
  },

  sideNavSelected: {
    "& > .MuiListItem-root": {
      height: "55px",
      paddingLeft: "24px",
      marginBottom: "5px",
      backgroundColor: theme.palette.background.lighterPurple,
      cursor: "pointer",
      fontSize: "1.1rem",
      fontFamily: "'Roboto', sans-serif",
      fontWeight: "500",
      lineHeight: "1.6"
    },
    "& > .MuiListItem-root:hover": {
      backgroundColor: theme.palette.background.primary,
      color:`${theme.palette.primary.dark}!important`,
      fontWeight: "bold"
    },
    "& > .Mui-selected": {
      pointerEvents: "none",
      borderLeft:`4px solid ${theme.palette.primary.dark}`,
      backgroundColor: theme.palette.background.lighterPurple,
      color:`${theme.palette.primary.dark}!important`,
      borderRight: "none",
      fontWeight: "500"
    },
    "& > .Mui-selected::before": {
      left: "220px",
      position: "fixed",
      content: "\"\"",
      border:`solid ${theme.palette.primary.dark}`,
      borderWidth: "28px 19px",
      clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)",
      zIndex: "-1"
    },
    "& > .Mui-selected::after": {
      left: "218px",
      position: "fixed",
      content: "\"\"",
      border: `solid ${theme.palette.background.lighterPurple}`,
      borderWidth: "28px 19px",
      clipPath: "polygon(50% 0,100% 50%,50% 100%,0 50%)",
      zIndex: "-1"
    }
  },

  sideNavSelectedClose: {
    "& > .MuiListItem-root": {
      height: "55px",
      paddingLeft: "24px",
      marginBottom: "5px",
      backgroundColor: theme.palette.background.lighterPurple,
      cursor: "pointer"
    },
    "& > .MuiListItem-root:hover": {
      backgroundColor: theme.palette.background.primary,
      color:`${theme.palette.primary.dark}!important`
    },
    "& > .Mui-selected": {
      backgroundColor: theme.palette.background.nav,
      color:theme.palette.primary.dark,
      fontWeight: "500"
    }
  },

  subLinksList: {
    "& > .MuiListItem-root": {
      height: "48px",
      marginBottom: "0px",
      cursor: "pointer",
      paddingLeft: "0",
      paddingRight: "30px",
      color: "#212121 !important"
    },
    "& > .MuiListItem-root:hover": {
      backgroundColor: "#fff",
      transition: "padding 300ms",
      padding: "0 1.5rem 0 0",
      color:({primary})=> `${primary}!important`,
      fontWeight: "400"
    },
    "& > .Mui-selected": {
      backgroundColor: "#fff",
      color: `${theme.palette.primary.dark}!important`,
      fontWeight: "500",
      "&:hover": {
        fontWeight: "500"
      },
      "& span": {
        display: "block !important"
      }
    }
  },

  subLinks: {
    "& > .MuiListItem-root": {
      height: "48px",
      marginBottom: "0px",
      cursor: "pointer",
      background: "none",
      paddingLeft: "35px",
      paddingRight: "20px"
    },
    "& > .MuiListItem-root:hover": {
      color:`${theme.palette.primary.dark}!important`
    },
    "& > .Mui-selected": {
      cursor: "pointer",
      borderLeft: "none",
      background: "none!important",
      color: `${theme.palette.primary.dark}!important`,
      fontWeight: "500",
      borderRight: "none"
    }
    // "& > .Mui-selected::after": {
    //   left: "225px",
    //   position: "fixed",
    //   content: '""',
    //   display: "block",
    //   border: `solid ${theme.palette.common.pink}`,
    //   background: "#FFFFFF",
    //   borderWidth: "0 2px 2px 0",
    //   padding: "13px",
    //   transform: "rotate(-45deg)",
    //   zIndex: "-1"
    // }
  },
  selected: {
    "& .MuiListItem-root": {
      height: "56px",
      paddingLeft: "30px",
      paddingRight: "20px",
      marginBottom: "0px",
      cursor: "pointer",
      fontSize: "14PX",
      fontFamily: "'Roboto', sans-serif",
      color: "#212121 !important",
      fontWeight: "500",
      lineHeight: "1.6"
    },
    "& .MuiListItem-root:hover": {
      backgroundColor: "#fff",
      color:theme.palette.primary.dark,
      fontWeight: "500",
      "&::before": {
        left: "0",
        top: "0",
        width: "4px",
        height: "100%",
        position: "absolute",
        content: "\"\"",
        background: theme.palette.primary.dark
      }
    },
    "& .Mui-selected": {
      backgroundColor: "#fff",
      color: `${theme.palette.primary.dark}!important`,
      fontWeight: "500",
      //borderLeft: `4px solid ${theme.palette.common.pink}`,
      "&::before": {
        left: "0",
        top: "0",
        width: "4px",
        height: "100%",
        position: "absolute",
        content: "\"\"",
        background: theme.palette.primary.dark
      }
    }
  },
  TitleSelectedClose: {
    "& > .MuiListItem-root": {
      height: "55px",
      paddingLeft: "30px",
      marginBottom: "0",
      backgroundColor: theme.palette.background.lighterPurple,
      cursor: "pointer",
      "& svg": {
        display: "block"
      }
    },
    "& > .MuiListItem-root:hover": {
      backgroundColor: "#fff",
      color: `${theme.palette.primary.dark}!important`,
      "&::before": {
        left: "0",
        top: "0",
        width: "4px",
        height: "100%",
        position: "absolute",
        content: "\"\"",
        background: theme.palette.primary.dark
      },
      "& .tooltipMenu": {
        display: "block",
        position: "absolute",
        left: "80px",
        width: "200px",
        background: "#fff",
        zIndex: "1",
        boxShadow: "2px 2px 5px rgb(0 0 0 / 8%)",
        top: "0",
        height: "48px",
        fontSize: "14px",
        fontFamily: "'Roboto', sans-serif",
        lineHeight: "1.5",
        paddingLeft: "0",
        color: "#212121",
        "& span": {
          paddingLeft: "1.9rem",
          lineHeight: "48px", display: "block"
        },
        "&:hover": { 
          color: theme.palette.primary.dark
        }
      }
    },
    "& > .Mui-selected": {
      backgroundColor: "#fff",
      color: theme.palette.primary.dark,
      fontWeight: "500",
      "&::before": {
        left: "0",
        top: "0",
        width: "4px",
        height: "100%",
        position: "absolute",
        content: "\"\"",
        background:theme.palette.primary.dark
      }
    },
    "& .openDropDown": {
      display: "none",
      "& + svg": {
        display: "none !important"
      }
    },
    "& .tooltipMenu": {
      display: "none"
    }
  },
  tableSection: {
    padding: "0.8rem",
    border: "1px solid #0000000F",
    "& > .MuiGrid-item": {
      marginBottom: "1.625rem"
    }
  },
  listItem: {
    paddingLeft: "1.9rem",
    fontSize: "14px",
    fontFamily: "'Roboto', sans-serif",
    lineHeight: 1.5,
    letterSpacing: "normal"
  },
  listIcon: {
    height: "20px",
    minWidth: "36px"
  },
  tableSectionHeader: {
    display: "flex",
    justifyContent: "space-between"
  },
  searchIcon: {
    height: "fit-content",
    width: "fit-content",
    borderLeft: "1px solid #0000000F"
  },
  sideNavCollaspe: {
    paddingTop: "86px !important",
    overflow: "visible",
    position:"fixed",
    "& .Mui-selected": {
      "& span": {
        display: "none"
      }
    }
  }
}));
