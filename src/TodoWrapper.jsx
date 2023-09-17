import { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForm";
uuidv4();

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((currentTodos) => [
      ...currentTodos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    // console.log(todos);
  };

  const toggleComplete = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (task, id) => {
    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done!!</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            task={todo}
            key={index}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
}
