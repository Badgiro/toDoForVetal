import React from "react";

import styles from "./style.module.css";

const { isCompleted } = styles;

const ToDoItem = ({ title, text, id, completed }) => {
  return (
    <li className={completed ? isCompleted : null}>
      <h2>{title}</h2> <p>{text}</p>{" "}
    </li>
  );
};

export default ToDoItem;
