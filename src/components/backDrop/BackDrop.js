import React, { useContext } from "react";
import AuthContext from "../store/Auth-context";
import styles from "./_backDrop.module.scss";

const BackDrop = () => {
  const ctx = useContext(AuthContext);

  const classes = `${styles.backDrop} ${ctx.backDrop ? "" : styles.hidden}`;
  return (
    <div
      onClick={ctx.backDropHandler.bind(null, false)}
      className={classes}
    ></div>
  );
};

export default BackDrop;
