import Nav from "../nav/Nav";
import styles from "./_navBar.module.scss";
import snap from "../../images/logo.svg";
import menu from "../../images/icon-menu.svg";
import { useContext } from "react";
import AuthContext from "../store/Auth-context";

const NavBar = () => {
  const ctx = useContext(AuthContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src={snap} alt="snap" />
      </div>

      <div
        onClick={ctx.backDropHandler.bind(null, true)}
        className={styles.menu}
      >
        <img src={menu} alt="menu" />
      </div>

      <Nav></Nav>
    </header>
  );
};

export default NavBar;
