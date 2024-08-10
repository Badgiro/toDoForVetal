import React from "react";
import styles from "./list.module.css";

const Item = ({ tasks }) => {
  return (
    <ul className={styles.list}>
      {tasks.map((task, index) => (
        <li className={styles.item} key={index}>
          {task}
        </li>
      ))}
    </ul>
  );
};

export default Item;
