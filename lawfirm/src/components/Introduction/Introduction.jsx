import React from "react";
import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.IntroWrapper}>
      <div className={styles.Introduce}>
        <p className={styles.LeftText}>Let's Introduce Ourself</p>
      </div>
      <div className={styles.v1}></div>
      <div className={styles.Introduce}>
        <h2 className={styles.LawyerText}>Criminal Lawyer</h2>
        <p className={styles.RightText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exercitation.
        </p>
      </div>
    </div>
  );
}
