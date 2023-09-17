import { useState } from "react";

export default function EditTodoForm({ editTodo, task }) {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    // 防止表單送出自動更新
    e.preventDefault();

    editTodo(value, task.id);

    // 清空輸入框資訊
    setValue("");
  };

  return (
    <form className="EditTodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)} // 只要輸入框有更動，就更新 state 狀態的 setValue()，抓取 e.target.value
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
}
