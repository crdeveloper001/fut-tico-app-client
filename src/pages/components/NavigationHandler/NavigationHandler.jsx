// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import { AdminNavigation } from "../AdminDashboard/AdminNavigation/AdminNavigation";
import { ClientNavigation } from "../ClientDashboard/ClientNavigation/ClientNavigation";
import { active_AdminNav, active_ClientNav, active_GeneralNav } from "../../store/actions/actions";
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";

// eslint-disable-next-line no-unused-vars
export const NavigationHandler = (client_Navigation, administrator_Navigation, general_Navigation) => {
  const [adminNavigation, SetAdminDash] = useState(false);
  const [clientNavigation, SetClientDash] = useState(false);
  const [generalNavigation, SetGeneralNavigation] = useState(true);

  const ShowOrHideCurrentNavigation = () => {
    const currentPayload = localStorage.getItem('payload');
    const parsedPayload = JSON.parse(currentPayload);

    if (parsedPayload == undefined) {
      SetGeneralNavigation(true);
      SetClientDash(false);
      SetAdminDash(false)
    } else if (parsedPayload != undefined) {

      switch (parsedPayload.userRol) {
        case "Client":
          SetGeneralNavigation(false);
          SetAdminDash(false);
          SetClientDash(true);
          this.forceUpdate();
          break;
        case "Administrator":
          SetGeneralNavigation(false);
          SetClientDash(false);
          SetAdminDash(true);
          this.forceUpdate();
          break;
        case null:
          SetGeneralNavigation(true);
          SetClientDash(false);
          SetAdminDash(false);
          this.forceUpdate();
          break;
      }
    }

  }

  useEffect(() => {
    ShowOrHideCurrentNavigation()
  }, [])

  return (

    <section>

      {adminNavigation ? <AdminNavigation /> : ""}
      {clientNavigation ? <ClientNavigation /> : ""}
      {generalNavigation ? <PublicNavigation /> : ""}

    </section>

  );
};

