import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navigation } from "./pages/components/Navigation/Navigation.component.jsx";
import { RoutesConfig } from "./pages/routes/Routes.config.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  
    <Navigation />
    <RoutesConfig />


  </StrictMode>
);
