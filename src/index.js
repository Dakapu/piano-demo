import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="w-full h-screen bg-gradient-to-br from-slate-900 to-teal-500 ">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

serviceWorkerRegistration.register();
