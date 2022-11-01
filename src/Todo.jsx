import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [userInput, setUserInput] = useState("");
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInput("");
  };

  const todos = useSelector((state) => state);

  const addTask = () => {
    dispatch({
      type: "addTask",
      payload: {
        id: Math.random().toString(36).substr(2, 9),
        text: userInput,
        done: check,
      },
    });
  };

  const removeAdd = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  return (
    <div>
      <div>
        <div></div>
        <form onClick={handleSubmit} className="form">
          <input
            value={userInput}
            onChange={(e) => setUserInput(e.currentTarget.value)}
            type="text"
            placeholder="Введите текст"
          />
          <button className="addBtn" onClick={addTask}>
            Добавить
          </button>
        </form>
      </div>
      <ul>
        {todos.map((item) => {
          return (
            <div key={item.id} className="todoItem">
              <li>{item.text}</li>
              <button className="removeBtn" onClick={() => removeAdd(item.id)}>
                Удалить
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
