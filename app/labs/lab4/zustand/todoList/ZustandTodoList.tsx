"use client";
import React from "react";
import { useTodoStore } from "./useTodoStorezust";
 
function TodoForm() {
  const { todo, setTodo, addTodo, updateTodo } = useTodoStore((state) => state);
  return (
    <li className="list-group-item">
      <input
        className="form-control d-inline w-50 me-2"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        placeholder="New todo title"
      />
      <button
        className="btn btn-warning me-2"
        onClick={updateTodo}
        id="wd-update-todo-click">
        Update
      </button>
      <button
        className="btn btn-success"
        onClick={addTodo}
        id="wd-add-todo-click">
        Add
      </button>
    </li>
  );
}
 
function TodoItem({ todo }: { todo: { id: string; title: string } }) {
  const { deleteTodo, setTodo } = useTodoStore((state) => state);
  return (
    <li className="list-group-item d-flex align-items-center">
      <span className="me-auto">{todo.title}</span>
      <button
        className="btn btn-primary me-2"
        onClick={() => setTodo(todo)}
        id="wd-set-todo-click"
      >
        Edit
      </button>
      <button
        className="btn btn-danger"
        onClick={() => deleteTodo(todo.id)}
        id="wd-delete-todo-click"
      >
        Delete
      </button>
    </li>
  );
}
 
export default function ZustandTodoList() {
  const { todos } = useTodoStore((state) => state);
  return (
    <div id="wd-todo-list-zustand">
      <h2>Todo List</h2>
      <ul className="list-group">
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}