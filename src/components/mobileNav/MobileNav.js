import NavList from "../nav/NavList";
import styles from "./_mobileNav.module.scss";
import logo from "../../images/icon-close-menu.svg";
import { useContext } from "react";
import AuthContext from "../store/Auth-context";

const list1 = [
  { name: "features" },
  { name: "company" },
  { name: "careers" },
  { name: "about" },
];

const list2 = [{ name: "login" }, { name: "Register" }];

const MobileNav = () => {
  const ctx = useContext(AuthContext);
  const classes = `${styles.mobile_nav} ${ctx.backDrop ? styles.open : ""}`;
  return (
    <nav className={classes}>
      <div className={styles.logo}>
        <img
          onClick={() => {
            ctx.backDropHandler(false);
          }}
          src={logo}
          alt="icon-closed"
        />
      </div>
      <NavList className={styles.navLeft} data={list1}></NavList>
      <NavList className={styles.navRight} data={list2}></NavList>
    </nav>
  );
};

export default MobileNav;
