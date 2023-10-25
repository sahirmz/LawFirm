import React, { Component } from "react";
import styles from "./HeroSection.module.css";
import NavBar from "../NavBar/NavBar";
import EmailBar from "../EmailBar/EmailBar";
import Profile from "../Profile/Profile";

export default class HeroSection extends Component {
  render() {
    return (
      <section className={styles.MainSection}>
        <NavBar />
        <div className={styles.SectionWrapper}>
          <div className={styles.HeadingText}>
            <p className={styles.TypoText1}>You Don't have to</p>
            <p className={styles.TypoText2}>Fight them Alone.</p>
            <p className={styles.TypoPara}>
              Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
              curabitur sodales conubia ut inceptos faucibus himenaeos tortor
              eget, hac massa gravida arcu interdum proin curae.
            </p>
            <EmailBar />
          </div>
          <div className={styles.ProfileImg}>
            <Profile />
          </div>
        </div>
      </section>
    );
  }
}
