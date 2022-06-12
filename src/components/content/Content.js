import React from "react";
import Description from "./description/Description";
import SnapImage from "./snapImage/SnapImage";
import styles from "./_content.module.scss";

const Content = (props) => {
  return (
    <section className={styles.content}>
      <Description></Description>
      <SnapImage></SnapImage>
    </section>
  );
};

export default Content;
