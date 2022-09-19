import React, { useEffect } from "react";
import styles from "./CSS/TableRows.module.css";
import { useState } from "react";
const TableRows = (props) => {
  const name = () => {
    return props.name[0].toUpperCase() + props.name.slice(1);
  };
  return (
    <tr className={styles.tr}>
      <th scope="row" className={styles.rank}>
        {props.rank}
      </th>
      <td className={props.name}>
        <p>{name()}</p>
        <img
          className={styles["symbol-img"]}
          src={`https://assets.coincap.io/assets/icons/${props.symbol.toLowerCase()}@2x.png`}
          alt=""
        />
      </td>
      <td className={styles.data}>{parseFloat(props.price).toFixed(2)}</td>
      <td className={styles.data}>{parseFloat(props.marketCap).toFixed(2)}</td>
      <td className={styles.data}>{parseFloat(props.vwap).toFixed(2)}</td>
      <td className={styles.data}>{parseFloat(props.supply).toFixed(2)}</td>
      <td className={styles.data}>{parseFloat(props.volume).toFixed(2)}</td>
      <td className={styles.data}>{parseFloat(props.change).toFixed(2)}</td>
    </tr>
  );
};

export default TableRows;
