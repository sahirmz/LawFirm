import React from "react";
import styles from "./Faqs.module.css";
import AccordianLogo1 from "../../assets/AccordianLogo1.svg"
 

export default function Faqs() {
  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.LeftSection}>
        <h1 className={styles.heading}>FAQ</h1>
        <p className={styles.Ptext}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.RightSection}>
        <h3 className={styles.RightHeading}>
          Do I need a personal injury report?
        </h3>
        <p className={styles.RightPText}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>
        <div className={styles.Hline}></div>
        <div className={styles.RightHeading}>
          <h3>How much is my case worth?</h3> <img src={AccordianLogo1} alt="" />
        </div>
        <div className={styles.Hline}></div>
        <div className={styles.RightHeading}>
          <h3>What should I do right after car accidect</h3>
          <img src={AccordianLogo1} alt="" />
        </div>
        <div className={styles.Hline}></div>
        <div className={styles.RightHeading}>
          <h3>How much is my case worth?</h3>
          <img src={AccordianLogo1} alt="" />
        </div>
      </div>
    </div>
  );
}
