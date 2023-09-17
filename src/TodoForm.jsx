import { useState } from "react";

export default function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // 防止表單送出自動更新
    e.preventDefault();

    // 假如輸入框是空的內容，就不讓它加入待辦清單裡
    if (value === "") return;

    addTodo(value);

    // 清空輸入框資訊
    setValue("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Some Todo..."
        value={value}
        onChange={(e) => setValue(e.target.value)} // 只要輸入框有更動，就更新 state 狀態的 setValue()，抓取 e.target.value
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}
