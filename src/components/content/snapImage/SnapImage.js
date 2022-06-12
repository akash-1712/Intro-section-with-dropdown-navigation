import React from "react";
import styles from "./_snapImage.module.scss";
import snapImage from "../../../images/image-hero-desktop.png";

const SnapImage = () => {
  return (
    <div className={styles.snapImage}>
      <img src={snapImage} alt="hero-desktop" />
    </div>
  );
};

export default SnapImage;
