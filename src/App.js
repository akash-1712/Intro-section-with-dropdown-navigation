import React, { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import BackDrop from "./components/backDrop/BackDrop";
import Content from "./components/content/Content";
import MobileNav from "./components/mobileNav/MobileNav";
import NavBar from "./components/navBar/NavBar";
import AuthContext from "./components/store/Auth-context";

function App() {
  const [backDrop, setBackDrop] = useState(false);

  const backDropHandler = (val) => {
    setBackDrop(val);
  };

  return (
    <Fragment>
      <AuthContext.Provider value={{ backDrop, backDropHandler }}>
        {ReactDOM.createPortal(
          <BackDrop></BackDrop>,
          document.getElementById("modal")
        )}
        <NavBar></NavBar>
        <MobileNav></MobileNav>
      </AuthContext.Provider>
      <Content></Content>
    </Fragment>
  );
}

export default App;
