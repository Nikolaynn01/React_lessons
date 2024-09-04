import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List"
import { FilterToDo } from "./FilterToDo";

export const ToDoList = () => {

    const [todos, setToDos] = useState([
        {id : 101, text : "Go for a wolk", completed : true},
    ]);

    const [currentFilter, setCurrentFilter] = useState("all")

    const handleAdd = text => {
        setToDos([...todos, {text, completed : false, id : Date.now()}])
    }
    const handleUpdate = id => {
        setToDos(todos.map(todo => 
            todo.id != id ? todo : {...todo, completed : !todo.completed}
        ))
    }


    return <>

        <AddToDo
            onAdd = {handleAdd}
        />
        
        <FilterToDo
            currentFilter = {currentFilter}
            onSet = {setCurrentFilter}
        />

        <List
            currentFilter = {currentFilter}
            todos = {todos}
            onUpdate = {handleUpdate}
        />
    </>
}