import React from "react";
import styles from "./_desBottom.module.scss";
import databiz from "../../../images/client-databiz.svg";
import audio from "../../../images/client-audiophile.svg";
import meet from "../../../images/client-meet.svg";
import maker from "../../../images/client-maker.svg";

const DesBottom = () => {
  return (
    <div className={styles.desBottom}>
      <img src={databiz} alt="databiz" />
      <img src={audio} alt="audio" />
      <img src={meet} alt="meet" />
      <img src={maker} alt="maker" />
    </div>
  );
};

export default DesBottom;
