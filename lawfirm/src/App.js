import React, { Component } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import styles from "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <div className={styles.SectionWrapper}>
          {/* <Introduction />
        <ChooseSection />
        <PracticeSection />
        <ClientSection />
        <Team />
        <Faq />
        <Subscribe />
        <Footer /> */}
        </div>
      </>
    );
  }
}
