"use client"
import React, { createContext, useContext, useState } from "react";
 
interface Todo {
  id: string;
  title: string;
}
 
interface TodosContextType {
  todos: Todo[];
  todo: { title: string; id?: string };
  addTodo: () => void;
  deleteTodo: (id: string) => void;
  updateTodo: () => void;
  setTodo: (todo: { title: string; id?: string }) => void;
}
 
const TodosContext = createContext<TodosContextType>({
  todos: [],
  todo: { title: "" },
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
  setTodo: () => {},
});
 
export const TodosProvider = ({ children }: { children: React.ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ]);
  const [todo, setTodo] = useState<{ title: string; id?: string }>({
    title: "Learn Mongo",
  });
 
  const addTodo = () => {
    const newTodo = { ...todo, id: new Date().getTime().toString() };
    setTodos([...todos, newTodo]);
    setTodo({ title: "" });
  };
 
  const deleteTodo = (id: string) => {
    setTodos(todos.filter((t) => t.id !== id));
  };
 
  const updateTodo = () => {
    setTodos(todos.map((t) => (t.id === todo.id ? (todo as Todo) : t)));
    setTodo({ title: "" });
  };
 
  return (
    <TodosContext.Provider
      value={{ todos, todo, addTodo, deleteTodo, updateTodo, setTodo }}
    >
      {children}
    </TodosContext.Provider>
  );
};
 
export const useTodos = () => useContext(TodosContext);
export default TodosContext;
 