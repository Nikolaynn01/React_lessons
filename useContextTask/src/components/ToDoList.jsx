import { AddToDo } from "./AddToDo"
import { FilterToDo } from "./FilterToDo"
import { List } from "./List"
import {UserContext} from "../context.js"
import { useState } from "react"

export const ToDoList = () => {

    const [todos, setTodos] = useState([
        {id : 101, text : "Go for a wolk", completed : true},
    ]);

    const [currentFilter, setCurrentFilter] = useState("all");

    const handleAdd = text => {
        setTodos([...todos, {text, completed : false, id : Date.now()}]);
    }

    const handleRemove = todo => {
        let index = todos.indexOf(todo);
        const temp = todos.filter((empty, i) => i != index);
        setTodos(temp);
    }
    

    const handleUpdate = id => {
        setTodos(todos.map(todo => 
            todo.id != id ? todo : {...todo, completed : !todo.completed}
        ))
    }

    return <>
        <UserContext.Provider value={{todos, currentFilter, onSet : setCurrentFilter, onAdd : handleAdd, onUpdate : handleUpdate, onRemove : handleRemove}}>
            <AddToDo/>
            <FilterToDo/>
            <List/>
        </UserContext.Provider>
    </>
}