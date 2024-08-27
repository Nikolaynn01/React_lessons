export const ToDoItem = ({elm, onRemove, onComlete}) => {
    return <div>
        <p>{elm}</p>
        <button>complete</button>
        <button onClick={() => onRemove(elm)}>delete</button>
    </div>
}