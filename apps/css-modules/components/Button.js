import React from "react";
import styles from "./styles/Button.module.css";

const Button = ({ children, onClick }) => (
  <button className={styles.container} onClick={onClick}>
    {children}
  </button>
);

export default Button;
