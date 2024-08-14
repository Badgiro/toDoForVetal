import React from "react";
import styles from "./style.module.css";

const Input = ({ value, onChange, placeholder = "Введите текст" }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
