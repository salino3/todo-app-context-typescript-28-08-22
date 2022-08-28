//import { useContext } from "react"
//import { TodoContext } from "../context/TodoContext"
import { useTodos } from "../hooks/useTodos";
import TodoItem from "./TodoItem";

const TodoList = () => {

//   const {todoState} = useContext(TodoContext)
//  const { todos} = todoState;
//* otra opción desde el hook..
const { todos } = useTodos()

  return (

    <ul>
     {
       todos.map((todo: any) => (
          <TodoItem key={todo.id} todox={todo} />
       ))
     }
    
    
    </ul>
  )
}

export default TodoList