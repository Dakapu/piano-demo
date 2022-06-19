import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "bootstrap/dist/css/bootstrap.css";
import "./scss/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="container-fluid p-0 m-0">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

serviceWorkerRegistration.register();
