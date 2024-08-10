import React from "react";
import styles from "./style.module.css";

const InputAndButtons = ({ setTasks, addTask, targetTask, setTargetTask }) => {
  return (
    <div>
      <input
        className={styles.input}
        onChange={(e) => setTargetTask(e.target.value)}
        value={targetTask}
        type="text"
        placeholder="Введите текст задачи"
      />
      <div className={styles.buttons}>
        <button className={styles.addBtn} onClick={addTask}>
          Добавить
        </button>
        <button className={styles.removeBtn} onClick={() => setTasks([])}>
          Очистить список
        </button>
      </div>
    </div>
  );
};

export default InputAndButtons;
