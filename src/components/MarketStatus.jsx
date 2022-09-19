import React from "react";
import styles from "./CSS/MarketStatus.module.css";

const MarketStatus = () => {
  return (
    <div className={styles["market-status"]}>
      <div className={styles.container}>
        <h3>MARKET CAP</h3>
        <h3>$1.81T</h3>
      </div>
      <div className={styles.container}>
        <h3>EXCHANGE VOL</h3>
        <h3>$36.14B</h3>
      </div>
      <div className={styles.container}>
        <h3>ASSETS</h3>
        <h3>2295</h3>
      </div>
      <div className={styles.container}>
        <h3>EXCHANGES</h3>
        <h3>73</h3>
      </div>
      <div className={styles.container}>
        <h3>MARKETS</h3>
        <h3>13,965</h3>
      </div>
      <div className={styles.container}>
        <h3>BTC DOM INDEX</h3>
        <h3>31.4%</h3>
      </div>
    </div>
  );
};

export default MarketStatus;
