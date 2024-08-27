import { ToDoItem } from "./ToDoItem"

export const List = ({todos, onRemove, onComplete}) => {
    return <div>
        <h1>To Do List</h1>
        {
            todos.map(elm => <ToDoItem key={elm} 
                                        elm={elm}
                                        onRemove={onRemove} 
                                        onComplete={onComplete} 
                            />)
        }
    </div>
}