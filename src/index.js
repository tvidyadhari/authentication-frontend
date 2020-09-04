import React from "react";
import ReactDOM from "react-dom";
import "font-awesome/css/font-awesome.min.css";
import "bulma/css/bulma.css";
import "react-toastify/dist/ReactToastify.css";

import "./styles.css";

import App from "./containers/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
