import React from "react";
import styles from "./Profile.module.css";
import ProfileImage from "../../assets/ProfileImage-1.png";

export default function Profile() {
  return (
    <img src={ProfileImage} alt="ProfileImg" className={styles.ProfileImg} />
  );
}