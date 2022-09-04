import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Boards from "../Boards/Boards";

const Main = ({
  mediaQuery,
  margin,
  sidebar,
  closeSidebar,
  openSidebar,
  mainData,
}) => {
  return (
    <main style={{ marginLeft: margin }}>
      <Navbar
        mediaQuery={mediaQuery}
        sidebar={sidebar}
        closeSidebar={closeSidebar}
        openSidebar={openSidebar}
      />
      <Boards />
    </main>
  );
};

export default Main;
