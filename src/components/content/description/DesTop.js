import React from "react";
import styles from "./_desTop.module.scss";

const DesTop = () => {
  return (
    <div className={styles.desTop}>
      <div className={styles.desHeading}>
        <h1>Make</h1>
        <h1>remote work</h1>
      </div>
      <p className={styles.desParagraph}>
        Get your team in sync, no matter your location. Streamline
        processes,create team rituals, and watch productivity soar.
      </p>

      <button className={styles.desButton}>Learn more</button>
    </div>
  );
};
export default DesTop;
