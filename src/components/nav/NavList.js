import styles from "./_navlist.module.scss";
import up from "../../images/icon-arrow-up.svg";
import down from "../../images/icon-arrow-down.svg";
import { useState } from "react";
import NavDrop from "../navDrop/NavDrop";
import todo from "../../images/icon-todo.svg";
import calender from "../../images/icon-calendar.svg";
import rem from "../../images/icon-reminders.svg";
import plan from "../../images/icon-planning.svg";
import history from "../../images/clock-rotate-left-solid.svg";
import blog from "../../images/blog-solid.svg";
import team from "../../images/people-group-solid.svg";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

const list1 = [
  { name: "Todo List", icon: todo },
  { name: "Calender", icon: calender },
  { name: "Reminder", icon: rem },
  {
    name: "Planning",
    icon: plan,
  },
];

const list2 = [
  { name: "History", icon: history },
  { name: "Team", icon: team },
  { name: "Blog", icon: blog },
];

const NavList = (props) => {
  const [navIcon, setNavIcon] = useState({
    feat: down,
    comp: down,
  });

  const [navDrop, setNavDrop] = useState({
    feat: false,
    comp: false,
  });
  const onlyWidth = useWindowWidth();
  const navDropClasses1 = `${navDrop.feat ? styles.visible : styles.hidden}`;
  const navDropClasses2 = `${navDrop.comp ? styles.visible : styles.hidden}`;

  const iconHandler = (name) => {
    console.log(onlyWidth);
    if (name === "features") {
      if (navIcon.feat === down) {
        if (onlyWidth > 770) {
          setNavIcon((prev) => {
            return { ...prev, feat: up, comp: down };
          });
          setNavDrop({
            feat: false,
            comp: true,
          });
        }
        setNavDrop((prev) => {
          return { ...prev, comp: true };
        });
        setNavIcon((prev) => {
          return { ...prev, feat: up };
        });
      } else {
        if (onlyWidth > 770) {
          setNavDrop({
            feat: false,
            comp: false,
          });
          setNavIcon((prev) => {
            return { ...prev, feat: down };
          });
        }
        setNavDrop((prev) => {
          return { ...prev, comp: false };
        });
        setNavIcon((prev) => {
          return { ...prev, feat: down };
        });
      }
    } else {
      if (navIcon.comp === down) {
        if (onlyWidth > 770) {
          setNavDrop({
            feat: true,
            comp: false,
          });
          setNavIcon((prev) => {
            return { ...prev, comp: up, feat: down };
          });
        }
        setNavDrop((prev) => {
          return { ...prev, feat: true };
        });
        setNavIcon((prev) => {
          return { ...prev, comp: up };
        });
      } else {
        if (onlyWidth > 770) {
          setNavDrop({
            feat: false,
            comp: false,
          });
          setNavIcon((prev) => {
            return { ...prev, comp: down };
          });
        }
        setNavDrop((prev) => {
          return { ...prev, feat: false };
        });
        setNavIcon((prev) => {
          return { ...prev, comp: down };
        });
      }
    }
  };
  const classes = `${props.className} ${styles.nav_items}`;

  const lists = props.data.map((list) => {
    if (list.name === "Register") {
      return (
        <button key={list.name} className={`${classes} ${styles.nav_button}`}>
          {list.name}
        </button>
      );
    } else if (list.name === "features" || list.name === "company") {
      return (
        <div className={styles.nav_div} key={list.name}>
          <li
            onClick={iconHandler.bind(null, list.name)}
            key={list.name}
            className={`${classes} ${styles.nav_icons}`}
          >
            {list.name}
            <img
              src={`${list.name === "features" ? navIcon.feat : navIcon.comp}`}
              alt="up/down"
            />
          </li>

          {list.name === "features" ? (
            <NavDrop
              imgClass={styles.icons}
              className={navDropClasses2}
              data={list1}
            ></NavDrop>
          ) : (
            <NavDrop
              imgClass={styles.icons}
              className={navDropClasses1}
              data={list2}
            ></NavDrop>
          )}
        </div>
      );
    } else {
      return (
        <li key={list.name} className={classes}>
          {list.name}
        </li>
      );
    }
  });
  return <ul className={styles.nav_list}>{lists}</ul>;
};

export default NavList;
