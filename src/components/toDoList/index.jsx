import React from "react";

import ToDoItem from "../toDoItem";

import styles from "./style.module.css";

const ToDoList = ({ todos, setTodos }) => {
  console.log(todos);

  const deleteTodo = (id) => {
    setTodos(todos.filter((task) => task[id] !== id));
  };
  return (
    <ol>
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          text={todo.text}
          completed={todo.completed}
          deleteTodo={deleteTodo}
        />
      ))}
    </ol>
  );
};

export default ToDoList;
