import React from "react";
import styles from "./style.module.css";

const DeleteButon = ({ children, onClick }) => {
  return (
    <button className={styles.deleteButton} onClick={onClick}>
      {children}
    </button>
  );
};

export default DeleteButon;
