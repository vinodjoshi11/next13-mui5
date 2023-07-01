import PropTypes from "prop-types";
import * as React from "react";
import { Provider } from "react-redux";
import { wrapper } from "redux/store";
import CssBaseline from "@mui/material/CssBaseline"; 
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState,Fragment } from "react";  
import  { getTheme } from "../app/config/theme"; 
import Router from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import "/public/css/index.css"; 
import "/public/css/common.css";   
import { ToastContainer } from "react-toastify"; 
// Progress bar config
NProgress.configure({ showSpinner: false, easing: "ease-in", speed: 800 });
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps}) { 
  const { store ,props} = wrapper.useWrappedStore(pageProps);   
  const [color,setColor]=useState("#5048c5"); 
  const theme = useMemo(
    () =>
      createTheme({  
        ...getTheme(color)
      }),
    [color]
  ); 
  const Layout = Component.Layout ? Component.Layout : Fragment;
  return ( <Provider store={store}>
    <ThemeProvider theme={theme}> 
      <Layout> 
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>  
      <ToastContainer
        position="top-center"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </ThemeProvider>  
  </Provider>
  );
}
export default MyApp; 
MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}; 
