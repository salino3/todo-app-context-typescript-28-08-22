//import { useContext } from "react";
//import { TodoContext } from "../context/TodoContext";
import { useTodos } from "../hooks/useTodos";
import { Todos } from "../interfaces/interfaces"

interface TodoItemProps {
    todox: Todos
}


const TodoItem = ({todox}:TodoItemProps) => {

  // const { toggleTodo } = useContext(TodoContext);
//* otra opción desde el hook..
const {toggleTodo} = useTodos()

    const handleClick = () => {
        toggleTodo(todox.id)
        console.log("handleClick -> ", todox.desc);
    }


  return (
    <>
    <li 
    style={{cursor: 'pointer', 
    textDecoration: todox.completed ? 'line-through' : ''}}
    onClick={handleClick}>
        {todox.desc}
    </li>
    
    
    </>
  )
}

export default TodoItem