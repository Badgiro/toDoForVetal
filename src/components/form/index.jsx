import React, { useState } from "react";

import Input from "../input";
import Button from "../button";
import { v4 as uuid } from "uuid";

const Form = ({ setTasks }) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState({
    title: null,
    text: null,
  });

  const onChangeTitle = (e) => {
    setTitle(e);
  };

  const onChangeText = (e) => {
    setText(e);
  };
  const onClick = () => {
    const newError = { ...error };

    const newTodo = {
      id: uuid(),
      title,
      text,
    };
    if (title.trim().length < 2) {
      newError["title"] = "Введи заголовок миниму 3 буквы";
    } else {
      newError["title"] = null;
    }

    if (text.trim().length < 4) {
      newError["text"] = "Введи заголовок миниму 5 буквы";
    } else {
      newError["text"] = null;
    }
    setError(newError);
    console.log(newError);

    console.log(error);

    setTasks((prev) => [...prev, newTodo]);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        placeholder="Заголовок туду"
        value={title}
        onChange={onChangeTitle}
      />
      <br />
      <Input placeholder="Текст туду" value={text} onChange={onChangeText} />
      <br />

      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default Form;
