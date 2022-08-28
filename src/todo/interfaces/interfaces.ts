
export interface Todos {
    id: string,
    desc: string,
    completed: boolean

}

export interface TodoState {
    todoCount: number,
    todos: Todos[],
    completed: number,
    pending: number
}


