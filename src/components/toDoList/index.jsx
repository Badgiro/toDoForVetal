import React from "react";

import ToDoItem from "../toDoItem";

import styles from "./style.module.css";

const ToDoList = ({ todos }) => {
  console.log(todos);
  return (
    <ol>
      {todos.map((todo, index) => (
        <ToDoItem
          key={index}
          id={index}
          title={todo.title}
          text={todo.text}
          completed={todo.completed}
        />
      ))}
    </ol>
  );
};

export default ToDoList;
