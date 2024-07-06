import React, { Suspense } from "react";
import { ToastContainer, Slide } from "react-toastify";
import { HashRouter } from "react-router-dom";
import AppRoutes from "./router/AppRoutes";

export const toastErrorConfig = {
  position: "top-center",
  autoClose: 2000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  theme: "colored",
  newestOnTop: false,
  rtl: false,
  pauseOnFocusLoss: true,
  transition: Slide,
  hideProgressBar: true,
};

const App = () => {
  return(
   <HashRouter>
    <AppRoutes />
    <ToastContainer {...toastErrorConfig} />
   </HashRouter>
  )
}

export default App;
