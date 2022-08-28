import {useTodos} from '../hooks/useTodos';

const Title = () => {

    const {pendingTodos} = useTodos()
  return (
    <>
    <h1>Todos: {pendingTodos}</h1>
    <p>clicar para subrayar o quitar el subrayado a la tarea</p>
    </>
  )
}

export default Title