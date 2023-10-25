import React from "react";
import styles from "./EmailBar.module.css";
import Chip from "@mui/material/Chip";
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';

export default function EmailBar() {
  return (
    <div className={styles.EmailWrapper}>
      <EmailTwoToneIcon className={styles.emailicon}/>
      <input
        type="text"
        placeholder="Enter your eamil address"
        className={styles.Emailbar}
      />
      <Chip className={styles.Bar} label="Let's Talk!" />
    </div>
  );
}
