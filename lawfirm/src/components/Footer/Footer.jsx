import React from "react";
import styles from "./Footer.module.css";
// import Logo from "../../assets/FooterLogo.svg"
import FooterImage from "../../assets/FooterImage.svg";

export default function Footer() {
  return (
    <div className={styles.FooterWrapper}>
      {/* <Logo /> */}
      <div className={styles.ContentWrapper}>
        <div className={styles.Menu}>
          <img src={FooterImage} alt="SocialImg" />
        </div>

        <div className={styles.PrivacyDetails}>
          <p>© 2023 Acme. All right reserved.</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
      </div>
    </div>
  );
}
