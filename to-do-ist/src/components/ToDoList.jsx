import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { useState } from "react"

export const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [completed, setCompleted] = useState([]);


    const addToDo = value => {
        setTodos([...todos, value])
    }

    const removeToDo = elm => {
        let index = todos.indexOf(elm);
        const temp = todos.filter((empty, i) => i != index);
        setTodos(temp);
    }

    const addToComleted = elm => {
        setCompleted([...completed, elm]);
        removeToDo(elm);
    }
   

    return <div>
        <List
            todos = {todos}
            completed = {completed}
            onCompleted={addToComleted}
            onRemove = {removeToDo}
        />
        <AddToDo
            onAdd = {addToDo}
        />
    </div>
}