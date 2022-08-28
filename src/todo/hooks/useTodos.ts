import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

export const useTodos = () => {

const {todoState, toggleTodo} = useContext(TodoContext)
// const {todos} = todoState;

  return {
    ...todoState,
    todos: todoState.todos,
    // con '.length' final así renderiza un número en no un objeto -> (property) pendingTodos: Todos[]
    pendingTodos: todoState.todos.filter((todo) => !todo.completed).length,
    toggleTodo,
  };
}


