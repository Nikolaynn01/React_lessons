import { Task } from "./Task"

export const TaskList = ({tasks}) => {
    return <div>
        <p>TaskList</p>
        <div className="list">
        {
            tasks.map(task => 
                <Task key={task.id} task = {task} />
            )
        }
        </div>
    </div>
}