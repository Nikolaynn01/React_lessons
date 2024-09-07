import { useEffect, useState } from "react"
import { AddTask } from "./AddTask"
import { Stats } from "./Stats"
import { TaskList } from "./TaskList"
import axios from "axios"

export const Dashboard = () => {
    
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios
        .get("http://localhost:3004/tasks")
        .then(response => {
            setTasks(response.data);
        })
    }, []);

    return <div className="dashboard">
        <div className="row">
            <TaskList
                tasks = {tasks}
            />
            <AddTask/>
        </div>
        <Stats/>
    </div>
}