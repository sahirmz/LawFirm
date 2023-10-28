import React, { Component } from "react";
import HeroSection from "./components/HeroSection/HeroSection";
import styles from "./App.css";
import Introduction from "./components/Introduction/Introduction";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import PracticeArea from "./components/PracticeArea/PracticeArea";
import Footer from "./components/Footer/Footer";
import Clients from "./components/Clients/Clients";
import Team from "./components/Team/Team";
import Faqs from "./components/Faqs/Faqs";
import Subscribe from "./components/Subscribe/Subscribe";

export default class App extends Component {
  render() {
    return (
      <>
        <HeroSection />
        <div className={styles.SectionWrapper}>
          <Introduction />
          <WhyChooseUs />
          <PracticeArea />
          <Clients />
          <Team />
          <Faqs />
          <Subscribe />
          <Footer />
        </div>
      </>
    );
  }
}
