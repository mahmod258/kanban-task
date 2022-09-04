import "./style/app.css";
import Main from "./Components/Main/Main";
import Sidebar from "./Components/Sidebar";
import React, { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts/dist/esm/useMediaQuery";
import Data from "./data.json";

function App() {
  const mediaQuery = useMediaQuery("(max-width: 860px)");
  const [sidebar, setSidebar] = useState(true);
  const [transform, setTransform] = useState(0);
  const [mainData, setMainData] = useState({});
  const openSidebar = () => {
    setTimeout(() => setSidebar(true), 0);
    setTransform(0);
  };
  const closeSidebar = () => {
    setTransform("-300px");
    if (mediaQuery) {
      setSidebar(false);
    } else {
      setTimeout(() => {
        setSidebar(false);
      }, 500);
    }
  };
  useEffect(() => {
    if (mediaQuery) {
      setSidebar(false);
    } else {
      setSidebar(true);
      setTransform(0);
    }
  }, [mediaQuery]);
  useEffect(() => {
    if (localStorage.mainData === undefined) {
      localStorage.mainData = JSON.stringify(Data.boards);
      setMainData(Data.boards);
    } else {
      setMainData(JSON.parse(localStorage.mainData));
    }
  }, []);
  return (
    <div className="App">
      <Sidebar
        sidebar={sidebar}
        mediaQuery={mediaQuery}
        closeSidebar={closeSidebar}
        openSidebar={openSidebar}
        transform={transform}
      />
      <Main
        mediaQuery={mediaQuery}
        margin={transform === "-300px" ? 0 : "300px"}
        sidebar={sidebar}
        openSidebar={openSidebar}
        closeSidebar={closeSidebar}
        mainData={mainData}
      />
    </div>
  );
}

export default App;
