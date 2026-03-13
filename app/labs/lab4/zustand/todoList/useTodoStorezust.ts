import { create } from "zustand";
 
interface Todo {
  id: string;
  title: string;
}
 
interface TodoState {
  todos: Todo[];
  todo: { title: string; id?: string };
  addTodo: () => void;
  deleteTodo: (id: string) => void;
  updateTodo: () => void;
  setTodo: (todo: { title: string; id?: string }) => void;
}
 
export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
  addTodo: () => {
    const { todo, todos } = get();
    const newTodo = { ...todo, id: new Date().getTime().toString() };
    set({ todos: [...todos, newTodo], todo: { title: "" } });
  },
  deleteTodo: (id) =>
    set((state) => ({ todos: state.todos.filter((t) => t.id !== id) })),
  updateTodo: () => {
    const { todo, todos } = get();
    set({
      todos: todos.map((t) => (t.id === todo.id ? (todo as Todo) : t)),
      todo: { title: "" },
    });
  },
  setTodo: (todo) => set({ todo }),
}));