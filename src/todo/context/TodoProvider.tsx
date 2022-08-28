import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducers";

const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [
    {
      id: "1",
      desc: "recolectar las piedras del infinito",
      completed: false,
    },
    {
      id: "2",
      desc: "las piedras del alma",
      completed: false,
    },
    {
      id: "3",
      desc: "las piedras del mar",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface Props {
  children: JSX.Element | JSX.Element[]
}


const TodoProvider = ({children}: Props) => {


  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

  const toggleTodo = (id: string) => {
    dispatch({type: 'toggleTodo', payload: {id} })
  }

  return (
    <>
      <TodoContext.Provider
//* todos los elementos del 'value' deben estar en el tipo del 'createContext'
        value={{
          todoState,
          toggleTodo,
        }}
      >
        {children}
      </TodoContext.Provider>
    </>
  );
}

export default TodoProvider