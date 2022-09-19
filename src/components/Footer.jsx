import React from "react";
import styles from "./CSS/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["flex-item"]}>
        <h4>COINCAP.IO</h4>
        <p>Methodology</p>
        <p>Support</p>
        <p>Our API</p>
        <p>Rate Comparison</p>
        <p>Carrers</p>
      </div>
      <div className={styles["flex-item"]}>
        <div className={styles["flex-item"]}>
          <h4>LEGALS</h4>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
        </div>
        <div className={styles["flex-item"]}>
          <h3>DISCLAIMBER</h3>
          <p>
            Neither ShapeShift AG nor CoinCap are in any way associated with
            CoinMarketCap, LLC or any of its goods and services.
          </p>
        </div>
      </div>
      <div className={styles["flex-item"]}>
        <h4>FOLLOW US</h4>
        <img
          src="https://e7.pngegg.com/pngimages/708/311/png-clipart-icon-logo-twitter-logo-twitter-logo-blue-social-media-thumbnail.png"
          className={styles.social}
        />
        <img
          src="https://i.pinimg.com/originals/d1/e0/6e/d1e06e9cc0b4c0880e99d7df775e5f7c.jpg"
          className={styles.social}
        />
      </div>
      <div className={styles["flex-item"]}>
        <h4>COINCAP APP AVAILABLE ON </h4>
        <img
          src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
          className={styles.available}
        />
      </div>
    </footer>
  );
};

export default Footer;
