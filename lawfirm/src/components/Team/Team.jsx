import React from "react";
import styles from "./Team.module.css";
import Danial from "../../assets/DanialDef.svg";
import Sanfole from "../../assets/Sanfole.svg";
import Cesforila from "../../assets/Cesforila.svg";
import Colleen from "../../assets/Colleen.svg";
import Haldone from "../../assets/Haldone.svg";
import NikJeo from "../../assets/NikJeo.svg";

export default function Team() {
  return (
    <div className={styles.TeamSectionWrapper}>
      <div className={styles.Title}>
        <p>Our Team</p>
      </div>

      <div className={styles.CardWrapper}>
        <div className={styles.TeamContent}>
          <img src={Danial} alt="DanialImg" className={styles.img} />

          <div className={styles.TeamText}>
            <h3 className={styles.NameText}>Danial Def</h3>
            <p className={styles.CaseText}>301 Cases</p>
          </div>
        </div>

        <div className={styles.TeamContent2}>
          <img src={Sanfole} alt="SanfoleImg" className={styles.img} />

          <div className={styles.TeamText2}>
            <h3 className={styles.NameText2}>Sanfole</h3>
            <p className={styles.CaseText2}>850 Cases</p>
          </div>
        </div>

        <div className={styles.TeamContent}>
          <img src={Cesforila} alt="CesforliaImg" className={styles.img} />

          <div className={styles.TeamText}>
            <h3 className={styles.NameText}>Cesforlia</h3>
            <p className={styles.CaseText}>470 Cases</p>
          </div>
        </div>
      </div>

      <div className={styles.CardWrapper}>
        <div className={styles.TeamContent}>
          <img src={Colleen} alt="ColleenImg" className={styles.img} />

          <div className={styles.TeamText}>
            <h3 className={styles.NameText}>Colleen</h3>
            <p className={styles.CaseText}>180 Cases</p>
          </div>
        </div>

        <div className={styles.TeamContent}>
          <img src={Haldone} alt="SanfoleImg" className={styles.img} />

          <div className={styles.TeamText}>
            <h3 className={styles.NameText}>Haldone</h3>
            <p className={styles.CaseText}>212 Cases</p>
          </div>
        </div>

        <div className={styles.TeamContent}>
          <img src={NikJeo} alt="NikJeoimg" className={styles.img} />

          <div className={styles.TeamText}>
            <h3 className={styles.NameText}>Nik Jeo</h3>
            <p className={styles.CaseText}>350 Cases</p>
          </div>
        </div>
      </div>
    </div>
  );
}
