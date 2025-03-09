import React, { useEffect, useState } from "react";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import NavigationComponent from "./routes/NavigationComponent/NavigationComponent";

const App = () => {

  return (
    <React.Fragment>
      <NavBarComponent/>
      <NavigationComponent/>
    </React.Fragment>
  );
};

export default App;