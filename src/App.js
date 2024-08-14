import React, { useState } from "react";

import ToDoList from "./components/toDoList";
import Form from "./components/form";

import styles from "./app.module.css";
import Empty from "./components/empty";

function App() {
  const [tasks, setTasks] = useState([]);
  const [targetTask, setTargetTask] = useState("");

  return (
    <div className={styles.App}>
      <Form setTasks={setTasks} />
      {tasks.length !== 0 ? (
        <ToDoList setTodos={setTasks} todos={tasks} />
      ) : (
        <Empty />
      )}
    </div>
  );
}

export default App;
