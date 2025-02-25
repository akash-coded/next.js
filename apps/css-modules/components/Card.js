import React from "react";
import styles from "./styles/Card.module.css";

const Card = ({ children }) => (
  <div className={styles.container}>{children}</div>
);

export default Card;
