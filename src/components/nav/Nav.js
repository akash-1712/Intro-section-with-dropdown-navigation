import styles from "./_nav.module.scss";
import NavList from "./NavList";

const list1 = [
  { name: "features" },
  { name: "company" },
  { name: "careers" },
  { name: "about" },
];

const list2 = [{ name: "login" }, { name: "Register" }];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <NavList data={list1}></NavList>
      <NavList data={list2}></NavList>
    </nav>
  );
};

export default Nav;
