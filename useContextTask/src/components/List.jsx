import { useContext } from "react"
import {UserContext} from "../context.js"
import { ToDoItem } from "./ToDoItem.jsx";

export const List = () => {

    const {todos} = useContext(UserContext);
    const {onUpdate} = useContext(UserContext);
    const {currentFilter} = useContext(UserContext);
    const {onRemove} = useContext(UserContext);

    let filtered = todos;

    if (currentFilter == "active") {
        filtered = todos.filter(a => !a.completed)
    } else if (currentFilter == "completed") {
        filtered = todos.filter(a => a.completed)
    }

    return <>
        <p>showing: <strong>{currentFilter}</strong></p>

    {
        filtered.map(todo => <ToDoItem 
                        key={todo.id} 
                        todo={todo} 
                        onUpdate={onUpdate}
                        onRemove={onRemove}
                    />)
    }
    </>
}