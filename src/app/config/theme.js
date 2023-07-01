const getTheme = (primary) => {
  return {
    palette: {
      mode: "light",
      button: {
        light: "#4b0082ab",
        main: "#4B0082",
        bright: "#872EC7",
        lightPurple: "#c6a1f8",
        lightPink: "#5048c5",
        darkerPink: "#932F99"
      },
      // secondary: {main: '#3D6FD0'},
      error: {
        light: "#e57373",
        main: "#F02850",
        dark: "#b63c3f",
        contrastText: "#fff"
      },
      text: {
        primary: "#333333",
        secondary: "#F2F5F7",
        disabled: "#A1AEB7",
        hint: "rgba(128, 128, 128, 1)",
        para: "#505D68"
      },
      links: {
        primary: "#4BA7E2"
      },
      primary: {
        light: primary,
        main: primary,
        dark: primary,
        contrastText: primary
      }
    },
    components: {
      MuiFormHelperText: {
        styleOverrides: {
          root: {
            color: "#d21e1e",
            fontWeight: "bold"
          },
          contained: {
            marginLeft: 0,
            marginRight: 0
          }
        }
      }, 
      MuiTypography: {
        styleOverrides: {
          colorPrimary: {
            color: `${primary} !important`
          },
          body1: {
            fontWeight: 500,
            fontSize: "1rem",
            letterSpacing: "0.01em"
          },
          body2: {
            fontWeight: 400,
            fontSize: 16,
            letterSpacing: "0.01em"
          },
          subtitle1: {
            fontWeight: 500,
            fontSize: 14,
            lineHeight: 1.4,
            letterSpacing: "0.01em",
            color: "#555555"
          },
          subtitle2: {
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: "0.01em"
          },
          caption: {
            fontWeight: 500,
            fontSize: 12,
            letterSpacing: "0.01em"
          },
          labelMicroRegular: {
            fontWeight: 400,
            fontSize: 12,
            letterSpacing: "0.01em"
          }
        }
      },
      MuiButton: {
        styleOverrides: {
          root: {
            padding: "0.5rem 1rem",
            lineHeight: "1.35",
            letterSpacing: "0.5px",
            fontSize: "1rem",
            fontWeight: "500"
          },
          label: {
            textTransform: "capitalize"
          },
          outlined: {
            padding: "0.5rem 1rem",
            backgroundColor: "white"
          },
          contained: {
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.16)"
          },
          outlinedPrimary: {
            background: "white",
            border: `1px solid ${primary}`,
            "&:active": {
              color: `${primary} !important`
            },
            "&:hover": {
              color: `${primary} !important`
            }
          },
          outlinedSecondary: {
            backgroundColor: "white",
            color: "#4F504F",
            border: "2px solid #872EC7",
            "&:active": {
              backgroundColor: "white !important",
              color: "#4F504F"
            },
            "&:hover": {
              borderWidth: "2px",
              backgroundColor: "#E2D6FD"
            }
          },
          containedPrimary: {
            paddingTop: 12,
            paddingBottom: 12,
            minWidth: 100,
            color: "#ffffff",
            backgroundColor: `${primary}`,
            borderColor: `${primary}`,
            "&:active": {
              backgroundColor: `${primary}!important`,
              borderColor: `${primary}`,
              color: "#ffffff"
            },
            "&:hover": {
              borderColor: `${primary}`,
              backgroundColor: `${primary}!important`
            }
          },
          containedSecondary: {
            backgroundColor: "#C54B8C",
            color: "#ffffff",
            "&:active": {
              backgroundColor: "#C54B8C",
              color: "#ffffff"
            },
            "&:hover": {
              borderColor: "#C54B8C",
              backgroundColor: "#c72b7e",
              color: "#ffffff"
            }
          }
        }
      },
      PrivateNotchedOutline: {
        borderColor: `${primary}`,
        borderWidth: "1px",
        root: {
          borderColor: `${primary}`,
          borderWidth: "1px"
        }
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-input": {
              padding: "12.5px 14px"
            },
            "&.MuiOutlinedInput-notchedOutline": {
              borderColor: "#BDBDBD"
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderWidth: "1px",
              borderColor: `${primary}`,
              borderRadius: "2px"
            },
            "& .Mui-error .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #EB5757",
              borderRadius: "2px"
            },
            "&:not(.Mui-error)": {
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: `${primary}`
              }
            }
          }
        }
      },
      MuiFilledInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused:before": {
              borderColor: `${primary} !important`,
              height: "48px !important"
            },
            "&.Mui-focused:after": {
              borderColor: `${primary} !important`,
              height: "48px !important"
            }
          }
        }
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: `${primary}`
          },
          colorPrimary: {
            color: `${primary}`
          },
          colorSecondary: {
            color: "#9E9E9E"
          }
        }
      }, 
      MuiBadge: {
        styleOverrides: {
          primary: {
            light: primary,
            main: primary,
            dark: primary,
            contrastText: primary
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            "&:hover": {
              color: primary
            }
          }
        }
      },
      MuiAvatar: {
        styleOverrides: {
          circle: {
            backgroundColor: "rgba(23, 67, 151, 0.08)",
            color: primary
          },
          rounded: {
            backgroundColor: "rgba(23, 67, 151, 0.08)",
            color: primary
          }
        }
      },
      MuiListItemText:{
        styleOverrides: {
          root: { 
            color: primary 
          }
        }
      }
    }
  };
};

export {
  getTheme
};