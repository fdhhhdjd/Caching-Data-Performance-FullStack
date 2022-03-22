import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContextProvider } from "./Context/store";
axios.defaults.baseURL = "https://cachepeformence.herokuapp.com/api";
ReactDOM.render(
  // <React.StrictMode>
  <BrowserRouter>
    <ContextProvider>
      <App />
      <ToastContainer />
    </ContextProvider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);
