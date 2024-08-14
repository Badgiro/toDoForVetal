import React, { useState } from "react";

import styles from "./style.module.css";
import Button from "../button";
import DeleteButon from "./deleteItem/DeleteButon";

const { styleIsCompleted } = styles;

const ToDoItem = ({ title, text, id, completed, deleteTodo }) => {
  const [isCompleted, setIsCompleted] = useState(completed);

  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
  };
  return (
    <li className={isCompleted ? styleIsCompleted : null}>
      <h2>{title}</h2> <p>{text}</p>
      <DeleteButon onClick={() => deleteTodo(id)}>Удалить</DeleteButon>
      <Button onClick={toggleCompleted}>
        {isCompleted ? "Сделано" : "Не сделано"}
      </Button>
    </li>
  );
};

export default ToDoItem;
