// eslint-disable-next-line no-unused-vars
import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavigationHandler } from "./pages/components/NavigationHandler/NavigationHandler.jsx";
import { RoutesConfig } from "./pages/routes/Routes.config.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <NavigationHandler />
    <RoutesConfig />


  </StrictMode>
);
