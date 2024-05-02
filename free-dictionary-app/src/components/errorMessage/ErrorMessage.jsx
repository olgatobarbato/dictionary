import React from "react";
import styles from "./index.module.scss";

const ErrorMessage = ({ message }) => {
  return <p className={styles.error}>{message}</p>;
};

export default ErrorMessage;
