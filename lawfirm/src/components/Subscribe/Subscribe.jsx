import React from "react";
import styles from "./Subscribe.module.css";

export default function Subscribe() {
  return (
    <div className={styles.setionWrapper}>
      <div className={styles.innerContainer}>
        <h1 className={styles.HeadingText}>Subscribe Our Newsletter</h1>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            placeholder="Name:"
            className={styles.inputText}
          ></input>
          <input
            type="text"
            placeholder="Enter your Email:"
            className={styles.inputText}
          ></input>
          <button className={styles.SendBtn}>SEND</button>
        </div>
      </div>
    </div>
  );
}
