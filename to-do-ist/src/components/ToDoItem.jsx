export const ToDoItem = ({elm, onRemove, onCompeleted, elmC}) => {
    return <>
        <div>
            <p>{elm}</p>
            <button onClick={() => onCompeleted(elm)}>complete</button>
            <button onClick={() => onRemove(elm)}>delete</button>
        </div>
        <div>
            <p>{elmC}</p>
            <button></button>
        </div>
    </>
}