import { createContext } from "react";
import { TodoState } from "../interfaces/interfaces";

interface TodoContextProps {
  // el todoState es la variable dinámica del useReducer()
  todoState: TodoState;
  toggleTodo: (id: string) => void;
}


export const TodoContext = createContext<TodoContextProps>({} as TodoContextProps);