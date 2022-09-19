import React from "react";
import styles from "./CSS/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <p>Coins</p>
        <p>Exchanges</p>
        <p>Swap</p>
      </div>
      <div>
        <img
          className={styles["brand-logo"]}
          src="https://coincap.io/static/logos/black.svg"
          alt="Coincap Website logo"
        />
      </div>
      <div className={styles.actions}>
        <img
          src="https://www.iconpacks.net/icons/2/free-settings-icon-3110-thumb.png"
          className="img"
        />
        <img
          src="https://i.pinimg.com/736x/b9/67/82/b96782d0ab0ea492dabcf4a0f00698d2.jpg"
          className="img"
        />
        <button className={styles.btn}>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Navbar;
