export const ToDoItem = ({todo, onUpdate, onRemove}) => {
    return <div className={"todo " + (todo.completed? "done" : "") }>
        <p>{todo.text}</p>
        <button onClick={() => onRemove(todo)}>DELETE</button>
        <button onClick={() => onUpdate(todo.id)}>{todo.completed ? "CANCEL" : "COMPLETE"}</button>
    </div>
}