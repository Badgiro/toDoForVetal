import React, { useState } from "react";
import Item from "./components/item/Items";
import InputAndButtons from "./components/input/InputAndButtons";
import styles from "./app.module.css";
import ToDoList from "./components/toDoList";

const todosList = [
  {
    id: 1,
    title: "play chess",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et turpis ac justo tristique lobort",
    completed: true,
  },
  {
    id: 2,
    title: "play chess 2",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et turpis ac justo tristique lobort",
    completed: false,
  },
];

function App() {
  const [tasks, setTasks] = useState(todosList);
  const [targetTask, setTargetTask] = useState("");

  const addTask = () => {
    setTasks([...tasks, targetTask]);
  };
  console.log(tasks);

  return (
    <div className={styles.App}>
      <InputAndButtons
        setTargetTask={setTargetTask}
        addTask={addTask}
        targetTask={targetTask}
        setTasks={setTasks}
      />
      <ToDoList todos={tasks} />
    </div>
  );
}

export default App;
