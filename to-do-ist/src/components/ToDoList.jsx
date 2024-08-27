import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { useState } from "react"

export const ToDoList = () => {
    const [todos, setTodos] = useState([]);

    const addToDo = value => {
        setTodos([...todos, value])
    }

    const removeToDo = elm => {
        let index = todos.indexOf(elm);
        const temp = todos.filter((empty, i) => i != index);
        setTodos(temp);
    }

    const completeTask = task => {

    }

    const cancelComplete = task => {

    }

    return <div>
        <List
            todos = {todos}
            onRemove = {removeToDo}
            onComplete = {completeTask}
            onCancel = {cancelComplete} 
        />
        <AddToDo
            onAdd = {addToDo}
        />
    </div>
}