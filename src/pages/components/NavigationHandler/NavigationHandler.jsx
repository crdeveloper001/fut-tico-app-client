// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { PublicNavigation } from "../PublicNavigation/PublicNavigation";

// eslint-disable-next-line no-unused-vars
export const NavigationHandler = (client_Navigation, administrator_Navigation, general_Navigation) => {
  const [generalNavigation, SetGeneralNavigation] = useState(true);
  const ShowOrHideCurrentNavigation = () => {
  }

  useEffect(() => {
    SetGeneralNavigation(true);
    ShowOrHideCurrentNavigation();
   
  }, [])

  return (

    <section>
      {!generalNavigation ? <PublicNavigation /> : ""}

    </section>

  );
};

