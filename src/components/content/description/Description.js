import React from "react";
import DesBottom from "./DesBottom";
import DesTop from "./DesTop";
import styles from "./_description.module.scss";

const Description = () => {
  return (
    <div className={styles.description}>
      <DesTop></DesTop>
      <DesBottom></DesBottom>
    </div>
  );
};

export default Description;
