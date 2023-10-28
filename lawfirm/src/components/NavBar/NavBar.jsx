import React, { Component } from "react";
import styles from "./NavBar.module.css";
// import BrandLogo from "../../assets/BrandLogo.svg";
import Button from "../Button/Button";

export default class Navbar extends Component {
  render() {
    return (
      <nav className={styles.Navbar}>
        {/* <BrandLogo /> */}
        <div className={styles.NavText}>
          <p>Home</p>
          <p>Attorneys</p>
          <p>Practice Areas</p>
          <p>About Us</p>
        </div>
        <Button />
      </nav>
    );
  }
}
