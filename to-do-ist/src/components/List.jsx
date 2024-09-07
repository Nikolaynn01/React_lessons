import { ToDoItem } from "./ToDoItem"

export const List = ({todos, completed, onCompleted, onRemove}) => {
    return <>
        <h1>To Do List</h1>
        {
            todos.map(elm => <ToDoItem key={elm} 
                                        elm={elm}
                                        onRemove={onRemove} 
                                        onCompeleted={onCompleted} 
                            />)
        }
        <h1>Comleted</h1>
        {
            completed.map(elmC => <ToDoItem key={elmC}
                                            elmC={elmC}
                                            onCompleted={onCompleted}
                                            />)
        }
    </>
}